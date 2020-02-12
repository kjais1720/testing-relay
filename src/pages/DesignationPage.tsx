import {useConfig} from '@saastack/core';
import {withQuery, WithQueryProps} from '@saastack/relay';
import React from 'react';
import {graphql} from 'react-relay';
import {DesignationPageQuery} from '../__generated__/DesignationPageQuery.graphql';
import DesignationMaster from '../components/DesignationMaster';

const query = graphql`
    query DesignationPageQuery($parent: String) {
        ...DesignationMaster_designations @arguments(parent: $parent)
    }
`;

interface WrapperProps extends WithQueryProps<DesignationPageQuery> {
    parent: string,
}

const DesignationMasterWrapper: React.FC<WrapperProps> = ({query, ...props}) => <DesignationMaster {...props} designations={query}/>;

interface PageProps {
    parent?: string,
}

const DesignationPage: React.FC<PageProps> = props => {
    const { companyId } = useConfig();
    const parent = props.parent || companyId;
    const Wrapper = withQuery({query, variables: {parent}})(DesignationMasterWrapper);
    return <Wrapper {...props} parent={parent}/>;
};

export default DesignationPage;
