---
id: registry
title: Registry
sidebar_label: 스크립트 등록하기
---

import { Highlight, Badge } from '../shared'

## Usage

레지스트리에 아이템(라이브러리)을 추가하는 방법은 세 가지가 있습니다.

* 이전단계의 [`config`](./configuration#loaderconfigoptions) 옵션에 추가
* [`registry.add`](#add) 기능을 사용
* [`load`](./load) 기능을 사용

> <Highlight color="#555">이하 문서에서 "regsitry"에 등록할 또는 등록된 라이브러리(스크립트) 객체는 "<b>아이템</b>"이라고 일컫습니다.</Highlight>

## Interfaces

```ts
abstract class IBSheetLoader extends EventEmitter {
  registry: LoaderRegistry
  // ...
}
```

### LoaderRegistry

IBSheetLoader registry class

```ts
abstract class LoaderRegistry extends EventEmitter {
  private _list: RegistryItem[]
  // ...
}
```

* class extends [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter)

### RegistryItem

registry에 등록된 객체(아이템)

```ts
abstract class RegistryItem extends EventEmitter {
  constructor(data: RegistryItemData) => this
  get name(): string
  get version(): string
  get alias(): string
  get loaded(): string
  // ...
}
```

* class extends [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter)
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
  * `url`: `string`
  * `target`: `'head'|'body'` - 추가시킬 부모 HTML 태그 이름(`head` 또는 `body`)
  * `type`: `'css'|'js'` - 스크립트 타입, URL에 파일의 확장자가 포함되지 않은 경우 명시
* `dependentUrls` - 함께 제거시킬 URL 목록([`unload`](./unload)시 사용)
* `validate`: `() => boolean` - 스크립트 추가 후 검증 로직

## Functions

### add
<Badge style="success">since 0.0.9</Badge>

아이템을 등록

```ts
interface LoaderRegistryFunc {
  add(data: RegistryItemData): RegistryItem | undefined  
}
// usage
loader.registry.add(data)
```

### addAll

아이템들을 순차적으로 등록

```ts
interface LoaderRegistryFunc {
  addAll(data: RegistryItemData[]): RegistryItem[]
}
// usage
loader.registry.addAll(data)
```

### get

일치하는 `alias`의 아이템을 찾아서 반환, 없다면  `null`을 반환

```ts
interface LoaderRegistryFunc {
  get(alias: string): RegistryItem | null
}
// usage
loader.registry.get(alias)
```

### getAll

일치하는 `name` 또는 `alias`의 아이템을 찾아서 목록을 반환

```ts
interface LoaderRegistryFunc {
  getAll(alias: string): RegistryItem[]
}
// usage
loader.registry.getAll(alias)
```

### info

일치하는 `alias`의 아이템을 찾아서 각 객체의 정보들을 `JSON` 문자열로 반환, 없다면 `undefined`를 반환

```ts
interface LoaderRegistryFunc {
  info(alias: string): string | undefined
}
// usage
loader.registry.info(alias)
```

### list

등록된 아이템의 `alias` 목록을 반환

```js
loader.registry.list()
```

### exists

일치하는 `alias`의 아이템의 존재 여부를 반환

```js
loader.registry.exists(alias)
```

### remove

* `alias`: `string` 아이템 별칭

```js
loader.registry.exists(alias)
```


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