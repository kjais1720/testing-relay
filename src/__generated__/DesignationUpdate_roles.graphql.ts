/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "DesignationUpdate_roles",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
  "type": "Role",
  "abstractKey": null
};
(node as any).hash = '48bd9e69aad9262a8c3f89a2607f3af7';
export default node;
