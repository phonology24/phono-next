"use client"
import React, { useEffect, useRef, useState } from "react";
import {
  EditorState,
  RichUtils,
  convertToRaw,
  AtomicBlockUtils,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import axios from "axios";
import Editor from "@draft-js-plugins/editor";
import createImagePlugin from "@draft-js-plugins/image";
import Toolbar from "./ToolBar";
import "../../../styles/blog-css/texteditor.css";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { ToastContainer } from 'react-toastify';
import createLinkDecorator from "./LinkComponent";
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useRouter } from 'next/router';
import { stateFromHTML } from 'draft-js-import-html';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];

const BlogPostEditor = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const { postId } = router.query; 
  console.log(postId); 

  const [description, setDescription] = useState("");
  const [editorState, setEditorState] = useState(() => {
    const decorator = createLinkDecorator();
    return EditorState.createEmpty(decorator);
  });
  const [showURLInput, setShowURLInput] = useState(false);
  const [urlValue, setUrlValue] = useState('');
  const editor = useRef(null);
  const fileInput = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => {
    focusEditor();
    if (postId) {
      fetchPostData(postId);
      console.log("useEffect")
    }
  }, [postId]);

  const focusEditor = () => {
    if (document.activeElement.tagName !== "INPUT") {
      editor.current.focus();
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return true;
    }
    return false;
  };

  const handleSave = async () => {
    try {
      if (postId) {
        await updatePost(postId); // Update existing post if postId is provided
      } else {
        await savePost(); // Save new post if no postId is provided
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const savePost = async () => {
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    const rawContent = convertToRaw(contentState);

    await axios.post("https://blog.phonology.io/api/save-post", {
      title,
      description,
      content: htmlContent,
      rawContent: JSON.stringify(rawContent),
    });

    alert("Post saved successfully");
  };

  const fetchPostData = async (postId) => {
    try {
      const response = await axios.get(`https://blog.phonology.io/api/post`, {
        params: { id: postId }
      });
      const post = response.data; 
      console.log(post)
      setTitle(post.title);
      setDescription(post.description);
      if (post.content) {
        const contentState = stateFromHTML(post.content);
        const editorState = EditorState.createWithContent(contentState, createLinkDecorator());
        setEditorState(editorState);
      }
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };  

  const updatePost = async (postId) => {
    try {
      const contentState = editorState.getCurrentContent();
      const htmlContent = stateToHTML(contentState);
      const rawContent = convertToRaw(contentState);

      await axios.put(`https://blog.phonology.io/api/post/${postId}`, {
        title,
        description,
        content: htmlContent,
        rawContent: JSON.stringify(rawContent),
      });

      alert("Post updated successfully");
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
    HIGHLIGHT: {
      backgroundColor: "#F7A5F7",
    },
    UPPERCASE: {
      textTransform: "uppercase",
    },
    LOWERCASE: {
      textTransform: "lowercase",
    },
    CODEBLOCK: {
      fontFamily: '"fira-code", "monospace"',
      fontSize: "inherit",
      background: "#ffeff0",
      fontStyle: "italic",
      lineHeight: 1.5,
      padding: "0.3rem 0.5rem",
      borderRadius: " 0.2rem",
    },
    SUPERSCRIPT: {
      verticalAlign: "super",
      fontSize: "80%",
    },
    SUBSCRIPT: {
      verticalAlign: "sub",
      fontSize: "80%",
    },
  };

  const myBlockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    switch (type) {
      case "blockQuote":
        return "superFancyBlockquote";
      case "leftAlign":
        return "leftAlign";
      case "rightAlign":
        return "rightAlign";
      case "centerAlign":
        return "centerAlign";
      case "justifyAlign":
        return "justifyAlign";
      default:
        return null;
    }
  };

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleAddLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
      let url = '';
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }
      setShowURLInput(true);
      setUrlValue(url);
      setTimeout(() => urlRef.current && urlRef.current.focus(), 0);
    }
  };

  const confirmLink = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    let nextEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    nextEditorState = RichUtils.toggleLink(
      nextEditorState,
      nextEditorState.getSelection(),
      entityKey
    );

    setEditorState(nextEditorState);
    setShowURLInput(false);
    setUrlValue('');
    setTimeout(() => editor.current && editor.current.focus(), 0);
  };

  const onURLChange = (e) => setUrlValue(e.target.value);

  const onLinkInputKeyDown = (e) => {
    if (e.which === 13) {
      confirmLink(e);
    }
  };

  const handleRemoveLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    uploadImageToServer(file);
  };

  const uploadImageToServer = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://blog.phonology.io/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }

      const data = await response.json();
      console.log("Data received from server: ", data);

      if (data.imageUrl) {
        setEditorState(insertImage(data.imageUrl));
      } else {
        console.error('No imageUrl in response:', data);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const insertImage = (url) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "IMAGE",
      "IMMUTABLE",
      { src: url },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " ");
  };

  return (
    <div className="editor-wrapper" onClick={focusEditor}>
      <Toolbar
        editorState={editorState}
        setEditorState={setEditorState}
        handleImageUpload={handleImageUpload}
      />
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="This Is A <h1> Tag"
        className="title-input"
      />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="This Is A <meta> Tag for Description"
        className="title-input"
      />
      <div className="editor-container">
        <Editor
          ref={editor}
          handleKeyCommand={handleKeyCommand}
          editorState={editorState}
          customStyleMap={styleMap}
          blockStyleFn={myBlockStyleFn}
          onChange={onChange}
          plugins={plugins}
        />
      </div>
      {showURLInput && (
        <div className="url-input-wrapper">
          <input
            ref={urlRef}
            type="text"
            value={urlValue}
            onChange={onURLChange}
            onKeyDown={onLinkInputKeyDown}
            placeholder="Enter URL"
          />
          <button onMouseDown={confirmLink}>Confirm</button>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        ref={fileInput}
      />
      <button
        onClick={() => fileInput.current.click()}
        className="add-image-button"
        title="Add Image"
      >
        <AddPhotoAlternateOutlinedIcon />
      </button>
      <button className="add-image-button" onClick={handleAddLink}><AddLinkIcon /></button>
      <button onClick={handleRemoveLink}>Remove Link</button>
      <button onClick={handleSave} className="save-post-button" title="Save">
        <SendOutlinedIcon style={{ fontSize: '44px' }} />
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default BlogPostEditor;
