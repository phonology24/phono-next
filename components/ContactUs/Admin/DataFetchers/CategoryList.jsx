import React, { useEffect, useState } from "react";
import { fetchCategories, addSubCategory, deleteCategory, deleteSubCategory } from "../../../../utils/helpers";
import AddCategory from "../DataAdders/AddCategory";
import "../../../styles/contactus/admin/SupportCategoryList.css";
import AddDocument from "../DataAdders/AddDocument";

const SupportCategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSubCategory, setNewSubCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  // Fetch categories
  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    getCategories();
  }, []);

  const openModal = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewSubCategory("");
    setSelectedCategoryId("");
  };

  const handleAddSubCategory = async () => {
    if (!newSubCategory.trim()) {
      alert("Subcategory name cannot be empty.");
      return;
    }

    try {
      const subCategory = await addSubCategory({
        name: newSubCategory,
        category: selectedCategoryId,
      });

      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category._id === selectedCategoryId
            ? {
                ...category,
                subcategories: [...(category.subcategories || []), subCategory],
              }
            : category
        )
      );

      closeModal();
      alert("Subcategory added successfully!");
    } catch (error) {
      console.error("Failed to add subcategory:", error);
      alert("Failed to add subcategory.");
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category._id !== categoryId)
      );
      alert("Category deleted successfully!");
    } catch (error) {
      console.error("Failed to delete category:", error);
      alert("Failed to delete category.");
    }
  };

  const handleDeleteSubCategory = async (categoryId, subCategoryId) => {
    try {
      await deleteSubCategory(categoryId, subCategoryId);
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category._id === categoryId
            ? {
                ...category,
                subcategories: category.subcategories.filter(
                  (subCategory) => subCategory._id !== subCategoryId
                ),
              }
            : category
        )
      );
      alert("Subcategory deleted successfully!");
    } catch (error) {
      console.error("Failed to delete subcategory:", error);
      alert("Failed to delete subcategory.");
    }
  };

  return (
    <div className="support-category-list">
      <header className="category-header">
        <h2>Support Document Categories</h2>
      <div className="add-category-wrapper">
          <AddCategory />
          <AddDocument/>
        </div>
      </header>
      {categories.length > 0 ? (
        <div className="category-list-container">
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category._id} className="category-item">
                <div className="category-content">
                  <div className="category-header1">
                    <h3 className="category-name">{category.name}</h3>
                  </div>
                  <div className="category-count">
                    <p>
                    Total Sub Categories: {category.subcategories.length}
                    </p>
                  </div>
                  <div className="category-actions">
                    <button
                      onClick={() => openModal(category._id)}
                      className="add-subcategory-btn"
                    >
                      Add Subcategory
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category._id)}
                      className="delete-category-btn"
                    >
                      Delete Category
                    </button>
                  </div>
                </div>
                {category.subcategories?.length ? (
                  <ul className="subcategory-list">
                    {category.subcategories.map((subCategory) => (
                      <li key={subCategory._id} className="subcategory-item">
                        <span className="subcategory-name">
                          {subCategory.name}
                        </span>
                        <button
                          onClick={() =>
                            handleDeleteSubCategory(category._id, subCategory._id)
                          }
                          className="delete-subcategory-btn"
                        >
                          X
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-subcategories">No subcategories available</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="no-categories">No categories available</p>
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Subcategory</h3>
            <input
              type="text"
              placeholder="Enter subcategory name"
              value={newSubCategory}
              onChange={(e) => setNewSubCategory(e.target.value)}
              className="modal-input"
            />
            <div className="modal-actions">
              <button onClick={handleAddSubCategory} className="modal-submit-btn">
                Submit
              </button>
              <button onClick={closeModal} className="modal-cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportCategoryList;
