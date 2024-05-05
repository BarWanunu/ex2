// FriendRequestModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function FriendRequestModal({ show, onHide, profile }) {
  const handleSendRequest =async () => {
    // Implement logic to send friend request
    console.log(`Sending friend request to ${profile}`);
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:80/users/${profile}/friends`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the Authorization header
        },
      });
      const data = await response.json();
      console.log('Server Response:', data);
      alert(data.message)
      onHide();
    // You can add API calls here to send the friend request
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Not in Friend List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This profile is not in your friend list. Do you want to send a friend request to {profile}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSendRequest}>
          Send Friend Request
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FriendRequestModal;
