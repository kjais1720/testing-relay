import * as yup from 'yup'
import { t } from '@lingui/macro'

const DesignationAddValidations = yup.object().shape({
    name: yup.string().required(t`Required` as unknown as string),
})

export default DesignationAddValidations
