import React, { useState } from "react";

const TopNavbar = () => {
  // const [iconClick, setIconClick] = useState('');
  const [searchInput, setSearchInput] = useState("");

  // const handleTopIcons = (icon) =>{
  //     setIconClick(icon.target.alt)
  // }

  const handleInput = (input) => {
    setSearchInput(input.target.value);
    console.log(searchInput);
  };

  // useEffect(()=>{
  //     console.log(iconClick)
  // },[iconClick])

  return (
    <div className="top-navbar" style={{ display: "flex" }}>
      <img
        src="image3.png"
        alt=""
        className="logo"
        style={{
          width: "350px",
          height: "150px",
          padding: "20px",
          paddingLeft: "35px",
        }}
      />
      <input
        type="text"
        style={{
          display: "flex",
          border: "none",
          outline: "none",
          backgroundColor: "#F4F4F4",
          width: "380px",
          height: "20px",
          margin: "40px",
          borderRadius: "50px",
        }}
        placeholder="Type your keyword to search..."
        onChange={handleInput}
      ></input>

      {/* <div className="top-right">
        <img
          src="Hint.png"
          alt="Hint"
          className="right-top"
          onClick={handleTopIcons}
        />
        <img
          src="settings.png"
          alt="Setting"
          className="right-top"
          onClick={handleTopIcons}
        />
        <img
          src="bell.png"
          alt="Bell"
          className="right-top"
          onClick={handleTopIcons}
        />
        <img
          src="Profile.png"
          alt="Profile"
          className="right-top"
          onClick={handleTopIcons}
        />
      </div> */}
    </div>
  );
};

export default TopNavbar;
