import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from '../shared/buttons/SignOutButton';
import PageWrapper from '../layout/PageWrapper';

const Home = ({userInfo}) => {

    let {uid} = userInfo;

    const navigate = useNavigate();

    useEffect(() => {
        if(uid === "") {
            navigate('/');
        }
    },[uid])

    return (
        <PageWrapper>
            <div className="">
                Home
                {/* <SignOutButton /> */}
            </div>
        </PageWrapper>
    )
};

const mapStateToProps = state => {
    return {
        userInfo: state.UserInfo.userInfo,
    }
}


export default connect(
    mapStateToProps,
    null
)(Home);