import { Trans } from '@lingui/macro'
import CardHeader from '@material-ui/core/CardHeader'
import { CloseOutlined, DeleteOutlined, EditOutlined } from '@material-ui/icons'
import { ActionItem } from '@saastack/components'
import { DetailContainer } from '@saastack/layouts/containers'
import { DetailContainerProps } from '@saastack/layouts/types'
import {useConfig} from '@saastack/core'
import hooks, {TabHook} from '@saastack/hooks'
import { useNavigate, useParams } from '@saastack/router'
import DesignationInfo from './DesignationInfo'
import {createFragmentContainer, graphql} from 'react-relay'
import {DesignationDetail_designations} from '../__generated__/DesignationDetail_designations.graphql'
import React from 'react'

export interface Props extends DetailContainerProps {
    designations: DesignationDetail_designations,
}

const DesignationDetail: React.FC<Props> = ({ designations, ...props }) => {
    const navigate = useNavigate()
    const {activeApps} = useConfig()
    const [open, setOpen] = React.useState(true)
    const { id } = useParams()
    const designation = designations.find(i => i.id === window.atob(id!))
    
    const navigateBack = () => navigate('../')
    const handleClose = () => setOpen(false)
    React.useEffect(() => {
        if (!designation) {
            handleClose()
        }
    }, [designation])
    if (!designation) {
        return null
    }

    const hooksMap = hooks.designation.tab.getHooksMap(activeApps);
    const handleTabChange = (key: string) => {
        const i = tabs.findIndex(tab => tab.key === key);
        if (i > -1 && props.onTabChange) {
            props.onTabChange(i);
        }
    };
    const DesignationInfoWrapper = React.memo(() => <DesignationInfo designation={designation} onTabChange={handleTabChange}/>);
    const tabs: TabHook[] = [
        {label: <Trans>Info</Trans>, component: DesignationInfoWrapper, key: 'info'},
        ...Object.values(hooksMap),
    ];
    const actions: ActionItem[] = [
        { title: <Trans>Update</Trans>, icon: EditOutlined, onClick: () => navigate('update') },
        { title: <Trans>Delete</Trans>, icon: DeleteOutlined, onClick: () => navigate('delete') },
        { title: <Trans>Close</Trans>, icon: CloseOutlined, onClick: handleClose },
    ]
    const header = (
        <CardHeader titleTypographyProps={ {variant: 'h5'} } title={designation.id}/>
    )
    return (
        <DetailContainer open={open} onClose={handleClose} onExited={navigateBack} actions={actions} header={header} tabProps={ {parent: designation.id} } tabs={tabs} {...props}/>
    )
}

export default createFragmentContainer(
    DesignationDetail,
    {
        designations: graphql`
            fragment DesignationDetail_designations on Designation @relay(plural: true) {
                id
                ...DesignationInfo_designation            }
        `,
    }
);
