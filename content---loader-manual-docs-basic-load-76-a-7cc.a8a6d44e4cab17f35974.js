(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{61:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"rightToc",(function(){return b})),n.d(a,"default",(function(){return s}));n(0);var t=n(90);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={id:"load",title:"Load",sidebar_label:"스크립트 불러오기"},b=[{value:"동작 방식",id:"동작-방식",children:[{value:"허용 파라메터 유형",id:"허용-파라메터-유형",children:[]},{value:"다이어그램",id:"다이어그램",children:[]}]},{value:"사용 예제",id:"사용-예제",children:[{value:"기본",id:"기본",children:[]},{value:"사전 설정 사용",id:"사전-설정-사용",children:[]},{value:"업데이트 & 리로드",id:"업데이트--리로드",children:[]}]}],c={rightToc:b},o="wrapper";function s(e){var a=e.components,n=i(e,["components"]);return Object(t.b)(o,r({},c,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"동작-방식"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#동작-방식"}),"#"),"동작 방식"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"load")," 메소드는 기본적으로 ",Object(t.b)("inlineCode",{parentName:"p"},"ibsheet")," 라이브러리를 로드한다."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"ibsheet"),"가 ",Object(t.b)("strong",null,"로드되어 있지 않은 상태"),"이면, 인자에 상관없이 ",Object(t.b)("inlineCode",{parentName:"li"},"ibsheet")," 라이브러리 로드를 시도하고, 로드할 정보가 없다면 오류를 발생시킨다."),Object(t.b)("li",{parentName:"ul"},"인자로 ",Object(t.b)("strong",null,"새로운")," ",Object(t.b)("inlineCode",{parentName:"li"},"ibsheet"),"를 주었을 때, 기존 라이브러리를 언로드하고 새로운 라이브러리를 로드한다."),Object(t.b)("li",{parentName:"ul"},"인자로 ",Object(t.b)("strong",null,"동일한 버전"),"의 ",Object(t.b)("inlineCode",{parentName:"li"},"ibsheet"),"를 주었을 때, 업데이트 후 라이브러리를 다시 로드한다."),Object(t.b)("li",{parentName:"ul"},"이외의 경우, 이미 라이브러리가 로드되어있다면 아무일도 하지 않는다.")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"허용-파라메터-유형"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#허용-파라메터-유형"}),"#"),"허용 파라메터 유형"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"undefined")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"string"),": ",Object(t.b)("inlineCode",{parentName:"li"},"alias")," or ",Object(t.b)("inlineCode",{parentName:"li"},"URL")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"object"),": ",Object(t.b)("a",r({parentName:"li"},{href:"./registry#registryitemdata"}),Object(t.b)("inlineCode",{parentName:"a"},"RegistryItemData"))),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"array"),": ",Object(t.b)("inlineCode",{parentName:"li"},"(alias|URL|RegistryItemData)[]"))),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"다이어그램"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#다이어그램"}),"#"),"다이어그램"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"../appendix/load-flow"}),"로드 플로우"))),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"사용-예제"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#사용-예제"}),"#"),"사용 예제"),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"기본"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#기본"}),"#"),"기본"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// define ibsheet for loader registry\nconst ibsheetLibrary = {\n  name: 'ibsheet',\n  baseUrl: '<publicpath>/ibsheet'\n}\n\n// load ibsheet\nloader.load(ibsheetLibrary)\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"사전-설정-사용"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#사전-설정-사용"}),"#"),"사전 설정 사용"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// define ibsheet libs for loader registry\nconst ibsheetLibrary1 = {\n  name: 'ibsheet',\n  baseUrl: '<publicpath>/ibsheet/v1'\n  version: 1,\n  // ...\n}\nconst ibsheetLibrary2 = {\n  name: 'ibsheet',\n  baseUrl: '<publicpath>/ibsheet/v2'\n  version: 2,\n  // ...\n}\n\n// setup loader configuration\nloader.config({\n  registry: [\n    ibsheetLibrary1,\n    ibsheetLibrary2\n  ]\n})\n\n// load ibsheet version 2\nloader.load('ibsheet@2')\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"업데이트--리로드"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#업데이트--리로드"}),"#"),"업데이트 & 리로드"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"// get global loader instance\nimport loader from '@ibsheet/loader'\n\n// load ibsheet\nloader.load({\n  name: 'ibsheet',\n  baseUrl: '<publicpath>/ibsheet',\n  locale: 'ko'\n})\n\n// update and reload ibsheet\nloader.load({\n  name: 'ibsheet',\n  locale: 'en'\n})\n")))}s.isMDXComponent=!0},90:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t),i=r.a.createContext({}),l=function(e){var a=r.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},b=function(e){var a=l(e.components);return r.a.createElement(i.Provider,{value:a},e.children)};var c="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,b=e.parentName,c=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),s=l(n),d=t,h=s[b+"."+d]||s[d]||o[d]||i;return n?r.a.createElement(h,Object.assign({},{ref:a},c,{components:n})):r.a.createElement(h,Object.assign({},{ref:a},c))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=s;var b={};for(var o in a)hasOwnProperty.call(a,o)&&(b[o]=a[o]);b.originalType=e,b[c]="string"==typeof e?e:t,l[1]=b;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);