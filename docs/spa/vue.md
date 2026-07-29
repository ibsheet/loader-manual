---
id: vue
title: Vue Framework
sidebar_label: Vue.js
---

이 가이드는 [Vite](https://vitejs.dev/)의 시작 패키지를 기준으로 작성되었습니다. <br/>
아래 가이드의 완성본은 [시작 패키지](/loader-manual/docs/etc/starter-packages) 문서에서 확인할 수 있습니다. <br/>
vue3, vuex 를 적용한 가이드는 [데모 패키지](/loader-manual/docs/demo/vue-demo)에서 확인할 수 있습니다. <br/>

**참고: 이 가이드는 JavaScript 기준으로 작성되었습니다.** TypeScript로 프로젝트를 구성하는 경우 `npm create vite@latest <project_dir> -- --template vue-ts`로 생성하고, `<script setup>`에 `lang="ts"` 속성을 추가해주세요.<br/>

**주의사항: 시트의 객체를 data 속성에 정의하면 안됩니다. 시트 객체를 정의시 Observer 가 추가되어 call stack 에러가 발생할 수 있습니다.** <br/>
**마찬가지로 시트 객체에 강제로 Observer 를 추가하는 경우에도 call stack 에러가 발생할 수 있음으로 주의해주시기 바랍니다.**

## 사전 설정

### 프로젝트 생성

* <https://vitejs.dev/guide/>

```bash
npm create vite@latest <project_dir> -- --template vue
```

### 패키지 설치

```bash
cd <project_dir>
yarn add @ibsheet/loader vue-router
# using npm
# npm i -S @ibsheet/loader vue-router
```

* 라우트 기능의 사용을 위해 `vue-router` 패키지를 추가로 설치합니다.
* vue3에서 vue-router는 4.x버전을 설치해야합니다.

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

### main.js

`src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
```

### router/index.js

`src/router/index.js`

```js
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/page1', component: Page1},
    {path: '/page2', component: Page2}
  ]
})

export default router
```

### App.vue

메인 컴포넌트 혹은 모듈에서 사용할 라이브러리들을 설정(등록)합니다.

`src/App.vue`

```vue
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<script>
import loader from '@ibsheet/loader';

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

loader.load();

const loaderVersion = loader.version;
</script>

<template>
  <header>
    <p>@ibsheet/loader v {{ loaderVersion }}</p>
    <div class="header-inner">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/page1">Page1</RouterLink>
          <RouterLink to="/page2">Page2</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>
```

## 샘플 공유 데이터

각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다.

* [`src/assets/shared/ibsheet-data.js`](../etc/start-package)

## 서브 컴포넌트

* `src/components/Home.vue`
* `src/components/Page1.vue`
* `src/components/Page2.vue`

### Home

홈 화면에서는 `ibsheet` 라이브러리를 로드하지 않습니다.

`src/components/Home.vue`

```vue
<script setup>
const title = "IBSheetLoader for Vue";
</script>
<template>
  <div class="hello"
    :style="{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }"
  >
    <h1>
      {{ title }}!
    </h1>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="150" height="150" />
  </div>
</template>
```

### Page1

컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/Page1.vue`

```vue
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../assets/shared/ibsheet-data'

let sheetId = ''
const sheetEl = 'sheetContainer'

onMounted(() => {
  const { data, options } = SheetSampleData[0]

  loader.createSheet({
    el: sheetEl,
    options,
    data
  }).then((sheet) => {
    sheetId = sheet.id
    console.log('created sheet', sheet.id)
  })
})

onBeforeUnmount(() => {
  loader.removeSheet(sheetId)
})
</script>

<template>
  <div>
    <p>SearchMode: 2, 기본 페이지입니다.</p>
    <div id="sheetContainer"></div>
  </div>
</template>
```

### Page2

두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/Page2.vue`

```vue
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../assets/shared/ibsheet-data';

let sheetId = '';
const sheetEl = 'sheetContainer';

onMounted(() => {
  const { data, options } = SheetSampleData[1];

  loader.createSheet({
    el: sheetEl,
    options,
    data
  }).then((sheet) => {
    // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
    sheetId = sheet.id;
    console.log('created sheet', sheet.id);
  })
})

onBeforeUnmount(() => {
  loader.removeSheet(sheetId)
})
</script>

<template>
  <div>
    <p>SearchMode: 0, 기본 페이지입니다.</p>
    <div id="sheetContainer"></div>
  </div>
</template>
```

## Package.json

```
  "dependencies": {
    "@ibsheet/loader": "^1.3.4",
    "vue": "^3.3.0",
    "vue-router": "^4.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0"
  }
```

## 시작 패키지

위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다.

* [문서 바로가기](/loader-manual/docs/etc/starter-packages)
