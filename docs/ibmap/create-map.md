---
id: create-map
title: 맵 만들기
sidebar_label: 맵 만들기
---

## createMap

`ibmap`을 로드하고 `createMap`의 인자를 기반으로 시트를 생성합니다. <br/>
API는 [`IBMapCharts.create`](https://docs.ibsheet.com/ibmap/v1/manual/#docs/static/create)와 동일한 `elem`, `cfg` 속성 이름의 별칭을 선언하고, 해당 별칭들을 통해 속성들을 설정하여 사용하도록 설정하였습니다.<br/>
`elem` 파라미터의 경우, `create-ibsheet`와 파라미터 사용을 통일하기 위해 별칭(`el`)으로도 사용할 수 있도록 설정하였으며, `cfg` 파라미터의 경우, 별칭(`options`)로도 사용할 수 있도록 설정하였습니다.

* `elem` - Map을 생성할  `HTMLElement` 객체 또는 `HTMLElement` 아이디(별칭: `el`)
* `cfg` - 생성할 Map의 설정(별칭: `options`)

### 사용 예제

`dependentUrls`을 통해 ibmap 사용 시 같이 사용할 css나 js파일을 호출하도록 설정할 수 있습니다.

```js
// get global loader instance
import loader from '@ibsheet/loader'

// setup loader configuration
loader.config({
  registry: [
    {
      name: 'ibmap',
      baseUrl: '<publicpath>/ibmap',
      dependentUrls: [
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
      ]
    }
  ]
})

// load ibmap and create map
loader.createMap({
  el: 'mapDiv'
  options: {
    // ...your options
  },
}).then(map => {
  // map: IBMapInstance
  // 생성된 Map 객체에  API ['load'](https://docs.ibsheet.com/ibmap/v1/manual/#docs/funcs/map/load)를 통해 geojson 규격으로 맵 데이터를 호출하여 사용하실 수 있습니다.
  console.log('created map:', map)
})
```

## 이벤트

### create-map

맵을 생성할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `null`
* `event.data`: `IBMapCreateOptions`

#### Usage

```js
loader.once('create-sheet', evt => {
  const { data } = evt
  console.log('create Elements:', data.elem)
})
```

### created-map

맵을 성공적으로 생성했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBMapInstance`

#### Usage

```js
loader.once('created-map', evt => {
  const map = evt.target
  console.log('created map:', map)
})
```

### create-map-failed

맵 생성에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `null`
* `event.data`: `IBMapCreateOptions`
* `event.error`: `Error`

#### Usage

```js
loader.once('create-map-failed', evt => {
  const { data, error } = evt
  console.error('[CREATE_MAP_ERROR]', data.elem, error)
})
```
