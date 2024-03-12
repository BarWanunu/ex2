// PostOptions.js
const React = require('react');
const { useState } = require('react');
const { Modal, Button } = require('react-bootstrap');


function PostOptions({ onDelete, onEdit, initialText, setPostText ,token, id,profile}) {
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedText, setEditedText] = useState(initialText);

  const handleDeleteClick = () => {
    setShowOptions(false);
    setShowDeleteConfirmation(true);
  };

  const handleEditClick = () => {
    setShowOptions(false);
    setShowEditModal(true);
  };

  const handleDeleteConfirmation = async () => {
    const token = localStorage.getItem("token");
      // Perform a check with the server to verify authorization
      const response = await fetch(`http://localhost/users/${profile}/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the Authorization header
        },
      });
      
       
  
      const data = await response.json();
      
      if (data.success) {
          // If authorized, proceed with the deletion
          onDelete();
          console.log('Delete Post Response:', data);

          
      } else {
          // If not authorized, display an error message or handle as needed
          console.error('Unauthorized to delete this post:', data.message);
          alert(data.message)
      }
    
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setEditedText(initialText);
  };

  const handleSaveChanges =  async () => {
         // Perform a check with the server to verify authorization
         const token = localStorage.getItem("token");
         const response = await fetch(`http://localhost/users/${profile}/posts/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Add the Authorization header
          },
          body: JSON.stringify({
            editedText
          }),
        });
    
    
        const data = await response.json();
        
        if (data.success) {
            // If authorized, proceed with the deletion
            onEdit();
            console.log('edit Post Response:', data);
  
            
        } else {
            // If not authorized, display an error message or handle as needed
            console.error('Unauthorized to delete this post:', data.message);
            alert(data.message)
        }
   
    handleEditModalClose();
  };

  return (
    <div>
      <i className="bi bi-three-dots dots-post" onClick={() => setShowOptions(!showOptions)} label="Post_Options" data-testid="three-dots-icon" ></i>

      {showOptions && (
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
          <Modal.Title>Edit Post Text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Editable text area */}
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows="4"
            cols="50"
          />
          <br />
          {/* Save Changes button */}
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PostOptions;
