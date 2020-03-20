import { useConfig } from '@saastack/core'
import { withQuery, WithQueryProps } from '@saastack/relay'
import React from 'react'
import { graphql } from 'react-relay'
import { DesignationPageQuery } from '../__generated__/DesignationPageQuery.graphql'
import DesignationMaster from '../components/DesignationMaster'
import { Loading } from '@saastack/components'

const query = graphql`
    query DesignationPageQuery($parent: String) {
        ...DesignationMaster_designations @arguments(parent: $parent)
    }
`

interface WrapperProps extends WithQueryProps<DesignationPageQuery> {
    parent: string,
}

const DesignationMasterWrapper: React.FC<WrapperProps> = ({ query, ...props }) =>
    <DesignationMaster {...props} designations={query}/>

interface PageProps {
    parent?: string,
}

const DesignationPage: React.FC<PageProps> = props => {
    const { companyId } = useConfig()
    const parent = props.parent || companyId
    return React.useMemo(() => {
        const Wrapper = withQuery({ query, variables: { parent }, Loading })(DesignationMasterWrapper)
        return <Wrapper parent={parent}/>
    }, [])
}

export default DesignationPage
