import React from 'react';

import emulators from '../config/firebaseConfiguration';

const Home = () => {

    const {auth} = emulators;
    console.log("Auth from the Home screen: ",auth)

    return (
        <div className="">
            Home
        </div>
    )
};

export default Home;