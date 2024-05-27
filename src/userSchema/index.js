import * as Yup from 'yup'

export const userSchema=Yup.object({
    first:Yup.string().min(3).max(10).required('Please enter first name'),
    last:Yup.string().min(3).max(10).required('Please enter last name'),
    email:Yup.string().email().required('Please enter email'),
    roll:Yup.string().min(1).max(10).required('Please enter roll no')
})