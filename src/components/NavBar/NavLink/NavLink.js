import React, {useState} from 'react';
import { connect } from 'react-redux';
import { FiLoader } from 'react-icons/fi';

import logoutUser from '../../../redux/actions/userActions/logoutUser';

const NavLink = ({linkInfo, logoutUser, loading}) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const {to, label,  icon, dropdownLinks} = linkInfo;
    const iconSize = 20;
    const iconColor = "#89dbab";

    const handleOnClick = () => {
        if (to === "#") {
            if (label === "Logout") {
                logoutUser()
            } else {
                setShowDropdown(!showDropdown);
            }
        }
    }

    const renderDropdownLinks = () => {
        return dropdownLinks.map(dropdownLink => {
            return (
                <div className="">
                    {dropdownLink}
                </div>
            )
        })   
    }

    const showLoading = () => {
        const loader = <FiLoader color={iconColor} size={iconSize} className="animate-spin" />
        if (showLoader === true && label === "Logout") {
            return (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    {loader}
                </div>
            )
        }
    }

    return (
        <a href={to} onClick={handleOnClick} className="">
            <div className={`flex flex-row relative ${label === "Settings" || label === "Logout" ? "p-1 bg-black bg-opacity-40 hover:bg-opacity-90 transition-all duration-300 w-24 items-center justify-center" : ""}`}>
                {showLoading()}
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

const mapStateToProps = state => {
    return {
        loading: state.UserInfo.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavLink);