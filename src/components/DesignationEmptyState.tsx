import {EmptyStateContainer} from '@saastack/layouts/containers';
import {EmptyStateContainerProps} from '@saastack/layouts/types';
import React from 'react';
import { Trans } from '@lingui/macro';

interface Props extends EmptyStateContainerProps {
}

const DesignationEmptyState: React.FC<Props> = props => {
    const emptyStateProps = {
        image: `${process.env.REACT_APP_SAASTACK_CDN_URL}/images/empty-states/booking-notification-empty-state.png`,
        actionLabel: <Trans>Add Designation</Trans>,
        message: <Trans>Add your first designation</Trans>
    };
    return (
        <EmptyStateContainer {...emptyStateProps} {...props}/>
    )
};

export default DesignationEmptyState;
