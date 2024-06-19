---
id: vue-demo
title: Vue Demo Sample
sidebar_label: Vue
---

## Vue Demo Packages

👋 `Javascript, Vue, Vuex, Vue-router, Quasar` 를 사용한 Vue 데모 샘플을 제공합니다.

### 💝메인 화면 흐름

순서: `main.js => App.vue => Layout.vue => Home.vue => Sheet.vue`

### 🚀참고

1. `main.js` 는 `index.html` 에 `App.vue` 를 렌더링 시키는 역할.
2. `App.vue` 는 메인 페이지입니다.
3. `Layout.vue` 에는 페이지의 레이아웃 컴포넌트가 있습니다.
4. `Router, Watch` 를 통해 라우팅을 구현하여, 각 샘플 페이지를 URL을 통해 렌더링합니다.
5. `Home.vue` 는 메인 페이지에서 보여지는 컴포넌트를 가지고 있습니다.
6. `Sheet.vue` 에서 `Vuex` 를 사용하여 전역 객체를 상태 관리 합니다. (여러개의 시트를 만들 수 있어, `option` 을 배열 형태로 담습니다.)
7. `sheet.js (src/store/modules/sheet.js)` 에서 시트 생성 공통 모듈이 있습니다.
8. `funtion.js (src/store/modules/function.js)` 에서 샘플별 시트 API를 호출합니다.
9. `samples` 폴더에 각 샘플에서 사용하는 `Config`와 `data`를 제공합니다.

### 데모 패키지

* [Vue 데모 패키지 (github)](https://github.com/ibsheet/loader-vue-guide-samples)
<!-- * [Vue 데모 패키지 (codesandbox)](https://codesandbox.io/s/github/ibsheet/loader-vue-guide-samples/tree/url_path?file=/src/main.js) -->
