export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head' | 'options' | 'trace';

export interface OpenAPIDocument {
  openapi?: string; // "3.0.x" | "3.1.x"
  swagger?: string; // "2.0" — Swagger 2.0 detection
  info: { title: string; version: string };
  paths: Record<string, PathItem>;
  components?: { schemas?: Record<string, Schema> };
  // Swagger 2.0 specific
  definitions?: Record<string, Schema>;
  basePath?: string;
}

export interface PathItem {
  get?: Operation;
  post?: Operation;
  put?: Operation;
  patch?: Operation;
  delete?: Operation;
  head?: Operation;
  options?: Operation;
  trace?: Operation;
  parameters?: Parameter[]; 
}

export interface Operation {
  operationId?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  parameters?: Parameter[];
  requestBody?: RequestBody;
  responses?: Record<string, Response>;
  security?: SecurityRequirement[];
}

export interface Parameter {
  name: string;
  in: 'query' | 'header' | 'path' | 'cookie';
  required?: boolean;
  schema?: Schema;
  example?: unknown;
}

export interface RequestBody {
  required?: boolean;
  content: Record<string, MediaType>; // e.g., "application/json": { schema, example }
}

export interface MediaType {
  schema?: Schema;
  example?: unknown;
  examples?: Record<string, { value: unknown }>;
}

export interface Response {
  description: string;
  content?: Record<string, MediaType>;
}

export interface Schema {
  type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'null';
  format?: string;
  properties?: Record<string, Schema>;
  required?: string[];
  items?: Schema;
  enum?: unknown[];
  example?: unknown;
  $ref?: string;
  // Note: oneOf/anyOf/allOf not handled in v0.1 — documented limitation.
}

export interface SecurityRequirement {
  [schemeName: string]: string[];
}

export interface NormalizedEndpoint {
  method: HttpMethod;
  path: string;
  operationId?: string;
  parameters: NormalizedParameter[];
  requestBody?: NormalizedBody;
  tags: string[]; // empty array if none
  summary?: string;
}

export interface NormalizedParameter {
  name: string;
  in: 'query' | 'header' | 'path' | 'cookie';
  required: boolean;
  schemaType?: Schema['type'];
  schemaFormat?: string;
  example?: unknown;
}

export interface NormalizedBody {
  contentType: string;
  required: boolean;
  schema?: Schema;
  example?: unknown;
}