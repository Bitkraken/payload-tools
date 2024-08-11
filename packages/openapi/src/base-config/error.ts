import type { OpenAPIV3 } from 'openapi-types';

export const error: OpenAPIV3.SchemaObject = {
  title: 'Error response message',
  type: 'object',
  additionalProperties: false,
  properties: {
    errors: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          message: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          data: {
            type: 'array',
            items: {
              type: 'object',
              required: ['field', 'message'],
              properties: {
                field: { type: 'string' },
                message: { type: 'string' },
              },
            },
          },
        },
        required: ['message'],
      },
    },
  },
  required: ['errors'],
};
