---
id: events
title: Events
sidebar_label: 이벤트
---

## 동작 방식

기본적으로 node.js의 [`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter) 클래스의 동작 방식과 동일하다.

## 주요 인터페이스

* [on](#on)
* [once](#once)
* [removeListener](#removelistener)
* [removeAllListeners](#removealllisteners)

### on

이벤트를 등록한다. 제거하기 전까지 지속적으로 동작.

```ts
interface EventEmitter {
  on: (name: string | symbol, handler: evt => void): this
}
// usage
loader.on(eventname, handle)
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_on_eventname_listener)

### once

이벤트를 등록한다. 이벤트 콜백을 한번 실행 후 자동으로 제거.

```ts
interface EventEmitter {
  once: (name: string | symbol, handler: evt => void): this
}
// usage
loader.once(eventname, handle)
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_once_eventname_listener)

### removeListener

이벤트를 제거한다.

```ts
interface EventEmitter {
  removeListener: (name: string | symbol, handler: evt => void): this
}
// usage
loader.removeListener(eventname, handle)
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_removelistener_eventname_listener)
* alias: [`off`](https://nodejs.org/api/events.html#events_emitter_off_eventname_listener)

### removeAllListeners

해당 이름(들)의 모든 이벤트 콜백을 제거한다.

```ts
interface EventEmitter {
  removeAllListeners: (name: string[]): this
}
// usage
loader.removeListener([...eventnames])
```

* [공식 문서 바로가기](https://nodejs.org/api/events.html#events_emitter_removealllisteners_eventname)

## 이벤트

<!-- 이벤트 이름은 아래의 문서를 참고하세요. -->
<!-- * [`LoaderEventName`](https://ibsheet.github.io/loader/enums/loadereventname.html) - 로더 이벤트 이름 -->
<!-- * [`RegItemEventName`](https://ibsheet.github.io/loader/enums/regitemeventname.html) - 로더 레지스트리 아이템 이벤트 이름 -->

공통적으로 모든 이벤트 객체는 `type` 이라는 속성을 갖습니다.

```ts
interface LoaderEvent {
  type: string  // 이벤트 이름
  target?: any  // 이벤트 대상
  data?: any
  error?: any
}
```

### load

라이브러리를 로드할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/adv/registry#registryitem)

#### Usage

```js
loader.once('load', function(evt) {
  const { target } = evt
  console.log('load start:', target.alias)
})
```

### loaded

라이브러리가 로드되었을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/adv/registry#registryitem)

#### Usage

```js
loader.once('loaded', function(evt) {
  const { target } = evt
  console.log('loaded item:', target.alias)
})
```

### load-complete

모든 요청 라이브러리가 로드되었을 때 발생

* `this`: `IBSheetLoader`
* `event.data`: [`RegistryItem[]`](/loader-manual/docs/adv/registry#registryitem)

#### Usage

```js
loader
  .once('load-complete', function(evt) {
    const { data } = evt
    const items = data.map(item => item.alias).join(',')
    console.log('loaded items:', items)
  })
  .load([
    {
      name: 'swal2',
      url: 'https://cdn.jsdelivr.net/npm/sweetalert2@8',
      // 위와같이 URL에 스크립트의 유형(파일확장자)이 포함되지 않은 경우
      // type 속성을 통해 지정해주어야 한다.
      type: 'js'
    },
    {
      name: 'pretty-checkbox',
      url: 'https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css'
    },
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
    }],
    // 기본 라이브러리 체크기능을 사용하지 않기 위해 두번째인자로 false를 입력
    false)
```

### load-failed

라이브러리 로드에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/adv/registry#registryitem)
* `event.error`: `Error`

#### Usage

```js
loader.once('load-failed', function(evt) {
  const { target, error } = evt
  console.error('[LOAD_ERROR]', target.alias, error)
})
```

### unload

라이브러리를 언로드할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/adv/registry#registryitem)

#### Usage

```js
loader.once('unload', function(evt) {
  const { target } = evt
  console.log('unload item:', target.alias)
})
```

### unloaded

라이브러리가 언로드되었을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: [`RegistryItem`](/loader-manual/docs/adv/registry#registryitem)

#### Usage

```js
loader.once('unloaded', function(evt) {
  const { target } = evt
  console.log('unloaded item:', target.alias)
})
```

### unload-complete

모든 요청 라이브러리가 언로드되었을 때 발생

* `this`: `IBSheetLoader`
* `event.data`: [`RegistryItem[]`](/loader-manual/docs/adv/registry#registryitem)

#### Usage

```js
loader
  .once('unload-complete', function(evt) {
    const { data } = evt
    const items = data.map(item => item.alias).join(',')
    console.log('unloaded items:', items)
  })
  .unload([
    'swal2',
    'pretty-checkbox',
    'font-awesome'
  ])
```

### unload-failed

라이브러리 제거에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.data`: [`RegistryItem[]`](/loader-manual/docs/adv/registry#registryitem)

#### Usage

```js
loader.once('unload-failed', function(evt) {
  const { target, error } = evt
  console.error('[UNLOAD_ERROR]', target.alias, error)
})
```
