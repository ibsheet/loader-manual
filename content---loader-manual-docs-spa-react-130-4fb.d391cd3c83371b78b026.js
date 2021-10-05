(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{71:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return s}));n(0);var t=n(90);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={id:"react",title:"React Framework",sidebar_label:"React.js"},i=[{value:"사전 설정",id:"사전-설정",children:[{value:"CLI 설치",id:"cli-설치",children:[]},{value:"프로젝트 생성",id:"프로젝트-생성",children:[]},{value:"패키지 설치",id:"패키지-설치",children:[]},{value:"IBSheet 라이브러리",id:"ibsheet-라이브러리",children:[]},{value:"개발서버 실행",id:"개발서버-실행",children:[]}]},{value:"시작 패키지",id:"시작-패키지",children:[]},{value:"메인 컴포넌트",id:"메인-컴포넌트",children:[{value:"App.js",id:"appjs",children:[]},{value:"App.css",id:"appcss",children:[]}]},{value:"샘플 공유 데이터",id:"샘플-공유-데이터",children:[]},{value:"서브 컴포넌트",id:"서브-컴포넌트",children:[{value:"Home",id:"home",children:[]},{value:"Page1",id:"page1",children:[]},{value:"Page2",id:"page2",children:[]}]}],p={rightToc:i},o="wrapper";function s(e){var a=e.components,n=c(e,["components"]);return Object(t.b)(o,r({},p,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"가이드는 ",Object(t.b)("a",r({parentName:"p"},{href:"https://github.com/facebook/create-react-app#creating-an-app/"}),Object(t.b)("inlineCode",{parentName:"a"},"create-react-app")),"의 시작 패키지를 기준으로 작성되었습니다. ",Object(t.b)("br",null),"\n아래 가이드의 완성본은 ",Object(t.b)("a",r({parentName:"p"},{href:"/loader-manual/docs/etc/starter-packages"}),"시작 패키지")," 문서에서 확인할 수 있습니다. ",Object(t.b)("br",null),"\nReact Hooks, Redux 를 적용한 가이드는 ",Object(t.b)("a",r({parentName:"p"},{href:"/"}),"데모 패키지"),"에서 확인할 수 있습니다."),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"사전-설정"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#사전-설정"}),"#"),"사전 설정"),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"cli-설치"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#cli-설치"}),"#"),"CLI 설치"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"https://github.com/facebook/create-react-app#creating-an-app/"}),"https://github.com/facebook/create-react-app#creating-an-app/"))),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install -g create-react-app\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"프로젝트-생성"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#프로젝트-생성"}),"#"),"프로젝트 생성"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"create-react-app <project_dir>\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"패키지-설치"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#패키지-설치"}),"#"),"패키지 설치"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"cd <project_dir>\nyarn add @ibsheet/loader react-router-dom\n# using npm\n# npm i -S @ibsheet/loader react-router-dom\n")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"라우트 기능의 사용을 위해 ",Object(t.b)("inlineCode",{parentName:"li"},"react-router-dom")," 패키지를 추가로 설치합니다.")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"ibsheet-라이브러리"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#ibsheet-라이브러리"}),"#"),"IBSheet 라이브러리"),Object(t.b)("p",null,"만약 서버 URL을 사용한다면 이 단계는 생략합니다."),Object(t.b)("p",null,"프로젝트 폴더의 ",Object(t.b)("inlineCode",{parentName:"p"},"public")," 폴더에 ",Object(t.b)("inlineCode",{parentName:"p"},"ibsheet")," 라이브러리를 복사합니다."),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{}),"├── public/\n|  └── ibsheet/\n|     ├── css/\n|     ├── locale/\n|     ├── fonts/\n|     ├── ibsheet.js\n|     └── ibleaders.js\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"개발서버-실행"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#개발서버-실행"}),"#"),"개발서버 실행"),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn start\n# using npm\n# npm start\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"시작-패키지"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#시작-패키지"}),"#"),"시작 패키지"),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"메인-컴포넌트"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#메인-컴포넌트"}),"#"),"메인 컴포넌트"),Object(t.b)("p",null,"메인 컴포넌트 혹은 모듈에서 사용할 라이브러리들을 설정(등록)합니다."),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"appjs"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#appjs"}),"#"),"App.js"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/App.js")),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { BrowserRouter, Route, Link } from 'react-router-dom';\nimport loader from '@ibsheet/loader';\nimport Home from './components/home';\nimport Page1 from './components/page1';\nimport Page2 from './components/page2';\nimport './App.css';\n\nloader.config({\n  registry: [{\n    name: 'ibsheet',\n    baseUrl: '/ibsheet'\n  }]\n});\n\nconst App = () => {\n  const loaderVersion = loader.version;\n\n  return (\n    <div className=\"App\">\n      <p>@ibsheet/loader v{ loaderVersion }</p>\n      <BrowserRouter className=\"main\">\n        <div className=\"top-nav\">\n          <ul>\n            <li><Link to=\"/\">Home</Link></li>\n            <li><Link to=\"/page1\">Page1</Link></li>\n            <li><Link to=\"/page2\">Page2</Link></li>\n          </ul>\n        </div>\n        <Route exact path=\"/\" component={ Home }/>\n        <Route exact path=\"/page1\" component={ Page1 }/>\n        <Route exact path=\"/page2\" component={ Page2 }/>\n      </BrowserRouter>\n    </div>\n  );\n}\n\nexport default App\n\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"appcss"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#appcss"}),"#"),"App.css"),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/App.css")),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-css"}),".App { text-align: center }\n.App-logo { height: 40vmin }\n.home {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n.App-link { color: #09d3ac }\n.top-nav ul { padding: 0 }\n.top-nav li { display: inline-block }\n.top-nav li + li { margin-left: 1rem }\n")),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"샘플-공유-데이터"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#샘플-공유-데이터"}),"#"),"샘플 공유 데이터"),Object(t.b)("p",null,"각 컴포넌트에서 사용할 공용 샘플 데이터 파일을 만듭니다."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"../etc/spa-sample-data"}),Object(t.b)("inlineCode",{parentName:"a"},"src/shared/ibsheet-data.js")))),Object(t.b)("h2",null,Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"서브-컴포넌트"})),Object(t.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#서브-컴포넌트"}),"#"),"서브 컴포넌트"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"src/components/home.js")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"src/components/page1.js")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"src/components/page2.js"))),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"home"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#home"}),"#"),"Home"),Object(t.b)("p",null,"홈 화면에서는 ",Object(t.b)("inlineCode",{parentName:"p"},"ibsheet")," 라이브러리를 로드하지 않습니다. 만약 로드되어 있다면 컴포넌트 마운트시 ",Object(t.b)("inlineCode",{parentName:"p"},"unload")," 합니다."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/components/home.js")),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React, { useEffect } from 'react';\nimport loader from '@ibsheet/loader'\nimport logo from '../logo.svg';\n\nconst Home = () => {\n  const msg = 'IBSheetLoader for React!';\n\n  useEffect(() => {\n    loader.unload();\n  }, []);\n\n  return (\n    <div className=\"home\">\n      <img src={logo} className=\"App-logo\" alt=\"logo\" />\n      <p>{ msg }</p>\n    </div>\n  );\n}\n\nexport default Home;\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"page1"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#page1"}),"#"),"Page1"),Object(t.b)("p",null,"컴포넌트 마운트시 첫 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/components/page1.js")),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React, { useEffect } from 'react';\nimport loader from '@ibsheet/loader';\nimport { SheetSampleData } from '../shared/ibsheet-data';\n\nconst Page1 = () => {\n  const sheetId = 'sheet';\n  const sheetEl = 'sheetContainer';\n\n  useEffect(() => {\n    const { data, options } = SheetSampleData[0];\n\n    loader.createSheet({\n      id: sheetId,\n      el: sheetEl,\n      options,\n      data\n    })\n    return () => {\n      loader.removeSheet(sheetId);\n    };\n  }, []);\n\n  return (\n    <div>\n      <p>page1 works!</p>\n      <div id={ sheetEl }></div>\n    </div>\n  );\n}\n\nexport default Page1;\n")),Object(t.b)("h3",null,Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"anchor",id:"page2"})),Object(t.b)("a",r({parentName:"h3"},{"aria-hidden":!0,className:"hash-link",href:"#page2"}),"#"),"Page2"),Object(t.b)("p",null,"두 번째 샘플 데이터로 시트를 생성합니다. 컴포넌트가 제거될 때, 해당 테이블도 제거합니다."),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"src/components/page2.js")),Object(t.b)("pre",null,Object(t.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import React, { useEffect } from 'react';\nimport loader from '@ibsheet/loader';\nimport { SheetSampleData } from '../shared/ibsheet-data';\n\nconst Page2 = () => {\n  const sheetId = 'sheet';\n  const sheetEl = 'sheetContainer';\n\n  useEffect(() => {\n    const { data, options } = SheetSampleData[1];\n\n    loader.createSheet({\n      id: sheetId,\n      el: sheetEl,\n      options,\n      data\n    })\n    return () => {\n      loader.removeSheet(sheetId);\n    };\n  }, []);\n\n  return (\n    <div>\n      <p>page2 works!</p>\n      <div id={ sheetEl }></div>\n    </div>\n  );\n}\n\nexport default Page2\n")),Object(t.b)("p",null,"위의 가이드 내용을 바탕으로 구성한 소스코드 저장소를 다음 페이지에서 확인할 수 있습니다."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",r({parentName:"li"},{href:"/loader-manual/docs/etc/starter-packages"}),"문서 바로가기"))))}s.isMDXComponent=!0},90:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"b",(function(){return b}));var t=n(0),r=n.n(t),c=r.a.createContext({}),l=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},i=function(e){var a=l(e.components);return r.a.createElement(c.Provider,{value:a},e.children)};var p="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,p=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),s=l(n),b=t,h=s[i+"."+b]||s[b]||o[b]||c;return n?r.a.createElement(h,Object.assign({},{ref:a},p,{components:n})):r.a.createElement(h,Object.assign({},{ref:a},p))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,l=new Array(c);l[0]=s;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[p]="string"==typeof e?e:t,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);