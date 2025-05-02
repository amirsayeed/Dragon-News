import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';


const LatestNews = () => {
    const [news,setNews] = useState([]);
    useEffect(()=>{
        fetch('/news.json').then(res=>res.json()).then(data=>setNews(data));
    },[])

    const breakings = [...news];
    const LatestNews = breakings.filter(news=>news.others.is_today_pick === true);
    // console.log(LatestNews.length);

    return (
        <div className='w-11/12 mx-auto bg-base-200 mt-10'>
            <div className='flex p-3 gap-5 items-center'>
                <button className='btn bg-secondary text-white'>Latest News</button>
                <Marquee pauseOnHover={true} speed={60}>
                    <div className='flex gap-5'>
                        {
                            LatestNews.map(news=> <p key={news.id}>{news.title}</p>)
                        }
                    </div>
                    
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;