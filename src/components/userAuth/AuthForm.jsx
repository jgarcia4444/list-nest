import React from 'react';
import {FiUser, FiMail, FiPhone, FiLock} from 'react-icons/fi';

import FormInput from './FormInput/FormInput';

const AuthForm = ({login}) => {

    const iconSize = 24;
    const iconColor = "#f5ebe7";

    const formInputs = [
        {label: "First Name", inputType: "", icon: <FiUser size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
        {label: "Last Name", inputType: "", icon: <FiUser size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
        {label: "Username", inputType: "", icon: <FiUser size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
        {label: "Email", inputType: "", icon: <FiMail size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
        {label: "Phone Number", inputType: "", icon: <FiPhone size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
        {label: "Password", inputType: "", icon: <FiLock size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
        {label: "Password Confirmation", inputType: "", icon: <FiLock size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
    ];

    const renderInputs = () => {
        let inputRange = login === true ? 2 : formInputs.length;
        return formInputs.slice(0, inputRange).map((info, i) => {
            return <FormInput info={info} key={`${i}-${info.label}`} />
        })
    }

    return (
        <div className="flex flex-row flex-wrap w-1/2 border-2 border-primary-green rounded items-center justify-center md:justify-between p-1">
            {renderInputs()}
        </div>
    )
}

export default AuthForm;