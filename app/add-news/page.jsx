"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import axios from 'axios';
import '../../styles/add-news.css'
const AddNews = () => {
  const router = useRouter(); 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      let response = await axios.post('https://blog.phonology.io/api/create-news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setMessage('News added successfully!');
        // Optionally, redirect to another page after successful submission
        // router.push('/some-other-page');
      }
    } catch (error) {
      console.log(error);
      setMessage('Failed to add news.');
    }
  };

  return (
    <div className="add-news-container" style={{maxWidth:"85vw", margin:"0 auto"}}>
      <h2>Add News</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <Button type="submit" variant="primary" className="mt-3">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddNews;
