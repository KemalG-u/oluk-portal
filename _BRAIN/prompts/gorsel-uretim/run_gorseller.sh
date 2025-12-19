#!/bin/bash
cd /workspaces/oluk-portal/_BRAIN/prompts/gorsel-uretim
export GOOGLE_APPLICATION_CREDENTIALS="service-account.json"
python3 oluk_vertex_ai_gorseller.py
