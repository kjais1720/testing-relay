import { t } from '@lingui/macro'
import { SupervisorAccountOutlined } from '@material-ui/icons'
import { Roles } from '@saastack/core/roles'
import hooks from '@saastack/hooks'
import React from 'react'
import DesignationPage from '../pages/DesignationPage'
import Wrapper from './Wrapper'

hooks.app.subApp.registerHook('designations', {
    component: DesignationPage,
    icon: SupervisorAccountOutlined,
    path: 'designations',
    title: t`Designations`,
    role: [Roles.DesignationsAdmin, Roles.DesignationsEditor, Roles.DesignationsViewer],
    level: 'com',
})

export default {
    title: 'Designations',
    decorators: [(storyFn: () => JSX.Element) => <Wrapper>{storyFn()}</Wrapper>],
}

export const Default = () => <DesignationPage/>
