
import firebase from "firebase/compat/app";
import { Urls } from "../../../config/Urls";
const {api} = Urls;

import emulators from "../../../config/firebaseConfiguration";
const {auth} = emulators;
import { createUserWithEmailAndPassword} from "firebase/auth";

const firebaseUser = userInfo => {
    let {email, uid, accessToken, displayName, phoneNumber, emailVerified} = userInfo;
    return {
        email,
        accessToken,
        displayName,
        phoneNumber,
        emailVerified
    }
}

const createUser = (userInfo) => {

    const {email, password} = userInfo;

    return async dispatch => {
        dispatch({type: "CREATING_USER"});
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setTimeout(() => {
                    let {user} = userCredential
                    let userInfo = firebaseUser(user);
                    dispatch({type: "USER_CREATED", userInfo})
                }, 1250)
            })
            .catch(error => {
                console.log("Uh oh there was an error while trying to create the user.", error);
                console.log(error.code);
                console.log(error.message);
            })
    }
}

export default createUser