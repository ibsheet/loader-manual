(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{47:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return d}));n(0);var t=n(90);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={id:"config",title:"Configuration",sidebar_label:"설정하기"},o=[{value:"환경설정",id:"환경설정",children:[]},{value:"인터페이스",id:"인터페이스",children:[{value:"LoaderConfigOptions",id:"loaderconfigoptions",children:[]},{value:"RetryOptions",id:"retryoptions",children:[]}]},{value:"사용 예제",id:"사용-예제",children:[{value:"옵션 정의하기",id:"옵션-정의하기",children:[]},{value:"적용하기",id:"적용하기",children:[]}]}],c={rightToc:o},b="wrapper";function d(e){var a=e.components,n=i(e,["components"]);return Object(t.b)(b,r({},c,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"환경설정"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#환경설정"}),"#"),"환경설정"),Object(t.b)("p",null,Object(t.b)("a",r({parentName:"p"},{href:"/loader-manual/docs/adv/load"}),Object(t.b)("inlineCode",{parentName:"a"},"load")),"기능을 사용하기 전에 ",Object(t.b)("inlineCode",{parentName:"p"},"config"),"기능을 통해 기본 설정을 변경하거나 추가 할 수 있습니다."),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"인터페이스"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#인터페이스"}),"#"),"인터페이스"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-ts"}),"interface IBSheetLoader extends EventEmitter {\n  config: (options?: LoaderConfigOptions) => this\n  // ...\n}\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"loaderconfigoptions"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#loaderconfigoptions"}),"#"),"LoaderConfigOptions"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-ts"}),"interface LoaderConfigOptions {\n  globals?: {\n    ibsheet?: string\n  },\n  registry?: RegistryItemData | RegistryItemData[]\n  retry?: RetryOptions\n  ready?: evt => void\n  debug?: boolean\n}\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"globals"),": 라이브러리 전역변수 이름설정 옵션"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"registry"),": 라이브러리 등록 데이터 리스트"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"ready"),": 설정이 완료되었을 때의 이벤트 콜백"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"retry"),": 재시도 옵션(",Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/load"}),Object(t.b)("inlineCode",{parentName:"a"},"load")),"시 사용)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"debug"),": 디버깅 로그 활성화 (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"false"),")")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"retryoptions"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#retryoptions"}),"#"),"RetryOptions"),Object(t.b)("p",null,Object(t.b)("a",r({parentName:"p"},{href:"/loader-manual/docs/adv/load"}),Object(t.b)("inlineCode",{parentName:"a"},"load")),"시 스크립트를 ",Object(t.b)("inlineCode",{parentName:"p"},"DOM"),"에 추가시킨 후 검증단계에서 각 설정값을 사용"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-ts"}),"interface RetryOptions {\n  intervalTime?: number\n  maxCount?: number\n}\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"intervalTime"),": ",Object(t.b)("inlineCode",{parentName:"li"},"number")," - 재시도 대기시간, ms (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"200"),")"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"maxCount"),": ",Object(t.b)("inlineCode",{parentName:"li"},"number")," - 최대 재시도 횟수 (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"10"),")")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"사용-예제"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#사용-예제"}),"#"),"사용 예제"),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"옵션-정의하기"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#옵션-정의하기"}),"#"),"옵션 정의하기"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"// define loader config options\nconst loaderOptions = {\n  globals: {\n    ibsheet: 'IBSheet'  // default value\n  },\n  registry: [\n    // items you need\n  ],\n  retry: {\n    intervalTime: 200,  // default value\n    maxCount: 10        // default value\n  },\n  ready: function (evt) {\n    console.log('IBSheetLoader configuration complete.')\n  },\n  debug: false          // default value\n}\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"retry"),": ",Object(t.b)("a",r({parentName:"li"},{href:"#retryoptions"}),Object(t.b)("inlineCode",{parentName:"a"},"RetryOptions"))),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"registry"),": ",Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/registry#registryitemdata"}),Object(t.b)("inlineCode",{parentName:"a"},"RegistryItemData")),"|",Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/registry#registryitemdata"}),Object(t.b)("inlineCode",{parentName:"a"},"RegistryItemData[]")))),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"적용하기"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#적용하기"}),"#"),"적용하기"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// setup loader configuration\nloader.config(loaderOptions)\n")))}d.isMDXComponent=!0},90:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return p}));var t=n(0),r=n.n(t),i=r.a.createContext({}),l=function(e){var a=r.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},o=function(e){var a=l(e.components);return r.a.createElement(i.Provider,{value:a},e.children)};var c="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),d=l(n),p=t,s=d[o+"."+p]||d[p]||b[p]||i;return n?r.a.createElement(s,Object.assign({},{ref:a},c,{components:n})):r.a.createElement(s,Object.assign({},{ref:a},c))}));function p(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in a)hasOwnProperty.call(a,b)&&(o[b]=a[b]);o.originalType=e,o[c]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);