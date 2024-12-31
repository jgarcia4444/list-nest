import { signOut } from "firebase/auth";

import emulators from "../../../config/firebaseConfiguration";

const logoutUser = () => {
    const {auth}  = emulators;
    return async dispatch => {
        dispatch({type: "LOGGING_USER_OUT"});
        signOut(auth).then(() => {
                setTimeout(() => {
                    return dispatch({type: "USER_LOG_OUT_SUCCESS"});
                }, 1000)
            })
            .catch(error => {
                console.log("ERROR SIGING OUT", error.message)
                return dispatch({type: "Error sining user out", errorMessage: error.mesage})
            })
    }
}

export default logoutUser;