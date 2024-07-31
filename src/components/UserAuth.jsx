import React, {useState} from 'react';
import { connect } from 'react-redux';
import { FiLoader } from 'react-icons/fi';

import AuthForm from './userAuth/AuthForm';

import createUser from '../redux/actions/userActions/createUser';
import loginUser from '../redux/actions/userActions/loginUser';

const UserAuth = ({UserInfo, createUser, authInfo, loginUser}) => {

    const {loading} = UserInfo;

    const [login, setLogin] = useState(true);

    const otherPageButton = (
        <button onClick={() => setLogin(!login)} className="text-primary-green bg-white py-1 px-4 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105">
            {login === true ? "Sign Up": "Login"}
        </button>
    )

    
    const loader = <FiLoader color={"#fff"} size={24} className="animate-spin" />
    
    const handleSubmitPress = () => {
        if (login === true) {
            loginUser(authInfo);
        } else {
            console.log("Create user should be triggered from the UserAuth component!");
            createUser(authInfo);
        }
    }
    
    const submitButtonText = login === true ? "Login": "Sign Up";
    const submitButton = (
        <div onClick={handleSubmitPress} className="bg-primary-green text-nude-color w-1/3 py-1 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105">
            {loading === true ? loader : submitButtonText}
        </div>
    )

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