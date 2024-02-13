// CommentInput.js
import React, { useState } from 'react';

const CommentInput = ({ onSubmit }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
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
