import React, { useState } from "react";
import Modal from "react-modal"; // Import react-modal
import { addCategory } from "../../../../utils/helpers"; // Import the API call function
import '../../../../styles/contactus/admin/modal-overlay.css'
// Make sure to bind modal to your app element

const AddCategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Function to toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryData = {
      name,
      description,
    };

    try {
      const result = await addCategory(categoryData); // Make the API call
      console.log("Category added:", result);
      toggleModal(); // Close the modal on successful submission
      // Optionally reset form fields
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Failed to add category", error);
    }
  };

  return (
    <div>
      <button onClick={toggleModal} className="add-category-button">Add Category</button>

      {/* React Modal Popup */}
      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        contentLabel="Add New Category"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Add New Category</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Category Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={toggleModal}>
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddCategory;
