---
id: getting-started
title: Getting Started
sidebar_label: 시작하기
---

<!-- import { HelpText } from '../shared' -->

## IBSheetLoader?

`IBSheetLoader`는 [`IBSheet`](https://www.ibsheet.com) [스크립트 파일들](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/intro/files)을 웹페이지상에서 동적으로 로드하는데 사용하는 라이브러리입니다.

## 설치하기

### Using browser

```html
<script src="https://unpkg.com/@ibsheet/loader/dist/umd/ibsheet-loader.min.js"></script>
```

### Using npm

```bash
$ npm install --save @ibsheet/loader
```

### Using yarn

```bash
$ yarn add @ibsheet/loader
```

## 인스턴스 가져오기

### Browser(UMD) usage

```js
var loader = window.IBSheetLoader
```

---
### CommonJS usage

```js
const loader = require('@ibsheet/loader')
// or
// const { IBSheetLoader: loader } = require('@ibsheet/loader')
```

---
### ESModule, TypeScript usage

```ts
import loader from '@ibsheet/loader'
// or
// import { IBSheetLoader as loader } from '@ibsheet/loader'
```


## 사용 예제

```js
import loader from '@ibsheet/loader'

loader.load({
  name: 'ibsheet',
  baseUrl: '<publicpath>/ibsheet'
}).once('loaded', function(evt) {
  // ibsheet: IBSheetStatic
  const ibsheet = this.getIBSheetStatic()
  
  // todo something
})
```

### 참고

* [load 메소드](/loader-manual/docs/adv/load)
* [loaded 이벤트](/loader-manual/docs/adv/events#loaded)
* [getIBSheetStatic 메소드](/loader-manual/docs/ibsheet/create-sheet#getibsheetstatic)
* [IBSheetStatic 클래스](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/static)