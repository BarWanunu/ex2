import React, { useState } from 'react';
import avatarImg from './Blank-Profile.jpg';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import { Link, json, useNavigate } from 'react-router-dom';

const Friend = ({ username, profileImg, token }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showFriendsModal, setShowFriendsModal] = useState(false); // State to control modal visibility
  const [friendList, setFriendList] = useState([]);
  const navigate = useNavigate();
  const handleDeleteClick = async() => {
    // Implement the logic to delete the friend
    try {
      const token = localStorage.getItem("token");
      const user=localStorage.getItem("username");
      const response = await fetch(`http://localhost:80/users/${user}/friends/${username}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authorization header
        },
      });
      const data = await response.json();
      console.log('Server Response:', data);

      if (data.success) {
        navigate('/Home');
        console.log('Home');

      } else {
        console.error('Failed to fetch friends:', data.message);
      }
    } catch (error) {
      console.error('Error fetching friends:', error.message);
    }

    console.log(`Deleting friend: ${username}`);
  };


  const fetchFriends = async () => {
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
      console.log(token)

      if (data.success) {
        setFriendList(data.friends);
        console.log('Friends List:', data.friends);
        setShowFriendsModal(true); // Show the modal after fetching friends
      } else {
        console.error('Failed to fetch friends:', data.message);
      }
    } catch (error) {
      console.error('Error fetching friends:', error.message);
    }
  };

  const handleShowFriendClick = () => {
    // Implement the logic to show/edit friend details
    console.log(`show friends of: ${username}`);
    fetchFriends(); // Fetch friends when "Show Friends" is clicked
  };

  return (
    <div className="d-flex">
      <img
        src={profileImg || avatarImg}
        alt="avatar"
        onClick={() => setShowOptions(!showOptions)}
        className="rounded-circle me-2 avatar_image"
      />
      <span className="profile-container">
        <b>{username}&nbsp;</b>
      </span>
      <div>
        {showOptions && (
          <div className="options-dropdown-fr">
            <ul className="list-group">
              <li className="list-group-item" onClick={handleDeleteClick}>
                Delete
              </li>
              <li className="list-group-item" onClick={handleShowFriendClick}>
                Show Friends
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Friends Modal */}
      <Modal show={showFriendsModal} onHide={() => setShowFriendsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Friends List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
          {friendList.map((friend) => (
            <li key={friend.username}>
              <img src={friend.photo}         className="rounded-circle me-2 avatar_image"/>
              <span>{friend.username}&nbsp;</span>
              
            </li>
          ))}

          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFriendsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Friend;
