# postman-sync

Smart 3-way merge for OpenAPI specs → Postman collections. Preserves Tests, Pre-request scripts, Saved Examples, body overrides, and folder reorganizations across syncs.

> 🚧 **Pre-release.** v0.1 in active development.

## Why?

Existing tools (including Postman's official `openapi-to-postman`) regenerate collections from scratch — destroying every manual artifact you added. `postman-sync` does a structural-vs-content 3-way merge: spec changes flow in, your work stays.

## Status

See [`docs/design/2026-04-28-postman-sync-design.md`](./docs/design/2026-04-28-postman-sync-design.md) for the architecture and [`phases.md`](./phases.md) for the build roadmap.

## License

MIT — see [LICENSE](./LICENSE).