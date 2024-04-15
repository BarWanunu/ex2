import React, {useState, useEffect} from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import UserEditModal from './UserEditModal'; 
const { Modal, Button } = require('react-bootstrap');

function Right_icons({ toggleDarkMode, isDarkMode }){
  let [profile, setProfile] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUsername, setEditedUsername] = useState('');
  const [newImage, setNewImage] = useState(null);
  const username = localStorage.getItem("username");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
   
    // Fetch posts from the server when the component mounts
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username")
      console.log('Content component mounted, triggering useEffect...');

      try {
        
        const response = await fetch(`http://localhost:80/users/${username}`, {
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
          setProfile(data.user.photo);
          console.log('Updated user:', data.user.use);
        } else {
          console.error('Failed toupdate user:', data.message);
        }
      } catch (error) {
        console.error('Error fetching posts:');
      }
    };
    fetchUser();
  }, []);
  
  const handleDeleteClick = () => {
    setShowOptions(false);
    setShowDeleteConfirmation(true);
    console.log(showDeleteConfirmation)

  };

  const handleConfirmDelete  = async () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
      // Perform a check with the server to verify authorization
      const response = await fetch(`http://localhost/users/${username}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the Authorization header
        },
      });
  
      const data = await response.json();
      
      if (data.success) {
          // If authorized, proceed with the deletion
          console.log('Delete user Response:', data);
          setShowDeleteConfirmation(false);
          navigate('/');

          
      } else {
          // If not authorized, display an error message or handle as needed
          console.error('Unauthorized to delete this post:', data.message);
          alert(data.message)
      }
    
  };
  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false); // Close the confirmation modal without deletion
  };
  const handleEditClick = () => {
    setEditedUsername(username);
    setShowEditModal(true);
  };
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

  const handleEditUser = async () => {
    const imageData = newImage ? await convertImageToBase64(newImage) : '';
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
      // Perform a check with the server to verify authorization
      console.log(editedUsername); // Make sure the variable name matches here
      const response = await fetch(`http://localhost/users/${username}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the Authorization header
        },
        body: JSON.stringify({
          editedUsername, // Fix the variable name here
          imageData
        }),
      });
  
      const data = await response.json();
      
      if (data.success) {
          // If authorized, proceed with the deletion
          console.log('Edit User', data);
          setProfile(data.profile)
          window.location.reload();
          

          
      } else {
          // If not authorized, display an error message or handle as needed
          console.error('Unauthorized to delete this post:', data.message);
          alert(data.message)
      }
    setShowEditModal(false);

  };


  return (
    <div className="col-3 d-flex justify-content-end">
   <div className="gray-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Dark-mode">
      <i className={`bi bi-moon ${isDarkMode ? '' : 'active'}`} style={{ color: 'black', fontSize: 40 }} id="Dark_feed" onClick={() => toggleDarkMode(true)}></i>
      </div>

      <div className="gray-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Menu">
          <i className="bi bi-three-dots" style={{ color: 'black', fontSize: 40 }}></i>
      </div>
      <div className="gray-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Messenger">
          <i className="bi bi-chat-dots" style={{ color: 'black', fontSize: 25 }}></i>
      </div>
      <div className="gray-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Notifications">
          <i className="bi bi-bell-fill" style={{ color: 'black', fontSize: 25 }}></i>
      </div>

      <div className="gray-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Account">
        <img
          src={profile}
          alt="avatar"
          onClick={() => setShowOptions(!showOptions)}
          className="rounded-circle me-2 avatar_image"
        />
        <div>
          {showOptions && (
            <div className="options-dropdown-user">
              <ul className="list-group">
                <li className="list-group-item" onClick={handleDeleteClick}>
                  Delete
                </li>
                <li className="list-group-item" onClick={handleEditClick}>
                  Edit User
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
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
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


      {/* UserEditModal component */}
      {showEditModal && (
        <UserEditModal
          editedUsername={editedUsername}
          newImage={newImage}
          setEditedUsername={setEditedUsername}
          setNewImage={setNewImage}
          onCancel={() => setShowEditModal(false)}
          onSave={handleEditUser}
        />
      )}
    </div>
  );
}

export default Right_icons;