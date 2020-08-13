import * as yup from 'yup'
import { t } from '@lingui/macro'

const DesignationAddValidations = yup.object().shape({
    name: yup.string().required(t`Required` as unknown as string).max(100, t`Max 100 characters allowed` as unknown as string),
    description: yup.string().max(3000, t`Max 3000 characters allowed` as unknown as string),
})

export default DesignationAddValidations
