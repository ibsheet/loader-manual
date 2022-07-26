---
id: angular
title: Angular Framework
sidebar_label: Angular
---

이 가이드는 [`@angular/cli`](https://cli.angular.io/)의 시작 패키지를 기준으로 작성되었습니다. <br/>
아래 가이드의 완성본은 [시작 패키지](/loader-manual/docs/etc/starter-packages) 문서에서 확인할 수 있습니다.

## 사전 설정

### CLI 설치

* <https://cli.angular.io/>

```bash
npm install -g @angular/cli
```

### 프로젝트 생성

```bash
ng new <project_dir>
```

### 패키지 설치

```bash
cd <project_dir>
yarn add @ibsheet/loader
# using npm
# npm i -S @ibsheet/loader
```

### IBSheet 라이브러리

만약 서버 URL을 사용한다면 이 단계는 생략합니다.

프로젝트 폴더의 `assets` 폴더에 `ibsheet` 라이브러리를 복사합니다.

```
├── assets/
|  └── ibsheet/
|     ├── css/
|     ├── locale/
|     ├── fonts/
|     ├── ibsheet.js
|     └── ibleaders.js
```

### 개발서버 실행

```bash
yarn start
# using npm
# npm start
```

## 메인 컴포넌트

메인 컴포넌트 혹은 모듈에서 사용할 라이브러리들을 설정(등록)합니다.

### app.component.ts

`src/app.component.ts`

```ts
import { Component } from '@angular/core'
import loader from '@ibsheet/loader'

loader.config({
  registry: {
    name: 'ibsheet',
    baseUrl: '/assets/ibsheet'
  }
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaderVersion = loader.version
}
```

### app.component.html

`src/app.component.html`
```html
<p>@ibsheet/loader v{{ loaderVersion }}</p>
<h2>Go to Pages: </h2>
<ul>
  <li><a routerLink="/" routerLinkActive="active">Home</a></li>
  <li><a routerLink="/page1" routerLinkActive="active">Page1</a></li>
  <li><a routerLink="/page2" routerLinkActive="active">Page2</a></li>
</ul>
<div class="main">
  <router-outlet></router-outlet>
  <!-- Routed components go here -->
</div>
```

## 샘플 공유 데이터

각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다.

* [`src/shared/ibsheet-data.ts`](../etc/start-package)

## 서브 컴포넌트

* `src/home`
* `src/page1`
* `src/page2`

```bash
cd src
ng generate component home
ng generate component page1
ng generate component page2
```

### Home

홈 화면에서는 `ibsheet` 라이브러리를 로드하지 않습니다. 만약 로드되어 있다면 컴포넌트 마운트시 `unload` 합니다.

`src/home/home.component.html`

```html
<div style="text-align:center">
  <h1>{{ title }}!</h1>
</div>
```

`src/home/home.component.ts`

```ts
import { Component, OnInit } from '@angular/core'
import loader from '@ibsheet/loader'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'IBSheetLoader for Angular'
  ngOnInit() {
    loader.unload()
  }
}
```

### Page1

컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/page1/page1.component.html`

```html
<p>page1 works!</p>
<div id="sheetContainer"></div>
```

`src/page1/page1.component.ts`

```ts
import { Component, OnInit, OnDestroy } from '@angular/core'
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  sheetId = '';
  ngOnInit() {
    const A = this;
    const { options, data } = SheetSampleData[0]
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet: { id: any; }) => {
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      A.sheetId = sheet.id;
      console.log('created sheet', sheet.id);
    })
  }
  ngOnDestroy() {
    loader.removeSheet(this.sheetId)
  }
}
```

### Page2

두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/page2/page2.component.html`

```html
<p>page2 works!</p>
<div id="sheetContainer"></div>
```

`src/page2/page2.component.ts`

```ts
import { Component, OnInit, OnDestroy } from '@angular/core'
import loader from '@ibsheet/loader'
import { SheetSampleData } from '../shared/ibsheet-data'

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
  sheetId = ''
  ngOnInit() {
    const A = this;
    const { options, data } = SheetSampleData[1]
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet: { id: any; }) => {
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      A.sheetId = sheet.id;
      console.log('created sheet', sheet.id);
    })
  }
  ngOnDestroy() {
    loader.removeSheet(this.sheetId)
  }
}
```

## 라우터 설정하기

이상 만들었던 서브 컴포넌트들을 해당 모듈의 라우터 구성에 추가합니다.

### app.module.ts

`src/app.module.ts`

```ts
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { Page1Component } from './page1/page1.component'
import { Page2Component } from './page2/page2.component'
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 시작 패키지

위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다.

* [문서 바로가기](/loader-manual/docs/etc/starter-packages)
