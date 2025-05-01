import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='w-11/12 mx-auto bg-base-200 mt-10'>
            <div className='flex p-3 gap-5 items-center'>
                <button className='btn bg-secondary text-white'>Latest News</button>
                <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                    <p className='text-primary text-lg font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, dolores!</p>
                    <p className='text-primary text-lg font-medium'>lorem10</p>
                    <p className='text-primary text-lg font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, commodi.</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;