_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+gNf":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{get:function(){return/\((.+)\)/.exec(this)[1]}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},"0D0S":function(e,t,r){"use strict";var n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}},"1Pcy":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"5Yy7":function(e,t,r){var n=r("695J");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"7t6h":function(e,t,r){"use strict";r.r(t),r.d(t,"getCLS",(function(){return h})),r.d(t,"getFCP",(function(){return v})),r.d(t,"getFID",(function(){return g})),r.d(t,"getLCP",(function(){return S})),r.d(t,"getTTFB",(function(){return w}));var n,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},u=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},c=!1,s=!1,f=function(e){c=!e.persisted},l=function(){addEventListener("pagehide",f),addEventListener("beforeunload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:c})}),{capture:!0,once:t})},p=function(e,t,r,n){var o;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("CLS",0),o=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),t())},a=u("layout-shift",o);a&&(t=p(e,n,a,r),d((function(e){var r=e.isUnloading;a.takeRecords().map(o),r&&(n.isFinal=!0),t()})))},m=function(){return void 0===n&&(n="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return n=t}),!0)),{get timeStamp(){return n}}},v=function(e){var t,r=i("FCP"),n=m(),o=u("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(r.value=e.startTime,r.isFinal=!0,r.entries.push(e),t())}));o&&(t=p(e,r,o))},g=function(e){var t=i("FID"),r=m(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=u("first-input",n),a=p(e,t,o);o?d((function(){o.takeRecords().map(n),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},S=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("LCP"),o=m(),a=function(e){var r=e.startTime;r<o.timeStamp?(n.value=r,n.entries.push(e)):n.isFinal=!0,t()},c=u("largest-contentful-paint",a);if(c){t=p(e,n,c,r);var s=function(){n.isFinal||(c.takeRecords().map(a),n.isFinal=!0,t())};y().then(s),d(s,!0)}},w=function(e){var t,r=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},"97Jx":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},AuHH:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},J6CG:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return r+t}},"N+ot":function(e,t,r){var n=r("T0aG"),o=r("1Pcy");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},YtVx:function(e,t,r){"use strict";var n=r("yWCo")(r("ioxi"));window.next=n,(0,n.default)().catch(console.error)},awAI:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r("7t6h");t.default=function(e){(0,n.getCLS)(e),(0,n.getFID)(e),(0,n.getFCP)(e),(0,n.getLCP)(e),(0,n.getTTFB)(e)}},ioxi:function(e,t,r){"use strict";var n=r("VtSi"),o=r("cbiG"),a=r("VrFO"),i=r("Y9Ll"),u=r("5Yy7"),c=r("N+ot"),s=r("AuHH"),f=r("ddV6");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var d=r("yWCo"),p=r("IGGJ");t.__esModule=!0,t.render=re,t.renderError=oe,t.default=t.emitter=t.router=t.version=void 0;var h=p(r("97Jx"));p(r("yWCo"));r("+gNf");var m=p(r("ERkP")),v=p(r("7nmT")),g=r("op+c"),y=p(r("YBsB")),S=r("wsRY"),w=r("L9lV"),_=r("Lko9"),E=d(r("FrRs")),b=d(r("0D0S")),x=r("fvxO"),P=p(r("jRQF")),T=d(r("vOaH")),C=p(r("awAI")),R=r("7xIC"),A=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=A;t.version="9.5.4";var N=A.props,k=A.err,M=A.page,F=A.query,I=A.buildId,L=A.assetPrefix,D=A.runtimeConfig,B=A.dynamicIds,j=A.isFallback,O=A.head,H=L||"";r.p="".concat(H,"/_next/"),b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:D||{}});var q=(0,x.getURL)();(0,w.hasBasePath)(q)&&(q=(0,w.delBasePath)(q));var G=new T.default(I,H,M),U=function(e){var t=f(e,2),r=t[0],n=t[1];return G.registerPage(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return U(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=U;var V,J,Y,W,X,Q,$,K=(0,P.default)(O),z=document.getElementById("__next");t.router=Y;var Z=function(e){u(r,e);var t=l(r);function r(){return a(this,r),t.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),Y.isSsr&&(j||A.nextExport&&((0,_.isDynamicRoute)(Y.pathname)||location.search)||N&&N.__N_SSG&&location.search)&&Y.replace(Y.pathname+"?"+String(E.assign(E.urlQueryToSearchParams(Y.query),new URLSearchParams(location.search))),q,{_h:1,shallow:!j})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(m.default.Component),ee=(0,y.default)();t.emitter=ee;var te=function(){var e=o(n.mark((function e(){var r,o,a,i,u,c,s=arguments;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,G.loadPage("/_app");case 4:return r=e.sent,o=r.page,a=r.mod,Q=o,a&&a.reportWebVitals&&($=function(e){var t,r=e.id,n=e.name,o=e.startTime,i=e.value,u=e.duration,c=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),a.reportWebVitals({id:r||f,name:n,startTime:o||t,value:null==i?u:i,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),i=k,e.prev=10,e.next=14,G.loadPage(M);case 14:u=e.sent,W=u.page,X=u.styleSheets,e.next=21;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),i=e.t0;case 26:if(!window.__NEXT_PRELOADREADY){e.next=30;break}return e.next=30,window.__NEXT_PRELOADREADY(B);case 30:return t.router=Y=(0,R.createRouter)(M,F,q,{initialProps:N,pageLoader:G,App:Q,Component:W,initialStyleSheets:X,wrapApp:fe,err:i,isFallback:Boolean(j),subscription:function(e,t){return re({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})}}),re(c={App:Q,Component:W,styleSheets:X,props:N,err:i}),e.abrupt("return",ee);case 38:return e.abrupt("return",{emitter:ee,render:re,renderCtx:c});case 39:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();function re(e){return ne.apply(this,arguments)}function ne(){return(ne=o(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,oe(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,le(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,oe((0,h.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function oe(e){var t=e.App,r=e.err;return console.error(r),G.loadPage("/_error").then((function(n){var o=n.page,a=n.styleSheets,i=fe(t),u={Component:o,AppTree:i,router:Y,ctx:{err:r,pathname:M,query:F,asPath:q,AppTree:i}};return Promise.resolve(e.props?e.props:(0,x.loadGetInitialProps)(t,u)).then((function(t){return le((0,h.default)({},e,{err:r,Component:o,styleSheets:a,props:t}))}))}))}t.default=te;var ae="function"===typeof v.default.hydrate;function ie(){x.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),$&&performance.getEntriesByName("Next.js-hydration").forEach($),ce())}function ue(){if(x.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),$&&(performance.getEntriesByName("Next.js-render").forEach($),performance.getEntriesByName("Next.js-route-change-to-render").forEach($)),ce(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ce(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function se(e){var t=e.children;return m.default.createElement(Z,{fn:function(e){return oe({App:Q,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},m.default.createElement(S.RouterContext.Provider,{value:(0,R.makePublicRouterInstance)(Y)},m.default.createElement(g.HeadManagerContext.Provider,{value:K},t)))}var fe=function(e){return function(t){var r=(0,h.default)({},t,{Component:W,err:k,router:Y});return m.default.createElement(se,null,m.default.createElement(e,r))}};function le(e){var t=e.App,r=e.Component,n=e.props,o=e.err,a=e.styleSheets;r=r||V.Component,n=n||V.props;var i=(0,h.default)({},n,{Component:r,err:o,router:Y});V=i;var u,c=!1,s=new Promise((function(e,t){J&&J(),u=function(){J=null,e()},J=function(){c=!0,J=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var f,l,d=m.default.createElement(de,{callback:function(){if(!ae&&!c){for(var e=new Set(a.map((function(e){return e.href}))),t=(0,T.looseToArray)(document.querySelectorAll("style[data-n-href]")),r=t.map((function(e){return e.getAttribute("data-n-href")})),n=0;n<r.length;++n)e.has(r[n])?t[n].removeAttribute("media"):t[n].setAttribute("media","x");var o=document.querySelector("noscript[data-n-css]");o&&a.forEach((function(e){var t=e.href,r=document.querySelector('style[data-n-href="'.concat(t,'"]'));r&&(o.parentNode.insertBefore(r,o.nextSibling),o=r)})),(0,T.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}u()}},m.default.createElement(se,null,m.default.createElement(t,i)));return function(){if(ae)return!1;var e=(0,T.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));a.forEach((function(e){var r=e.href,n=e.text;if(!t.has(r)){var o=document.createElement("style");o.setAttribute("data-n-href",r),o.setAttribute("media","x"),document.head.appendChild(o),o.appendChild(document.createTextNode(n))}}))}(),f=d,l=z,x.ST&&performance.mark("beforeRender"),ae?(v.default.hydrate(f,l,ie),ae=!1,$&&x.ST&&(0,C.default)($)):v.default.render(f,l,ue),s}function de(e){var t=e.callback,r=e.children;return m.default.useLayoutEffect((function(){return t()}),[t]),r}},jRQF:function(e,t,r){"use strict";var n=r("ddV6");t.__esModule=!0,t.default=function(e){var t=document.getElementsByTagName("head")[0],r=new Set(t.children);i(r,e.map((function(e){var t=n(e,2),r=t[0],a=t[1];return(0,o.createElement)(r,a)})),!1);var a=null;return{mountedInstances:new Set,updateHead:function(e){var t=a=Promise.resolve().then((function(){t===a&&(a=null,i(r,e,!0))}))}}};var o=r("ERkP"),a={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function i(e,t,r){var n=document.getElementsByTagName("head")[0],o=new Set(e);t.forEach((function(t){if("title"!==t.type){for(var r=function(e){var t=e.type,r=e.props,n=document.createElement(t);for(var o in r)if(r.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==r[o]){var i=a[o]||o.toLowerCase();n.setAttribute(i,r[o])}var u=r.children,c=r.dangerouslySetInnerHTML;return c?n.innerHTML=c.__html||"":u&&(n.textContent="string"===typeof u?u:Array.isArray(u)?u.join(""):""),n}(t),i=e.values();;){var u=i.next(),c=u.done,s=u.value;if(null==s?void 0:s.isEqualNode(r))return void o.delete(s);if(c)break}e.add(r),n.appendChild(r)}else{var f="";if(t){var l=t.props.children;f="string"===typeof l?l:Array.isArray(l)?l.join(""):""}f!==document.title&&(document.title=f)}})),o.forEach((function(t){r&&t.parentNode.removeChild(t),e.delete(t)}))}},"op+c":function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("ERkP"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},vOaH:function(e,t,r){"use strict";var n=r("VrFO"),o=r("Y9Ll"),a=r("IGGJ");t.__esModule=!0,t.default=t.looseToArray=void 0;var i=a(r("YBsB")),u=r("L9lV"),c=a(r("J6CG")),s=r("Lko9"),f=r("3G4Q"),l=function(e){return[].slice.call(e)};function d(e,t){try{return document.createElement("link").relList.supports(e)}catch(r){}}function p(e){return(0,u.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=l;var h=d("preload")&&!d("prefetch")?"preload":"prefetch",m=d("preload")?"preload":h;document.createElement("script");function v(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function g(e,t,r,n){return new Promise((function(o,a){n=document.createElement("link"),r&&(n.as=r),n.rel=t,n.crossOrigin=void 0,n.onload=o,n.onerror=a,n.href=e,document.head.appendChild(n)}))}var y=function(){function e(t,r,o){n(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=o,this.buildId=t,this.assetPrefix=r,this.pageCache={},this.pageRegisterEvents=(0,i.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==o&&(this.loadingRoutes[o]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(r){return r[e]?r[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(p(e))}))}},{key:"getDataHref",value:function(e,t,r){var n=this,o=(0,f.parseRelativeUrl)(e),a=o.pathname,i=o.query,l=o.search,d=(0,f.parseRelativeUrl)(t).pathname,p=v(a),h=function(e){var t=(0,c.default)(e,".json");return(0,u.addBasePath)("/_next/data/".concat(n.buildId).concat(t).concat(r?"":l))},m=(0,s.isDynamicRoute)(p),g=m?(0,u.interpolateAs)(a,d,i).result:"";return m?g&&h(g):h(p)}},{key:"prefetchData",value:function(e,t){var r=this,n=v((0,f.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(n)&&(a=r.getDataHref(e,t,!0))&&!document.querySelector('link[rel="'.concat(h,'"][href^="').concat(a,'"]'))&&g(a,h,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=v(e),new Promise((function(r,n){var o=t.pageCache[e];if(o)"error"in o?n(o.error):r(o);else{var a=function o(a){t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],"error"in a?n(a.error):r(a)};if(t.pageRegisterEvents.on(e,a),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,r){var n=document.createElement("script");n.crossOrigin=void 0,n.src=e,n.onload=t,n.onerror=function(){return r(p(e))},document.body.appendChild(n)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(m,'"][href^="').concat(e,'"]'))&&g(e,m,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(r){t.pageCache[e]={error:r},a({error:r})}))}}))}},{key:"registerPage",value:function(e,t){var r=this;var n=e===this.initialPage;("/_app"===e?Promise.resolve([]):(n?Promise.resolve(l(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw p(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){if(n)return l(document.styleSheets).filter((function(e){return e.ownerNode&&"LINK"===e.ownerNode.tagName&&e.ownerNode.hasAttribute("data-n-p")})).map((function(e){return{href:e.ownerNode.getAttribute("href"),text:l(e.cssRules).map((function(e){return e.cssText})).join("")}}));throw e}))}))).then((function(n){return function(n){try{var o=t(),a={page:o.default||o,mod:o,styleSheets:n};r.pageCache[e]=a,r.pageRegisterEvents.emit(e,a)}catch(i){r.pageCache[e]={error:i},r.pageRegisterEvents.emit(e,{error:i})}}(n)}),(function(t){r.pageCache[e]={error:t},r.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var r,n,o=this;if((r=navigator.connection)&&(r.saveData||/2g/.test(r.effectiveType)))return Promise.resolve();if(t)n=e;else;return Promise.all(document.querySelector('link[rel="'.concat(h,'"][href^="').concat(n,'"]'))?[]:[n&&g(n,h,n.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=y}},[["YtVx",0,2,1]]]);