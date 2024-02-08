import './home.css'
import Post from '../Post/post.js';
import posts from "../data/postdb.json"
import { useState } from 'react';

function Home(){
  const [postsList, setPostList] = useState(posts)

  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="home.css" />
      </div>
      <div>
        <div className="topRuler d-flex align-items-center">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-3 d-flex justify-content-between align-items-center"> 
                <i className="bi bi-facebook custom-facebook-icon" style={{ marginRight: '8px', color: 'blue' }}></i>
                <div className="input-group   flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search Facebook" aria-label="Username" aria-describedby="addon-wrapping" style={{ paddingTop: '8px', paddingBottom: '8px', fontSize: '15px' }} />
                </div>
              </div>
              <div className="col-6 custom-middle-icons">
                <div className="container text-center">
                  <div className="row">
                    <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Home">
                      <i className="bi bi-house-door-fill"></i>
                    </div>
                    <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Video">
                      <i className="bi bi-play-btn-fill"></i>
                    </div>
                    <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Marketplace">
                      <i className="bi bi-shop"></i>
                    </div>
                    <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Groups">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Gaming">
                      <i className="bi bi-controller"></i>
                    </div>
                  </div>
                </div>            
              </div>
              <div className="col-3 d-flex justify-content-end">
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
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
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
              <div className="col-7">
                <div>
                  {
                    postsList.map((post) => 
                      <Post {...post} />
                    )
                  }
                </div>
              </div>
              <div className="col-2">
                Other stuff here?
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      </div>
    </div>
  );
}

export default Home;