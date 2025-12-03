---
id: create-chart
title: 차트 만들기
sidebar_label: 차트 만들기
---

## createChart

`ibchart`를 로드하고 `createChart`의 인자를 기반으로 시트를 생성합니다. <br/>
기존에는 `ibchartinfo.js`의 `createIBChart` 함수를 사용해 순차적으로 파라미터를 설정했지만, 이제는 이를 보다 명확하게 구분하기 위해 `cont`, `id`, `options` 세 가지 key를 가진 object 형태로 구조화했습니다.<br/>
`cont` 파라미터의 경우, `create-ibsheet`와 파라미터 사용을 통일하기 위해 별칭(`el`)으로도 사용할 수 있도록 설정하였습니다.<br/>
각 key를 통해 해당 속성들을 설정하여 차트를 생성하도록 개선하였습니다.

* `cont` - 차트가 출력될 대상의 `HTMLElement` 객체 또는  `HTMLElement` 아이디(별칭: `el`)
* `id` - 차트의 아이디(전역변수 이름), 차트 객체가 생성될 때 해당 `id`로 차트가 출력될 `HTMLElement`의 `id`가 변경
* `options` - 차트가 출력될 Div의 사이즈 정보, 차트가 출력될 `HTMLElement`에 `width`, `height`를 지정

### 사용 예제

`ibchart`의 경우, 사용 시 `HighCharts` 모듈을 같이 사용해야 하는데 `dependentUrls`에서 사용할 모듈들을 설정할 수 있지만, 사용하는 SPA환경에 맞춰 사용하시는 것을 권장 드립니다.

```js
// HighCharts를 dependentUrls을 통해 사용할 수 있습니다.
// get global loader instance
import loader from '@ibsheet/loader'

// setup loader configuration
loader.config({
  registry: [
    {
      name: 'ibchart',
      baseUrl: '<publicpath>/ibchart',
      dependentUrls: [
        '<publicpath>/HighCharts/highcharts.js'
      ]
    }
  ]
})

// load ibchart and create chart
loader.createChart({
  id: 'chart',
  el: 'chartWrapper',
  options: {
    width: '100%',
    height: '400px'
  }
}).then(chart => {
  // chart: IBChartInstace
  // 생성된 차트 객체에 API [`setOptions`](https://docs.ibsheet.com/ibchart/v1/manual/#docs/funcs/chartObject/setOptions)를 통해 사용할 시트의 모든 속성을 설정합니다.
  console.log('created ibschart:', chart.getId())
})
```

```js
// Angular에서 HighCharts 설정  예시
import loader from '@ibsheet/loader';
import Highcharts from 'highcharts';
import 'highcharts/highcharts-more';
import 'highcharts/modules/series-label';

// Highcharts를 전역 객체에 설정
if (typeof window !== 'undefined') window.Highcharts = Highcharts;

const ibchartLib = {
  name: 'ibchart',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibchart/'
}

// 로더 config
loader.config({
  registry: [ibchartLib]
});

loader.load()
```

```js
// React에서 HighCharts 설정 예시
import loader from '@ibsheet/loader';
import Highcharts from 'highcharts/highstock';
import 'highcharts/highcharts-more';
import 'highcharts/modules/series-label';

// Highcharts를 전역 객체에 설정
if (typeof window !== 'undefined') window.Highcharts = Highcharts;

const ibchartLib = {
  name: 'ibchart',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibchart/'
}

// 로더 config
loader.config({
  registry: [ibchartLib]
});

loader.load()
```

```js
// Vue에서 HighCharts 설정 예시
import loader from '@ibsheet/loader';

// Highcharts 모듈 import
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SeriesLabel from 'highcharts/modules/series-label';

// Highcharts 모듈 초기화 헬퍼
const initModule = (module, hc) => {
  const fn = typeof module === 'function' ? module : module?.default;
  if (fn) fn(hc);
};

// Highcharts 모듈 초기화
initModule(HighchartsMore, Highcharts);
initModule(SeriesLabel, Highcharts);

// Highcharts를 전역 객체에 설정
if (typeof window !== 'undefined') window.Highcharts = Highcharts;

const ibchartLib = {
  name: 'ibchart',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibchart/'
}

loader.config({
  registry: [ibchartLib]
});

loader.load()
```

## 이벤트

### create-chart

차트를 생성할 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBChartStatic`
* `event.data`: `IBChartCreateOptions`

#### Usage

```js
loader.once('create-chart', evt => {
  const { data } = evt
  console.log('create sheetId:', data.id)
})
```

### created-chart

차트를 성공적으로 생성했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBChartInstance`

#### Usage

```js
loader.once('created-chart', evt => {
  const chart = evt.target
  console.log('created chartId:', chart.getId())
})
```

### create-chart-failed

차트 생성에 실패했을 때 발생

* `this`: `IBSheetLoader`
* `event.target`: `IBChartStatic`
* `event.data`: `IBChartCreateOptions`
* `event.error`: `Error`

#### Usage

```js
loader.once('create-chart-failed', evt => {
  const { data, error } = evt
  console.error('[CREATE_CHART_ERROR]', data.id, error)
})
```
