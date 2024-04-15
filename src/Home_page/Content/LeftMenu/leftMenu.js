import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function LeftMenu({ friendReqList }) {
  const [showFriendReqModal, setShowFriendReqModal] = useState(false);
  const [friendsReq, setFriendList] = useState([]);
  const navigate = useNavigate();
  const username= localStorage.getItem('username');
  useEffect(() => {
    // Update the state when friendsList prop changes
    // console.log("hi", friendReqList)
    setFriendList(friendReqList);
  }, [friendReqList]);
  // Function to handle opening the friend request modal
  const handleFriendReqClick = () => {
    setShowFriendReqModal(true);
  };

  // Function to handle closing the friend request modal
  const handleCloseFriendReqModal = () => {
    setShowFriendReqModal(false);
  };
  const handleApproveFriend =async (friendUsername) => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    console.log(friendUsername)
    const response = await fetch(`http://localhost:80/users/${username}/friends/${friendUsername}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Add the Authorization header
      },
    });
    const data = await response.json();
    console.log('Server Response:', data);
    alert(data.message)
    setShowFriendReqModal(false);
    fetchfriensReq();
    window.location.reload();

  };
  // Function to handle clicking on the Profile option
  const handleProfileClick = () => {
    // Navigate to the profile page with the current user's ID
    navigate(`/home/profile?UserID=${username}`);
  };

  
  const fetchfriensReq = async () => {
    try {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
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
        setFriendList(data.friendsRequest)
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
  
  return (
    <div className="col-2">
      <ul className="list-group list-group-flush">
      <li className="list-group-item custom-left-menu" onClick={handleProfileClick}>
          <i className="bi bi-person-circle" style={{ marginRight: '8px'}}></i>
          Profile 
        </li>
        <li className="list-group-item custom-left-menu" onClick={handleFriendReqClick}>
          <i className="bi bi-people-fill" style={{ marginRight: '8px'}}></i>
          Friend requests
        </li>
        <li className="list-group-item custom-left-menu">
          <i className="bi bi-person-lines-fill" style={{ marginRight: '8px'}}></i>
          Groups
        </li>
        <li className="list-group-item custom-left-menu">
          <i className="bi bi-clock-fill" style={{ marginRight: '8px'}}></i>
          Memories
        </li>
        <li className="list-group-item custom-left-menu">
          <i className="bi bi-save-fill" style={{ marginRight: '8px'}}></i>
          Saved
        </li>
        <li className="list-group-item custom-left-menu">
          <i className="bi bi-play-btn-fill" style={{ marginRight: '8px'}}></i>
          Videos
        </li>
      </ul>

      {/* Modal for friend requests */}
      <Modal show={showFriendReqModal} onHide={handleCloseFriendReqModal}>
        <Modal.Header closeButton>
          <Modal.Title>Friend Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <ul className="list-unstyled">
    {friendReqList && friendReqList.map((friend) => (
      <li key={friend.username} className="d-flex align-items-center justify-content-between mb-2">
        <div className="d-flex align-items-center">
          <img src={friend.photo} alt={`Friend profile ${friend.username}`} className="rounded-circle me-2 avatar_image" />
          <span>{friend.username}</span>
        </div>
        <div>
          <button className="btn btn-success me-2" onClick={() => handleApproveFriend(friend.username)}>Approve</button>
          
        </div>
      </li>
    ))}
  </ul>
</Modal.Body>


      </Modal>
    </div>
  );
}

export default LeftMenu;
