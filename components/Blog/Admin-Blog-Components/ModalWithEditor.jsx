import React, { useEffect, useRef, useState } from "react";
import {
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
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
import createLinkDecorator from "../Admin-Blog-Components/LinkComponent";
import AddLinkIcon from '@mui/icons-material/AddLink';
import { Map, OrderedSet } from 'immutable';
const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];


const DraftEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editorState, setEditorState] = useState(() => {
    const contentState = convertFromRaw({
      blocks: [
        {
          key: '9adb5',
          text: 'Hello.',
          type: 'unstyled',
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    });

    const decorator = createLinkDecorator();
    return EditorState.createWithContent(contentState, decorator);
  });
  const [showURLInput, setShowURLInput] = useState(false);
  const [urlValue, setUrlValue] = useState('');
  const editor = useRef(null);
  const fileInput = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => {
    focusEditor();
  }, []);

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

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    const rawContent = convertToRaw(contentState);

    axios
      .post("https://blog.phonology.io/api/save-post", {
        title,
        description,
        content: htmlContent,
        rawContent,
      })
      .then((response) => {
        alert("Post saved successfully", response.data);
      })
      .catch((error) => {
        console.error("Error saving post:", error);
      });
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

  const handleAddLink = ( ) => {
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

  // const handleRemoveLink = () => {
  //   const selection = editorState.getSelection();
  //   if (!selection.isCollapsed()) {
  //     setEditorState(RichUtils.toggleLink(editorState, selection, null));
  //   }
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    uploadImageToServer(file);
  };

  const uploadImageToServer = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    // headers.append('Authorization', 'Bearer YourAccessTokenHere'); // Add any authorization token if required
    headers.append('Access-Control-Allow-Origin', '*'); // Add the CORS header
    

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: formData,
      redirect: 'follow'
    };

    try {
    const response = await fetch('https://blog.phonology.io/api/upload-image', requestOptions);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }

      const data = await response.json();
      if (data.imageUrl) {
        setEditorState(insertImage(data.imageUrl));
      }
    } catch (error) {
      console.log('Error uploading image:', error);
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
        <div style={{ marginBottom: 10 }}>
          <input
            onChange={onURLChange}
            ref={urlRef}
            type="text"
            value={urlValue}
            onKeyDown={onLinkInputKeyDown}
            placeholder="Enter URL"
          />
          <button onMouseDown={confirmLink}>
            Confirm
          </button>
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
      <button className="add-image-button" onClick={handleAddLink} title="HyperLink"><AddLinkIcon /></button>
      {/* <button onClick={handleRemoveLink}>Remove Link</button> */}
      <button onClick={handleSave} className="save-post-button" title="Save">
        <SendOutlinedIcon style={{ fontSize: '44px' }} />
      </button>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        theme="light"
      /> */}
    </div>
  );
};

export default DraftEditor;
