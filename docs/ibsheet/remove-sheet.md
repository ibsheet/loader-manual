---
id: remove-sheet
title: Remove Sheet
sidebar_label: 시트 제거하기
---

## 동작 방식

생성된 `IBSheet` 테이블을 제거합니다.

* `id` - 시트의 아이디(전역변수 이름)

## 이벤트

### remove-sheet

시트를 제거 할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetInstance`

#### Usage

```js
loader.once('remove-sheet', function(evt) {
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
loader.once('removed-sheet', function(evt) {
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
loader.once('remove-sheet-failed', function(evt) {
  const { data, error } = evt
  console.error('[REMOVE_SHEET_ERROR]', data.id, error)
})
```

## 사용 예제

### removeSheet

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
  .once('created-sheet', function(evt) {
    // evt.target: IBSheet 인스턴스
    const sid = evt.target.id
    console.log(`"${sid}" 시트는 ${REMOVE_TIME}ms 후에 제거됩니다.`)
    setTimeout(function() {
      loader.removeSheet(sid)
    }, REMOVE_TIME)
  })
  // when removed sheet
  .once('removed-sheet', function(evt) {
    // evt.data.id: 제거된 시트의 아이디
    const sid = evt.data.id
    console.log(`"${sid}" 시트가 제거되었습니다.`)
  })

// create sheet
loader.createSheet({
  id: 'sheet',
  el: 'sheetWrapper',
  options: {
    // ...your options
  },
  data: [
    // ...your data
  ]
}).then(function(sheet) {
  console.log(`"${sheet.id}" 시트가 만들어졌습니다.`)
})
```
