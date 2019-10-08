---
id: registry
title: Registry
sidebar_label: 스크립트 등록하기
---

레지스트리에 항목(라이브러리)을 추가하는 방법은 세 가지가 있습니다.

* 이전단계의 [`config`](./configuration#options) 옵션에 추가
* [`registry.add`](#add) 기능 사용
* [`load`](./load) 기능 사용

## Interfaces

### RegistryItemData

라이브러리 등록 데이터

* `name`: `string` - 식별 이름(Must be unique)
* `version`: `string`
* `baseUrl`: `string` - URL의 기본 경로(프로토콜 또는 절대경로를 포함하지 않은 경우)
* `urls`: `string[]|object[]` - 가져올 URL 리스트
  * `url`: `string`
  * `target`: `head|body` - 추가시킬 부모 HTMLElement 이름
  * `type`: `css|js` - URL에 파일의 확장자가 포함되지 않은 경우 명시
* `dependentUrls` - 제거시킬 URL 리스트([`unload`](./unload)시 사용)
* `validate`: `() => boolean` - 스크립트 추가 후 검증 로직

## Methods

### add

* `oData`: [`RegistryItemData`](#registryitem)

```js
loader.registry.add(oData)
```

### addAll

* `aData`: [`RegistryItemData[]`](#registryitem)

```js
loader.registry.addAll(aData)
```

### remove




## 사용 예제

```js
// define ibsheet for loader registry
const ibsheetLib = {
  name: 'ibsheet',
  // <publicpath>: your public directory
  baseUrl: '<publicpath>/ibsheet',
  urls: [
    'ibleaders.js',
    'css/default/main.css',
    'locale/ko.js',
    'ibsheet.js'
  ]
}
```