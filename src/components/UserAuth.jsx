import React, {useState} from 'react';

import AuthForm from './userAuth/AuthForm';

const UserAuth = () => {

    const [login, setLogin] = useState(true);

    const otherPageButton = (
        <p onClick={() => setLogin(!login)} className="text-primary-green hover:cursor-pointer">
            {login === true ? "Sign Up": "Login"}
        </p>
    )

    const submitButton = (
        <div className="bg-primary-green text-nude-color px-8 py-1 rounded hover:cursor-pointer transition-all duration-300 hover:scale-105">
            {login === true ? "Login": "Sign Up"}
        </div>
    )

    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-1/2 text-left">
                <h2 className="font-bold text-2xl">{login === true ? "Login" : "Sign Up"}</h2>
            </div>
            <AuthForm login={login} />
            <div className="w-1/2 flex flex-row items-center justify-between mt-1">
                {otherPageButton}
                {submitButton}
            </div>
        </div>
    )
};

export default UserAuth;