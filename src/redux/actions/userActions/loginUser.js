import { signInWithEmailAndPassword } from 'firebase/auth';

import emulators from '../../../config/firebaseConfiguration'
import firebaseUser from '../../../config/firebaseUser';
const loginUser = authInfo => {

    const {auth} = emulators;

    const {email, password} = authInfo;

    return async dispatch => {
        dispatch({type: "LOGGING_IN"});
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setTimeout(() => {
                    let {user} = userCredential;
                    let userInfo = firebaseUser(user);
                    return dispatch({type: "USER_LOGIN_SUCCESS", userInfo: userInfo});
                }, 1250)
            })
            .catch(error => {
                console.log("There was an error logging in", error.message);
            });
    }
}

export default loginUser;