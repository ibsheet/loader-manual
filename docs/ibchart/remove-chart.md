---
id: remove-chart
title: 차트 제거하기
sidebar_label: 차트 제거하기
---

## removeChart

생성된 `IBChart` 객체를을 제거합니다.

* `getId()` - 차트 객체의 아이디(전역변수 이름)

### 사용 예제

`IBChart` 객체를 생성하고 3초 후에 제거하는 예제

```js
// get global loader instance
import loader from '@ibsheet/loader'

// load ibchart library
loader.load({
  name: 'ibchart',
  baseUrl: '<publicpath>/ibchart',
  dependentUrls: [
    'https://code.highcharts.com/highcharts.js'
  ]
})

const REMOVE_TIME = 3000

loader
  // when created chart
  .once('created-chart', evt => {
    // evt.target: IBChart 인스턴스
    const sid = evt.target.getId()
    console.log(`"${sid}" 차트는 ${REMOVE_TIME}ms 후에 제거됩니다.`)
    setTimeout(() => {
      loader.removeChart(sid)
    }, REMOVE_TIME)
  })
  // when removed chart
  .once('removed-chart', evt => {
    // evt.data.id: 제거된 차트의 아이디
    const sid = evt.data.id
    console.log(`"${sid}" 차트가 제거되었습니다.`)
  })
  // create chart
  .createChart({
    id: 'chart',
    cont: 'chartWrapper',
    options: {
      width: // ...your chart width
      height: // ...your chart height
    }
  })
  // when created chart
  .then(chart => {
    console.log(`"${chart.getId()}" 차트가 만들어졌습니다.`)
  })
```

## 이벤트

### remove-chart

차트를 제거 할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBChartInstance`

#### Usage

```js
loader.once('remove-chart', evt => {
  const chart = evt.target
  console.log('remove chartId:', chart.getId())
})
```

### removed-chart

차트를 성공적으로 제거했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBChartStatic`
* `event.data.id`: 차트 아이디

#### Usage

```js
loader.once('removed-chart', evt => {
  const { data } = evt
  console.log('removed sheetId:', data.id)
})
```

### remove-sheet-failed

차트 제거에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBChartStatic`
* `event.error`: `Error`

#### Usage

```js
loader.once('remove-chart-failed', evt => {
  const { data, error } = evt
  console.error('[REMOVE_CHART_ERROR]', data.id, error)
})
```
