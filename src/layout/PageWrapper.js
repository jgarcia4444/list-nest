
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';

const PageWrapper = ({children, UserInfo}) => {

    const {loading, userInfo} = UserInfo;
    const {uid} = userInfo;

    const navigate = useNavigate()

    useEffect(() => {
        if(uid === "") {
            navigate('/');
        }
    }, [uid])

    return (
        <div className="flex flex-col h-screen overflow-y-auto w-full relative">
            <NavBar />
            <div className="">
                {children}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        UserInfo: state.UserInfo,
    }
}

export default connect(
    mapStateToProps,
    null
)(PageWrapper);