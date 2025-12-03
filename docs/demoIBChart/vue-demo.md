---
id: vue-demo
title: IBChart Vue Demo Sample
sidebar_label: Vue
---

## IBChart Vue Demo Packages

👋 `Javascript, Vue3, Vuex, Vue-router4, Quasar` 를 사용한 Vue 데모 샘플을 제공합니다.

### 💝메인 화면 흐름

순서: `main.js => App.vue => Layout.vue => Home.vue => Chart.vue`

### 🚀참고

1. `main.js` 는 `index.html` 에 `App.vue` 를 렌더링 시키는 역할.
2. `App.vue` 는 메인 페이지입니다.
3. `Layout.vue` 에는 페이지의 레이아웃 컴포넌트가 있습니다.
4. `Router` 를 통해 라우팅을 구현합니다.
5. `Home.vue` 는 메인 페이지에서 보여지는 컴포넌트를 가지고 있습니다.
6. `Chart.vue` 에서 `Vuex` 를 사용하여 전역 객체를 상태 관리 합니다.
7. `chart.js (src/store/modules/chart.js)` 에서 차트 생성 공통 모듈이 있습니다.
8. `common.js (src/store/modules/common.js)` 에서 페이지 상태를 관리합니다.
9. `samples` 폴더에 각 샘플에서 사용하는 `options.js` (차트 `Config`와 `data`)를 제공합니다.

### ✨설치방법

1. `clone` 을 받는다.
2. 해당프로젝트는 `yarn` 을 기준으로 만들어졌습니다. `yarn` 을 설치해줍니다. `npm install --global yarn`
3. `yarn` 을 이용하여 다운받는다.
4. `sheet-loader` 버전을 확인해보고, 필요한 로더 버전으로 업데이트한다. 해당 샘플 기준으로는 ^1.3.4 버전이 설치됩니다.
5. `public/` 에 ibchart 라이브러리가 들어있는 assets 폴더를 넣어줍니다. (App.vue 에서 파일위치는 변경할 수 있음.)
6. `yarn build` // build 파일 생성됨.
7. `yarn dev` // start 로컬

### 데모 패키지

* [Vue 데모 패키지 (github)](https://github.com/ibsheet/loader-chart-vue-guide-samples)