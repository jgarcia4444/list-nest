const initialState = {
    authInfo: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmation: "",
    },
    errors: [],
    mainError: "",
}

const AuthControl = (state=initialState, action) => {
    switch(action.type) {
        case "REMOVE_ERROR":
            let {identifier} = action.errorInfo;
            let filteredErrors = state.errors.filter(error => error.identifier !== identifier)
            return {
                ...state,
                errors: filteredErrors
            }
        case "ADD_ERROR":
            return {
                ...state,
                errors: [...state.errors, action.errorInfo]
            }
        case "FORM_CHANGE":
            return {
                ...state,
                authInfo: {
                    ...state.authInfo,
                    ...action.newInfo
                }
            }
        case "USER_CREATION_ERROR":
            return {
                ...state,
                mainError: action.error.message,
                errors: action.error.errors,
            } 
        default: 
            return {
            ...state,
        }
    }
}

export default AuthControl