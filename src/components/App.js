/* eslint-disable react/react-in-jsx-scope */
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const AppArea = styled.main`
  padding: 30px 60px;
`;

function App() {
  return (
    <>
      <NavBar />
      <AppArea>
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </AppArea>
    </>
  );
}

export default App;
