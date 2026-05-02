export interface PostmanCollection {
  info: PostmanCollectionInfo;
  item: PostmanItem[]; // top-level folders or requests
  variable?: PostmanVariable[];
  auth?: PostmanAuth;
}

export interface PostmanCollectionInfo {
  name: string;
  schema: string; // typically "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  description?: string | { content: string; type?: string };
  _postman_id?: string;
}

export type PostmanItem = PostmanFolder | PostmanRequestItem;

export interface PostmanFolder {
  name: string;
  item: PostmanItem[];
  description?: string | { content: string; type?: string };
}

export interface PostmanRequestItem {
  name: string;
  id?: string; // request UUID — what we map operationId/fallbackKey to
  request: PostmanRequest;
  response?: PostmanExample[];
  event?: PostmanEvent[]; // Tests + Pre-request scripts live here
}

export interface PostmanRequest {
  method: string; // uppercase: "GET" | "POST" | ...
  url: PostmanUrl;
  header?: PostmanHeader[];
  body?: PostmanBody;
  auth?: PostmanAuth;
  description?: string;
}

export interface PostmanUrl {
  raw: string;
  host?: string[];
  path?: string[];
  query?: PostmanQueryParam[];
  variable?: PostmanPathVariable[]; // path params (`:id` style)
}

export interface PostmanQueryParam {
  key: string;
  value?: string;
  description?: string;
  disabled?: boolean;
}

export interface PostmanPathVariable {
  key: string;
  value?: string;
  description?: string;
}

export interface PostmanHeader {
  key: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

export interface PostmanBody {
  mode: 'raw' | 'urlencoded' | 'formdata' | 'file' | 'graphql';
  raw?: string;
  options?: { raw?: { language?: string } };
  // Other modes truncated for v0.1.
}

export interface PostmanAuth {
  type: 'bearer' | 'apikey' | 'oauth2' | 'basic' | 'noauth';
  // Schema-name only; values come from environment, not collection.
  bearer?: Array<{ key: string; value: string; type: string }>;
  apikey?: Array<{ key: string; value: string; type: string; in?: 'header' | 'query' }>;
}

export interface PostmanEvent {
  listen: 'test' | 'prerequest';
  script: { exec: string[]; type?: string }; // Tests JS / Pre-request JS
}

// Saved Examples — Gap 2 killer (carry forward verbatim)
export interface PostmanExample {
  name: string;
  originalRequest?: PostmanRequest;
  status?: string;
  code?: number;
  header?: PostmanHeader[];
  body?: string;
  _postman_previewlanguage?: string;
}

export interface PostmanVariable {
  key: string;
  value?: string;
  type?: string;
}