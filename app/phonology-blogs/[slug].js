import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import '../../styles/blog-css/blogpost.css';
import Head from 'next/head';
import axios from 'axios';

const BlogPost = ({ post }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.description} />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <meta name="keywords" content={post.keywords}/>
        <link rel="canonical" href={`https://blog.phonology.io/${slug}?id=${post._id}`} />
        <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${post.title}",
      "description": "${post.description}",
      "articleBody": "${post.content}",
      "author": {
        "@type": "Person",
        "name": "Author Name"
      },
      "datePublished": "${new Date(post.createdAt).toISOString()}",
      "publisher": {
        "@type": "Organization",
        "name": "Phonology"
      }
    }
    `}
  </script>
     </Head>

      <div className="blogpost-container">
        <h1 className='postTitle'>{post.title}</h1>
        {/* <div className='post-content' dangerouslySetInnerHTML={{ __html: post.content }} /> */}
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  try {
    const response = await axios.get(`https://blog.phonology.io/api/post`, {
      params: { slug }
    });
    const post = response.data;

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: {
        post: null,
      },
    };
  }
};

export default BlogPost;
