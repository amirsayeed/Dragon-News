import React from 'react';
import SocialLogIn from './SocialLogIn/SocialLogIn';
import SocialLinks from './SocialLinks/SocialLinks';
import Qzone from './Qzone/Qzone';

const RightSideNav = () => {
    return (
        <div>
            <h2 className='text-lg font-bold text-primary'>Login With</h2>
            <div className='space-y-8'>
                <SocialLogIn/>
                <SocialLinks/>
                <Qzone/>
            </div>
        </div>
    );
};

export default RightSideNav;