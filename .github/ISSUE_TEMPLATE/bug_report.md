---
name: Bug report
about: Report a merge bug, crash, or unexpected output
title: '[bug] '
labels: bug
---

## Describe the bug

A clear, concise description of what went wrong.

## Reproduction

**Before/after spec required for merge bugs.** Without these, we can't add a regression fixture and the bug will likely recur.

1. Spec before sync: (attach `before.yaml` or paste minimal repro)
2. Spec after sync: (attach `after.yaml`)
3. Postman collection state: (export the `_archived` if relevant)
4. Command run: `postman-sync ...`
5. Expected output:
6. Actual output:

## Environment

- `postman-sync` version: (run `postman-sync --version`)
- Node version: (run `node --version`)
- OS:
- Postman API key tier: (free / paid)

## Logs

Re-run with `--debug` and paste relevant output (redact API keys).