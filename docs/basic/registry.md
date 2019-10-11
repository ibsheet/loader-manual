---
id: registry
title: Registry
sidebar_label: 스크립트 등록하기
---

import { Highlight, Badge, BadgeGroup } from '../shared'

## LoaderRegistry?

`LoaderRegistry`는 [`load`]('./load') 기능을 보다 수월하게 사용하기 위해 미리 사용할 라이브러리들을 등록해 놓을 수 있는 저장소입니다.

이 레지스트리에 아이템(라이브러리)을 추가하는 방법은 세 가지가 있습니다.

* 이전단계의 [`config`](./configuration#loaderconfigoptions) 옵션에 추가
* [`registry.add`](#add) 기능을 사용
* [`load`](./load) 기능을 사용

> <Highlight color="#555">이하 문서에서 "regsitry"에 추가할 또는 추가된 라이브러리(스크립트) 객체는 "<b>아이템</b>"이라고 일컫습니다.</Highlight>

## 인터페이스

### CustomEventEmitter

```ts
abstract class CustomEventEmitter extends EventEmitter {
  // override
  emit(event: string | symbol, ...args: any[]): boolean
  // custom function
  bind(events: string | symbol, listener: (...args: any[]) => void): this
}
```

* class extends [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter)
* `bind`: 공백으로 구분된 이벤트 유형들에 하나의 이벤트 콜백을 바인딩
  ```js
  // load, loaded 이벤트 바인딩
  loader.bind('load loaded', eventHandler)
  ```

### IBSheetLoader

```ts
abstract class IBSheetLoader extends CustomEventEmitter {
  registry: LoaderRegistry
  // ...
}
```

* class extends [`CustomEventEmitter`](#customeventemitter)

### LoaderRegistry

IBSheetLoader registry class

```ts
abstract class LoaderRegistry extends CustomEventEmitter {
  private _list: RegistryItem[]
  // ...
}
```

* class extends [`CustomEventEmitter`](#customeventemitter)

### RegistryItem

registry의 아이템 객체

```ts
abstract class RegistryItem extends CustomEventEmitter {
  constructor(data: RegistryItemData) => this
  name: string
  version: string
  readonly alias: string
  readonly loaded: string
  // ...
}
```

* class extends [`CustomEventEmitter`](#customeventemitter)
* `name`: `string` - 아이템 식별자(`name`), 유일하지만 여러개의 버전을 가질 수 있음
* `version`: `string` - 아이템의 버전
* `alias`: `string` - 식별자(`name`)와 버전`version`의 조합 문자열(`name@version`), 버전이 없다면 식별자와 동일
* `loaded`: `boolean` - 아이템이 로드되었는지 여부를 반환

### RegistryItemData

라이브러리 등록 데이터

* `name`: `string` - 식별자(Must be unique)
* `version`: `string` - 버전
* `baseUrl`: `string` - URL의 기본 경로(프로토콜 또는 절대경로를 포함하지 않은 경우)
* `urls`: `string[]|object[]` - URL 목록
  * `url`: `string` - URL 문자열
  * `target`: `'head'|'body'` - 추가시킬 부모 HTML 태그 이름(`head` 또는 `body`)
  * `type`: `'css'|'js'` - 스크립트 타입, URL에 파일의 확장자가 포함되지 않은 경우 명시
* `dependentUrls` - 함께 제거시킬 URL 목록([`unload`](./unload)시 사용)
* `validate`: `() => boolean` - 스크립트 추가 후 검증 로직

## 주요 기능

### add
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

아이템을 추가

```ts
interface LoaderRegistryFunc {
  add(
    data: RegistryItemData,
    overwrite?: boolean = false
  ): RegistryItem | undefined  
}
// usage
loader.registry.add(data)
```

* `data`: 등록 데이터
* `overwrite`: 이미 동일한 `alias`의 아이템이 존재할 때 덮어쓰기 (기본값: `false`)

### addAll
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

아이템들을 순차적으로 추가
```ts
interface LoaderRegistryFunc {
  addAll(
    data: RegistryItemData[],
    overwrite?: boolean = false
  ): RegistryItem[]
}
// usage
loader.registry.addAll(data)
```

* `data`: 등록 데이터 목록
* `overwrite`: 이미 동일한 `alias`의 아이템이 존재할 때 덮어쓰기 (기본값: `false`)

### get
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

일치하는 `alias`의 아이템을 찾아서 반환, 없다면  `null`을 반환

```ts
interface LoaderRegistryFunc {
  get(alias: string): RegistryItem | null
}
// usage
loader.registry.get(alias)
```

### getAll
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

일치하는 `name` 또는 `alias`의 아이템을 찾아서 목록을 반환

```ts
interface LoaderRegistryFunc {
  getAll(alias: string): RegistryItem[]
}
// usage
loader.registry.getAll(alias)
```

### info
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

일치하는 `name` 또는 `alias`의 아이템을 찾아서 각 객체의 정보들을 `JSON` 문자열로 반환, 없다면 `undefined`를 반환

```ts
interface LoaderRegistryFunc {
  info(alias: string): string | undefined
}
// usage
loader.registry.info(alias)
```

### list
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

추가된 아이템의 `alias` 목록을 반환

```ts
interface LoaderRegistryFunc {
  list(): string[]
}
// usage
loader.registry.list()
```

### exists
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

일치하는 `name` 또는 `alias`의 아이템 존재 여부를 반환

```ts
interface LoaderRegistryFunc {
  exists(alias: string): boolean
}
// usage
loader.registry.exists(alias)
```

### remove
<BadgeGroup><Badge class="since">1.0.0</Badge></BadgeGroup>

일치하는 `name` 또는 `alias`의 아이템들을 제거하고 그 객체를 반환, 없다면 `undefined`를 반환

```ts
interface LoaderRegistryFunc {
  remove(alias: string): RegistryItem | RegistryItem[] | undefined
}
// usage
loader.registry.remove(alias)
```

## 사용 예제

### 데이터 정의하기

```js
// define ibsheet for loader registry
const ibsheetLibrary = {
  name: 'ibsheet',
  // <publicpath>: your public directory
  baseUrl: '<publicpath>/ibsheet',
  urls: [
    'css/default/main.css',
    'ibleaders.js',
    'locale/ko.js',
    'ibsheet.js'
  ]
}
```

### 등록하기
```js
// get global loader instance
import loader from '@ibsheet/loader'

// define registry list
const registry = [
  ibsheetLibrary
]

// method 1: setup registry with loader configuration
loader.config({ registry })

// method 2: use add or addAll
loader.registry.add(ibsheetLibrary)
loader.registry.addAll(registry)
```

### 등록 아이템 확인하기

``` js
// exists registry item
console.log('ibsheet exists:', loader.registry.exists('ibsheet'))

// get registry item
const item = loader.registry.get('ibsheet')
console.log('ibsheet item:', item)
console.log('ibsheet item.loaded:', item.loaded)

// get registry item info
console.log('ibsheet info:', loader.registry.info('ibsheet'))

// get registry list
console.log('ibsheet aliases', loader.registry.list())
console.log('loader list', laoder.list())
```
