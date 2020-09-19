import React from "react";

import styled from "styled-components";
import { Route, NavLink, Switch } from "react-router-dom";

import MyState from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyEffect from "./pages/MyEffect";
import MyEffect2 from "./pages/MyEffect2";
import StateEffectEx from "./pages/StateEffectEx";
import MyReducer from "./pages/MyReducer";
import DateRange2 from "./pages/DateRange2";
import MyRef from "./pages/MyRef";
import MyCallback from "./pages/MyCallback";
import MyMemo from "./pages/MyMemo";
import MyWidth from "./pages/MyWidth";

/** 메뉴링크 --> NavLink: 현재 머물고 있는 페이지와 관련된 링크에 CSS적용 */
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

  &:last-child {
    &:after {
        /* 글자색을 흰색으로 지정하여 화면에서 숨긴다. */
        color: #fff;
    }
  }

  /*
  URL이 현재 메뉴를 가르키는 경우 (콜론이 아닌 점에 주의)
  활성 메뉴에 적용되는 기본 클래스 이름이 'active'이다. 다른 이름을 사용할 경우 컴포넌트에 activeClassName 속성으로 클래스 이름을 명시해야 한다.
  ex) &.activeLink --> <MenuLink activeClassName="activeLink" ...>
  */
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
      <h1>07-hook-event</h1>
      <MenuLink to="/mystate">MyState</MenuLink>
      <MenuLink to="/daterange1">DateRange1</MenuLink>
      <MenuLink to="/myeffect">MyEffect</MenuLink>
      <MenuLink to="/myeffect2">MyEffect2</MenuLink>
      <MenuLink to="/stateeffectex">StateEffectEx</MenuLink>
      <MenuLink to="/myreducer">MyReducer</MenuLink>
      <MenuLink to="/daterange2">DateRange2</MenuLink>
      <MenuLink to="/myref">MyRef</MenuLink>
      <MenuLink to="/mycallback">MyCallback</MenuLink>
      <MenuLink to="/mymemo">MyMemo</MenuLink>
      <MenuLink to="/mywidth">MyWidth</MenuLink>

      <Switch>
        <Route path="/mystate" component={MyState}></Route>
        <Route path="/daterange1" component={DateRange1}></Route>
        <Route path="/myeffect" component={MyEffect}></Route>
        <Route path="/myeffect2" component={MyEffect2}></Route>
        <Route path="/stateeffectex" component={StateEffectEx}></Route>
        <Route path="/myreducer" component={MyReducer}></Route>
        <Route path="/daterange2" component={DateRange2}></Route>
        <Route path="/myref" component={MyRef}></Route>
        <Route path="/mycallback" component={MyCallback}></Route>
        <Route path="/mymemo" component={MyMemo}></Route>
        <Route path="/mywidth" component={MyWidth}></Route>
      </Switch>
    </div>
  );
};

export default App;
