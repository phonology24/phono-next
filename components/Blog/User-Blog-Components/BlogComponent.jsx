import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Home/Footer';
import '../../../styles/blog-css/blogpost.css'
import { Helmet } from 'react-helmet';


const BlogPost = () => {
    const { slug } = useParams();
    const [postContent, setPostContent] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    useEffect(() => {
        const storedContent = localStorage.getItem('postContent'); // Example using local storage
        const postTitle = localStorage.getItem('postTitle'); // Example using local storage
        const postDescription = localStorage.getItem('postDescription'); // Example using local storage
        if (storedContent) {
            setPostContent(storedContent);
            setPostTitle(postTitle);
            setPostDescription(postDescription);
        }
    }, [slug] );

    return (
        <>
         <Helmet>
        <title>{postTitle}</title>
        <meta name='description' content={postDescription} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="keywords" content="Internet service provider in India, Business VoIP in India, business VoIP service in India, VoIP Phone, VoIP, VoIP Service Provider in Bangalore, VoIP Service Provider in India, Best VoIP Service, VoIP Phone Provider, IP phone provider, IP PBX Provider, Internet Telephony Service Provider, VoIP Solutions Provider, Best Business VoIP Solutions Provider, Cloud Based PBX Service Provider, How to Choose VoIP Phone System, VoIP Features, SIP Trunk, VOIP in India in Bangalore, VoIP communication in India, trunk line internet in India, small office VoIP in Bangalore, small office phone systems in India, SIP trunk in India, office VoIP phones in India, office phone services in India, office IP phone in India, "/>
      </Helmet>
      
            <div className="blogpost-container">
            <h1 className='postTitle'>
                {postTitle}
            </h1>
            <div className='post-content' dangerouslySetInnerHTML={{ __html: postContent }} />
            </div>
            <Footer />
        </>

    );
};

export default BlogPost;
