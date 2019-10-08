---
id: configuration
title: Configuration
sidebar_label: 설정하기
---


## Options

* `registry`: [`RegistryItem[]`](#registryitem) - 라이브러리 등록 리스트
* `ready`: `Function`
* `retry`: [`RetryOptions`](#retryoptions) - 재시도 옵션(`load`시 사용)
* `debug`: `boolean` 디버깅 로그 활성화

### RegistryItem

라이브러리 등록 정보

* `name`: `string` - 식별 이름(Must be unique)
* `version`: `string`
* `baseUrl`: `string` - URL의 기본 경로(프로토콜 또는 절대경로를 포함하지 않은 경우)
* `urls`: `string[]|object[]` - 가져올 URL 리스트
  * `url`: `string`
  * `target`: `head|body` - 추가시킬 부모 HTMLElement 이름
* `dependentUrls` - 제거시킬 URL 리스트(`unload`시 사용)
* `validate`: `Function` -
* `load`: `Function` -
* `unload`: `Function` -

### RetryOptions

`load`시 스크립트를 임포트하고 검증단계에서 사용

* `intervalTime`: `number`
* `maxCount`: `number`


## 사용 예제

```js
// get global loader instance
var loader = require('@ibsheet/lodaer')

// set loader options
var options = {
  retry
  registry: [
    // set ibsheet library
    {
      name: 'ibsheet',
      // version: 8,
      baseUrl: '<publicpath>/ibsheet',
      urls: [
        'ibleaders.js',
        'css/default/main.css',
        'locale/ko.js',
        'ibsheet.js'
      ]
    }
  ]
}

// set configuration
loader.config(options)
```

