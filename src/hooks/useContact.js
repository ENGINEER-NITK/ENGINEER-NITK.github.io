import validator from "validator/es";

export default function useContact({fields, types}) {
    let isValid = true
    let errors = []
    Object.keys(fields).forEach((key, _i) => {
        const validatedField = validate(fields[key], types[_i])
        if(!validatedField.valid){
            isValid = false
            errors.push(validatedField.error)
        }
    })
    return [isValid, errors]
}


function validate(field, type){
    let res = { }
    switch (type) {
        case 'email':
           res = {
               valid: validator.isEmail(field),
               error: 'Please provide an email address'
           }
           break;
        case 'phone':
            res = {
                valid: validator.isMobilePhone(field, 'en-IN'),
                error: 'Please provide an Indian phone number'
            }
            break;
        case 'first_name':
            res = {
                valid: field.length > 0,
                error: 'Please enter your first name'
            }
            break;
        case 'last_name':
            res = {
                valid: field.length > 0,
                error: 'Please enter your last name'
            }
            break;
        case 'description':
            res = {
                valid: field.split(" ").length > 10,
                error: 'Please provide a little longer description'
            }
            break;
        default:
            res = {
                valid: true,
                error: ''
            }
    }

    return res
}
