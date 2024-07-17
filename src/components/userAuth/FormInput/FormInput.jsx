import React from 'react';

const FormInput = ({info}) => {

    const {label, inputType, icon, placeholder} = info;

    return (
        <div className="flex flex-col items-start">
            <label className="font-thin text-sm text-nude-color">{label}</label>
            <div className="flex flex-row bg-white bg-opacity-20 rounded py-1 px-2">
                {icon}
                <input placeholder={placeholder} className="text-nude-color bg-transparent placeholder-nude-color placeholder-opacity-50 pl-2" type={inputType} />
            </div>
        </div>
    )
}

export default FormInput;