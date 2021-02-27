import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

const MainSideBar = styled.aside`
  width: 300px;
  height: 100vh;
  padding: 20px;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 72px;
`;

const SideBarLink = styled.li`
  display: block;
  text-decoration: none;
`;

const SideBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const { search } = useLocation();
  const history = useHistory();

  const buildQueryString = (operation, valueObj) => {
    const location = qs.parse(search, {
      ignoreQueryPrefix: true,
    });
    const filter = {
      ...location,
      [operation]: JSON.stringify({
        ...JSON.parse(location[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(filter, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event, input) => {
    event.preventDefault();
    const queryUrl = buildQueryString("query", { title: { $regex: input } });
    history.push(queryUrl);
    setSearchInput("");
  };

  return (
    <MainSideBar>
      <p>SideBar</p>
      <form onSubmit={(e) => handleSubmit(e, searchInput)}>
        <label htmlFor="search">
          Search
          <input
            name="search"
            type="text"
            value={searchInput}
            onChange={(e) => handleInput(e)}
          />
          <button type="submit">Search</button>
        </label>
      </form>
      <p>City Filter</p>
      <SideBarLink>
        <Link to={buildQueryString("query", { city: "Manchester" })}>
          Manchester
        </Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={buildQueryString("query", { city: "Sheffield" })}>
          Sheffield
        </Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={buildQueryString("query", { city: "Liverpool" })}>
          Liverpool
        </Link>
      </SideBarLink>
      <p>Price Filter</p>
      <SideBarLink>
        <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
      </SideBarLink>
      <SideBarLink>
        <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
      </SideBarLink>
    </MainSideBar>
  );
};

export default SideBar;
