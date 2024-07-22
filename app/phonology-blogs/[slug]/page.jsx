"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '../../../components/Footer';
import '../../../styles/blog-css/blogpost.css';
import Head from 'next/head';
import axios from 'axios';

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  let post;
  try {
    const response = await axios.get(`https://blog.phonology.io/api/post`, {
      params: { id: postId }
    });
    post = response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
    };
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.description} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="keywords" content="Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India, "/>
      </Head>

      <div className="blogpost-container">
        <h1 className="postTitle">{post.title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
