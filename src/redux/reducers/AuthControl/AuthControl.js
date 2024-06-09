const initialState = {
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
    loading: false,
}

const AuthControl = (state=initialState, action) => {
    switch(action.type) {
        default: 
        return {
            ...state,
        }
    }
}

export default AuthControl