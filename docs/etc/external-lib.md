---
id: external-lib
title: 외부 라이브러리 사용하기
sidebar_label: 외부 라이브러리 사용
---

`IBSheetLoader` 라이브러리는 스크립트를 원하는 타이밍에 동적으로 현재 문서에 추가하기 위해 사용됩니다.

예를 들어 HTML문서의 `<body>`태그의 마지막에 스크립트를 추가하는 것 보다 더 늦은 타이밍에 해당 라이브러리의 스크립트가 필요한 경우처럼 말이죠. 그래서 꼭 `ibsheet` 라이브러리를 사용하지 않더라도 이 기능을 사용할 수 있는 방법을 제공합니다.

하지만 `webpack`과 같은 번들러 패키지를 사용하거나 SPA 프레임워크 개발환경에서는 이와같은 기능이 전혀 불필요하거나 이를 구현할 수 있는 대안이 많으므로 일반적인 웹페이지 개발 환경에서의 가이드를 소개합니다.

```js
var loader = window.IBSheetLoader

var myLibraries = [
  /**
   * sweetalert2
   * https://sweetalert2.github.io/
   */
  {
    name: 'swal2',
    url: 'https://cdn.jsdelivr.net/npm/sweetalert2@8',
    // 위와 같이 URL에 스크립트의 유형(파일확장자)이 포함되지 않은 경우
    // type 속성을 통해 지정해주어야 한다.
    type: 'js'
  },
  /**
   * pretty checkbox
   * https://lokesh-coder.github.io/pretty-checkbox/
   */
  {
    name: 'pretty-checkbox',
    url: 'https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css'
  },
  /**
   * Font Awesome
   * https://fontawesome.com/
   */
  {
    name: 'font-awesome',
    url: 'https://kit.fontawesome.com/21c0a510fd.js',
    // FontAwesome5의 라이브러리 키트는 자체적으로 스크립트들을 동적으로 로드하므로
    // 아래와 같이 로드되는 스크립트들을 명시해주어야 unload시 함께 제거된다.
    dependentUrls: [
      'https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css',
      'https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css',
      'https://kit-free.fontawesome.com/releases/latest/css/free.min.css'
    ]
  }
  // ... your need libraries
]

loader.config({
  registry: myLibraries
})

function customLoad(name) {
  // ibsheet 라이브러리 로드 체크기능을 사용하지 않으려면 호출시 두 번째 인자로 false를 전달해야 한다.
  loader.load(name, false)
}
```