/* tslint:disable */
/* eslint-disable */
/* @relayHash 1fe9cb52828b510d2e161a5a089b8296 */

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
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateDesignationInput",
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
    "name": "updateDesignation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateDesignationPayload",
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
    "name": "UpdateDesignationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateDesignationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateDesignationMutation",
    "id": null,
    "text": "mutation UpdateDesignationMutation(\n  $input: UpdateDesignationInput\n) {\n  updateDesignation(input: $input) {\n    clientMutationId\n    payload {\n      id\n      name\n      description\n      roles {\n        id\n        roleName\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f4175f1291a9cf83e59f699bcbe71c09';
export default node;
