
const initialState = {
    userInfo: {
        email: "",
        uid: "",
        accessToken: "",
        emailVerified: "",
        displayName: "",
    },
    loading: false,
    error: "",
    errors: [],
}

const UserReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            if (action.payload !== undefined) {
                return {
                    ...action.payload.UserInfo
                }
            } else {
                return {
                    ...state
                }
            }
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                userInfo: {
                    ...action.userInfo
                },
                loading: false,
            }
        case "LOGGING_IN":
            return {
                ...state,
                loading: true,
            }
        case "USER_LOG_OUT_SUCCESS": {
            return {
                ...initialState
            }
        }
        case "LOGGING_USER_OUT":
            return {
                ...state,
                loading: true,
            }
        case "USER_CREATION_ERROR":
            return {
                ...state,
                loading: false
            }
        case "CREATING_USER":
            return {
                ...state,
                loading: true,
            }
        case "USER_CREATED":
            return {
                ...state,
                loading: false,
                userInfo: {
                    ...action.userInfo,
                }
            }
        default:
            return {
                ...state,
            }
    }
}

export default UserReducer;