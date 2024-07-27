const initialState = {
    authInfo: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmation: "",
        phoneNumber: "",
    },
    errors: [],
    mainError: "",
}

const AuthControl = (state=initialState, action) => {
    console.log("AUTH CONTROL");
    switch(action.type) {
        case "FORM_CHANGE":
            console.log("FORM_CHANGE REDUCER TRIGGERED", action.newInfo);
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
        console.log("Is the default case being triggered??");
            return {
            ...state,
        }
    }
}

export default AuthControl