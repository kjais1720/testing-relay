/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateDesignationInput = {
    clientMutationId?: string | null;
    designation?: DesignationInput | null;
    updateMask?: FieldMaskInput | null;
};
export type DesignationInput = {
    description?: string | null;
    id?: string | null;
    metadata?: string | null;
    name?: string | null;
    roleIds?: Array<string | null> | null;
};
export type FieldMaskInput = {
    paths?: Array<string | null> | null;
};
export type UpdateDesignationMutationVariables = {
    input?: UpdateDesignationInput | null;
};
export type UpdateDesignationMutationResponse = {
    readonly updateDesignation: {
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
export type UpdateDesignationMutation = {
    readonly response: UpdateDesignationMutationResponse;
    readonly variables: UpdateDesignationMutationVariables;
};



/*
mutation UpdateDesignationMutation(
  $input: UpdateDesignationInput
) {
  updateDesignation(input: $input) {
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
    "concreteType": "UpdateDesignationPayload",
    "kind": "LinkedField",
    "name": "updateDesignation",
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
    "name": "UpdateDesignationMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateDesignationMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "73ec19c5da813e472fdc6ef987c88510",
    "id": null,
    "metadata": {},
    "name": "UpdateDesignationMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateDesignationMutation(\n  $input: UpdateDesignationInput\n) {\n  updateDesignation(input: $input) {\n    clientMutationId\n    payload {\n      id\n      name\n      description\n      roles {\n        id\n        roleName\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f4175f1291a9cf83e59f699bcbe71c09';
export default node;
