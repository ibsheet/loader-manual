---
id: getting-started
title: Getting Started
sidebar_label: 시작하기
---

<!-- import { HelpText } from '../shared' -->

## IBSheetLoader?

`IBSheetLoader`는 [`ibsheet`](https://www.ibsheet.com)제품의 [스크립트 파일들](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/intro/files)을 웹페이지(HTML)에 동적으로 추가하기 위해 사용하는 라이브러리입니다.

## 설치하기

### Using browser

```html
<script src="https://unpkg.com/@ibsheet/loader/dist/umd/ibsheet-loader.min.js"></script>
```

### Using node.js

```bash
# using npm
$ npm install --save @ibsheet/loader

# using yarn (https://yarnpkg.com/)
$ yarn add @ibsheet/loader
```

## 인스턴스 가져오기

### Browser(UMD) usage

```js
var loader = window.IBSheetLoader
```

---
### Node.js(CommonJS) usage

```js
const loader = require('@ibsheet/loader')
// or
// const { IBSheetLoader: loader } = require('@ibsheet/loader')
```

---
### ES6(ESModule), TypeScript usage

```ts
import loader from '@ibsheet/loader'
// or
// import { IBSheetLoader as loader } from '@ibsheet/loader'
```


## 사용 예제

```js
import loader from '@ibsheet/loader'

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: '<publicpath>/ibsheet'
}

loader.config({
  registry: [ibsheetLib]
})

function testLoad() {
  // add 'loaded' event listener
  loader.once('loaded', (evt) => {
    // ibsheet: IBSheetStatic
    const ibsheet = this.getIBSheetStatic()
    // todo something
  })

  // load ibsheet
  loader.load() // or loader.load('ibsheet')
}
```

위 예제에 대한 자세한 가이드는 아래 목록을 참고하세요.

* [`load` 메소드](/loader-manual/docs/adv/load)
* [`loaded` 이벤트](/loader-manual/docs/adv/events#loaded)
* [`getIBSheetStatic` 메소드](/loader-manual/docs/ibsheet/create-sheet#getibsheetstatic)
* [`IBSheetStatic` 객체](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/static)
