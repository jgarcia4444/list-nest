
import { Urls } from "../../../config/Urls";
const {api} = Urls;

import emulators from "../../../config/firebaseConfiguration";
const {auth} = emulators;
import { createUserWithEmailAndPassword} from "firebase/auth";

const configureUserInfo = (userInfo) => {
    const {username, email, phonenNumber, firstName, lastName, password, passwordConfirmation} = userInfo;
    return {
        username,
        email,
        phone_number: phonenNumber,
        f_name: firstName,
        l_name: lastName,
        password,
        password_confirmation: passwordConfirmation,
    }
}

const createUser = (userInfo) => {

    const {email, password} = userInfo;

    return async dispatch => {
        dispatch({type: "CREATING_USER"});
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // user created properly
                dispatch({type: "USER_CREATED", userCredential})
                console.log("Yay new user created with firebase and auth!", userCredential)
            })
            .catch(error => {
                // error handling
                console.log("Uh oh there was an error while trying to create the user.", error);
                console.log(error.code);
                console.log(error.message);
            })
    }
}

export default createUser