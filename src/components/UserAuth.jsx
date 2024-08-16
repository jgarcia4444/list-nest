import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { FiLoader } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import AuthForm from './userAuth/AuthForm';

import createUser from '../redux/actions/userActions/createUser';
import loginUser from '../redux/actions/userActions/loginUser';

const UserAuth = ({UserInfo, createUser, authInfo, loginUser}) => {

    const navigate = useNavigate();

    const {loading, userInfo, errors} = UserInfo;

    let {email} = userInfo;

    const [login, setLogin] = useState(true);

    const otherPageButton = (
        <button onClick={() => setLogin(!login)} className="text-primary-green bg-white py-1 px-4 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105">
            {login === true ? "Sign Up": "Login"}
        </button>
    )

    
    const loader = <FiLoader color={"#fff"} size={24} className="animate-spin" />

    const validateForm = validatingInfo => {
        let infoKeys = Object.keys(validatingInfo);
        for (let i = 0; i < infoKeys.length; i++) {
            let infoKey = infoKeys[i];
            if (validatingInfo[infoKey] === "") {

            } else {
                // check for other requirements
                switch(infoKey) {
                    case "email":
                    case "password":
                    case "passwordConfirmation":
                    case "firstName":
                    case "lastName":
                    case "username":
                    default:
                        continue;
                }
            }
        }
    }
    
    const handleSubmitPress = () => {
        validateForm()
        let infoToBeValidated = {
            email: authInfo.email,
            password: authInfo.password
        }
        if (login === false) {
            infoToBeValidated = authInfo;
        }
        validateForm(infoToBeValidated);
        if (errors.length === 0) {
            if (login === true) {
                loginUser(authInfo);
            } else {
                createUser(authInfo);
            }
        }
    }
    
    const submitButtonText = login === true ? "Login": "Sign Up";
    const submitButton = (
        <div onClick={handleSubmitPress} className="bg-primary-green text-nude-color w-1/3 py-1 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105 flex items-center justify-center">
            {loading === true ? loader : submitButtonText}
        </div>
    )

    useEffect(() => {
        console.log("What is the email", email);
        if (email !== "") {
            navigate("/home");
        }
    }, [email])

    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-1/2 text-left">
                <h2 className="font-bold text-2xl">{login === true ? "Login" : "Sign Up"}</h2>
            </div>
            <AuthForm login={login} />
            <div className="w-1/2 flex flex-row items-center justify-between mt-1">
                {otherPageButton}
                {submitButton}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        UserInfo: state.UserInfo,
        authInfo: state.AuthControl.authInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: userInfo => dispatch(createUser(userInfo)),
        loginUser: info => dispatch(loginUser(info)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAuth);