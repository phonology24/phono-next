import React, { useState } from 'react';
import '../../../styles/blog-css/sidebar.css';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useNavigate } from 'react-router-dom';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import axios from 'axios';

const Sidebar = () => {
    const navigate = useNavigate(); 
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);
    const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const openAddModal = () => {
      setIsNewsModalOpen(true);
    };
  
    const closeAddModal = () => {
      setIsNewsModalOpen(false);
      setTitle('');
      setContent('');
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }

    try {
        let response =   await axios.post('https://blog.phonology.io/api/create-news', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          if(response.status===201){
              window.location.reload();
          }
        } catch (error) {
        console.log(error)
    }
  
      closeAddModal();
    };
  
    const redirectToAdmin = () => {
        navigate('/admin-post-editor');
    };
    
    return (
        <div
            className={`sidebar ${isSidebarHovered ? 'expanded' : ''}`}
            onMouseEnter={() => setIsSidebarHovered(true)}
            onMouseLeave={() => setIsSidebarHovered(false)}
        >
            <button onClick={redirectToAdmin}>
                <NoteAddIcon />
                <span className='text-span'> {isSidebarHovered ? 'Add Post' : ''}</span>
            </button>

            <button onClick={openAddModal}>
                <NewspaperOutlinedIcon />
                <span className='text-span'> {isSidebarHovered ? 'Add News' : ''}</span>
            </button>

            <Modal show={isNewsModalOpen} onHide={closeAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add News</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeAddModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
        </div>
    );
};

export default Sidebar;
