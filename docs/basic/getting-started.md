---
id: getting-started
title: Getting Started
sidebar_label: 시작하기
---

<!-- import { HelpText } from '../shared' -->

## 소개

`IBSheetLoader`는 [IBSheet](https://www.ibsheet.com) 라이브러리를 웹페이지상에서 동적으로 로드하는데 사용하는 라이브러리입니다.

## 설치하기

### Using browser

```html
<script src="https://unpkg.com/@ibsheet/loader/dist/umd/ibsheet-loader.min.js"></script>
```

### Using npm

```bash
$ npm install @ibsheet/loader
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
```

or 

```js
const { IBSheetLoader: loader } = require('@ibsheet/loader')
```

---
### ESModule, TypeScript usage

```ts
import loader from '@ibsheet/loader'
```

or

```ts
import { IBSheetLoader as loader } from '@ibsheet/loader'
```
