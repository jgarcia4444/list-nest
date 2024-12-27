import React, {useState} from 'react';

const NavLink = ({linkInfo}) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const {to, label,  icon, dropdownLinks} = linkInfo;

    const handleOnClick = () => {
        if (to === "#") {
            setShowDropdown(!showDropdown);
        }
    }

    const renderDropdownLinks = () => {
        return dropdownLinks.map(dropdownLink => dropdownLink)   
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