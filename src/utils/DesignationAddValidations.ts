import * as yup from 'yup'
import { t } from '@lingui/macro'

const DesignationAddValidations = yup.object().shape({
    name: yup.string().required(t`Required` as unknown as string).max(50, t`Max 50 characters allowed` as unknown as string),
    description: yup.string().max(2000, t`Max 2000 characters allowed` as unknown as string),
})

export default DesignationAddValidations
