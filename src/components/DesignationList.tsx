import {ListContainer} from '@saastack/layouts/containers';
import {ListContainerProps} from '@saastack/layouts/types';
import {Trans} from '@lingui/macro';
import {ListItemText} from '@material-ui/core';
import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {DesignationList_designations} from '../__generated__/DesignationList_designations.graphql';

interface Props extends Omit<ListContainerProps<DesignationList_designations>, 'items'> {
    designations: DesignationList_designations}

const DesignationList: React.FC<Props> = ({designations, ...props}) => {
    const [visibleColumns, onVisibleColumnsChange] = React.useState(['id']);
    const listProps = {
        render: (e: DesignationList_designations[0]) => {
            return [
            <ListItemText key="id" primary={e.id}/>,
        ]}
    };
    const tableProps = {
        config: [
            {
                key: 'id',
                label: <Trans>Id</Trans>
            },
        ],
        render: {},
        visibleColumns,
        onVisibleColumnsChange
    };
    return <ListContainer<DesignationList_designations> items={designations} listProps={listProps} tableProps={tableProps} {...props}/>
};

export default createFragmentContainer(DesignationList, {
    designations: graphql`
        fragment DesignationList_designations on Designation @relay(plural: true) {
            id
        }
    `,
});
