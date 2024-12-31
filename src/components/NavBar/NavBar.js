import React from 'react';
import { FiUsers, FiUser, FiSettings, FiLogOut, FiLoader } from "react-icons/fi";
import { connect } from 'react-redux';

import logo from '../../media/logo/ListNest-no-bg.png';
import NavLink from './NavLink/NavLink';

import logoutUser from '../../redux/actions/userActions/logoutUser';

const NavBar = ({handleLogoutUser, UserInfo}) => {

    const {loading} = UserInfo;

    const renderNavLink = () => {
        const iconSize = 20;
        const iconColor = "#89dbab";
        
        const settings = () => {
            const linkInfo = {label: "Settings", to: "users/settings", icon: <FiSettings size={iconSize} color={iconColor} />}
            return <NavLink linkInfo={linkInfo}/>
        }

        const logoutUser = () => {
            const loader = <FiLoader color={iconColor} size={iconSize} className="animate-spin" />
            const containerRowClass = "flex flex-row bg-white bg-opacity-40 p-1 w-full"
            if (loading === false) {
                return (
                    <div onClick={handleLogoutUser} className={`${containerRowClass} hover:bg-opacity-80 transition-all duration-300 items-center justify-start`}>
                        <div className="">
                            <FiLogOut color={iconColor} size={iconSize} />
                        </div>
                        <div className="">Logout</div>
                    </div>
                )
            } else {
                return (
                    <div className={`${containerRowClass} items-center justify-center`}>
                        {loader}
                    </div>
                )
            }
            
        }

        const navLinks = [
            {label: "Housemates", to: "housemates", icon: <FiUsers size={iconSize} color={iconColor} />, dropdownLinks: []},
            {label: "Account", to: "#", icon: <FiUser size={iconSize} color={iconColor} />, dropdownLinks: [settings(), logoutUser()]},
        ]
        return navLinks.map((linkInfo) => <NavLink linkInfo={linkInfo}/>)
    }

    return (
        <div className="flex flex-row w-full justify-between">
            <div className="w-1/5">
                <img src={logo} alt="" className="w-1/2" />
            </div>
            <div className="flex flex-row items-center mr-6 gap-4">
                {renderNavLink()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        UserInfo: state.UserInfo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);