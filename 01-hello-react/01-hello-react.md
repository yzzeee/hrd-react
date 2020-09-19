리액트 수업 (주말반)
===================================================================================================

강사
---------------------------

이 광 호 ([leekh4232@gmail.com](mailto:leekh4232@gmail.com))

수료조건 (국비지원의 경우만 해당)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

출석율 80% 이상일 경우 수료

-   지각,조퇴 3회당 결석 1회
-   하루 50% 이상 수업을 들어야 출석 인정
-   온라인 출석부는 내부 확인용 (증빙자료X)
-   카드 태그를 안할 경우 무조건 결석.
-   `10시 10분 59초`까지는 정상 출석
-   `17시 50분 01초`부터 퇴실 가능함

> 미수료시 카드 잔액중 약 60만원 강제 차감.

> 6개월간 카드 사용 정지.

이수조건
-------------------------------------------------

> 시험 70점 이상.

* * * * *

Hello React
===========================

#01. 설치할 프로그램
---------------------------------------------------------------------------------------------

1.  Node.js
    -   npm 명령
    -   react가 내부적으로 테스트 환경 구동을 위해 사용
    -   설치 확인을 위해 명령프롬프에서 `node --version` 명령을
        수행한다.
    -   표시되는 결과가 없을 경우 아래의 URL에서 내려받아 설치한다.

        > [https://nodejs.org/en/](https://nodejs.org/en/)

2.  Yarn
    -   npm이 개선된 형태.
    -   설치 확인을 위해 명령프롬프에서 `yarn --version` 명령을
        수행한다.
    -   표시되는 결과가 없을 경우 아래의 URL에서 내려받아 설치한다.

        > [https://yarnpkg.com/](https://yarnpkg.com/)

    -   또 다른 설치 방법 (nodejs 설치 후 명령프롬프트에서 실행)

            npm install -g yarn

3.  에디터
    -   Visual Studio Code
    -   [https://code.visualstudio.com/](https://code.visualstudio.com/)

#02. 프로젝트 생성
----------------------------------------------------------------------------------

### 1) 작업폴더에서 명령창 열기

작업폴더 빈 곳에서 Shift + 마우스 우클릭 후 **여기에 Powershell 열기**
선택.

혹은 VSCode에서 작업 폴더를 열어 놓은 상태로 `Ctrl + ~` 입력

### 2) 리액트 프로젝트 생성하기

    yarn create react-app 프로젝트이름

혹은

    npm create react-app 프로젝트이름

> 프로젝트 이름에 대문자 사용X

### 3) 생성된 프로젝트 실행하기

#### 명령창 상에서 프로젝트 폴더 안으로 진입

    cd 프로젝트이름

#### 실행하기

    yarn start

혹은

    npm start

### 4) 패키지 관리자 (npm, yarn)

개발과정에서 필요한 패키지(혹은 플러그인)의 다운로드, 업데이트, 제거
등을 담당하는 명령어.

npm과 yarn중 하나만 수행하면 된다. (yarn 추천)

#### 패키지 설치하기

    yarn add 패키지이름

혹은

    npm install 패키지이름 --save

#### 패키지 삭제하기

    yarn remove 패키지이름

혹은

    npm uninstall 패키지이름 --save

* * * * *

#03. VSCode 확장기능 설치
------------------------------------------------------------------------------------------------

### 1) 기본설치

-   Korean Language Pack for Visual Studio Code
-   Markdown All in One
-   Markdown Preview Github Styling

### 2) Javascript 및 React 도구

-   ESLint : 자바 스크립트 문법 및 코드 스타일 검사 도구
-   Reactjs Code Snippets : 리액트 컴포넌트 및 라이프사이클 함수를
    작성할 때 단축 단어를 사용하여 간편하게 코드를 자동으로 생성해 낼 수
    있는 코드 조각 모음. 제작자가 charalampos karypidis인 것 추천
-   Prettier-Code formatter: 코드 스타일을 자동으로 정리해 주는 도구

### 3) ESLint 설정

명령프롬프트에서 다음의 명령들을 수행한다.

> `WinKey+R` \> `cmd` 입력 후 `Enter`

    npm install -g eslint
    npm install --save-dev babel-eslint
    npm install --save-dev eslint-plugin-react

### 4) VScode 설정 추가

    "javascript.validate.enable": false,
    "eslint.enable": true,
    "jshint.options": {
        "esversion": 6
    }

### 5) VSCode 한글 설정

1.  `F1`키를 누른 후 **Configure Display Language** 선택
2.  `ko` 선택

