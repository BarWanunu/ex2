// ShareModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ShareModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Share</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your share content here */}
        <p>This is the share modal content.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShareModal;
