import React, {useState, useEffect} from 'react';

import { connect } from 'react-redux';

const FormInput = ({info, errors}) => {

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
        }
    }

    const handleInputChange = e => {
        if (errors.length !== 0) {
            if (errors.filter(errorInfo => errorInfo.identifier === identifier).length !== 0) {
                switch(identifier) {
                    case "firstName":
                        if (e.target.value.length > 0) {
                            changeFunc(e.target.value);
                            removeError(identifier);
                        }
                    case "lastName":
                    case "username":
                    case "email":
                    case "password":
                    case "passwordConfirmation":
                    default:
                        break;
                }
            }
        }
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
    }
}

export default connect(
    mapStateToProps,
    null
)(FormInput);