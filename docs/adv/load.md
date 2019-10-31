---
id: load
title: Load
sidebar_label: 스크립트 불러오기
---

## 동작 방식

`load` 메소드는 기본적으로 `ibsheet` 라이브러리를 로드한다.

* `ibsheet`가 <strong>로드되어 있지 않은 상태</strong>이면, 인자에 상관없이 `ibsheet` 라이브러리 로드를 시도하고, 로드할 정보가 없다면 오류를 발생시킨다.
* 인자로 <strong>새로운</strong> `ibsheet`를 주었을 때, 기존 라이브러리를 언로드하고 새로운 라이브러리를 로드한다.
* 인자로 <strong>동일한 버전</strong>의 `ibsheet`를 주었을 때, 업데이트 후 라이브러리를 다시 로드한다.
* 이외의 경우, 이미 라이브러리가 로드되어있다면 아무일도 하지 않는다.

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
  locale: 'ko'
})

// update and reload ibsheet
loader.load({
  name: 'ibsheet',
  locale: 'en'
})
```
