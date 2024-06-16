
const initialState = {
    info: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phoneNumber: "",
        id: undefined,
    },
    loading: false,
}

const UserReducer = (state=initialState, action) => {
    switch (action.type) {
        case "USER_CREATION_ERROR":
            return {
                ...state,
                loading: false
            }
        case "USER_CREATION_SUCCESS":
            return {
                ...state,
                info: {
                    ...action.userInfo
                },
                loading: false,
            }
        case "CREATING_USER":
            return {
                ...state,
                loading: true,
            }
        default:
            return {
                ...state,
            }
    }
}

export default UserReducer;