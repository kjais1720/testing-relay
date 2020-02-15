/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationInfo_designation = {
    readonly id: string;
    readonly " $refType": "DesignationInfo_designation";
};
export type DesignationInfo_designation$data = DesignationInfo_designation;
export type DesignationInfo_designation$key = {
    readonly " $data"?: DesignationInfo_designation$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationInfo_designation">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationInfo_designation",
  "type": "Designation",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '2df8dfa10a421b8abba4a609e72b3786';
export default node;
