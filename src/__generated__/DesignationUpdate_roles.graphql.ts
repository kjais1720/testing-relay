/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationUpdate_roles = ReadonlyArray<{
    readonly id: string;
    readonly roleName: string;
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
    }
  ]
};
(node as any).hash = '40e75b40f53964bf0ff62baef44027a1';
export default node;
