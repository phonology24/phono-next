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
          <meta name="keywords" content="Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India, " />
        </head>
        <h1 className="postTitle">{title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
