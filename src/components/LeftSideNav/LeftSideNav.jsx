import React, { Suspense } from 'react';
import Category from '../Category/Category';

const categoryPromise = fetch('../categories.json').then(res=>res.json());
const LeftSideNav = () => {
    
    return (
        <div>
            <h2 className='text-lg font-bold text-primary'>All Category</h2>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Category categoryPromise={categoryPromise}/>
            </Suspense>
        </div>
    );
};

export default LeftSideNav;