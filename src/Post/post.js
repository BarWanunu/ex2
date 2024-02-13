// Post.js
import React, { useState } from 'react';
import LikeButton from './LikeButton';
import CommentInput from './CommentInput';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';
import { Modal, Button } from 'react-bootstrap';
import PostOptions from './PostOptions';
import CommentOptions from './CommentOptions'; 
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
  const handleDeleteComment = (index) => {
    // Handle delete comment logic here
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleEditComment = (index, editedText) => {
    // Handle edit comment logic here
    const updatedComments = [...comments];
    updatedComments[index] = editedText;
    setComments(updatedComments);
  };


  const handleEdit = (editedText, setPostText) => {
    // Call setPostText to update the post text
    setPostText(editedText);
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
        <div className="comments-container ">
          <strong>Comments:</strong>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className='comments'>
                {comment}
                <CommentOptions onDelete={() => handleDeleteComment(index)} onEdit={(editedText) => handleEditComment(index, editedText)} initialText={comment} setCommentText={() => {}} />
              </li>
            ))}
          </ul>
        </div>
      )}
     {img && <img src={img} alt={`Post ${id}`} />}
     <PostOptions onDelete={() => onDelete(id)} onEdit={handleEdit} initialText={text} setPostText={setPostText} />

 
    </article>
  );
}

export default Post;
