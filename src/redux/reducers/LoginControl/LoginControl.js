const initialState = {
    username: "",
    password: "",
    loading: false,
}

const LoginControl = (state=initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state,
            }
    }
}

export default LoginControl;