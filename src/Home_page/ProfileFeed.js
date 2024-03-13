import './home.css'
import TopRuler from './TopRuler/topRuler.js';
import React, {useState, useEffect} from 'react';
import Profile from'./Content/profile.js'
import { useLocation } from 'react-router-dom';

function ProfileFeed({token, username}){
  console.log('Token in Home:', token);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('UserID');
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
}, [isDarkMode]);

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
      <TopRuler toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Profile isDarkMode={isDarkMode}  userId={userId} />
       
       
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      </div>
    </div>
  );
}

export default ProfileFeed;