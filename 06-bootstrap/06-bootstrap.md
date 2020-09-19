06-bootstrap
=============================

`<head>~</head>`안의 내용 명시하기.

오픈소스 UI 프레임워크 적용하기.

\#01. 프로젝트 생성
----------------------------------------------------------------------------------

    yarn create react-app 06-bootstrap

### 1) 추가 패키지 설치

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

    yarn add react-router-dom
    yarn add qs
    yarn add node-sass
    yarn add styled-components
    yarn add react-helmet
    yarn add react-bootstrap
    yarn add bootstrap@3

### 2) 프로젝트 생성 후 기초작업

1.  **src폴더** 하위에서 App.css와 index.css, logo.svg 삭제
2.  **App.js** 파일에서 App.css와 logo.svg에 대한 참조(import) 구문 제거
3.  **index.js** 파일에서 index.css에 대한 참조(import) 구문 제거
4.  index.js 파일에서 다음의 구문 추가

        import { BrowserRouter } from 'react-router-dom';

5.  index.js 파일에서 `<App />`을
    `<BrowserRouter><App /></BrowserRouter>`로 변경
6.  App.js 파일에 다음을 추가

        import { Route, NavLink, Switch } from "react-router-dom";

    혹은

        import { Route, Link, Switch } from "react-router-dom";

### 3) 프로젝트 실행

프로젝트를 VSCode로 열고, `Ctrl` + `~`를 눌러 터미널 실행

    yarn start
