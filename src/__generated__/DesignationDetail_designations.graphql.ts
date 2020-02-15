/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationDetail_designations = ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"DesignationInfo_designation">;
    readonly " $refType": "DesignationDetail_designations";
}>;
export type DesignationDetail_designations$data = DesignationDetail_designations;
export type DesignationDetail_designations$key = ReadonlyArray<{
    readonly " $data"?: DesignationDetail_designations$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationDetail_designations">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationDetail_designations",
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
      "kind": "FragmentSpread",
      "name": "DesignationInfo_designation",
      "args": null
    }
  ]
};
(node as any).hash = 'b4407fbf85048d99f4d31bbe337ac55f';
export default node;
