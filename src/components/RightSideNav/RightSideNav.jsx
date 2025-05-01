import React from 'react';
import SocialLogIn from './SocialLogIn/SocialLogIn';

const RightSideNav = () => {
    return (
        <div>
            <h2 className='text-lg font-bold text-primary'>Login With</h2>
            <div className='space-y-5'>
                <SocialLogIn/>
            </div>
        </div>
    );
};

export default RightSideNav;