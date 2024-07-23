import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import '../../../styles/blog-css/newsadmin.css'
import { Alert, Button, Modal } from 'react-bootstrap';
import Image from 'next/image';

const NewsAdminComponent = () => {
    const [news, setNews] = useState([]);
    const [editNews, setEditNews] = useState({})
    const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')
    const [image, setImage] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                const response = await axios.get('https://blog.phonology.io/api/get-news');
                const newsData = response.data;
                setNews(newsData);
                console.log(newsData);
            } catch (error) {
                console.log('Error fetching news:', error);
            }
        };
        getNews();
    }, []);

    const handleNewsEditClick = (newsId) => {
        const url = `${window.location.origin}/edit-news/${newsId}`;
        window.open(url, '_blank');
    };

    const deleteNews = async (newsId) => {
        try {
            const response = await axios.delete('https://blog.phonology.io/api/delete-news', {
                params: { id: newsId }
            }); 

            if (response.status === 200) {
                const updatedNews = await axios.get('https://blog.phonology.io/api/get-news');
                setNews(updatedNews.data);
                alert("News Deleted")
            }
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    };


    const getANews = async (newsId) => {
        try {
            const response = await axios.get('https://blog.phonology.io/api/get-a-news', {
                params: { newsId: newsId }
            })
            setEditNews(response.data);
            if(response.status ===200){
                setTitle(response.data.title)
                setContent(response.data.content)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const openEditModal = async (newsId) => {
        getANews(newsId);
        setIsNewsModalOpen(true);
    };

    const closeAddModal = () => {
        setIsNewsModalOpen(false);
        // setTitle('');
        // setContent('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('id', editNews._id); 
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.put('https://blog.phonology.io/api/edit-news', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                const updatedNews = await axios.get('https://blog.phonology.io/api/get-news');
                setNews(updatedNews.data);
            }
        } catch (error) {
            console.log(error);
        }

        closeAddModal();
    };
    return (
        <div className="news-grid">
            {news.length === 0 ? (
                <h2>No news available</h2>
            ) : (
                news.map((newsItem) => (
                    <div key={newsItem._id} className="news-card-admin">
                        <Image src={`https://blog.phonology.io/${newsItem.image}`} alt={newsItem.title} className="news-card-image" width={300} height={100} />
                        <h6 className='card-title' style={{ color: "grey" }}>{newsItem.title}</h6>
                        <div className="news-date">{moment(newsItem.createdAt).format('MMMM Do, YYYY')}</div>
                        <div className="news-actions">
                            <button className='edit-button' onClick={() => openEditModal(newsItem._id)} title='Edit Post'><EditIcon /></button>
                            <button className='delete-button' onClick={() => deleteNews(newsItem._id)} title='Delete Post'><DeleteOutlinedIcon /></button>
                        </div>

                    </div>
                ))
            )}

            <Modal show={isNewsModalOpen} onHide={closeAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit News</Modal.Title>
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

export default NewsAdminComponent;
