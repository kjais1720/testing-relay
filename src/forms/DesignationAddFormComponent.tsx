import { Plural, t, Trans } from '@lingui/macro'
import { Box, Grid } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import { Toggle } from '@saastack/components'
import { Checkbox, Form, Input, Select, Textarea } from '@saastack/forms'
import FormObserver from '@saastack/forms/FormObserver'
import { FormProps } from '@saastack/forms/types'
import { FormikContextType } from 'formik/dist/types'
import { isEqual } from 'lodash-es'
import React from 'react'

export interface Props<T extends ReadonlyArray<{}>> extends FormProps {
    roles: any,
    isUpdate?:boolean
}

const DesignationAddFormComponent = <T extends ReadonlyArray<{}> = any>({ roles, isUpdate,...props }: Props<T>) => {
    const [show, setShow] = React.useState(false)
    const renderValue = (values: unknown): React.ReactNode => {
        const selected = values as string[]
        if (selected && selected.length) {
            return (
                <>
                    {roles.find((r: any) => r.id === selected[0])?.roleName}&nbsp;{selected.length > 1 && <small>(+{selected.length - 1} <Plural value={selected.length} _2="other" other="others" />)</small>}
                </>
            )
        }
        return null
    }
    const isDisabled = (id: string, roleIds: string[]) => {
        const _role = roles.find((r: any) => r.id === id && r.isDefault && r.priority)
        const _roles = roleIds.map(_r => roles.find((r: any) => r.id === _r)).filter(r => r.isDefault && r.priority)
        if (_role) {
            return _roles.find(_r => _role.priority > _r.priority)
        }
        return false
    }
    const handleFormChange = (form: FormikContextType<any>) => {
        const roleIds = form.values.roleIds.filter((r: string) => !isDisabled(r, form.values.roleIds))
        if (roleIds.length !== form.values.roleIds.length) {
            form.setFieldValue('roleIds', roleIds, true)
        }
    }
    return (
        <Form {...props}>
            <Input large name="name" label={<Trans>Title</Trans>} grid={{ xs: 12 }}/>
            <Toggle label={isUpdate ? <Trans>Update Description</Trans>: <Trans>Add Description</Trans>} show={show} onShow={setShow}>
                <Textarea grid={{ xs: 12 }} label={<Trans>Description</Trans>} name="description"/>
            </Toggle>
            <Grid item xs={12}>
                <Box mt={3} fontSize="body2.fontSize" color="text.secondary">
                   <Trans>By default which roles should be assigned to person who is being assigned this designation</Trans>
                </Box>
            </Grid>
            <Select grid={{ xs: 12 }} label={<Trans>Role</Trans>} name="roleIds.0">
                {roles?.map((r: any, i: number) => <MenuItem key={i} value={r.id}>{r.roleName}</MenuItem>)}
            </Select>
        </Form>
    )
}

export default DesignationAddFormComponent
