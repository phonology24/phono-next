"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';
import '../../../styles/blog-css/marquee.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import slugify from 'slugify';

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get('https://blog.phonology.io/api/get-posts');
        const newsData = response.data;
        setNews(newsData);
        console.log(newsData);
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  // Function to extract image from HTML content
  const extractImage = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
  };

  // Function to handle the post click event
  const handlePostClick = (postTitle, postId, postDescription) => {
    const slugifiedTitle = slugify(postTitle, { lower: true });
    router.push(`/phonology-blogs/${slugifiedTitle}?id=${postId}`);
  };

  return (
    <>
    <Marquee gradient={false} speed={50} className="news-marquee" >

      {news.map((newsItem) => (
        <div
          className="news-card"
          key={newsItem._id}
          onClick={() => handlePostClick(newsItem.title, newsItem._id, newsItem.description)}
          style={{ cursor: 'pointer' }} 
        >
          {extractImage(newsItem.content) ? (
            <Image
              src={extractImage(newsItem.content)}
              alt={newsItem.title}
              width={500}
              height={300}
              className="news-card-image"
            />
          ) : (
            <div className="image-placeholder"></div>
          )}

          <div className="news-card-content">
            <h3>{newsItem.title}</h3>
            {/* <p dangerouslySetInnerHTML={{ __html: newsItem.excerpt || newsItem.content.slice(0, 100) + '...' }}></p> */}
          </div>
        </div>
      ))}
    </Marquee>
    </>
  );
};

export default NewsComponent;
