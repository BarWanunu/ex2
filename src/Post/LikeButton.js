import React, { useState } from 'react';
import { ReactComponent as LikeIcon } from './svgimg/like.svg';

const LikeButton = ({ likes, postId, onLikeClick }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = async () => {
    // Toggle the liked state and update the number of likes accordingly
    setLiked(liked);
  
    // Call the parent component's onLikeClick function (if provided)
    if (onLikeClick) {
      await onLikeClick(liked, postId);
    }
    setLiked(!liked)
  };
  

  return (
    // List item representing the like button
    <li onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
      <LikeIcon width="25" height="25"  />
      <span>{likes} Like</span>
    </li>
  );
};

export default LikeButton;
