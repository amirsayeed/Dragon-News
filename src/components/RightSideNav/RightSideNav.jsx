import React from 'react';
import SocialLogIn from './SocialLogIn/SocialLogIn';
import SocialLinks from './SocialLinks/SocialLinks';
import Qzone from './Qzone/Qzone';


const RightSideNav = () => {
    return (
        <div>
            <div className='space-y-8'>
                <SocialLogIn/>
                <SocialLinks/>
                <Qzone/>
            </div>
        </div>
    );
};

export default RightSideNav;