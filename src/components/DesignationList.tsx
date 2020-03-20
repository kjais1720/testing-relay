import { ListContainer } from '@saastack/layouts/containers'
import { ListContainerProps } from '@saastack/layouts/types'
import { Trans } from '@lingui/macro'
import { ListItemText } from '@material-ui/core'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { DesignationList_designations } from '../__generated__/DesignationList_designations.graphql'

import useNavigate from '@saastack/router/useNavigate'
import { DesignationList_roles } from '../__generated__/DesignationList_roles.graphql'

interface Props extends Omit<ListContainerProps<DesignationList_designations>, 'items'> {
    designations: DesignationList_designations,
    roles: DesignationList_roles
}

const DesignationList: React.FC<Props> = ({ designations, roles, ...props }) => {
    const navigate = useNavigate()

    const listProps = {
        render: (e: DesignationList_designations[0]) => {
            const designationRoles = roles.filter((role) => {
                const r = e?.roleIds.find((id) => id == role.id)
                if (r) {
                    return true
                }
                return false;

            }) ?? [];


            const name = designationRoles && designationRoles.length ? designationRoles.length > 1 ? designationRoles[0].roleName + " + " + (designationRoles.length - 1 as any as string) + "  others" : designationRoles[0].roleName : ""

            return [
                <ListItemText key="name" primary={e.name} secondary={name}>
                </ListItemText>,


            ]
        },
    }
    const tableProps = {
        config: [
            {
                key: "name",
                label: <Trans>Title</Trans>

            },
            {
                key: "defaultRole",
                label: <Trans>Default Roles</Trans>

            }
        ],
        render: {
            "defaultRole": (e: DesignationList_designations[0]) => {
                const designationRoles = roles.filter((role) => {
                    const r = e?.roleIds.find((id) => id == role.id)
                    if (r) {
                        return true
                    }
                    return false;

                }) ?? [];
                var names: string[] = [];
                designationRoles.map((val, index) => names[index] = val.roleName)

                return (names.length > 0 ? names.join(" , ") : "")
            }

        }

    }

    return <ListContainer<DesignationList_designations> tableProps={tableProps} items={designations} onItemClick={(id: string | undefined) => navigate(`${window.btoa(id!)}/update`)} listProps={listProps}  {...props} />
}

export default createFragmentContainer(DesignationList, {
    designations: graphql`
        fragment DesignationList_designations on Designation @relay(plural: true) {
            id,
            name,
            description,
            roleIds
        }
    `,
    roles: graphql`
    fragment DesignationList_roles on Role @relay(plural: true) {
        id
        roleName
        level
    }
`,
})
