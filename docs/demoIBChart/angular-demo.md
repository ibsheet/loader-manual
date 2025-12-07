---
id: angular-demo
title: IBChart Angular Demo Sample
sidebar_label: Angular
---

## IBChart Angular Demo Packages

## 📖 구조

👉 app.component.ts 에 loader.config 를 한 번 실행합니다. <br/>
👉 config 폴더 안에 chart-create.ts 가 있습니다. <br/>
👉 각 폴더명으로 샘플 컴포넌트가 존재합니다.

### 사용기술

👉 `@ibsheet/loader: 1.3.4` <br/>
👉 `Typescript, Angular, Angular-Material, FontAweSome, yarn`

### ✨설치방법

1. `clone` 을 받는다.
2. 해당프로젝트는 `yarn` 을 기준으로 만들어졌습니다. `yarn` 을 설치해줍니다. `npm install --global yarn`
3. `yarn` 을 이용하여 다운받는다.
4. `sheet-loader` 버전을 확인해보고, 필요한 로더 버전으로 업데이트한다. 해당 샘플 기준으로는 ^1.3.4 버전이 설치됩니다.
5. `public/` 에 ibchart 라이브러리가 들어있는 assets 폴더를 넣어줍니다. (app.ts 에서 파일위치는 변경할 수 있음.)
6. `yarn build` // build 파일 생성됨.
7. `yarn start` // start 로컬

### 사용 시 유의 사항

`ibchart` 사용 시 <b>`HighCharts` 모듈은 구매 시 전달받은 제품으로만 사용</b>하셔야 합니다.


### 데모 패키지

* [Angular 데모 패키지 (github)](https://github.com/ibsheet/loader-chart-angular-guide-sample)
