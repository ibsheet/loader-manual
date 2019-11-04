(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{65:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return o}));t(0);var n=t(90);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={id:"create-sheet",title:"시트 만들기",sidebar_label:"시트 만들기"},c=[{value:"createSheet",id:"createsheet",children:[{value:"사용 예제",id:"사용-예제",children:[]}]},{value:"관련 기능",id:"관련-기능",children:[{value:"sheetReady",id:"sheetready",children:[]},{value:"getIBSheetStatic",id:"getibsheetstatic",children:[]}]},{value:"이벤트",id:"이벤트",children:[{value:"create-sheet",id:"create-sheet",children:[]},{value:"created-sheet",id:"created-sheet",children:[]},{value:"create-sheet-failed",id:"create-sheet-failed",children:[]}]}],b={rightToc:c},s="wrapper";function o(e){var a=e.components,t=i(e,["components"]);return Object(n.b)(s,r({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"createsheet"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#createsheet"}),"#"),"createSheet"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"ibsheet"),"를 로드하고 ",Object(n.b)("inlineCode",{parentName:"p"},"createSheet"),"의 인자를 기반으로 시트를 생성합니다. API는 ",Object(n.b)("a",r({parentName:"p"},{href:"https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/create"}),Object(n.b)("inlineCode",{parentName:"a"},"IBSheet.create")),"와 동일하나 ",Object(n.b)("inlineCode",{parentName:"p"},"el"),", ",Object(n.b)("inlineCode",{parentName:"p"},"options")," 속성 이름의 별칭을 추가하였습니다."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"id")," - 시트의 아이디(전역변수 이름)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"elementId")," - 시트가 만들어질 ",Object(n.b)("inlineCode",{parentName:"li"},"HTMLElement")," 아이디(별칭: ",Object(n.b)("inlineCode",{parentName:"li"},"el"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"element")," - 시트가 만들어질 ",Object(n.b)("inlineCode",{parentName:"li"},"HTMLElement")," 대상(",Object(n.b)("inlineCode",{parentName:"li"},"elementId")," 속성의 대체속성)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"elementId")," 속성이 설정되지 않은 경우에만 유효"),Object(n.b)("li",{parentName:"ul"},"대상 엘리먼트에 ",Object(n.b)("inlineCode",{parentName:"li"},"id"),"가 없을 경우 자동으로 생성한 아이디를 바인딩"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"config")," - 시트 옵션(별칭: ",Object(n.b)("inlineCode",{parentName:"li"},"options"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data")," - 시트의 데이터")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"사용-예제"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#사용-예제"}),"#"),"사용 예제"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// setup loader configuration\nloader.config({\n  registry: [\n    {\n      name: 'ibsheet',\n      baseUrl: '<publicpath>/ibsheet'\n    }\n  ]\n})\n\n// load ibsheet and create sheet\nloader.createSheet({\n  id: 'sheet',\n  el: 'sheetWrapper',\n  options: {\n    // ...your options\n  },\n  data: [\n    // ...your data\n  ]\n}).then(function(sheet) {\n  // sheet: IBSheetInstance\n  console.log('created ibsheet:', sheet.id)\n})\n")),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"관련-기능"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#관련-기능"}),"#"),"관련 기능"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"sheetready"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#sheetready"}),"#"),"sheetReady"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"sheetReady")," 기능을 사용해서 ",Object(n.b)("a",r({parentName:"p"},{href:"https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/static"}),Object(n.b)("inlineCode",{parentName:"a"},"IBSheetStatic"))," 객체로부터 시트를 직접 생성할 수 있습니다."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// setup loader configuration\nloader.config({\n  registry: [\n    {\n      name: 'ibsheet',\n      baseUrl: '<publicpath>/ibsheet'\n    }\n  ]\n})\n\n// load ibsheet and create sheet\nloader.sheetReady(function(ibsheet) {\n  // 'ibsheet', 'this': IBSheetStatic\n  this.create({\n    id: 'sheet',\n    el: 'sheetWrapper',\n    options: {\n      // ...your options\n    },\n    data: [\n      // ...your data\n    ]\n  })\n})\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"getibsheetstatic"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#getibsheetstatic"}),"#"),"getIBSheetStatic"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"ibsheet")," 라이브러리 로드가 완료된 경우, ",Object(n.b)("inlineCode",{parentName:"p"},"getIBSheetStatic")," 메소드를 통해 ",Object(n.b)("a",r({parentName:"p"},{href:"https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/static"}),Object(n.b)("inlineCode",{parentName:"a"},"IBSheetStatic")),"객체를 참조할 수 있습니다."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// IBSheetStatic\nlet IBSheet\n\nloader\n  // add 'loaded' event listener\n  .once('loaded', function(evt) {\n    const target = evt.target\n    console.log('ibsheet loaded!')\n    if (target.alias === 'ibsheet') {\n      IBSheet = loader.getIBSheetStatic()\n    }\n  })\n  // load ibsheet\n  .load({\n    name: 'ibsheet',\n    baseUrl: '<publicpath>/ibsheet'\n  })\n\n// 시트 생성함수 사용자화\nfunction createIBSheet(options) {\n  IBSheet.create(options)\n}\n")),Object(n.b)("h2",null,Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"이벤트"})),Object(n.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#이벤트"}),"#"),"이벤트"),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"create-sheet"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#create-sheet"}),"#"),"create-sheet"),Object(n.b)("p",null,"시트를 생성할 때 발생"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"this"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetLoader")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"event.target"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetStatic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"event.data"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetCreateOptions"))),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"usage"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#usage"}),"#"),"Usage"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"loader.once('create-sheet', function(evt) {\n  const { data } = evt\n  console.log('create sheetId:', data.id)\n})\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"created-sheet"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#created-sheet"}),"#"),"created-sheet"),Object(n.b)("p",null,"시트를 성공적으로 생성했을 때 발생"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"this"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetLoader")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"event.target"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetInstance"))),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"usage-1"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#usage-1"}),"#"),"Usage"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"loader.once('created-sheet', function(evt) {\n  const sheet = evt.target\n  console.log('created sheetId:', sheet.id)\n})\n")),Object(n.b)("h3",null,Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"create-sheet-failed"})),Object(n.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#create-sheet-failed"}),"#"),"create-sheet-failed"),Object(n.b)("p",null,"시트 생성에 실패했을 때 발생"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"this"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetLoader")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"event.target"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetStatic")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"event.data"),": ",Object(n.b)("inlineCode",{parentName:"li"},"IBSheetCreateOptions")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"event.error"),": ",Object(n.b)("inlineCode",{parentName:"li"},"Error"))),Object(n.b)("h4",null,Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"usage-2"})),Object(n.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#usage-2"}),"#"),"Usage"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"loader.once('create-sheet-failed', function(evt) {\n  const { data, error } = evt\n  console.error('[CREATE_SHEET_ERROR]', data.id, error)\n})\n")))}o.isMDXComponent=!0},90:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n),i=r.a.createContext({}),l=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},c=function(e){var a=l(e.components);return r.a.createElement(i.Provider,{value:a},e.children)};var b="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},o=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===a.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),o=l(t),d=n,h=o[c+"."+d]||o[d]||s[d]||i;return t?r.a.createElement(h,Object.assign({},{ref:a},b,{components:t})):r.a.createElement(h,Object.assign({},{ref:a},b))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=o;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[b]="string"==typeof e?e:n,l[1]=c;for(var d=2;d<i;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"}}]);