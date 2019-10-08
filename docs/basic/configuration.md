---
id: configuration
title: Configuration
sidebar_label: 설정하기
---

## Interfaces

### LoaderConfigOptions

* `registry`: [`RegistryItemData[]`](./registry#registryitem) - 라이브러리 등록 리스트
* `ready`: `(evt) => void` - 설정이 완료됬을 때의 이벤트 콜백
* `retry`: [`RetryOptions`](#retryoptions) - 재시도 옵션([`load`](./load)시 사용)
* `debug`: `boolean` 디버깅 로그 활성화 (기본값: `false`)

### RetryOptions

`load`시 스크립트 추가 후 검증단계에서 사용

* `intervalTime`: `number` - 재시도 대기시간, ms (기본값: `200`)
* `maxCount`: `number` - 최대 재시도 횟수 (기본값: `10`)


## 사용 예제

```js
// get global loader instance
import loader from '@ibsheet/lodaer'

// define loader config
var options = {
  retry {
    intervalTime: 200,
    maxCount: 10
  },
  registry: [
    // items you need
  ],
  ready: function (evt) {
    console.log('IBSheetLoader configuration complete.')
  }
}

// setup loader configuration
loader.config(options)
```

