#!/usr/bin/env bash
set -euo pipefail

# OLUK Checkpoint System: creates JSON snapshot of system health
# Usage: bash scripts/checkpoint.sh

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"
TS="$(date +%Y-%m-%dT%H:%M:%S%z)"
STAMP="$(date +%Y%m%d-%H%M%S)"
OUT_DIR="$ROOT_DIR/_BRAIN/checkpoints"
OUT_FILE="$OUT_DIR/checkpoint-$STAMP.json"
LOG_FILE="$ROOT_DIR/_BRAIN/logs/checkpoint.log"

mkdir -p "$OUT_DIR" "$ROOT_DIR/_BRAIN/logs"

# 1) Git info
BRANCH="$(git -C "$ROOT_DIR" rev-parse --abbrev-ref HEAD || echo "unknown")"
COMMIT="$(git -C "$ROOT_DIR" rev-parse HEAD || echo "unknown")"
GIT_STATUS="$(git -C "$ROOT_DIR" status --porcelain || true)"
CLEAN_REPO="true"
if [[ -n "$GIT_STATUS" ]]; then CLEAN_REPO="false"; fi

# 2) Skills inventory counts
SKILL_COUNT=$(find "$ROOT_DIR/_SKILLS" -maxdepth 2 -type f -name "[0-9][0-9]*-*.md" | wc -l | tr -d ' ')
DEPT_COUNTS=$(find "$ROOT_DIR/_SKILLS" -maxdepth 1 -type d -printf "%f\n" | while read -r d; do
  if [[ "$d" != "_SKILLS" ]]; then
    c=$(find "$ROOT_DIR/_SKILLS/$d" -maxdepth 1 -type f -name "[0-9][0-9]*-*.md" | wc -l | tr -d ' ')
    echo "$d:$c"
  fi
done | paste -sd "," -)

# 3) Run audit script
AUDIT_STATUS="healthy"
AUDIT_OUTPUT="$(bash "$ROOT_DIR/scripts/audit-skills.sh" 2>&1 || true)"
if bash "$ROOT_DIR/scripts/audit-skills.sh" >/dev/null 2>&1; then
  AUDIT_STATUS="healthy"
else
  AUDIT_STATUS="critical"
fi

# 4) Env variable checks (from .env.local or .env)
REQ_ENVS=(
  "ANTHROPIC_API_KEY"
  "NEXT_PUBLIC_SUPABASE_URL"
  "NEXT_PUBLIC_SUPABASE_ANON_KEY"
  "SUPABASE_SERVICE_ROLE_KEY"
  "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"
  "CLOUDINARY_API_KEY"
  "CLOUDINARY_API_SECRET"
)

ENV_FILE=""
if [[ -f "$ROOT_DIR/.env.local" ]]; then ENV_FILE="$ROOT_DIR/.env.local"; elif [[ -f "$ROOT_DIR/.env" ]]; then ENV_FILE="$ROOT_DIR/.env"; fi

MISSING_ENVS=()
PRESENT_ENVS=()
if [[ -n "$ENV_FILE" ]]; then
  for var in "${REQ_ENVS[@]}"; do
    if grep -q "^$var=" "$ENV_FILE"; then
      PRESENT_ENVS+=("$var")
    else
      MISSING_ENVS+=("$var")
    fi
  done
fi

# 5) API route check
API_COUNT=$(find "$ROOT_DIR/src/app/api" -type f -name "route.ts" 2>/dev/null | wc -l | tr -d ' ')
API_ROUTES=$(find "$ROOT_DIR/src/app/api" -type f -name "route.ts" 2>/dev/null | sed "s|$ROOT_DIR/||" | paste -sd "," -)

# 6) Build JSON (no jq)
cat > "$OUT_FILE" <<JSON
{
  "timestamp": "$TS",
  "branch": "$BRANCH",
  "commit": "$COMMIT",
  "cleanRepo": $CLEAN_REPO,
  "skills": {
    "count": $SKILL_COUNT,
    "departments": "$DEPT_COUNTS"
  },
  "audit": {
    "status": "$AUDIT_STATUS"
  },
  "env": {
    "file": "$(basename "$ENV_FILE")",
    "present": ["${PRESENT_ENVS[*]// /","}"],
    "missing": ["${MISSING_ENVS[*]// /","}"]
  },
  "api": {
    "count": $API_COUNT,
    "routes": "${API_ROUTES:-}"
  }
}
JSON

# 7) Log summary
SUMMARY="[$TS] branch=$BRANCH commit=${COMMIT:0:7} skills=$SKILL_COUNT audit=$AUDIT_STATUS api=$API_COUNT clean=$CLEAN_REPO"
echo "$SUMMARY" >> "$LOG_FILE"

echo "✅ Checkpoint written: $OUT_FILE"
echo "$SUMMARY"
