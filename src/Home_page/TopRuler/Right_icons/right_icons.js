import React, {useState, useEffect} from 'react';
function Right_icons({ toggleDarkMode, isDarkMode }){
  const [profile, setProfile] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
   
    // Fetch posts from the server when the component mounts
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log('Content component mounted, triggering useEffect...');

      try {
        const response = await fetch('http://localhost:80/users/${username}', {
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
  return(
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
              <li className="list-group-item" >
                Delete
              </li>
              <li className="list-group-item" >
                Edit User
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Right_icons;