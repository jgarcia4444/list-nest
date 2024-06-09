
const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    loggedIn: false,
}

const UserReducer = (state=initialState, action) => {
    switch (action.type) {

        default:
            return {
                ...state,
            }
    }
}

export default UserReducer;