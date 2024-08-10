

import firebaseUser from "../../../config/firebaseUser";
import emulators from "../../../config/firebaseConfiguration";
const {auth} = emulators;
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const createUser = (userInfo) => {
    

    const {email, password} = userInfo;

    return async dispatch => {
        dispatch({type: "CREATING_USER"});
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // let {user} = userCredential
                // let userInfo = firebaseUser(user);
                // return dispatch({type: "USER_CREATED", userInfo})
                updateProfile(userCredential.user, {
                    displayName: userInfo.username,
                    phoneNumber: userInfo.phoneNumber,
                })
                .then(blah => {
                    console.log("blah", blah);
                })
            })
            .catch(error => {
                console.log("Uh oh there was an error while trying to create the user.");
                console.log(error.code);
                console.log(error.message);
            })
    }
}

export default createUser