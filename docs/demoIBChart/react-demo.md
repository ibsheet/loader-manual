---
id: react-demo
title: IBChart React Demo Sample
sidebar_label: React
---

## IBChart React Demo Packages

👋 `Javascript, React, React-Hooks, Redux Toolkit` 를 사용한 React 데모 샘플을 제공합니다.

### 💝메인 화면 흐름

순서: `App.jsx => Layout.jsx => Section.jsx => Navigation.jsx => Home.jsx => Content.jsx`

### 🚀참고

1. `main.jsx`는 `index.html`에 `App.jsx`를 렌더링 시키는 역할.
2. `App.jsx`는 메인 페이지입니다.
3. `Layout.jsx`에는 페이지의 레이아웃 컴포넌트가 있습니다.
4. `react-router-dom`을 통해 라우팅을 구현하여, 각 샘플 페이지를 URL을 통해 렌더링합니다.
5. `Home.jsx`는 메인 페이지에서 보여지는 컴포넌트를 가지고 있습니다.
6. `<IBChart />` 컴포넌트는 `Content` 컴포넌트에서 사용합니다.
7. `Redux Toolkit`을 사용하여 전역 객체를 상태 관리 합니다. (`store/chartSlice.js`에서 slice 정의)
8. `ChartCreate.jsx`에서 차트 생성 공통 모듈이 있습니다.
9. `ErrorBoundary.jsx`에서 전역 에러 처리를 합니다.
10. `hooks/useScrollToTop.js`에서 스크롤 관련 커스텀 훅을 제공합니다.

### ✨설치방법

1. `clone` 을 받는다.
2. 해당프로젝트는 `yarn` 을 기준으로 만들어졌습니다. `yarn` 을 설치해줍니다. `npm install --global yarn`
3. `yarn` 을 이용하여 다운받는다.
4. `sheet-loader` 버전을 확인해보고, 필요한 로더 버전으로 업데이트한다. 해당 샘플 기준으로는 ^1.3.4 버전이 설치됩니다.
5. `public/` 에 ibchart 라이브러리가 들어있는 assets 폴더를 넣어줍니다. (config/config.jsx 에서 파일위치는 변경할 수 있음.)
6. `yarn build` // build 파일 생성됨.
7. `yarn dev` // start 로컬

### 사용 시 유의 사항

`ibchart` 사용 시 <b>`HighCharts` 모듈은 구매 시 전달받은 제품으로만 사용</b>하셔야 합니다.

### 데모 패키지

* [React 데모 패키지 (github)](https://github.com/ibsheet/loader-chart-react-guide-samples)