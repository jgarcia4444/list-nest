import { createUserWithEmailAndPassword, updateProfile, updatePhoneNumber, } from "firebase/auth";

import firebaseUser from '../../../config/firebaseUser';
import emulators from "../../../config/firebaseConfiguration";
const {auth} = emulators;

const createUser = (userInfo) => {
    

    const {email, password, username, phoneNumber} = userInfo;

    return async dispatch => {
        dispatch({type: "CREATING_USER"});
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let {user} = userCredential
                updateProfile(user, {
                    displayName: username,
                })
                .then(() => { 
                    let savedUser = firebaseUser(user);
                    return dispatch({type: "USER_CREATED", userInfo: savedUser})
                })
                .catch(error => {
                    console.log("There was an error adding the usernam", error.message);
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