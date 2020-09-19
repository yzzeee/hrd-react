import React from "react";

import styled from "styled-components";
import { Route, NavLink, Switch } from "react-router-dom";

import DepartmentAdd from "./pages/DepartmentAdd";
import DepartmentList from "./pages/DepartmentList";

const MenuLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 10px;
  color: #222;

  &:hover {
    color: #ff00ff;
  }

  &:after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
    font-weight: normal;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: #22b8cf;
    &:hover{
      color: #3bc9db'
    }
  }
`;

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <MenuLink to="/" exact={true}>
        학과 추가
      </MenuLink>
      <MenuLink to="/department_list">학과 목록</MenuLink>
      <hr />

      <Switch>
        <Route path="/" component={DepartmentAdd} exact={true} />
        <Route path="/department_list" component={DepartmentList} />
      </Switch>
    </div>
  );
};

export default App;
