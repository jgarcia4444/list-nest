import React from 'react';
import { FiUsers, FiUser, FiSettings, FiLogOut, FiLoader } from "react-icons/fi";

import logo from '../../media/logo/ListNest-no-bg.png';
import NavLink from './NavLink/NavLink';

import logoutUser from '../../redux/actions/userActions/logoutUser';

const NavBar = () => {


    const renderNavLink = () => {
        const iconSize = 20;
        const iconColor = "#89dbab";
        
        const settings = () => {
            const linkInfo = {label: "Settings", to: "users/settings", icon: <FiSettings size={iconSize} color={iconColor} />}
            return <NavLink linkInfo={linkInfo}/>
        }

        const logoutUser = () => {
            const linkInfo = { label: "Logout", to: "#", icon: <FiLogOut icon={iconColor} color={iconColor} /> }
            return <NavLink linkInfo={linkInfo} />
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




export default NavBar;