#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"
HOOK_DIR="$ROOT_DIR/.git/hooks"
mkdir -p "$HOOK_DIR"
cat > "$HOOK_DIR/pre-commit" <<'HOOK'
#!/usr/bin/env bash
# OLUK pre-commit: run skill audit and checkpoint
ROOT_DIR="$(git rev-parse --show-toplevel)"

echo "[OLUK] Running audit-skills.sh..."
bash "$ROOT_DIR/scripts/audit-skills.sh"
STATUS=$?
if [[ $STATUS -ne 0 ]]; then
  echo "[OLUK] ❌ Audit failed. Fix issues before committing."
  exit 1
fi

echo "[OLUK] Creating checkpoint snapshot..."
bash "$ROOT_DIR/scripts/checkpoint.sh" >/dev/null 2>&1 || true

echo "[OLUK] ✅ Audit passed. Proceeding with commit."
exit 0
HOOK
chmod +x "$HOOK_DIR/pre-commit"

echo "✅ Git pre-commit hook installed."
echo "It will block commits on audit failures and create checkpoints."
