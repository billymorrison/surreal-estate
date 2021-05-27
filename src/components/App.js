/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import SideBar from "./SideBar";

const AppArea = styled.main`
  padding: 30px 20px;
  display: flex;
`;

function App() {
  return (
    <div data-testid="app">
      <NavBar />
      <AppArea>
        <Switch>
          <Route exact path="/">
            <SideBar />
            <Properties />
          </Route>
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </AppArea>
    </div>
  );
}

export default App;
