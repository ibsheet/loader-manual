---
id: angular
title: Angular Framework
sidebar_label: Angular
---

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
npm install --save @ibsheet/loader
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

`IBSheet` 라이브러리는 로더에서 단 한번만 등록하면 되므로,
메인 컴포넌트에서 로더의 환경을 설정합니다. (`IBSheet` 라이브러리를 등록)

* 메인 컴포넌트: `IBSheet` 라이브러리를 사용할 최상위 컴포넌트

### app.component.ts

`src/app.component.ts`

```ts
import { Component } from '@angular/core';
import loader from '@ibsheet/loader';

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
  loaderVersion = loader.version;
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

* [`src/shared/ibsheet-data.ts`](../appendix/spa-sample-data)

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

홈 화면에서는 `IBSheet` 라이브러리를 로드하지 않습니다. 만약 로드되어 있다면 컴포넌트 마운트시 `unload` 합니다.

`src/home/home.component.html`

```html
<div style="text-align:center">
  <h1>{{ title }}!</h1>
</div>
```

`src/home/home.component.ts`

```ts
import { Component, OnInit } from '@angular/core';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'IBSheetLoader for Angular';
  ngOnInit() {
    loader.unload();
  }
}
```

### Page1

컴포넌트 마운트시 첫 번째 샘플 데이터로 `IBSheet` 테이블을 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/page1/page1.component.html`

```html
<p>page1 works!</p>
<div id="sheetContainer"></div>
```

`src/page1/page1.component.ts`

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  sheetId = 'sheet';
  ngOnInit() {
    const { options, data } = SheetSampleData[0];
    loader.createSheet({
      id: this.sheetId,
      el: 'sheetContainer',
      options,
      data
    });
  }
  ngOnDestroy() {
    loader.removeSheet(this.sheetId);
  }
}
```

### Page2

두 번째 샘플 데이터로 `IBSheet` 테이블을 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/page2/page2.component.html`

```html
<p>page2 works!</p>
<div id="sheetContainer"></div>
```

`src/page2/page2.component.ts`

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
  sheetId = 'sheet';
  ngOnInit() {
    const { options, data } = SheetSampleData[1];
    loader.createSheet({
      id: this.sheetId,
      el: 'sheetContainer',
      options,
      data
    });
  }
  ngOnDestroy() {
    loader.removeSheet(this.sheetId);
  }
}
```

## 라우터 설정하기

이상 생성한 서브 컴포넌트들을 해당 모듈의 라우터 구성에 추가합니다.

### app.module.ts

`src/app.module.ts`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
];

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

* [문서 바로가기](/loader-manual/docs/appendix/starter-packages)
