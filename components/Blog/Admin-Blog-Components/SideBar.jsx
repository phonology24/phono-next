"use client"
import React, { useState } from 'react';
import '../../../styles/blog-css/sidebar.css';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useRouter } from 'next/navigation';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

const Sidebar = () => {
  const router = useRouter(); 
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const redirectToAdmin = () => {
    router.push('/admin-post-editor');
  };

  const redirectToAddNews = () => {
    router.push('/add-news'); // Adjust the path to where AddNews is located
  };

  return (
    <div
      className={`sidebar ${isSidebarHovered ? 'expanded' : ''}`}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      <button onClick={redirectToAdmin}>
        <NoteAddIcon />
        <span className='text-span'>{isSidebarHovered ? 'Add Post' : ''}</span>
      </button>

      <button onClick={redirectToAddNews}>
        <NewspaperOutlinedIcon />
        <span className='text-span'>{isSidebarHovered ? 'Add News' : ''}</span>
      </button>
    </div>
  );
};

export default Sidebar;
