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

* [API 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_on_eventname_listener)

### once

이벤트를 등록한다. 이벤트 콜백을 한번 실행 후 자동으로 제거.

```ts
interface LoaderEventInterface {
  once: (name: string | symbol, handler: evt => void): this
}
```

* [API 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_once_eventname_listener)

### removeListener

이벤트를 제거한다.

```ts
interface LoaderEventInterface {
  removeListener: (name: string | symbol, handler: evt => void): this
}
```

* [API 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_removelistener_eventname_listener)
* alias: [`off`](https://nodejs.org/api/events.html#events_emitter_off_eventname_listener)

### removeAllListeners

해당 이름(들)의 모든 이벤트 콜백을 제거한다.

```ts
interface LoaderEventInterface {
  removeAllListeners: (name: string[]): this
}
```

* [API 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_removealllisteners_eventname)

## 이벤트 이름

이벤트 이름은 아래의 문서를 참고하세요.

* [`LoaderEventName`](https://ibsheet.github.io/loader/enums/loadereventname.html) - 로더 이벤트 이름
* [`RegItemEventName`](https://ibsheet.github.io/loader/enums/regitemeventname.html) - 로더 레지스트리 아이템 이벤트 이름

## 사용 예제

```js
loader.once('loaded', function(evt) {
  // evt.target 로드된 레지스트리 아이템
  const { target } = evt.target
  console.log('loaded item:', target.alias)
})
```
