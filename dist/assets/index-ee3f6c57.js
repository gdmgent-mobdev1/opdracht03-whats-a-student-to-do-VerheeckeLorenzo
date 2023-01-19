var ge=Object.defineProperty;var me=(e,t,r)=>t in e?ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var R=(e,t,r)=>(me(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();var _e=/([:*])(\w+)/g,ye="([^/]+)",Le=/\*/g,Ee="?(?:.*)",Oe=/\/\?/g,Ae="/?([^/]+|)",Re="(?:/^|^)",Se="";function V(e){return e===void 0&&(e="/"),N()?location.pathname+location.search+location.hash:e}function h(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function k(e){return typeof e=="string"}function ke(e){return typeof e=="function"}function w(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function we(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(r,i,a){return r===null&&(r={}),r[t[a]]=decodeURIComponent(i),r},null)}function P(e){var t=h(e).split(/\?(.*)?$/);return[h(t[0]),t.slice(1).join("")]}function T(e){for(var t={},r=e.split("&"),i=0;i<r.length;i++){var a=r[i].split("=");if(a[0]!==""){var s=decodeURIComponent(a[0]);t[s]?(Array.isArray(t[s])||(t[s]=[t[s]]),t[s].push(decodeURIComponent(a[1]||""))):t[s]=decodeURIComponent(a[1]||"")}}return t}function $(e,t){var r=P(h(e.currentLocationPath)),i=r[0],a=r[1],s=a===""?null:T(a),f=[],d;if(k(t.path)){if(d=Re+h(t.path).replace(_e,function(L,_,E){return f.push(E),ye}).replace(Le,Ee).replace(Oe,Ae)+"$",h(t.path)===""&&h(i)==="")return{url:i,queryString:a,hashString:w(e.to),route:t,data:null,params:s}}else d=t.path;var m=new RegExp(d,Se),p=i.match(m);if(p){var O=k(t.path)?we(p,f):p.groups?p.groups:p.slice(1);return{url:h(i.replace(new RegExp("^"+e.instance.root),"")),queryString:a,hashString:w(e.to),route:t,data:O,params:s}}return!1}function Q(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function y(e,t){return typeof e[t]>"u"||e[t]===!0}function Pe(e){if(!e)return{};var t=e.split(","),r={},i;return t.forEach(function(a){var s=a.split(":").map(function(f){return f.replace(/(^ +| +$)/g,"")});switch(s[0]){case"historyAPIMethod":r.historyAPIMethod=s[1];break;case"resolveOptionsStrategy":i||(i={}),i.strategy=s[1];break;case"resolveOptionsHash":i||(i={}),i.hash=s[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":r[s[0]]=s[1]==="true";break}}),i&&(r.resolveOptions=i),r}function N(){return typeof window<"u"}function be(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(r){return r}).forEach(function(r){["before","after","already","leave"].forEach(function(i){r[i]&&(t[i]||(t[i]=[]),t[i].push(r[i]))})}),t}function g(e,t,r){var i=t||{},a=0;(function s(){if(!e[a]){r&&r(i);return}Array.isArray(e[a])?(e.splice.apply(e,[a,1].concat(e[a][0](i)?e[a][1]:e[a][2])),s()):e[a](i,function(f){typeof f>"u"||f===!0?(a+=1,s()):r&&r(i)})})()}g.if=function(e,t,r){return Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]),[e,t,r]};function q(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=V(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function b(e,t){for(var r=0;r<e.instance.routes.length;r++){var i=e.instance.routes[r],a=$(e,i);if(a&&(e.matches||(e.matches=[]),e.matches.push(a),e.resolveOptions.strategy==="ONE")){t();return}}t()}function He(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function Ce(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var D=N(),Fe=Q();function Te(e,t){if(y(e.navigateOptions,"updateBrowserURL")){var r=("/"+e.to).replace(/\/\//g,"/"),i=D&&e.resolveOptions&&e.resolveOptions.hash===!0;Fe?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",i?"#"+r:r),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){var a=location.hash;location.hash="",location.hash=a,e.instance.__freezeListening=!1},1))):D&&(window.location.href=e.to)}t()}function Y(e,t){var r=e.instance;if(!r.lastResolved()){t();return}g(r.lastResolved().map(function(i){return function(a,s){if(!i.route.hooks||!i.route.hooks.leave){s();return}var f=!1,d=e.instance.matchLocation(i.route.path,e.currentLocationPath,!1);if(i.route.path!=="*")f=!d;else{var m=e.matches?e.matches.find(function(p){return i.route.path===p.route.path}):!1;f=!m}if(y(e.navigateOptions,"callHooks")&&f){g(i.route.hooks.leave.map(function(p){return function(O,L){return p(function(_){_===!1?e.instance.__markAsClean(e):L()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return s()}]));return}else s()}}),{},function(){return t()})}function Ne(e,t){e.match.route.hooks&&e.match.route.hooks.before&&y(e.navigateOptions,"callHooks")?g(e.match.route.hooks.before.map(function(r){return function(a,s){return r(function(f){f===!1?e.instance.__markAsClean(e):s()},e.match)}}).concat([function(){return t()}])):t()}function Ue(e,t){y(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function Ie(e,t){e.match.route.hooks&&e.match.route.hooks.after&&y(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(r){return r(e.match)}),t()}function Me(e,t){var r=e.instance.lastResolved();if(r&&r[0]&&r[0].route===e.match.route&&r[0].url===e.match.url&&r[0].queryString===e.match.queryString){r.forEach(function(i){i.route.hooks&&i.route.hooks.already&&y(e.navigateOptions,"callHooks")&&i.route.hooks.already.forEach(function(a){return a(e.match)})}),t(!1);return}t()}function Ge(e,t){var r=e.instance._notFoundRoute;if(r){e.notFoundHandled=!0;var i=P(e.currentLocationPath),a=i[0],s=i[1],f=w(e.to);r.path=h(a);var d={url:r.path,queryString:s,hashString:f,data:null,route:r,params:s!==""?T(s):null};e.matches=[d],e.match=d}t()}function je(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function Be(e,t){e.instance._setCurrent(null),t()}function J(e,t){y(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var Z=[Me,Ne,Ue,Ie],W=[Y,Ge,g.if(function(e){var t=e.notFoundHandled;return t},Z.concat([J]),[je,Be])];function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},C.apply(this,arguments)}function X(e,t){var r=0;function i(){if(r===e.matches.length){J(e,t);return}g(Z,C({},e,{match:e.matches[r]}),function(){r+=1,i()})}Y(e,i)}function H(e){e.instance.__markAsClean(e)}function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},F.apply(this,arguments)}var z="[data-navigo]";function qe(e,t){var r=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:z},i=this,a="/",s=null,f=[],d=!1,m,p=Q(),O=N();e?a=h(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function L(n){return n.indexOf("#")>=0&&(r.hash===!0?n=n.split("#")[1]||"/":n=n.split("#")[0]),n}function _(n){return h(a+"/"+h(n))}function E(n,o,u,l){return n=k(n)?_(n):n,{name:l||h(String(n)),path:n,handler:o,hooks:be(u)}}function x(n,o,u){var l=this;return typeof n=="object"&&!(n instanceof RegExp)?(Object.keys(n).forEach(function(c){if(typeof n[c]=="function")l.on(c,n[c]);else{var v=n[c],A=v.uses,pe=v.as,ve=v.hooks;f.push(E(c,A,[m,ve],pe))}}),this):(typeof n=="function"&&(u=o,o=n,n=a),f.push(E(n,o,[m,u])),this)}function U(n,o){if(i.__dirty){i.__waiting.push(function(){return i.resolve(n,o)});return}else i.__dirty=!0;n=n?h(a)+"/"+h(n):void 0;var u={instance:i,to:n,currentLocationPath:n,navigateOptions:{},resolveOptions:F({},r,o)};return g([q,b,g.if(function(l){var c=l.matches;return c&&c.length>0},X,W)],u,H),u.matches?u.matches:!1}function I(n,o){if(i.__dirty){i.__waiting.push(function(){return i.navigate(n,o)});return}else i.__dirty=!0;n=h(a)+"/"+h(n);var u={instance:i,to:n,navigateOptions:o||{},resolveOptions:o&&o.resolveOptions?o.resolveOptions:r,currentLocationPath:L(n)};g([He,Ce,b,g.if(function(l){var c=l.matches;return c&&c.length>0},X,W),Te,H],u,H)}function ee(n,o,u){var l=G(n,o);return l!==null?(I(l.replace(new RegExp("^/?"+a),""),u),!0):!1}function te(n){return this.routes=f=f.filter(function(o){return k(n)?h(o.path)!==h(n):ke(n)?n!==o.handler:String(o.path)!==String(n)}),this}function ne(){p&&(this.__popstateListener=function(){i.__freezeListening||U()},window.addEventListener("popstate",this.__popstateListener))}function re(){this.routes=f=[],p&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=d=!0}function ie(n,o){return i._notFoundRoute=E("*",n,[m,o],"__NOT_FOUND__"),this}function M(){if(O)return ae().forEach(function(n){if(n.getAttribute("data-navigo")==="false"||n.getAttribute("target")==="_blank"){n.hasListenerAttached&&n.removeEventListener("click",n.navigoHandler);return}n.hasListenerAttached||(n.hasListenerAttached=!0,n.navigoHandler=function(o){if((o.ctrlKey||o.metaKey)&&o.target.tagName.toLowerCase()==="a")return!1;var u=n.getAttribute("href");if(typeof u>"u"||u===null)return!1;if(u.match(/^(http|https)/)&&typeof URL<"u")try{var l=new URL(u);u=l.pathname+l.search}catch{}var c=Pe(n.getAttribute("data-navigo-options"));d||(o.preventDefault(),o.stopPropagation(),i.navigate(h(u),c))},n.addEventListener("click",n.navigoHandler))}),i}function ae(){return O?[].slice.call(document.querySelectorAll(r.linksSelector||z)):[]}function oe(n){return"/"+a+"/"+h(n)}function se(n){return m=n,this}function ue(){return s}function G(n,o,u){var l=f.find(function(A){return A.name===n}),c=null;if(l){if(c=l.path,o)for(var v in o)c=c.replace(":"+v,o[v]);c=c.match(/^\//)?c:"/"+c}return c&&u&&!u.includeRoot&&(c=c.replace(new RegExp("^/"+a),"")),c}function ce(n){return n.getAttribute("href")}function j(n){var o=P(h(n)),u=o[0],l=o[1],c=l===""?null:T(l),v=w(n),A=E(u,function(){},[m],u);return{url:u,queryString:l,hashString:v,route:A,data:null,params:c}}function fe(){return j(h(V(a)).replace(new RegExp("^"+a),""))}function le(n){var o={instance:i,currentLocationPath:n,to:n,navigateOptions:{},resolveOptions:r};return b(o,function(){}),o.matches?o.matches:!1}function he(n,o,u){typeof o<"u"&&(typeof u>"u"||u)&&(o=_(o));var l={instance:i,to:o,currentLocationPath:o};q(l,function(){}),typeof n=="string"&&(n=typeof u>"u"||u?_(n):n);var c=$(l,{name:String(n),path:n,handler:function(){},hooks:{}});return c||!1}function S(n,o,u){return typeof o=="string"&&(o=B(o)),o?(o.hooks[n]||(o.hooks[n]=[]),o.hooks[n].push(u),function(){o.hooks[n]=o.hooks[n].filter(function(l){return l!==u})}):(console.warn("Route doesn't exists: "+o),function(){})}function B(n){return typeof n=="string"?f.find(function(o){return o.name===_(n)}):f.find(function(o){return o.handler===n})}function de(n){n.instance.__dirty=!1,n.instance.__waiting.length>0&&n.instance.__waiting.shift()()}this.root=a,this.routes=f,this.destroyed=d,this.current=s,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=de,this.on=x,this.off=te,this.resolve=U,this.navigate=I,this.navigateByName=ee,this.destroy=re,this.notFound=ie,this.updatePageLinks=M,this.link=oe,this.hooks=se,this.extractGETParameters=function(n){return P(L(n))},this.lastResolved=ue,this.generate=G,this.getLinkPath=ce,this.match=le,this.matchLocation=he,this.getCurrentLocation=fe,this.addBeforeHook=S.bind(this,"before"),this.addAfterHook=S.bind(this,"after"),this.addAlreadyHook=S.bind(this,"already"),this.addLeaveHook=S.bind(this,"leave"),this.getRoute=B,this._pathToMatchObject=j,this._clean=h,this._checkForAHash=L,this._setCurrent=function(n){return s=i.current=n},ne.call(this),M.call(this)}class De{render(){const t=document.createElement("div");return t.innerHTML="<h1>Login Screen</h1>",t}}class K{render(){const t=document.createElement("div");return t.innerHTML="<h1>Login Screen</h1>",t}}class We{constructor(){R(this,"appContainer");R(this,"currentUser");R(this,"router");R(this,"currentScreen");console.log("test"),this.appContainer=document.getElementById("app"),this.currentUser=null,this.currentScreen=new K().render(),this.router=new qe("/"),this.render()}init(){this.router.on("/login",()=>{this.currentScreen=new K().render()}).on("/dashboard",()=>{this.currentScreen=new De().render()})}render(){console.log(this.appContainer),console.log(this.currentScreen),this.appContainer.appendChild(this.currentScreen)}}window.addEventListener("onload",()=>{new We().init()});
