import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { FiLoader } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import AuthForm from './userAuth/AuthForm';

import createUser from '../redux/actions/userActions/createUser';
import loginUser from '../redux/actions/userActions/loginUser';
import addError from '../redux/actions/authActions/addError';

const UserAuth = ({UserInfo, createUser, AuthControl, loginUser, addError}) => {

    const navigate = useNavigate();
    const {authInfo, errors} = AuthControl
    const {loading, userInfo, } = UserInfo;

    let {email} = userInfo;

    const [login, setLogin] = useState(true);

    const otherPageButton = (
        <button onClick={() => setLogin(!login)} className="text-primary-green bg-white py-1 px-4 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105">
            {login === true ? "Sign Up": "Login"}
        </button>
    )

    
    const loader = <FiLoader color={"#fff"} size={24} className="animate-spin" />

    const validateForm = validatingInfo => {
        let errorPresent = false;
        let infoKeys = Object.keys(validatingInfo);
        for (let i = 0; i < infoKeys.length; i++) {
            let infoKey = infoKeys[i];
            if (validatingInfo[infoKey] === "") {
                errorPresent = true;
                let errorInfo = {
                    identifier: infoKey,
                    errorMessage: "Can not be left empty",
                }
                addError(errorInfo);
            } else {
                // check for other requirements
                let infoValue = validatingInfo[infoKey];
                switch(infoKey) {
                    case "email":
                        validateEmail(infoValue);
                    case "password":
                        validatePassword(infoValue);
                    case "passwordConfirmation":
                        validatePasswordConfirmation(infoValue);
                    case "firstName":
                        // remove first name error
                    case "lastName":    
                        //remove last name error                        
                    case "username":
                        validateUsername(infoValue);
                    default:
                        continue;
                }
            }
        }
        if (errors.length !== 0) {
            errorPresent = true;
        }
        return errorPresent;
    }

    const validateEmail = potentialEmail => {
        let emailQualifiers = ['@', '.']
        let qualifierIndex = 0;
        let testingChar = emailQualifiers[qualifierIndex];
        potentialEmail.split(testingChar);
        if (potentialEmail.length !== 2) {
            let errorInfo = {
                identifier: "email",
                errorMessage: "Must contain an '@' symbol"
            }
            addError(errorInfo);
        }
        potentialEmail = potentialEmail[1];
        qualifierIndex += 1;
        testingChar = emailQualifiers[qualifierIndex];
        potentialEmail.split(testingChar);
        if (potentialEmail.length !== 2) {
            let errorInfo = {
                identifier: "email",
                errorMessage: "Must contain a '.' symbol"
            }
        }
    }
    
    const handleSubmitPress = () => {
        let infoToBeValidated = {
            email: authInfo.email,
            password: authInfo.password
        }
        if (login === false) {
            infoToBeValidated = authInfo;
        }
        if (validateForm(infoToBeValidated) === false) {
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
        AuthControl: state.AuthControl,
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: userInfo => dispatch(createUser(userInfo)),
        loginUser: info => dispatch(loginUser(info)),
        addError: errorInfo => dispatch(addError(errorInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAuth);