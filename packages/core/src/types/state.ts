import { Operation } from "./openapi.js";

export interface PostmanSyncState {
    version: 1;
    lastSyncSpecHash: string;
    lastSyncedAt: string;
    operationIdMap: OperationIdMap;
    fallbackKeyMap: FallbackKeyMap ;
}

// operationId → Postman request UUID
export type OperationIdMap = Record<string, string>;

// "METHOD:/normalized/path" → Postman request UUID (for endpoints without operationId)
export type FallbackKeyMap = Record<string, string>;

// res of state block validation
export type StateValidation =
  | { ok: true; state: PostmanSyncState }
  | { ok: false; reason: 'missing'; message: string }
  | { ok: false; reason: 'malformed'; message: string }
  | { ok: false; reason: 'unsupported-version'; message: string; foundVersion: unknown };

