import { t, Trans } from '@lingui/macro'
import { Box, Grid } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import { Toggle } from '@saastack/components'
import { Form, Input, Select, Textarea } from '@saastack/forms'
import { FormProps } from '@saastack/forms/types'
import React from 'react'
import { useI18n } from '@saastack/i18n'

export interface Props<T extends ReadonlyArray<{}>> extends FormProps {
    roles: any
    isUpdate?: boolean
}

const DesignationAddFormComponent = <T extends ReadonlyArray<{}> = any>({
    roles,
    isUpdate,
    ...props
}: Props<T>) => {
    const [show, setShow] = React.useState(false)
    const { i18n } = useI18n()
    return (
        <Form {...props}>
            <Input
                large
                name="name"
                label={<Trans>Title</Trans>}
                grid={{ xs: 12 }}
                inputProps={{ 'aria-label': i18n._(t`Title`) }}
            />
            <Toggle
                label={
                    isUpdate ? <Trans>Update description</Trans> : <Trans>Add description</Trans>
                }
                show={show}
                onShow={setShow}
            >
                <Textarea
                    grid={{ xs: 12 }}
                    label={<Trans>Description</Trans>}
                    name="description"
                    inputProps={{ 'aria-label': i18n._(t`Description`) }}
                />
            </Toggle>
            <Grid item xs={12}>
                <Box mt={3} fontSize="body2.fontSize" color="text.secondary" tabIndex={0}>
                    <Trans>
                        By default which roles should be assigned to the person who is being
                        assigned this designation
                    </Trans>
                </Box>
            </Grid>
            <Select grid={{ xs: 12 }} label={<Trans>Role</Trans>} name="roleIds.0" tabIndex={0}>
                {roles?.map((r: any, i: number) => (
                    <MenuItem key={i} value={r.id}>
                        {r.roleName}
                    </MenuItem>
                ))}
            </Select>
        </Form>
    )
}

export default DesignationAddFormComponent
