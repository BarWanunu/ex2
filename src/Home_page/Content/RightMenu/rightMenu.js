import { useState, useEffect } from 'react';
import Friend from './friend';


import './rightMenu.css';

const RightMenu = ({ friendsList }) => {
    // Check if friends is undefined or not an array
     const [friends, setFriendList] = useState([]);

  useEffect(() => {
    // Update the state when friendsList prop changes
    setFriendList(friendsList);
  }, [friendsList]);

    if (!friends || !Array.isArray(friends)) {
      return null; // or handle the case when friends is not available
    }
    
    
    const handleDeleteFriend = async (username) => {
        try {
          const token = localStorage.getItem("token");
          
          const response = await fetch(`http://localhost:80/users/${username}/friends`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, // Add the Authorization header
            },
          });
          const data = await response.json();
          console.log('Server Response:', data);
      
          if (data.success) {
            setFriendList(data.friends);
            console.log('Friends List:');
            data.friends.forEach((friend, index) => {
              console.log(`${index + 1}. ${friend}`);
              window.location.reload();
            }); // Replace this with the actual array from the server
          } else {
            console.error('Failed to fetch friends:', data.message);
          }
        } catch (error) {
          console.error('Error deleting friend:', error.message);
        }
      };

    return (
      <div className="my-3">
        <h4>My Friends</h4>
        <div className="d-flex justify-content-between align-items-center">
          {friends.map((friend) => (
            <div key={friend.username}>
            <Friend onDelete={() => handleDeleteFriend(friend.username)} username={friend.username} profileImg={friend.photo} />
          </div>          ))}
        </div>
      </div>
    );
  };


export default RightMenu;
