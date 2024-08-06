import { signInWithEmailAndPassword } from 'firebase/auth';
import emulators from '../../../config/firebaseConfiguration'
const loginUser = authInfo => {

    const {auth} = emulators;

    const {email, password} = authInfo;

    return async dispatch => {
        dispatch({type: "LOGGING_IN"});
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                return dispatch({type: "USER_LOGIN_SUCCESS"});
            })
            .catch(error => {
                console.log("There was an error logging in", error.message);
            });
    }
}

export default loginUser;