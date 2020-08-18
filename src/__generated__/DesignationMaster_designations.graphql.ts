/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
            readonly level: string;
            readonly isDefault: boolean;
            readonly roleName: string;
            readonly " $fragmentRefs": FragmentRefs<"DesignationUpdate_roles" | "DesignationAdd_roles">;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "parent"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "DesignationMaster_designations",
  "selections": [
    {
      "alias": null,
      "args": [
        (v0/*: any*/)
      ],
      "concreteType": "ListDesignationResponse",
      "kind": "LinkedField",
      "name": "designations",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Designation",
          "kind": "LinkedField",
          "name": "designation",
          "plural": true,
          "selections": [
            (v1/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DesignationList_designations"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DesignationUpdate_designations"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "hide",
          "value": true
        },
        (v0/*: any*/)
      ],
      "concreteType": "ListRoleResponse",
      "kind": "LinkedField",
      "name": "roles",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Role",
          "kind": "LinkedField",
          "name": "role",
          "plural": true,
          "selections": [
            (v1/*: any*/),
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
              "name": "isDefault",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "roleName",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DesignationUpdate_roles"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DesignationAdd_roles"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '9b44a1b6fb32e72fb94b0756588e95d3';
export default node;
