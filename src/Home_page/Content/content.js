import { useState } from 'react';
import Post from '../../Post/post.js';
import posts from "../../data/postdb.json"
import LeftMenu from './LeftMenu/leftMenu.js';

function Content() {
  const [postsList, setPostList] = useState(posts);
  const [newPostText, setNewPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(11);

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
        profile: "Your Profile",   // need to be changed it to the profile that connected
        date: formattedDate, 
        img: selectedFile ? URL.createObjectURL(selectedFile) : null    
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
    <div className="content">
          <div className="container-fluid">
            <div className="row">
              <LeftMenu />
              <div className="col-7">               
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
                  {
                    postsList.map((post) =>
                    <Post key={post.id} {...post} onDelete={() => handleDeletePost(post.id)} />
                  )
                  }
              </div>
              <div className="col-2">
                Other stuff here?
              </div>
            </div>
          </div>
        </div>
  );
}

export default Content;