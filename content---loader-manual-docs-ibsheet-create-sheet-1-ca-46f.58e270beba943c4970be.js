(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));t(0);var a=t(90);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={id:"create-sheet",title:"Create Sheet",sidebar_label:"시트 만들기"},c=[{value:"동작 방식",id:"동작-방식",children:[]},{value:"사용 예제",id:"사용-예제",children:[{value:"createSheet",id:"createsheet",children:[]},{value:"sheetReady",id:"sheetready",children:[]},{value:"getIBSheetStatic",id:"getibsheetstatic",children:[]}]}],o={rightToc:c},b="wrapper";function s(e){var n=e.components,t=i(e,["components"]);return Object(a.b)(b,r({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"동작-방식"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#동작-방식"}),"#"),"동작 방식"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ibsheet"),"를 로드하고 ",Object(a.b)("inlineCode",{parentName:"p"},"createSheet"),"의 인자를 기반으로 시트를 생성합니다. API는 ",Object(a.b)("a",r({parentName:"p"},{href:"https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/create"}),Object(a.b)("inlineCode",{parentName:"a"},"IBSheet.create")),"와 동일하나 ",Object(a.b)("inlineCode",{parentName:"p"},"el"),", ",Object(a.b)("inlineCode",{parentName:"p"},"options")," 속성 이름의 별칭을 추가하였습니다."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"id")," - 시트의 아이디(전역변수 이름)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"el")," - 시트가 만들어질 ",Object(a.b)("inlineCode",{parentName:"li"},"HTMLElement")," 아이디(별칭: ",Object(a.b)("inlineCode",{parentName:"li"},"elementId"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"options")," - ",Object(a.b)("inlineCode",{parentName:"li"},"IBSheet")," 옵션(별칭: ",Object(a.b)("inlineCode",{parentName:"li"},"config"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"data")," - 시트의 데이터")),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"사용-예제"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#사용-예제"}),"#"),"사용 예제"),Object(a.b)("h3",null,Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"createsheet"})),Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#createsheet"}),"#"),"createSheet"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// setup loader configuration\nloader.config({\n  registry: [\n    {\n      name: 'ibsheet',\n      baseUrl: '<publicpath>/ibsheet'\n    }\n  ]\n})\n\n// load ibsheet and create sheet\nloader.createSheet({\n  id: 'sheet',\n  el: 'sheetWrapper',\n  options: {\n    // ...your options\n  },\n  data: [\n    // ...your data\n  ]\n}).then(function(sheet) {\n  // sheet: IBSheet 인스턴스\n  console.log('created ibsheet:', sheet.id)\n})\n")),Object(a.b)("h3",null,Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"sheetready"})),Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#sheetready"}),"#"),"sheetReady"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sheetReady")," 기능을 사용해서 ",Object(a.b)("inlineCode",{parentName:"p"},"IBSheetGlobalStatic")," 객체로부터 시트를 직접 생성할 수 있습니다."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// setup loader configuration\nloader.config({\n  registry: [\n    {\n      name: 'ibsheet',\n      baseUrl: '<publicpath>/ibsheet'\n    }\n  ]\n})\n\n// load ibsheet and create sheet\nloader.sheetReady(function(ibsheet) {\n  // 'ibsheet', 'this': IBSheet의 정적 스코프\n  this.create({\n    id: 'sheet',\n    el: 'sheetWrapper',\n    options: {\n      // ...your options\n    },\n    data: [\n      // ...your data\n    ]\n  })\n})\n")),Object(a.b)("h3",null,Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"getibsheetstatic"})),Object(a.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#getibsheetstatic"}),"#"),"getIBSheetStatic"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ibsheet")," 라이브러리가 로드된 경우, ",Object(a.b)("inlineCode",{parentName:"p"},"getIBSheetStaic")," 기능을 통해 해당 객체를 얻을 수 있습니다."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// IBSheet 전역변수를 대입할 변수 선언\nlet IBSheet\n\nloader\n  // add 'loaded' event listener\n  .once('loaded', function(evt) {\n    const target = evt.target\n    console.log('ibsheet loaded!')\n    if (target.alias === 'ibsheet') {\n      IBSheet = loader.getIBSheetStaic()\n    }\n  })\n  // load ibsheet\n  .load({\n    name: 'ibsheet',\n    baseUrl: '<publicpath>/ibsheet'\n  })\n\n// 시트 생성함수 사용자화\nfunction createIBSheet(options) {\n  IBSheet.create(options)\n}\n\n")))}s.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a),i=r.a.createContext({}),l=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=l(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=l(t),h=a,d=s[c+"."+h]||s[h]||b[h]||i;return t?r.a.createElement(d,Object.assign({},{ref:n},o,{components:t})):r.a.createElement(d,Object.assign({},{ref:n},o))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c[o]="string"==typeof e?e:a,l[1]=c;for(var h=2;h<i;h++)l[h]=t[h];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);