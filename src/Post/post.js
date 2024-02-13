// Post.js
import React, { useState } from 'react';
import LikeButton from './LikeButton';
import CommentInput from './CommentInput';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';
import { Modal, Button } from 'react-bootstrap';
import './post.css';

                                              //added this
function Post({ id, text, profile, date, img, onDelete }) {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postText, setPostText] = useState(text);
  const [showOptions, setShowOptions] = useState(false);


  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };



  const handleDelete = () => {
    console.log('Delete option clicked'); // Placeholder, implement actual logic
    onDelete(id);
       
  };

  const handleEdit = () => {
    console.log('Edit option clicked'); // Placeholder, implement actual logic
    setShowOptionsModal(false);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setEditedText(text); // Reset edited text when closing the edit modal
  };
  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };



  const handleSaveChanges = () => {
    console.log('Save Changes clicked'); // Placeholder, implement actual logic
    // Save changes and close the edit modal
    setShowEditModal(false);
    setPostText(editedText);
    // Here, you can send the edited text to the server or update state as needed
    // For now, let's just log the edited text
    console.log('Edited text:', editedText);
    

  };
  



  return (
    <article className='postdesign bg-white p-4 rounded shadow mt-3'>
      <span classname="d-flex justify-content-between">
      <div class="d-flex">
                  <img
                    src=".\svgimg\Blank-Profile.jpg"
                    alt="avatar"
                    class="rounded-circle me-2 avatar_image"
                    
                  />
                  
      
        <b>{profile}&nbsp;</b>
        </div>
        <br />
        <time>{date}</time>
      </span>
      <p>{postText}</p>
      {img && <img src={img} alt={`Post ${id}`} />}
      <ul className="icons-container action_list action_text">
        <LikeButton />
        <CommentButton onClick={handleCommentClick} />
        <ShareButton />
      </ul>
      {showCommentInput && <CommentInput onSubmit={handleCommentSubmit} />}
      {showCommentInput && (
        <div className="comments-container">
          <strong>Comments:</strong>
          <ul>
            {comments.map((comment, index) => (
              <li className='comments' key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
     {img && <img src={img} alt={`Post ${id}`} />}

     <div>
      <i className="bi bi-three-dots dots-post" onClick={handleOptionsClick}></i>

      {showOptions && (
        <div className="options-dropdown">
          <ul class="list-group">
            <li class="list-group-item" onClick={handleDelete}>Delete</li>
            <li class="list-group-item" onClick={handleEdit}>Edit</li>
          </ul>
        </div>
      )}
    </div>

      {/* Modal for editing text */}
      <Modal show={showEditModal} onHide={handleEditModalClose} size="ml">
        <Modal.Header closeButton>
          <Modal.Title>Edit Post Text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Editable text area */}
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows="4"
            cols="50"
          />
          <br />
          {/* Save Changes button */}
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Body>
      </Modal>
    </article>
  );
}

export default Post;
