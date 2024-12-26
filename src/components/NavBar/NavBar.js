import React from 'react';
import { FiUsers } from "react-icons/fi";

import logo from '../../media/logo/ListNest-no-bg.png';
import NavLink from './NavLink/NavLink';

const NavBar = () => {

    const renderNavLink = () => {
        const navLinks = [
            {label: "Housemates", to: "housemates", icon: "", dropdownLinks: []},
            {label: "", to: "", icon: "", dropdownLinks: []},
        ]
        return navLinks.map((linkInfo) => <NavLink linkInfo={linkInfo}/>)
    }

    return (
        <div className="flex flex-row w-full">
            <div className="w-1/5">
                <img src={logo} alt="" className="w-1/2" />
            </div>
            <div className="w-4/5 flex flex-row items-end">
                {renderNavLink()}
            </div>
        </div>
    )
}

export default NavBar;