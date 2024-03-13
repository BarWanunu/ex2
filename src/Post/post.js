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
import guestprofile from './svgimg/guest_profile.jpg'
import { Link, useNavigate } from 'react-router-dom';
import FriendRequestModal from './FriendRequestModal';

                                              //added this
function Post({ id, text, profile, date, img, likes, onDelete , onEdit, profileImg, isDarkMode ,token, friendList}) {
   // State variables for managing comments, modals, and edited text
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [showEditModal, setShowEditModal] = useState(false);
  const [postText, setPostText] = useState(text);
  const [showOptions, setShowOptions] = useState(false);
  const [likesCount, setLikesCount] = useState(likes || 0);
  const [showFriendRequestModal, setShowFriendRequestModal] = useState(false);
  const navigate = useNavigate();
  // const user= localStorage.getItem('user');
  // const dataUser = JSON.parse(user);
  // const username= dataUser.name;
  // const profileimage=dataUser.photo;



// Function to handle the visibility of the comment input
  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };
  const handleProfileClick = () => {
    console.log(friendList)
    const myUsername = localStorage.getItem("username");
    // Check if the profile is in the list of friends
    if (friendList.some(friend => friend.username === profile)||profile === myUsername) {
      // If profile is in the list of friends, navigate to the profile page
      navigate(`/home/profile?UserID=${profile}`);
    } else {
      // If profile is not in the list of friends, display an alert
      setShowFriendRequestModal(true);
    }
  };
  

  // Function to handle comment submission
  const handleCommentSubmit = (newComment) => {
    
    setComments((prevComments) => [...prevComments, newComment]);
  };
  
  // Functions to handle comment editing and deletion
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

  // Function to handle post editing
  const handleEdit = (editedText, setPostText) => {
    // Call setPostText to update the post text
    setPostText(editedText);
  };

    // Function to close the edit modal
  const handleEditModalClose = () => {
    setShowEditModal(false);
    setEditedText(text); // Reset edited text when closing the edit modal
  };

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

    // Function to save changes after editing the post

  const handleSaveChanges = () => {
    console.log('Save Changes clicked'); // Placeholder, implement actual logic
    // Save changes and close the edit modal
    setShowEditModal(false);
    setPostText(editedText);
    // Here, you can send the edited text to the server or update state as needed
    // For now, let's just log the edited text
    console.log('Edited text:', editedText);
    

  };
  const handleLikeClick = async (isLiked, postId) => {
    console.log('LIKE',isLiked);
    const token = localStorage.getItem("token");
    // You can implement a function to update likes on the server
    // For example, you can use the fetch API to send a POST request to your server
    const response = await fetch(`http://localhost/users/${profile}/posts/${id}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
        // Include any other headers or authentication tokens as needed
      },
      body: JSON.stringify({ token, isLiked }),
    });

    const data = await response.json();
    
    // Update the likes count based on the server response
    if (data.success) {
      setLikesCount(data.likes);
      console.log('LIKE',data.message);
    } else {
      // Handle error, show a message, etc.
    }
  };
  

  return (
    <article className={`postdesign bg-whe p-4 rounded shadow mt-3 ${isDarkMode ? 'dark-mode' : ''}`}>
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <img
          src={profileImg || avatarImg}
          alt="avatar"
          className="rounded-circle me-2 avatar_image"
        />
      <span className="profile-container">
      <b onClick={handleProfileClick} >{profile}&nbsp;</b>
      <time><time>{new Date(date).toLocaleDateString()}</time></time>
      
    </span>

      </div>
      
    </div>
      <p>{postText}</p>
      {img && <img src={img} alt={`Post ${id}`} />}
      <ul className="icons-container action_list action_text">
      <LikeButton likes={likesCount} postId={id} onLikeClick={handleLikeClick} />
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
                        <img src={guestprofile} alt={''} className="rounded-circle me-2 avatar_image" />
                    </div>
               <CommentOptions onDelete={() => handleDeleteComment(index)} onEdit={(editedText) => handleEditComment(index, editedText)} initialText={comment} setCommentText={() => {}} />
             </li>
            ))}
        </ul>
        </div>
      )}
    <PostOptions onDelete={() => onDelete(id)} onEdit={() => onEdit(id)} initialText={text} setPostText={setPostText} label="Post_Options" token={token} id={id} profile={profile} />
    <FriendRequestModal
        show={showFriendRequestModal}
        onHide={() => setShowFriendRequestModal(false)}
        profile={profile}
      />
 
    </article>
  );
}

export default Post;
