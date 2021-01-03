import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainSideBar = styled.aside`
  width: 300px;
  height: 600px;
  background-color: #ff0;
  position: fixed;
`;

const SideBarLink = styled.li`
  display: block;
  text-decoration: none;
`;

const SideBar = () => {
  return (
    <MainSideBar>
      <p>SideBar</p>
      <SideBarLink>
        <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      </SideBarLink>
    </MainSideBar>
  );
};

export default SideBar;
