// CommentButton.js
import React from 'react';
import { ReactComponent as CommentIcon } from './svgimg/comment.svg';

const CommentButton = ({ onClick }) => {
  const handleCommentClick = () => {
    // Call the parent component's onClick function (if provided)
    if (onClick) {
      onClick();
    }
  };

  return (
    <li onClick={handleCommentClick} style={{ cursor: 'pointer' }}>
      <CommentIcon width="25" height="25" />
      <span>Comment</span>
    </li>
  );
};

export default CommentButton;
