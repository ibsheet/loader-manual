(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{57:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return d}));n(0);var t=n(92);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={id:"getting-started",title:"Getting Started",sidebar_label:"시작하기"},l=[{value:"IBSheetLoader?",id:"ibsheetloader",children:[]},{value:"설치하기",id:"설치하기",children:[{value:"Using browser",id:"using-browser",children:[]},{value:"Using node.js",id:"using-nodejs",children:[]}]},{value:"인스턴스 가져오기",id:"인스턴스-가져오기",children:[{value:"Browser(UMD) usage",id:"browserumd-usage",children:[]},{value:"Node.js(CommonJS) usage",id:"nodejscommonjs-usage",children:[]},{value:"ES6(ESModule), TypeScript usage",id:"es6esmodule-typescript-usage",children:[]}]},{value:"사용 예제",id:"사용-예제",children:[]}],o={rightToc:l},c="wrapper";function d(e){var a=e.components,n=i(e,["components"]);return Object(t.b)(c,r({},o,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"ibsheetloader"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#ibsheetloader"}),"#"),"IBSheetLoader?"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"IBSheetLoader"),"는 ",Object(t.b)("a",r({parentName:"p"},{href:"https://www.ibsheet.com"}),Object(t.b)("inlineCode",{parentName:"a"},"ibsheet")),"의 ",Object(t.b)("a",r({parentName:"p"},{href:"https://docs.ibleaders.com/ibsheet/v8/manual/#docs/intro/files"}),Object(t.b)("inlineCode",{parentName:"a"},"스크립트 파일들")),"을 웹페이지(HTML)에 동적으로 추가하기 위해 사용하는 라이브러리입니다."),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"설치하기"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#설치하기"}),"#"),"설치하기"),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"using-browser"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#using-browser"}),"#"),"Using browser"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-html"}),'<script src="https://unpkg.com/@ibsheet/loader/dist/umd/ibsheet-loader.min.js"><\/script>\n')),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"using-nodejs"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#using-nodejs"}),"#"),"Using node.js"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"# using npm\n$ npm install --save @ibsheet/loader\n\n# using yarn (https://yarnpkg.com/)\n$ yarn add @ibsheet/loader\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"인스턴스-가져오기"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#인스턴스-가져오기"}),"#"),"인스턴스 가져오기"),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"browserumd-usage"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#browserumd-usage"}),"#"),"Browser(UMD) usage"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"var loader = window.IBSheetLoader\n")),Object(t.b)("hr",null),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"nodejscommonjs-usage"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#nodejscommonjs-usage"}),"#"),"Node.js(CommonJS) usage"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"const loader = require('@ibsheet/loader')\n// or\n// const { IBSheetLoader: loader } = require('@ibsheet/loader')\n")),Object(t.b)("hr",null),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"es6esmodule-typescript-usage"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#es6esmodule-typescript-usage"}),"#"),"ES6(ESModule), TypeScript usage"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-ts"}),"import loader from '@ibsheet/loader'\n// or\n// import { IBSheetLoader as loader } from '@ibsheet/loader'\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"사용-예제"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#사용-예제"}),"#"),"사용 예제"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"import loader from '@ibsheet/loader'\n\nconst ibsheetLib = {\n  name: 'ibsheet',\n  baseUrl: '<publicpath>/ibsheet'\n}\n\nloader.config({\n  registry: [ibsheetLib]\n})\n\nfunction testLoad() {\n  // add 'loaded' event listener\n  loader.once('loaded', evt => {\n    // ibsheet: IBSheetStatic\n    const ibsheet = this.getIBSheetStatic()\n    // todo something\n  })\n\n  // load ibsheet\n  loader.load() // or loader.load('ibsheet')\n}\n")),Object(t.b)("p",null,"위 예제에 대한 자세한 가이드는 아래 목록을 참고하세요."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/load"}),Object(t.b)("inlineCode",{parentName:"a"},"load")," 메소드")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/adv/events#loaded"}),Object(t.b)("inlineCode",{parentName:"a"},"loaded")," 이벤트")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/ibsheet/create-sheet#getibsheetstatic"}),Object(t.b)("inlineCode",{parentName:"a"},"getIBSheetStatic")," 메소드")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"https://docs.ibleaders.com/ibsheet/v8/manual/#docs/static/static"}),Object(t.b)("inlineCode",{parentName:"a"},"IBSheetStatic")," 객체"))))}d.isMDXComponent=!0},92:function(e,a,n){"use strict";n.d(a,"a",(function(){return l})),n.d(a,"b",(function(){return b}));var t=n(0),r=n.n(t),i=r.a.createContext({}),s=function(e){var a=r.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},l=function(e){var a=s(e.components);return r.a.createElement(i.Provider,{value:a},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),d=s(n),b=t,h=d[l+"."+b]||d[b]||c[b]||i;return n?r.a.createElement(h,Object.assign({},{ref:a},o,{components:n})):r.a.createElement(h,Object.assign({},{ref:a},o))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[o]="string"==typeof e?e:t,s[1]=l;for(var b=2;b<i;b++)s[b]=n[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);