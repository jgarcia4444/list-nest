import React from 'react';

import emulators from '../config/firebaseConfiguration';

import SignOutButton from '../shared/buttons/SignOutButton';

const Home = () => {

    const {auth} = emulators;
    console.log("Auth from the Home screen: ",auth)

    return (
        <div className="">
            Home
            <SignOutButton />
        </div>
    )
};

export default Home;