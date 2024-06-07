import React from 'react';

import AuthForm from './userAuth/AuthForm';

const UserAuth = () => {

    return (
        <div className="flex flex-col">
            <div className="">
                <h2 className="">Login</h2>
            </div>
            <AuthForm />
            <div className=""></div>
        </div>
    )
};

export default UserAuth;