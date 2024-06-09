import React from 'react';

const FormInput = ({info}) => {

    const {label, inputType, icon} = info;

    return (
        <div className="flex flex-col items-start">
            <label className="font-thin text-sm">{label}</label>
            <div className="flex flex-row bg-primary-green rounded py-1 px-2">
                {icon}
                <input className="text-nude-color bg-transparent" type={inputType} />
            </div>
        </div>
    )
}

export default FormInput;