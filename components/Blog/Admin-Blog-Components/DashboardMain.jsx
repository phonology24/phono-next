"use client"
import React, { useEffect, useState } from 'react';
import Sidebar from '../Admin-Blog-Components/SideBar';
import Navbar from './BlogNavBar';
import '../../../styles/blog-css/blogDashboard.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import moment from 'moment';
import slugify from 'slugify';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import NewsAdminComponent from './NewsAdminComponent';
import Image from 'next/image'
const DashboardMain = () => {
  const [posts, setPosts] = useState([]);
  const [viewNews, setViewNews] = useState(false);
  const [viewBlogs, setViewBlogs] = useState(true);

  const navigate = useRouter();

  // Authentication
  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    if (token) {
      axios.post('https://blog.phonology.io/api/admin/validate-token', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          if (response.data.valid === true) {
            navigate('/admin-dashboard');
          } else {
            navigate('/admin-login');
          }
        })
        .catch(error => {
          console.error('Token validation failed', error);
        });
    } else {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Blog CRUD Ops
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

  const handlePostClick = async (postTitle, postId) => {
    const slugifiedTitle = slugify(postTitle, { lower: true });
    const url = `https://blog.phonology.io/posts/${slugifiedTitle}`;
    console.log(postId);
    try {
      const response = await axios.get(`https://blog.phonology.io/api/post`, {
        params: { id: postId }
      });
      const post = response.data;
      localStorage.setItem('postContent', post.content);
      localStorage.setItem('postTitle', post.title);
      navigate(`/posts/${slugifiedTitle}`);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete('https://blog.phonology.io/api/delete-post', {
        params: { id: postId }
      });

      if (response.status === 200) {
        const updatedPosts = await axios.get('https://blog.phonology.io/api/get-posts');
        setPosts(updatedPosts.data);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // U/X
  const handleEditClick = (postId) => {
    const url = `${window.location.origin}/edit-post/${postId}`;
    window.open(url, '_blank');
  };

  const newsToggler = () => {
    setViewNews(!viewNews);
    setViewBlogs(!viewBlogs);
  };

  return (
    <>
    <div className="dashboard-container1">
      <Sidebar />
      <div className="main-content1">
        {/* <Navbar /> */}
        <div className="content1">
        <button onClick={() => newsToggler()} className="toggle-button1">{viewBlogs ? 'View News' : 'View Blogs' }</button>
        {viewBlogs && (
            <div className="posts-grid1">
              {posts.length === 0 ? (
                <h2>No posts available</h2>
              ) : (
                posts.map((post) => (
                  <div key={post._id} className="post-card1">
                    {extractImage(post.content) ? (
                      <Image src={extractImage(post.content)} alt={post.title} className="post-image"   width={300} height={100} />
                    ) : (
                      <div className="image-placeholder1"></div>
                    )}
                    <h6 className='card-title1' >{post.title}</h6>
                    <div className="post-date1">{moment(post.createdAt).format('MMMM Do, YYYY')}</div>
                    <div className="post-actions1">
                      <button className='edit-button1' onClick={() => handleEditClick(post._id)} title='Edit Post'><EditIcon /></button>
                      <button className='open-button1' onClick={() => handlePostClick(post.title, post._id)} title='Open Post'><OpenInNewOutlinedIcon /></button>
                      <button className='delete-button1' onClick={() => deletePost(post._id)} title='Delete Post'><DeleteOutlinedIcon /></button>
                    </div>
                  </div>
                ))
              )}
              
            </div>
          )}

        </div>
      {viewNews && (
        <NewsAdminComponent />
      )}
      </div>
    </div>
      </>
  );
};

export default DashboardMain;
