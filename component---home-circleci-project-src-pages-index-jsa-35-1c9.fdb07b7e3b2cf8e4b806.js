(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,t,n){"use strict";var r=n(103).baseUrl;function a(e){return[r,e].join("/").replace("//","/")}n.d(t,"a",(function(){return a}))},103:function(e,t){e.exports={baseUrl:"/loader-manual/"}},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(91),c=n.n(o),i=n(92),l=n(101),u=n(98),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=p(this,b(t).call(this,e)),p(n,y(n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.title,n=e.tagline;return a.a.createElement("header",{className:c()("hero hero--primary",s.a.heroBanner)},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"hero__title"},t),a.a.createElement("p",{className:"hero__subtitle"},n),a.a.createElement("div",{className:s.a.buttons},a.a.createElement(i.a,{className:c()("button button--secondary button--lg",s.a.getStarted),to:Object(l.a)("docs/basic/getting-started")},"GET STARTED"))))}}])&&m(n.prototype,r),o&&m(n,o),t}(a.a.Component);t.default=d},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(91),c=n.n(o),i=n(101),l=n(98),u=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?b(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=[{title:a.a.createElement(a.a.Fragment,null,"JavaScript Modules"),imageUrl:"img/features/icons8-module-1.png",description:a.a.createElement(a.a.Fragment,null,"UMD, CommonJS, ESModule 형식을 모두 지원합니다.")},{title:a.a.createElement(a.a.Fragment,null,"Browser"),imageUrl:"img/features/browsers-1024x1024.png",description:a.a.createElement(a.a.Fragment,null,"웹브라우저 환경에서도 쉽게 적용할 수 있습니다.")},{title:a.a.createElement(a.a.Fragment,null,"SPA Component ",a.a.createElement("small",{className:"text--info"},a.a.createElement("i",null,"(upcoming)"))),imageUrl:"img/features/1_7zccGWE4o5LmxegijjK_xQ.png",description:a.a.createElement(a.a.Fragment,null,"Angular, React, Vue Framework 전용 컴포넌트를 제공합니다.")}],d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=m(this,p(t).call(this,e)),m(n,b(n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:"features-wrapper"},g&&g.length&&a.a.createElement("section",{className:u.a.features},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},g.map((function(e,t){var n=e.imageUrl,r=e.title,o=e.description;return a.a.createElement("div",{key:t,className:c()("col col--4",u.a.feature)},n&&a.a.createElement("div",{className:"text--center"},a.a.createElement("img",{className:u.a.featureImage,src:Object(i.a)(n),alt:r})),a.a.createElement("h3",null,r),a.a.createElement("p",null,o))}))))))}}])&&f(n.prototype,r),o&&f(n,o),t}(a.a.Component);t.default=d},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(96),c=n(97),i=n.n(c),l=n(36),u=n(37);t.default=function(){var e=i()().siteConfig,t=void 0===e?{}:e,n=t.title,r=t.tagline;return a.a.createElement(o.a,{title:"Hello from ".concat(t.title),description:"Description will go into a meta tag in <head />"},a.a.createElement(l.default,{title:n,tagline:r}),a.a.createElement("main",null,a.a.createElement(u.default,null)))}},98:function(e,t,n){e.exports={heroBanner:"heroBanner_2Ftp0qVd",buttons:"buttons_1Wc3oHpx",features:"features_P2SUP9op",featureImage:"featureImage_3Xqxmi9m",getStarted:"getStarted_3sli-RXc"}}}]);