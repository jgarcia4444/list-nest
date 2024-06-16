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