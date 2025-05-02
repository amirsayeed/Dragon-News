import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard/NewsCard';

const News = () => {
    const [selectedCategory,setSelectedCategory] = useState([]);
    const {id} = useParams();
    //console.log(typeof(id));
    const newsData = useLoaderData();
    useEffect(()=>{
        if(id == 0){
            setSelectedCategory(newsData);
        }else if(id == 1){
            const filteredNews = newsData.filter(news=> news.others.is_today_pick === true);
            setSelectedCategory(filteredNews);
        }
        else{
        const filteredNews = newsData.filter(news=> news.category_id === parseInt(id));
        setSelectedCategory(filteredNews)};
    },[newsData,id])

    return (
        <div>
            <h2 className="text-lg font-bold text-primary">Total {selectedCategory.length} news found</h2>
            <div className='grid grid-cols-1 gap-3 mt-3'>    
            {
                selectedCategory.map((item,idx)=><NewsCard key={idx} item={item}/>)
            }
            </div>
        </div>
    );
};

export default News;