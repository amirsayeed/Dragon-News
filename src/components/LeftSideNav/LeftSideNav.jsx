import React from 'react';
import Category from '../Category/Category';

const categoryPromise = fetch('../categories.json').then(res=>res.json());
const LeftSideNav = () => {
    
    return (
        <div>
            <h2 className='text-lg font-bold text-primary'>All Category</h2>
            <Category categoryPromise={categoryPromise}/>
        </div>
    );
};

export default LeftSideNav;