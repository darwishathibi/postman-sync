# postman-sync-action

GitHub Action wrapper for [`@postman-sync/cli`](../cli).

> 🚧 **Phase 1 placeholder.** Wired up in Phase 5.

## Usage (preview — Phase 5+)

\```yaml
- uses: darwishathibi/postman-sync@v1
  with:
    spec: ./openapi.yaml
    workspace-id: ${{ secrets.POSTMAN_WORKSPACE_ID }}
    api-key: ${{ secrets.POSTMAN_API_KEY }}
    apply: false
\```

See top-level [README](../../README.md) for the full project.
