import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import '../../../styles/blog-css/marquee.css'
import Image from 'next/image';
const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get('https://blog.phonology.io/api/get-news');
        const newsData = response.data;
        setNews(newsData);
        console.log(newsData)
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  return (
    <Marquee gradient={false} speed={50} style={{ zIndex: -999 }}>
      {news.map((newsItem) => (
        <div className="news-card" key={newsItem._id} >
          {newsItem.image && (
   <Image
   src={`https://blog.phonology.io/${newsItem.image}`}
   alt={newsItem.title}
   className="news-card-image"
   width={500} // specify a suitable default width
   height={300} // specify a suitable default height
 />
 
          )}
          <div className="news-card-content">
            <h3>{newsItem.title}</h3>
            {/* <p>{newsItem.content}</p> */}
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default NewsComponent;
