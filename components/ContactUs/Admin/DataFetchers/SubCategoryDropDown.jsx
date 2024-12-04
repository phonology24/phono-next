import React, { useState, useEffect } from "react";
import { fetchSubCategories } from "../../../../utils/helpers"; // Helper to fetch subcategories

const SubCategoryDropDown = ({ categoryId, onSelect }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch subcategories when a category is selected
  useEffect(() => {
    if (!categoryId) return; // Avoid fetching if no category is selected

    const getSubCategories = async () => {
      const data = await fetchSubCategories(categoryId); // API call to fetch subcategories
      setSubCategories(data); // Update state with fetched subcategories
    };

    getSubCategories();
  }, [categoryId]);

  const handleSelect = (subCategoryId, subCategoryName) => {
    setSelectedSubCategory(subCategoryName);
    setIsDropdownOpen(false); // Close dropdown on selection
    if (onSelect) {
      onSelect(subCategoryId); // Pass selected subcategory to parent
    }
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown-header ${isDropdownOpen ? "active" : ""}`}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {selectedSubCategory || "Select a SubCategory"}
        <span className="dropdown-arrow">{isDropdownOpen ? "▲" : "▼"}</span>
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          {subCategories.map((subCategory) => (
            <li
              key={subCategory._id}
              className="dropdown-item"
              onClick={() =>
                handleSelect(subCategory._id, subCategory.name)
              }
            >
              {subCategory.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubCategoryDropDown;
