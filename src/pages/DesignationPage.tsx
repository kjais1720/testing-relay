import { ErrorComponent, Loading } from '@saastack/components'
import { useConfig } from '@saastack/core'
import { LayoutProps } from '@saastack/layouts'
import { useQuery } from '@saastack/relay'
import { useDidMountEffect } from '@saastack/utils'
import React from 'react'
import { graphql } from 'react-relay'
import { DesignationPageQuery } from '../__generated__/DesignationPageQuery.graphql'
import DesignationMaster from '../components/DesignationMaster'

const query = graphql`
    query DesignationPageQuery($parent: String) {
        ...DesignationMaster_designations @arguments(parent: $parent)
    }
`

interface PageProps {
    parent?: string,
    layoutProps?: LayoutProps
}

const DesignationPage: React.FC<PageProps> = props => {
    const { companyId } = useConfig()
    const parent = (props.parent || companyId)!
    const variables: DesignationPageQuery['variables'] = { parent }
    const { data, loading, error, refetch } = useQuery<DesignationPageQuery>(query, variables)
    useDidMountEffect(() => {
        refetch(variables)
    }, [parent])
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <ErrorComponent error={error}/>
    }

    return <DesignationMaster {...props} designations={data!} parent={parent}/>
}

export default DesignationPage
