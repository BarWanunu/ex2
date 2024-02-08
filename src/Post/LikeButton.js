// LikeButton.js
import React, { useState } from 'react';
import { ReactComponent as LikeIcon } from './svgimg/like.svg';

const LikeButton = ({ onClick }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    if (liked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setLiked(!liked);
    // Call the parent component's onClick function (if provided)
    if (onClick) {
      onClick(!liked);
    }
  };

  return (
    <li onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
      <LikeIcon width="25" height="25" />
      <span>{likes} Like</span>
    </li>
  );
};

export default LikeButton;
