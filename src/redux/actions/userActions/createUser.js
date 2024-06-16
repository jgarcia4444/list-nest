
import { Urls } from "../../../config/Urls";
const {api} = Urls;

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
    const configuredInfo = configureUserInfo(userInfo);
    return async dispatch => {
        dispatch({type: "CREATING_USER"});
        const url = `${api}/users`;
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(configuredInfo)
        }
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                let {success} = data;
                if (success === true) {
                    let {userInfo} = data;
                    return dispatch({type: "USER_CREATION_SUCCESS", userInfo});
                } else {
                    let {error} = data;
                    return dispatch({type: "USER_CREATION_ERROR", errorInfo: error})
                }
            })
    }
}

export default createUser