import React, {useState, useEffect} from 'react';

import { onAuthStateChanged } from 'firebase/auth';

import logo from '../media/logo/ListNest-no-bg.png';

import UserAuth from '../components/UserAuth';
import Home from './Home';

import emulators from '../config/firebaseConfiguration';

const Landing = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {store, auth} = emulators;

    // onAuthStateChanged(auth, user => {
    //     console.log("AUTH STATE CHANGED", auth);
    //     if (user) {
    //         setIsLoggedIn(true);
    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // })

    useEffect(() => {
        console.log("current user from the landing component", auth.currentUser);
        if (auth.currentUser) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    },[auth.currentUser])

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