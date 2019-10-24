---
id: create-sheet
title: Create Sheet
sidebar_label: 시트 만들기
---

## 동작 방식

`ibsheet`를 로드하고 `createSheet`의 인자를 기반으로 시트를 생성합니다. API는 [`IBSheet.create`](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/create)와 동일하나 `el`, `options` 속성 이름의 별칭을 추가하였습니다.

* `id` - sheet의 ID(전역변수 이름)
* `el` - sheet가 만들어질 `HTMLElement` 아이디(`elementId`)
*  `options` - `IBSheet` 옵션(`config`)
* `data` - sheet 데이터

## 사용 예제

### createSheet

```js
// get global loader instance
import loader from '@ibsheet/loader'

// register ibsheet library
loader.registry.add({
  {
    name: 'ibsheet',
    baseUrl: '<YOUR_IBSHEET_DIR>'
  }
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
  console.log('created ibsheet:', sheet.id)
})
```

### sheetReady

`sheetReady` 기능을 사용해서 `IBSheetGlobalStatic` 객체로부터 시트를 직접 생성할 수 있습니다.

```js
// get global loader instance
import loader from '@ibsheet/loader'

// setup configuration
loader.config({
  registry: {
    name: 'ibsheet',
    baseUrl: '<YOUR_IBSHEET_DIR>'
  }
})

// load ibsheet and create sheet
loader.sheetReady(function(_ibsheet) {
  // '_ibsheet' and 'this' is IBSheetGlobalStatic
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
