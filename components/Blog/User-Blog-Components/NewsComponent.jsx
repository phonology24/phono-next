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
        setNews(response.data);
        console.log(response.data);
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
  const handlePostClick = (postTitle, postId) => {
    const slugifiedTitle = slugify(postTitle, { lower: true });
    router.push(`/phonology-blogs/${slugifiedTitle}?id=${postId}`);
  };

  return (
    <Marquee gradient={false} speed={50} className="news-marquee">
      {news.map((newsItem) => (
        <div
          className="news-card"
          key={newsItem._id}
          onClick={() => handlePostClick(newsItem.title, newsItem._id)}  // Fixed onClick handler
          style={{ cursor: 'pointer'}}
        >
          {extractImage(newsItem.content) ? (
            <Image
              src={extractImage(newsItem.content)}
              alt={newsItem.title}
              width={500}
              height={300}
              className="news-card-image"
              unoptimized  // If using an external image URL
            />
          ) : (
            <div className="image-placeholder">No Image Available</div> // Placeholder for missing images
          )}

          <div className="news-card-content">
            <h3>{newsItem.title}</h3>
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default NewsComponent;
