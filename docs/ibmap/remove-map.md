---
id: remove-map
title: 맵 제거하기
sidebar_label: 맵 제거하기
---

## removeMap

생성된 `IBMap` 객체를 제거합니다.

### 사용 예제

`IBMap` 객체를 생성하고 3초 후에 제거하는 예제

```js
// get global loader instance
import loader from '@ibsheet/loader'

// load map library
loader.load({
  name: 'ibmap',
  baseUrl: '<publicpath>/ibmap'
})

const REMOVE_TIME = 3000

let IBMapInstance = null;

loader
  // when created map
  .once('created-map', evt => {
    // evt.target: IBMap 인스턴스
    IBMapInstance = evt.target
    console.log(`IBMap 객체는 ${REMOVE_TIME}ms 후에 제거됩니다.`)
    setTimeout(() => {
      loader.removeMap(IBMapInstance)
      IBMapInstance = null;
    }, REMOVE_TIME)
  })
  // when removed map
  .once('removed-map', evt => {
    console.log(`IBMap 객체가 제거되었습니다.`)
  })
  // create map
  .createMap({
    el: 'mapWrapper',
    options: {
      // ...your options
    }
  })
  // when created map
  .then(map => {
    console.log(`IBMap 객체가 만들어졌습니다.`)
  })
```

## 이벤트

### remove-map

맵을 제거 할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBMapInstance`

#### Usage

```js
loader.once('remove-map', evt => {
  console.log('remove map')
})
```

### removed-map

맵을 성공적으로 제거했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `null`

#### Usage

```js
loader.once('removed-map', evt => {
  console.log('removed map')
})
```

### remove-map-failed

시트제거에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `null`
* `event.error`: `Error`

#### Usage

```js
loader.once('remove-map-failed', evt => {
  const { data, error } = evt
  console.error('[REMOVE_MAP_ERROR]', data.elem, error)
})
```
