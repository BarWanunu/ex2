// CommentInput.js
import React, { useState } from 'react';

const CommentInput = ({ onSubmit }) => {
  // State variable to manage the new comment input
  const [newComment, setNewComment] = useState('');
  // State variable to manage the new comment input
  const handleCommentSubmit = (e) => {
        // Check if the new comment is not empty
    e.preventDefault();
    if (newComment.trim() !== '') {
     // Call the parent component's onSubmit function with the new comment

      onSubmit(newComment);
      
      setNewComment('');
    }
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <input
        className='input_comments'
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      {newComment.trim() !== '' && <button type="submit">Submit</button>}
      
    </form>
  );
};

export default CommentInput;
