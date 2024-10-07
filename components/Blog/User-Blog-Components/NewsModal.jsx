import React from 'react';
import Image from 'next/image';
import '../../styles/modal.css'; // Importing the CSS for the modal

const NewsModal = ({ show, onClose, newsItem }) => {
  if (!show) {
    return null; // Don't render anything if `show` is false
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{newsItem.title}</h2>
        <p className="modal-date">{new Date(newsItem.createdAt).toLocaleDateString()}</p>
        {newsItem.image && (
          <Image
            src={`https://blog.phonology.io/${newsItem.image}`}
            alt={newsItem.title}
            width={600}
            height={400}
            className="modal-image"
          />
        )}
        <p className="modal-description">{newsItem.content}</p>
      </div>
    </div>
  );
};

export default NewsModal;
