---
id: config
title: Configuration
sidebar_label: 설정하기
---

## 환경설정

[`load`](/loader-manual/docs/adv/load)기능을 사용하기 전에 `config`기능을 통해 기본 설정을 변경하거나 추가 할 수 있습니다.

## 인터페이스

```ts
interface IBSheetLoader extends EventEmitter {
  config: (options?: LoaderConfigOptions) => this
  // ...
}
```

### LoaderConfigOptions

```ts
interface LoaderConfigOptions {
  globals?: {
    ibsheet?: string
  },
  registry?: RegistryItemData | RegistryItemData[]
  retry?: RetryOptions
  ready?: evt => void
  debug?: boolean
  autoload?: boolean
}
```

* `globals`: 라이브러리 전역변수 이름설정 옵션 (기본값: `{ ibsheet: 'IBSheet' }`)
* `registry`: 라이브러리 등록 데이터 리스트
* `ready`: 설정이 완료되었을 때의 이벤트 콜백
* `retry`: 재시도 옵션([`load`](/loader-manual/docs/adv/load)시 사용 (기본값: `{ intervalTime: 200`, `maxCount: 50 }`)
* `debug`: 디버그용 로그 활성화 (기본값: `false`)
* `autoload`: ibsheet 라이브러리 자동 로드 여부 (기본값: `true`)

### RetryOptions

[`load`](/loader-manual/docs/adv/load)시 스크립트를 `DOM`에 추가시킨 후 검증단계에서 각 설정값을 사용

```ts
interface RetryOptions {
  intervalTime?: number
  maxCount?: number
}
```

* `intervalTime`: `number` - 재시도 대기시간, ms (기본값: `200`)
* `maxCount`: `number` - 최대 재시도 횟수 (기본값: `50`)

## Config 사용 예제

```js
// loader 인스턴스 가져오기
import loader from '@ibsheet/loader'
// 옵션 정의하기
const loaderOptions = {
  globals: {
    ibsheet: 'IBSheet'  // default
  },
  registry: [
    // items you need
    {
      name: 'ibsheet',
      baseUrl: '<publicpath>/ibsheet'
      ...
    }
  ],
  retry: {
    intervalTime: 200,  // default
    maxCount: 50        // default
  },
  ready: evt => {
    console.log('IBSheetLoader configuration complete.')
  },
  debug: false          // default
}

// 옵션 적용하기
loader.config(loaderOptions)
```

* `retry`: [`RetryOptions`](#retryoptions)
* `registry`: [`RegistryItemData`](/loader-manual/docs/adv/registry#registryitemdata)|[`RegistryItemData[]`](/loader-manual/docs/adv/registry#registryitemdata)
