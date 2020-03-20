/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationAdd_roles = ReadonlyArray<{
    readonly id: string;
    readonly roleName: string;
    readonly " $refType": "DesignationAdd_roles";
}>;
export type DesignationAdd_roles$data = DesignationAdd_roles;
export type DesignationAdd_roles$key = ReadonlyArray<{
    readonly " $data"?: DesignationAdd_roles$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationAdd_roles">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationAdd_roles",
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
(node as any).hash = 'd29e11537bd173fda57ad3a553d4966c';
export default node;
