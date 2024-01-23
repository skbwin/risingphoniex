import React from "react";
import "./SideBarstyle.css";

const Sidebar = () => {
  const displaymsg = () => {
    alert("Clicked");
  };
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <img src="quickstart.png" alt="Hint" onClick={displaymsg} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="manage.png" alt="Settings" onClick={displaymsg} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="insights.png" alt="bell" onClick={displaymsg} />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="middlebtn.png"
              alt="Profile"
              className="sidebar-icon1"
              onClick={displaymsg}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="discover.png"
              alt="Profile"
              className="sidebar-icon"
              onClick={displaymsg}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="inteligence.png" alt="Profile" onClick={displaymsg} />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="company.png" alt="Profile" onClick={displaymsg} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
