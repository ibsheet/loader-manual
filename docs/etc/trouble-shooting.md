---
id: trouble-shooting
title: Trouble Shooting
sidebar_label: 문제해결
---

import { HelpText } from '../shared'

## loader 셋팅 어떻게 하면 될까요?

1. loader-config 설정은 최상위 루트에서 한 번만 실행해주시면 됩니다.
2. config 의 별도의 plugins 를 사용하지 않으면, 선언하지 않으셔도 됩니다.
3. ibsheet-common.js 에 있는 IB_Preset 의 경우, 별도의 IB_Preset 을 모듈화한 common.js 파일을 Import 해주시면 됩니다.
해당 파일의 위치는 시작패키지-React 시작 패키지, "loader-react-starter/src/shared/common.js" 에 위치하고 있습니다.
4. 시트의 생성은 일반적으로 mount 시점, 시트를 제거하는 시점은 unmount 시점으로 잡아서 지정해주시면 됩니다.
5. loader-create 이 후, then 에서 sheet 객체가 생성되는 것을 확인할 수 있지만 해당 구간에서 데이터를 조회하시면 안됩니다. 첫 조회는 onRenderFirstFinish 를 이용해주셔야 합니다.

## IBSheet 라이브러리를 로컬에 두어야 하나요, CDN을 써도 되나요?

두 방식 모두 가능하며, `registry`(또는 `load`)의 `baseUrl` 값만 다르게 지정하면 됩니다.

* **로컬(권장)**: 배포 서버와 IBSheet 라이브러리 버전을 함께 관리하고 싶거나, 외부 네트워크 의존성을 없애고 싶은 경우 사용합니다. 프레임워크의 정적 자산 폴더(Angular/React/Vue 공통으로 `public/ibsheet`)에 라이브러리(`ibsheet.js`, `css/`, `locale/`, `fonts/`)를 복사하고, `baseUrl`은 해당 정적 경로로 지정합니다.
* **CDN/원격 URL**: 데모나 PoC처럼 별도 배포 없이 빠르게 확인하고 싶은 경우, `baseUrl`에 원격 서버의 절대 URL(예: `'https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet'`)을 그대로 지정할 수 있습니다.

```js
loader.config({
  registry: [{
    name: 'ibsheet',
    baseUrl: '/ibsheet' // 로컬 정적 자산 경로
  }]
})
```

`index.html`에 IBSheet의 `<link>`/`<script>` 태그를 정적으로 추가할 필요는 없습니다. 위 두 방식 모두 `loader.load()`가 런타임에 필요한 리소스를 동적으로 로드합니다.
