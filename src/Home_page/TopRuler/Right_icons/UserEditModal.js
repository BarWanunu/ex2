import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Assuming you're using React Bootstrap

const UserEditModal = ({ editedUsername, newImage, setEditedUsername, setNewImage, onCancel, onSave }) => {
  
  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Username:</label>
        <input type="text" value={editedUsername} onChange={(e) => setEditedUsername(e.target.value)} />
        <br />
        <label>Profile Image:</label>
        <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={onSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserEditModal;
