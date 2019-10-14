---
id: unload
title: Unload
sidebar_label: 스크립트 제거하기
---

## 동작 방식

`unload` 메소드는 기본적으로 `ibsheet` 라이브러리의 스크립트를 `DOM`에서 제거한다.

* 인자가 없는 경우, 로드된 `ibsheet` 라이브러리를 제거한다.
* 인자가 `name` or `alias`인 경우 해당 라이브러리의 스크립트들을 제거한다.
* 이외의 경우, 이미 라이브러리가 언로드 상태이면 아무일도 하지 않는다.

## 사용 예제

```js
// get global loader instance
import loader from '@ibsheet/loader'

// setup loader configuration
loader.config({
  registry: [{
    name: 'ibsheet',
    // ...
  }]
})

// ...
class MyVueComponent {
  // ...
  mounted() {
    loader.load()
  }
  destroyed() {
    // situation no longer requires ibsheet
    loader.unload() 
  }
}
```
