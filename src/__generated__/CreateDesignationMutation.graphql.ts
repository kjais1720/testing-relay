/* tslint:disable */
/* eslint-disable */
/* @relayHash 39a47976524be816bd589b74ec64b879 */

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
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateDesignationInput",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createDesignation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateDesignationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "payload",
        "storageKey": null,
        "args": null,
        "concreteType": "Designation",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "roles",
            "storageKey": null,
            "args": null,
            "concreteType": "Role",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "roleName",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateDesignationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateDesignationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateDesignationMutation",
    "id": null,
    "text": "mutation CreateDesignationMutation(\n  $input: CreateDesignationInput\n) {\n  createDesignation(input: $input) {\n    clientMutationId\n    payload {\n      id\n      name\n      description\n      roles {\n        id\n        roleName\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0a56ea7c11c72cf3c11b20e421a3c461';
export default node;
