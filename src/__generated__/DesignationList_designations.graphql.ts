/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationList_designations = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly roleIds: ReadonlyArray<string>;
    readonly " $refType": "DesignationList_designations";
}>;
export type DesignationList_designations$data = DesignationList_designations;
export type DesignationList_designations$key = ReadonlyArray<{
    readonly " $data"?: DesignationList_designations$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationList_designations">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationList_designations",
  "type": "Designation",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "roleIds",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '39160f272554a64065ed0230a50a701d';
export default node;
