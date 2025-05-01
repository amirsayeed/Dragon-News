import React, { use } from 'react';
const Category = ({categoryPromise}) => {
    const categories = use(categoryPromise);
    console.log(categories);
    return (
        <div className='grid grid-cols-1 gap-2 mt-5'>
            {
                categories.map(category => <button className='btn bg-base-100 text-accent-content text-lg font-medium border-0' key={categories.id}>{category.name}</button>)
            }
        </div>
    );
};

export default Category;