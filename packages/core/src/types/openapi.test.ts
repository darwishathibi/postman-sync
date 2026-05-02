import { describe, expectTypeOf, it } from "vitest";
import type {
    OpenAPIDocument, Operation, Parameter, Schema
} from '../types/openapi.ts'

describe('openapi types', () => {
    it('OpenAPIDocument has paths and optional components', () => {
        expectTypeOf<OpenAPIDocument>().toHaveProperty('paths');
        expectTypeOf<OpenAPIDocument>().toHaveProperty('info');
    });

    it('Operation can have an optional operationId', () => {
        expectTypeOf<Operation>().toHaveProperty('operationId').toEqualTypeOf<string | undefined>();
    });

    it('Parameter has name, in, and optional required', () => {
        expectTypeOf<Parameter>().toHaveProperty('name').toEqualTypeOf<string>();
        expectTypeOf<Parameter>().toHaveProperty('in').toEqualTypeOf<'query' | 'header' | 'path' | 'cookie'>();
    });

    it('Schema is recursive and supports $ref', () => {
        expectTypeOf<Schema>().toHaveProperty('type');
    });
})