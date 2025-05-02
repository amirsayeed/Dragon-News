import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({detailsInfo}) => {
    const {category_id,image_url, title, details} = detailsInfo || {};
    return (
        <div className='space-y-3'>
            <img className='w-full' src={image_url} alt="" />
            <h2 className="text-2xl text-primary font-bold">{title}</h2>
            <p>{details}</p>
            <Link to={`/category/${category_id}`} className='btn bg-secondary text-white'><FaArrowLeft />All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;