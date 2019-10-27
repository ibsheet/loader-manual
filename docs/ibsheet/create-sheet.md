---
id: create-sheet
title: Create Sheet
sidebar_label: 시트 만들기
---

## 동작 방식

`ibsheet`를 로드하고 `createSheet`의 인자를 기반으로 시트를 생성합니다. API는 [`IBSheet.create`](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/create)와 동일하나 `el`, `options` 속성 이름의 별칭을 추가하였습니다.

* `id` - 시트의 아이디(전역변수 이름)
* `el` - 시트가 만들어질 `HTMLElement` 아이디(`elementId`)
*  `options` - `IBSheet` 옵션(`config`)
* `data` - sheet 데이터

## 사용 예제

### createSheet

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
}).then(function(sheet) {
  // sheet: IBSheet 인스턴스
  console.log('created ibsheet:', sheet.id)
})
```

### sheetReady

`sheetReady` 기능을 사용해서 `IBSheetGlobalStatic` 객체로부터 시트를 직접 생성할 수 있습니다.

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
loader.sheetReady(function(ibsheet) {
  // 'ibsheet', 'this': IBSheet의 정적 스코프
  this.create({
    id: 'sheet',
    el: 'sheetWrapper',
    options: {
      // ...your options
    },
    data: [
      // ...your data
    ]
  })
})
```

### getIBSheetStatic

`ibsheet` 라이브러리가 로드된 경우, `getIBSheetStaic` 기능을 통해 해당 객체를 얻을 수 있습니다.

```js
// get global loader instance
import loader from '@ibsheet/loader'

// IBSheet 전역변수를 대입할 변수 선언
let IBSheet

loader
  // add 'loaded' event listener
  .once('loaded', function(evt) {
    const target = evt.target
    console.log('ibsheet loaded!')
    if (target.alias === 'ibsheet') {
      IBSheet = loader.getIBSheetStaic()
    }
  })
  // load ibsheet
  .load({
    name: 'ibsheet',
    baseUrl: '<publicpath>/ibsheet'
  })

// 시트 생성함수 사용자화
function createIBSheet(options) {
  IBSheet.create(options)
}
