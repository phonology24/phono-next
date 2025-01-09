"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchCategories } from "@/utils/helpers";
import LoadingSpinner from "@/utils/LoadingSpinner"; 
import { fixedColors } from "@/utils/consts"; 

const ContactUsCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isLoading, setIsLoading] = useState(true); 
  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    router.push(`support/${categoryId}`);
  };

  // Function to map category index to a fixed color
  const getCategoryColor = (index) => {
    return fixedColors[index % fixedColors.length]; // Cycle through colors if needed
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="contactus-categories">
      <h2 className="category-box-heading">User Support & Troubleshooting</h2>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>
          <div className="categories-grid">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div
                  key={index}
                  className={`category-card category-card-${index}`}
                  style={{ backgroundColor: "#E1F0FF"}} // Apply color based on index
                  onClick={() => handleCategoryClick(category._id)}
                >
                  <h3 className="category-title">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              ))
            ) : (
              <p>No support documents found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactUsCategories;
