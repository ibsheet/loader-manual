---
id: react
title: React Framework
sidebar_label: React.js
---

이 가이드는 [`create-react-app`](https://github.com/facebook/create-react-app#creating-an-app/)의 시작 패키지를 기준으로 작성되었습니다. 아래 가이드의 완성본은 [시작 패키지](/loader-manual/docs/etc/starter-packages) 문서에서 확인할 수 있습니다.

## 사전 설정

### CLI 설치

* <https://github.com/facebook/create-react-app#creating-an-app/>

```bash
npm install -g create-react-app
```

### 프로젝트 생성

```bash
create-react-app <project_dir>
```

### 패키지 설치

```bash
cd <project_dir>
yarn add @ibsheet/loader react-router-dom
# using npm
# npm i -S @ibsheet/loader react-router-dom
```

* 라우트 기능의 사용을 위해 `react-router-dom` 패키지를 추가로 설치합니다.

### IBSheet 라이브러리

만약 서버 URL을 사용한다면 이 단계는 생략합니다.

프로젝트 폴더의 `public` 폴더에 `ibsheet` 라이브러리를 복사합니다.

```
├── public/
|  └── ibsheet/
|     ├── css/
|     ├── locale/
|     ├── fonts/
|     ├── ibsheet.js
|     └── ibleaders.js
```

### 개발서버 실행

```bash
yarn start
# using npm
# npm start
```

## 메인 컴포넌트

메인 컴포넌트 혹은 모듈에서 사용할 라이브러리들을 설정(등록)합니다.

### App.js

`src/App.js`

```jsx
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import loader from '@ibsheet/loader'
import { Home } from './components/home'
import { Page1 } from './components/page1'
import { Page2 } from './components/page2'
import './App.css';

loader.config({
  registry: [{
    name: 'ibsheet',
    baseUrl: '/ibsheet'
  }]
})

class App extends Component {
  loaderVersion = loader.version
  render() {
    return (
      <div className="App">
        <p>@ibsheet/loader v{ this.loaderVersion }</p>
        <BrowserRouter className="main">
          <div className="top-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/page1">Page1</Link></li>
              <li><Link to="/page2">Page2</Link></li>
            </ul>
          </div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/page1" component={Page1}/>
          <Route exact path="/page2" component={Page2}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
```

### App.css

`src/App.css`

```css
.App { text-align: center }
.App-logo { height: 40vmin }
.home {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-link { color: #09d3ac }
.top-nav ul { padding: 0 }
.top-nav li { display: inline-block }
.top-nav li + li { margin-left: 1rem }
```

## 샘플 공유 데이터

각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다.

* [`src/shared/ibsheet-data.js`](../etc/spa-sample-data)

## 서브 컴포넌트

* `src/components/home.js`
* `src/components/page1.js`
* `src/components/page2.js`

### Home

홈 화면에서는 `ibsheet` 라이브러리를 로드하지 않습니다. 만약 로드되어 있다면 컴포넌트 마운트시 `unload` 합니다.

`src/components/home.js`

```jsx
import React, { Component } from 'react';
import loader from '@ibsheet/loader'
import logo from '../logo.svg';

export class Home extends Component {
  componentDidMount() {
    loader.unload()
  }
  render() {
    return (
      <div className="home">
        <img src={logo} className="App-logo" alt="logo" />
        <p>IBSheetLoader for React!</p>
      </div>
    );
  }
}
```

### Page1

컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/page1.js`

```jsx
import React, { Component } from 'react';
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

export class Page1 extends Component {
  sheetId = 'sheet'
  sheetEl = 'sheetContainer'
  componentDidMount() {
    const { data, options } = SheetSampleData[0]
    loader.createSheet({
      id: this.sheetId,
      el: this.sheetEl,
      options,
      data
    })
  }
  componentWillUnmount() {
    loader.removeSheet(this.sheetId)
  }
  render() {
    return (
      <div>
        <p>page1 works!</p>
        <div id={this.sheetEl}></div>
      </div>
    )
  }
}

export default Page1
```

### Page2

두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/page2.js`

```jsx
import React, { Component } from 'react';
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

export class Page2 extends Component {
  sheetId = 'sheet'
  sheetEl = 'sheetContainer'
  componentDidMount() {
    const { data, options } = SheetSampleData[1]
    loader.createSheet({
      id: this.sheetId,
      el: this.sheetEl,
      options,
      data
    })
  }
  componentWillUnmount() {
    loader.removeSheet(this.sheetId)
  }
  render() {
    return (
      <div>
        <p>page2 works!</p>
        <div id={this.sheetEl}></div>
      </div>
    )
  }
}

export default Page2
```

## 시작 패키지

위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다.

* [문서 바로가기](/loader-manual/docs/etc/starter-packages)
