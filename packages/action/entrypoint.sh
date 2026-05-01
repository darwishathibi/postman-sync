#!/bin/sh
set -e

echo "postman-sync-action — Phase 1 placeholder"
echo "Inputs received:"
env | grep -E '^INPUT_' || echo "(none)"
exit 0