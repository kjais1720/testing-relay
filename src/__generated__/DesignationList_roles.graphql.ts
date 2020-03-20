/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationList_roles = ReadonlyArray<{
    readonly id: string;
    readonly roleName: string;
    readonly level: string;
    readonly " $refType": "DesignationList_roles";
}>;
export type DesignationList_roles$data = DesignationList_roles;
export type DesignationList_roles$key = ReadonlyArray<{
    readonly " $data"?: DesignationList_roles$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationList_roles">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationList_roles",
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
      "name": "level",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '7c813c7a4b2c9d49f01c79a87cd5a96a';
export default node;
