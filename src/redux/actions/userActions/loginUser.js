const loginUser = authInfo => {
    return {
        type: "USER_LOGGIN_IN",
        authInfo
    }
}

export default loginUser;