import React from 'react';
import swimming from '../../../assets/swimming.png';
import classRoom from '../../../assets/class.png';
import playGround from '../../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='p-3 bg-base-200'>
            <h2 className="text-lg font-bold">Q-Zone</h2>
            <div className='flex flex-col gap-3'>
                <img src={swimming} alt="" />
                <img src={classRoom} alt="" />
                <img src={playGround} alt="" />
            </div>            
        </div>
    );
};

export default Qzone;