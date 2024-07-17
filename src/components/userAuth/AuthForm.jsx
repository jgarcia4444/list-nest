import React from 'react';
import {FiUser, FiMail, FiPhone, FiLock} from 'react-icons/fi';
import { connect } from 'react-redux';

import FormInput from './FormInput/FormInput';

import formChange from '../../redux/actions/authActions/formChange';

const AuthForm = ({login, authInfo}) => {

    const iconSize = 24;
    const iconColor = "#f5ebe7";

    const {firstName, lastName} = authInfo;

    const formInputs = [
        {label: "First Name", inputType: "text", icon: <FiUser size={iconSize} color={iconColor} />, placeholder: "John", value: {firstName}, onChange: () => formChange({firstName})},
        {label: "Last Name", inputType: "text", icon: <FiUser size={iconSize} color={iconColor} />, placeholder: "Doe", value: lastName, onChange: ""},
        {label: "Username", inputType: "text", icon: <FiUser size={iconSize} color={iconColor} />, placeholder: "jDoe1234", value: "", onChange: ""},
        {label: "Email", inputType: "email", icon: <FiMail size={iconSize} color={iconColor} />, placeholder: "johndoe@email.com", value: "", onChange: ""},
        {label: "Phone Number", inputType: "tel", icon: <FiPhone size={iconSize} color={iconColor} />, placeholder: "1234567891", value: "", onChange: ""},
        {label: "Password", inputType: "password", icon: <FiLock size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
        {label: "Password Confirmation", inputType: "password", icon: <FiLock size={iconSize} color={iconColor} />, placeholder: "", value: "", onChange: ""},
    ];

    const renderInputs = () => {
        let inputs = formInputs;
        if (login === true) {
            inputs = formInputs.filter(inputInfo => inputInfo.label === "Email" || inputInfo.label === "Password");
        }
        return inputs.map((info, i) => {
            return <FormInput info={info} key={`${i}-${info.label}`} />
        })
    }

    return (
        <div className="flex flex-row flex-wrap w-1/2 bg-primary-green rounded items-center justify-center md:justify-between p-1">
            {renderInputs()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authInfo: state.AuthControl.authInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        formChange: (newInfo) => dispatch(formChange(newInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthForm);