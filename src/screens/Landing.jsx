import React, {useEffect} from 'react';
import { getFirestore, connectFirestoreEmulator, } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

import logo from '../media/logo/ListNest-no-bg.png';

import UserAuth from '../components/UserAuth';

import emulators from '../config/firebaseConfiguration';

const Landing = () => {

    const {store, auth} = emulators;

    useEffect(() => {
        console.log("Firestore App", store);
        console.log("Auth connection", auth);
    })

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