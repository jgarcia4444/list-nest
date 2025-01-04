import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import PageWrapper from '../layout/PageWrapper';
import Lists from '../components/Lists/Lists';

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
                <Lists />
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