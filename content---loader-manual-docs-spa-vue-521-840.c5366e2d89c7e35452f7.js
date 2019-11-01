(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{75:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"rightToc",(function(){return c})),n.d(a,"default",(function(){return p}));n(0);var t=n(90);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={id:"vue",title:"Vue Framework",sidebar_label:"Vue.js"},c=[{value:"사전 설정",id:"사전-설정",children:[{value:"CLI 설치",id:"cli-설치",children:[]},{value:"프로젝트 생성",id:"프로젝트-생성",children:[]},{value:"패키지 설치",id:"패키지-설치",children:[]},{value:"IBSheet 라이브러리",id:"ibsheet-라이브러리",children:[]},{value:"개발서버 실행",id:"개발서버-실행",children:[]}]},{value:"메인 컴포넌트",id:"메인-컴포넌트",children:[{value:"main.js",id:"mainjs",children:[]},{value:"App.vue",id:"appvue",children:[]}]},{value:"샘플 공유 데이터",id:"샘플-공유-데이터",children:[]},{value:"서브 컴포넌트",id:"서브-컴포넌트",children:[{value:"HelloWorld",id:"helloworld",children:[]},{value:"Page1",id:"page1",children:[]},{value:"Page2",id:"page2",children:[]}]},{value:"시작 패키지",id:"시작-패키지",children:[]}],b={rightToc:c},s="wrapper";function p(e){var a=e.components,n=l(e,["components"]);return Object(t.b)(s,r({},b,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"이 가이드는 ",Object(t.b)("a",r({parentName:"p"},{href:"https://cli.vuejs.org/"}),Object(t.b)("inlineCode",{parentName:"a"},"@vue/cli")),"의 시작 패키지를 기준으로 작성되었습니다. 아래 가이드의 완성본은 ",Object(t.b)("a",r({parentName:"p"},{href:"/loader-manual/docs/etc/starter-packages"}),"시작 패키지")," 문서에서 확인할 수 있습니다."),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"사전-설정"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#사전-설정"}),"#"),"사전 설정"),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"cli-설치"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#cli-설치"}),"#"),"CLI 설치"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"https://cli.vuejs.org/"}),"https://cli.vuejs.org/"))),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install -g @vue/cli @vue/cli-service\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"프로젝트-생성"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#프로젝트-생성"}),"#"),"프로젝트 생성"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"vue create <project_dir>\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"패키지-설치"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#패키지-설치"}),"#"),"패키지 설치"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"cd <project_dir>\nyarn add @ibsheet/loader vue-router\nyarn add -D node-sass sass-loader\n# using npm\n# npm i -S @ibsheet/loader vue-router\n# npm i -D node-sass sass-loader\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"라우트 기능의 사용을 위해 ",Object(t.b)("inlineCode",{parentName:"li"},"vue-router")," 패키지를 추가로 설치합니다."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"scss")," 스타일 시트 언어를 사용하기 위해 ",Object(t.b)("inlineCode",{parentName:"li"},"node-sass"),", ",Object(t.b)("inlineCode",{parentName:"li"},"sass-loader"),"를 설치합니다.")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"ibsheet-라이브러리"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#ibsheet-라이브러리"}),"#"),"IBSheet 라이브러리"),Object(t.b)("p",null,"만약 서버 URL을 사용한다면 이 단계는 생략합니다."),Object(t.b)("p",null,"프로젝트 폴더의 ",Object(t.b)("inlineCode",{parentName:"p"},"public")," 폴더에 ",Object(t.b)("inlineCode",{parentName:"p"},"ibsheet")," 라이브러리를 복사합니다."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{}),"├── public/\n|  └── ibsheet/\n|     ├── css/\n|     ├── locale/\n|     ├── fonts/\n|     ├── ibsheet.js\n|     └── ibleaders.js\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"개발서버-실행"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#개발서버-실행"}),"#"),"개발서버 실행"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn serve\n# using npm\n# npm serve\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"메인-컴포넌트"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#메인-컴포넌트"}),"#"),"메인 컴포넌트"),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"mainjs"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#mainjs"}),"#"),"main.js"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/main.js")),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"import Vue from 'vue'\nimport VueRouter from 'vue-router'\nimport App from './App.vue'\n\n// 라우터 사용 추가\nVue.use(VueRouter)\nVue.config.productionTip = false\n\nnew Vue({\n  render: h => h(App),\n}).$mount('#app')\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"appvue"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#appvue"}),"#"),"App.vue"),Object(t.b)("p",null,"메인 컴포넌트 혹은 모듈에서 사용할 라이브러리들을 설정(등록)합니다."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/App.vue")),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"template"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#template"}),"#"),"template"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-html"}),'<div id="app">\n  <p>@ibsheet/loader v{{loaderVersion}}</p>\n  <div class="main-navs">\n    <h3>Go to Pages:</h3>\n    <ul>\n      <li><router-link to="/">Home</router-link></li>\n      <li><router-link to="/page1">Page1</router-link></li>\n      <li><router-link to="/page2">Page2</router-link></li>\n    </ul>  \n  </div>\n  <div class="main">\n    <router-view></router-view>\n  </div>\n</div>\n')),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"script"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#script"}),"#"),"script"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"import loader from '@ibsheet/loader'\nimport VueRouter from 'vue-router'\nimport HelloWorld from './components/HelloWorld.vue'\nimport Page1 from './components/Page1.vue'\nimport Page2 from './components/Page2.vue'\n\nconst router = new VueRouter({\n  mode: 'history',\n  routes: [\n    { path: '/', name: 'home', component: HelloWorld },\n    { path: '/page1', name: 'page1', component: Page1 },\n    { path: '/page2', name: 'page2', component: Page2 }\n  ]\n})\n\nloader.config({\n  registry: [{\n    name: 'ibsheet',\n    baseUrl: '/ibsheet'\n  }]\n})\n\nexport default {\n  name: 'app',\n  data() {\n    return {\n      loaderVersion: loader.version\n    }\n  },\n  router\n}\n")),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"style"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#style"}),"#"),"style"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},'lang="scss"')),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-scss"}),"#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n.main-navs {\n  > h3 {\n    margin: 40px 0 0;  \n  }\n  > ul {\n    list-style-type: none;\n    padding: 0;\n    > li {\n      display: inline-block;\n      margin: 0 10px;\n      a > {\n        color: #42b983;\n      }\n    }\n  }\n}\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"샘플-공유-데이터"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#샘플-공유-데이터"}),"#"),"샘플 공유 데이터"),Object(t.b)("p",null,"각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"../etc/spa-sample-data"}),Object(t.b)("inlineCode",{parentName:"a"},"src/shared/ibsheet-data.js")))),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"서브-컴포넌트"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#서브-컴포넌트"}),"#"),"서브 컴포넌트"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"src/components/HelloWorld.vue")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"src/components/Page1.vue")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"src/components/page2.vue"))),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"helloworld"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#helloworld"}),"#"),"HelloWorld"),Object(t.b)("p",null,"홈 화면에서는 ",Object(t.b)("inlineCode",{parentName:"p"},"ibsheet")," 라이브러리를 로드하지 않습니다. 만약 로드되어 있다면 컴포넌트 마운트시 ",Object(t.b)("inlineCode",{parentName:"p"},"unload")," 합니다."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/components/HelloWorld.vue")),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"template-1"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#template-1"}),"#"),"template"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-html"}),'<div>\n  <img alt="Vue logo" src="../assets/logo.png">\n  <h1>{{ msg }}</h1>\n</div>\n')),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"script-1"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#script-1"}),"#"),"script"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"import loader from '@ibsheet/loader'\nexport default {\n  name: 'HelloWorld',\n  data() {\n    return {\n      msg: 'IBSheetLoader for Vue!'\n    }\n  },\n  mounted() {\n    loader.unload()\n  }\n}\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"page1"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#page1"}),"#"),"Page1"),Object(t.b)("p",null,"컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/components/Page1.vue")),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"template-2"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#template-2"}),"#"),"template"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-html"}),'<div>\n  <p>page1 works!</p>\n  <div id="sheetContainer"></div>\n</div>\n')),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"script-2"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#script-2"}),"#"),"script"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"import loader from '@ibsheet/loader'\nimport { SheetSampleData } from '../shared/ibsheet-data'\n\nconst SHEET_ID = 'sheet'\n\nexport default {\n  mounted() {\n    const { data, options } = SheetSampleData[0]\n    loader.createSheet({\n      id: SHEET_ID,\n      el: 'sheetContainer',\n      options,\n      data\n    })\n  },\n  beforeDestroy() {\n    loader.removeSheet(SHEET_ID)\n  }\n}\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"page2"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#page2"}),"#"),"Page2"),Object(t.b)("p",null,"두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/components/Page2.vue")),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"template-3"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#template-3"}),"#"),"template"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-html"}),'<div>\n  <p>page2 works!</p>\n  <div id="sheetContainer"></div>\n</div>\n')),Object(t.b)("h4",null,Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"script-3"})),Object(t.b)("a",r({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#script-3"}),"#"),"script"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-js"}),"import loader from '@ibsheet/loader'\nimport { SheetSampleData } from '../shared/ibsheet-data'\n\nconst SHEET_ID = 'sheet'\n\nexport default {\n  mounted() {\n    const { data, options } = SheetSampleData[1]\n    loader.createSheet({\n      id: SHEET_ID,\n      el: 'sheetContainer',\n      options,\n      data\n    })\n  },\n  beforeDestroy() {\n    loader.removeSheet(SHEET_ID)\n  }\n}\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"시작-패키지"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#시작-패키지"}),"#"),"시작 패키지"),Object(t.b)("p",null,"위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/etc/starter-packages"}),"문서 바로가기"))))}p.isMDXComponent=!0},90:function(e,a,n){"use strict";n.d(a,"a",(function(){return c})),n.d(a,"b",(function(){return o}));var t=n(0),r=n.n(t),l=r.a.createContext({}),i=function(e){var a=r.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},c=function(e){var a=i(e.components);return r.a.createElement(l.Provider,{value:a},e.children)};var b="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,b=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),o=t,h=p[c+"."+o]||p[o]||s[o]||l;return n?r.a.createElement(h,Object.assign({},{ref:a},b,{components:n})):r.a.createElement(h,Object.assign({},{ref:a},b))}));function o(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c[b]="string"==typeof e?e:t,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);