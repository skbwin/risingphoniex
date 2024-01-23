import React from "react";
import styled from "styled-components";

const MainContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px;
`;

const MidTopContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 87%;
`;

const MidTopBackground = styled.img`
  width: 120%;
  height: 80%;
  margin-bottom: 0px;
  margin-left: -2%;
  @media screen and (max-width: 1024px) {
    width: 120%;
    height: 80%;
    margin-bottom: 0px;
    margin-left: 2%;
  }
  @media screen and (max-width: 1366px) {
    width: 120%;
    height: 80%;
    margin-bottom: 0px;
    margin-left: 2%;
  }
`;

const MidTopOverlay = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  height: 120%;
  width: 22%;
  top: -18%;
  right: 3%;

  @media screen and (max-width: 1024px) {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 120%;
    width: 23%;
    top: -18%;
    right: 3%;
  }
`;
const TextOverlay = styled.div`
  position: absolute;
  width: 40%;
  top: 38%;
  left: 21.5%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1vw;
  font-family: Poppins-Medium;
`;
const SearchBox = styled.div`
  margin-left: 0px;
  width: 70%;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
const ProgramName = styled.div`
  font-family: Poppins-Medium;
  font-size: 1vw;
`;
const SearchInput = styled.input`
  padding: 8px;
  margin-right: 5px;
  margin-left: 35px;
  width: 60%;
  height: max-content;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s ease;
  background-color: #cccccc;
  &:focus {
    background-color: lightblue;
  }
`;
const Sidebar = styled.div`
  height: 100%;
  width: 7%;
  position: fixed;
  top: auto;
  right: 0;
`;
const MainContent1 = () => {
  const data = [
    {
      title: "Hello, Sundar!",
      description: "Welcome to our",
      description2: "Compliance Co-Pilot AI Platform",
      description3: "The best solution for your enterprise",
    },
  ];
  return (
    <MainContentContainer>
      <MidTopContainer>
        <MidTopBackground src="Mid-top.png" />
        <MidTopOverlay src="top-head-image.png" />
        <TextOverlay>
          {data.map((getData) => (
            <>
              <h1 style={{ color: "#F05929" }}>{getData.title}</h1>
              <h3 style={{ color: "#090000" }}>{getData.description}</h3>
              <h3 style={{ color: "#F05929" }}>{getData.description2}</h3>
              <h3 style={{ color: "#090000" }}>{getData.description3}</h3>
            </>
          ))}
          <SearchBox>
            <ProgramName style={{ color: "#090000" }}>Program Name</ProgramName>
            <SearchInput type="text" placeholder="" />
          </SearchBox>
        </TextOverlay>
      </MidTopContainer>
      <Sidebar>
        <img src="rightSidebar.png" alt="" />
        sagar
      </Sidebar>
    </MainContentContainer>
  );
};

export default MainContent1;
