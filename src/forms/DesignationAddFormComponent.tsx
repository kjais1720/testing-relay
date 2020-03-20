import { Form, Input, Textarea, Select, Checkbox } from '@saastack/forms'
import { FormProps } from '@saastack/forms/types'
import React from 'react'
import { Trans, Plural, t } from '@lingui/macro'
import { Toggle } from '@saastack/components'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import { DesignationAdd_roles } from '../__generated__/DesignationAdd_roles.graphql'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme, ListItemText } from '@material-ui/core'

export interface Props<T extends ReadonlyArray<{}>> extends FormProps {
    roles: DesignationAdd_roles


}
const useStyles = makeStyles(({ typography: { body2, body1, h6, fontWeightRegular } }: Theme) => ({
    item: {
        paddingTop: 20
    },



}));


const DesignationAddFormComponent = <T extends ReadonlyArray<{}> = any>({ roles, initialValues, ...props }: Props<T>) => {
    const [show, setShow] = React.useState(false);
    const classes = useStyles();
    const renderValue = (values: unknown): React.ReactNode => {
        const selected = values as string[]
        if (selected && selected.length) {
            return <>
                {roles.find(r => r.id === selected[0])!.roleName}
                &nbsp;
                {selected.length > 1 &&
                    <small>(+{selected.length - 1} <Plural value={selected.length} _2="other" other="others" />)</small>}
            </>
        }
        return null
    }

    return (
        <Form initialValues={initialValues} {...props}>
            {({ values: { roleIds } }) => (<>
                <Input variant={'standard'} large={true} placeholder={t`Name`} name="name" label={<Trans>Title</Trans>}
                    grid={{ xs: 12 }} />
                <Toggle label={<Trans>Add Description</Trans>} show={show} onShow={setShow}>
                    <Textarea placeholder={t`Description`} grid={{ xs: 12 }} label={<Trans>Description</Trans>} name="description" />
                </Toggle>
                <ListItemText className={classes.item} secondary={<Trans>
                    By default which roles should be assigned to person who is being assigned this designation
                </Trans>}></ListItemText>

                <Select renderValue={renderValue} multiple grid={{ xs: 12 }} placeholder={t`Role`} label={<Trans>Role</Trans>} name="roleIds">
                    {
                        roles && roles.map(
                            (r, i) => {
                                return <MenuItem key={i} value={r.id}>
                                    <Checkbox value={roleIds && roleIds.includes(r.id)} /> {r.roleName}
                                </MenuItem>
                            })
                    }
                </Select>
            </>)}

        </Form>
    )
}

export default DesignationAddFormComponent
