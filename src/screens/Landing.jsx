import React from 'react';
import logo from '../media/logo/ListNest-no-bg.png';

import UserAuth from '../components/UserAuth';

const Landing = () => {

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="">
                <img src={logo} alt="" className="w-32" />
            </div>
            <UserAuth />
        </div>
    )
}

export default Landing;