import {useConfig} from '@saastack/core';
import hooks, {InfoHook} from '@saastack/hooks';
import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import { DesignationInfo_designation } from '../__generated__/DesignationInfo_designation.graphql'

interface Props {
    designation: DesignationInfo_designation,
    onTabChange: (t: string) => void,
}


const DesignationInfo: React.FC<Props> = ({designation, onTabChange}) => {
    const {activeApps} = useConfig();
    const items: InfoHook[] = [
        ...hooks.designation.info.getAllHooks(activeApps)
    ];

    return null;
};

export default createFragmentContainer(
    DesignationInfo,
    {
        designation: graphql`
            fragment DesignationInfo_designation on Designation {
                id
            }
        `,
    }
);
