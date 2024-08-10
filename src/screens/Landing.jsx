import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../media/logo/ListNest-no-bg.png';

import UserAuth from '../components/UserAuth';
import Home from './Home';

import emulators from '../config/firebaseConfiguration';

const Landing = ()  => {

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="">
                <img src={logo} alt="" className="w-32" />
            </div>
            <UserAuth />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        uid: state.UserInfo.userInfo.uid,
    }
}

export default connect(
    mapStateToProps,
    null
)(Landing);