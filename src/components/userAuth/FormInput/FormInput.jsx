import React from 'react';

const FormInput = ({info}) => {

    const {label, inputType, icon, placeholder} = info;

    return (
        <div className="flex flex-col items-start">
            <label htmlFor={label} className="font-thin text-sm">{label}</label>
            <div className="flex flex-row bg-primary-green rounded py-1 px-2">
                {icon}
                <input name={label} placeholder={placeholder} className="ml-1 text-nude-color bg-transparent placeholder-nude-color placeholder-opacity-50" type={inputType} />
            </div>
        </div>
    )
}

export default FormInput;