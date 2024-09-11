"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '../../../components/Footer';
import '../../../styles/blog-css/blogpost.css';
import axios from 'axios';

const BlogPost = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState(null);
  const [description, setPostDescription] = useState(null);
  const [keywords, setKeywords] = useState(null);
  const [title, setTitle] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get('https://blog.phonology.io/api/post', {
          params: { id: postId }
        });
        if (response) {
          setPost(response.data);
          setTitle(response.data.title);
          setPostDescription(response.data.description);
          setKeywords(response.data.keywords)
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load the post');
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <>
      <div className="blogpost-container">
        <head>
          <title>{title}</title>
          <meta name='description' content={description} />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
          <meta name="keywords" content= {keywords}/>
        </head>
        <h1 className="postTitle">{title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
