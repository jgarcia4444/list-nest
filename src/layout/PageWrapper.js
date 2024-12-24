
import React from 'react';
import NavBar from '../components/NavBar/NavBar';

const PageWrapper = ({children}) => {

    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default PageWrapper;