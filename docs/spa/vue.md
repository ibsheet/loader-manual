---
id: vue
title: Vue Framework
sidebar_label: Vue.js
---

이 가이드는 [`@vue/cli`](https://cli.vuejs.org/)의 시작 패키지를 기준으로 작성되었습니다. 아래 가이드의 완성본은 [시작 패키지](/loader-manual/docs/etc/starter-packages) 문서에서 확인할 수 있습니다.

## 사전 설정

### CLI 설치

* <https://cli.vuejs.org/>

```bash
npm install -g @vue/cli @vue/cli-service
```

### 프로젝트 생성

```bash
vue create <project_dir>
```

### 패키지 설치

```bash
cd <project_dir>
yarn add @ibsheet/loader vue-router
yarn add -D node-sass sass-loader
# using npm
# npm i -S @ibsheet/loader vue-router
# npm i -D node-sass sass-loader
```

* 라우트 기능의 사용을 위해 `vue-router` 패키지를 추가로 설치합니다.
* `scss` 스타일 시트 언어를 사용하기 위해 `node-sass`, `sass-loader`를 설치합니다.

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
yarn serve
# using npm
# npm serve
```

## 메인 컴포넌트

### main.js

`src/main.js`

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// 라우터 사용 추가
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

### App.vue

메인 컴포넌트 혹은 모듈에서 사용할 라이브러리들을 설정(등록)합니다.

`src/App.vue`

#### template

```html
<div id="app">
  <p>@ibsheet/loader v{{loaderVersion}}</p>
  <div class="main-navs">
    <h3>Go to Pages:</h3>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/page1">Page1</router-link></li>
      <li><router-link to="/page2">Page2</router-link></li>
    </ul>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</div>
```

#### script

```js
import loader from '@ibsheet/loader'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/page1', name: 'page1', component: Page1 },
    { path: '/page2', name: 'page2', component: Page2 }
  ]
})

loader.config({
  registry: [{
    name: 'ibsheet',
    baseUrl: '/ibsheet'
  }]
})

export default {
  name: 'app',
  data() {
    return {
      loaderVersion: loader.version
    }
  },
  router
}
```

#### style

`lang="scss"`

```scss
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-navs {
  > h3 {
    margin: 40px 0 0;
  }
  > ul {
    list-style-type: none;
    padding: 0;
    > li {
      display: inline-block;
      margin: 0 10px;
      a > {
        color: #42b983;
      }
    }
  }
}
```

## 샘플 공유 데이터

각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다.

* [`src/shared/ibsheet-data.js`](../etc/spa-sample-data)

## 서브 컴포넌트

* `src/components/HelloWorld.vue`
* `src/components/Page1.vue`
* `src/components/page2.vue`

### HelloWorld

홈 화면에서는 `ibsheet` 라이브러리를 로드하지 않습니다. 만약 로드되어 있다면 컴포넌트 마운트시 `unload` 합니다.

`src/components/HelloWorld.vue`

#### template

```html
<div>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>{{ msg }}</h1>
</div>
```

#### script

```js
import loader from '@ibsheet/loader'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'IBSheetLoader for Vue!'
    }
  },
  mounted() {
    loader.unload()
  }
}
```

### Page1

컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/Page1.vue`

#### template

```html
<div>
  <p>page1 works!</p>
  <div id="sheetContainer"></div>
</div>
```

#### script

```js
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

let SHEET_ID = ''

export default {
  mounted() {
    const { data, options } = SheetSampleData[0]
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet) => {
      SHEET_ID = sheet.id
    });
  },
  beforeDestroy() {
    loader.removeSheet(SHEET_ID)
  }
}
```

### Page2

두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/components/Page2.vue`

#### template

```html
<div>
  <p>page2 works!</p>
  <div id="sheetContainer"></div>
</div>
```

#### script

```js
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

let SHEET_ID = ''

export default {
  mounted() {
    const { data, options } = SheetSampleData[1]
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet) => {
      SHEET_ID = sheet.id
    });
  },
  beforeDestroy() {
    loader.removeSheet(SHEET_ID)
  }
}
```

## 시작 패키지

위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다.

* [문서 바로가기](/loader-manual/docs/etc/starter-packages)
