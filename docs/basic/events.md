---
id: events
title: Events
sidebar_label: 이벤트
---

## 동작 방식

기본적으로 node.js의 [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) 클래스의 동작 방식과 동일하다.


## 주요 인터페이스

### on

이벤트를 등록한다. 제거하기 전까지 지속적으로 동작.

```ts
interface LoaderEventInterface {
  on: (name: string | symbol, handler: evt => void): this
}
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_on_eventname_listener)

### once

이벤트를 등록한다. 이벤트 콜백을 한번 실행 후 자동으로 제거.

```ts
interface LoaderEventInterface {
  once: (name: string | symbol, handler: evt => void): this
}
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_once_eventname_listener)

### removeListener

이벤트를 제거한다.

```ts
interface LoaderEventInterface {
  removeListener: (name: string | symbol, handler: evt => void): this
}
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_removelistener_eventname_listener)
* alias: [`off`](https://nodejs.org/api/events.html#events_emitter_off_eventname_listener)

### removeAllListeners

해당 이름(들)의 모든 이벤트 콜백을 제거한다.

```ts
interface LoaderEventInterface {
  removeAllListeners: (name: string[]): this
}
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_removealllisteners_eventname)

## 이벤트

이벤트 이름은 아래의 문서를 참고하세요.

* [`LoaderEventName`](https://ibsheet.github.io/loader/enums/loadereventname.html) - 로더 이벤트 이름
* [`RegItemEventName`](https://ibsheet.github.io/loader/enums/regitemeventname.html) - 로더 레지스트리 아이템 이벤트 이름

공통적으로 모든 이벤트 객체는 `type` 이라는 속성을 갖습니다.

* `type`: 이벤트 이름

### load

라이브러리를 로드할 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/basic/registry#registryitem)

### loaded

라이브러리가 로드되었을 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/basic/registry#registryitem)

#### Usage

```js
loader.once('loaded', function(evt) {
  // evt.target 로드된 레지스트리 아이템
  const { target } = evt.target
  console.log('loaded item:', target.alias)
})
```

### load-complete

모든 요청 라이브러리가 로드되었을 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetLoader`
* `event.data`: [`RegistryItem[]`](/loader-manual/docs/basic/registry#registryitem)

### load-failed

라이브러리 로드에 실패했을 때, 발생

* `this`: `IBSheetLoader`
* `event.error`: `Error`

### load-reject

라이브러리 로드시, `DOM`에 `HTMLElement`를 생성할 때 오류 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/basic/registry#registryitem)
* `event.error`: `Error`

### unload

라이브러리를 언로드할 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/basic/registry#registryitem)

### unloaded

라이브러리가 언로드되었을 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/basic/registry#registryitem)

### unload-complete

모든 요청 라이브러리가 언로드되었을 때, 발생

* `this`: `IBSheetLoader`
* `event.data`: [`RegistryItem[]`](/loader-manual/docs/basic/registry#registryitem)

### unload-failed

라이브러리 제거에 실패했을 때, 발생

* `this`: `IBSheetLoader`
* `event.data`: [`RegistryItem[]`](/loader-manual/docs/basic/registry#registryitem)

### unload-reject

라이브러리 언로드시, `DOM`에 `HTMLElement`를 제거할 때 오류 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/basic/registry#registryitem)
* `event.error`: `Error`


### create-sheet

`IBSheet`를 생성할 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.data`: `IBSheetCreateOptions`

### create-sheet-failed

`IBSheet` 생성에 실패했을 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.data`: `IBSheetCreateOptions`
* `event.error`: `Error`

### created-sheet

`IBSheet`를 성공적으로 생성했을 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetInstance`

### remove-sheet

`IBSheet`를 제거 할 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetInstance`

### remove-sheet-failed

`IBSheet`제거에 실패했을 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.error`: `Error`

### removed-sheet

`IBSheet`를 성공적으로 제거했을 때, 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.data.id`: 요청 아이디
