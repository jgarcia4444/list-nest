import React, {useState} from 'react';
import { connect } from 'react-redux';
import { FiLoader } from 'react-icons/fi';

import AuthForm from './userAuth/AuthForm';

import createUser from '../redux/actions/userActions/createUser';

const UserAuth = ({UserInfo, createUser, authInfo}) => {

    const {loading} = UserInfo;

    const [login, setLogin] = useState(true);

    const otherPageButton = (
        <p onClick={() => setLogin(!login)} className="text-primary-green hover:cursor-pointer">
            {login === true ? "Sign Up": "Login"}
        </p>
    )

    const submitButtonText = login === true ? "Login": "Sign Up";
    const loader = <FiLoader color={"#fff"} size={24} className="animate-spin" />
    const submitButton = (
        <div onClick={() => createUser(authInfo)} className="bg-primary-green text-nude-color w-1/3 py-1 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105">
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAuth);