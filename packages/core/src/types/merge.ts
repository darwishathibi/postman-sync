import type { NormalizedEndpoint, Schema } from "./openapi.ts";
import type { PostmanCollection, PostmanRequestItem } from "./postman.ts";
import type { PostmanSyncState } from "./state.ts";

export interface MergeResult {
  merged: PostmanCollection;
  conflicts: ConflictReport;
  newState: PostmanSyncState;
}

export interface MergeOptions {
  // Inject "now" for deterministic tests. Defaults to () => new Date().
  now?: () => Date;
  // Fail-loud mode for `--strict`: caller observes via conflicts.requiresDecision.length, not a thrown error.
  // (core never throws on conflicts; CLI decides exit code.)
  strict?: boolean;
}

export type ClassifyKind =
  | 'spec-added' // ✗/✓/✗
  | 'persisting' // ✓/✓/✓
  | 'concurrent-add' // ✗/✓/✓
  | 'user-added' // ✗/✗/✓
  | 'spec-deleted' // ✓/✗/✓
  | 'user-deleted' // ✓/✓/✗
  | 'already-gone'; // ✓/✗/✗

export interface DiffEntry {
  key: string;
  kind: ClassifyKind;
  prev?: NormalizedEndpoint;
  next?: NormalizedEndpoint;
  current?: PostmanRequestItem;
}

export interface SchemaDelta {
  kind:
    | 'added-optional'
    | 'added-required'
    | 'removed'
    | 'type-changed'
    | 'required-toggled'; // either direction
  location: 'parameter' | 'body';
  paramName?: string; // when location=parameter
  bodyPath?: string; // JSON-pointer-ish path when location=body, e.g., "/properties/email"
  before?: { type?: Schema['type']; required?: boolean };
  after?: { type?: Schema['type']; required?: boolean };
}

export interface EndpointConflict {
  key: string;
  endpointName: string; // human-readable: "POST /api/foo (CreateFoo)"
  reason: string; // one-line explanation, used by CLI renderer in Phase 3
  deltas?: SchemaDelta[]; // for schema-change cases
}

export interface ConflictReport {
  autoMerged: EndpointConflict[]; // ✅
  autoMergedWithWarning: EndpointConflict[]; // ⚠️
  requiresDecision: EndpointConflict[]; // 🛑 (--strict fails on these)
  archived: EndpointConflict[]; // 🗑
}