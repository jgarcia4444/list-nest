import React from 'react';
import { FiPlus } from "react-icons/fi";

const AddListButton = () => {

    return (
        <div className="rounded bg-primary-green flex items-center justify-center p-1 hover:cursor-pointer hover:bg-opacity-100 transition-all duration-300 bg-opacity-70 active:scale-90 active:bg-opacity-40">
            <FiPlus color={"#fff"} size={24} />
        </div>
    )
}

export default AddListButton;