import React, {useEffect, useState} from 'react';
import { getFirestore, connectFirestoreEmulator, } from 'firebase/firestore';
import { getAuth, connectAuthEmulator, onAuthStateChanged } from 'firebase/auth';

import logo from '../media/logo/ListNest-no-bg.png';

import UserAuth from '../components/UserAuth';

import emulators from '../config/firebaseConfiguration';

const Landing = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {store, auth} = emulators;

    const checkLogIn = () => {
        let user = auth.currentUser
        if (user) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false);
        }
    }

    useEffect(() => {
        checkLogIn()
    })

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            {isLoggedIn === true ?
                <Home />
            :
            (
                <>
                    <div className="">
                        <img src={logo} alt="" className="w-32" />
                    </div>
                    <UserAuth />
                </>
            )
            }
        </div>
    )
}

export default Landing;