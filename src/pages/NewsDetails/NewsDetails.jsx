import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import RightSideNav from '../../components/RightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const {id} = useParams();
    const allNews = useLoaderData();
    const [detailsInfo,setDetailsInfo] = useState();

    useEffect(()=>{
        const findDetail = allNews.find(news=>news.id === id);
        setDetailsInfo(findDetail);
    },[allNews,id])

    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='grid grid-cols-12 gap-5 w-11/12 mx-auto mt-8'>
                <section className='col-span-9'>
                    <NewsDetailsCard detailsInfo={detailsInfo} />
                </section>
                <aside className='col-span-3'><RightSideNav/></aside>
            </main>
        </div>
    );
};

export default NewsDetails;