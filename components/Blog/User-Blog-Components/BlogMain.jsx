'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import slugify from 'slugify';
import Image from 'next/image';
import Logo from '../../../public/Assets/logo.png';
import '../../../styles/blog-css/userblog.css';
import NewsModal from './NewsModal';  // Import the Modal component
import NewsComponent from './NewsComponent';

const PhonologyBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([]);
  const [selectedNewsItem, setSelectedNewsItem] = useState(null); // Modal state
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://blog.phonology.io/api/get-posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get('https://blog.phonology.io/api/get-news');
        const newsData = response.data;
        setNews(newsData);
        console.log(newsData);
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  const handlePostClick = (postTitle, postId) => {
    const slugifiedTitle = slugify(postTitle, { lower: true });
    router.push(`/phonology-blogs/${slugifiedTitle}?id=${postId}`);
  };

  const extractImage = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
  };

  const openNewsModal = (newsItem) => {
    setSelectedNewsItem(newsItem); // Set selected news item to display in the modal
    setShowModal(true); // Show modal
  };

  const closeNewsModal = () => {
    setShowModal(false); // Hide modal
    setSelectedNewsItem(null); // Clear selected news item
  };

  return (
    <div className="usersideblog-container">
      <header className="usersideblog-header">
     
      </header>

      <NewsComponent />

      <main className="usersideblog-main">
        <section className="usersideblog-blog-list">
          <h2 style={{fontSize:"46px"}}>Our Blogs</h2>
          {posts.length === 0 ? ( 
            <h2>No posts available</h2>
          ) : (
            posts.map((post) => (
              <article
                key={post._id}
                className="usersideblog-blog-card"
                onClick={() => handlePostClick(post.title, post._id)}
              >
                <div className="usersideblog-blog-content">
                  <h2 className="usersideblog-blog-title">{post.title}</h2>
                  <p className="usersideblog-blog-date">{moment(post.createdAt).format('MMMM Do, YYYY')}</p>
                  <p className="usersideblog-blog-excerpt">{post.description}</p>
                </div>
                {extractImage(post.content) && (
                  <Image
                    src={extractImage(post.content)}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="usersideblog-blog-image"
                  />
                )}
              </article>
            ))
          )}
        </section>

        <aside className="side-div">
          <h2 style={{fontSize:"46px"}}>News</h2>
          {news.length === 0 ? (
            <p>No news available</p>
          ) : (
            news.map((newsItem) => (
              <div key={newsItem._id} className="side-card" onClick={() => openNewsModal(newsItem)}>
                {newsItem.image && (
                  <Image
                    src={`https://blog.phonology.io/${newsItem.image}`}
                    alt={newsItem.title}
                    width={300}
                    height={300}
                    className="side-card-image"
                  />
                )}
                <h3 className="side-card-title">{newsItem.title}</h3>
              </div>
            ))
          )}
        </aside>
      </main>

      {/* Modal */}
      {selectedNewsItem && (
        <NewsModal show={showModal} onClose={closeNewsModal} newsItem={selectedNewsItem} />
      )}
    </div>
  );
};

export default PhonologyBlogs;
