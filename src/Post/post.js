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
import avatarImg from './svgimg/Blank-Profile.jpg';

                                              //added this
function Post({ id, text, profile, date, img, onDelete , profileimg, isDarkMode }) {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postText, setPostText] = useState(text);
  const [showOptions, setShowOptions] = useState(false);
  // const user= localStorage.getItem('user');
  // const dataUser = JSON.parse(user);
  // const username= dataUser.name;
  // const profileimage=dataUser.photo;




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
    <article className={`postdesign bg-whe p-4 rounded shadow mt-3 ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <img
          src={profileimg || avatarImg}
          alt="avatar"
          className="rounded-circle me-2 avatar_image"
        />
      <span className="profile-container">
      <b>{profile}&nbsp;</b>
      <time>{date}</time>
    </span>

      </div>
      
    </div>
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
               <div>
                        <b>guest&nbsp;</b>
                        <img src={profileimg} alt={''} className="rounded-circle me-2 avatar_image" />
                    </div>
               <CommentOptions onDelete={() => handleDeleteComment(index)} onEdit={(editedText) => handleEditComment(index, editedText)} initialText={comment} setCommentText={() => {}} />
             </li>
            ))}
        </ul>
        </div>
      )}
     <PostOptions onDelete={() =>   onDelete(id)} onEdit={handleEdit} initialText={text} setPostText={setPostText} label="Post_Options" />

 
    </article>
  );
}

export default Post;
