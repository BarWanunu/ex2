// LikeButton.js
import React, { useState } from 'react';
import { ReactComponent as LikeIcon } from './svgimg/like.svg';
// State variables to track whether the button is liked and the number of likes
const LikeButton = ({ onClick }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

    // Function to handle click on the like button
  const handleLikeClick = () => {
    if (liked) {
          // Toggle the liked state and update the number of likes accordingly
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
        // List item representing the like button
    <li onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
      <LikeIcon width="25" height="25" />
      <span>{likes} Like</span>
    </li>
  );
};

export default LikeButton;
