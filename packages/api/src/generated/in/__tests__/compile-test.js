// @flow

// https://github.com/estree/estree
const Flow = require('flow-parser');

const graphqlObjectsRegistry = {};

it('works', () => {
  const ast = Flow.parse(
    `
// <<GraphQLObject('Money')>>
class Money {

  // <<GraphQLField('amount')>>
  getAmount = (): string => this.amount;
}`,
    // https://www.npmjs.com/package/flow-parser
    {
      esproposal_decorators: true,
      esproposal_class_instance_fields: true,
      esproposal_class_static_fields: true,
      esproposal_export_star_as: true,
      esproposal_optional_chaining: true,
      esproposal_nullish_coalescing: true,
      types: true,
    },
  );

  ast.comments.forEach(comment => {
    console.warn(comment);

    // FIXME: this could work but the comments are not coupled with the method (only via location)
    const object = comment.value.trim().match(/<<GraphQLObject\('(.+?)'\)>>/);
    // graphqlObjectsRegistry[object[1]] = true;
  });
  console.warn(graphqlObjectsRegistry);

  expect(ast).toMatchInlineSnapshot(`
Object {
  "body": Array [
    Object {
      "body": Object {
        "body": Array [
          Object {
            "computed": false,
            "key": Object {
              "loc": Object {
                "end": Object {
                  "column": 11,
                  "line": 6,
                },
                "source": null,
                "start": Object {
                  "column": 2,
                  "line": 6,
                },
              },
              "name": "getAmount",
              "optional": false,
              "range": Array [
                80,
                89,
              ],
              "type": "Identifier",
              "typeAnnotation": null,
            },
            "loc": Object {
              "end": Object {
                "column": 40,
                "line": 6,
              },
              "source": null,
              "start": Object {
                "column": 2,
                "line": 6,
              },
            },
            "range": Array [
              80,
              118,
            ],
            "static": false,
            "type": "ClassProperty",
            "typeAnnotation": null,
            "value": Object {
              "async": false,
              "body": Object {
                "computed": false,
                "loc": Object {
                  "end": Object {
                    "column": 39,
                    "line": 6,
                  },
                  "source": null,
                  "start": Object {
                    "column": 28,
                    "line": 6,
                  },
                },
                "object": Object {
                  "loc": Object {
                    "end": Object {
                      "column": 32,
                      "line": 6,
                    },
                    "source": null,
                    "start": Object {
                      "column": 28,
                      "line": 6,
                    },
                  },
                  "range": Array [
                    106,
                    110,
                  ],
                  "type": "ThisExpression",
                },
                "property": Object {
                  "loc": Object {
                    "end": Object {
                      "column": 39,
                      "line": 6,
                    },
                    "source": null,
                    "start": Object {
                      "column": 33,
                      "line": 6,
                    },
                  },
                  "name": "amount",
                  "optional": false,
                  "range": Array [
                    111,
                    117,
                  ],
                  "type": "Identifier",
                  "typeAnnotation": null,
                },
                "range": Array [
                  106,
                  117,
                ],
                "type": "MemberExpression",
              },
              "expression": true,
              "generator": false,
              "id": null,
              "loc": Object {
                "end": Object {
                  "column": 39,
                  "line": 6,
                },
                "source": null,
                "start": Object {
                  "column": 14,
                  "line": 6,
                },
              },
              "params": Array [],
              "predicate": null,
              "range": Array [
                92,
                117,
              ],
              "returnType": Object {
                "loc": Object {
                  "end": Object {
                    "column": 24,
                    "line": 6,
                  },
                  "source": null,
                  "start": Object {
                    "column": 16,
                    "line": 6,
                  },
                },
                "range": Array [
                  94,
                  102,
                ],
                "type": "TypeAnnotation",
                "typeAnnotation": Object {
                  "loc": Object {
                    "end": Object {
                      "column": 24,
                      "line": 6,
                    },
                    "source": null,
                    "start": Object {
                      "column": 18,
                      "line": 6,
                    },
                  },
                  "range": Array [
                    96,
                    102,
                  ],
                  "type": "StringTypeAnnotation",
                },
              },
              "type": "ArrowFunctionExpression",
              "typeParameters": null,
            },
            "variance": null,
          },
        ],
        "loc": Object {
          "end": Object {
            "column": 1,
            "line": 7,
          },
          "source": null,
          "start": Object {
            "column": 12,
            "line": 3,
          },
        },
        "range": Array [
          43,
          120,
        ],
        "type": "ClassBody",
      },
      "decorators": Array [],
      "id": Object {
        "loc": Object {
          "end": Object {
            "column": 11,
            "line": 3,
          },
          "source": null,
          "start": Object {
            "column": 6,
            "line": 3,
          },
        },
        "name": "Money",
        "optional": false,
        "range": Array [
          37,
          42,
        ],
        "type": "Identifier",
        "typeAnnotation": null,
      },
      "implements": Array [],
      "loc": Object {
        "end": Object {
          "column": 1,
          "line": 7,
        },
        "source": null,
        "start": Object {
          "column": 0,
          "line": 3,
        },
      },
      "range": Array [
        31,
        120,
      ],
      "superClass": null,
      "superTypeParameters": null,
      "type": "ClassDeclaration",
      "typeParameters": null,
    },
  ],
  "comments": Array [
    Object {
      "loc": Object {
        "end": Object {
          "column": 29,
          "line": 2,
        },
        "source": null,
        "start": Object {
          "column": 0,
          "line": 2,
        },
      },
      "range": Array [
        1,
        30,
      ],
      "type": "Line",
      "value": " <<GraphQLObject('Money')>>",
    },
    Object {
      "loc": Object {
        "end": Object {
          "column": 31,
          "line": 5,
        },
        "source": null,
        "start": Object {
          "column": 2,
          "line": 5,
        },
      },
      "range": Array [
        48,
        77,
      ],
      "type": "Line",
      "value": " <<GraphQLField('amount')>>",
    },
  ],
  "errors": Array [],
  "loc": Object {
    "end": Object {
      "column": 1,
      "line": 7,
    },
    "source": null,
    "start": Object {
      "column": 0,
      "line": 3,
    },
  },
  "range": Array [
    31,
    120,
  ],
  "type": "Program",
}
`);
});
