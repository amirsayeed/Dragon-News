import React, { use } from 'react';
import { NavLink } from 'react-router';
const Category = ({categoryPromise}) => {
    const categories = use(categoryPromise);
    //console.log(categories);
    return (
        <div className='grid grid-cols-1 gap-2 mt-5'>
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id} className='btn justify-start bg-base-100 text-accent-content text-lg font-medium border-0'>{category.name}</NavLink>)
            }
        </div>
    );
};

export default Category;