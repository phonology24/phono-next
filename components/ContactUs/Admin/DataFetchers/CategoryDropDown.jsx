import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../../../utils/helpers";
import "../../../../styles/contactus/admin/categorydropdown.css"; // Custom CSS file for styling

const CategoryDropdown = ({ onSelect }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch categories from the backend
  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data); 
    };
    getCategories();
  }, []);

  // Handle selection change
  const handleSelect = (categoryId, categoryName) => {
    setSelectedCategory(categoryName);
    setIsDropdownOpen(false); 
    if (onSelect) {
      onSelect(categoryId);
    }
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown-header ${isDropdownOpen ? "active" : ""}`}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {selectedCategory || "Select a Category"}
        <span className="dropdown-arrow">{isDropdownOpen ? "▲" : "▼"}</span>
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          {categories.map((category) => (
            <li
              key={category._id}
              className="dropdown-item"
              onClick={() => handleSelect(category._id, category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
