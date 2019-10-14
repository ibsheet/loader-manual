---
id: create-sheet
title: Create Sheet
sidebar_label: 시트 만들기
---

## 동작 방식

`ibsheet`를 로드하고 `createSheet`의 인자를 기반으로 시트를 생성합니다. API는 [`IBSheet.create`](https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/create)와 동일하나 `el`, `options` 속성 이름의 별칭을 추가하였습니다.

* `id` - sheet의 ID(전역변수 이름)
* `el` - sheet의 Wrapper `HTMLElement` 아이디(`elementId`)
* `options` - ibsheet 옵션(`config`)
* `data` - sheet 데이터


## 사용 방법

이 예제에서는 `ibsheet` 라이브러리를 [`registry.add`](../basic/registry#add)를 통해 등록하였습니다.

```js
// get global loader instance
import loader from '@ibsheet/loader'

// register ibsheet library
loader.registry.add({
  {
    name: 'ibsheet',
    // ...
  }
})

// load ibsheet and create sheet
loader.createSheet({
  id: 'sheet',
  elementId: 'sheetWrapper',
  options: {
    // ...
  },
  data: []
}).then(function(sheet) {
  console.log('created ibsheet:', sheet.id)
})
```
