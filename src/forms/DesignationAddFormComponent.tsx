import { Form } from '@saastack/forms'
import { FormProps } from '@saastack/forms/types'
import React from 'react'

export interface Props<T> extends FormProps<T> {
}

const DesignationAddFormComponent = <T extends {}>(props: Props<T>): React.ReactElement<Props<T>> => {
    return (
        <Form {...props}>
        </Form>
    )
}

export default DesignationAddFormComponent
