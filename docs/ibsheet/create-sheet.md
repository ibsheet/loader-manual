---
id: create-sheet
title: 시트 만들기
sidebar_label: 시트 만들기
---

## createSheet

`ibsheet`를 로드하고 `createSheet`의 인자를 기반으로 시트를 생성합니다. <br/>
API는 [`IBSheet.create`](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/create)와 동일하지만 `el`, `options` 속성 이름의 별칭과, 대상 엘리먼트의 아이디 대신 엘리먼트를 직접 설정할 수 있도록 인터페이스를 개선하였습니다.

* `id` - 시트의 아이디(전역변수 이름), 설정되지 않으면 자동으로 아이디를 생성
* `el` - 시트가 만들어질 `HTMLElement` 아이디(별칭: `elementId`)
* `element` - 시트가 만들어질 `HTMLElement` 대상(`el` 속성의 대체속성)
  * `el` 속성이 설정되지 않은 경우에만 유효
  * 대상 엘리먼트에 `id`가 없을 경우 자동으로 생성한 아이디를 바인딩
* `options` - 시트 옵션(별칭: `config`)
* `data` - 시트의 데이터

### 사용 예제

```js
// get global loader instance
import loader from '@ibsheet/loader'

// setup loader configuration
loader.config({
  registry: [
    {
      name: 'ibsheet',
      baseUrl: '<publicpath>/ibsheet'
    }
  ]
})

// load ibsheet and create sheet
loader.createSheet({
  id: 'sheet',
  el: 'sheetWrapper',
  options: {
    // ...your options
  },
  data: [
    // ...your data
  ]
}).then(sheet => {
  // sheet: IBSheetInstance
  // 시트 객체가 생성되지만, 시트가 그려지지는 않은 상태.
  // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
  console.log('created ibsheet:', sheet.id)
})
```

## 관련 기능

### sheetReady

`sheetReady` 기능을 사용해서 [`IBSheetStatic`](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/static) 객체로부터 시트를 직접 생성할 수 있습니다.
`config` 완료시 `sheetReady` 가 한 번 발생합니다.

```js
// get global loader instance
import loader from '@ibsheet/loader'

// setup loader configuration
loader.config({
  registry: [
    {
      name: 'ibsheet',
      baseUrl: '<publicpath>/ibsheet'
    }
  ]
})

// load ibsheet event sheetReady
loader.sheetReady(ibsheet => {
  // 'ibsheet', 'this': IBSheetStatic
})
```

### getIBSheetStatic

`ibsheet` 라이브러리 로드가 완료된 경우, `getIBSheetStatic` 메소드를 통해 [`IBSheetStatic`](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/static)객체를 참조할 수 있습니다.

```js
// get global loader instance
import loader from '@ibsheet/loader'

// IBSheetStatic
let IBSheet

loader
  // add 'loaded' event listener
  .once('loaded', evt => {
    const target = evt.target
    console.log('ibsheet loaded!')
    if (target.alias === 'ibsheet') {
      IBSheet = loader.getIBSheetStatic()
    }
  })
  // load ibsheet
  .load({
    name: 'ibsheet',
    baseUrl: '<publicpath>/ibsheet'
  })
```

`create` 이후 시트 static 객체 가져와서 사용하기

```js
import loader from '@ibsheet/loader'

// 시트 Static 객체 가져오기
const ibsheet = loader.getIBSheetStatic()
const sheetId = 'sheet'

// 시트 create 이후, ibsheet static 객체에서 sheet 아이디에 맞는 시트를 가져옵니다.
console.log(ibsheet[sheetId])
```

## 이벤트

### create-sheet

시트를 생성할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.data`: `IBSheetCreateOptions`

#### Usage

```js
loader.once('create-sheet', evt => {
  const { data } = evt
  console.log('create sheetId:', data.id)
})
```

### created-sheet

시트를 성공적으로 생성했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetInstance`

#### Usage

```js
loader.once('created-sheet', evt => {
  const sheet = evt.target
  console.log('created sheetId:', sheet.id)
})
```

### create-sheet-failed

시트 생성에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBSheetStatic`
* `event.data`: `IBSheetCreateOptions`
* `event.error`: `Error`

#### Usage

```js
loader.once('create-sheet-failed', evt => {
  const { data, error } = evt
  console.error('[CREATE_SHEET_ERROR]', data.id, error)
})
```
