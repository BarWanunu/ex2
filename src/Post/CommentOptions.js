// CommentOptions.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CommentOptions = ({ onDelete, onEdit, initialText, setCommentText }) => {
  const [showCommentOptions, setShowCommentOptions] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedText, setEditedText] = useState(initialText);

  const handleDeleteClick = () => {
    setShowCommentOptions(false);
    setShowDeleteConfirmation(true);
  };

  const handleEditClick = () => {
    setShowCommentOptions(false);
    setShowEditModal(true);
  };

  const handleDeleteConfirmation = () => {
    onDelete();
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setEditedText(initialText);
  };

  const handleSaveChanges = () => {
    onEdit(editedText, setCommentText); // Pass setCommentText to the onEdit function
    handleEditModalClose();
  };

  return (
    <div className="comment-options">
      <i className="bi bi-three-dots dots-comment" onClick={() => setShowCommentOptions(!showCommentOptions)}  data-testid="three-dots-icon-comment"></i>

      {showCommentOptions && (
        <div className="options-dropdown">
          <ul className="list-group">
            <li className="list-group-item" onClick={handleDeleteClick}>Delete</li>
            <li className="list-group-item" onClick={handleEditClick}>Edit</li>
          </ul>
        </div>
      )}

      {/* Modal for delete confirmation */}
      <Modal show={showDeleteConfirmation} onHide={handleCancelDelete} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this comment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmation}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for editing text */}
      <Modal show={showEditModal} onHide={handleEditModalClose} size="ml">
        <Modal.Header closeButton>
          <Modal.Title>Edit Comment Text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Editable text area */}
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows="4"
            cols="50"
            data-testid="comment-textarea"
          />
          <br />
          {/* Save Changes button */}
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CommentOptions;
