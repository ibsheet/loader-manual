---
id: remove-sheet
title: 시트 제거하기
sidebar_label: 시트 제거하기
---

## removeSheet

생성된 `IBSheet` 테이블을 제거합니다.

* `id` - 시트의 아이디(전역변수 이름)

### 사용 예제

`IBSheet` 테이블을 생성하고 3초 후에 제거하는 예제

```js
// get global loader instance
import loader from '@ibsheet/loader'

// load ibsheet library
loader.load({
  name: 'ibsheet',
  baseUrl: '<publicpath>/ibsheet'
})

const REMOVE_TIME = 3000

loader
  // when created sheet
  .once('created-sheet', evt => {
    // evt.target: IBSheet 인스턴스
    const sid = evt.target.id
    console.log(`"${sid}" 시트는 ${REMOVE_TIME}ms 후에 제거됩니다.`)
    setTimeout(() => {
      loader.removeSheet(sid)
    }, REMOVE_TIME)
  })
  // when removed sheet
  .once('removed-sheet', evt => {
    // evt.data.id: 제거된 시트의 아이디
    const sid = evt.data.id
    console.log(`"${sid}" 시트가 제거되었습니다.`)
  })
  // create sheet
  .createSheet({
    id: 'sheet',
    el: 'sheetWrapper',
    options: {
      // ...your options
    },
    data: [
      // ...your data
    ]
  })
  // when created sheet
  .then(sheet => {
    // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
    console.log(`"${sheet.id}" 시트가 만들어졌습니다.`)
  })
```

## 이벤트

### remove-sheet

시트를 제거 할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetInstance`

#### Usage

```js
loader.once('remove-sheet', evt => {
  const sheet = evt.target
  console.log('remove sheetId:', sheet.id)
})
```

### removed-sheet

시트를 성공적으로 제거했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.data.id`: 요청 아이디

#### Usage

```js
loader.once('removed-sheet', evt => {
  const { data } = evt
  console.log('removed sheetId:', data.id)
})
```

### remove-sheet-failed

시트제거에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.error`: `Error`

#### Usage

```js
loader.once('remove-sheet-failed', evt => {
  const { data, error } = evt
  console.error('[REMOVE_SHEET_ERROR]', data.id, error)
})
```
