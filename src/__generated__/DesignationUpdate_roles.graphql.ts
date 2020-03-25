/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationUpdate_roles = ReadonlyArray<{
    readonly id: string;
    readonly roleName: string;
    readonly priority: number;
    readonly isDefault: boolean;
    readonly " $refType": "DesignationUpdate_roles";
}>;
export type DesignationUpdate_roles$data = DesignationUpdate_roles;
export type DesignationUpdate_roles$key = ReadonlyArray<{
    readonly " $data"?: DesignationUpdate_roles$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationUpdate_roles">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationUpdate_roles",
  "type": "Role",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "roleName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "priority",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isDefault",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '48bd9e69aad9262a8c3f89a2607f3af7';
export default node;
