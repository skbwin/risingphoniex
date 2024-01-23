import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #265277;
  overflow: hidden;
  display: flex;
  height: 80px;
`;

const Logo = styled.img`
  position: relative;
  height: 80px; /* Adjust the height as needed */
  margin-right: 10px;
  padding-left: 25px;
  padding-top: 10px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  margin-left: 40px;
  width: 400px;
  display: flex;
  align-items: center;
  margin-top: 35px;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-right: 5px;
  width: 100%;
  height: max-content;
  border: none;
  border-radius: 14px;
`;

const NavIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  a {
    display: flex;
    margin-right: 23px;
    &:hover {
      background-color: black;
      color: black;
    }
  }
`;

const NavIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px 5px 5px 5px;
`;

const NavBar = () => {
  const displaymsg = () => {
    alert("Clicked");
  };

  return (
    <NavbarContainer>
      <Logo src="image3.png" alt="Logo" onClick={displaymsg} />
      <SearchBox>
        <SearchInput type="text" placeholder="Search..." />
      </SearchBox>
      <NavIconsWrapper>
        <a href="#">
          <NavIcon src="Hint.png" alt="Hint" onClick={displaymsg} />
        </a>
        <a href="#">
          <NavIcon src="Settings.png" alt="Settings" onClick={displaymsg} />
        </a>
        <a href="#">
          <NavIcon src="bell.png" alt="bell" onClick={displaymsg} />
        </a>
        <a href="#">
          <NavIcon src="Profile.png" alt="Profile" onClick={displaymsg} />
        </a>
      </NavIconsWrapper>
    </NavbarContainer>
  );
};

export default NavBar;

// import React from "react";
// import "./Navbarstyle.css";

// const NavBar = () => {
//   const displaymsg = () => {
//     alert("Clicked");
//   };
//   return (
//     <div className="navbar">
//       <img src="image3.png" alt="Logo" className="logo" onClick={displaymsg} />
//       <div className="search-box">
//         <input type="text" placeholder="Search..." />
//       </div>
//       <div className="nav-icons-wrapper">
//         <a href="#">
//           <img
//             src="Hint.png"
//             alt="Hint"
//             className="nav-icon"
//             onClick={displaymsg}
//           />
//         </a>
//         <a href="#">
//           <img
//             src="Settings.png"
//             alt="Settings"
//             className="nav-icon"
//             onClick={displaymsg}
//           />
//         </a>
//         <a href="#">
//           <img
//             src="bell.png"
//             alt="bell"
//             className="nav-icon"
//             onClick={displaymsg}
//           />
//         </a>
//         <a href="#">
//           <img
//             src="Profile.png"
//             alt="Profile"
//             className="nav-icon"
//             onClick={displaymsg}
//           />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
