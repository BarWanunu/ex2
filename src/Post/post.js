import './post.css'
import React, { useState } from 'react';
import { ReactComponent as LikeIcon } from './svgimg/like.svg';
import { ReactComponent as ShareIcon } from './svgimg/share.svg';
import { ReactComponent as CommentIcon } from './svgimg/comment.svg';
import bootstrap from 'bootstrap'

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
      <LikeIcon width="25" height="25" onClick={handleLikeClick} style={{ cursor: 'pointer' }} />
      <span>{likes} </span>
    </>
  );
};

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
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      {newComment.trim() !== '' && <button type="submit">Submit</button>}
    </form>
  );
};

const CommentButton = ({ onClick }) => {
  return (
    <CommentIcon width="25" height="25" onClick={onClick} style={{ cursor: 'pointer' }} />
  );
};

function Post({ id, text, profile, date, img }) {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comments, setComments] = useState([]);

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
    
  };

  return (
    <article className='postdesign'>
      <span>
        <b>{profile}&nbsp;</b>
        <br />
        <time>{date}</time>
      </span>
      <p>{text}</p>
      <ul className="icons-container">
            <li>
                 <LikeButton />
            </li>
            <li>
                <ShareIcon width="25" height="25" style={{ cursor: 'pointer' }} />
            </li>
            <li>
                <CommentButton onClick={handleCommentClick} />
            </li>
        
        
      </ul>
      {showCommentInput && <CommentInput onSubmit={handleCommentSubmit} />}
      {showCommentInput && (
        <div>
          <strong>Comments:</strong>
          <ul>
            {comments.map((comment, index) => (
              <li  className='comments' key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default Post;

