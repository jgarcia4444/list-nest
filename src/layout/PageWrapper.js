
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';

const PageWrapper = ({children, userInfo}) => {

    const {uid} = userInfo;

    const navigate = useNavigate()

    useEffect(() => {
        if(uid === "") {
            navigate('/');
        }
    }, [uid])

    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="">
                {children}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userInfo: state.UserInfo.userInfo,
    }
}

export default connect(
    mapStateToProps,
    null
)(PageWrapper);