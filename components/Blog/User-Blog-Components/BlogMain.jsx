'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import slugify from 'slugify';
import NewsComponent from './NewsComponent';
import Image from 'next/image';
import '../../../styles/blog-css/userblog.css';

const PhonologyBlogs = () => {
  const [posts, setPosts] = useState([]);
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

  const extractImage = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
  };

  const handlePostClick = (postTitle, postId) => {
    const slugifiedTitle = slugify(postTitle, { lower: true });
    router.push(`/phonology-blogs/${slugifiedTitle}?id=${postId}`);
  };

  return (
    <div className="post-container">
      <NewsComponent />
      <div className="posts-list">
        <h1>Phonology Blogs</h1>
        <div className="posts-grid">
          {!posts || posts.length === 0 ? (
            <h2>No posts available</h2>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="post-card" onClick={() => handlePostClick(post.title, post._id)}>
                {extractImage(post.content) ? (
                  <Image
                    src={extractImage(post.content)}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="post-image"
                  />
                ) : (
                  <div className="image-placeholder"></div>
                )}
                <h6 className="card-title" style={{ color: 'grey' }}>{post.title}</h6>
                <div className="post-date">{moment(post.createdAt).format('MMMM Do, YYYY')}</div>
                <h6 className="card-desc">{post.description}</h6>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PhonologyBlogs;
