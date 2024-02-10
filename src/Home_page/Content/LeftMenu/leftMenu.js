function LeftMenu(){
  return(
    <div className="col-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item custom-left-menu">
          <i className="bi bi-person-circle" style={{ marginRight: '8px'}}></i>
          Profile Name
        </li>
        <li className="list-group-item custom-left-menu">
          <i className="bi bi-people-fill" style={{ marginRight: '8px'}}></i>
          Friends
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
    </div>
  );
}

export default LeftMenu;