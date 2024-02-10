import { useState } from 'react';
import Post from '../../Post/post.js';
import posts from "../../data/postdb.json"
import LeftMenu from './LeftMenu/leftMenu.js';

function Content() {
  const [postsList, setPostList] = useState(posts);
  const [newPostText, setNewPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAddPost = () => {
    if (newPostText.trim() !== '') {
      const newPost = {
        id: postsList.length + 1,
        text: newPostText,
        profile: "Your Profile",   // need to be changed it to the profile that connected
        date: new Date().toISOString(), 
        img: selectedFile ? URL.createObjectURL(selectedFile) : null    
      };
      setPostList([...postsList, newPost]);
      setNewPostText('');
      setSelectedFile(null);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
                      <Post key={post.id} {...post} />
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