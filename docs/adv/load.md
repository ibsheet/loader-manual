---
id: load
title: Load
sidebar_label: 스크립트 불러오기
---

## 동작 방식

`load` 메소드는 [`config`](/loader-manual/docs/adv/config)의 autoload(기본 값 true) 인자 값에 따라 `ibsheet` 라이브러리를 자동으로 로드한다.

* `ibsheet`가 <strong>로드되어 있지 않은 상태</strong>이면, 인자에 상관없이 `ibsheet` 라이브러리 로드를 시도하고, 로드할 정보가 없다면 오류를 발생시킨다.
* 인자로 <strong>새로운</strong> `ibsheet`를 주었을 때, 기존 라이브러리를 언로드하고 새로운 라이브러리를 로드한다.
* 인자로 <strong>동일한 버전</strong>의 `ibsheet`를 주었을 때, 업데이트 후 라이브러리를 다시 로드한다.
* 이외의 경우, 이미 라이브러리가 로드되어 있다면 아무일도 하지 않는다.

> `ibsheet` 라이브러리 자동 로드 기능을 사용하지 않으려면 두 번째 인자로 `false`를 입력하고 호출한다.

### 허용 파라메터 유형

* `undefined`
* `string`: `alias` or `URL`
* `object`: [`RegistryItemData`](/loader-manual/docs/adv/registry#registryitemdata)
* `array`: `(alias|URL|RegistryItemData)[]`

### 다이어그램

* [로드 플로우](../etc/load-flow)

## 사용 예제

### 기본

```js
// get global loader instance
import loader from '@ibsheet/loader'

// define ibsheet for loader registry
const ibsheetLibrary = {
  name: 'ibsheet',
  baseUrl: '<publicpath>/ibsheet'
}

// load ibsheet
loader.load(ibsheetLibrary)
```

### 사전 설정 사용

```js
// get global loader instance
import loader from '@ibsheet/loader'

// define ibsheet libs for loader registry
const ibsheetLibrary1 = {
  name: 'ibsheet',
  baseUrl: '<publicpath>/ibsheet/v1'
  version: 1,
  // ...
}
const ibsheetLibrary2 = {
  name: 'ibsheet',
  baseUrl: '<publicpath>/ibsheet/v2'
  version: 2,
  // ...
}

// setup loader configuration
loader.config({
  registry: [
    ibsheetLibrary1,
    ibsheetLibrary2
  ]
})

// load ibsheet version 2
loader.load('ibsheet@2')
```

### 업데이트 & 리로드
```js
// get global loader instance
import loader from '@ibsheet/loader'

// load ibsheet
loader.load({
  name: 'ibsheet',
  baseUrl: '<publicpath>/ibsheet',
  locales: ['ko']
})

// update and reload ibsheet
loader.load({
  name: 'ibsheet',
  locales: ['en']
})
```

### Multiple Load

여러 개의 라이브러리 한 번에 로드하기

```js
// get global loader instance
import loader from '@ibsheet/loader'

// define ibsheet libs for loader registry
const myLibraries = [
  /**
   * sweetalert2
   * https://sweetalert2.github.io/
   */
  {
    name: 'swal2',
    url: 'https://cdn.jsdelivr.net/npm/sweetalert2@8',
    // 위와 같이 URL에 스크립트의 유형(파일확장자)이 포함되지 않은 경우
    // type 속성을 통해 지정해주어야 한다.
    type: 'js'
  },
  /**
   * pretty checkbox
   * https://lokesh-coder.github.io/pretty-checkbox/
   */
  {
    name: 'pretty-checkbox',
    url: 'https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css'
  },
  /**
   * Font Awesome
   * https://fontawesome.com/
   */
  {
    name: 'font-awesome',
    url: 'https://kit.fontawesome.com/21c0a510fd.js',
    // FontAwesome5의 라이브러리 키트는 자체적으로 스크립트들을 동적으로 로드하므로
    // 아래와 같이 로드되는 스크립트들을 명시해주어야 unload시 함께 제거된다.
    dependentUrls: [
      'https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css',
      'https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css',
      'https://kit-free.fontawesome.com/releases/latest/css/free.min.css'
    ]
  }
  // ... your need libraries
]

// setup loader configuration
loader
  // 레지스트리 라이브러리 등록
  .config({
    registry: myLibraries
  })
  // 라이브러리 로드
  // 1. arg1: Array<string> - 불러올 라이브러리의 이름을 배열로 전달
  // 2. arg2: boolean - ibsheet 자동로드 기능을 사용안함
  .load([
    'swal2',
    'pretty-checkbox',
    'font-awesome'
  ], false)
```
