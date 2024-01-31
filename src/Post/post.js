import './post.css';
import { ReactComponent as Like } from './svgimg/like.svg';
import { ReactComponent as Share } from './svgimg/share.svg';
import { ReactComponent as Comment } from './svgimg/comment.svg';
import React, { useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
  
    const handleLikeClick = () => {
      if (liked) {
        setLikes((prevLikes) => prevLikes - 1);
      } else {
        setLikes((prevLikes) => prevLikes + 1);
      }
      setLiked(!liked);
    };

  return (
    <>
      <svg width="25" height="25" onClick={handleLikeClick}>
        <Like />
      </svg>
      <span>{likes} </span>
    </>
  );
};

function Post({ id, text, profile, date, img }) {
  return (
    <article className='postdesign'>
      <span>
        <b>{profile}&nbsp;</b>
        <br/>
        <time>{date}</time>
      </span>
      <p>{text}</p>
      <span>
        <LikeButton />
        <Share width="25" height="25"></Share>
        <Comment width="25" height="25"></Comment>
      </span>
    </article>
  );
}

export default Post;
