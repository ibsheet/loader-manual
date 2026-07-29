---
id: angular
title: Angular Framework
sidebar_label: Angular
---

이 가이드는 [`@angular/cli`](https://angular.dev/tools/cli)의 시작 패키지를 기준으로 작성되었습니다. <br/>
아래 가이드의 완성본은 [시작 패키지](/loader-manual/docs/etc/starter-packages) 문서에서 확인할 수 있습니다. <br/>
Angular-Material 을 적용한 가이드는 [데모 패키지](/loader-manual/docs/demo/angular-demo)에서 확인할 수 있습니다.

## 사전 설정

### CLI 설치

* <https://angular.dev/tools/cli>

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

### tsconfig.app.json 설정

`@ibsheet/loader`는 내부적으로 Node.js의 `events` 모듈(`EventEmitter`)을 사용합니다. Angular CLI가 생성하는 기본 `tsconfig.app.json`은 `types` 옵션이 빈 배열(`[]`)로 설정되어 있어 타입 선언을 찾지 못해 컴파일 에러(`TS7016`)가 발생합니다. `types` 배열에 `"node"`를 추가해주세요.

`tsconfig.app.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": ["node"]
  },
  ...
}
```

### IBSheet 라이브러리

만약 서버 URL을 사용한다면 이 단계는 생략합니다. (예: `https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/`와 같은 데모 서버 URL은 학습용으로만 사용하고, 실제 서비스에서는 라이브러리를 프로젝트에 포함해 배포하는 것을 권장합니다.)

프로젝트 폴더의 `public` 폴더에 `ibsheet` 라이브러리를 복사합니다.

```
├── public/
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

### main.ts

`src/main.ts`

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
```

### app.config.ts

`src/app/app.config.ts`

```ts
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
```

### app.ts

`src/app/app.ts`

```ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import loader from '@ibsheet/loader';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: '/ibsheet',
  main: 'ibsheet.js',
  locales: ['en', 'ko'],
  plugins: ['excel', 'common', 'dialog']
}

// 로더 config
loader.config({
  registry: [ibsheetLib]
});

// loader.load()

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'loader-ng-starter';
  loaderVersion = loader.version;
}
```

### app.html

`src/app/app.html`

```html
<p>@ibsheet/loader v{{ loaderVersion }}</p>

<nav>
    <ul>
        <li>
            <a [routerLink]="['/home']">Home</a>
        </li>
        <li>
            <a [routerLink]="['/page1']">Page1</a>
        </li>
        <li>
            <a [routerLink]="['/page2']">Page2</a>
        </li>
    </ul>
</nav>

<router-outlet></router-outlet>
```

## 샘플 공유 데이터

각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다.

* [`src/app/shared/ibsheet-data.ts`](../etc/start-package)

## 서브 컴포넌트

* `src/app/home`
* `src/app/page1`
* `src/app/page2`

```bash
cd src/app
ng generate component home
ng generate component page1
ng generate component page2
```

### Home

홈 화면입니다.

`src/app/home/home.html`

```html
<div style="text-align:center">
  <h1>
    {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
```

`src/app/home/home.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'IBSheetLoader for Angular';
}
```

### Page1

컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다.

`src/app/page1/page1.html`

```html
<p>page1 works!</p>
<div id="sheetContainer"></div>
```

`src/app/page1/page1.ts`

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

@Component({
  selector: 'app-page1',
  imports: [],
  templateUrl: './page1.html',
  styleUrl: './page1.css'
})
export class Page1 implements OnInit, OnDestroy {
  sheetId = '';
  ngOnInit(): void {
    const A = this;
    const { options, data } = SheetSampleData[0];
    loader.createSheet({
      id: this.sheetId,
      el: 'sheetContainer',
      options,
      data
    }).then((sheet: { id: any; }) => {
      A.sheetId = sheet.id;
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      console.log('created sheet', sheet.id);
    });
  }
  ngOnDestroy(): void {
    // loader.removeSheet(this.sheetId);
  }
}
```

### Page2

두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다.

`src/app/page2/page2.html`

```html
<p>page2 works!</p>
<div id="sheetContainer"></div>
```

`src/app/page2/page2.ts`

```ts
import { Component } from '@angular/core';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 {
  sheetId = '';
  ngOnInit(): void {
    const A = this;
    const { options, data } = SheetSampleData[1];
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet: { id: any; }) => {
      A.sheetId = sheet.id;
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      console.log('created sheet', sheet.id);
    });
  }
  ngOnDestroy(): void {
    loader.removeSheet(this.sheetId);
  }
}
```

## 라우터 설정하기

이상 만들었던 서브 컴포넌트들을 라우터 구성에 추가합니다.

### app.routes.ts

`src/app/app.routes.ts`

```ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Page1 } from './page1/page1';
import { Page2 } from './page2/page2';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'page1', component: Page1},
    {path: 'page2', component: Page2}
];
```

## Package.json

```
  "dependencies": {
    "@ibsheet/loader": "^1.3.4",
    "@angular/common": "^20.1.0",
    "@angular/compiler": "^20.1.0",
    "@angular/core": "^20.1.0",
    "@angular/forms": "^20.1.0",
    "@angular/platform-browser": "^20.1.0",
    "@angular/router": "^20.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
```

## 시작 패키지

위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다.

* [문서 바로가기](/loader-manual/docs/etc/starter-packages)
