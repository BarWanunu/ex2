import FaceIcon_and_search from "./FaceIcon_and_search/faceIcon_and_search";
import Middle_icons from "./Middle_icons/middle_icons";
import Right_icons from "./Right_icons/right_icons";

function TopRuler({ toggleDarkMode, isDarkMode }){
    return (
      <div className="topRuler d-flex align-items-center">
          <div className="container-fluid">
            <div className="row align-items-center">
              <FaceIcon_and_search toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
              <Middle_icons />
              <Right_icons toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
    );
}

export default TopRuler;