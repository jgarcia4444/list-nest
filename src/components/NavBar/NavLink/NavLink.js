import React, {useState} from 'react';

import { FiLoader } from 'react-icons/fi';

const NavLink = ({linkInfo}) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const {to, label,  icon, dropdownLinks} = linkInfo;

    const handleOnClick = () => {
        if (to === "#") {
            if (to === "logout") {
                setTimeout(() => null, 1000) 
            }
            setShowDropdown(!showDropdown);
        }
    }

    const renderDropdownLinks = () => {
        return dropdownLinks.map(dropdownLink => dropdownLink)   
    }

    const showLoading = () => {
        const loader = <FiLoader color={iconColor} size={iconSize} className="animate-spin" />
        if (loading === true && label === "logout") {
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                {loader}
            </div>
        } else {
            return ""
        }
    }

    return (
        <a href={to} onClick={handleOnClick} className="">
            <div className={`flex flex-row relative ${label === "Settings" ? "p-1 bg-white bg-opacity-40 hover:bg-opacity-80 transition-all duration-300" : ""}`}>
                <div className="">
                    {icon}
                </div>
                <div className="">
                    {label}
                </div>
                {showDropdown === true &&
                (
                    <div className="absolute top-6 left-0 flex flex-col items-start justify-center">
                        {renderDropdownLinks()}
                    </div>
                )
                }
            </div>
        </a>
    )
}

export default NavLink;