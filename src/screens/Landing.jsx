import React from 'react';
import logo from '../media/logo/ListNest.png';

import UserAuth from '../components/UserAuth';

const Landing = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="">
                <img src={logo} alt="" className="w-24" />
            </div>
            <UserAuth />
        </div>
    )
}

export default Landing;