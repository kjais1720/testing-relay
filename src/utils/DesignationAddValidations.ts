import * as yup from 'yup'

const DesignationAddValidations = yup.object().shape({
    'name': yup.string().required('required'),
    'description': yup.string()
})

export default DesignationAddValidations
