import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import emulators from '../config/firebaseConfiguration';

import SignOutButton from '../shared/buttons/SignOutButton';

const Home = ({uid}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(uid === "") {
            navigate('/');
        }
    },[uid])

    return (
        <div className="">
            Home
            <SignOutButton />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        uid: state.UserInfo.userInfo.uid,
    }
}


export default connect(
    mapStateToProps,
    null
)(Home);