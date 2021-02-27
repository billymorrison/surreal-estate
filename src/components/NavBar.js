/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.header`
  background-color: white;
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  z-index: 1;
`;

const LogoImage = styled.img`
  max-width: 200px;
`;

const NavLink = styled.li`
  display: inline-block;
  margin: 0;
  padding: 10px 20px;
  text-decoration: none;
`

function NavBar() {
  return (
    <Navigation>
      <LogoImage
        className="logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="Surreal Estate Logo"
      />
      <ul>
        <NavLink>
          <Link to="/">View Properties</Link>
        </NavLink>
        <NavLink>
          <Link to="/add-property">Add a Property</Link>
        </NavLink>
      </ul>
    </Navigation>
  );
}

export default NavBar;
