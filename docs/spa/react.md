---
id: react
title: React Framework
sidebar_label: React.js
---

가이드는 [Vite](https://vitejs.dev/)의 시작 패키지를 기준으로 작성되었습니다. <br/>
아래 가이드의 완성본은 [시작 패키지](/loader-manual/docs/etc/starter-packages) 문서에서 확인할 수 있습니다. <br/>
React Hooks, Redux 를 적용한 가이드는 [데모 패키지](/loader-manual/docs/demo/react-demo)에서 확인할 수 있습니다.

**참고: 이 가이드는 JavaScript(`.jsx`) 기준으로 작성되었습니다.** TypeScript(`.tsx`)로 프로젝트를 구성하는 경우 `npm create vite@latest <project_dir> -- --template react-ts`로 생성하고, 예제 코드의 파일 확장자를 `.tsx`로, `import`하는 컴포넌트 경로도 이에 맞게 변경해주세요.

## 사전 설정

### 프로젝트 생성

* <https://vitejs.dev/guide/>

```bash
npm create vite@latest <project_dir> -- --template react
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

만약 서버 URL을 사용한다면 이 단계는 생략합니다. (예: `https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/`와 같은 데모 서버 URL은 학습용으로만 사용하고, 실제 서비스에서는 라이브러리를 프로젝트에 포함해 배포하는 것을 권장합니다.)

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
yarn dev
# using npm
# npm run dev
```

## 메인 컴포넌트

메인 컴포넌트 혹은 모듈에서 사용할 라이브러리들을 설정(등록)합니다.

### main.jsx

`src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### App.jsx

`src/App.jsx`

```jsx
// import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import loader from '@ibsheet/loader';
import Home from './components/home';
import Page1 from './components/page1';
import Page2 from './components/page2';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: '/ibsheet',
  locales: ['en', 'ko'],
  plugins: ['excel', 'common', 'dialog']
}

// 로더 config
loader.config({
  registry: [ibsheetLib]
});

function App() {
  const loaderVersion = loader.version;

  return (
    <>
      <div className="App">
        <p>@ibsheet/loader v{ loaderVersion }</p>
        <div className="top-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/page2">Page2</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  )
}

export default App
```

## 샘플 공유 데이터

각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다.

* [`src/shared/ibsheet-data.js`](../etc/start-package)

`ibsheet-data.js`는 날짜/숫자 포맷 등의 컬럼 옵션을 재사용하기 위해 `IB_Preset`을 정의한 `src/shared/common.js`를 import 해서 사용합니다.

## 서브 컴포넌트

* `src/components/home.jsx`
* `src/components/page1.jsx`
* `src/components/page2.jsx`

### Home

홈 화면에서는 `ibsheet` 라이브러리를 로드하지 않습니다. 만약 로드되어 있다면 컴포넌트 마운트시 `unload` 합니다.

`src/components/home.jsx`

```jsx
import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import reactLogo from '../assets/react.svg'

function Home () {
  const msg = 'IBSheetLoader for React!';

  useEffect(() => {
    loader.unload();
  }, [])

  return (
    <>
      <div className="home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>{ msg }</h1>
        <br/>
        <img src={reactLogo} className="App-logo" alt="logo" width="150" height="150" />
      </div>
    </>
  )
}

export default Home
```

### Page1

컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/page1.jsx`

```jsx
import React, { useEffect } from "react";
import loader from "@ibsheet/loader";
import { SheetSampleData } from "../shared/ibsheet-data";

let sheetId = "";
const sheetEl = "sheetContainer";

function Page1() {
  useEffect(() => {
    const { data, options } = SheetSampleData[0];

    loader
      .createSheet({
        el: sheetEl,
        options,
        data,
      })
      .then((sheet) => {
        // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
        sheetId = sheet.id;
        console.log("created sheet", sheet.id);
      });

    return () => {
      loader.removeSheet(sheetId);
    };
  }, []);

  return (
    <>
      <div>
        <p>SearchMode: 2, 기본 페이지 입니다.</p>
        <div id={sheetEl}></div>
      </div>
    </>
  );
}

export default Page1;
```

### Page2

두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/page2.jsx`

```jsx
import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

let sheetId = '';
const sheetEl = 'sheetContainer';

function Page2() {

  useEffect(() => {
    const { data, options } = SheetSampleData[1];

    loader.createSheet({
      el: sheetEl,
      options,
      data
    }).then(sheet => {
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      sheetId = sheet.id;
      console.log('created sheet', sheet.id);
    });

    return () => {
      loader.removeSheet(sheetId);
    };
  }, []);

  return (
    <>
      <div>
        <p>SearchMode: 0, 기본 페이지입니다.</p>
        <div id={ sheetEl }></div>
      </div>
    </>
  )

}

export default Page2
```

## Package.json

```
  "dependencies": {
    "@ibsheet/loader": "^1.3.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.15.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0"
  },
```

## 시작 패키지

위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다.

* [문서 바로가기](/loader-manual/docs/etc/starter-packages)
