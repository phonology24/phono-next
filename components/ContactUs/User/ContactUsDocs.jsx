"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Import useParams and useRouter
import { getDocumentsBySubCategory } from "@/utils/helpers"; // Import helper function
import "../../styles/contactus/DocumentPage.css"; // Add custom styles
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LoadingSpinner from "@/utils/LoadingSpinner"; // Import the loading spinner

const ContactUsDocs = () => {
    const [documents, setDocuments] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); 
    const [searchQuery, setSearchQuery] = useState(""); 
    const params = useParams(); 
    const elo = 1;    
    const subCategoryId = params.subCategoryId;  
    const router = useRouter();

    useEffect(() => {
        const fetchDocuments = async () => {
            try { 
                const data = await getDocumentsBySubCategory(subCategoryId);
                setDocuments(data); // Set the documents  state
            } catch (error) {
                console.error("Failed to fetch documents:", error);
            } finally {
                setIsLoading(false); // Stop loading
            }
        };

        if (subCategoryId) {
            fetchDocuments();
        }
    }, [subCategoryId]);

    // Navigate to the document's detail page
    const handleDocumentClick = (documentId) => {
        router.push(`/contact-us/docs/article/${documentId}`);
    };

    // Filter documents based on the search query
    const filteredDocuments = documents.filter((document) =>
        document.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="documents-container">
            {/* Show loading spinner if isLoading is true */}
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {/* Search Bar */}

                    {/* Category and Subcategory Titles */}
                    <h1 className="documents-title">
                        {documents[0]?.category?.name} {" "} &rarr; {" "}
                        {documents[0]?.subCategory?.name && `${documents[0].subCategory.name}`}
                    </h1>
                    <div className="search-bar-container">
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Documents Grid */}
                    <div className="documents-grid">
                        {filteredDocuments.length > 0 ? (
                            filteredDocuments.map((document, index) => (
                                <div
                                    key={index}
                                    className="document-card"
                                    onClick={() => handleDocumentClick(document._id)}
                                >
                                    <h3 className="document-title">{document.title}</h3>
                                    <ArrowForwardIosOutlinedIcon />
                                    <p className="document-description">{document.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No support articles found.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ContactUsDocs;
