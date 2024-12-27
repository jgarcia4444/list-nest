import React from 'react';
import { FiUsers, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { connect } from 'react-redux';

import logo from '../../media/logo/ListNest-no-bg.png';
import NavLink from './NavLink/NavLink';

const NavBar = ({logoutUser}) => {

    

    const renderNavLink = () => {
        const iconSize = 20;
        const iconColor = "#89dbab";
        
        const settings = () => {
            const linkInfo = {label: "Settings", to: "users/settings", icon: <FiSettings size={iconSize} color={iconColor} />}
            return <NavLink linkInfo={linkInfo}/>
        }

        const logoutUser = () => {
            return (
                <div onClick={logoutUser} className="flex flex-row bg-white bg-opacity-40 p-1 w-full hover:bg-opacity-80 transition-all duration-300">
                    <div className="">
                        <FiLogOut color={iconColor} size={iconSize} />
                    </div>
                    <div className="">Logout</div>
                </div>
            )
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

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch({type: "LOGOUT_USER"}),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(NavBar);