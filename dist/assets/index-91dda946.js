(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),s.push(n[l],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const p=a<<4&240|u>>2;if(s.push(p),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Md=function(t){const e=zc(t);return Gc.encodeByteArray(e,!0)},xs=function(t){return Md(t).replace(/\./g,"")},Kc=function(t){try{return Gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Fd(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jd(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function qd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Hd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=()=>Hd().__FIREBASE_DEFAULTS__,Gd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kc(t[1]);return e&&JSON.parse(e)},Hi=()=>{try{return zd()||Gd()||Kd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wc=t=>{var e,n;return(n=(e=Hi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qc=t=>{const e=Wc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wd=()=>{var t;return(t=Hi())===null||t===void 0?void 0:t.config},Xc=t=>{var e;return(e=Hi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xs(JSON.stringify(n)),xs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="FirebaseError";class Ve extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xd,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Yd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ve(r,a,s)}}function Yd(t,e){return t.replace(Jd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Jd=/\{\$([^}]+)}/g;function Zd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ms(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(ya(i)&&ya(o)){if(!Ms(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ya(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ef(t,e){const n=new tf(t,e);return n.subscribe.bind(n)}class tf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");nf(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=qr),r.error===void 0&&(r.error=qr),r.complete===void 0&&(r.complete=qr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){return t&&t._delegate?t._delegate:t}class at{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(of(e))try{this.getOrInitializeService({instanceIdentifier:mt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mt){return this.instances.has(e)}getOptions(e=mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mt){return this.component?this.component.multipleInstances?e:mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rf(t){return t===mt?void 0:t}function of(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const cf={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},uf=F.INFO,lf={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},hf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=lf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zi{constructor(e){this.name=e,this._logLevel=uf,this._logHandler=hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const df=(t,e)=>e.some(n=>t instanceof n);let va,wa;function ff(){return va||(va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pf(){return wa||(wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jc=new WeakMap,li=new WeakMap,Zc=new WeakMap,Hr=new WeakMap,Gi=new WeakMap;function mf(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jc.set(n,t)}).catch(()=>{}),Gi.set(e,t),e}function gf(t){if(li.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});li.set(t,e)}let hi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return li.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yf(t){hi=t(hi)}function vf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(zr(this),e,...n);return Zc.set(s,e.sort?e.sort():[e]),rt(s)}:pf().includes(t)?function(...e){return t.apply(zr(this),e),rt(Jc.get(this))}:function(...e){return rt(t.apply(zr(this),e))}}function wf(t){return typeof t=="function"?vf(t):(t instanceof IDBTransaction&&gf(t),df(t,ff())?new Proxy(t,hi):t)}function rt(t){if(t instanceof IDBRequest)return mf(t);if(Hr.has(t))return Hr.get(t);const e=wf(t);return e!==t&&(Hr.set(t,e),Gi.set(e,t)),e}const zr=t=>Gi.get(t);function _f(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(rt(o.result),c.oldVersion,c.newVersion,rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ef=["get","getKey","getAll","getAllKeys","count"],If=["put","add","delete","clear"],Gr=new Map;function _a(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gr.get(e))return Gr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=If.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ef.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Gr.set(e,i),i}yf(t=>({...t,get:(e,n,s)=>_a(e,n)||t.get(e,n,s),has:(e,n)=>!!_a(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",Ea="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new zi("@firebase/app"),Cf="@firebase/app-compat",Sf="@firebase/analytics-compat",kf="@firebase/analytics",Af="@firebase/app-check-compat",Rf="@firebase/app-check",Nf="@firebase/auth",Df="@firebase/auth-compat",Lf="@firebase/database",Of="@firebase/database-compat",Pf="@firebase/functions",xf="@firebase/functions-compat",Mf="@firebase/installations",Uf="@firebase/installations-compat",Ff="@firebase/messaging",Vf="@firebase/messaging-compat",Bf="@firebase/performance",jf="@firebase/performance-compat",$f="@firebase/remote-config",qf="@firebase/remote-config-compat",Hf="@firebase/storage",zf="@firebase/storage-compat",Gf="@firebase/firestore",Kf="@firebase/firestore-compat",Wf="firebase",Qf="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="[DEFAULT]",Xf={[di]:"fire-core",[Cf]:"fire-core-compat",[kf]:"fire-analytics",[Sf]:"fire-analytics-compat",[Rf]:"fire-app-check",[Af]:"fire-app-check-compat",[Nf]:"fire-auth",[Df]:"fire-auth-compat",[Lf]:"fire-rtdb",[Of]:"fire-rtdb-compat",[Pf]:"fire-fn",[xf]:"fire-fn-compat",[Mf]:"fire-iid",[Uf]:"fire-iid-compat",[Ff]:"fire-fcm",[Vf]:"fire-fcm-compat",[Bf]:"fire-perf",[jf]:"fire-perf-compat",[$f]:"fire-rc",[qf]:"fire-rc-compat",[Hf]:"fire-gcs",[zf]:"fire-gcs-compat",[Gf]:"fire-fst",[Kf]:"fire-fst-compat","fire-js":"fire-js",[Wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map,pi=new Map;function Yf(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(pi.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;pi.set(e,t);for(const n of Us.values())Yf(n,t);return!0}function or(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},it=new Kn("app","Firebase",Jf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=Qf;function Ki(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fi,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw it.create("bad-app-name",{appName:String(r)});if(n||(n=Wd()),!n)throw it.create("no-options");const i=Us.get(r);if(i){if(Ms(n,i.options)&&Ms(s,i.config))return i;throw it.create("duplicate-app",{appName:r})}const o=new af(r);for(const c of pi.values())o.addComponent(c);const a=new Zf(n,s,o);return Us.set(r,a),a}function Wi(t=fi){const e=Us.get(t);if(!e&&t===fi)return Ki();if(!e)throw it.create("no-app",{appName:t});return e}function Pe(t,e,n){var s;let r=(s=Xf[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}kt(new at(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="firebase-heartbeat-database",tp=1,Ln="firebase-heartbeat-store";let Kr=null;function eu(){return Kr||(Kr=_f(ep,tp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ln)}}}).catch(t=>{throw it.create("idb-open",{originalErrorMessage:t.message})})),Kr}async function np(t){try{return(await eu()).transaction(Ln).objectStore(Ln).get(tu(t))}catch(e){if(e instanceof Ve)St.warn(e.message);else{const n=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(n.message)}}}async function Ia(t,e){try{const s=(await eu()).transaction(Ln,"readwrite");return await s.objectStore(Ln).put(e,tu(t)),s.done}catch(n){if(n instanceof Ve)St.warn(n.message);else{const s=it.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});St.warn(s.message)}}}function tu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=1024,rp=30*24*60*60*1e3;class ip{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ap(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ta();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=rp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ta(),{heartbeatsToSend:n,unsentEntries:s}=op(this._heartbeatsCache.heartbeats),r=xs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ta(){return new Date().toISOString().substring(0,10)}function op(t,e=sp){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ba(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ba(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ap{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?qd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await np(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ia(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ia(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ba(t){return xs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){kt(new at("platform-logger",e=>new Tf(e),"PRIVATE")),kt(new at("heartbeat",e=>new ip(e),"PRIVATE")),Pe(di,Ea,t),Pe(di,Ea,"esm2017"),Pe("fire-js","")}cp("");function Qi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function nu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const up=nu,su=new Kn("auth","Firebase",nu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new zi("@firebase/auth");function ks(t,...e){Ca.logLevel<=F.ERROR&&Ca.error(`Auth (${nn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,...e){throw Xi(t,...e)}function xe(t,...e){return Xi(t,...e)}function ru(t,e,n){const s=Object.assign(Object.assign({},up()),{[e]:n});return new Kn("auth","Firebase",s).create(e,{appName:t.name})}function lp(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Se(t,"argument-error"),ru(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return su.create(t,...e)}function k(t,e,...n){if(!t)throw Xi(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ks(e),new Error(e)}function We(t,e){t||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Map;function He(t){We(t instanceof Function,"Expected a class definition");let e=Sa.get(t);return e?(We(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sa.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){const n=or(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ms(i,e??{}))return r;Se(r,"already-initialized")}return n.initialize({options:e})}function dp(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(He);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fp(){return ka()==="http:"||ka()==="https:"}function ka(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fp()||Vd()||"connection"in navigator)?navigator.onLine:!0}function mp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,We(n>e,"Short delay should be less than long delay!"),this.isMobile=Ud()||Bd()}get(){return pp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t,e){We(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new Qn(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sn(t,e,n,s,r={}){return ou(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Wn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),iu.fetch()(au(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ou(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},gp),e);try{const r=new vp(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vs(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ru(t,l,u);Se(t,l)}}catch(r){if(r instanceof Ve)throw r;Se(t,"network-request-failed")}}async function Yn(t,e,n,s,r={}){const i=await sn(t,e,n,s,r);return"mfaPendingCredential"in i&&Se(t,"multi-factor-auth-required",{_serverResponse:i}),i}function au(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Yi(t.config,r):`${t.config.apiScheme}://${r}`}class vp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xe(this.auth,"network-request-failed")),yp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=xe(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function _p(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ep(t,e=!1){const n=G(t),s=await n.getIdToken(e),r=Ji(s);k(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:bn(Wr(r.auth_time)),issuedAtTime:bn(Wr(r.iat)),expirationTime:bn(Wr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wr(t){return Number(t)*1e3}function Ji(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const r=Kc(n);return r?JSON.parse(r):(ks("Failed to decode base64 JWT payload"),null)}catch(r){return ks("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ip(t){const e=Ji(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ve&&Tp(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Tp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Kt(t,_p(n,{idToken:s}));k(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kp(i.providerUserInfo):[],a=Sp(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cu(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Cp(t){const e=G(t);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sp(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function kp(t){return t.map(e=>{var{providerId:n}=e,s=Qi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e){const n=await ou(t,{},async()=>{const s=Wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=au(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ip(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Ap(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new On;return s&&(k(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(k(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(k(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ep(this,e)}reload(){return Cp(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kt(this,wp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,S=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:N,emailVerified:U,isAnonymous:j,providerData:ge,stsTokenManager:Re}=n;k(N&&Re,e,"internal-error");const Ze=On.fromJSON(this.name,Re);k(typeof N=="string",e,"internal-error"),et(h,e.name),et(d,e.name),k(typeof U=="boolean",e,"internal-error"),k(typeof j=="boolean",e,"internal-error"),et(p,e.name),et(y,e.name),et(w,e.name),et(_,e.name),et(O,e.name),et(S,e.name);const pn=new Et({uid:N,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:j,photoURL:y,phoneNumber:p,tenantId:w,stsTokenManager:Ze,createdAt:O,lastLoginAt:S});return ge&&Array.isArray(ge)&&(pn.providerData=ge.map($r=>Object.assign({},$r))),_&&(pn._redirectEventId=_),pn}static async _fromIdTokenResponse(e,n,s=!1){const r=new On;r.updateFromServerResponse(n);const i=new Et({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Fs(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uu.type="NONE";const Aa=uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e,n){return`firebase:${t}:${e}:${n}`}class $t{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=As(this.userKey,r.apiKey,i),this.fullPersistenceKey=As("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new $t(He(Aa),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||He(Aa);const o=As(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Et._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $t(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new $t(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(du(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pu(e))return"Blackberry";if(mu(e))return"Webos";if(Zi(e))return"Safari";if((e.includes("chrome/")||hu(e))&&!e.includes("edge/"))return"Chrome";if(fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function lu(t=pe()){return/firefox\//i.test(t)}function Zi(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hu(t=pe()){return/crios\//i.test(t)}function du(t=pe()){return/iemobile/i.test(t)}function fu(t=pe()){return/android/i.test(t)}function pu(t=pe()){return/blackberry/i.test(t)}function mu(t=pe()){return/webos/i.test(t)}function ar(t=pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rp(t=pe()){var e;return ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Np(){return jd()&&document.documentMode===10}function gu(t=pe()){return ar(t)||fu(t)||mu(t)||pu(t)||/windows phone/i.test(t)||du(t)}function Dp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e=[]){let n;switch(t){case"Browser":n=Ra(pe());break;case"Worker":n=`${Ra(pe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Na(this),this.idTokenSubscription=new Na(this),this.beforeStateQueue=new Lp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=su,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=He(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await $t.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?G(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&He(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[He(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function rn(t){return G(t)}class Na{constructor(e){this.auth=e,this.observer=null,this.addObserver=ef(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pp(t,e,n){const s=rn(t);k(s._canInitEmulator,s,"emulator-config-failed"),k(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=vu(e),{host:o,port:a}=xp(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Mp()}function vu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xp(t){const e=vu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Da(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Da(o)}}}function Da(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function Up(t,e){return sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function Bp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends eo{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Pn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Pn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Fp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Vp(e,{email:this._email,oobCode:this._password});default:Se(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Up(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Bp(e,{idToken:n,email:this._email,oobCode:this._password});default:Se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="http://localhost";class At extends eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new At(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Se("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Qi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new At(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qt(e,n)}buildRequest(){const e={requestUri:jp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qp(t){const e=vn(wn(t)).link,n=e?vn(wn(e)).deep_link_id:null,s=vn(wn(t)).deep_link_id;return(s?vn(wn(s)).link:null)||s||n||e||t}class to{constructor(e){var n,s,r,i,o,a;const c=vn(wn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=$p((r=c.mode)!==null&&r!==void 0?r:null);k(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qp(e);try{return new to(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.providerId=on.PROVIDER_ID}static credential(e,n){return Pn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=to.parseLink(n);return k(s,"argument-error"),Pn._fromEmailAndCode(e,s.code,s.tenantId)}}on.PROVIDER_ID="password";on.EMAIL_PASSWORD_SIGN_IN_METHOD="password";on.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends no{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Jn{constructor(){super("facebook.com")}static credential(e){return At._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.FACEBOOK_SIGN_IN_METHOD="facebook.com";Be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return At._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return je.credential(n,s)}catch{return null}}}je.GOOGLE_SIGN_IN_METHOD="google.com";je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Jn{constructor(){super("github.com")}static credential(e){return At._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.GITHUB_SIGN_IN_METHOD="github.com";tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Jn{constructor(){super("twitter.com")}static credential(e,n){return At._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return nt.credential(n,s)}catch{return null}}}nt.TWITTER_SIGN_IN_METHOD="twitter.com";nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t,e){return Yn(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Et._fromIdTokenResponse(e,s,r),o=La(s);return new Rt({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=La(s);return new Rt({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function La(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Ve{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Vs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Vs(e,n,s,r)}}function wu(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vs._fromErrorAndOperation(t,i,e,s):i})}async function zp(t,e,n=!1){const s=await Kt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rt._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Kt(t,wu(s,r,e,t),n);k(i.idToken,s,"internal-error");const o=Ji(i.idToken);k(o,s,"internal-error");const{sub:a}=o;return k(t.uid===a,s,"user-mismatch"),Rt._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Se(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t,e,n=!1){const s="signIn",r=await wu(t,s,e),i=await Rt._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Kp(t,e){return _u(rn(t),e)}async function Wp(t,e,n){const s=rn(t),r=await Hp(s,{returnSecureToken:!0,email:e,password:n}),i=await Rt._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Qp(t,e,n){return Kp(G(t),on.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(t,e){return sn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=G(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Kt(s,Xp(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Jp(t,e,n,s){return G(t).onIdTokenChanged(e,n,s)}function Zp(t,e,n){return G(t).beforeAuthStateChanged(e,n)}function em(t,e,n,s){return G(t).onAuthStateChanged(e,n,s)}function tm(t){return G(t).signOut()}async function nm(t){return G(t).delete()}const Bs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(){const t=pe();return Zi(t)||ar(t)}const rm=1e3,im=10;class Iu extends Eu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sm()&&Dp(),this.fallbackToPolling=gu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Np()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,im):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iu.type="LOCAL";const om=Iu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends Eu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tu.type="SESSION";const bu=Tu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new cr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await am(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=so("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function um(t){Me().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function lm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dm(){return Cu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="firebaseLocalStorageDb",fm=1,js="firebaseLocalStorage",ku="fbase_key";class Zn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ur(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function pm(){const t=indexedDB.deleteDatabase(Su);return new Zn(t).toPromise()}function gi(){const t=indexedDB.open(Su,fm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(js,{keyPath:ku})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(js)?e(s):(s.close(),await pm(),e(await gi()))})})}async function Oa(t,e,n){const s=ur(t,!0).put({[ku]:e,value:n});return new Zn(s).toPromise()}async function mm(t,e){const n=ur(t,!1).get(e),s=await new Zn(n).toPromise();return s===void 0?null:s.value}function Pa(t,e){const n=ur(t,!0).delete(e);return new Zn(n).toPromise()}const gm=800,ym=3;class Au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ym)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cr._getInstance(dm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lm(),!this.activeServiceWorker)return;this.sender=new cm(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gi();return await Oa(e,Bs,"1"),await Pa(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oa(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mm(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ur(r,!1).getAll();return new Zn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Au.type="LOCAL";const vm=Au;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _m(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=xe("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",wm().appendChild(s)})}function Em(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t,e){return e?He(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Im(t){return _u(t.auth,new ro(t),t.bypassAuthState)}function Tm(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),Gp(n,new ro(t),t.bypassAuthState)}async function bm(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),zp(n,new ro(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Im;case"linkViaPopup":case"linkViaRedirect":return bm;case"reauthViaPopup":case"reauthViaRedirect":return Tm;default:Se(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=new Qn(2e3,1e4);async function xa(t,e,n){const s=rn(t);lp(t,e,no);const r=Ru(s,n);return new gt(s,"signInViaPopup",e,r).executeNotNull()}class gt extends Nu{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,gt.currentPopupAction&&gt.currentPopupAction.cancel(),gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=so();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cm.get())};e()}}gt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="pendingRedirect",Rs=new Map;class km extends Nu{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Rs.get(this.auth._key());if(!e){try{const s=await Am(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Rs.set(this.auth._key(),e)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Am(t,e){const n=Dm(e),s=Nm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Rm(t,e){Rs.set(t._key(),e)}function Nm(t){return He(t._redirectPersistence)}function Dm(t){return As(Sm,t.config.apiKey,t.name)}async function Lm(t,e,n=!1){const s=rn(t),r=Ru(s,e),o=await new km(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=10*60*1e3;class Pm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Du(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Om&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ma(e))}saveEventToCache(e){this.cachedEventUids.add(Ma(e)),this.lastProcessedEventTime=Date.now()}}function Ma(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Du({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Du(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fm=/^https?/;async function Vm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mm(t);for(const n of e)try{if(Bm(n))return}catch{}Se(t,"unauthorized-domain")}function Bm(t){const e=mi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Fm.test(n))return!1;if(Um.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=new Qn(3e4,6e4);function Ua(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $m(t){return new Promise((e,n)=>{var s,r,i;function o(){Ua(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ua(),n(xe(t,"network-request-failed"))},timeout:jm.get()})}if(!((r=(s=Me().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Me().gapi)===null||i===void 0)&&i.load)o();else{const a=Em("iframefcb");return Me()[a]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},_m(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ns=null,e})}let Ns=null;function qm(t){return Ns=Ns||$m(t),Ns}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new Qn(5e3,15e3),zm="__/auth/iframe",Gm="emulator/auth/iframe",Km={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qm(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yi(e,Gm):`https://${t.config.authDomain}/${zm}`,s={apiKey:e.apiKey,appName:t.name,v:nn},r=Wm.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Wn(s).slice(1)}`}async function Xm(t){const e=await qm(t),n=Me().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:Qm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Km,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),a=Me().setTimeout(()=>{i(o)},Hm.get());function c(){Me().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jm=500,Zm=600,eg="_blank",tg="http://localhost";class Fa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ng(t,e,n,s=Jm,r=Zm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ym),{width:s.toString(),height:r.toString(),top:i,left:o}),u=pe().toLowerCase();n&&(a=hu(u)?eg:n),lu(u)&&(e=e||tg,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(Rp(u)&&a!=="_self")return sg(e||"",a),new Fa(null);const h=window.open(e||"",a,l);k(h,t,"popup-blocked");try{h.focus()}catch{}return new Fa(h)}function sg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="__/auth/handler",ig="emulator/auth/handler";function Va(t,e,n,s,r,i){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nn,eventId:r};if(e instanceof no){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Jn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${og(t)}?${Wn(a).slice(1)}`}function og({config:t}){return t.emulator?Yi(t,ig):`https://${t.authDomain}/${rg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="webStorageSupport";class ag{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bu,this._completeRedirectFn=Lm,this._overrideRedirectResult=Rm}async _openPopup(e,n,s,r){var i;We((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Va(e,n,s,mi(),r);return ng(e,o,so())}async _openRedirect(e,n,s,r){return await this._originValidation(e),um(Va(e,n,s,mi(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(We(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Xm(e),s=new Pm(e);return n.register("authEvent",r=>(k(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qr,{type:Qr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Qr];o!==void 0&&n(!!o),Se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gu()||Zi()||ar()}}const cg=ag;var Ba="@firebase/auth",ja="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hg(t){kt(new at("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{k(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),k(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yu(t)},l=new Op(a,c,u);return dp(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),kt(new at("auth-internal",e=>{const n=rn(e.getProvider("auth").getImmediate());return(s=>new ug(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Ba,ja,lg(t)),Pe(Ba,ja,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=5*60,fg=Xc("authIdTokenMaxAge")||dg;let $a=null;const pg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fg)return;const r=n==null?void 0:n.token;$a!==r&&($a=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $e(t=Wi()){const e=or(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hp(t,{popupRedirectResolver:cg,persistence:[vm,om,bu]}),s=Xc("authTokenSyncURL");if(s){const i=pg(s);Zp(n,i,()=>i(n.currentUser)),Jp(n,o=>i(o))}const r=Wc("auth");return r&&Pp(n,`http://${r}`),n}hg("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="firebasestorage.googleapis.com",Ou="storageBucket",mg=2*60*1e3,gg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Ve{constructor(e,n,s=0){super(Xr(e),`Firebase Storage: ${n} (${Xr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Xr(t){return"storage/"+t}function io(){const t="An unknown error occurred, please check the error payload for server response.";return new X("unknown",t)}function yg(t){return new X("object-not-found","Object '"+t+"' does not exist.")}function vg(t){return new X("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wg(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new X("unauthenticated",t)}function _g(){return new X("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Eg(t){return new X("unauthorized","User does not have permission to access '"+t+"'.")}function Ig(){return new X("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Tg(){return new X("canceled","User canceled the upload/download.")}function bg(t){return new X("invalid-url","Invalid URL '"+t+"'.")}function Cg(t){return new X("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Sg(){return new X("no-default-bucket","No default bucket found. Did you set the '"+Ou+"' property when initializing the app?")}function kg(){return new X("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ag(){return new X("no-download-url","The given file does not have any download URLs.")}function Rg(t){return new X("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yi(t){return new X("invalid-argument",t)}function Pu(){return new X("app-deleted","The Firebase app was deleted.")}function Ng(t){return new X("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cn(t,e){return new X("invalid-format","String does not match format '"+t+"': "+e)}function gn(t){throw new X("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ie.makeFromUrl(e,n)}catch{return new Ie(e,"")}if(s.path==="")return s;throw Cg(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),y={bucket:1,path:3},w=n===Lu?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",O=new RegExp(`^https?://${w}/${r}/${_}`,"i"),N=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<N.length;U++){const j=N[U],ge=j.regex.exec(e);if(ge){const Re=ge[j.indices.bucket];let Ze=ge[j.indices.path];Ze||(Ze=""),s=new Ie(Re,Ze),j.postModify(s);break}}if(s==null)throw bg(e);return s}}class Dg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(..._){u||(u=!0,e.apply(null,_))}function h(_){r=setTimeout(()=>{r=null,t(p,c())},_)}function d(){i&&clearTimeout(i)}function p(_,...O){if(u){d();return}if(_){d(),l.call(null,_,...O);return}if(c()||o){d(),l.call(null,_,...O);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let y=!1;function w(_){y||(y=!0,d(),!u&&(r!==null?(_||(a=2),clearTimeout(r),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function Og(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){return t!==void 0}function xg(t){return typeof t=="object"&&!Array.isArray(t)}function oo(t){return typeof t=="string"||t instanceof String}function qa(t){return ao()&&t instanceof Blob}function ao(){return typeof Blob<"u"&&!Fd()}function Ha(t,e,n,s){if(s<e)throw yi(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw yi(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function xu(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(It||(It={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,s,r,i,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ws(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===It.NO_ERROR,c=i.getStatus();if((!a||Mg(c,this.additionalRetryCodes_))&&this.retry){const l=i.getErrorCode()===It.ABORT;s(!1,new ws(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ws(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Pg(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=io();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Pu():Tg();o(c)}else{const c=Ig();o(c)}};this.canceled_?n(!1,new ws(!1,null,!0)):this.backoffId_=Lg(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Og(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ws{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Fg(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Vg(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Bg(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jg(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $g(t,e,n,s,r,i,o=!0){const a=xu(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return Bg(u,e),Fg(u,n),Vg(u,i),jg(u,s),new Ug(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Hg(...t){const e=qg();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(ao())return new Blob(t);throw new X("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function zg(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){if(typeof atob>"u")throw Rg("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yr{constructor(e,n){this.data=e,this.contentType=n||null}}function Kg(t,e){switch(t){case Le.RAW:return new Yr(Mu(e));case Le.BASE64:case Le.BASE64URL:return new Yr(Uu(t,e));case Le.DATA_URL:return new Yr(Qg(e),Xg(e))}throw io()}function Mu(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Wg(t){let e;try{e=decodeURIComponent(t)}catch{throw Cn(Le.DATA_URL,"Malformed data URL.")}return Mu(e)}function Uu(t,e){switch(t){case Le.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Cn(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Le.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Cn(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Gg(e)}catch(r){throw r.message.includes("polyfill")?r:Cn(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Fu{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Cn(Le.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Yg(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Qg(t){const e=new Fu(t);return e.base64?Uu(Le.BASE64,e.rest):Wg(e.rest)}function Xg(t){return new Fu(t).contentType}function Yg(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){let s=0,r="";qa(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(qa(this.data_)){const s=this.data_,r=zg(s,e,n);return r===null?null:new st(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new st(s,!0)}}static getBlob(...e){if(ao()){const n=e.map(s=>s instanceof st?s.data_:s);return new st(Hg.apply(null,n))}else{const n=e.map(o=>oo(o)?Kg(Le.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new st(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t){let e;try{e=JSON.parse(t)}catch{return null}return xg(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Zg(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Bu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t,e){return e}class ye{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||ey}}let _s=null;function ty(t){return!oo(t)||t.length<2?t:Bu(t)}function ju(){if(_s)return _s;const t=[];t.push(new ye("bucket")),t.push(new ye("generation")),t.push(new ye("metageneration")),t.push(new ye("name","fullPath",!0));function e(i,o){return ty(o)}const n=new ye("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ye("size");return r.xform=s,t.push(r),t.push(new ye("timeCreated")),t.push(new ye("updated")),t.push(new ye("md5Hash",null,!0)),t.push(new ye("cacheControl",null,!0)),t.push(new ye("contentDisposition",null,!0)),t.push(new ye("contentEncoding",null,!0)),t.push(new ye("contentLanguage",null,!0)),t.push(new ye("contentType",null,!0)),t.push(new ye("metadata","customMetadata",!0)),_s=t,_s}function ny(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Ie(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function sy(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return ny(s,t),s}function $u(t,e,n){const s=Vu(e);return s===null?null:sy(t,s,n)}function ry(t,e,n,s){const r=Vu(e);if(r===null||!oo(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),p=co(d,n,s),y=xu({alt:"media",token:u});return p+y})[0]}function iy(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class qu{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){if(!t)throw io()}function oy(t,e){function n(s,r){const i=$u(t,r,e);return Hu(i!==null),i}return n}function ay(t,e){function n(s,r){const i=$u(t,r,e);return Hu(i!==null),ry(i,r,t.host,t._protocol)}return n}function zu(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=_g():r=wg():n.getStatus()===402?r=vg(t.bucket):n.getStatus()===403?r=Eg(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function cy(t){const e=zu(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=yg(t.path)),i.serverResponse=r.serverResponse,i}return n}function uy(t,e,n){const s=e.fullServerUrl(),r=co(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new qu(r,i,ay(t,n),o);return a.errorHandler=cy(e),a}function ly(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function hy(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=ly(null,e)),s}function dy(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let U=0;U<2;U++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=hy(e,s,r),l=iy(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=st.getBlob(h,s,d);if(p===null)throw kg();const y={name:u.fullPath},w=co(i,t.host,t._protocol),_="POST",O=t.maxUploadRetryTime,S=new qu(w,_,oy(t,n),O);return S.urlParams=y,S.headers=o,S.body=p.uploadData(),S.errorHandler=zu(e),S}class fy{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=It.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=It.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=It.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw gn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class py extends fy{initXhr(){this.xhr_.responseType="text"}}function Gu(){return new py}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this._service=e,n instanceof Ie?this._location=n:this._location=Ie.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nt(e,n)}get root(){const e=new Ie(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bu(this._location.path)}get storage(){return this._service}get parent(){const e=Jg(this._location.path);if(e===null)return null;const n=new Ie(this._location.bucket,e);return new Nt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ng(e)}}function my(t,e,n){t._throwIfRoot("uploadBytes");const s=dy(t.storage,t._location,ju(),new st(e,!0),n);return t.storage.makeRequestWithTokens(s,Gu).then(r=>({metadata:r,ref:t}))}function gy(t){t._throwIfRoot("getDownloadURL");const e=uy(t.storage,t._location,ju());return t.storage.makeRequestWithTokens(e,Gu).then(n=>{if(n===null)throw Ag();return n})}function yy(t,e){const n=Zg(t._location.path,e),s=new Ie(t._location.bucket,n);return new Nt(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){return/^[A-Za-z]+:\/\//.test(t)}function wy(t,e){return new Nt(t,e)}function Ku(t,e){if(t instanceof uo){const n=t;if(n._bucket==null)throw Sg();const s=new Nt(n,n._bucket);return e!=null?Ku(s,e):s}else return e!==void 0?yy(t,e):t}function _y(t,e){if(e&&vy(e)){if(t instanceof uo)return wy(t,e);throw yi("To use ref(service, url), the first argument must be a Storage instance.")}else return Ku(t,e)}function za(t,e){const n=e==null?void 0:e[Ou];return n==null?null:Ie.makeFromBucketSpec(n,t)}function Ey(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Yc(r,t.app.options.projectId))}class uo{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Lu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mg,this._maxUploadRetryTime=gg,this._requests=new Set,r!=null?this._bucket=Ie.makeFromBucketSpec(r,this._host):this._bucket=za(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ie.makeFromBucketSpec(this._url,e):this._bucket=za(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ha("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ha("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nt(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new Dg(Pu());{const o=$g(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Ga="@firebase/storage",Ka="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="storage";function lo(t,e,n){return t=G(t),my(t,e,n)}function ho(t){return t=G(t),gy(t)}function fo(t,e){return t=G(t),_y(t,e)}function po(t=Wi(),e){t=G(t);const s=or(t,Wu).getImmediate({identifier:e}),r=Qc("storage");return r&&Iy(s,...r),s}function Iy(t,e,n,s={}){Ey(t,e,n,s)}function Ty(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new uo(n,s,r,e,nn)}function by(){kt(new at(Wu,Ty,"PUBLIC").setMultipleInstances(!0)),Pe(Ga,Ka,""),Pe(Ga,Ka,"esm2017")}by();var Cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,mo=mo||{},R=Cy||self;function $s(){}function lr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function es(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Sy(t){return Object.prototype.hasOwnProperty.call(t,Jr)&&t[Jr]||(t[Jr]=++ky)}var Jr="closure_uid_"+(1e9*Math.random()>>>0),ky=0;function Ay(t,e,n){return t.call.apply(t.bind,arguments)}function Ry(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function de(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?de=Ay:de=Ry,de.apply(null,arguments)}function Es(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ce(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ht(){this.s=this.s,this.o=this.o}var Ny=0;ht.prototype.s=!1;ht.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ny!=0)&&Sy(this)};ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function go(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Wa(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(lr(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Dy=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{R.addEventListener("test",$s,e),R.removeEventListener("test",$s,e)}catch{}return t}();function qs(t){return/^[\s\xa0]*$/.test(t)}var Qa=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Zr(t,e){return t<e?-1:t>e?1:0}function hr(){var t=R.navigator;return t&&(t=t.userAgent)?t:""}function De(t){return hr().indexOf(t)!=-1}function yo(t){return yo[" "](t),t}yo[" "]=$s;function Ly(t){var e=xy;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Oy=De("Opera"),Wt=De("Trident")||De("MSIE"),Xu=De("Edge"),vi=Xu||Wt,Yu=De("Gecko")&&!(hr().toLowerCase().indexOf("webkit")!=-1&&!De("Edge"))&&!(De("Trident")||De("MSIE"))&&!De("Edge"),Py=hr().toLowerCase().indexOf("webkit")!=-1&&!De("Edge");function Ju(){var t=R.document;return t?t.documentMode:void 0}var Hs;e:{var ei="",ti=function(){var t=hr();if(Yu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xu)return/Edge\/([\d\.]+)/.exec(t);if(Wt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Py)return/WebKit\/(\S+)/.exec(t);if(Oy)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ti&&(ei=ti?ti[1]:""),Wt){var ni=Ju();if(ni!=null&&ni>parseFloat(ei)){Hs=String(ni);break e}}Hs=ei}var xy={};function My(){return Ly(function(){let t=0;const e=Qa(String(Hs)).split("."),n=Qa("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Zr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Zr(r[2].length==0,i[2].length==0)||Zr(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var wi;if(R.document&&Wt){var Xa=Ju();wi=Xa||parseInt(Hs,10)||void 0}else wi=void 0;var Uy=wi;function xn(t,e){if(fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Yu){e:{try{yo(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Fy[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xn.X.h.call(this)}}ce(xn,fe);var Fy={2:"touch",3:"pen",4:"mouse"};xn.prototype.h=function(){xn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ts="closure_listenable_"+(1e6*Math.random()|0),Vy=0;function By(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Vy,this.ba=this.ea=!1}function dr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function vo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Zu(t){const e={};for(const n in t)e[n]=t[n];return e}const Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function el(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ya.length;i++)n=Ya[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function fr(t){this.src=t,this.g={},this.h=0}fr.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ei(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new By(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function _i(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Qu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(dr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ei(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var wo="closure_lm_"+(1e6*Math.random()|0),si={};function tl(t,e,n,s,r){if(s&&s.once)return sl(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)tl(t,e[i],n,s,r);return null}return n=Io(n),t&&t[ts]?t.N(e,n,es(s)?!!s.capture:!!s,r):nl(t,e,n,!1,s,r)}function nl(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=es(r)?!!r.capture:!!r,a=Eo(t);if(a||(t[wo]=a=new fr(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=jy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Dy||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(il(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jy(){function t(n){return e.call(t.src,t.listener,n)}const e=$y;return t}function sl(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)sl(t,e[i],n,s,r);return null}return n=Io(n),t&&t[ts]?t.O(e,n,es(s)?!!s.capture:!!s,r):nl(t,e,n,!0,s,r)}function rl(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)rl(t,e[i],n,s,r);else s=es(s)?!!s.capture:!!s,n=Io(n),t&&t[ts]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ei(i,n,s,r),-1<n&&(dr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ei(e,n,s,r)),(n=-1<t?e[t]:null)&&_o(n))}function _o(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ts])_i(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(il(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Eo(e))?(_i(n,t),n.h==0&&(n.src=null,e[wo]=null)):dr(t)}}}function il(t){return t in si?si[t]:si[t]="on"+t}function $y(t,e){if(t.ba)t=!0;else{e=new xn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&_o(t),t=n.call(s,e)}return t}function Eo(t){return t=t[wo],t instanceof fr?t:null}var ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function Io(t){return typeof t=="function"?t:(t[ri]||(t[ri]=function(e){return t.handleEvent(e)}),t[ri])}function ie(){ht.call(this),this.i=new fr(this),this.P=this,this.I=null}ce(ie,ht);ie.prototype[ts]=!0;ie.prototype.removeEventListener=function(t,e,n,s){rl(this,t,e,n,s)};function ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new fe(e,t);else if(e instanceof fe)e.target=e.target||t;else{var r=e;e=new fe(s,t),el(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Is(o,s,!0,e)&&r}if(o=e.g=t,r=Is(o,s,!0,e)&&r,r=Is(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Is(o,s,!1,e)&&r}ie.prototype.M=function(){if(ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)dr(n[s]);delete t.g[e],t.h--}}this.I=null};ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Is(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&_i(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var To=R.JSON.stringify;function qy(){var t=cl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Hy{constructor(){this.h=this.g=null}add(e,n){const s=ol.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ol=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new zy,t=>t.reset());class zy{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gy(t){R.setTimeout(()=>{throw t},0)}function al(t,e){Ii||Ky(),Ti||(Ii(),Ti=!0),cl.add(t,e)}var Ii;function Ky(){var t=R.Promise.resolve(void 0);Ii=function(){t.then(Wy)}}var Ti=!1,cl=new Hy;function Wy(){for(var t;t=qy();){try{t.h.call(t.g)}catch(n){Gy(n)}var e=ol;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ti=!1}function pr(t,e){ie.call(this),this.h=t||1,this.g=e||R,this.j=de(this.lb,this),this.l=Date.now()}ce(pr,ie);T=pr.prototype;T.ca=!1;T.R=null;T.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ae(this,"tick"),this.ca&&(bo(this),this.start()))}};T.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}T.M=function(){pr.X.M.call(this),bo(this),delete this.g};function Co(t,e,n){if(typeof t=="function")n&&(t=de(t,n));else if(t&&typeof t.handleEvent=="function")t=de(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(t,e||0)}function ul(t){t.g=Co(()=>{t.g=null,t.i&&(t.i=!1,ul(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Qy extends ht{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ul(this)}M(){super.M(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(t){ht.call(this),this.h=t,this.g={}}ce(Mn,ht);var Ja=[];function ll(t,e,n,s){Array.isArray(n)||(n&&(Ja[0]=n.toString()),n=Ja);for(var r=0;r<n.length;r++){var i=tl(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function hl(t){vo(t.g,function(e,n){this.g.hasOwnProperty(n)&&_o(e)},t),t.g={}}Mn.prototype.M=function(){Mn.X.M.call(this),hl(this)};Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mr(){this.g=!0}mr.prototype.Aa=function(){this.g=!1};function Xy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Yy(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function jt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Zy(t,n)+(s?" "+s:"")})}function Jy(t,e){t.info(function(){return"TIMEOUT: "+e})}mr.prototype.info=function(){};function Zy(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return To(n)}catch{return e}}var Pt={},Za=null;function gr(){return Za=Za||new ie}Pt.Pa="serverreachability";function dl(t){fe.call(this,Pt.Pa,t)}ce(dl,fe);function Un(t){const e=gr();ae(e,new dl(e))}Pt.STAT_EVENT="statevent";function fl(t,e){fe.call(this,Pt.STAT_EVENT,t),this.stat=e}ce(fl,fe);function we(t){const e=gr();ae(e,new fl(e,t))}Pt.Qa="timingevent";function pl(t,e){fe.call(this,Pt.Qa,t),this.size=e}ce(pl,fe);function ns(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){t()},e)}var yr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ml={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function So(){}So.prototype.h=null;function ec(t){return t.h||(t.h=t.i())}function gl(){}var ss={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ko(){fe.call(this,"d")}ce(ko,fe);function Ao(){fe.call(this,"c")}ce(Ao,fe);var bi;function vr(){}ce(vr,So);vr.prototype.g=function(){return new XMLHttpRequest};vr.prototype.i=function(){return{}};bi=new vr;function rs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Mn(this),this.O=ev,t=vi?125:void 0,this.T=new pr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var ev=45e3,Ci={},zs={};T=rs.prototype;T.setTimeout=function(t){this.O=t};function Si(t,e,n){t.K=1,t.v=_r(Qe(e)),t.s=n,t.P=!0,vl(t,null)}function vl(t,e){t.F=Date.now(),is(t),t.A=Qe(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Sl(n.i,"t",s),t.C=0,n=t.l.H,t.h=new yl,t.g=Kl(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Qy(de(t.La,t,t.g),t.N)),ll(t.S,t.g,"readystatechange",t.ib),e=t.H?Zu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Un(),Xy(t.j,t.u,t.A,t.m,t.U,t.s)}T.ib=function(t){t=t.target;const e=this.L;e&&ze(t)==3?e.l():this.La(t)};T.La=function(t){try{if(t==this.g)e:{const l=ze(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||vi||this.g&&(this.h.h||this.g.fa()||rc(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Un(3):Un(2)),wr(this);var n=this.g.aa();this.Y=n;t:if(wl(this)){var s=rc(this.g);t="";var r=s.length,i=ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yt(this),Sn(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Yy(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qs(a)){var u=a;break t}}u=null}if(n=u)jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ki(this,n);else{this.i=!1,this.o=3,we(12),yt(this),Sn(this);break e}}this.P?(_l(this,l,o),vi&&this.i&&l==3&&(ll(this.S,this.T,"tick",this.hb),this.T.start())):(jt(this.j,this.m,o,null),ki(this,o)),l==4&&yt(this),this.i&&!this.I&&(l==4?ql(this.l,this):(this.i=!1,is(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,we(12)):(this.o=0,we(13)),yt(this),Sn(this)}}}catch{}finally{}};function wl(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function _l(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=tv(t,n),r==zs){e==4&&(t.o=4,we(14),s=!1),jt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ci){t.o=4,we(15),jt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else jt(t.j,t.m,r,null),ki(t,r);wl(t)&&r!=zs&&r!=Ci&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,we(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xo(e),e.K=!0,we(11))):(jt(t.j,t.m,n,"[Invalid Chunked Response]"),yt(t),Sn(t))}T.hb=function(){if(this.g){var t=ze(this.g),e=this.g.fa();this.C<e.length&&(wr(this),_l(this,t,e),this.i&&t!=4&&is(this))}};function tv(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?zs:(n=Number(e.substring(n,s)),isNaN(n)?Ci:(s+=1,s+n>e.length?zs:(e=e.substr(s,n),t.C=s+n,e)))}T.cancel=function(){this.I=!0,yt(this)};function is(t){t.V=Date.now()+t.O,El(t,t.O)}function El(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ns(de(t.gb,t),e)}function wr(t){t.B&&(R.clearTimeout(t.B),t.B=null)}T.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Jy(this.j,this.A),this.K!=2&&(Un(),we(17)),yt(this),this.o=2,Sn(this)):El(this,this.V-t)};function Sn(t){t.l.G==0||t.I||ql(t.l,t)}function yt(t){wr(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,bo(t.T),hl(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ki(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ai(n.h,t))){if(!t.J&&Ai(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ws(n),Tr(n);else break e;Po(n),we(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ns(de(n.cb,n),6e3));if(1>=Rl(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else vt(n,11)}else if((t.J||n.g==t)&&Ws(n),!qs(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ro(i,i.h),i.h=null))}if(s.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,z(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Gl(s,s.H?s.ka:null,s.V),o.J){Nl(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(wr(a),is(a)),s.g=o}else jl(s);0<n.i.length&&br(n)}else u[0]!="stop"&&u[0]!="close"||vt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vt(n,7):Oo(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Un(4)}catch{}}function nv(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(lr(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function sv(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(lr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Il(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sv(t),s=nv(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rv(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Tt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Tt){this.h=e!==void 0?e:t.h,Gs(this,t.j),this.s=t.s,this.g=t.g,Ks(this,t.m),this.l=t.l,e=t.i;var n=new Fn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),tc(this,n),this.o=t.o}else t&&(n=String(t).match(Tl))?(this.h=!!e,Gs(this,n[1]||"",!0),this.s=_n(n[2]||""),this.g=_n(n[3]||"",!0),Ks(this,n[4]),this.l=_n(n[5]||"",!0),tc(this,n[6]||"",!0),this.o=_n(n[7]||"")):(this.h=!!e,this.i=new Fn(null,this.h))}Tt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(En(e,nc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(En(e,nc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(En(n,n.charAt(0)=="/"?av:ov,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",En(n,uv)),t.join("")};function Qe(t){return new Tt(t)}function Gs(t,e,n){t.j=n?_n(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ks(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tc(t,e,n){e instanceof Fn?(t.i=e,lv(t.i,t.h)):(n||(e=En(e,cv)),t.i=new Fn(e,t.h))}function z(t,e,n){t.i.set(e,n)}function _r(t){return z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _n(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function En(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iv),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iv(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nc=/[#\/\?@]/g,ov=/[#\?:]/g,av=/[#\?]/g,cv=/[#\?@]/g,uv=/#/g;function Fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dt(t){t.g||(t.g=new Map,t.h=0,t.i&&rv(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}T=Fn.prototype;T.add=function(t,e){dt(this),this.i=null,t=an(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bl(t,e){dt(t),e=an(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cl(t,e){return dt(t),e=an(t,e),t.g.has(e)}T.forEach=function(t,e){dt(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};T.oa=function(){dt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};T.W=function(t){dt(this);let e=[];if(typeof t=="string")Cl(this,t)&&(e=e.concat(this.g.get(an(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};T.set=function(t,e){return dt(this),this.i=null,t=an(this,t),Cl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};T.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Sl(t,e,n){bl(t,e),0<n.length&&(t.i=null,t.g.set(an(t,e),go(n)),t.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function an(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lv(t,e){e&&!t.j&&(dt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(bl(this,s),Sl(this,r,n))},t)),t.j=e}var hv=class{constructor(e,n){this.h=e,this.g=n}};function kl(t){this.l=t||dv,R.PerformanceNavigationTiming?(t=R.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(R.g&&R.g.Ga&&R.g.Ga()&&R.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dv=10;function Al(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rl(t){return t.h?1:t.g?t.g.size:0}function Ai(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ro(t,e){t.g?t.g.add(e):t.h=e}function Nl(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kl.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dl(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return go(t.i)}function No(){}No.prototype.stringify=function(t){return R.JSON.stringify(t,void 0)};No.prototype.parse=function(t){return R.JSON.parse(t,void 0)};function fv(){this.g=new No}function pv(t,e,n){const s=n||"";try{Il(t,function(r,i){let o=r;es(r)&&(o=To(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function mv(t,e){const n=new mr;if(R.Image){const s=new Image;s.onload=Es(Ts,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Es(Ts,n,s,"TestLoadImage: error",!1,e),s.onabort=Es(Ts,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Es(Ts,n,s,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ts(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function os(t){this.l=t.ac||null,this.j=t.jb||!1}ce(os,So);os.prototype.g=function(){return new Er(this.l,this.j)};os.prototype.i=function(t){return function(){return t}}({});function Er(t,e){ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Do,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(Er,ie);var Do=0;T=Er.prototype;T.open=function(t,e){if(this.readyState!=Do)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vn(this)};T.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||R).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,as(this)),this.readyState=Do};T.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ll(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ll(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}T.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?as(this):Vn(this),this.readyState==3&&Ll(this)}};T.Va=function(t){this.g&&(this.response=this.responseText=t,as(this))};T.Ua=function(t){this.g&&(this.response=t,as(this))};T.ga=function(){this.g&&as(this)};function as(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vn(t)}T.setRequestHeader=function(t,e){this.v.append(t,e)};T.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Vn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gv=R.JSON.parse;function Q(t){ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ol,this.K=this.L=!1}ce(Q,ie);var Ol="",yv=/^https?$/i,vv=["POST","PUT"];T=Q.prototype;T.Ka=function(t){this.L=t};T.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bi.g(),this.C=this.u?ec(this.u):ec(bi),this.g.onreadystatechange=de(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){sc(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=R.FormData&&t instanceof R.FormData,!(0<=Qu(vv,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ml(this),0<this.B&&((this.K=wv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=de(this.qa,this)):this.A=Co(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sc(this,i)}};function wv(t){return Wt&&My()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}T.qa=function(){typeof mo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ae(this,"timeout"),this.abort(8))};function sc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pl(t),Ir(t)}function Pl(t){t.D||(t.D=!0,ae(t,"complete"),ae(t,"error"))}T.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ae(this,"complete"),ae(this,"abort"),Ir(this))};T.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ir(this,!0)),Q.X.M.call(this)};T.Ha=function(){this.s||(this.F||this.v||this.l?xl(this):this.fb())};T.fb=function(){xl(this)};function xl(t){if(t.h&&typeof mo<"u"&&(!t.C[1]||ze(t)!=4||t.aa()!=2)){if(t.v&&ze(t)==4)Co(t.Ha,0,t);else if(ae(t,"readystatechange"),ze(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Tl)[1]||null;if(!r&&R.self&&R.self.location){var i=R.self.location.protocol;r=i.substr(0,i.length-1)}s=!yv.test(r?r.toLowerCase():"")}n=s}if(n)ae(t,"complete"),ae(t,"success");else{t.m=6;try{var o=2<ze(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Pl(t)}}finally{Ir(t)}}}}function Ir(t,e){if(t.g){Ml(t);const n=t.g,s=t.C[0]?$s:null;t.g=null,t.C=null,e||ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ml(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(R.clearTimeout(t.A),t.A=null)}function ze(t){return t.g?t.g.readyState:0}T.aa=function(){try{return 2<ze(this)?this.g.status:-1}catch{return-1}};T.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gv(e)}};function rc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ol:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}T.Ea=function(){return this.m};T.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ul(t){let e="";return vo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Lo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ul(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):z(t,e,n))}function yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Fl(t){this.Ca=0,this.i=[],this.j=new mr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=yn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=yn("baseRetryDelayMs",5e3,t),this.bb=yn("retryDelaySeedMs",1e4,t),this.$a=yn("forwardChannelMaxRetries",2,t),this.ta=yn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kl(t&&t.concurrentRequestLimit),this.Fa=new fv,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}T=Fl.prototype;T.ma=8;T.G=1;function Oo(t){if(Vl(t),t.G==3){var e=t.U++,n=Qe(t.F);z(n,"SID",t.I),z(n,"RID",e),z(n,"TYPE","terminate"),cs(t,n),e=new rs(t,t.j,e,void 0),e.K=2,e.v=_r(Qe(n)),n=!1,R.navigator&&R.navigator.sendBeacon&&(n=R.navigator.sendBeacon(e.v.toString(),"")),!n&&R.Image&&(new Image().src=e.v,n=!0),n||(e.g=Kl(e.l,null),e.g.da(e.v)),e.F=Date.now(),is(e)}zl(t)}function Tr(t){t.g&&(xo(t),t.g.cancel(),t.g=null)}function Vl(t){Tr(t),t.u&&(R.clearTimeout(t.u),t.u=null),Ws(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&R.clearTimeout(t.m),t.m=null)}function br(t){Al(t.h)||t.m||(t.m=!0,al(t.Ja,t),t.C=0)}function _v(t,e){return Rl(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ns(de(t.Ja,t,e),Hl(t,t.C)),t.C++,!0)}T.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new rs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Zu(i),el(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bl(this,r,e),n=Qe(this.F),z(n,"RID",t),z(n,"CVER",22),this.D&&z(n,"X-HTTP-Session-Id",this.D),cs(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ul(i)))+"&"+e:this.o&&Lo(n,this.o,i)),Ro(this.h,r),this.Ya&&z(n,"TYPE","init"),this.O?(z(n,"$req",e),z(n,"SID","null"),r.Z=!0,Si(r,n,null)):Si(r,n,e),this.G=2}}else this.G==3&&(t?ic(this,t):this.i.length==0||Al(this.h)||ic(this))};function ic(t,e){var n;e?n=e.m:n=t.U++;const s=Qe(t.F);z(s,"SID",t.I),z(s,"RID",n),z(s,"AID",t.T),cs(t,s),t.o&&t.s&&Lo(s,t.o,t.s),n=new rs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Bl(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ro(t.h,n),Si(n,s,e)}function cs(t,e){t.ia&&vo(t.ia,function(n,s){z(e,s,n)}),t.l&&Il({},function(n,s){z(e,s,n)})}function Bl(t,e,n){n=Math.min(t.i.length,n);var s=t.l?de(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{pv(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function jl(t){t.g||t.u||(t.Z=1,al(t.Ia,t),t.A=0)}function Po(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ns(de(t.Ia,t),Hl(t,t.A)),t.A++,!0)}T.Ia=function(){if(this.u=null,$l(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ns(de(this.eb,this),t)}};T.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,we(10),Tr(this),$l(this))};function xo(t){t.B!=null&&(R.clearTimeout(t.B),t.B=null)}function $l(t){t.g=new rs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Qe(t.sa);z(e,"RID","rpc"),z(e,"SID",t.I),z(e,"CI",t.L?"0":"1"),z(e,"AID",t.T),z(e,"TYPE","xmlhttp"),cs(t,e),t.o&&t.s&&Lo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=_r(Qe(e)),n.s=null,n.P=!0,vl(n,t)}T.cb=function(){this.v!=null&&(this.v=null,Tr(this),Po(this),we(19))};function Ws(t){t.v!=null&&(R.clearTimeout(t.v),t.v=null)}function ql(t,e){var n=null;if(t.g==e){Ws(t),xo(t),t.g=null;var s=2}else if(Ai(t.h,e))n=e.D,Nl(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=gr(),ae(s,new pl(s,n)),br(t)}else jl(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&_v(t,e)||s==2&&Po(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:vt(t,5);break;case 4:vt(t,10);break;case 3:vt(t,6);break;default:vt(t,2)}}}function Hl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function vt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=de(t.kb,t);n||(n=new Tt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Gs(n,"https"),_r(n)),mv(n.toString(),s)}else we(2);t.G=0,t.l&&t.l.va(e),zl(t),Vl(t)}T.kb=function(t){t?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function zl(t){if(t.G=0,t.la=[],t.l){const e=Dl(t.h);(e.length!=0||t.i.length!=0)&&(Wa(t.la,e),Wa(t.la,t.i),t.h.i.length=0,go(t.i),t.i.length=0),t.l.ua()}}function Gl(t,e,n){var s=n instanceof Tt?Qe(n):new Tt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ks(s,s.m);else{var r=R.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Tt(null,void 0);s&&Gs(i,s),e&&(i.g=e),r&&Ks(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&z(s,n,e),z(s,"VER",t.ma),cs(t,s),s}function Kl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Q(new os({jb:!0})):new Q(t.ra),e.Ka(t.H),e}function Wl(){}T=Wl.prototype;T.xa=function(){};T.wa=function(){};T.va=function(){};T.ua=function(){};T.Ra=function(){};function Qs(){if(Wt&&!(10<=Number(Uy)))throw Error("Environmental error: no available transport.")}Qs.prototype.g=function(t,e){return new Te(t,e)};function Te(t,e){ie.call(this),this.g=new Fl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!qs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qs(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new cn(this)}ce(Te,ie);Te.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;we(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Gl(t,null,t.V),br(t)};Te.prototype.close=function(){Oo(this.g)};Te.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=To(t),t=n);e.i.push(new hv(e.ab++,t)),e.G==3&&br(e)};Te.prototype.M=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,Te.X.M.call(this)};function Ql(t){ko.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ce(Ql,ko);function Xl(){Ao.call(this),this.status=1}ce(Xl,Ao);function cn(t){this.g=t}ce(cn,Wl);cn.prototype.xa=function(){ae(this.g,"a")};cn.prototype.wa=function(t){ae(this.g,new Ql(t))};cn.prototype.va=function(t){ae(this.g,new Xl)};cn.prototype.ua=function(){ae(this.g,"b")};Qs.prototype.createWebChannel=Qs.prototype.g;Te.prototype.send=Te.prototype.u;Te.prototype.open=Te.prototype.m;Te.prototype.close=Te.prototype.close;yr.NO_ERROR=0;yr.TIMEOUT=8;yr.HTTP_ERROR=6;ml.COMPLETE="complete";gl.EventType=ss;ss.OPEN="a";ss.CLOSE="b";ss.ERROR="c";ss.MESSAGE="d";ie.prototype.listen=ie.prototype.N;Q.prototype.listenOnce=Q.prototype.O;Q.prototype.getLastError=Q.prototype.Oa;Q.prototype.getLastErrorCode=Q.prototype.Ea;Q.prototype.getStatus=Q.prototype.aa;Q.prototype.getResponseJson=Q.prototype.Sa;Q.prototype.getResponseText=Q.prototype.fa;Q.prototype.send=Q.prototype.da;Q.prototype.setWithCredentials=Q.prototype.Ka;var Ev=function(){return new Qs},Iv=function(){return gr()},ii=yr,Tv=ml,bv=Pt,oc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Cv=os,bs=gl,Sv=Q;const ac="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ue.UNAUTHENTICATED=new ue(null),ue.GOOGLE_CREDENTIALS=new ue("google-credentials-uid"),ue.FIRST_PARTY=new ue("first-party-uid"),ue.MOCK_USER=new ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new zi("@firebase/firestore");function cc(){return Dt.logLevel}function b(t,...e){if(Dt.logLevel<=F.DEBUG){const n=e.map(Mo);Dt.debug(`Firestore (${un}): ${t}`,...n)}}function Xe(t,...e){if(Dt.logLevel<=F.ERROR){const n=e.map(Mo);Dt.error(`Firestore (${un}): ${t}`,...n)}}function Ri(t,...e){if(Dt.logLevel<=F.WARN){const n=e.map(Mo);Dt.warn(`Firestore (${un}): ${t}`,...n)}}function Mo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t="Unexpected state"){const e=`FIRESTORE (${un}) INTERNAL ASSERTION FAILED: `+t;throw Xe(e),new Error(e)}function $(t,e){t||A()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Ve{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ue.UNAUTHENTICATED))}shutdown(){}}class Av{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let Rv=class{constructor(e){this.t=e,this.currentUser=ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ge,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ge)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($(typeof s.accessToken=="string"),new Yl(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new ue(e)}};class Nv{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ue.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():($(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Dv{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Nv(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ov{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.A=n.token,new Lv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Pv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function B(t,e){return t<e?-1:t>e?1:0}function Qt(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ee(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?B(this.nanoseconds,e.nanoseconds):B(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new ee(0,0))}static max(){return new D(new ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,s){n===void 0?n=0:n>e.length&&A(),s===void 0?s=e.length-n:s>e.length-n&&A(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class H extends Bn{construct(e,n,s){return new H(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new E(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new H(n)}static emptyPath(){return new H([])}}const xv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends Bn{construct(e,n,s){return new he(e,n,s)}static isValidIdentifier(e){return xv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new he(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new E(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new E(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new E(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(n)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.path=e}static fromPath(e){return new C(H.fromString(e))}static fromName(e){return new C(H.fromString(e).popFirst(5))}static empty(){return new C(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&H.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return H.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new H(e.slice()))}}function Mv(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=D.fromTimestamp(s===1e9?new ee(n+1,0):new ee(n,s));return new ct(r,C.empty(),e)}function Uv(t){return new ct(t.readTime,t.key,-1)}class ct{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ct(D.min(),C.empty(),-1)}static max(){return new ct(D.max(),C.empty(),-1)}}function Fv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=C.comparator(t.documentKey,e.documentKey),n!==0?n:B(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Vv)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,s)=>{n(e)})}static reject(e){return new v((n,s)=>{s(e)})}static waitFor(e){return new v((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=v.resolve(!1);for(const s of e)n=n.next(r=>r?v.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new v((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new v((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function ls(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Uo.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class jn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){return t==null}function Xs(t){return t===0&&1/t==-1/0}function $v(t){return typeof t=="number"&&Number.isInteger(t)&&!Xs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new me(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return B(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const qv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(t){if($(!!t),typeof t=="string"){let e=0;const n=qv.exec(t);if($(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:J(t.seconds),nanos:J(t.nanos)}}function J(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xt(t){return typeof t=="string"?me.fromBase64String(t):me.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function th(t){const e=t.mapValue.fields.__previous_value__;return eh(e)?th(e):e}function $n(t){const e=ut(t.mapValue.fields.__local_write_time__.timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Lt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eh(t)?4:Hv(t)?9007199254740991:10:A()}function Fe(t,e){if(t===e)return!0;const n=Lt(t);if(n!==Lt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $n(t).isEqual($n(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=ut(s.timestampValue),o=ut(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Xt(s.bytesValue).isEqual(Xt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return J(s.geoPointValue.latitude)===J(r.geoPointValue.latitude)&&J(s.geoPointValue.longitude)===J(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return J(s.integerValue)===J(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=J(s.doubleValue),o=J(r.doubleValue);return i===o?Xs(i)===Xs(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Qt(t.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(uc(i)!==uc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Fe(i[a],o[a])))return!1;return!0}(t,e);default:return A()}}function qn(t,e){return(t.values||[]).find(n=>Fe(n,e))!==void 0}function Yt(t,e){if(t===e)return 0;const n=Lt(t),s=Lt(e);if(n!==s)return B(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return B(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=J(r.integerValue||r.doubleValue),a=J(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return lc(t.timestampValue,e.timestampValue);case 4:return lc($n(t),$n(e));case 5:return B(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Xt(r),a=Xt(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=B(o[c],a[c]);if(u!==0)return u}return B(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=B(J(r.latitude),J(i.latitude));return o!==0?o:B(J(r.longitude),J(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Yt(o[c],a[c]);if(u)return u}return B(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Cs.mapValue&&i===Cs.mapValue)return 0;if(r===Cs.mapValue)return 1;if(i===Cs.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=B(a[l],u[l]);if(h!==0)return h;const d=Yt(o[a[l]],c[u[l]]);if(d!==0)return d}return B(a.length,u.length)}(t.mapValue,e.mapValue);default:throw A()}}function lc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return B(t,e);const n=ut(t),s=ut(e),r=B(n.seconds,s.seconds);return r!==0?r:B(n.nanos,s.nanos)}function Jt(t){return Ni(t)}function Ni(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=ut(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,C.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ni(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ni(s.fields[a])}`;return i+"}"}(t.mapValue):A();var e,n}function hc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Di(t){return!!t&&"integerValue"in t}function Fo(t){return!!t&&"arrayValue"in t}function dc(t){return!!t&&"nullValue"in t}function fc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ds(t){return!!t&&"mapValue"in t}function kn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=kn(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.position=e,this.inclusive=n}}function pc(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=C.comparator(C.fromName(o.referenceValue),n.key):s=Yt(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function mc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{}class Z extends nh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Kv(e,n,s):n==="array-contains"?new Xv(e,s):n==="in"?new Yv(e,s):n==="not-in"?new Jv(e,s):n==="array-contains-any"?new Zv(e,s):new Z(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Wv(e,s):new Qv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yt(n,this.value)):n!==null&&Lt(this.value)===Lt(n)&&this.matchesComparison(Yt(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ke extends nh{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ke(e,n)}matches(e){return sh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function sh(t){return t.op==="and"}function zv(t){return Gv(t)&&sh(t)}function Gv(t){for(const e of t.filters)if(e instanceof ke)return!1;return!0}function rh(t){if(t instanceof Z)return t.field.canonicalString()+t.op.toString()+Jt(t.value);{const e=t.filters.map(n=>rh(n)).join(",");return`${t.op}(${e})`}}function ih(t,e){return t instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.field.isEqual(s.field)&&Fe(n.value,s.value)}(t,e):t instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ih(i,s.filters[o]),!0):!1}(t,e):void A()}function oh(t){return t instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${Jt(e.value)}`}(t):t instanceof ke?function(e){return e.op.toString()+" {"+e.getFilters().map(oh).join(" ,")+"}"}(t):"Filter"}class Kv extends Z{constructor(e,n,s){super(e,n,s),this.key=C.fromName(s.referenceValue)}matches(e){const n=C.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wv extends Z{constructor(e,n){super(e,"in",n),this.keys=ah("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qv extends Z{constructor(e,n){super(e,"not-in",n),this.keys=ah("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ah(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>C.fromName(s.referenceValue))}class Xv extends Z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fo(n)&&qn(n.arrayValue,this.value)}}class Yv extends Z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qn(this.value.arrayValue,n)}}class Jv extends Z{constructor(e,n){super(e,"not-in",n)}matches(e){if(qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qn(this.value.arrayValue,n)}}class Zv extends Z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>qn(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n="asc"){this.field=e,this.dir=n}}function ew(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.comparator=e,this.root=n||oe.EMPTY}insert(e,n){return new ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,oe.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ss(this.root,e,this.comparator,!0)}}class Ss{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class oe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??oe.RED,this.left=r??oe.EMPTY,this.right=i??oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new oe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return oe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}oe.EMPTY=null,oe.RED=!0,oe.BLACK=!1;oe.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,n,s,r){return this}insert(t,e,n){return new oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gc(this.data.getIterator())}getIteratorFrom(e){return new gc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof te)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new te(this.comparator);return n.data=e,n}}class gc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new be([])}unionWith(e){let n=new te(he.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new be(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ds(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kn(n)}setAll(e){let n=he.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=kn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ds(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ds(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){xt(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ee(kn(this.value))}}function ch(t){const e=[];return xt(t.fields,(n,s)=>{const r=new he([n]);if(Ds(s)){const i=ch(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new be(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new le(e,0,D.min(),D.min(),D.min(),Ee.empty(),0)}static newFoundDocument(e,n,s,r){return new le(e,1,n,D.min(),s,r,0)}static newNoDocument(e,n){return new le(e,2,n,D.min(),D.min(),Ee.empty(),0)}static newUnknownDocument(e,n){return new le(e,3,n,D.min(),D.min(),Ee.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function yc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new tw(t,e,n,s,r,i,o)}function Vo(t){const e=L(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>rh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Cr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jt(s)).join(",")),e.ft=n}return e.ft}function Bo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ew(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ih(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mc(t.startAt,e.startAt)&&mc(t.endAt,e.endAt)}function Li(t){return C.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function nw(t,e,n,s,r,i,o,a){return new hs(t,e,n,s,r,i,o,a)}function jo(t){return new hs(t)}function vc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $o(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function lh(t){return t.collectionGroup!==null}function Ht(t){const e=L(t);if(e.dt===null){e.dt=[];const n=$o(e),s=uh(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new An(n)),e.dt.push(new An(he.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new An(he.keyField(),i))}}}return e.dt}function Ye(t){const e=L(t);if(!e._t)if(e.limitType==="F")e._t=yc(e.path,e.collectionGroup,Ht(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ht(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new An(i.field,o))}const s=e.endAt?new Ys(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ys(e.startAt.position,e.startAt.inclusive):null;e._t=yc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Oi(t,e){e.getFirstInequalityField(),$o(t);const n=t.filters.concat([e]);return new hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pi(t,e,n){return new hs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sr(t,e){return Bo(Ye(t),Ye(e))&&t.limitType===e.limitType}function hh(t){return`${Vo(Ye(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>oh(s)).join(", ")}]`),Cr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jt(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jt(s)).join(",")),`Target(${n})`}(Ye(t))}; limitType=${t.limitType})`}function qo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):C.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Ht(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=pc(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ht(n),s)||n.endAt&&!function(r,i,o){const a=pc(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ht(n),s))}(t,e)}function sw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dh(t){return(e,n)=>{let s=!1;for(const r of Ht(t)){const i=rw(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function rw(t,e,n){const s=t.field.isKeyField()?C.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Yt(a,c):A()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(e)?"-0":e}}function ph(t){return{integerValue:""+t}}function iw(t,e){return $v(e)?ph(e):fh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this._=void 0}}function ow(t,e,n){return t instanceof Js?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Hn?gh(t,e):t instanceof zn?yh(t,e):function(s,r){const i=mh(s,r),o=wc(i)+wc(s.gt);return Di(i)&&Di(s.gt)?ph(o):fh(s.yt,o)}(t,e)}function aw(t,e,n){return t instanceof Hn?gh(t,e):t instanceof zn?yh(t,e):n}function mh(t,e){return t instanceof Zs?Di(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Js extends kr{}class Hn extends kr{constructor(e){super(),this.elements=e}}function gh(t,e){const n=vh(e);for(const s of t.elements)n.some(r=>Fe(r,s))||n.push(s);return{arrayValue:{values:n}}}class zn extends kr{constructor(e){super(),this.elements=e}}function yh(t,e){let n=vh(e);for(const s of t.elements)n=n.filter(r=>!Fe(r,s));return{arrayValue:{values:n}}}class Zs extends kr{constructor(e,n){super(),this.yt=e,this.gt=n}}function wc(t){return J(t.integerValue||t.doubleValue)}function vh(t){return Fo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function cw(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Hn&&s instanceof Hn||n instanceof zn&&s instanceof zn?Qt(n.elements,s.elements,Fe):n instanceof Zs&&s instanceof Zs?Fe(n.gt,s.gt):n instanceof Js&&s instanceof Js}(t.transform,e.transform)}class uw{constructor(e,n){this.version=e,this.transformResults=n}}class Ce{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ce}static exists(e){return new Ce(void 0,e)}static updateTime(e){return new Ce(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ls(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ar{}function wh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ho(t.key,Ce.none()):new ds(t.key,t.data,Ce.none());{const n=t.data,s=Ee.empty();let r=new te(he.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ft(t.key,s,new be(r.toArray()),Ce.none())}}function lw(t,e,n){t instanceof ds?function(s,r,i){const o=s.value.clone(),a=Ec(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ft?function(s,r,i){if(!Ls(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Ec(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(_h(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Rn(t,e,n,s){return t instanceof ds?function(r,i,o,a){if(!Ls(r.precondition,i))return o;const c=r.value.clone(),u=Ic(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof ft?function(r,i,o,a){if(!Ls(r.precondition,i))return o;const c=Ic(r.fieldTransforms,a,i),u=i.data;return u.setAll(_h(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Ls(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function hw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=mh(s.transform,r||null);i!=null&&(n===null&&(n=Ee.empty()),n.set(s.field,i))}return n||null}function _c(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Qt(n,s,(r,i)=>cw(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ds extends Ar{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ft extends Ar{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _h(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ec(t,e,n){const s=new Map;$(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,aw(o,a,n[r]))}return s}function Ic(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ow(i,o,e))}return s}class Ho extends Ar{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dw extends Ar{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,M;function pw(t){switch(t){default:return A();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Eh(t){if(t===void 0)return Xe("GRPC error has no .code"),m.UNKNOWN;switch(t){case Y.OK:return m.OK;case Y.CANCELLED:return m.CANCELLED;case Y.UNKNOWN:return m.UNKNOWN;case Y.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case Y.INTERNAL:return m.INTERNAL;case Y.UNAVAILABLE:return m.UNAVAILABLE;case Y.UNAUTHENTICATED:return m.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case Y.NOT_FOUND:return m.NOT_FOUND;case Y.ALREADY_EXISTS:return m.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return m.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case Y.ABORTED:return m.ABORTED;case Y.OUT_OF_RANGE:return m.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return m.UNIMPLEMENTED;case Y.DATA_LOSS:return m.DATA_LOSS;default:return A()}}(M=Y||(Y={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xt(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Zl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=new ne(C.comparator);function Je(){return mw}const Ih=new ne(C.comparator);function In(...t){let e=Ih;for(const n of t)e=e.insert(n.key,n);return e}function Th(t){let e=Ih;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function wt(){return Nn()}function bh(){return Nn()}function Nn(){return new ln(t=>t.toString(),(t,e)=>t.isEqual(e))}const gw=new ne(C.comparator),yw=new te(C.comparator);function P(...t){let e=yw;for(const n of t)e=e.add(n);return e}const vw=new te(B);function Ch(){return vw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,fs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Rr(D.min(),r,Ch(),Je(),P())}}class fs{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new fs(s,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Sh{constructor(e,n){this.targetId=e,this.Et=n}}class kh{constructor(e,n,s=me.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Tc{constructor(){this.At=0,this.Rt=Cc(),this.bt=me.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=P(),n=P(),s=P();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:A()}}),new fs(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Cc()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ww{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Je(),this.qt=bc(),this.Ut=new te(B)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:A()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Li(i))if(s===0){const o=new C(i.path);this.Qt(n,o,le.newNoDocument(o,D.min()))}else $(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Li(a.target)){const c=new C(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,le.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=P();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Rr(e,n,this.Ut,this.Lt,s);return this.Lt=Je(),this.qt=bc(),this.Ut=new te(B),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Tc,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new te(B),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Tc),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function bc(){return new ne(C.comparator)}function Cc(){return new ne(C.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ew=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Iw=(()=>({and:"AND",or:"OR"}))();class Tw{constructor(e,n){this.databaseId=e,this.wt=n}}function er(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ah(t,e){return t.wt?e.toBase64():e.toUint8Array()}function bw(t,e){return er(t,e.toTimestamp())}function Ue(t){return $(!!t),D.fromTimestamp(function(e){const n=ut(e);return new ee(n.seconds,n.nanos)}(t))}function zo(t,e){return function(n){return new H(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Rh(t){const e=H.fromString(t);return $(Oh(e)),e}function Mi(t,e){return zo(t.databaseId,e.path)}function oi(t,e){const n=Rh(e);if(n.get(1)!==t.databaseId.projectId)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new C(Nh(n))}function Ui(t,e){return zo(t.databaseId,e)}function Cw(t){const e=Rh(t);return e.length===4?H.emptyPath():Nh(e)}function Fi(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nh(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sc(t,e,n){return{name:Mi(t,e),fields:n.value.mapValue.fields}}function Sw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?($(u===void 0||typeof u=="string"),me.fromBase64String(u||"")):($(u===void 0||u instanceof Uint8Array),me.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Eh(c.code);return new E(u,c.message||"")}(o);n=new kh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=oi(t,s.document.name),i=Ue(s.document.updateTime),o=s.document.createTime?Ue(s.document.createTime):D.min(),a=new Ee({mapValue:{fields:s.document.fields}}),c=le.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new Os(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=oi(t,s.document),i=s.readTime?Ue(s.readTime):D.min(),o=le.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Os([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=oi(t,s.document),i=s.removedTargetIds||[];n=new Os([],i,r,null)}else{if(!("filter"in e))return A();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new fw(r),o=s.targetId;n=new Sh(o,i)}}return n}function kw(t,e){let n;if(e instanceof ds)n={update:Sc(t,e.key,e.value)};else if(e instanceof Ho)n={delete:Mi(t,e.key)};else if(e instanceof ft)n={update:Sc(t,e.key,e.data),updateMask:Mw(e.fieldMask)};else{if(!(e instanceof dw))return A();n={verify:Mi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Js)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zs)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw A()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:bw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:A()}(t,e.precondition)),n}function Aw(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ue(s.updateTime):Ue(r);return i.isEqual(D.min())&&(i=Ue(r)),new uw(i,s.transformResults||[])}(n,e))):[]}function Rw(t,e){return{documents:[Ui(t,e.path)]}}function Nw(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ui(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ui(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Lh(ke.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Vt(l.field),direction:Ow(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Cr(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Dw(t){let e=Cw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){$(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Dh(l);return h instanceof ke&&zv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new An(Bt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Cr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ys(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ys(d,h)}(n.endAt)),nw(e,r,o,i,a,"F",c,u)}function Lw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return A()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Bt(e.unaryFilter.field);return Z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bt(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bt(e.unaryFilter.field);return Z.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bt(e.unaryFilter.field);return Z.create(i,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(t):t.fieldFilter!==void 0?function(e){return Z.create(Bt(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ke.create(e.compositeFilter.filters.map(n=>Dh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(t):A()}function Ow(t){return _w[t]}function Pw(t){return Ew[t]}function xw(t){return Iw[t]}function Vt(t){return{fieldPath:t.canonicalString()}}function Bt(t){return he.fromServerFormat(t.fieldPath)}function Lh(t){return t instanceof Z?function(e){if(e.op==="=="){if(fc(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NAN"}};if(dc(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fc(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NOT_NAN"}};if(dc(e.value))return{unaryFilter:{field:Vt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vt(e.field),op:Pw(e.op),value:e.value}}}(t):t instanceof ke?function(e){const n=e.getFilters().map(s=>Lh(s));return n.length===1?n[0]:{compositeFilter:{op:xw(e.op),filters:n}}}(t):A()}function Mw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Oh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&lw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Rn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Rn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=bh();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=wh(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(D.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),P())}isEqual(e){return this.batchId===e.batchId&&Qt(this.mutations,e.mutations,(n,s)=>_c(n,s))&&Qt(this.baseMutations,e.baseMutations,(n,s)=>_c(n,s))}}class Go{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){$(e.mutations.length===s.length);let r=gw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Go(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,s,r,i=D.min(),o=D.min(),a=me.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.ie=e}}function Bw(t){const e=Dw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.Je=new $w}addToCollectionParentIndex(e,n){return this.Je.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(ct.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(ct.min())}updateCollectionGroup(e,n,s){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class $w{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new te(H.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new te(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Zt(0)}static vn(){return new Zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.changes=new ln(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?v.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Rn(s.mutation,r,be.empty(),ee.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,P()).next(()=>s))}getLocalViewOfDocuments(e,n,s=P()){const r=wt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=In();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=wt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,P()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Je();const o=Nn(),a=Nn();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof ft)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Rn(l.mutation,u,l.mutation.getFieldMask(),ee.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Hw(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Nn();let r=new ne((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||be.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||P()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=bh();l.forEach(d=>{if(!i.has(d)){const p=wh(n.get(d),s.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return C.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):v.resolve(wt());let a=-1,c=i;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?v.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,P())).next(l=>({batchId:a,changes:Th(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new C(n)).next(s=>{let r=In();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=In();return this.indexManager.getCollectionParents(e,r).next(o=>v.forEach(o,a=>{const c=function(u,l){return new hs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,le.newInvalidDocument(u)))});let o=In();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Rn(u.mutation,c,be.empty(),ee.now()),qo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return v.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ue(s.createTime)}),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Bw(s.bundledQuery),readTime:Ue(s.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.overlays=new ne(C.comparator),this.es=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const s=wt();return v.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),v.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),v.resolve()}getOverlaysForCollection(e,n,s){const r=wt(),i=n.length+1,o=new C(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return v.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ne((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=wt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=wt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return v.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Fw(n,s));let i=this.es.get(n);i===void 0&&(i=P(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.ns=new te(se.ss),this.rs=new te(se.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new se(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new se(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new C(new H([])),s=new se(n,e),r=new se(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new C(new H([])),s=new se(n,e),r=new se(n,e+1);let i=P();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new se(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class se{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return C.comparator(e.key,n.key)||B(e._s,n._s)}static os(e,n){return B(e._s,n._s)||C.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new te(se.ss)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Uw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new se(n,0),r=new se(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new te(B);return n.forEach(r=>{const i=new se(r,0),o=new se(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),v.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;C.isDocumentKey(i)||(i=i.child(""));const o=new se(new C(i),0);let a=new te(B);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),v.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){$(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return v.forEach(n.mutations,r=>{const i=new se(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new se(n,0),r=this.gs.firstAfterOrEqual(s);return v.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.Es=e,this.docs=new ne(C.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return v.resolve(s?s.document.mutableCopy():le.newInvalidDocument(n))}getEntries(e,n){let s=Je();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():le.newInvalidDocument(r))}),v.resolve(s)}getAllFromCollection(e,n,s){let r=Je();const i=new C(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Fv(Uv(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return v.resolve(r)}getAllFromCollectionGroup(e,n,s,r){A()}As(e,n){return v.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Xw(this)}getSize(e){return v.resolve(this.size)}}class Xw extends qw{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),v.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.persistence=e,this.Rs=new ln(n=>Vo(n),Bo),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ko,this.targetCount=0,this.vs=Zt.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),v.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Zt(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Dn(n),v.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),v.waitFor(i).next(()=>r)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return v.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),v.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),v.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),v.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return v.resolve(s)}containsKey(e,n){return v.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Uo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Yw(this),this.indexManager=new jw,this.remoteDocumentCache=function(s){return new Qw(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Vw(n),this.Ns=new Gw(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Kw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Ww(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){b("MemoryPersistence","Starting transaction:",e);const r=new Zw(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return v.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Zw extends Bv{constructor(e){super(),this.currentSequenceNumber=e}}class Wo{constructor(e){this.persistence=e,this.Fs=new Ko,this.$s=null}static Bs(e){return new Wo(e)}get Ls(){if(this.$s)return this.$s;throw A()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),v.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),v.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ls,s=>{const r=C.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,D.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return v.or([()=>v.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=P(),r=P();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qo(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(vc(n))return v.resolve(null);let s=Ye(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Pi(n,null,"F"),s=Ye(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=P(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Pi(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return vc(n)||r.isEqual(D.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(cc()<=F.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xi(n)),this.Bi(e,o,n,Mv(r,-1)))})}Fi(e,n){let s=new te(dh(e));return n.forEach((r,i)=>{qo(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return cc()<=F.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",xi(n)),this.Ni.getDocumentsMatchingQuery(e,n,ct.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new ne(B),this.Ui=new ln(i=>Vo(i),Bo),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zw(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function n_(t,e,n,s){return new t_(t,e,n,s)}async function Ph(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=P();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function s_(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=v.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const w=c.docVersions.get(p);$(w!==null),y.version.compareTo(w)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=P();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function xh(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function r_(t,e){const n=L(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(me.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),r=r.insert(h,p),function(y,w,_){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(i,p))});let c=Je(),u=P();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(i_(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(D.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return v.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function i_(t,e,n){let s=P(),r=P();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Je();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(D.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function o_(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function a_(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,v.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new bt(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Vi(t,e,n){const s=L(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ls(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function kc(t,e,n){const s=L(t);let r=D.min(),i=P();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=L(a),h=l.Ui.get(u);return h!==void 0?v.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Ye(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:D.min(),n?i:P())).next(a=>(c_(s,sw(e),a),{documents:a,Hi:i})))}function c_(t,e,n){let s=t.Ki.get(e)||D.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Ac{constructor(){this.activeTargetIds=Ch()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u_{constructor(){this.Lr=new Ac,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ac,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);b("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(b("RestConnection","Received: ",c),c),c=>{throw Ri("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+un,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=h_[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new Sv;a.setWithCredentials(!0),a.listenOnce(Tv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ii.NO_ERROR:const u=a.getResponseJson();b("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ii.TIMEOUT:b("Connection",'RPC "'+e+'" timed out'),o(new E(m.DEADLINE_EXCEEDED,"Request time out"));break;case ii.HTTP_ERROR:const l=a.getStatus();if(b("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(w)>=0?w:m.UNKNOWN}(d.status);o(new E(p,d.message))}else o(new E(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new E(m.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{b("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Ev(),o=Iv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Cv({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");b("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new d_({Hr:y=>{h?b("Connection","Not sending because WebChannel is closed:",y):(l||(b("Connection","Opening WebChannel transport."),u.open(),l=!0),b("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),p=(y,w,_)=>{y.listen(w,O=>{try{_(O)}catch(S){setTimeout(()=>{throw S},0)}})};return p(u,bs.EventType.OPEN,()=>{h||b("Connection","WebChannel transport opened.")}),p(u,bs.EventType.CLOSE,()=>{h||(h=!0,b("Connection","WebChannel transport closed"),d.io())}),p(u,bs.EventType.ERROR,y=>{h||(h=!0,Ri("Connection","WebChannel transport errored:",y),d.io(new E(m.UNAVAILABLE,"The operation could not be completed")))}),p(u,bs.EventType.MESSAGE,y=>{var w;if(!h){const _=y.data[0];$(!!_);const O=_,S=O.error||((w=O[0])===null||w===void 0?void 0:w.error);if(S){b("Connection","WebChannel received error:",S);const N=S.status;let U=function(ge){const Re=Y[ge];if(Re!==void 0)return Eh(Re)}(N),j=S.message;U===void 0&&(U=m.INTERNAL,j="Unknown error status: "+N+" with message "+S.message),h=!0,d.io(new E(U,j)),u.close()}else b("Connection","WebChannel received:",_),d.ro(_)}}),p(o,bv.STAT_EVENT,y=>{y.stat===oc.PROXY?b("Connection","Detected buffering proxy"):y.stat===oc.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ai(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){return new Tw(t,!0)}class Mh{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&b("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Mh(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Xe(n.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new E(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p_ extends Uh{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Sw(this.yt,e),s=function(r){if(!("targetChange"in r))return D.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?D.min():i.readTime?Ue(i.readTime):D.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Fi(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Li(a)?{documents:Rw(r,a)}:{query:Nw(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ah(r,i.resumeToken):i.snapshotVersion.compareTo(D.min())>0&&(o.readTime=er(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Lw(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Fi(this.yt),n.removeTarget=e,this.Bo(n)}}class m_ extends Uh{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Aw(e.writeResults,e.commitTime),s=Ue(e.commitTime);return this.listener.Zo(s,n)}return $(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Fi(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>kw(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_ extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new E(m.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(m.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class y_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Xe(n),this.ou=!1):b("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Mt(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=L(a);c._u.add(4),await ps(c),c.gu.set("Unknown"),c._u.delete(4),await Dr(c)}(this))})}),this.gu=new y_(s,r)}}async function Dr(t){if(Mt(t))for(const e of t.wu)await e(!0)}async function ps(t){for(const e of t.wu)await e(!1)}function Fh(t,e){const n=L(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Jo(n)?Yo(n):hn(n).ko()&&Xo(n,e))}function Vh(t,e){const n=L(t),s=hn(n);n.du.delete(e),s.ko()&&Bh(n,e),n.du.size===0&&(s.ko()?s.Fo():Mt(n)&&n.gu.set("Unknown"))}function Xo(t,e){t.yu.Ot(e.targetId),hn(t).zo(e)}function Bh(t,e){t.yu.Ot(e),hn(t).Ho(e)}function Yo(t){t.yu=new ww({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),hn(t).start(),t.gu.uu()}function Jo(t){return Mt(t)&&!hn(t).No()&&t.du.size>0}function Mt(t){return L(t)._u.size===0}function jh(t){t.yu=void 0}async function w_(t){t.du.forEach((e,n)=>{Xo(t,e)})}async function __(t,e){jh(t),Jo(t)?(t.gu.hu(e),Yo(t)):t.gu.set("Unknown")}async function E_(t,e,n){if(t.gu.set("Online"),e instanceof kh&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await tr(t,s)}else if(e instanceof Os?t.yu.Kt(e):e instanceof Sh?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(D.min()))try{const s=await xh(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(me.EMPTY_BYTE_STRING,c.snapshotVersion)),Bh(r,a);const u=new bt(c.target,a,1,c.sequenceNumber);Xo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){b("RemoteStore","Failed to raise snapshot:",s),await tr(t,s)}}async function tr(t,e,n){if(!ls(e))throw e;t._u.add(1),await ps(t),t.gu.set("Offline"),n||(n=()=>xh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Dr(t)})}function $h(t,e){return e().catch(n=>tr(t,n,e))}async function Lr(t){const e=L(t),n=lt(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;I_(e);)try{const r=await o_(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,T_(e,r)}catch(r){await tr(e,r)}qh(e)&&Hh(e)}function I_(t){return Mt(t)&&t.fu.length<10}function T_(t,e){t.fu.push(e);const n=lt(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function qh(t){return Mt(t)&&!lt(t).No()&&t.fu.length>0}function Hh(t){lt(t).start()}async function b_(t){lt(t).eu()}async function C_(t){const e=lt(t);for(const n of t.fu)e.Xo(n.mutations)}async function S_(t,e,n){const s=t.fu.shift(),r=Go.from(s,e,n);await $h(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Lr(t)}async function k_(t,e){e&&lt(t).Yo&&await async function(n,s){if(r=s.code,pw(r)&&r!==m.ABORTED){const i=n.fu.shift();lt(n).Mo(),await $h(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Lr(n)}var r}(t,e),qh(t)&&Hh(t)}async function Nc(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const s=Mt(n);n._u.add(3),await ps(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Dr(n)}async function A_(t,e){const n=L(t);e?(n._u.delete(2),await Dr(n)):e||(n._u.add(2),await ps(n),n.gu.set("Unknown"))}function hn(t){return t.pu||(t.pu=function(e,n,s){const r=L(e);return r.su(),new p_(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:w_.bind(null,t),Zr:__.bind(null,t),Wo:E_.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Jo(t)?Yo(t):t.gu.set("Unknown")):(await t.pu.stop(),jh(t))})),t.pu}function lt(t){return t.Iu||(t.Iu=function(e,n,s){const r=L(e);return r.su(),new m_(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:b_.bind(null,t),Zr:k_.bind(null,t),tu:C_.bind(null,t),Zo:S_.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Lr(t)):(await t.Iu.stop(),t.fu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Zo(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ea(t,e){if(Xe("AsyncQueue",`${e}: ${t}`),ls(t))return new E(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||C.comparator(n.key,s.key):(n,s)=>C.comparator(n.key,s.key),this.keyedMap=In(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new zt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new zt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.Tu=new ne(C.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):A():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class en{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new en(e,n,zt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.Au=void 0,this.listeners=[]}}class N_{constructor(){this.queries=new ln(e=>hh(e),Sr),this.onlineState="Unknown",this.Ru=new Set}}async function zh(t,e){const n=L(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new R_),r)try{i.Au=await n.onListen(s)}catch(o){const a=ea(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&ta(n)}async function Gh(t,e){const n=L(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function D_(t,e){const n=L(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&ta(n)}function L_(t,e,n){const s=L(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ta(t){t.Ru.forEach(e=>{e.next()})}class Kh{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new en(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=en.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.key=e}}class Qh{constructor(e){this.key=e}}class O_{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=P(),this.mutatedKeys=P(),this.Gu=dh(e),this.Qu=new zt(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Dc,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=qo(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;d&&p?d.data.isEqual(p.data)?y!==w&&(s.track({type:3,doc:p}),_=!0):this.Hu(d,p)||(s.track({type:2,doc:p}),_=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),_=!0):d&&!p&&(s.track({type:1,doc:d}),_=!0,(c||u)&&(a=!0)),_&&(p?(o=o.add(p),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new en(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Dc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=P(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Qh(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Wh(s))}),n}tc(e){this.qu=e.Hi,this.Ku=P();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return en.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class P_{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class x_{constructor(e){this.key=e,this.nc=!1}}class M_{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ln(a=>hh(a),Sr),this.rc=new Map,this.oc=new Set,this.uc=new ne(C.comparator),this.cc=new Map,this.ac=new Ko,this.hc={},this.lc=new Map,this.fc=Zt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function U_(t,e){const n=K_(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await a_(n.localStore,Ye(e));n.isPrimaryClient&&Fh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await F_(n,e,s,a==="current",o.resumeToken)}return r}async function F_(t,e,n,s,r){t._c=(h,d,p)=>async function(y,w,_,O){let S=w.view.Wu(_);S.$i&&(S=await kc(y.localStore,w.query,!1).then(({documents:j})=>w.view.Wu(j,S)));const N=O&&O.targetChanges.get(w.targetId),U=w.view.applyChanges(S,y.isPrimaryClient,N);return Oc(y,w.targetId,U.Xu),U.snapshot}(t,h,d,p);const i=await kc(t.localStore,e,!0),o=new O_(e,i.Hi),a=o.Wu(i.documents),c=fs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Oc(t,n,u.Xu);const l=new P_(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function V_(t,e){const n=L(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Sr(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vi(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Vh(n.remoteStore,s.targetId),Bi(n,s.targetId)}).catch(us)):(Bi(n,s.targetId),await Vi(n.localStore,s.targetId,!0))}async function B_(t,e,n){const s=W_(t);try{const r=await function(i,o){const a=L(i),c=ee.now(),u=o.reduce((d,p)=>d.add(p.key),P());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Je(),y=P();return a.Gi.getEntries(d,u).next(w=>{p=w,p.forEach((_,O)=>{O.isValidDocument()||(y=y.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{l=w;const _=[];for(const O of o){const S=hw(O,l.get(O.key).overlayedDocument);S!=null&&_.push(new ft(O.key,S,ch(S.value.mapValue),Ce.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,_,o)}).next(w=>{h=w;const _=w.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,w.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Th(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new ne(B)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await ms(s,r.changes),await Lr(s.remoteStore)}catch(r){const i=ea(r,"Failed to persist write");n.reject(i)}}async function Xh(t,e){const n=L(t);try{const s=await r_(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&($(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?$(o.nc):r.removedDocuments.size>0&&($(o.nc),o.nc=!1))}),await ms(n,s,e)}catch(s){await us(s)}}function Lc(t,e,n){const s=L(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=L(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&ta(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function j_(t,e,n){const s=L(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new ne(C.comparator);o=o.insert(i,le.newNoDocument(i,D.min()));const a=P().add(i),c=new Rr(D.min(),new Map,new te(B),o,a);await Xh(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),na(s)}else await Vi(s.localStore,e,!1).then(()=>Bi(s,e,n)).catch(us)}async function $_(t,e){const n=L(t),s=e.batch.batchId;try{const r=await s_(n.localStore,e);Jh(n,s,null),Yh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ms(n,r)}catch(r){await us(r)}}async function q_(t,e,n){const s=L(t);try{const r=await function(i,o){const a=L(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>($(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Jh(s,e,n),Yh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ms(s,r)}catch(r){await us(r)}}function Yh(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Jh(t,e,n){const s=L(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Bi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Zh(t,s)})}function Zh(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Vh(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),na(t))}function Oc(t,e,n){for(const s of n)s instanceof Wh?(t.ac.addReference(s.key,e),H_(t,s)):s instanceof Qh?(b("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Zh(t,s.key)):A()}function H_(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(b("SyncEngine","New document in limbo: "+n),t.oc.add(s),na(t))}function na(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new C(H.fromString(e)),s=t.fc.next();t.cc.set(s,new x_(n)),t.uc=t.uc.insert(n,s),Fh(t.remoteStore,new bt(Ye(jo(n.path)),s,2,Uo.at))}}async function ms(t,e,n){const s=L(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Qo.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=L(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>v.forEach(c,h=>v.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>v.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!ls(l))throw l;b("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,y)}}}(s.localStore,i))}async function z_(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const s=await Ph(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new E(m.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ms(n,s.ji)}}function G_(t,e){const n=L(t),s=n.cc.get(e);if(s&&s.nc)return P().add(s.key);{let r=P();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function K_(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=G_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=j_.bind(null,e),e.sc.Wo=D_.bind(null,e.eventManager),e.sc.wc=L_.bind(null,e.eventManager),e}function W_(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q_.bind(null,e),e}class Q_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Nr(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return n_(this.persistence,new e_,e.initialUser,this.yt)}yc(e){return new Jw(Wo.Bs,this.yt)}gc(e){return new u_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class X_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Lc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=z_.bind(null,this.syncEngine),await A_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new N_}createDatastore(e){const n=Nr(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new f_(r));var r;return function(i,o,a,c){return new g_(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Lc(this.syncEngine,a,0),o=Rc.C()?new Rc:new l_,new v_(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new M_(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);b("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ps(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e,n){if(!n)throw new E(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Y_(t,e,n,s){if(e===!0&&s===!0)throw new E(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pc(t){if(!C.isDocumentKey(t))throw new E(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xc(t){if(C.isDocumentKey(t))throw new E(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Or(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":A()}function Ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Or(t);throw new E(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;class Uc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new E(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Y_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kv;switch(n.type){case"gapi":const s=n.client;return new Dv(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new E(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Mc.get(e);n&&(b("ComponentProvider","Removing Datastore"),Mc.delete(e),n.terminate())}(this),Promise.resolve()}}function J_(t,e,n,s={}){var r;const i=(t=Ae(t,Pr))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ri("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ue.MOCK_USER;else{o=Yc(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new E(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ue(c)}t._authCredentials=new Av(new Yl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}}class dn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dn(this.firestore,e,this._query)}}class ot extends dn{constructor(e,n,s){super(e,n,jo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new C(e))}withConverter(e){return new ot(this.firestore,e,this._path)}}function Ke(t,e,...n){if(t=G(t),ed("collection","path",e),t instanceof Pr){const s=H.fromString(e,...n);return xc(s),new ot(t,null,s)}{if(!(t instanceof _e||t instanceof ot))throw new E(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(H.fromString(e,...n));return xc(s),new ot(t.firestore,null,s)}}function ve(t,e,...n){if(t=G(t),arguments.length===1&&(e=Jl.R()),ed("doc","path",e),t instanceof Pr){const s=H.fromString(e,...n);return Pc(s),new _e(t,null,new C(s))}{if(!(t instanceof _e||t instanceof ot))throw new E(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(H.fromString(e,...n));return Pc(s),new _e(t.firestore,t instanceof ot?t.converter:null,new C(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Xe("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ue.UNAUTHENTICATED,this.clientId=Jl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{b("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(b("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ea(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function eE(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ph(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nE(t);b("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Nc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Nc(e.remoteStore,i)),t.onlineComponents=e}async function nE(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await eE(t,new Q_)),t.offlineComponents}async function nd(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await tE(t,new X_)),t.onlineComponents}function sE(t){return nd(t).then(e=>e.syncEngine)}async function sd(t){const e=await nd(t),n=e.eventManager;return n.onListen=U_.bind(null,e.syncEngine),n.onUnlisten=V_.bind(null,e.syncEngine),n}function rE(t,e,n={}){const s=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new td({next:h=>{i.enqueueAndForget(()=>Gh(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new E(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new E(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Kh(jo(o.path),u,{includeMetadataChanges:!0,Nu:!0});return zh(r,l)}(await sd(t),t.asyncQueue,e,n,s)),s.promise}function iE(t,e,n={}){const s=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new td({next:h=>{i.enqueueAndForget(()=>Gh(r,l)),h.fromCache&&a.source==="server"?c.reject(new E(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Kh(o,u,{includeMetadataChanges:!0,Nu:!0});return zh(r,l)}(await sd(t),t.asyncQueue,e,n,s)),s.promise}class oE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Mh(this,"async_queue_retry"),this.Wc=()=>{const n=ai();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=ai();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=ai();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Ge;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ls(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Xe("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Zo.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&A()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Ut extends Pr{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oE,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rd(this),this._firestoreClient.terminate()}}function W(t,e){const n=typeof t=="object"?t:Wi(),s=typeof t=="string"?t:e||"(default)",r=or(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Qc("firestore");i&&J_(r,...i)}return r}function sa(t){return t._firestoreClient||rd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rd(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new jv(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Z_(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(me.fromBase64String(e))}catch(n){throw new E(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return B(this._lat,e._lat)||B(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=/^__.*__$/;class cE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ft(e,this.data,this.fieldMask,n,this.fieldTransforms):new ds(e,this.data,n,this.fieldTransforms)}}class id{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ft(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function od(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class oa{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return nr(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(od(this.sa)&&aE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class uE{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Nr(e)}da(e,n,s,r=!1){return new oa({sa:e,methodName:n,fa:s,path:he.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Mr(t){const e=t._freezeSettings(),n=Nr(t._databaseId);return new uE(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ad(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);aa("Data must be an object, but it was:",o,s);const a=cd(s,o);let c,u;if(i.merge)c=new be(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=ji(e,h,n);if(!o.contains(d))throw new E(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ld(l,d)||l.push(d)}c=new be(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new cE(new Ee(a),c,u)}class Ur extends ra{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ur}}function lE(t,e,n,s){const r=t.da(1,e,n);aa("Data must be an object, but it was:",r,s);const i=[],o=Ee.empty();xt(s,(c,u)=>{const l=ca(e,c,n);u=G(u);const h=r.ca(l);if(u instanceof Ur)i.push(l);else{const d=gs(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new be(i);return new id(o,a,r.fieldTransforms)}function hE(t,e,n,s,r,i){const o=t.da(1,e,n),a=[ji(e,s,n)],c=[r];if(i.length%2!=0)throw new E(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ji(e,i[d])),c.push(i[d+1]);const u=[],l=Ee.empty();for(let d=a.length-1;d>=0;--d)if(!ld(u,a[d])){const p=a[d];let y=c[d];y=G(y);const w=o.ca(p);if(y instanceof Ur)u.push(p);else{const _=gs(y,w);_!=null&&(u.push(p),l.set(p,_))}}const h=new be(u);return new id(l,h,o.fieldTransforms)}function dE(t,e,n,s=!1){return gs(n,t.da(s?4:3,e))}function gs(t,e){if(ud(t=G(t)))return aa("Unsupported field value:",e,t),cd(t,e);if(t instanceof ra)return function(n,s){if(!od(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=gs(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=G(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iw(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ee.fromDate(n);return{timestampValue:er(s.yt,r)}}if(n instanceof ee){const r=new ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:er(s.yt,r)}}if(n instanceof ia)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof tn)return{bytesValue:Ah(s.yt,n._byteString)};if(n instanceof _e){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zo(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Or(n)}`)}(t,e)}function cd(t,e){const n={};return Zl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xt(t,(s,r)=>{const i=gs(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ud(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ee||t instanceof ia||t instanceof tn||t instanceof _e||t instanceof ra)}function aa(t,e,n){if(!ud(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Or(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function ji(t,e,n){if((e=G(e))instanceof xr)return e._internalPath;if(typeof e=="string")return ca(t,e);throw nr("Field path arguments must be of type string or ",t,!1,void 0,n)}const fE=new RegExp("[~\\*/\\[\\]]");function ca(t,e,n){if(e.search(fE)>=0)throw nr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xr(...e.split("."))._internalPath}catch{throw nr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nr(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new E(m.INVALID_ARGUMENT,a+t+c)}function ld(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ua("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pE extends hd{data(){return super.data()}}function ua(t,e){return typeof e=="string"?ca(t,e):e instanceof xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new E(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class la{}class gE extends la{}function dd(t,e,...n){let s=[];e instanceof la&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof ha).length,o=r.filter(a=>a instanceof Fr).length;if(i>1||i>0&&o>0)throw new E(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Fr extends gE{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Fr(e,n,s)}_apply(e){const n=this._parse(e);return pd(e._query,n),new dn(e.firestore,e.converter,Oi(e._query,n))}_parse(e){const n=Mr(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new E(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Vc(l,u);const d=[];for(const p of l)d.push(Fc(a,r,p));h={arrayValue:{values:d}}}else h=Fc(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Vc(l,u),h=dE(o,i,l,u==="in"||u==="not-in");return Z.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fd(t,e,n){const s=e,r=ua("where",t);return Fr._create(r,s,n)}class ha extends la{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ha(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ke.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)pd(i,a),i=Oi(i,a)}(e._query,n),new dn(e.firestore,e.converter,Oi(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Fc(t,e,n){if(typeof(n=G(n))=="string"){if(n==="")throw new E(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lh(e)&&n.indexOf("/")!==-1)throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(H.fromString(n));if(!C.isDocumentKey(s))throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return hc(t,new C(s))}if(n instanceof _e)return hc(t,n._key);throw new E(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Or(n)}.`)}function Vc(t,e){if(!Array.isArray(t)||t.length===0)throw new E(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(m.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function pd(t,e){if(e.isInequality()){const s=$o(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new E(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=uh(t);i!==null&&yE(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new E(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yE(t,e,n){if(!n.isEqual(e))throw new E(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vE{convertValue(e,n="none"){switch(Lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return J(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw A()}}convertObject(e,n){const s={};return xt(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new ia(J(e.latitude),J(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=th(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($n(e));default:return null}}convertTimestamp(e){const n=ut(e);return new ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=H.fromString(e);$(Oh(s));const r=new jn(s.get(1),s.get(3)),i=new C(s.popFirst(5));return r.isEqual(n)||Xe(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gd extends hd{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ua("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ps extends gd{data(e={}){return super.data(e)}}class wE{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Tn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ps(this._firestore,this._userDataWriter,s.key,s,new Tn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new E(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ps(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:_E(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _E(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){t=Ae(t,_e);const e=Ae(t.firestore,Ut);return rE(sa(e),t._key).then(n=>IE(e,t,n))}class yd extends vE{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,n)}}function Vr(t){t=Ae(t,dn);const e=Ae(t.firestore,Ut),n=sa(e),s=new yd(e);return mE(t._query),iE(n,t._query).then(r=>new wE(e,s,t,r))}function EE(t,e,n){t=Ae(t,_e);const s=Ae(t.firestore,Ut),r=md(t.converter,e,n);return jr(s,[ad(Mr(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ce.none())])}function Dn(t,e,n,...s){t=Ae(t,_e);const r=Ae(t.firestore,Ut),i=Mr(r);let o;return o=typeof(e=G(e))=="string"||e instanceof xr?hE(i,"updateDoc",t._key,e,n,s):lE(i,"updateDoc",t._key,e),jr(r,[o.toMutation(t._key,Ce.exists(!0))])}function vd(t){return jr(Ae(t.firestore,Ut),[new Ho(t._key,Ce.none())])}function Br(t,e){const n=Ae(t.firestore,Ut),s=ve(t),r=md(t.converter,e);return jr(n,[ad(Mr(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ce.exists(!1))]).then(()=>s)}function jr(t,e){return function(n,s){const r=new Ge;return n.asyncQueue.enqueueAndForget(async()=>B_(await sE(n),s,r)),r.promise}(sa(t),e)}function IE(t,e,n){const s=n.docs.get(e._key),r=new yd(t);return new gd(t,r,e._key,s,new Tn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){un=n})(nn),kt(new at("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ut(new Rv(n.getProvider("auth-internal")),new Ov(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Pe(ac,"3.8.0",t),Pe(ac,"3.8.0","esm2017")})();class re{constructor(e="",n="",s="",r=""){this.id=e,this.email=n,this.avatar=s,this.hasAvatar=!!this.avatar,this.username=r}async storeUserData(){const e=W();await EE(ve(e,"users",this.id),{email:this.email,avatar:this.avatar,username:this.username})}async checkComplete(){const e=W(),n=await Ct(ve(e,"users",this.id));return n.exists()?!!n.data().firstname:!1}static getUserId(){const n=$e().currentUser;return new Promise(s=>{n?s(n.uid):window.location.replace("/")})}static async getUserById(e){const n=W(),r=(await Ct(ve(n,"users",e))).data();return new re(e,r==null?void 0:r.email,r==null?void 0:r.avatar,r==null?void 0:r.username)}async updateUserData(){const e=W(),n=ve(e,"users",this.id);await Dn(n,{username:this.username,avatar:this.avatar})}static async getAllUsers(){const e=W(),n=await Vr(Ke(e,"users")),s=[];return n.forEach(r=>{const i=r.data();s.push(new re(r.id,i.email,i.avatar,i.username))}),s}static async getCurrentUserData(){const e=W(),n=$e();return new Promise(s=>{em(n,async r=>{if(r){const o=(await Ct(ve(e,"users",r.uid))).data(),a=new re(r.uid,o==null?void 0:o.email,o==null?void 0:o.avatar,o==null?void 0:o.username);s(a)}else window.location.replace("/")})})}static async deleteCurrentUser(){const e=W(),s=$e().currentUser;await vd(ve(e,"users",s.uid)),nm(s).then(()=>{window.location.replace("/")})}}class Gt{constructor(){this.errorContainer=document.querySelector(".form-validation"),this.feedbackContainer=document.getElementById("feedback")}displayError(e){this.feedbackContainer.removeChild(this.feedbackContainer.lastChild),this.errorContainer.classList.remove("hide"),this.errorContainer.innerHTML=`<small>${e}</small>`}removeError(){this.errorContainer.classList.add("hide"),this.errorContainer.innerHTML=""}async register(){this.removeError(),this.feedbackContainer.appendChild(new _t().render());const e=new FormData(document.querySelector(".register__form")),n=e.get("username"),s=e.get("email"),r=e.get("password"),i=e.get("confirmPassword"),o=e.get("avatar");let a="";if((o==null?void 0:o.size)!==0)if((o==null?void 0:o.type.split("/")[0])==="image"){const c=po(),u=fo(c,o.name);await lo(u,o).then(()=>{ho(u).then(l=>{a=l})})}else this.displayError("Please upload an image file"),document.querySelector("input[name='avatar']").value="";if(n&&s&&r&&i)if(r===i){const c=$e();try{Wp(c,s,r).then(async u=>{Yp(u.user,{displayName:n,photoURL:a}).then(async()=>{await new re(u.user.uid,s,a,n).storeUserData(),window.location.replace("/dashboard")}).catch(l=>{this.displayError(l.message)})}).catch(u=>{this.displayError(u.message)})}catch(u){this.displayError(u.message)}}else this.displayError("Password and confirm password do not match, please try again :(");else this.displayError("Please fill in all required fields to register!")}async login(){this.removeError(),this.feedbackContainer.appendChild(new _t().render());const e=new FormData(document.querySelector(".login__form")),n=e.get("email"),s=e.get("password");if(n&&s){const r=$e();Qp(r,n,s).then(async i=>{const{user:o}=i;new re(o.uid,o.displayName,o.email,o.photoURL),window.location.replace("/dashboard")}).catch(i=>{this.displayError(i.messge)})}else this.displayError("Please fill in all the fields to log in!")}async loginWithGoogle(){this.removeError(),this.feedbackContainer.appendChild(new _t().render());const e=new je,n=$e();xa(n,e).then(async s=>{const{user:r}=s,{uid:i,displayName:o,email:a,photoURL:c}=r;await new re(i,a,c,o).storeUserData(),window.location.replace("/dashboard")}).catch(s=>{this.displayError(s.message)})}async loginWithFacebook(){this.removeError(),this.feedbackContainer.appendChild(new _t().render());const e=new Be,n=$e();xa(n,e).then(async s=>{const{user:r}=s,{email:i,photoURL:o,uid:a}=r,c=new re(a,i,o);await c.checkComplete()?window.location.replace("/dashboard"):(await c.storeUserData(),window.location.replace("/username"))}).catch(s=>{this.displayError(s.message)})}static logout(){const e=$e();tm(e).then(()=>{window.location.replace("/")})}}const TE=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],bE=[{name:"School",color:"#FF0000"},{name:"Frontend",color:"#00FF00"},{name:"Backend",color:"#0000FF"}];class Ot{constructor(e,n,s,r){this.id="",this.id=e,this.from=n,this.to=s,this.invitedTo=r}static async removeInvite(e){const n=W(),s=Ke(n,"invites"),r=ve(s,e);await vd(r)}static async acceptInvite(e,n,s){const r=W(),i=ve(r,"projects",n),a=(await Ct(i)).data();a.joinedUsers.push(s),await Dn(i,{joinedUsers:a.joinedUsers}),await this.removeInvite(e)}async createInvite(){const e=W(),n=Ke(e,"invites");return(await Br(n,{id:n.id,from:this.from,to:this.to,invitedTo:this.invitedTo})).id}static async getInvites(e){const n=W(),s=Ke(n,"invites"),r=dd(s,fd("to","==",e));return(await Vr(r)).docs.map(o=>({id:o.id,...o.data()}))}}const f={createContainer({children:t=[],classNames:e=[],id:n="",innerHTML:s=""}){const r=document.createElement("div");return n&&r.setAttribute("id",n),e.length&&r.classList.add(...e),s&&(r.textContent=s),t.length&&t.forEach(i=>{i instanceof Element&&r.appendChild(i)}),r},createHeader({headerText:t="",user:e=new re,invites:n=[]}){const s=document.createElement("header");let r=null;const i=this.createIcon({classNames:["fa","fa-project-diagram","header-icon"]});i.onclick=()=>window.location.replace("/dashboard");const o=this.createIcon({classNames:["fa","fa-user","header-icon"]});o.onclick=()=>window.location.replace("/profile");const a=this.createContainer({classNames:["has-invites-circle","hidden"]}),c=this.createIcon({classNames:["fa","fa-bell","header-icon"]}),u=this.createContainer({classNames:["notification-list","hidden"]});n.length>0&&a.classList.remove("hidden"),c.addEventListener("click",async()=>{u.classList.toggle("hidden"),u.innerHTML="",n.forEach(y=>{const w=this.createContainer({classNames:["invite"],children:[this.createParagraph({classNames:["invite-title"],text:`Invite from ${y.from}`}),this.createContainer({classNames:["invite-buttons"],children:[this.createButton({className:"accept-invite",text:"Accept",onClick:async()=>{await Ot.acceptInvite(y.id,y.invitedTo,y.to),window.location.replace("/dashboard")}}),this.createButton({className:"decline-invite",text:"Decline",onClick:async()=>{await Ot.removeInvite(y.id),window.location.replace("/dashboard")}})]})]});u.appendChild(w)})});const l=this.createContainer({classNames:["bell-container"],children:[c,a,u]}),h=this.createIcon({classNames:["fa","fa-sign-out-alt","header-icon"]});h.onclick=()=>{Gt.logout()};const d=this.createContainer({classNames:["icons"],children:[i,o,l,h]});e.avatar?r=this.createImage({url:e.avatar,alt:"profile avatar",classNames:["header-avatar"]}):r=this.createSpan({text:e.username});const p=this.createNavbar({children:[this.createTitle({size:1,text:t,classNames:["header-title"]}),this.createContainer({classNames:["header-options"],children:[d,r]})]});return s.appendChild(p),s},createParagraph({text:t="",classNames:e=[],children:n=[]}){const s=document.createElement("p");return t&&(s.textContent=t),e.length&&s.classList.add(...e),n.length&&n.forEach(r=>{r instanceof Element&&s.appendChild(r)}),s},createErrorBox({textContent:t=""}){return this.createContainer({classNames:["error","hidden"],innerHTML:t})},createIcon({classNames:t=[]}){const e=document.createElement("i");return t.length&&e.classList.add(...t),e},createForm({classNames:t=[],children:e=[]}){const n=document.createElement("form");return t.length&&n.classList.add(...t),e.length&&e.forEach(s=>{s instanceof Element&&n.appendChild(s)}),n},createDropdown({placeholder:t="Select an option",classNames:e=[],options:n=[],children:s=[]}){const r=document.createElement("select"),i=document.createElement("option");return i.disabled=!0,i.selected=!0,i.textContent=t,r.appendChild(i),e.length&&r.classList.add(...e),s.length&&s.forEach(o=>{o instanceof Element&&r.appendChild(o)}),n.length&&n.forEach(o=>{const a=document.createElement("option");a.value=o,a.textContent=o,r.appendChild(a)}),r},createFormValidation(){return this.createContainer({classNames:["form-validation","hide"]})},createSpan({classNames:t=[],text:e=""}){const n=document.createElement("span");return t.length&&n.classList.add(...t),n.textContent=e,n},createImage({url:t="",alt:e="",classNames:n=[]}){const s=document.createElement("img");return t&&(s.src=t),e&&(s.alt=e),n.length&&s.classList.add(...n),s.referrerPolicy="no-referrer",s},createSocialIcon({name:t=""}){const e=document.createElement("img");return t&&(e.src=`../src/assets/${t}.svg`),e.alt=`icon of ${t}`,e},createButton({text:t="",className:e="primary-button",onClick:n=null,children:s=[]}){const r=document.createElement("button");return r.classList.add(e),s.length&&s.forEach(i=>{i instanceof Element&&r.appendChild(i)}),t&&(r.textContent+=t),n&&r.addEventListener("click",i=>{i.preventDefault(),n()}),r},createLabel({htmlFor:t="",classNames:e=[],text:n="",onClick:s=null,children:r=[]}){const i=document.createElement("label");return t&&(i.htmlFor=t),e.length&&i.classList.add(...e),i.innerText=n,s&&i.addEventListener("click",o=>{o.preventDefault(),s()}),r.length&&i.append(...r),i},createInput({classNames:t=[],type:e="text",placeholder:n="",name:s="",value:r="",id:i="",accept:o=[],required:a=!1,disabled:c=!1,attribute:u="",attributeValue:l=""}){const h=document.createElement("input");return t.length&&h.classList.add(...t),o.length&&h.setAttribute("accept",o.join()),e==="datetime-local"&&(h.min=new Date().toLocaleString()),s&&(h.name=s),h.id=s,r&&(h.value=r),n&&(h.placeholder=n),i&&(h.id=i),u&&h.setAttribute(u,l),h.disabled=c,h.required=a,h.type=e,h},createImageUploader({name:t="",id:e="",circle:n=!1,accept:s=[]}){const r=this.createIcon({classNames:["fas","fa-camera"]}),i=this.createLabel({htmlFor:e,classNames:["image-uploader-label","flex-c-c"],children:[r]}),o=this.createInput({classNames:["image-input"],type:"file",name:t,id:e,accept:s}),a=this.createContainer({children:[i,o]}),c=n?"image-uploader-circle":"image-uploader";return this.createContainer({classNames:[c],children:[a]})},createLineBreak(){return document.createElement("hr")},createCalendar({classNames:t=[]}){const e=new Date,n=e.getDate(),s=e.getMonth(),r=e.getFullYear(),i=new Date(r,s+1,0).getDate();let o=new Date(r,s,1).getDay();const a=o===0?6:o-1,c=document.createElement("table"),u=document.createElement("thead"),l=document.createElement("tr");for(const y of TE){const w=document.createElement("th");w.textContent=y,l.appendChild(w)}u.appendChild(l),c.appendChild(u);const h=document.createElement("tbody");let d,p=1;for(let y=0;y<6;y++){d=document.createElement("tr");for(let w=0;w<7;w++){const _=document.createElement("td");y===0&&w<a||p>i?_.textContent="":(_.textContent=p.toString(),p===n&&_.classList.add("calendar-today"),p++),d.appendChild(_)}h.appendChild(d)}return c.classList.add(...t),c.appendChild(h),c},createAvatarInput({name:t=""}){const e=this.createLabel({htmlFor:t,classNames:["avatar-input"],children:[this.createInput({type:"file",name:t,id:t,classNames:["primary-input"]}),this.createContainer({classNames:["avatar-input__container"],children:[this.createIcon({classNames:["fas","fa-camera","avatar-input__icon"]})]})]});return this.createContainer({classNames:["input-container"],children:[e]})},createTitle({size:t=1,text:e="",classNames:n=[]}){if(t<0||t>6)return null;const s=document.createElement(`h${t}`);return n.length&&s.classList.add(...n),s.textContent=e,s},createLink({href:t="",text:e="",children:n=[],classNames:s=[]}){const r=document.createElement("a");return r.href=t,e&&(r.textContent=e),n.length&&r.append(...n),s.length&&r.classList.add(...s),r},createList({items:t=[]}){const e=document.createElement("ul");return t.forEach(({text:n,href:s})=>{const r=document.createElement("li");s?r.appendChild(this.createLink({text:n,href:s})):r.textContent=n,e.appendChild(r)}),e},createNavbar({children:t=[]}){const e=document.createElement("nav");return e.append(...t),e},createNavlist({items:t=[]}){const e=document.createElement("ul");return t.forEach(({text:n,href:s})=>{const r=document.createElement("li");s?r.appendChild(this.createLink({text:n,href:s})):r.textContent=n,e.appendChild(r)}),e}};class _t{constructor(){this.loader=f.createContainer({classNames:["loader"],children:[f.createContainer({classNames:["spinner"]})]})}render(){return this.loader}}var CE="firebase",SE="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(CE,SE,"app");const wd={apiKey:"AIzaSyDuZmzvq-rfexB8KKqiww9drLG4JDJo2MM",authDomain:"mobdev1-studenttodo.firebaseapp.com",projectId:"mobdev1-studenttodo",storageBucket:"mobdev1-studenttodo.appspot.com",messagingSenderId:"410182200922",appId:"1:410182200922:web:31789905320f1b2ddb7263"},kE=()=>{Ki(wd)},AE=Ki(wd);$e(AE);const RE=W();var NE=/([:*])(\w+)/g,DE="([^/]+)",LE=/\*/g,OE="?(?:.*)",PE=/\/\?/g,xE="/?([^/]+|)",ME="(?:/^|^)",UE="";function _d(t){return t===void 0&&(t="/"),fa()?location.pathname+location.search+location.hash:t}function K(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function sr(t){return typeof t=="string"}function FE(t){return typeof t=="function"}function rr(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function VE(t,e){return e.length===0||!t?null:t.slice(1,t.length).reduce(function(n,s,r){return n===null&&(n={}),n[e[r]]=decodeURIComponent(s),n},null)}function ir(t){var e=K(t).split(/\?(.*)?$/);return[K(e[0]),e.slice(1).join("")]}function da(t){for(var e={},n=t.split("&"),s=0;s<n.length;s++){var r=n[s].split("=");if(r[0]!==""){var i=decodeURIComponent(r[0]);e[i]?(Array.isArray(e[i])||(e[i]=[e[i]]),e[i].push(decodeURIComponent(r[1]||""))):e[i]=decodeURIComponent(r[1]||"")}}return e}function Ed(t,e){var n=ir(K(t.currentLocationPath)),s=n[0],r=n[1],i=r===""?null:da(r),o=[],a;if(sr(e.path)){if(a=ME+K(e.path).replace(NE,function(h,d,p){return o.push(p),DE}).replace(LE,OE).replace(PE,xE)+"$",K(e.path)===""&&K(s)==="")return{url:s,queryString:r,hashString:rr(t.to),route:e,data:null,params:i}}else a=e.path;var c=new RegExp(a,UE),u=s.match(c);if(u){var l=sr(e.path)?VE(u,o):u.groups?u.groups:u.slice(1);return{url:K(s.replace(new RegExp("^"+t.instance.root),"")),queryString:r,hashString:rr(t.to),route:e,data:l,params:i}}return!1}function Id(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function Ft(t,e){return typeof t[e]>"u"||t[e]===!0}function BE(t){if(!t)return{};var e=t.split(","),n={},s;return e.forEach(function(r){var i=r.split(":").map(function(o){return o.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":n.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":s||(s={}),s.strategy=i[1];break;case"resolveOptionsHash":s||(s={}),s.hash=i[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":n[i[0]]=i[1]==="true";break}}),s&&(n.resolveOptions=s),n}function fa(){return typeof window<"u"}function jE(t,e){return t===void 0&&(t=[]),e===void 0&&(e={}),t.filter(function(n){return n}).forEach(function(n){["before","after","already","leave"].forEach(function(s){n[s]&&(e[s]||(e[s]=[]),e[s].push(n[s]))})}),e}function Oe(t,e,n){var s=e||{},r=0;(function i(){if(!t[r]){n&&n(s);return}Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](s)?t[r][1]:t[r][2])),i()):t[r](s,function(o){typeof o>"u"||o===!0?(r+=1,i()):n&&n(s)})})()}Oe.if=function(t,e,n){return Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]),[t,e,n]};function Bc(t,e){typeof t.currentLocationPath>"u"&&(t.currentLocationPath=t.to=_d(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function ci(t,e){for(var n=0;n<t.instance.routes.length;n++){var s=t.instance.routes[n],r=Ed(t,s);if(r&&(t.matches||(t.matches=[]),t.matches.push(r),t.resolveOptions.strategy==="ONE")){e();return}}e()}function $E(t,e){t.navigateOptions&&(typeof t.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof t.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function qE(t,e){t.navigateOptions.force===!0?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}var jc=fa(),HE=Id();function zE(t,e){if(Ft(t.navigateOptions,"updateBrowserURL")){var n=("/"+t.to).replace(/\/\//g,"/"),s=jc&&t.resolveOptions&&t.resolveOptions.hash===!0;HE?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",s?"#"+n:n),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!s){var r=location.hash;location.hash="",location.hash=r}t.instance.__freezeListening=!1},1))):jc&&(window.location.href=t.to)}e()}function Td(t,e){var n=t.instance;if(!n.lastResolved()){e();return}Oe(n.lastResolved().map(function(s){return function(r,i){if(!s.route.hooks||!s.route.hooks.leave){i();return}var o=!1,a=t.instance.matchLocation(s.route.path,t.currentLocationPath,!1);if(s.route.path!=="*")o=!a;else{var c=t.matches?t.matches.find(function(u){return s.route.path===u.route.path}):!1;o=!c}if(Ft(t.navigateOptions,"callHooks")&&o){Oe(s.route.hooks.leave.map(function(u){return function(l,h){return u(function(d){d===!1?t.instance.__markAsClean(t):h()},t.matches&&t.matches.length>0?t.matches.length===1?t.matches[0]:t.matches:void 0)}}).concat([function(){return i()}]));return}else i()}}),{},function(){return e()})}function GE(t,e){t.match.route.hooks&&t.match.route.hooks.before&&Ft(t.navigateOptions,"callHooks")?Oe(t.match.route.hooks.before.map(function(n){return function(r,i){return n(function(o){o===!1?t.instance.__markAsClean(t):i()},t.match)}}).concat([function(){return e()}])):e()}function KE(t,e){Ft(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()}function WE(t,e){t.match.route.hooks&&t.match.route.hooks.after&&Ft(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(n){return n(t.match)}),e()}function QE(t,e){var n=t.instance.lastResolved();if(n&&n[0]&&n[0].route===t.match.route&&n[0].url===t.match.url&&n[0].queryString===t.match.queryString){n.forEach(function(s){s.route.hooks&&s.route.hooks.already&&Ft(t.navigateOptions,"callHooks")&&s.route.hooks.already.forEach(function(r){return r(t.match)})}),e(!1);return}e()}function XE(t,e){var n=t.instance._notFoundRoute;if(n){t.notFoundHandled=!0;var s=ir(t.currentLocationPath),r=s[0],i=s[1],o=rr(t.to);n.path=K(r);var a={url:n.path,queryString:i,hashString:o,data:null,route:n,params:i!==""?da(i):null};t.matches=[a],t.match=a}e()}function YE(t,e){(!t.resolveOptions||t.resolveOptions.noMatchWarning===!1||typeof t.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+t.currentLocationPath+`" didn't match any of the registered routes.`),e()}function JE(t,e){t.instance._setCurrent(null),e()}function bd(t,e){Ft(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var Cd=[QE,GE,KE,WE],$c=[Td,XE,Oe.if(function(t){var e=t.notFoundHandled;return e},Cd.concat([bd]),[YE,JE])];function $i(){return $i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},$i.apply(this,arguments)}function qc(t,e){var n=0;function s(){if(n===t.matches.length){bd(t,e);return}Oe(Cd,$i({},t,{match:t.matches[n]}),function(){n+=1,s()})}Td(t,s)}function ui(t){t.instance.__markAsClean(t)}function qi(){return qi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},qi.apply(this,arguments)}var Hc="[data-navigo]";function ZE(t,e){var n=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Hc},s=this,r="/",i=null,o=[],a=!1,c,u=Id(),l=fa();t?r=K(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function h(g){return g.indexOf("#")>=0&&(n.hash===!0?g=g.split("#")[1]||"/":g=g.split("#")[0]),g}function d(g){return K(r+"/"+K(g))}function p(g,I,x,q){return g=sr(g)?d(g):g,{name:q||K(String(g)),path:g,handler:I,hooks:jE(x)}}function y(g,I,x){var q=this;return typeof g=="object"&&!(g instanceof RegExp)?(Object.keys(g).forEach(function(V){if(typeof g[V]=="function")q.on(V,g[V]);else{var Ne=g[V],mn=Ne.uses,Od=Ne.as,Pd=Ne.hooks;o.push(p(V,mn,[c,Pd],Od))}}),this):(typeof g=="function"&&(x=I,I=g,g=r),o.push(p(g,I,[c,x])),this)}function w(g,I){if(s.__dirty){s.__waiting.push(function(){return s.resolve(g,I)});return}else s.__dirty=!0;g=g?K(r)+"/"+K(g):void 0;var x={instance:s,to:g,currentLocationPath:g,navigateOptions:{},resolveOptions:qi({},n,I)};return Oe([Bc,ci,Oe.if(function(q){var V=q.matches;return V&&V.length>0},qc,$c)],x,ui),x.matches?x.matches:!1}function _(g,I){if(s.__dirty){s.__waiting.push(function(){return s.navigate(g,I)});return}else s.__dirty=!0;g=K(r)+"/"+K(g);var x={instance:s,to:g,navigateOptions:I||{},resolveOptions:I&&I.resolveOptions?I.resolveOptions:n,currentLocationPath:h(g)};Oe([$E,qE,ci,Oe.if(function(q){var V=q.matches;return V&&V.length>0},qc,$c),zE,ui],x,ui)}function O(g,I,x){var q=pa(g,I);return q!==null?(_(q.replace(new RegExp("^/?"+r),""),x),!0):!1}function S(g){return this.routes=o=o.filter(function(I){return sr(g)?K(I.path)!==K(g):FE(g)?g!==I.handler:String(I.path)!==String(g)}),this}function N(){u&&(this.__popstateListener=function(){s.__freezeListening||w()},window.addEventListener("popstate",this.__popstateListener))}function U(){this.routes=o=[],u&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=a=!0}function j(g,I){return s._notFoundRoute=p("*",g,[c,I],"__NOT_FOUND__"),this}function ge(){if(l)return Re().forEach(function(g){if(g.getAttribute("data-navigo")==="false"||g.getAttribute("target")==="_blank"){g.hasListenerAttached&&g.removeEventListener("click",g.navigoHandler);return}g.hasListenerAttached||(g.hasListenerAttached=!0,g.navigoHandler=function(I){if((I.ctrlKey||I.metaKey)&&I.target.tagName.toLowerCase()==="a")return!1;var x=g.getAttribute("href");if(typeof x>"u"||x===null)return!1;if(x.match(/^(http|https)/)&&typeof URL<"u")try{var q=new URL(x);x=q.pathname+q.search}catch{}var V=BE(g.getAttribute("data-navigo-options"));a||(I.preventDefault(),I.stopPropagation(),s.navigate(K(x),V))},g.addEventListener("click",g.navigoHandler))}),s}function Re(){return l?[].slice.call(document.querySelectorAll(n.linksSelector||Hc)):[]}function Ze(g){return"/"+r+"/"+K(g)}function pn(g){return c=g,this}function $r(){return i}function pa(g,I,x){var q=o.find(function(mn){return mn.name===g}),V=null;if(q){if(V=q.path,I)for(var Ne in I)V=V.replace(":"+Ne,I[Ne]);V=V.match(/^\//)?V:"/"+V}return V&&x&&!x.includeRoot&&(V=V.replace(new RegExp("^/"+r),"")),V}function Ad(g){return g.getAttribute("href")}function ma(g){var I=ir(K(g)),x=I[0],q=I[1],V=q===""?null:da(q),Ne=rr(g),mn=p(x,function(){},[c],x);return{url:x,queryString:q,hashString:Ne,route:mn,data:null,params:V}}function Rd(){return ma(K(_d(r)).replace(new RegExp("^"+r),""))}function Nd(g){var I={instance:s,currentLocationPath:g,to:g,navigateOptions:{},resolveOptions:n};return ci(I,function(){}),I.matches?I.matches:!1}function Dd(g,I,x){typeof I<"u"&&(typeof x>"u"||x)&&(I=d(I));var q={instance:s,to:I,currentLocationPath:I};Bc(q,function(){}),typeof g=="string"&&(g=typeof x>"u"||x?d(g):g);var V=Ed(q,{name:String(g),path:g,handler:function(){},hooks:{}});return V||!1}function ys(g,I,x){return typeof I=="string"&&(I=ga(I)),I?(I.hooks[g]||(I.hooks[g]=[]),I.hooks[g].push(x),function(){I.hooks[g]=I.hooks[g].filter(function(q){return q!==x})}):(console.warn("Route doesn't exists: "+I),function(){})}function ga(g){return typeof g=="string"?o.find(function(I){return I.name===d(g)}):o.find(function(I){return I.handler===g})}function Ld(g){g.instance.__dirty=!1,g.instance.__waiting.length>0&&g.instance.__waiting.shift()()}this.root=r,this.routes=o,this.destroyed=a,this.current=i,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Ld,this.on=y,this.off=S,this.resolve=w,this.navigate=_,this.navigateByName=O,this.destroy=U,this.notFound=j,this.updatePageLinks=ge,this.link=Ze,this.hooks=pn,this.extractGETParameters=function(g){return ir(h(g))},this.lastResolved=$r,this.generate=pa,this.getLinkPath=Ad,this.match=Nd,this.matchLocation=Dd,this.getCurrentLocation=Rd,this.addBeforeHook=ys.bind(this,"before"),this.addAfterHook=ys.bind(this,"after"),this.addAlreadyHook=ys.bind(this,"already"),this.addLeaveHook=ys.bind(this,"leave"),this.getRoute=ga,this._pathToMatchObject=ma,this._clean=K,this._checkForAHash=h,this._setCurrent=function(g){return i=s.current=g},N.call(this),ge.call(this)}const eI={router:null,getRouter(){return this.router||(this.router=new ZE("/",!1)),this.router}};class pt{constructor({name:e,routerPath:n,isAsync:s}){this.isAsync=!1,this.name=e,this.routerPath=n,this.isAsync=s,this.appContainer=document.getElementById("app"),this.feedbackContainer=document.getElementById("feedback")}clearAppContainer(){this.appContainer.innerHTML=""}}class tI{constructor({parent:e,feedbackContainer:n}){this.parent=e,this.feedbackContainer=n,this.components=[],kE()}clearParent(){var e;for(;(e=this.parent)!=null&&e.firstChild;)this.parent.removeChild(this.parent.lastChild)}clearFeedback(){for(;this.feedbackContainer.firstChild;)this.feedbackContainer.removeChild(this.feedbackContainer.lastChild)}addComponent(e){if(!(e instanceof pt))return;e.reRender=()=>{this.showComponent({name:e.name,props:e.props})};const{name:n,routerPath:s}=e;this.components.push(e),eI.getRouter().on(s,({data:r})=>{this.showComponent({name:n,props:r})}).resolve()}showComponent({name:e,props:n}){const s=this.components.find(r=>r.name===e);s&&(n&&(s.props=n),this.clearParent(),s.isAsync?(this.feedbackContainer.append(new _t().render()),s.render().then(r=>{this.clearFeedback(),this.parent.appendChild(r)}).catch(r=>{console.error(r.message)})):this.parent.appendChild(s.render()))}}const nI="/assets/google-e2ffa871.svg",sI="/assets/facebook-8d45ab43.svg";class rI extends pt{constructor(){super({name:"LoginScreen",routerPath:"/",isAsync:!1}),this.loginScreen=f.createContainer({classNames:["loginScreen"]})}render(){const e=f.createTitle({text:"Login",size:1,classNames:["login-title"]}),n=f.createInput({type:"email",id:"mail",name:"email"}),s=f.createLabel({htmlFor:"mail",text:"E-mail"}),r=f.createContainer({children:[s,n],classNames:["input-container"]}),i=f.createInput({type:"password",id:"password",name:"password"}),o=f.createLabel({htmlFor:"password",text:"Password"}),a=f.createContainer({children:[o,i],classNames:["input-container"]}),c=f.createButton({text:"Login",className:"login-button",onClick:()=>{new Gt().login()}}),u=f.createImage({url:nI,alt:"Google icon",classNames:["login-icon"]}),l=f.createButton({children:[u,f.createSpan({text:"Login with Google"})],className:"google-button",onClick:()=>{new Gt().loginWithGoogle()}}),h=f.createImage({url:sI,alt:"Facebook icon",classNames:["login-icon"]}),d=f.createButton({children:[h,f.createSpan({text:"Login with Facebook"})],className:"facebook-button",onClick:()=>{new Gt().loginWithFacebook()}}),p=f.createLink({classNames:["onboarding__link"],text:"Don't have an account?",href:"./register"}),y=f.createFormValidation(),w=f.createForm({classNames:["login__form"],children:[r,a,c]});return this.loginScreen.append(e,y,w,l,d,p),this.loginScreen}}class iI extends pt{constructor(){super({name:"RegisterScreen",routerPath:"/register",isAsync:!1}),this.registerScreen=f.createContainer({classNames:["registerScreen"]})}render(){const e=f.createTitle({classNames:["register-title"],text:"Register",size:1}),n=f.createFormValidation(),s=f.createImageUploader({name:"avatar",id:"avatar",circle:!0}),r=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"username",text:"Username"}),f.createInput({type:"text",id:"username",name:"username"})]}),i=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"mail",text:"E-mail"}),f.createInput({type:"email",id:"email",name:"email"})]}),o=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"password",text:"Password"}),f.createInput({type:"password",id:"password",name:"password"})]}),a=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"confirmPassword",text:"Confirm Password"}),f.createInput({type:"password",id:"confirmPassword",name:"confirmPassword"})]}),c=f.createButton({text:"Register",onClick:async()=>{await new Gt().register()}}),u=f.createForm({classNames:["register__form"],children:[n,s,r,i,o,a,c]}),l=f.createLink({classNames:["onboarding__link"],text:"Already have an account? Login here",href:"/"});return this.registerScreen.append(e,u,l),this.registerScreen}}class fn{constructor(e,n,s,r,i,o,a,c){this.invitedUsers=[""],this.joinedUsers=[""],this.tags=[],this.tasks=[],this.id=a,this.title=e,this.description=n,this.image=s,this.invitedUsers=o,this.tags=i,this.tasks=r,this.joinedUsers=c}static async getProjects(e){const n=W(),s=Ke(n,"projects"),r=dd(s,fd("joinedUsers","array-contains",e));return(await Vr(r)).docs.map(o=>({id:o.id,...o.data()}))}static async findProjectById(e){const n=W(),s=ve(n,"projects",e),r=await Ct(s),i=r.data();return new fn(i==null?void 0:i.title,i==null?void 0:i.description,i==null?void 0:i.img,i==null?void 0:i.tasks,i==null?void 0:i.tags,i==null?void 0:i.invitedUsers,r.id,i==null?void 0:i.joinedUsers)}async addUser(e){var r;(r=this.joinedUsers)==null||r.push(e);const n=W(),s=ve(n,"projects",this.id);await Dn(s,{joinedUsers:this.joinedUsers})}async storeProject(){const e=W(),n=Ke(e,"projects"),s=await Br(n,{title:this.title,description:this.description,img:this.image,joinedUsers:this.joinedUsers,tags:this.tags,tasks:this.tasks});this.id=s.id}async removeUser(e){var r;console.log(e),console.log(this.joinedUsers),this.joinedUsers=(r=this.joinedUsers)==null?void 0:r.filter(i=>i!==e),console.log(this.id);const n=W(),s=ve(n,"projects",this.id);await Dn(s,{joinedUsers:this.joinedUsers})}async addTask(e){var r;(r=this.tasks)==null||r.push(e);const n=W(),s=ve(n,"projects",this.id);await Dn(s,{tasks:this.tasks})}}class Sd{constructor(e,n){this.tag=e,this.color=n}static async factory(){const e=W();bE.forEach(async n=>{const s=Ke(e,"tags");await Br(s,n)})}static async getAllTags(){const e=W(),n=Ke(e,"tags");return(await Vr(n)).docs.map(r=>({...r.data(),id:r.id}))}}class oI extends pt{constructor(){super({name:"DashboardScreen",routerPath:"/dashboard",isAsync:!0}),this.isAsync=!0,this.user={},this.userId="",this.dashboardScreen=f.createContainer({classNames:["dashboardScreen"]})}async rerender(){this.appContainer.innerHTML="",this.render()}async render(){var y;this.allTags=await Sd.getAllTags(),this.user=await re.getCurrentUserData(),this.userId=await re.getUserId(),this.projects=await fn.getProjects(this.userId),this.invites=await Ot.getInvites(this.userId),this.invites.length>0&&((y=this.invites)==null||y.forEach(async w=>{new Notification("Student's To Do",{body:`You have been invited to a project by ${w.from}`,icon:"📋"})}));const e=await Ot.getInvites(this.user.id),n=f.createHeader({headerText:"Student's To Do",user:this.user,invites:e}),s=f.createCalendar({classNames:["calendar"]}),r=f.createContainer({classNames:["calendarContainer"],children:[s]}),i=f.createContainer({classNames:["projectOverview"]}),o=f.createTitle({classNames:["projectOverviewTitle"],text:"My projects",size:2});if(i.appendChild(o),this.projects.length===0){const w=f.createTitle({classNames:["noProjects"],text:"You have no projects yet!",size:2});i.appendChild(w)}else this.projects.forEach(w=>{const _=f.createIcon({classNames:["fa","fa-angle-right","arrowIcon"]}),O=f.createTitle({classNames:["projectTitle"],text:w.title,size:2}),S=f.createLink({href:`/project/${w.id}`,classNames:["project"],children:[O,_]});i.appendChild(S)});const a=f.createIcon({classNames:["fa","fa-plus","createProjectIcon"]}),c=f.createTitle({classNames:["createProjectTitle"],text:"Create a new project",size:2}),u=f.createLink({href:"./createProject",children:[a,c],classNames:["newProject","project"]});i.appendChild(u),this.dashboardScreen.appendChild(i);const l=f.createButton({className:"timerButton",text:"Time a new task"}),h=f.createTitle({classNames:["timerTitle"],text:"Time a new task!",size:2}),d=f.createLink({href:"/timer",children:[l]}),p=f.createContainer({classNames:["timerButtonContainer"],children:[h,d]});return this.dashboardScreen.append(n,r,p),this.dashboardScreen}}class kd{constructor(){this.errorContainer=document.querySelector(".form-validation"),this.form=document.querySelector("form"),this.feedbackContainer=document.getElementById("feedback")}displayError(e){this.feedbackContainer.removeChild(this.feedbackContainer.lastChild),this.errorContainer.classList.remove("hide"),this.errorContainer.innerHTML=`<small>${e}</small>`}removeError(){this.errorContainer.classList.add("hide"),this.errorContainer.innerHTML=""}createProjectValidator(){this.removeError(),this.feedbackContainer.appendChild(new _t().render());const e=new FormData(document.querySelector(".project-create-form")),n=e.get("title"),s=e.get("description"),r=e.get("image"),i=e.getAll("tags");if(n&&s)return{title:n,description:s,image:r,tags:i};this.displayError("You have to fill in all required fields to create a project.")}createTaskValidator(){this.removeError(),this.feedbackContainer.appendChild(new _t().render());const e=new FormData(document.querySelector(".create-task-form")),n=e.get("task"),s=e.get("description"),r=e.get("deadline"),i=e.get("assignee"),o=e.get("timeNeeded");if(n&&s&&r&&i&&o)return{title:n,description:s,deadline:r,assignee:i,timeNeeded:o};this.displayError("You have to fill in all fields to create a task.")}}class aI extends pt{constructor(){super({name:"CreateProjectScreen",routerPath:"/createProject",isAsync:!0}),this.project=null,this.tasks=[],this.allUsers=[],this.createProjectScreen=f.createContainer({classNames:["createProjectScreen"]})}async render(){this.currentUser=await re.getCurrentUserData(),this.allUsers=await re.getAllUsers(),this.allTags=await Sd.getAllTags();const e=f.createHeader({headerText:"Create a new project",user:this.currentUser}),n=f.createFormValidation(),s=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"title",text:"Project title",classNames:["input-label"]}),f.createInput({type:"text",name:"title",placeholder:"Title",classNames:["primary-input"],required:!0})]}),r=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"image",text:"Project banner",classNames:["input-label"]}),f.createImageUploader({name:"image",id:"image",accept:["image/png","image/jpeg","image/jpg"]})]}),i=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"description",text:"Description",classNames:["input-label"]}),f.createInput({type:"text",name:"description",placeholder:"Description",classNames:["primary-input"],required:!0})]}),o=f.createContainer({classNames:["tags"]}),a=f.createContainer({classNames:["tags-container"]}),c=f.createParagraph({text:"Tags",classNames:["tags-paragraph"]});o.appendChild(c),this.allTags.forEach(h=>{const d=f.createLabel({htmlFor:h.name,text:h.name,classNames:["tag-label"]});d.style.borderColor=h.color;const p=f.createInput({id:h.name,type:"checkbox",name:"tags",value:h.name,classNames:["tag-checkbox"]});p.addEventListener("change",w=>{p.checked?d.style.backgroundColor=h.color:d.style.backgroundColor="transparent"});const y=f.createContainer({classNames:["single-tag-container"],children:[p,d]});a.appendChild(y)}),o.append(a);const u=f.createForm({classNames:["project-create-form"],children:[r,o,s,i]}),l=f.createButton({text:"Create Project",className:"primary-button",onClick:async()=>{const d=new kd().createProjectValidator(),p=d==null?void 0:d.image;if((p==null?void 0:p.size)!==0)if((p==null?void 0:p.type.split("/")[0])==="image"){const y=po(),w=fo(y,p.name);await lo(w,p).then(()=>{ho(w).then(_=>{const O=new fn(d==null?void 0:d.title,d==null?void 0:d.description,_,[],d==null?void 0:d.tags);O.joinedUsers=[this.currentUser.id],O.storeProject().then(()=>{window.location.replace(`/project/${O.id}`)})})})}else n.innerHTML="Please upload an image"}});return this.createProjectScreen.append(e,n,u,l),this.createProjectScreen}}class Gn{constructor(e,n,s,r,i,o,a){this.timeSpent=0,this.id=o,this.title=e,this.description=n,this.deadline=s,this.timeNeeded=r,this.timeSpent=a||0,this.assigned_to=i}static async getTasksByIds(e){const n=[];for(const s of e){const r=await Gn.findTaskById(s);n.push(r)}return n}static async findTaskById(e){const n=W(),s=ve(n,"tasks",e),r=await Ct(s),i=r.data();return new Gn(i==null?void 0:i.title,i==null?void 0:i.description,i==null?void 0:i.deadline,i==null?void 0:i.timeNeeded,i==null?void 0:i.assigned_to,r.id,i==null?void 0:i.timeSpent)}async storeTask(){const e=W();return(await Br(Ke(e,"tasks"),{title:this.title,description:this.description,deadline:this.deadline,timeNeeded:this.timeNeeded,timeSpent:this.timeSpent,assigned_to:this.assigned_to})).id}}class cI extends pt{constructor(){super({name:"ProjectScreen",routerPath:"/project/:id",isAsync:!0}),this.projectId="",this.project=null,this.tasks=[],this.currentUser=null,this.allUsers=[],this.projectScreen=f.createContainer({classNames:["projectScreen"]})}async render(){this.currentUser=await re.getCurrentUserData(),this.projectId=this.props.id,this.project=await fn.findProjectById(this.projectId),this.tasks=await Gn.getTasksByIds(this.project.tasks),this.allUsers=await re.getAllUsers();const e=f.createTitle({text:this.project.title,size:1}),n=f.createContainer({classNames:["project-header"],children:[e]}),s=f.createFormValidation(),r=f.createContainer({classNames:["input-container"],children:[f.createLabel({text:"Task",htmlFor:"task",classNames:["input-label"]}),f.createInput({type:"text",name:"task",placeholder:"Task",classNames:["primary-input"]})]}),i=f.createContainer({classNames:["input-container"],children:[f.createLabel({text:"Description",htmlFor:"description",classNames:["input-label"]}),f.createInput({type:"text",name:"description",placeholder:"Description",classNames:["primary-input"]})]}),o=f.createContainer({classNames:["input-container"],children:[f.createLabel({text:"Deadline",htmlFor:"deadline",classNames:["input-label"]}),f.createInput({type:"date",name:"deadline",placeholder:"Deadline",classNames:["primary-input"]})]}),a=f.createContainer({classNames:["input-container"],children:[f.createLabel({text:"Assignee",htmlFor:"assignee",classNames:["input-label"]}),f.createInput({type:"text",name:"assignee",placeholder:"Assignee",classNames:["primary-input"]})]}),c=f.createContainer({classNames:["input-container"],children:[f.createLabel({text:"Time needed",htmlFor:"timeNeeded",classNames:["input-label"]}),f.createInput({type:"number",name:"timeNeeded",placeholder:"Time needed",classNames:["primary-input"]})]}),u=f.createButton({text:"Create task",className:"primary-button",onClick:async()=>{const N=new kd().createTaskValidator();new Gn(N==null?void 0:N.title,N==null?void 0:N.description,N==null?void 0:N.deadline,N==null?void 0:N.timeNeeded,N==null?void 0:N.assignee).storeTask().then(j=>{this.project.addTask(j)}).then(()=>{this.reRender()}).catch(j=>{console.log(j)})}}),l=f.createForm({classNames:["create-task-form"],children:[r,i,o,a,c,u]}),h=f.createContainer({classNames:["project-content"],children:[f.createTitle({text:"Create a new task",size:2}),s,l,f.createLineBreak(),f.createTitle({text:"Tasks",size:2})]});if(this.tasks)this.tasks.forEach(async S=>{const N=f.createContainer({classNames:["task-container"],children:[f.createTitle({text:S.title,size:3}),f.createParagraph({text:S.description})]});h.appendChild(N)});else{const S=f.createParagraph({text:"No tasks yet, create one above."});h.appendChild(S)}const d=f.createContainer({classNames:["project-description"],children:[f.createTitle({text:"Description",size:2}),f.createParagraph({text:this.project.description}),f.createLineBreak()]}),p=f.createContainer({classNames:["user-options","hidden"],id:"user-options"}),y=f.createInput({type:"text",name:"search-users",placeholder:"Search users",classNames:["primary-input"]});y.addEventListener("keyup",S=>{const N=S.target;N.value===""?p.classList.add("hidden"):p.classList.remove("hidden"),p.innerHTML="",this.allUsers.filter(j=>this.project.joinedUsers.includes(j.id)?!1:j.username.toLowerCase().includes(N.value.toLowerCase())).forEach(j=>{const ge=f.createContainer({classNames:["user-option"],innerHTML:j.username});ge.addEventListener("click",Re=>{new Ot("",this.currentUser.username,j.id,this.project.title).createInvite(),this.reRender()}),p.appendChild(ge)})});const w=f.createContainer({classNames:["search-users"],children:[f.createTitle({text:"Add users",size:2}),f.createContainer({classNames:["search-users-dropdown"],children:[y,p]})]}),_=f.createContainer({classNames:["current-users"],children:[f.createTitle({text:"Current users",size:2})]});if(this.project.joinedUsers.length>0)this.project.joinedUsers.forEach(async S=>{const U=(await Ct(ve(RE,"users",S))).data(),j=f.createContainer({classNames:["user-container"],children:[f.createImage({url:U.avatar,alt:"user avatar",classNames:["user-image"]}),f.createParagraph({text:U.username,classNames:["user-name"]}),f.createButton({children:[f.createIcon({classNames:["fas","fa-times"]})],className:"danger-button",onClick:async()=>{this.project.removeUser(S).then(()=>{this.reRender()})}})]});_.append(j)});else{const S=f.createParagraph({text:"No users yet"});_.append(S)}const O=f.createContainer({classNames:["project-settings"],children:[d,w,f.createLineBreak(),_]});return n.style.background=`url(${this.project.image})`,n.style.backgroundSize="cover",this.projectScreen.append(n,h,O),this.projectScreen}}class uI extends pt{constructor(){super({name:"TimerScreen",routerPath:"/timer",isAsync:!0}),this.timerScreen=f.createContainer({classNames:["timerScreen"]})}async render(){this.user=await re.getCurrentUserData(),this.myProjects=await fn.getProjects(this.user.id);const e=await Ot.getInvites(this.user.id),n=f.createHeader({headerText:"Timer",user:this.user,invites:e}),s=f.createTitle({classNames:["time"],text:"00:00:00",size:2});let r=0;const i=setInterval(()=>{},1e3),o=()=>{r++;let w=Math.floor(r/3600),_=Math.floor((r-w*3600)/60),O=r-(w*3600+_*60),S=`${w}:${_}:${O}`;s.innerText=S},a=f.createFormValidation(),c=this.myProjects.map(w=>`${w.title}`),u=f.createDropdown({classNames:["projectDropdown"],options:c,placeholder:"Select a project"});let l;u.addEventListener("change",async w=>{const O=w.target.value;l=this.tasks.filter(S=>S.projectId===O)});const h=f.createDropdown({classNames:["taskDropdown"],options:l,placeholder:"Select a task"}),d=f.createButton({className:"startButton",text:"Start",onClick:()=>{}}),p=f.createForm({classNames:["timerForm"],children:[a,u,h,d]});d.addEventListener("click",w=>{w.preventDefault()});const y=f.createButton({className:"stopButton",text:"Stop",onClick:()=>{clearInterval(i)}});return this.timerScreen.append(n,s,p,y),this.timerScreen}}class lI extends pt{constructor(){super({name:"Profile",routerPath:"/profile",isAsync:!0}),this.user=null,this.profileScreen=f.createContainer({classNames:["profile-screen"]})}async render(){this.user=await re.getCurrentUserData();const e=await Ot.getInvites(this.user.id),n=f.createHeader({headerText:"Edit Profile",user:this.user,invites:e}),s=f.createFormValidation(),r=f.createImageUploader({name:"image",id:"image",accept:["image/png","image/jpeg","image/jpg"],circle:!0}),i=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"username",text:"Username",classNames:["input-label"]}),f.createInput({type:"text",name:"username",placeholder:"Username",classNames:["primary-input"],value:this.user.username})]}),o=f.createContainer({classNames:["input-container"],children:[f.createLabel({htmlFor:"email",text:"Email",classNames:["input-label"]}),f.createInput({type:"email",name:"email",placeholder:"Email",classNames:["primary-input"],value:this.user.email,disabled:!0})]}),a=f.createButton({className:"primary-button",text:"Save",onClick:async()=>{const l=new FormData(document.querySelector(".profile-form")),h=l.get("username"),d=l.get("image");if((d==null?void 0:d.size)!==0)if((d==null?void 0:d.type.split("/")[0])==="image"){const p=po(),y=fo(p,d.name);await lo(y,d).then(()=>{ho(y).then(w=>{var _;this.user.avatar=w,(_=this.user)==null||_.updateUserData()})})}else new Gt().displayError("Please upload an image");h&&(this.user.username=h)}}),c=f.createForm({classNames:["profile-form"],children:[r,i,o,a]}),u=f.createButton({text:"Delete Account",className:"danger-button-large",onClick:async()=>{await re.deleteCurrentUser()}});return this.profileScreen.append(n,s,c,u),this.profileScreen}}const hI=()=>{const t=document.getElementById("app"),e=document.getElementById("feedback"),n=new tI({parent:t,feedbackContainer:e});n.addComponent(new rI),n.addComponent(new iI),n.addComponent(new oI),n.addComponent(new uI),n.addComponent(new aI),n.addComponent(new cI),n.addComponent(new lI),Notification.requestPermission()};window.addEventListener("load",hI);
