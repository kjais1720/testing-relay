import { Mutable, TemplateLoader } from '@saastack/core'
import { withEnvironment, withQuery, WithQueryProps } from '@saastack/relay'
import { ModernTemplate } from '@saastack/templates/templates'
import { compose } from '@saastack/utils'
import React from 'react'
import { graphql } from 'relay-runtime'
import { WrapperQuery } from '../__generated__/WrapperQuery.graphql'

const query = graphql`
    query WrapperQuery {
        viewer {
            id
            firstName
            lastName
            email
            profileImage {
                thumbImage
            }
            preferences {
                dateFormat
                language
                timeFormat
                timezone
                uIInfo
            }
            userRoles {
                role {
                    levelDetails {
                        ... on Location {
                            id
                        }
                        ... on Company {
                            id
                        }
                        ... on Group {
                            id
                        }
                    }
                    role {
                        moduleRoles {
                            name
                        }
                    }
                }
            }
            groups {
                id
                name
                companies {
                    id
                    title
                    displayName
                    metadata
                    slug
                    gallery {
                        default {
                            thumbImage
                        }
                    }
                    address {
                        country
                    }
                    companySettings {
                        navMenus
                        aliases(locale: "en-US")
                    }
                    apps {
                        id
                        appTypeId
                        name
                        active
                        serviceModules
                    }
                    locations(first: 500) {
                        edges {
                            node {
                                id
                                name
                                preference {
                                    currency
                                }
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`

interface Props extends WithQueryProps<WrapperQuery> {
}

const Wrapper: React.FC<Props> = props => {
    return (
        <TemplateLoader template={ModernTemplate} getLocale={() => Promise.resolve({ messages: {} })} viewer={props.query?.viewer as Mutable<WrapperQuery['response']['viewer']>}>
            {props.children}
        </TemplateLoader>
    )
}


export default compose(
    withEnvironment({ graphqlUrl: process.env.REACT_APP_GRAPHQL_URL }),
    withQuery<WrapperQuery>({ query, Loading: () => <>Loading logged in user...</> }),
)(Wrapper)
