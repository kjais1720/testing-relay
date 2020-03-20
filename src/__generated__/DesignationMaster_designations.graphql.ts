/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationMaster_designations = {
    readonly designations: {
        readonly designation: ReadonlyArray<{
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"DesignationList_designations" | "DesignationUpdate_designations">;
        }>;
    };
    readonly roles: {
        readonly role: ReadonlyArray<{
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"DesignationList_roles" | "DesignationUpdate_roles" | "DesignationAdd_roles">;
        }>;
    };
    readonly " $refType": "DesignationMaster_designations";
};
export type DesignationMaster_designations$data = DesignationMaster_designations;
export type DesignationMaster_designations$key = {
    readonly " $data"?: DesignationMaster_designations$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationMaster_designations">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Variable",
  "name": "parent",
  "variableName": "parent"
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "DesignationMaster_designations",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "parent",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "designations",
      "storageKey": null,
      "args": [
        (v0/*: any*/)
      ],
      "concreteType": "ListDesignationResponse",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "designation",
          "storageKey": null,
          "args": null,
          "concreteType": "Designation",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "kind": "FragmentSpread",
              "name": "DesignationList_designations",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DesignationUpdate_designations",
              "args": null
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "roles",
      "storageKey": null,
      "args": [
        {
          "kind": "Literal",
          "name": "hide",
          "value": true
        },
        (v0/*: any*/)
      ],
      "concreteType": "ListRoleResponse",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "role",
          "storageKey": null,
          "args": null,
          "concreteType": "Role",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "kind": "FragmentSpread",
              "name": "DesignationList_roles",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DesignationUpdate_roles",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DesignationAdd_roles",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '5012560c2217ea72ba6f4d024aff16d4';
export default node;
