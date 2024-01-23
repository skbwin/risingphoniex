import React from "react";
import Navbar from "./Components/NavBar";
// import LeftSidebar from "./Components/LeftSidebar";
// import MainContent from "./Components/MainContent";
import "./App.css";
import Sidebar from "./Components/SideBar";
import MainContent1 from "./Components/MainContent1";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />

      <MainContent1 />

      {/* <div className="content-container">
        <LeftSidebar />
        <MainContent />
        <div className="right-sidebar">Right Sidebar</div>
      </div> */}
    </div>
  );
};

export default App;
