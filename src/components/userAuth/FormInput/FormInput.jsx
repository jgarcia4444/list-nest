import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import removeError from '../../../redux/actions/authActions/removeError';

const FormInput = ({info, errors, removeError, authInfo}) => {

    let {password} = authInfo;

    const {label, inputType, icon, placeholder, value, changeFunc, identifier} = info;



    const [errorMessage, setErrorMessage] = useState("");

    const setErrorText = () => {
        if (errors.length !== 0) {
            let foundError = errors.filter(errorObject => errorObject.identifier === identifier);
            if (foundError.length !== 0) {
                setErrorMessage(foundError[0].errorMessage);
            } else {
                return setErrorMessage("");
            }
        } else {
            setErrorMessage("");
        }
    }

    const handleInputChange = e => {
        if (errors.length === 0) {
            setErrorMessage("");
        }
        changeFunc(e.target.value);
        console.log(errors);
            if (errors.filter(errorInfo => errorInfo.identifier === identifier).length !== 0) {
                switch(identifier) {
                    case "firstName":
                        if (e.target.value.length > 0) {
                            removeError(identifier);
                        }
                        break;
                    case "lastName":
                        if (e.target.value.length > 0) {
                            removeError(identifier);
                        }
                        break;
                    case "username":
                        if (e.target.value.length > 3) {
                            removeError(identifier);
                        }
                        break;
                    case "email":
                        if (validateEmail(e.target.value) === true) {
                            removeError(identifier);
                        }
                        break;
                    case "password":
                        if (validatePassword(e.target.value) === true) {
                            removeError(identifier);
                        }
                        break;
                    case "passwordConfirmation":
                        if (password === e.target.value) {
                            removeError(identifier);
                        }
                        break;
                    default:
                        break;
                }
            }
    }

    const validateEmail = potentialEmail => {
        let emailQualifiers = ['@', '.']
        let qualifierIndex = 0;
        let testingChar = emailQualifiers[qualifierIndex];
        potentialEmail = potentialEmail.split(testingChar);
        if (potentialEmail.length === 2) {
            potentialEmail = potentialEmail[1];
            qualifierIndex += 1;
            testingChar = emailQualifiers[qualifierIndex];
            potentialEmail = potentialEmail.split(testingChar);
            if (potentialEmail.length === 2) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const validatePassword = password => {
        let passwordValidated = false;
        if (password.length > 7) {
            if (password.includes('!') || password.includes('@') || password.includes('#') || password.includes('$')) {
                let splitString = password.split('');
                if (splitString.some(char => char === char.toUpperCase())) {
                    if (splitString.some(char => char === char.toLowerCase())) {
                        passwordValidated = true;
                    }
                } 
            } 
        }
        return passwordValidated;
    }

    useEffect(() => {
        setErrorText();
    },[errors.length])

    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-row">
                <label className="font-thin text-sm text-nude-color">{label}</label>
                <small className=" text-red-600 text-xs">{errorMessage}</small>
            </div>
            <div className="flex flex-row bg-white bg-opacity-20 rounded py-1 px-2">
                {icon}
                <input 
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder} 
                    className="text-nude-color bg-transparent placeholder-nude-color placeholder-opacity-50 pl-2" 
                    type={inputType} 
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        errors: state.AuthControl.errors,
        authInfo: state.AuthControl.authInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeError: errorInfo => dispatch(removeError(errorInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormInput);