
import firebase from "firebase/compat/app";
import { Urls } from "../../../config/Urls";
const {api} = Urls;
import firebaseUser from "../../../config/firebaseUser";

import emulators from "../../../config/firebaseConfiguration";
const {auth} = emulators;
import { createUserWithEmailAndPassword} from "firebase/auth";

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
                console.log("Uh oh there was an error while trying to create the user.");
                console.log(error.code);
                console.log(error.message);
            })
    }
}

export default createUser