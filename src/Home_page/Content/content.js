import { useState } from 'react';
import Post from '../../Post/post.js';
import posts from "../../data/postdb.json"
import LeftMenu from './LeftMenu/leftMenu.js';
import './content.css';
import guest_profile from './guest_profile.jpg'
import { Link, useNavigate } from 'react-router-dom';

function Content({ isDarkMode }) {
  const [postsList, setPostList] = useState(posts);
  const [newPostText, setNewPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(11);
  const navigate = useNavigate();
  // const user= localStorage.getItem('user');
  // const dataUser = JSON.parse(user);
  // const username= dataUser.name;
  // const profileimage=dataUser.photo;
  const handleLogOut = () => {
    // Navigate to the home page ("/") when logging out
    navigate('/');
  };
  //adding a post
  const handleAddPost = () => {
    console.log('You added a new post');
    if (newPostText.trim() !== '') {
      //sets the date
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
      const newPost = {
        id: currentPostId,
        text: newPostText,
        profile: 'guest',   // need to be changed it to the profile that connected
        date: formattedDate, 
        img: selectedFile ? URL.createObjectURL(selectedFile) : null ,
        profileimg:guest_profile
      };
      setPostList([...postsList, newPost]);
      setNewPostText('');
      setSelectedFile(null);
      setCurrentPostId(currentPostId + 1);
    }
  };

  //adding a picture to the post
  const handleFileChange = (event) => {
    console.log('You added a picture to your post');
    setSelectedFile(event.target.files[0]);
  };

  //delete a post
  const handleDeletePost = (postId) => {
    setPostList(postsList.filter(post => post.id !== postId));
  };

  return(
    <div className="content ${isDarkMode ? 'dark-mode' : ''}">
          <div className="container-fluid">
            <div className="row">
              <LeftMenu />
              <div className="col-6"> 
              <div class="input_box p-3 mt-3 rounded border shadow">              
                <div className="add-post-container">
                  <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder="What's on your mind?"
                    className="form-control"
                  />
                  
                  <input
                    type="file"
                    onChange={handleFileChange}
                  />
                  <button onClick={handleAddPost} className="btn btn-primary">Add Post</button>
                </div>
                </div>
                  {
                    postsList.map((post) =>
                    <Post key={post.id} {...post} onDelete={() => handleDeletePost(post.id)} isDarkMode={isDarkMode} />

                  )
                  }
              </div>
              <div className="col-4">
              <Link to="/" className="btn btn-secondary mb-3 logout_button">Log Out</Link>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Content;