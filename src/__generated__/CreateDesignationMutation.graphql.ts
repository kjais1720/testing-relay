/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateDesignationInput = {
    clientMutationId?: string | null;
    designation?: DesignationInput | null;
    parent?: string | null;
};
export type DesignationInput = {
    description?: string | null;
    id?: string | null;
    metadata?: string | null;
    name?: string | null;
    roleIds?: Array<string | null> | null;
};
export type CreateDesignationMutationVariables = {
    input?: CreateDesignationInput | null;
};
export type CreateDesignationMutationResponse = {
    readonly createDesignation: {
        readonly clientMutationId: string;
        readonly payload: {
            readonly id: string;
            readonly name: string;
            readonly description: string;
            readonly roles: ReadonlyArray<{
                readonly id: string;
                readonly roleName: string;
                readonly level: string;
                readonly priority: number;
                readonly isDefault: boolean;
            }>;
        } | null;
    };
};
export type CreateDesignationMutation = {
    readonly response: CreateDesignationMutationResponse;
    readonly variables: CreateDesignationMutationVariables;
};



/*
mutation CreateDesignationMutation(
  $input: CreateDesignationInput
) {
  createDesignation(input: $input) {
    clientMutationId
    payload {
      id
      name
      description
      roles {
        id
        roleName
        level
        priority
        isDefault
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateDesignationPayload",
    "kind": "LinkedField",
    "name": "createDesignation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Designation",
        "kind": "LinkedField",
        "name": "payload",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Role",
            "kind": "LinkedField",
            "name": "roles",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "roleName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "level",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "priority",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isDefault",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateDesignationMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateDesignationMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "50723d85fe9ad010822f6c304de71858",
    "id": null,
    "metadata": {},
    "name": "CreateDesignationMutation",
    "operationKind": "mutation",
    "text": "mutation CreateDesignationMutation(\n  $input: CreateDesignationInput\n) {\n  createDesignation(input: $input) {\n    clientMutationId\n    payload {\n      id\n      name\n      description\n      roles {\n        id\n        roleName\n        level\n        priority\n        isDefault\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fdd6cddc0ba2fbf9501ec32baac9c8a3';
export default node;
