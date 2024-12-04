"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams
import LoadingSpinner from "@/utils/LoadingSpinner"; // Import the loading spinner
import { getArticleById } from "@/utils/helpers";
import '../../styles/contactus/articleread.css';

const ArticleRead = () => {
  const [article, setArticle] = useState(null); // Default to null
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const articleId = params.documentId;

  useEffect(() => {
    const getArticle = async () => {
      try {
        const data = await getArticleById(articleId);
        setArticle(data); // Set the article data
      } catch (error) {
        console.error("Failed to get article:", error);
      } finally {
        setLoading(false);
      }
    };
    getArticle();
  }, [articleId]);

  if (loading) {
    return <LoadingSpinner />; // Show spinner while loading
  }

  if (!article) {
    return <div className="error-message">Article not found!</div>;
  }

  return (
    <div className="article-container">
      <h1 className="article-title">{article.title}</h1>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default ArticleRead;
