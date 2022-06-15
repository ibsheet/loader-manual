(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{102:function(e,n,a){"use strict";a.d(n,"a",(function(){return o})),a.d(n,"b",(function(){return p}));var t=a(0),r=a.n(t),i=r.a.createContext({}),l=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},o=function(e){var n=l(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var b="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,b=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),d=l(a),p=t,s=d[o+"."+p]||d[p]||c[p]||i;return a?r.a.createElement(s,Object.assign({},{ref:n},b,{components:a})):r.a.createElement(s,Object.assign({},{ref:n},b))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[b]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},53:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return d}));a(0);var t=a(102);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l={id:"config",title:"Configuration",sidebar_label:"설정하기"},o=[{value:"환경설정",id:"환경설정",children:[]},{value:"인터페이스",id:"인터페이스",children:[{value:"LoaderConfigOptions",id:"loaderconfigoptions",children:[]},{value:"RetryOptions",id:"retryoptions",children:[]}]},{value:"Config 사용 예제",id:"config-사용-예제",children:[]}],b={rightToc:o},c="wrapper";function d(e){var n=e.components,a=i(e,["components"]);return Object(t.b)(c,r({},b,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"환경설정"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#환경설정"}),"#"),"환경설정"),Object(t.b)("p",null,Object(t.b)("a",r({parentName:"p"},{href:"/loader-manual/docs/adv/load"}),Object(t.b)("inlineCode",{parentName:"a"},"load")),"기능을 사용하기 전에 ",Object(t.b)("inlineCode",{parentName:"p"},"config"),"기능을 통해 기본 설정을 변경하거나 추가 할 수 있습니다."),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"인터페이스"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#인터페이스"}),"#"),"인터페이스"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-ts"}),"interface IBSheetLoader extends EventEmitter {\n  config: (options?: LoaderConfigOptions) => this\n  // ...\n}\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"loaderconfigoptions"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#loaderconfigoptions"}),"#"),"LoaderConfigOptions"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-ts"}),"interface LoaderConfigOptions {\n  globals?: {\n    ibsheet?: string\n  },\n  registry?: RegistryItemData | RegistryItemData[]\n  retry?: RetryOptions\n  ready?: evt => void\n  debug?: boolean\n  autoload?: boolean\n}\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"globals"),": 라이브러리 전역변수 이름설정 옵션 (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"{ ibsheet: 'IBSheet' }"),")"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"registry"),": 라이브러리 등록 데이터 리스트"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"ready"),": 설정이 완료되었을 때의 이벤트 콜백"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"retry"),": 재시도 옵션(",Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/load"}),Object(t.b)("inlineCode",{parentName:"a"},"load")),"시 사용 (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"{ intervalTime: 200"),", ",Object(t.b)("inlineCode",{parentName:"li"},"maxCount: 50 }"),")"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"debug"),": 디버그용 로그 활성화 (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"false"),")"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"autoload"),": ibsheet 라이브러리 자동 로드 여부 (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"true"),")")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"retryoptions"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#retryoptions"}),"#"),"RetryOptions"),Object(t.b)("p",null,Object(t.b)("a",r({parentName:"p"},{href:"/loader-manual/docs/adv/load"}),Object(t.b)("inlineCode",{parentName:"a"},"load")),"시 스크립트를 ",Object(t.b)("inlineCode",{parentName:"p"},"DOM"),"에 추가시킨 후 검증단계에서 각 설정값을 사용"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-ts"}),"interface RetryOptions {\n  intervalTime?: number\n  maxCount?: number\n}\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"intervalTime"),": ",Object(t.b)("inlineCode",{parentName:"li"},"number")," - 재시도 대기시간, ms (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"200"),")"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"maxCount"),": ",Object(t.b)("inlineCode",{parentName:"li"},"number")," - 최대 재시도 횟수 (기본값: ",Object(t.b)("inlineCode",{parentName:"li"},"50"),")")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"config-사용-예제"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#config-사용-예제"}),"#"),"Config 사용 예제"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"// loader 인스턴스 가져오기\nimport loader from '@ibsheet/loader'\n// 옵션 정의하기\nconst loaderOptions = {\n  globals: {\n    ibsheet: 'IBSheet'  // default\n  },\n  registry: [\n    // items you need\n    {\n      name: 'ibsheet',\n      baseUrl: '<publicpath>/ibsheet'\n      ...\n    }\n  ],\n  retry: {\n    intervalTime: 200,  // default\n    maxCount: 50        // default\n  },\n  ready: evt => {\n    console.log('IBSheetLoader configuration complete.')\n  },\n  debug: false          // default\n}\n\n// 옵션 적용하기\nloader.config(loaderOptions)\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"retry"),": ",Object(t.b)("a",r({parentName:"li"},{href:"#retryoptions"}),Object(t.b)("inlineCode",{parentName:"a"},"RetryOptions"))),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"registry"),": ",Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/registry#registryitemdata"}),Object(t.b)("inlineCode",{parentName:"a"},"RegistryItemData")),"|",Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/registry#registryitemdata"}),Object(t.b)("inlineCode",{parentName:"a"},"RegistryItemData[]")))))}d.isMDXComponent=!0}}]);