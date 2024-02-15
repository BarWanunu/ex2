function FaceIcon_and_search({isDarkMode}){
  return(
    <div className="col-3 d-flex justify-content-between align-items-center"> 
    <i className="bi bi-facebook custom-facebook-icon" style={{ marginRight: '8px', color: 'blue' }}></i>
    <div className="input-group   flex-nowrap">
        <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
        <input type="text" className="form-control" placeholder="Search Facebook" aria-label="Username" aria-describedby="addon-wrapping" style={{ paddingTop: '8px', paddingBottom: '8px', fontSize: '15px' }} />
    </div>
  </div>
  );
}

export default FaceIcon_and_search;