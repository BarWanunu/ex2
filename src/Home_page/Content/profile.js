import { useState, useEffect } from 'react';
import Post from '../../Post/post.js';
import posts from "../../data/postdb.json"
import LeftMenu from './LeftMenu/leftMenu.js';
import RightMenu from './RightMenu/rightMenu.js';

import './content.css';
import guest_profile from './guest_profile.jpg'
import { Link, json, useNavigate } from 'react-router-dom';

function Profile({ isDarkMode, token,username,userId }) {
  const [postsList, setPostList] = useState([]);
  const[userProfile,setUserProfile]= useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(11);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch posts from the server when the component mounts
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log('Content component mounted, triggering useEffect...');

   
      const response = await fetch(`http://localhost:80/users/${userId}`, {
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
          setUserProfile(data.user.photo);
          console.log('Updated User:', userProfile);
        } else {
          console.error('Failed to fetch posts:', data.message);
        }
    
    };
    const fetchPosts = async () => {
      const token = localStorage.getItem("token");
      console.log('Content component mounted, triggering useEffect...');

      try {
       
      const response = await fetch(`http://localhost:80/users/${userId}/posts`, {
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
          setPostList(data.post);
          console.log('Updated Posts List:', postsList);
        } else {
          console.error('Failed to fetch posts:', data.message);
        }
      } catch (error) {
        console.error('Error fetching posts:');
      }
    };
    fetchPosts();
    
    fetchUser();
  }, []);

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
 
  const handleLogOut = () => {
    // Navigate to the home page ("/") when logging out
    navigate('/');
  };
  //adding a post
 
  //adding a picture to the post
  const handleFileChange = (event) => {
    console.log('You added a picture to your post');
    setSelectedFile(event.target.files[0]);
  };

  //delete a post
  const handleDeletePost = async(postId) => {
    const token = localStorage.getItem("token");
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
    }
  }
  };

  return(
    <div className="content ${isDarkMode ? 'dark-mode' : ''}">
          <div className="container-fluid">
            <div className="row">
              <LeftMenu />
              <div className="col-6"> 
              <div class="input_box p-3 mt-3 rounded border shadow">              
               <img src={userProfile} alt={userId} />
               <h1>{userId}</h1>
                </div>
                  {
                postsList && postsList.map((post) =>
                  <Post key={post.id} {...post} onDelete={() => handleDeletePost(post.id)} onEdit={() => handleChangePost(post.id)} isDarkMode={isDarkMode}  token={token}/>
                )
              }
              </div>
              <div className="col-4">
              <Link to="/" className="btn btn-secondary mb-3 logout_button">Log Out</Link>              </div>
            </div>
          </div>
        </div>
  );
}

export default Profile;