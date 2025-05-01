import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';



const dateStr = format(new Date(), 'EEEE , MMMM dd , yyyy');
const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-10 gap-5'>
            <img src={logo} alt="" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{dateStr}</p>
        </div>
    );
};

export default Header;