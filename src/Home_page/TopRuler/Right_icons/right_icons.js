import React, {useState, useEffect} from 'react';
function Right_icons({ toggleDarkMode, isDarkMode }){

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
          <i className="bi bi-person-circle" style={{ color: 'black', fontSize: 25 }}></i>
      </div>
    </div>
  );
}

export default Right_icons;