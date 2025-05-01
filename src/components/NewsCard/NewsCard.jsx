import React from 'react';
import { FaEye, FaStar } from "react-icons/fa";
const NewsCard = ({item}) => {
    const formattedDate = new Date(item.author.published_date).toISOString().split("T")[0];
    return (
         <div className="card bg-base-100 shadow-md border">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img src={item.author.img} alt="author" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold text-sm">{item.author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="text-gray-400 text-xl">
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M7 8H5a2 2 0 00-2 2v10a2 2 0 002 2h2m10-14V4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m10 0H7" />
            </svg>
          </button>
        </div>
      </div>

      <figure>
        <img src={item.thumbnail_url} alt="news" className="w-full h-56 object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.details.slice(0, 200)}... <span className="text-primary font-medium cursor-pointer">Read More</span></p>

        <div className="flex flex-wrap text-xs gap-2 mt-3">
          {item.tags.map(tag => (
            <span key={tag} className="badge badge-outline">{tag}</span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-warning">
            {Array(5).fill(0).map((_, idx) => (
              <FaStar key={idx} className={idx < item.rating.number ? "text-orange-400" : "text-gray-300"} />
            ))}
            <span className="ml-1 text-sm text-gray-600">{item.rating.number.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FaEye />
            {item.total_view}
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewsCard;