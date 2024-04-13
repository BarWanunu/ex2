import { useState, useEffect } from 'react';
import Post from '../../Post/post.js';
import posts from "../../data/postdb.json"
import LeftMenu from './LeftMenu/leftMenu.js';
import RightMenu from './RightMenu/rightMenu.js';

import './content.css';
import guest_profile from './guest_profile.jpg'
import { Link, json, useNavigate } from 'react-router-dom';

function Content({ isDarkMode, token,username }) {
  const [postsList, setPostList] = useState([]);
  const[friendList,setFriendList]= useState([]);
  const[friendReqList,setFriendReqList]= useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(11);
  const navigate = useNavigate();
  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
  
      reader.onload = () => {
        resolve(reader.result);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };
  useEffect(() => {
    // Fetch posts from the server when the component mounts
    const fetchPosts = async () => {
      const token = localStorage.getItem("token");
      console.log('Content component mounted, triggering useEffect...');

      try {
        const response = await fetch('http://localhost:80/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
          // Add any other headers if needed
        },
    });
        const data = await response.json();
        console.log('Server Response:', data);
        

        if (data.success) {
          setPostList(data.posts);
          console.log('Updated Posts List:', data.posts);
        } else {
          console.error('Failed to fetch posts:', data.message);
        }
      } catch (error) {
        console.error('Error fetching posts:');
      }
    };
    const fetchfriens = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:80/users/${username}/friends`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authorization header
        },
    });
        const data = await response.json();
        console.log('Server Response:', data);
        

        if (data.success) {
          setFriendList(data.friends)
          console.log('Friends List:');
          data.friends.forEach((friend, index) => {
            console.log(`${index + 1}. ${friend}`);
          });// Replace this with the actual array from the server
          
        } else {
          console.error('Failed to fetch friends:', data.message);
        }
      } catch (error) {
        console.error('Error fetching friends:', error.message);
      }
   
    };
    const fetchfriensReq = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:80/users/${username}/friends/requests`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authorization header
        },
    });
        const data = await response.json();
        console.log('Server Response:', data);
        

        if (data.success) {
          setFriendReqList(data.friendsRequest)
          console.log('Friends  Req List:', friendReqList);
          data.friends.forEach((friend, index) => {
            console.log(`${index + 1}. ${friend}`);
          });// Replace this with the actual array from the server
          
        } else {
          console.error('Failed to fetch friends:', data.message);
        }
      } catch (error) {
        console.error('Error fetching friends:', error.message);
      }
   
    };
    

    fetchfriensReq();
    fetchfriens();
    fetchPosts();
  }, []);
  const handleLogOut = () => {
    // Navigate to the home page ("/") when logging out
    navigate('/');
  };
  //adding a post
  const handleAddPost = async () => {
    console.log('You added a new post');
    if (newPostText.trim() !== '') {
      //sets the date
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    const imageData = selectedFile ? await convertImageToBase64(selectedFile) : '';
      const newPost = {
        
        text: newPostText,
        date: formattedDate, 
        img: imageData ,
        
      };
      const token = localStorage.getItem("token");
      const response = await fetch('http://localhost:80/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newPost),
      });

      const data = await response.json();

      if (data.success) {
        alert('Post added successfully');
        setPostList(prevPostsList => [...prevPostsList, data.post]);
      }
    
      else {
        alert('Failed to add post');
      }

      
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
  const handleDeletePost = async(postId) => {
    const token = localStorage.getItem("token");
    console.log(token);
    const updatedResponse = await fetch('http://localhost:80/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
    });

    const updatedData = await updatedResponse.json();

    if (updatedData.success) {
      // Update the client-side state with the updated posts
      setPostList(updatedData.posts);
      console.log('Deleted Post:', postId);
      window.location.reload();
    }
  };
  const handleChangePost = async (postId, editedText) => {
    const token = localStorage.getItem("token");

    const updatedResponse = await fetch(`http://localhost:80/posts/${postId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
    });
  
    const updatedData = await updatedResponse.json();

    if (updatedData.success) {
      // Update the client-side state with the updated posts from the server response
      const editedPostIndex = postsList.findIndex(post => post.id === postId);

      if (editedPostIndex !== -1) {
        // Create a new array with the updated post
        const updatedPostList = [...postsList];
        updatedPostList[editedPostIndex] = updatedData.post;
  
        // Update the client-side state with the new postList
        setPostList(updatedPostList);

        console.log('Edited Post:', editedPostIndex);
        window.location.reload();

    }
  }
  };

  return(
    <div className="content ${isDarkMode ? 'dark-mode' : ''}">
          <div className="container-fluid">
            <div className="row">
              <LeftMenu  friendReqList={friendReqList}/>
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
                    <Post key={post.id} {...post} onDelete={() => handleDeletePost(post.id)} onEdit={() => handleChangePost(post.id)} isDarkMode={isDarkMode}  token={token} friendList={friendList}/>

                  )
                  }
              </div>
              <div className="col-4">
              <Link to="/" className="btn btn-secondary mb-3 logout_button">Log Out</Link>
             <RightMenu friendsList={friendList} token={token}/>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Content;