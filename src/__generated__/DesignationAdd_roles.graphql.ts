/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationAdd_roles = ReadonlyArray<{
    readonly id: string;
    readonly roleName: string;
    readonly priority: number;
    readonly isDefault: boolean;
    readonly " $refType": "DesignationAdd_roles";
}>;
export type DesignationAdd_roles$data = DesignationAdd_roles;
export type DesignationAdd_roles$key = ReadonlyArray<{
    readonly " $data"?: DesignationAdd_roles$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationAdd_roles">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "DesignationAdd_roles",
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
(node as any).hash = 'c7dc243e0e49528e38dab8598f46e199';
export default node;
