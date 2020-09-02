import { EmptyStateContainer } from '@saastack/layouts/containers'
import { EmptyStateContainerProps } from '@saastack/layouts/types'
import React from 'react'
import { Trans } from '@lingui/macro'

interface Props extends EmptyStateContainerProps {
    canManage: boolean
}

const DesignationEmptyState: React.FC<Props> = ({ canManage, onAction, ...props }) => {
    const emptyStateProps = canManage ? {
        image: `${process.env.REACT_APP_SAASTACK_CDN_URL}/images/empty-states/booking-notification-empty-state.png`,
        actionLabel: <Trans>Add designation</Trans>,
        message: <Trans>Add your first designation</Trans>,
    } : {
        image: `${process.env.REACT_APP_SAASTACK_CDN_URL}/images/empty-states/booking-notification-empty-state.png`,
        message: <Trans>No designations found</Trans>,
    }

    return (
        <EmptyStateContainer {...emptyStateProps} onAction={canManage ? onAction : undefined} {...props} />
    )
}

export default DesignationEmptyState
