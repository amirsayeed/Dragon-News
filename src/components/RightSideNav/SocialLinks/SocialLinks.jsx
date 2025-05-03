import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router';

const SocialLinks = () => {
    return (
        <div>
            <h2 className='text-lg font-bold'>Find us on</h2>
            <div className="join join-vertical mt-3 w-full">
            <Link target='_blank' to='https://www.facebook.com/' className="btn join-item p-6"><FaFacebook size={20}/>Facebook</Link>
            <Link target='_blank' to='https://x.com/' className="btn join-item p-6"><BsTwitterX size={20}/>Twitter</Link>
            <Link target='_blank' to='https://www.instagram.com/' className="btn join-item p-6"><BsInstagram size={20}/>Instagram</Link>
            </div>
        </div>
    );
};

export default SocialLinks;