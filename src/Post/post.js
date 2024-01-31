import './post.css';
//import { ReactComponent as Heart } from './heart2.svg';

function Post({ id, text,profile , date, img }) {
  return (
    <a href={`post.html?id=${id}`}>
      <post>
        <h3>{text}</h3>
        <span>
          {profile}
          <time>{date}</time>
        </span>
        
      </post>
    </a>
  );
}

export default Post;
