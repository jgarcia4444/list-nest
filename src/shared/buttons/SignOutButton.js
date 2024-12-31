import React from 'react'
import { connect } from 'react-redux';
import { FiLoader } from 'react-icons/fi';

import signOutUser from '../../redux/actions/userActions/logoutUser';


const SignOutButton = ({loading, signOutUser}) => {

    return (
        <button onClick={() => signOutUser()} className="bg-primary-green px-8 py-2 rounded text-white">
            {loading === true ? 
                loader
                :
                "Sign Out"
            }
        </button>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.UserInfo.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOutUser: () => dispatch(signOutUser())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignOutButton);