"use client";
import { useParams, useRouter } from "next/navigation"; // Import useParams and useRouter
import { fetchSubCategories } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import '../../styles/contactus/SubCategoryPage.css';
import LoadingSpinner from "@/utils/LoadingSpinner"; // Import the loading spinner

const ContactUsSubCategories = () => {
    const [subCategories, setSubCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State for loading spinner
    const [searchQuery, setSearchQuery] = useState("");

    const params = useParams(); // Extract route params
    const categoryId = params.categoryId; // Access categoryId from dynamic route
    const router = useRouter();

    useEffect(() => {
        if (!categoryId) return;
        const getSubCategories = async () => {
            try {
                const data = await fetchSubCategories(categoryId);
                setSubCategories(data);
            } catch (error) {
                console.error("Failed to fetch subcategories:", error);
            } finally {
                setIsLoading(false);
            }
        };

        getSubCategories();
    }, [categoryId]); // Refetch if categoryId changes

    const handleSubCategoryClick = (subCategoryId) => {
        router.push(`/contact-us/docs/${subCategoryId}`);
    };

    const categoryName = subCategories[0]?.category?.name;

    // Filtered categories based on searchQuery
    const filteredCategories = subCategories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="subcategories-container">
                <h1 className="page-title">
                    {subCategories[0]?.category?.name}
                </h1>

                {/* Render Loading Spinner or Content */}
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
                        <div className="subcategories-grid">
                            {filteredCategories.length > 0 ? (
                                filteredCategories.map((subCategory, index) => (
                                    <div
                                        key={index}
                                        className="subcategory-card"
                                        onClick={() =>
                                            handleSubCategoryClick(subCategory._id, categoryName)
                                        }
                                    >
                                        <h3 className="subcategory-title">{subCategory.name}</h3>
                                        <p className="subcategory-description">
                                            {subCategory.description}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p>No support articles found.</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactUsSubCategories;
