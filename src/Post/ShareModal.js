// ShareModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ReactComponent as whatsappIcon } from './svgimg/whatsapp.svg'; // Fix the typo here
import { ReactComponent as messengerIcon } from './svgimg/messenger.svg'; // Fix the typo here

function ShareModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Share</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your share content here */}
        <ul  class="shareMenu">
          <li>
            <i className="bi bi-link-45deg " ></i>
          </li>
          <li>
            <i class="bi bi-flag"></i>
          </li>
          <li>
            <i class="bi bi-send"></i>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShareModal;
