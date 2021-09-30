(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{77:function(e,s,n){"use strict";n.r(s),n.d(s,"frontMatter",(function(){return o})),n.d(s,"rightToc",(function(){return i})),n.d(s,"default",(function(){return g}));n(0);var a=n(90);function r(){return(r=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function t(e,s){if(null==e)return{};var n,a,r=function(e,s){if(null==e)return{};var n,a,r={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],s.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={id:"starter-packages",title:"Starter Packages",sidebar_label:"시작 패키지"},i=[{value:"시작 패키지",id:"시작-패키지",children:[]},{value:"예제 데이터 파일",id:"예제-데이터-파일",children:[]}],d={rightToc:i},m="wrapper";function g(e){var s=e.components,n=t(e,["components"]);return Object(a.b)(m,r({},d,n,{components:s,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"시작-패키지"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#시작-패키지"}),"#"),"시작 패키지"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/ibsheet/loader-browser-starter"}),"Browser 시작 패키지 (http-server, docker-nginx)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/ibsheet/loader-webpack-starter"}),"Webpack 시작 패키지")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/ibsheet/loader-ng-starter"}),"Angular 시작 패키지 (@angular/cli)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/ibsheet/loader-vue-starter"}),"Vue 시작 패키지 (@vue/cli)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/ibsheet/loader-react-starter"}),"React 시작 패키지 (create-react-app)"))),Object(a.b)("h2",null,Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"예제-데이터-파일"})),Object(a.b)("a",r({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#예제-데이터-파일"}),"#"),"예제 데이터 파일"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"angular: ",Object(a.b)("inlineCode",{parentName:"li"},"src/shared/ibsheet-data.ts")),Object(a.b)("li",{parentName:"ul"},"vue: ",Object(a.b)("inlineCode",{parentName:"li"},"src/shared/ibsheet-data.js")),Object(a.b)("li",{parentName:"ul"},"react: ",Object(a.b)("inlineCode",{parentName:"li"},"src/shared/ibsheet-data.js"))),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"// ibsheet sample data\nexport const SheetSampleData = [\n  // sheet1\n  {\n    data: [\n      { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',\n        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },\n      { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',\n        sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' }\n    ],\n    options: {\n      Def: { Col: { RelWidth: 1 } },\n      Cols: [\n        { Header: '이름', Name: 'sa_nm', Type: 'Text' },\n        { Header: '사원번호', Name: 'sa_id', Type: 'Text', Align: 'center' },\n        { Header: '부서', Name: 'sa_dept', Type: 'Enum',\n          Enum: '|경영지원|총무|인사|설계|시공1|시공2',\n          EnumKeys: '|01|02|03|04|05|06' },\n        { Header: '직급', Name: 'sa_position', Type: 'Enum',\n          Enum: '|대표|상무|이사|부장|차장|과장|대리|사원',\n          EnumKeys: '|A1|A2|A3|B0|B1|C4|C5|C6' },\n        { Header: '입사일', Name: 'sa_enterdate', Type: 'Date',\n          Width: 100, Format: 'yyyy/MM/dd' },\n        { Header: '비고', Name: 'sa_desc', Type: 'Lines' }\n      ]\n    }\n  },\n  // sheet2\n  {\n    options: {\n      Def: {\n        Col: { Align: 'Left', RelWidth: '1' }\n      },\n      Cfg: {\n        CanSort: '0'\n      },\n      Cols: [\n        { Header: '부서명', Type: 'Text', Name: 'sDept' },\n        { Header: '팀명', Type: 'Text', Name: 'sTeam' },\n        { Header: '직급', Type: 'Text', Name: 'sPosition' },\n        { Header: '성명', Type: 'Text', Name: 'sName' },\n        { Header: '성별', Type: 'Enum', Name: 'sGender', Align: 'Center',\n          Enum: '|男|女|기타', EnumKeys: '|男|女|기타' },\n        { Header: '연령대', Type: 'Enum', Name: 'sAgeRange', Align: 'Center',\n          Enum: '|10대|20대|30대|40대|50대|60대',\n          EnumKeys: '|10대|20대|30대|40대|50대|60대' },\n        { Header: '거주지', Type: 'Text', Name: 'sAddr', Align: 'Center' },\n        { Header: '나이', Type: 'Int', Name: 'sAge',\n          Width: '130', Align: 'Right' },\n        { Header: '근속기간(년)', Type: 'Int',\n          Name: 'sPeriod', Align: 'Right' },\n        { Header: '급여', Type: 'Int', Name: 'sSalary',\n          Align: 'Right', Format: '#,###' },\n        { Header: '상여', Type: 'Int', Name: 'sBonus',\n          Align: 'Right', Format: '#,###' }\n      ]\n    },\n    data: [\n      { sDept: 'CEO', sTeam: '임원', sPosition: '대표이사', sName: '황정열',\n        sGender: '男', sAgeRange: '50대', sAddr: '서울', sAge: 50, sPeriod: 15,\n        sSalary: 10122200, sBonus: 1012220 },\n      { sDept: 'SI사업부', sTeam: '임원', sPosition: '상무', sName: '강대호',\n        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 47, sPeriod: 15,\n        sSalary: 6756170, sBonus: 675617 },\n      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '부장', sName: '김미경',\n        sGender: '女', sAgeRange: '30대', sAddr: '강원', sAge: 39, sPeriod: 12,\n        sSalary: 4180950, sBonus: 418095 },\n      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '과장', sName: '김선희',\n        sGender: '女', sAgeRange: '30대', sAddr: '경기', sAge: 34, sPeriod: 7,\n        sSalary: 3217000, sBonus: 321700 },\n      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '과장', sName: '최세희',\n        sGender: '女', sAgeRange: '30대', sAddr: '경기', sAge: 32, sPeriod: 3,\n        sSalary: 2750800, sBonus: 275080 },\n      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '대리', sName: '이명희',\n        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 29, sPeriod: 3,\n        sSalary: 2571900, sBonus: 257190 },\n      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '사원', sName: '노효일',\n        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 23, sPeriod: 1,\n        sSalary: 1520150, sBonus: 152020 },\n      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '사원', sName: '원영국',\n        sGender: '男', sAgeRange: '20대', sAddr: '경기', sAge: 28, sPeriod: 2,\n        sSalary: 2557000, sBonus: 255700 },\n      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '사원', sName: '이지선',\n        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 24, sPeriod: 2,\n        sSalary: 2007500, sBonus: 200750 },\n      { sDept: '인사부', sTeam: '인사1팀', sPosition: '부장', sName: '김상도',\n        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 40, sPeriod: 9,\n        sSalary: 4290850, sBonus: 429085 },\n      { sDept: '인사부', sTeam: '인사1팀', sPosition: '대리', sName: '한보라',\n        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 28, sPeriod: 5,\n        sSalary: 1959500, sBonus: 195950 },\n      { sDept: '인사부', sTeam: '인사2팀', sPosition: '사원', sName: '장태우',\n        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 28, sPeriod: 1,\n        sSalary: 1959500, sBonus: 195950 },\n      { sDept: '인사부', sTeam: '인사2팀', sPosition: '차장', sName: '정필석',\n        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 40, sPeriod: 4,\n        sSalary: 3851150, sBonus: 385120 },\n      { sDept: '솔루션사업부', sTeam: '임원', sPosition: '이사', sName: '조성목',\n        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 41, sPeriod: 15,\n        sSalary: 6313700, sBonus: 631370 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '부장', sName: '유봉근',\n        sGender: '男', sAgeRange: '40대', sAddr: '서울', sAge: 42, sPeriod: 5,\n        sSalary: 5187610, sBonus: 518760 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '차장', sName: '오필환',\n        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 37, sPeriod: 4,\n        sSalary: 3412510, sBonus: 341250 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '차장', sName: '송복석',\n        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 39, sPeriod: 6,\n        sSalary: 3871680, sBonus: 387170 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '과장', sName: '김남연',\n        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 36, sPeriod: 4,\n        sSalary: 3500700, sBonus: 350070 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '대리', sName: '한혜선',\n        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 29, sPeriod: 2,\n        sSalary: 2746000, sBonus: 274600 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '조미미',\n        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 25, sPeriod: 2,\n        sSalary: 2297040, sBonus: 229700 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '고은혜',\n        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 26, sPeriod: 1,\n        sSalary: 2390740, sBonus: 239070 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '성열',\n        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 27, sPeriod: 1,\n        sSalary: 2409000, sBonus: 240900 },\n      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '김영중',\n        sGender: '女', sAgeRange: '20대', sAddr: '인천', sAge: 28, sPeriod: 3,\n        sSalary: 2871100, sBonus: 287110 },\n      { sDept: '솔루션사업부', sTeam: '개발2팀', sPosition: '부장', sName: '김명호',\n        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 38, sPeriod: 8,\n        sSalary: 3709800, sBonus: 370980 },\n      { sDept: '솔루션사업부', sTeam: '개발2팀', sPosition: '사원', sName: '하태선',\n        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 28, sPeriod: 1,\n        sSalary: 2415010, sBonus: 241500 },\n      { sDept: '솔루션사업부', sTeam: '영업팀', sPosition: '사원', sName: '김정민',\n        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 32, sPeriod: 3,\n        sSalary: 2989010, sBonus: 298900 },\n      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '차장', sName: '장성훈',\n        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 37, sPeriod: 5,\n        sSalary: 3880150, sBonus: 388020 },\n      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '차장', sName: '강윤식',\n        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 35, sPeriod: 7,\n        sSalary: 3855600, sBonus: 385560 },\n      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '대리', sName: '김수연',\n        sGender: '女', sAgeRange: '30대', sAddr: '경기', sAge: 30, sPeriod: 1,\n        sSalary: 2698800, sBonus: 269880 },\n      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '대리', sName: '정은지',\n        sGender: '女', sAgeRange: '30대', sAddr: '서울', sAge: 30, sPeriod: 1,\n        sSalary: 2698800, sBonus: 269880 },\n      { sDept: '영업팀', sTeam: '영업1팀', sPosition: '사원', sName: '정창호',\n        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 27, sPeriod: 1,\n        sSalary: 1897500, sBonus: 189750 },\n      { sDept: '영업팀', sTeam: '영업2팀', sPosition: '대리', sName: '김대현',\n        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 33, sPeriod: 5,\n        sSalary: 2709800, sBonus: 270980 },\n      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '소장', sName: '안남주',\n        sGender: '女', sAgeRange: '30대', sAddr: '서울', sAge: 38, sPeriod: 10,\n        sSalary: 4891350, sBonus: 489140 },\n      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '차장', sName: '이민수',\n        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 38, sPeriod: 8,\n        sSalary: 3845010, sBonus: 384500 },\n      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '차장', sName: '최갑석',\n        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 38, sPeriod: 5,\n        sSalary: 3500700, sBonus: 350070 },\n      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '차장', sName: '김태헌',\n        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 37, sPeriod: 6,\n        sSalary: 3489000, sBonus: 348900 },\n      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '과장', sName: '박정석',\n        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 32, sPeriod: 3,\n        sSalary: 2885000, sBonus: 288500 },\n      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '과장', sName: '권기윤',\n        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 37, sPeriod: 7,\n        sSalary: 3450100, sBonus: 345010 },\n      { sDept: '경영지원팀', sTeam: '경영1팀', sPosition: '차장', sName: '김승운',\n        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 39, sPeriod: 2,\n        sSalary: 3505700, sBonus: 350570 },\n      { sDept: '경영지원팀', sTeam: '경영1팀', sPosition: '사원', sName: '이해영',\n        sGender: '女', sAgeRange: '20대', sAddr: '경기', sAge: 23, sPeriod: 1,\n        sSalary: 1800800, sBonus: 180080 }\n    ]\n  }\n];\n\n")))}g.isMDXComponent=!0},90:function(e,s,n){"use strict";n.d(s,"a",(function(){return i})),n.d(s,"b",(function(){return l}));var a=n(0),r=n.n(a),t=r.a.createContext({}),o=function(e){var s=r.a.useContext(t),n=s;return e&&(n="function"==typeof e?e(s):Object.assign({},s,e)),n},i=function(e){var s=o(e.components);return r.a.createElement(t.Provider,{value:s},e.children)};var d="mdxType",m={inlineCode:"code",wrapper:function(e){var s=e.children;return r.a.createElement(r.a.Fragment,{},s)}},g=Object(a.forwardRef)((function(e,s){var n=e.components,a=e.mdxType,t=e.originalType,i=e.parentName,d=function(e,s){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===s.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),g=o(n),l=a,p=g[i+"."+l]||g[l]||m[l]||t;return n?r.a.createElement(p,Object.assign({},{ref:s},d,{components:n})):r.a.createElement(p,Object.assign({},{ref:s},d))}));function l(e,s){var n=arguments,a=s&&s.mdxType;if("string"==typeof e||a){var t=n.length,o=new Array(t);o[0]=g;var i={};for(var m in s)hasOwnProperty.call(s,m)&&(i[m]=s[m]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<t;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);