import { Field, Form, Input, Textarea } from '@saastack/forms'
import { FormProps } from '@saastack/forms/types'
import React from 'react'
import { Trans } from '@lingui/macro'

export interface Props<T> extends FormProps<T> {
}

const DesignationAddFormComponent = <T extends {}>(props: Props<T>): React.ReactElement<Props<T>> => {
    return (
        <Form {...props}>
            <Input variant={'standard'} large={true} name="name" label={<Trans>Name</Trans>}
                   grid={{ xs: 12 }}/>
            <Textarea name="description" label={<Trans>Description</Trans>} grid={{ xs: 12 }}/>
        </Form>
    )
}

export default DesignationAddFormComponent
