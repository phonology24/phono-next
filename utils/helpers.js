import axios from 'axios';

export const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:7000/api/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const addCategory = async (categoryData) => {
  try {
    const response = await axios.post("http://localhost:7000/api/categories", categoryData);
    return response.data;
  } catch (error) {
    console.error("Error adding category:", error);
    throw error;
  }
};

export const fetchSubCategories = async (categoryId) => {
  try {
    const response = await axios.post('http://localhost:7000/api/get-subcategories',{
      categoryId: categoryId
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch subcategories:", error);
    return [];
  }
};


export const addSubCategory = async ({ name,  category}) => {

  try {
    const response = await axios.post("http://localhost:7000/api/subcategories", {
      name,
      category,
    });

    // Axios parses the response automatically
    return response.data;
  } catch (error) {
    console.error("Failed to add subcategory:", error);
    throw error; // Re-throwing the error to handle it in the caller function
  }
};


export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(`http://localhost:7000/api/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete category:", error);
    throw error;
  }
};


export const deleteSubCategory = async (categoryId, subCategoryId) => {
  try {
    const response = await axios.delete(`http://localhost:7000/api/subcategories/${categoryId}/${subCategoryId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete subcategory:", error);
    throw error;
  }
};


export const getDocuments = async () => {
  try {
    const response = await axios.get('http://localhost:7000/api/support-documents')
  } catch (error) {
    console.error("Failed to get documents:", error);
    throw error;
  }
}

export const getDocumentsBySubCategory = async(subCategoryId) => {
  try {
    const response = await axios.post('http://localhost:7000/api/get-docs-by-id',{
      subCategoryId:subCategoryId
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Failed to get documents by subcategoryid:", error);
    throw error;
  }
} 

export const getArticleById = async(articleId) => {
  try {
    console.log(articleId,"🎈")
    const response = await axios.post("http://localhost:7000/api/get-article",{
      documentId:articleId
    })
    console.log(response.data)

    return response.data
  } catch (error) {
    console.error("Failed to get document by id:", error)
  }
}