import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogIn = () => {
    return (
        <div className='space-y-2 mt-3'>
            <button className='btn w-full'><FcGoogle size={20} />Login With Google</button>
            <button className='btn w-full'><FaGithub size={20} />Login With Github</button>
        </div>
    );
};

export default SocialLogIn;