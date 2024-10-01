import{b as gl,c as _l,d as yl,e as El,f as Tl,g as vl,h as Il}from"./public.C5FcVEb8.js";var Mo={};/**
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
 */const xa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},wl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],u=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,w=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(A=64)),r.push(e[p],e[w],e[A],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||w==null)throw new Al;const A=o<<2|u>>4;if(r.push(A),d!==64){const P=u<<4&240|d>>2;if(r.push(P),w!==64){const D=d<<6&192|w;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Al extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rl=function(n){const t=xa(n);return La.encodeByteArray(t,!0)},sr=function(n){return Rl(n).replace(/\./g,"")},Pl=function(n){try{return La.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Sl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cl=()=>Sl().__FIREBASE_DEFAULTS__,bl=()=>{if(typeof process>"u"||typeof Mo>"u")return;const n=Mo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Pl(n[1]);return t&&JSON.parse(t)},ji=()=>{try{return Cl()||bl()||Vl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dl=n=>{var t,e;return(e=(t=ji())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},kl=n=>{const t=Dl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fa=()=>{var n;return(n=ji())===null||n===void 0?void 0:n.config};/**
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
 */class Nl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ml(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sr(JSON.stringify(e)),sr(JSON.stringify(a)),""].join(".")}/**
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
 */function Ol(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xl(){var n;const t=(n=ji())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ll(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fl(){return!xl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ua(){try{return typeof indexedDB=="object"}catch{return!1}}function Ba(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Ul(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Bl="FirebaseError";class ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Bl,Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?jl(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new ne(i,u,r)}}function jl(n,t){return n.replace(ql,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ql=/\{\$([^}]+)}/g;function or(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(Oo(o)&&Oo(a)){if(!or(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Oo(n){return n!==null&&typeof n=="object"}/**
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
 */const $l=1e3,zl=2,Kl=4*60*60*1e3,Gl=.5;function xo(n,t=$l,e=zl){const r=t*Math.pow(e,n),i=Math.round(Gl*r*(Math.random()-.5)*2);return Math.min(Kl,r+i)}/**
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
 */function bt(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ce="[DEFAULT]";/**
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
 */class Hl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Nl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ql(t))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ce){return this.instances.has(t)}getOptions(t=ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ce){return this.component?this.component.multipleInstances?t:ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wl(n){return n===ce?void 0:n}function Ql(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Hl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Xl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Jl=j.INFO,Zl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},th=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Zl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qi{constructor(t){this.name=t,this._logLevel=Jl,this._logHandler=th,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const eh=(n,t)=>t.some(e=>n instanceof e);let Lo,Fo;function nh(){return Lo||(Lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rh(){return Fo||(Fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ja=new WeakMap,vi=new WeakMap,qa=new WeakMap,li=new WeakMap,$i=new WeakMap;function ih(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Qt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ja.set(e,n)}).catch(()=>{}),$i.set(t,n),t}function sh(n){if(vi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});vi.set(n,t)}let Ii={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return vi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||qa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function oh(n){Ii=n(Ii)}function ah(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hi(this),t,...e);return qa.set(r,t.sort?t.sort():[t]),Qt(r)}:rh().includes(n)?function(...t){return n.apply(hi(this),t),Qt(ja.get(this))}:function(...t){return Qt(n.apply(hi(this),t))}}function ch(n){return typeof n=="function"?ah(n):(n instanceof IDBTransaction&&sh(n),eh(n,nh())?new Proxy(n,Ii):n)}function Qt(n){if(n instanceof IDBRequest)return ih(n);if(li.has(n))return li.get(n);const t=ch(n);return t!==n&&(li.set(n,t),$i.set(t,n)),t}const hi=n=>$i.get(n);function $a(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),u=Qt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Qt(a.result),h.oldVersion,h.newVersion,Qt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const uh=["get","getKey","getAll","getAllKeys","count"],lh=["put","add","delete","clear"],di=new Map;function Uo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(di.get(t))return di.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=lh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),i&&h.done]))[0]};return di.set(t,o),o}oh(n=>({...n,get:(t,e,r)=>Uo(t,e)||n.get(t,e,r),has:(t,e)=>!!Uo(t,e)||n.has(t,e)}));/**
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
 */class hh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(dh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function dh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const wi="@firebase/app",Bo="0.10.12";/**
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
 */const jt=new qi("@firebase/app"),fh="@firebase/app-compat",mh="@firebase/analytics-compat",ph="@firebase/analytics",gh="@firebase/app-check-compat",_h="@firebase/app-check",yh="@firebase/auth",Eh="@firebase/auth-compat",Th="@firebase/database",vh="@firebase/data-connect",Ih="@firebase/database-compat",wh="@firebase/functions",Ah="@firebase/functions-compat",Rh="@firebase/installations",Ph="@firebase/installations-compat",Sh="@firebase/messaging",Ch="@firebase/messaging-compat",bh="@firebase/performance",Vh="@firebase/performance-compat",Dh="@firebase/remote-config",kh="@firebase/remote-config-compat",Nh="@firebase/storage",Mh="@firebase/storage-compat",Oh="@firebase/firestore",xh="@firebase/vertexai-preview",Lh="@firebase/firestore-compat",Fh="firebase",Uh="10.14.0";/**
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
 */const Ai="[DEFAULT]",Bh={[wi]:"fire-core",[fh]:"fire-core-compat",[ph]:"fire-analytics",[mh]:"fire-analytics-compat",[_h]:"fire-app-check",[gh]:"fire-app-check-compat",[yh]:"fire-auth",[Eh]:"fire-auth-compat",[Th]:"fire-rtdb",[vh]:"fire-data-connect",[Ih]:"fire-rtdb-compat",[wh]:"fire-fn",[Ah]:"fire-fn-compat",[Rh]:"fire-iid",[Ph]:"fire-iid-compat",[Sh]:"fire-fcm",[Ch]:"fire-fcm-compat",[bh]:"fire-perf",[Vh]:"fire-perf-compat",[Dh]:"fire-rc",[kh]:"fire-rc-compat",[Nh]:"fire-gcs",[Mh]:"fire-gcs-compat",[Oh]:"fire-fst",[Lh]:"fire-fst-compat",[xh]:"fire-vertex","fire-js":"fire-js",[Fh]:"fire-js-all"};/**
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
 */const ar=new Map,jh=new Map,Ri=new Map;function jo(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Jt(n){const t=n.name;if(Ri.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;Ri.set(t,n);for(const e of ar.values())jo(e,n);for(const e of jh.values())jo(e,n);return!0}function In(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new vr("app","Firebase",qh);/**
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
 */class $h{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
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
 */const zh=Uh;function za(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Yt.create("bad-app-name",{appName:String(i)});if(e||(e=Fa()),!e)throw Yt.create("no-options");const o=ar.get(i);if(o){if(or(e,o.options)&&or(r,o.config))return o;throw Yt.create("duplicate-app",{appName:i})}const a=new Yl(i);for(const h of Ri.values())a.addComponent(h);const u=new $h(e,r,a);return ar.set(i,u),u}function Ka(n=Ai){const t=ar.get(n);if(!t&&n===Ai&&Fa())return za();if(!t)throw Yt.create("no-app",{appName:n});return t}function Vt(n,t,e){var r;let i=(r=Bh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(u.join(" "));return}Jt(new Bt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Kh="firebase-heartbeat-database",Gh=1,pn="firebase-heartbeat-store";let fi=null;function Ga(){return fi||(fi=$a(Kh,Gh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(pn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),fi}async function Hh(n){try{const e=(await Ga()).transaction(pn),r=await e.objectStore(pn).get(Ha(n));return await e.done,r}catch(t){if(t instanceof ne)jt.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jt.warn(e.message)}}}async function qo(n,t){try{const r=(await Ga()).transaction(pn,"readwrite");await r.objectStore(pn).put(t,Ha(n)),await r.done}catch(e){if(e instanceof ne)jt.warn(e.message);else{const r=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});jt.warn(r.message)}}}function Ha(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wh=1024,Qh=30*24*60*60*1e3;class Yh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$o();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Qh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$o(),{heartbeatsToSend:r,unsentEntries:i}=Xh(this._heartbeatsCache.heartbeats),o=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return jt.warn(e),""}}}function $o(){return new Date().toISOString().substring(0,10)}function Xh(n,t=Wh){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),zo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),zo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Jh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ua()?Ba().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Hh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function zo(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Zh(n){Jt(new Bt("platform-logger",t=>new hh(t),"PRIVATE")),Jt(new Bt("heartbeat",t=>new Yh(t),"PRIVATE")),Vt(wi,Bo,n),Vt(wi,Bo,"esm2017"),Vt("fire-js","")}Zh("");var td="firebase",ed="10.14.0";/**
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
 */Vt(td,ed,"app");var Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,Wa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,I){for(var g=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)g[Lt-2]=arguments[Lt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var I=T.g[3],g=m+(I^_&(E^I))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(I^_&(E^I))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=I+(E^m&(_^E))+y[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=E+(_^I&(m^_))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=_+(m^E&(I^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^I&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^I&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=I+(_^E&(m^_))+y[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(I^m))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=_+(I^m&(E^I))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^I)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^I)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=I+(m^_^E)+y[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=E+(I^m^_)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=_+(E^I^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~I))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~I))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=I+(_^(m|~E))+y[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=E+(m^(I|~_))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=_+(I^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=_;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=T[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=u;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==m||(_[E]=I,y=!1)}this.g=_}var u={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return w;if(0>T)return V(d(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=w,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+I),m);8>I?(I=d(Math.pow(m,I)),y=y.j(I).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var w=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-V(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(M(this))return"-"+V(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,y="";;){var E=rt(_,m).g;_=K(_,E.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,D(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function M(T){return T.h==-1}n.l=function(T){return T=K(this,T),M(T)?-1:D(T)?0:1};function V(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new a(_,~T.h).add(A)}n.abs=function(){return M(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,_[E]=g<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function K(T,m){return T.add(V(m))}n.j=function(T){if(D(this)||D(T))return w;if(M(this))return M(T)?V(this).j(V(T)):V(V(this).j(T));if(M(T))return V(this.j(V(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Lt=T.i(E)>>>16,Ue=T.i(E)&65535;_[2*y+2*E]+=g*Ue,G(_,2*y+2*E),_[2*y+2*E+1]+=I*Ue,G(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Lt,G(_,2*y+2*E+1),_[2*y+2*E+2]+=I*Lt,G(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function G(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function W(T,m){this.g=T,this.h=m}function rt(T,m){if(D(m))throw Error("division by zero");if(D(T))return new W(w,w);if(M(T))return m=rt(V(T),m),new W(V(m.g),V(m.h));if(M(m))return m=rt(T,V(m)),new W(V(m.g),m.h);if(30<T.g.length){if(M(T)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(T);)_=xt(_),y=xt(y);var E=ot(_,1),I=ot(y,1);for(y=ot(y,2),_=ot(_,2);!D(y);){var g=I.add(y);0>=g.l(T)&&(E=E.add(_),I=g),y=ot(y,1),_=ot(_,1)}return m=K(T,E.j(m)),new W(E,m)}for(E=w;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(_),g=I.j(m);M(g)||0<g.l(T);)_-=y,I=d(_),g=I.j(m);D(I)&&(I=A),E=E.add(I),T=K(T,g)}return new W(E,T)}n.A=function(T){return rt(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function xt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function ot(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],I=0;I<y;I++)E[I]=0<m?T.i(I+_)>>>m|T.i(I+_+1)<<32-m:T.i(I+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,he=a}).apply(typeof Ko<"u"?Ko:typeof self<"u"?self:typeof window<"u"?window:{});var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qa,sn,Ya,tr,Pi,Xa,Ja,Za;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qn=="object"&&Qn];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in l))break t;l=l[v]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&t(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,v={next:function(){if(!f&&l<s.length){var R=l++;return{value:c(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function w(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),s.apply(c,v)}}return function(){return s.apply(c,arguments)}}function A(s,c,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:w,A.apply(null,arguments)}function P(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,v,R){for(var b=Array(arguments.length-2),H=2;H<arguments.length;H++)b[H-2]=arguments[H];return c.prototype[v].apply(f,b)}}function M(s){const c=s.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function V(s,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const v=s.length||0,R=f.length||0;s.length=v+R;for(let b=0;b<R;b++)s[v+b]=f[b]}else s.push(f)}}class K{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function G(s){return/^[\s\xa0]*$/.test(s)}function W(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var xt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ot(s,c,l){for(const f in s)c.call(l,s[f],f,s)}function T(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function m(s){const c={};for(const l in s)c[l]=s[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let l,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(l in f)s[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function E(s){var c=1;s=s.split(":");const l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function I(s){u.setTimeout(()=>{throw s},0)}function g(){var s=Br;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Lt{constructor(){this.h=this.g=null}add(c,l){const f=Ue.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Ue=new K(()=>new Ou,s=>s.reset());class Ou{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,je=!1,Br=new Lt,Ns=()=>{const s=u.Promise.resolve(void 0);Be=()=>{s.then(xu)}};var xu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){I(l)}var c=Ue;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}je=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Lu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function qe(s,c){if(dt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(xt){t:{try{rt(c.nodeName);var v=!0;break t}catch{}v=!1}v||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Fu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&qe.aa.h.call(this)}}D(qe,dt);var Fu={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),Uu=0;function Bu(s,c,l,f,v){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=v,this.key=++Uu,this.da=this.fa=!1}function Dn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function kn(s){this.src=s,this.g={},this.h=0}kn.prototype.add=function(s,c,l,f,v){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var b=qr(s,c,f,v);return-1<b?(c=s[b],l||(c.fa=!1)):(c=new Bu(c,this.src,R,!!f,v),c.fa=l,s.push(c)),c};function jr(s,c){var l=c.type;if(l in s.g){var f=s.g[l],v=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=v)&&Array.prototype.splice.call(f,v,1),R&&(Dn(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function qr(s,c,l,f){for(var v=0;v<s.length;++v){var R=s[v];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return v}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),zr={};function Ms(s,c,l,f,v){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Ms(s,c[R],l,f,v);return null}return l=Ls(l),s&&s[Vn]?s.K(c,l,d(f)?!!f.capture:!!f,v):ju(s,c,l,!1,f,v)}function ju(s,c,l,f,v,R){if(!c)throw Error("Invalid event type");var b=d(v)?!!v.capture:!!v,H=Gr(s);if(H||(s[$r]=H=new kn(s)),l=H.add(c,l,f,b,R),l.proxy)return l;if(f=qu(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)Lu||(v=b),v===void 0&&(v=!1),s.addEventListener(c.toString(),f,v);else if(s.attachEvent)s.attachEvent(xs(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function qu(){function s(l){return c.call(s.src,s.listener,l)}const c=$u;return s}function Os(s,c,l,f,v){if(Array.isArray(c))for(var R=0;R<c.length;R++)Os(s,c[R],l,f,v);else f=d(f)?!!f.capture:!!f,l=Ls(l),s&&s[Vn]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],l=qr(R,l,f,v),-1<l&&(Dn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=Gr(s))&&(c=s.g[c.toString()],s=-1,c&&(s=qr(c,l,f,v)),(l=-1<s?c[s]:null)&&Kr(l))}function Kr(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Vn])jr(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(xs(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Gr(c))?(jr(l,s),l.h==0&&(l.src=null,c[$r]=null)):Dn(s)}}}function xs(s){return s in zr?zr[s]:zr[s]="on"+s}function $u(s,c){if(s.da)s=!0;else{c=new qe(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&Kr(s),s=l.call(f,c)}return s}function Gr(s){return s=s[$r],s instanceof kn?s:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ls(s){return typeof s=="function"?s:(s[Hr]||(s[Hr]=function(c){return s.handleEvent(c)}),s[Hr])}function ft(){zt.call(this),this.i=new kn(this),this.M=this,this.F=null}D(ft,zt),ft.prototype[Vn]=!0,ft.prototype.removeEventListener=function(s,c,l,f){Os(this,s,c,l,f)};function Et(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new dt(c,s);else if(c instanceof dt)c.target=c.target||s;else{var v=c;c=new dt(f,s),y(c,v)}if(v=!0,l)for(var R=l.length-1;0<=R;R--){var b=c.g=l[R];v=Nn(b,f,!0,c)&&v}if(b=c.g=s,v=Nn(b,f,!0,c)&&v,v=Nn(b,f,!1,c)&&v,l)for(R=0;R<l.length;R++)b=c.g=l[R],v=Nn(b,f,!1,c)&&v}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)Dn(l[f]);delete s.g[c],s.h--}}this.F=null},ft.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},ft.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function Nn(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var v=!0,R=0;R<c.length;++R){var b=c[R];if(b&&!b.da&&b.capture==l){var H=b.listener,at=b.ha||b.src;b.fa&&jr(s.i,b),v=H.call(at,f)!==!1&&v}}return v&&!f.defaultPrevented}function Fs(s,c,l){if(typeof s=="function")l&&(s=A(s,l));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function Us(s){s.g=Fs(()=>{s.g=null,s.i&&(s.i=!1,Us(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class zu extends zt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Us(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(s){zt.call(this),this.h=s,this.g={}}D($e,zt);var Bs=[];function js(s){ot(s.g,function(c,l){this.g.hasOwnProperty(l)&&Kr(c)},s),s.g={}}$e.prototype.N=function(){$e.aa.N.call(this),js(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wr=u.JSON.stringify,Ku=u.JSON.parse,Gu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Qr(){}Qr.prototype.h=null;function qs(s){return s.h||(s.h=s.i())}function $s(){}var ze={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yr(){dt.call(this,"d")}D(Yr,dt);function Xr(){dt.call(this,"c")}D(Xr,dt);var ie={},zs=null;function Mn(){return zs=zs||new ft}ie.La="serverreachability";function Ks(s){dt.call(this,ie.La,s)}D(Ks,dt);function Ke(s){const c=Mn();Et(c,new Ks(c))}ie.STAT_EVENT="statevent";function Gs(s,c){dt.call(this,ie.STAT_EVENT,s),this.stat=c}D(Gs,dt);function Tt(s){const c=Mn();Et(c,new Gs(c,s))}ie.Ma="timingevent";function Hs(s,c){dt.call(this,ie.Ma,s),this.size=c}D(Hs,dt);function Ge(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function He(){this.g=!0}He.prototype.xa=function(){this.g=!1};function Hu(s,c,l,f,v,R){s.info(function(){if(s.g)if(R)for(var b="",H=R.split("&"),at=0;at<H.length;at++){var $=H[at].split("=");if(1<$.length){var mt=$[0];$=$[1];var pt=mt.split("_");b=2<=pt.length&&pt[1]=="type"?b+(mt+"="+$+"&"):b+(mt+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+c+`
`+l+`
`+b})}function Wu(s,c,l,f,v,R,b){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+c+`
`+l+`
`+R+" "+b})}function ve(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yu(s,l)+(f?" "+f:"")})}function Qu(s,c){s.info(function(){return"TIMEOUT: "+c})}He.prototype.info=function(){};function Yu(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var R=v[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<v.length;b++)v[b]=""}}}}return Wr(l)}catch{return c}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ws={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function xn(){}D(xn,Qr),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},Jr=new xn;function Kt(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qs}function Qs(){this.i=null,this.g="",this.h=!1}var Ys={},Zr={};function ti(s,c,l){s.L=1,s.v=Bn(Ft(c)),s.m=l,s.P=!0,Xs(s,null)}function Xs(s,c){s.F=Date.now(),Ln(s),s.A=Ft(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ho(l.i,"t",f),s.C=0,l=s.j.J,s.h=new Qs,s.g=Vo(s.j,l?c:null,!s.m),0<s.O&&(s.M=new zu(A(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Bs[0]=v.toString()),v=Bs);for(var R=0;R<v.length;R++){var b=Ms(l,v[R],f||c.handleEvent,!1,c.h||c);if(!b)break;c.g[b.key]=b}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),Ke(),Hu(s.i,s.u,s.A,s.l,s.R,s.m)}Kt.prototype.ca=function(s){s=s.target;const c=this.M;c&&Ut(s)==3?c.j():this.Y(s)},Kt.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Ut(this.g);var c=this.g.Ba();const Ae=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Eo(this.g)))){this.J||pt!=4||c==7||(c==8||0>=Ae?Ke(3):Ke(2)),ei(this);var l=this.g.Z();this.X=l;e:if(Js(this)){var f=Eo(this.g);s="";var v=f.length,R=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),We(this);var b="";break e}this.h.i=new u.TextDecoder}for(c=0;c<v;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(R&&c==v-1)});f.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Wu(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,at=this.g;if((H=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(H)){var $=H;break e}}$=null}if(l=$)ve(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ni(this,l);else{this.o=!1,this.s=3,Tt(12),se(this),We(this);break t}}if(this.P){l=!0;let Ct;for(;!this.J&&this.C<b.length;)if(Ct=Xu(this,b),Ct==Zr){pt==4&&(this.s=4,Tt(14),l=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Ys){this.s=4,Tt(15),ve(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else ve(this.i,this.l,Ct,null),ni(this,Ct);if(Js(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||b.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)ve(this.i,this.l,b,"[Invalid Chunked Response]"),se(this),We(this);else if(0<b.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),ci(mt),mt.M=!0,Tt(11))}}else ve(this.i,this.l,b,null),ni(this,b);pt==4&&se(this),this.o&&!this.J&&(pt==4?Po(this.j,this):(this.o=!1,Ln(this)))}else ml(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),se(this),We(this)}}}catch{}finally{}};function Js(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Xu(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?Zr:(l=Number(c.substring(l,f)),isNaN(l)?Ys:(f+=1,f+l>c.length?Zr:(c=c.slice(f,f+l),s.C=f+l,c)))}Kt.prototype.cancel=function(){this.J=!0,se(this)};function Ln(s){s.S=Date.now()+s.I,Zs(s,s.I)}function Zs(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ge(A(s.ba,s),c)}function ei(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Kt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Qu(this.i,this.A),this.L!=2&&(Ke(),Tt(17)),se(this),this.s=2,We(this)):Zs(this,this.S-s)};function We(s){s.j.G==0||s.J||Po(s.j,s)}function se(s){ei(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,js(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function ni(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||ri(l.h,s))){if(!s.K&&ri(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Gn(l),zn(l);else break t;ai(l),Tt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ge(A(l.Za,l),6e3));if(1>=no(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ae(l,11)}else if((s.K||l.g==s)&&Gn(l),!G(c))for(v=l.Da.g.parse(c),c=0;c<v.length;c++){let $=v[c];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const mt=$[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const pt=$[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const Ae=$[5];Ae!=null&&typeof Ae=="number"&&0<Ae&&(f=1.5*Ae,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Ct=s.g;if(Ct){const Wn=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wn){var R=f.h;R.g||Wn.indexOf("spdy")==-1&&Wn.indexOf("quic")==-1&&Wn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ii(R,R.h),R.h=null))}if(f.D){const ui=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ui&&(f.ya=ui,Y(f.I,f.D,ui))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var b=s;if(f.qa=bo(f,f.J?f.ia:null,f.W),b.K){ro(f.h,b);var H=b,at=f.L;at&&(H.I=at),H.B&&(ei(H),Ln(H)),f.g=b}else Ao(f);0<l.i.length&&Kn(l)}else $[0]!="stop"&&$[0]!="close"||ae(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?ae(l,7):oi(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Ke(4)}catch{}}var Ju=class{constructor(s,c){this.g=s,this.map=c}};function to(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function no(s){return s.h?1:s.g?s.g.size:0}function ri(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function ii(s,c){s.g?s.g.add(c):s.h=c}function ro(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}to.prototype.cancel=function(){if(this.i=io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function io(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.D);return c}return M(s.i)}function Zu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function tl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(const f in s)c[l++]=f;return c}}}function so(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=tl(s),f=Zu(s),v=f.length,R=0;R<v;R++)c.call(void 0,f[R],l&&l[R],s)}var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function el(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),v=null;if(0<=f){var R=s[l].substring(0,f);v=s[l].substring(f+1)}else R=s[l];c(R,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function oe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof oe){this.h=s.h,Fn(this,s.j),this.o=s.o,this.g=s.g,Un(this,s.s),this.l=s.l;var c=s.i,l=new Xe;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),ao(this,l),this.m=s.m}else s&&(c=String(s).match(oo))?(this.h=!1,Fn(this,c[1]||"",!0),this.o=Qe(c[2]||""),this.g=Qe(c[3]||"",!0),Un(this,c[4]),this.l=Qe(c[5]||"",!0),ao(this,c[6]||"",!0),this.m=Qe(c[7]||"")):(this.h=!1,this.i=new Xe(null,this.h))}oe.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Ye(c,co,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Ye(c,co,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ye(l,l.charAt(0)=="/"?il:rl,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ye(l,ol)),s.join("")};function Ft(s){return new oe(s)}function Fn(s,c,l){s.j=l?Qe(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Un(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function ao(s,c,l){c instanceof Xe?(s.i=c,al(s.i,s.h)):(l||(c=Ye(c,sl)),s.i=new Xe(c,s.h))}function Y(s,c,l){s.i.set(c,l)}function Bn(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Qe(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ye(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,nl),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function nl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var co=/[#\/\?@]/g,rl=/[#\?:]/g,il=/[#\?]/g,sl=/[#\?@]/g,ol=/#/g;function Xe(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&el(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Xe.prototype,n.add=function(s,c){Gt(this),this.i=null,s=Ie(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function uo(s,c){Gt(s),c=Ie(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function lo(s,c){return Gt(s),c=Ie(s,c),s.g.has(c)}n.forEach=function(s,c){Gt(this),this.g.forEach(function(l,f){l.forEach(function(v){s.call(c,v,f,this)},this)},this)},n.na=function(){Gt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const v=s[f];for(let R=0;R<v.length;R++)l.push(c[f])}return l},n.V=function(s){Gt(this);let c=[];if(typeof s=="string")lo(this,s)&&(c=c.concat(this.g.get(Ie(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return Gt(this),this.i=null,s=Ie(this,s),lo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ho(s,c,l){uo(s,c),0<l.length&&(s.i=null,s.g.set(Ie(s,c),M(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const R=encodeURIComponent(String(f)),b=this.V(f);for(f=0;f<b.length;f++){var v=R;b[f]!==""&&(v+="="+encodeURIComponent(String(b[f]))),s.push(v)}}return this.i=s.join("&")};function Ie(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function al(s,c){c&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(l,f){var v=f.toLowerCase();f!=v&&(uo(this,f),ho(this,v,l))},s)),s.j=c}function cl(s,c){const l=new He;if(u.Image){const f=new Image;f.onload=P(Ht,l,"TestLoadImage: loaded",!0,c,f),f.onerror=P(Ht,l,"TestLoadImage: error",!1,c,f),f.onabort=P(Ht,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(Ht,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function ul(s,c){const l=new He,f=new AbortController,v=setTimeout(()=>{f.abort(),Ht(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(v),R.ok?Ht(l,"TestPingServer: ok",!0,c):Ht(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),Ht(l,"TestPingServer: error",!1,c)})}function Ht(s,c,l,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(l)}catch{}}function ll(){this.g=new Gu}function hl(s,c,l){const f=l||"";try{so(s,function(v,R){let b=v;d(v)&&(b=Wr(v)),c.push(f+R+"="+encodeURIComponent(b))})}catch(v){throw c.push(f+"type="+encodeURIComponent("_badmap")),v}}function jn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(jn,Qr),jn.prototype.g=function(){return new qn(this.l,this.j)},jn.prototype.i=function(s){return function(){return s}}({});function qn(s,c){ft.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(qn,ft),n=qn.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Ze(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Je(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ze(this)),this.g&&(this.readyState=3,Ze(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function fo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Je(this):Ze(this),this.readyState==3&&fo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Je(this))},n.Qa=function(s){this.g&&(this.response=s,Je(this))},n.ga=function(){this.g&&Je(this)};function Je(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ze(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Ze(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function mo(s){let c="";return ot(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function si(s,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=mo(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Y(s,c,l))}function J(s){ft.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,ft);var dl=/^https?$/i,fl=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?qs(this.o):qs(Jr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){po(this,R);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)l.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),v=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(fl,c,void 0))||f||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yo(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){po(this,R)}};function po(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,go(s),$n(s)}function go(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),$n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_o(this):this.bb())},n.bb=function(){_o(this)};function _o(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ut(s)!=4||s.Z()!=2)){if(s.u&&Ut(s)==4)Fs(s.Ea,0,s);else if(Et(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=b===0){var v=String(s.D).match(oo)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),f=!dl.test(v?v.toLowerCase():"")}l=f}if(l)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var R=2<Ut(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",go(s)}}finally{$n(s)}}}}function $n(s,c){if(s.g){yo(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Et(s,"ready");try{l.onreadystatechange=f}catch{}}}function yo(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Ku(c)}};function Eo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ml(s){const c={};s=(s.g&&2<=Ut(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(G(s[f]))continue;var l=E(s[f]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[v]||[];c[v]=R,R.push(l)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function To(s){this.Aa=0,this.i=[],this.j=new He,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tn("baseRetryDelayMs",5e3,s),this.cb=tn("retryDelaySeedMs",1e4,s),this.Wa=tn("forwardChannelMaxRetries",2,s),this.wa=tn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new to(s&&s.concurrentRequestLimit),this.Da=new ll,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=To.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){Tt(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=bo(this,null,this.W),Kn(this)};function oi(s){if(vo(s),s.G==3){var c=s.U++,l=Ft(s.I);if(Y(l,"SID",s.K),Y(l,"RID",c),Y(l,"TYPE","terminate"),en(s,l),c=new Kt(s,s.j,c),c.L=2,c.v=Bn(Ft(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Vo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ln(c)}Co(s)}function zn(s){s.g&&(ci(s),s.g.cancel(),s.g=null)}function vo(s){zn(s),s.u&&(u.clearTimeout(s.u),s.u=null),Gn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Kn(s){if(!eo(s.h)&&!s.s){s.s=!0;var c=s.Ga;Be||Ns(),je||(Be(),je=!0),Br.add(c,s),s.B=0}}function pl(s,c){return no(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ge(A(s.Ga,s,c),So(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Kt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(v.H=R,R=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=wo(this,v,c),l=Ft(this.I),Y(l,"RID",s),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),en(this,l),R&&(this.O?c="headers="+encodeURIComponent(String(mo(R)))+"&"+c:this.m&&si(l,this.m,R)),ii(this.h,v),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",c),Y(l,"SID","null"),v.T=!0,ti(v,l,null)):ti(v,l,c),this.G=2}}else this.G==3&&(s?Io(this,s):this.i.length==0||eo(this.h)||Io(this))};function Io(s,c){var l;c?l=c.l:l=s.U++;const f=Ft(s.I);Y(f,"SID",s.K),Y(f,"RID",l),Y(f,"AID",s.T),en(s,f),s.m&&s.o&&si(f,s.m,s.o),l=new Kt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=wo(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ii(s.h,l),ti(l,f,c)}function en(s,c){s.H&&ot(s.H,function(l,f){Y(c,f,l)}),s.l&&so({},function(l,f){Y(c,f,l)})}function wo(s,c,l){l=Math.min(s.i.length,l);var f=s.l?A(s.l.Na,s.l,s):null;t:{var v=s.i;let R=-1;for(;;){const b=["count="+l];R==-1?0<l?(R=v[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let H=!0;for(let at=0;at<l;at++){let $=v[at].g;const mt=v[at].map;if($-=R,0>$)R=Math.max(0,v[at].g-100),H=!1;else try{hl(mt,b,"req"+$+"_")}catch{f&&f(mt)}}if(H){f=b.join("&");break t}}}return s=s.i.splice(0,l),c.D=s,f}function Ao(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Be||Ns(),je||(Be(),je=!0),Br.add(c,s),s.v=0}}function ai(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ge(A(s.Fa,s),So(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ro(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ge(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),zn(this),Ro(this))};function ci(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Ro(s){s.g=new Kt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Ft(s.qa);Y(c,"RID","rpc"),Y(c,"SID",s.K),Y(c,"AID",s.T),Y(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(c,"TO",s.ja),Y(c,"TYPE","xmlhttp"),en(s,c),s.m&&s.o&&si(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Bn(Ft(c)),l.m=null,l.P=!0,Xs(l,s)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),ai(this),Tt(19))};function Gn(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Po(s,c){var l=null;if(s.g==c){Gn(s),ci(s),s.g=null;var f=2}else if(ri(s.h,c))l=c.D,ro(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var v=s.B;f=Mn(),Et(f,new Hs(f,l)),Kn(s)}else Ao(s);else if(v=c.s,v==3||v==0&&0<c.X||!(f==1&&pl(s,c)||f==2&&ai(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),v){case 1:ae(s,5);break;case 4:ae(s,10);break;case 3:ae(s,6);break;default:ae(s,2)}}}function So(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function ae(s,c){if(s.j.info("Error code "+c),c==2){var l=A(s.fb,s),f=s.Xa;const v=!f;f=new oe(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Fn(f,"https"),Bn(f),v?cl(f.toString(),l):ul(f.toString(),l)}else Tt(2);s.G=0,s.l&&s.l.sa(c),Co(s),vo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Co(s){if(s.G=0,s.ka=[],s.l){const c=io(s.h);(c.length!=0||s.i.length!=0)&&(V(s.ka,c),V(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function bo(s,c,l){var f=l instanceof oe?Ft(l):new oe(l);if(f.g!="")c&&(f.g=c+"."+f.g),Un(f,f.s);else{var v=u.location;f=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;var R=new oe(null);f&&Fn(R,f),c&&(R.g=c),v&&Un(R,v),l&&(R.l=l),f=R}return l=s.D,c=s.ya,l&&c&&Y(f,l,c),Y(f,"VER",s.la),en(s,f),f}function Vo(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new J(new jn({eb:l})):new J(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Do(){}n=Do.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hn(){}Hn.prototype.g=function(s,c){return new At(s,c)};function At(s,c){ft.call(this),this.g=new To(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!G(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new we(this)}D(At,ft),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){oi(this.g)},At.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Wr(s),s=l);c.i.push(new Ju(c.Ya++,s)),c.G==3&&Kn(c)},At.prototype.N=function(){this.g.l=null,delete this.j,oi(this.g),delete this.g,At.aa.N.call(this)};function ko(s){Yr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const l in c){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}D(ko,Yr);function No(){Xr.call(this),this.status=1}D(No,Xr);function we(s){this.g=s}D(we,Do),we.prototype.ua=function(){Et(this.g,"a")},we.prototype.ta=function(s){Et(this.g,new ko(s))},we.prototype.sa=function(s){Et(this.g,new No)},we.prototype.ra=function(){Et(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Za=function(){return new Hn},Ja=function(){return Mn()},Xa=ie,Pi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,tr=On,Ws.COMPLETE="complete",Ya=Ws,$s.EventType=ze,ze.OPEN="a",ze.CLOSE="b",ze.ERROR="c",ze.MESSAGE="d",ft.prototype.listen=ft.prototype.K,sn=$s,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Qa=J}).apply(typeof Qn<"u"?Qn:typeof self<"u"?self:typeof window<"u"?window:{});const Go="@firebase/firestore";/**
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
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let xe="10.14.0";/**
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
 */const de=new qi("@firebase/firestore");function nn(){return de.logLevel}function k(n,...t){if(de.logLevel<=j.DEBUG){const e=t.map(zi);de.debug(`Firestore (${xe}): ${n}`,...e)}}function qt(n,...t){if(de.logLevel<=j.ERROR){const e=t.map(zi);de.error(`Firestore (${xe}): ${n}`,...e)}}function Ve(n,...t){if(de.logLevel<=j.WARN){const e=t.map(zi);de.warn(`Firestore (${xe}): ${n}`,...e)}}function zi(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function x(n="Unexpected state"){const t=`FIRESTORE (${xe}) INTERNAL ASSERTION FAILED: `+n;throw qt(t),new Error(t)}function q(n,t){n||x()}function F(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class tc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class rd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class id{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){q(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Dt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Dt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new tc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return q(t===null||typeof t=="string"),new _t(t)}}class sd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class od{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new sd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ad{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){q(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(q(typeof e.token=="string"),this.R=e.token,new ad(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ud(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class ec{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ud(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function De(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new nt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gn{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Q extends gn{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const ld=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends gn{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return ld.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Q.fromString(t))}static fromName(t){return new O(Q.fromString(t).popFirst(5))}static empty(){return new O(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Q(t.slice()))}}function hd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new Zt(i,O.empty(),t)}function dd(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(L.min(),O.empty(),-1)}static max(){return new Zt(L.max(),O.empty(),-1)}}function fd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
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
 */const md="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function wn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==md)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function gd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function An(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ki{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ki.oe=-1;function Rn(n){return n==null}function cr(n){return n===0&&1/n==-1/0}function _d(n){return typeof n=="number"&&Number.isInteger(n)&&!cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ho(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ye(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function nc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class X{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yn(this.root,t,this.comparator,!0)}}class Yn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wo(this.data.getIterator())}getIteratorFrom(t){return new Wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new lt(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class rc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new rc("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const yd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(q(!!n),typeof n=="string"){let t=0;const e=yd.exec(n);if(q(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
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
 */function Gi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Hi(n){const t=n.mapValue.fields.__previous_value__;return Gi(t)?Hi(t):t}function _n(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
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
 */class Ed{constructor(t,e,r,i,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class yn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Xn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gi(n)?4:vd(n)?9007199254740991:Td(n)?10:11:x()}function Nt(n,t){if(n===t)return!0;const e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=te(i.timestampValue),u=te(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return fe(i.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Z(i.doubleValue),u=Z(o.doubleValue);return a===u?cr(a)===cr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return De(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Ho(a)!==Ho(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Nt(a[h],u[h])))return!1;return!0}(n,t);default:return x()}}function En(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function ke(n,t){if(n===t)return 0;const e=me(n),r=me(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Qo(n.timestampValue,t.timestampValue);case 4:return Qo(_n(n),_n(t));case 5:return z(n.stringValue,t.stringValue);case 6:return function(o,a){const u=fe(o),h=fe(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=z(u[d],h[d]);if(p!==0)return p}return z(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=z(Z(o.latitude),Z(a.latitude));return u!==0?u:z(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Yo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,p;const w=o.fields||{},A=a.fields||{},P=(u=w.value)===null||u===void 0?void 0:u.arrayValue,D=(h=A.value)===null||h===void 0?void 0:h.arrayValue,M=z(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:Yo(P,D)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Xn.mapValue&&a===Xn.mapValue)return 0;if(o===Xn.mapValue)return 1;if(a===Xn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let w=0;w<h.length&&w<p.length;++w){const A=z(h[w],p[w]);if(A!==0)return A;const P=ke(u[h[w]],d[p[w]]);if(P!==0)return P}return z(h.length,p.length)}(n.mapValue,t.mapValue);default:throw x()}}function Qo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=te(n),r=te(t),i=z(e.seconds,r.seconds);return i!==0?i:z(e.nanos,r.nanos)}function Yo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=ke(e[i],r[i]);if(o)return o}return z(e.length,r.length)}function Ne(n){return Si(n)}function Si(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Si(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Si(e.fields[a])}`;return i+"}"}(n.mapValue):x()}function Ci(n){return!!n&&"integerValue"in n}function Wi(n){return!!n&&"arrayValue"in n}function Xo(n){return!!n&&"nullValue"in n}function Jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function er(n){return!!n&&"mapValue"in n}function Td(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ye(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function vd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!er(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=ut.emptyPath(),r={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=u.popLast()}a?r[u.lastSegment()]=cn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());er(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];er(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ye(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new vt(cn(this.value))}}function ic(n){const t=[];return ye(n.fields,(e,r)=>{const i=new ut([e]);if(er(r)){const o=ic(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Rt(t)}/**
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
 */class st{constructor(t,e,r,i,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new st(t,0,L.min(),L.min(),L.min(),vt.empty(),0)}static newFoundDocument(t,e,r,i){return new st(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new st(t,2,e,L.min(),L.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new st(t,3,e,L.min(),L.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ur{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=ke(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class lr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Id(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class sc{}class et extends sc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Ad(t,e,r):e==="array-contains"?new Sd(t,r):e==="in"?new Cd(t,r):e==="not-in"?new bd(t,r):e==="array-contains-any"?new Vd(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Rd(t,r):new Pd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ke(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends sc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Mt(t,e)}matches(t){return oc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function oc(n){return n.op==="and"}function ac(n){return wd(n)&&oc(n)}function wd(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function bi(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Ne(n.value);if(ac(n))return n.filters.map(t=>bi(t)).join(",");{const t=n.filters.map(e=>bi(e)).join(",");return`${n.op}(${t})`}}function cc(n,t){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)}(n,t):n instanceof Mt?function(r,i){return i instanceof Mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&cc(a,i.filters[u]),!0):!1}(n,t):void x()}function uc(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ne(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(uc).join(" ,")+"}"}(n):"Filter"}class Ad extends et{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Rd extends et{constructor(t,e){super(t,"in",e),this.keys=lc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pd extends et{constructor(t,e){super(t,"not-in",e),this.keys=lc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function lc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Sd extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wi(e)&&En(e.arrayValue,this.value)}}class Cd extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class bd extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!En(this.value.arrayValue,e)}}class Vd extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
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
 */class Dd{constructor(t,e=null,r=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ea(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Dd(n,t,e,r,i,o,a)}function Qi(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>bi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Rn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ne(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ne(r)).join(",")),t.ue=e}return t.ue}function Yi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Id(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!cc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ta(n.startAt,t.startAt)&&ta(n.endAt,t.endAt)}function Vi(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ir{constructor(t,e=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kd(n,t,e,r,i,o,a,u){return new Ir(n,t,e,r,i,o,a,u)}function Xi(n){return new Ir(n)}function na(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nd(n){return n.collectionGroup!==null}function un(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new lt(ut.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new lr(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new lr(ut.keyField(),r))}return t.ce}function kt(n){const t=F(n);return t.le||(t.le=Md(t,un(n))),t.le}function Md(n,t){if(n.limitType==="F")return ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new lr(i.field,o)});const e=n.endAt?new ur(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ur(n.startAt.position,n.startAt.inclusive):null;return ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Di(n,t,e){return new Ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function wr(n,t){return Yi(kt(n),kt(t))&&n.limitType===t.limitType}function hc(n){return`${Qi(kt(n))}|lt:${n.limitType}`}function Re(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>uc(i)).join(", ")}]`),Rn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ne(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ne(i)).join(",")),`Target(${r})`}(kt(n))}; limitType=${n.limitType})`}function Ar(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of un(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=Zo(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,un(r),i)||r.endAt&&!function(a,u,h){const d=Zo(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,un(r),i))}(n,t)}function Od(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dc(n){return(t,e)=>{let r=!1;for(const i of un(n)){const o=xd(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function xd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?ke(h,d):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class Le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ye(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return nc(this.inner)}size(){return this.innerSize}}/**
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
 */const Ld=new X(O.comparator);function $t(){return Ld}const fc=new X(O.comparator);function on(...n){let t=fc;for(const e of n)t=t.insert(e.key,e);return t}function mc(n){let t=fc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ue(){return ln()}function pc(){return ln()}function ln(){return new Le(n=>n.toString(),(n,t)=>n.isEqual(t))}const Fd=new X(O.comparator),Ud=new lt(O.comparator);function U(...n){let t=Ud;for(const e of n)t=t.add(e);return t}const Bd=new lt(z);function jd(){return Bd}/**
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
 */function Ji(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(t)?"-0":t}}function gc(n){return{integerValue:""+n}}function qd(n,t){return _d(t)?gc(t):Ji(n,t)}/**
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
 */class Rr{constructor(){this._=void 0}}function $d(n,t,e){return n instanceof hr?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Gi(o)&&(o=Hi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Tn?yc(n,t):n instanceof vn?Ec(n,t):function(i,o){const a=_c(i,o),u=ra(a)+ra(i.Pe);return Ci(a)&&Ci(i.Pe)?gc(u):Ji(i.serializer,u)}(n,t)}function zd(n,t,e){return n instanceof Tn?yc(n,t):n instanceof vn?Ec(n,t):e}function _c(n,t){return n instanceof dr?function(r){return Ci(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class hr extends Rr{}class Tn extends Rr{constructor(t){super(),this.elements=t}}function yc(n,t){const e=Tc(t);for(const r of n.elements)e.some(i=>Nt(i,r))||e.push(r);return{arrayValue:{values:e}}}class vn extends Rr{constructor(t){super(),this.elements=t}}function Ec(n,t){let e=Tc(t);for(const r of n.elements)e=e.filter(i=>!Nt(i,r));return{arrayValue:{values:e}}}class dr extends Rr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ra(n){return Z(n.integerValue||n.doubleValue)}function Tc(n){return Wi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Kd(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Tn&&i instanceof Tn||r instanceof vn&&i instanceof vn?De(r.elements,i.elements,Nt):r instanceof dr&&i instanceof dr?Nt(r.Pe,i.Pe):r instanceof hr&&i instanceof hr}(n.transform,t.transform)}class Gd{constructor(t,e){this.version=t,this.transformResults=e}}class yt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new yt}static exists(t){return new yt(void 0,t)}static updateTime(t){return new yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pr{}function vc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Sr(n.key,yt.none()):new Pn(n.key,n.data,yt.none());{const e=n.data,r=vt.empty();let i=new lt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new re(n.key,r,new Rt(i.toArray()),yt.none())}}function Hd(n,t,e){n instanceof Pn?function(i,o,a){const u=i.value.clone(),h=sa(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof re?function(i,o,a){if(!nr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=sa(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ic(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function hn(n,t,e,r){return n instanceof Pn?function(o,a,u,h){if(!nr(o.precondition,a))return u;const d=o.value.clone(),p=oa(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof re?function(o,a,u,h){if(!nr(o.precondition,a))return u;const d=oa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Ic(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,u){return nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Wd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=_c(r.transform,i||null);o!=null&&(e===null&&(e=vt.empty()),e.set(r.field,o))}return e||null}function ia(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&De(r,i,(o,a)=>Kd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Pn extends Pr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class re extends Pr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ic(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function sa(n,t,e){const r=new Map;q(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,u=t.data.field(o.field);r.set(o.field,zd(a,u,e[i]))}return r}function oa(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,$d(o,a,t))}return r}class Sr extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wc extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Hd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=hn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=hn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pc();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const h=vc(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,(e,r)=>ia(e,r))&&De(this.baseMutations,t.baseMutations,(e,r)=>ia(e,r))}}class Zi{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){q(t.mutations.length===r.length);let i=function(){return Fd}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Zi(t,e,r,i)}}/**
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
 */class Yd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Xd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,B;function Ac(n){switch(n){default:return x();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Rc(n){if(n===void 0)return qt("GRPC error has no .code"),S.UNKNOWN;switch(n){case tt.OK:return S.OK;case tt.CANCELLED:return S.CANCELLED;case tt.UNKNOWN:return S.UNKNOWN;case tt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case tt.INTERNAL:return S.INTERNAL;case tt.UNAVAILABLE:return S.UNAVAILABLE;case tt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case tt.NOT_FOUND:return S.NOT_FOUND;case tt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case tt.ABORTED:return S.ABORTED;case tt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case tt.DATA_LOSS:return S.DATA_LOSS;default:return x()}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Jd(){return new TextEncoder}/**
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
 */const Zd=new he([4294967295,4294967295],0);function aa(n){const t=Jd().encode(n),e=new Wa;return e.update(t),new Uint8Array(e.digest())}function ca(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,r],0),new he([i,o],0)]}class ts{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new an(`Invalid padding: ${e}`);if(r<0)throw new an(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new an(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=he.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(he.fromNumber(r)));return i.compare(Zd)===1&&(i=new he([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=aa(t),[r,i]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ts(o,i,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=aa(t),[r,i]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Cr(L.min(),i,new X(z),$t(),U())}}class Sn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Sn(r,e,U(),U(),U())}}/**
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
 */class rr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Pc{constructor(t,e){this.targetId=t,this.me=e}}class Sc{constructor(t,e,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ua{constructor(){this.fe=0,this.ge=ha(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:x()}}),new Sn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=ha()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tf{constructor(t){this.Le=t,this.Be=new Map,this.ke=$t(),this.qe=la(),this.Qe=new X(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Vi(o))if(r===0){const a=new O(o.path);this.Ue(e,a,st.newNoDocument(a,L.min()))}else q(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=fe(r).toUint8Array()}catch(h){if(h instanceof rc)return Ve("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new ts(a,i,o)}catch(h){return Ve(h instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&Vi(u.target)){const h=new O(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,st.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Cr(t,e,this.Qe,this.ke,r);return this.ke=$t(),this.qe=la(),this.Qe=new X(z),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ua,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ua),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function la(){return new X(O.comparator)}function ha(){return new X(O.comparator)}const ef={asc:"ASCENDING",desc:"DESCENDING"},nf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rf={and:"AND",or:"OR"};class sf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ki(n,t){return n.useProto3Json||Rn(t)?t:{value:t}}function fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function of(n,t){return fr(n,t.toTimestamp())}function Pt(n){return q(!!n),L.fromTimestamp(function(e){const r=te(e);return new nt(r.seconds,r.nanos)}(n))}function es(n,t){return Ni(n,t).canonicalString()}function Ni(n,t){const e=function(i){return new Q(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function bc(n){const t=Q.fromString(n);return q(Oc(t)),t}function mr(n,t){return es(n.databaseId,t.path)}function dn(n,t){const e=bc(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Dc(e))}function Vc(n,t){return es(n.databaseId,t)}function af(n){const t=bc(n);return t.length===4?Q.emptyPath():Dc(t)}function Mi(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Dc(n){return q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function da(n,t,e){return{name:mr(n,t),fields:e.value.mapValue.fields}}function cf(n,t){return"found"in t?function(r,i){q(!!i.found),i.found.name,i.found.updateTime;const o=dn(r,i.found.name),a=Pt(i.found.updateTime),u=i.found.createTime?Pt(i.found.createTime):L.min(),h=new vt({mapValue:{fields:i.found.fields}});return st.newFoundDocument(o,a,u,h)}(n,t):"missing"in t?function(r,i){q(!!i.missing),q(!!i.readTime);const o=dn(r,i.missing),a=Pt(i.readTime);return st.newNoDocument(o,a)}(n,t):x()}function uf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(q(p===void 0||typeof p=="string"),ht.fromBase64String(p||"")):(q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ht.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Rc(d.code);return new N(p,d.message||"")}(a);e=new Sc(r,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=dn(n,r.document.name),o=Pt(r.document.updateTime),a=r.document.createTime?Pt(r.document.createTime):L.min(),u=new vt({mapValue:{fields:r.document.fields}}),h=st.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];e=new rr(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=dn(n,r.document),o=r.readTime?Pt(r.readTime):L.min(),a=st.newNoDocument(i,o),u=r.removedTargetIds||[];e=new rr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=dn(n,r.document),o=r.removedTargetIds||[];e=new rr([],o,i,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Xd(i,o),u=r.targetId;e=new Pc(u,a)}}return e}function kc(n,t){let e;if(t instanceof Pn)e={update:da(n,t.key,t.value)};else if(t instanceof Sr)e={delete:mr(n,t.key)};else if(t instanceof re)e={update:da(n,t.key,t.data),updateMask:yf(t.fieldMask)};else{if(!(t instanceof wc))return x();e={verify:mr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof hr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Tn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof dr)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:of(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function lf(n,t){return n&&n.length>0?(q(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Pt(i.updateTime):Pt(o);return a.isEqual(L.min())&&(a=Pt(o)),new Gd(a,i.transformResults||[])}(e,t))):[]}function hf(n,t){return{documents:[Vc(n,t.path)]}}function df(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Vc(n,i);const o=function(d){if(d.length!==0)return Mc(Mt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Pe(A.field),direction:pf(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ki(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function ff(n){let t=af(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){q(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(w){const A=Nc(w);return A instanceof Mt&&ac(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(A=>function(D){return new lr(Se(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(e.orderBy));let u=null;e.limit&&(u=function(w){let A;return A=typeof w=="object"?w.value:w,Rn(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(w){const A=!!w.before,P=w.values||[];return new ur(P,A)}(e.startAt));let d=null;return e.endAt&&(d=function(w){const A=!w.before,P=w.values||[];return new ur(P,A)}(e.endAt)),kd(t,i,a,o,u,"F",h,d)}function mf(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Nc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Se(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Se(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Se(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return et.create(Se(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(r=>Nc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function pf(n){return ef[n]}function gf(n){return nf[n]}function _f(n){return rf[n]}function Pe(n){return{fieldPath:n.canonicalString()}}function Se(n){return ut.fromServerFormat(n.fieldPath)}function Mc(n){return n instanceof et?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NAN"}};if(Xo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NAN"}};if(Xo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pe(e.field),op:gf(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const r=e.getFilters().map(i=>Mc(i));return r.length===1?r[0]:{compositeFilter:{op:_f(e.op),filters:r}}}(n):x()}function yf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Oc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Wt{constructor(t,e,r,i,o=L.min(),a=L.min(),u=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Ef{constructor(t){this.ct=t}}function Tf(n){const t=ff({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Di(t,t.limit,"L"):t}/**
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
 */class vf{constructor(){this.un=new If}addToCollectionParentIndex(t,e){return this.un.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Zt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class If{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new lt(Q.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lt(Q.comparator)).toArray()}}/**
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
 */class Me{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Me(0)}static kn(){return new Me(-1)}}/**
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
 */class wf{constructor(){this.changes=new Le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,st.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Af{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Rf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&hn(r.mutation,i,Rt.empty(),nt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=ue();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=on();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ue();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,i){let o=$t();const a=ln(),u=function(){return ln()}();return e.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof re)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),hn(p.mutation,d,p.mutation.getFieldMask(),nt.now())):a.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var w;return u.set(d,new Af(p,(w=a.get(d))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(t,e){const r=ln();let i=new X((a,u)=>a-u),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Rt.empty();p=u.applyToLocalView(d,p),r.set(h,p);const w=(i.get(u.batchId)||U()).add(h);i=i.insert(u.batchId,w)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,w=pc();p.forEach(A=>{if(!o.has(A)){const P=vc(e.get(A),r.get(A));P!==null&&w.set(A,P),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,w))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Nd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(ue());let u=-1,h=o;return a.next(d=>C.forEach(d,(p,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,U())).next(p=>({batchId:u,changes:mc(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=on();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=on();return this.indexManager.getCollectionParents(t,o).next(u=>C.forEach(u,h=>{const d=function(w,A){return new Ir(A,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(p=>{p.forEach((w,A)=>{a=a.insert(w,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,st.newInvalidDocument(p)))});let u=on();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&hn(p.mutation,d,Rt.empty(),nt.now()),Ar(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class Pf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return C.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Pt(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:Tf(i.bundledQuery),readTime:Pt(i.readTime)}}(e)),C.resolve()}}/**
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
 */class Sf{constructor(){this.overlays=new X(O.comparator),this.Ir=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ue();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=ue(),o=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new X((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=ue(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=ue(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return C.resolve(u)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Yd(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Cf{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class ns{constructor(){this.Tr=new lt(it.Er),this.dr=new lt(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new it(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new O(new Q([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new Q([])),r=new it(e,t),i=new it(e,t+1);let o=U();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||z(t.wr,e.wr)}static Ar(t,e){return z(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
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
 */class bf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new lt(it.Er)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qd(o,e,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new it(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.vr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(z);return e.forEach(i=>{const o=new it(i,0),a=new it(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new it(new O(o),0);let u=new lt(z);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.wr)),!0)},a),C.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(r=>{const i=this.Dr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){q(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new it(e,0),i=this.br.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Vf{constructor(t){this.Mr=t,this.docs=function(){return new X(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():st.newInvalidDocument(e))}getEntries(t,e){let r=$t();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():st.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=$t();const a=e.path,u=new O(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||fd(dd(p),r)<=0||(i.has(p.key)||Ar(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x()}Or(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Df(this)}getSize(t){return C.resolve(this.size)}}class Df extends wf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class kf{constructor(t){this.persistence=t,this.Nr=new Le(e=>Qi(e),Yi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ns,this.targetCount=0,this.kr=Me.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),C.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Kn(e),C.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Br.containsKey(e))}}/**
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
 */class Nf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ki(0),this.Kr=!1,this.Kr=!0,this.$r=new Cf,this.referenceDelegate=t(this),this.Ur=new kf(this),this.indexManager=new vf,this.remoteDocumentCache=function(i){return new Vf(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ef(e),this.Gr=new Pf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new bf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const i=new Mf(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class Mf extends pd{constructor(t){super(),this.currentSequenceNumber=t}}class rs{constructor(t){this.persistence=t,this.Jr=new ns,this.Yr=null}static Zr(t){return new rs(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),C.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const i=O.fromPath(r);return this.ei(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return C.or([()=>C.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class is{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=i}static Wi(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new is(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Of{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class xf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Fl()?8:gd(Ol())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Of;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,r,i){return r.documentReadCount<this.ji?(nn()<=j.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Re(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(nn()<=j.DEBUG&&k("QueryEngine","Query:",Re(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(nn()<=j.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Re(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):C.resolve())}Yi(t,e){if(na(e))return C.resolve(null);let r=kt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Di(e,null,"F"),r=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,u);return this.ns(e,d,a,h.readTime)?this.Yi(t,Di(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,i){return na(e)||i.isEqual(L.min())?C.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,i)?C.resolve(null):(nn()<=j.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Re(e)),this.rs(t,a,e,hd(i,-1)).next(u=>u))})}ts(t,e){let r=new lt(dc(t));return e.forEach((i,o)=>{Ar(t,o)&&(r=r.add(o))}),r}ns(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,r){return nn()<=j.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Re(e)),this.Ji.getDocumentsMatchingQuery(t,e,Zt.min(),r)}rs(t,e,r,i){return this.Ji.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Lf{constructor(t,e,r,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new X(z),this._s=new Le(o=>Qi(o),Yi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Rf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Ff(n,t,e,r){return new Lf(n,t,e,r)}async function xc(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=U();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Uf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const w=d.batch,A=w.keys();let P=C.resolve();return A.forEach(D=>{P=P.next(()=>p.getEntry(h,D)).next(M=>{const V=d.docVersions.get(D);q(V!==null),M.version.compareTo(V)<0&&(w.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),p.addEntry(M)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(h,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=U();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Lc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Bf(n,t){const e=F(n),r=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const u=[];t.targetChanges.forEach((p,w)=>{const A=i.get(w);if(!A)return;u.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,w)));let P=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?P=P.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(w,P),function(M,V,K){return M.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(A,P,p)&&u.push(e.Ur.updateTargetData(o,P))});let h=$t(),d=U();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(jf(o,a,t.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(L.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return C.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=i,o))}function jf(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=$t();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):k("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function qf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function $f(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Ur.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.Ur.allocateTargetId(r).next(a=>(i=new Wt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Oi(n,t,e){const r=F(n),i=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!An(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function fa(n,t,e){const r=F(n);let i=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const w=F(h),A=w._s.get(p);return A!==void 0?C.resolve(w.os.get(A)):w.Ur.getTargetData(d,p)}(r,a,kt(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:U())).next(u=>(zf(r,Od(t),u),{documents:u,Ts:o})))}function zf(n,t,e){let r=n.us.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class ma{constructor(){this.activeTargetIds=jd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kf{constructor(){this.so=new ma,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new ma,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Gf{_o(t){}shutdown(){}}/**
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
 */class pa{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Jn=null;function mi(){return Jn===null?Jn=function(){return 268435456+Math.round(2147483648*Math.random())}():Jn++,"0x"+Jn.toString(16)}/**
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
 */const Hf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Wf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const gt="WebChannelConnection";class Qf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,r,i,o,a){const u=mi(),h=this.xo(e,r.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${u}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,i).then(p=>(k("RestConnection",`Received RPC '${e}' ${u}: `,p),p),p=>{throw Ve("RestConnection",`RPC '${e}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(e,r,i,o,a,u){return this.Mo(e,r,i,o,a)}Oo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const i=Hf[e];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,i){const o=mi();return new Promise((a,u)=>{const h=new Qa;h.setWithCredentials(!0),h.listenOnce(Ya.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case tr.NO_ERROR:const p=h.getResponseJson();k(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case tr.TIMEOUT:k(gt,`RPC '${t}' ${o} timed out`),u(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const w=h.getStatus();if(k(gt,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const D=function(V){const K=V.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(P.status);u(new N(D,P.message))}else u(new N(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new N(S.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{k(gt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);k(gt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const i=mi(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Za(),u=Ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");k(gt,`Creating RPC '${t}' stream ${i}: ${p}`,h);const w=a.createWebChannel(p,h);let A=!1,P=!1;const D=new Wf({Io:V=>{P?k(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(A||(k(gt,`Opening RPC '${t}' stream ${i} transport.`),w.open(),A=!0),k(gt,`RPC '${t}' stream ${i} sending:`,V),w.send(V))},To:()=>w.close()}),M=(V,K,G)=>{V.listen(K,W=>{try{G(W)}catch(rt){setTimeout(()=>{throw rt},0)}})};return M(w,sn.EventType.OPEN,()=>{P||(k(gt,`RPC '${t}' stream ${i} transport opened.`),D.yo())}),M(w,sn.EventType.CLOSE,()=>{P||(P=!0,k(gt,`RPC '${t}' stream ${i} transport closed`),D.So())}),M(w,sn.EventType.ERROR,V=>{P||(P=!0,Ve(gt,`RPC '${t}' stream ${i} transport errored:`,V),D.So(new N(S.UNAVAILABLE,"The operation could not be completed")))}),M(w,sn.EventType.MESSAGE,V=>{var K;if(!P){const G=V.data[0];q(!!G);const W=G,rt=W.error||((K=W[0])===null||K===void 0?void 0:K.error);if(rt){k(gt,`RPC '${t}' stream ${i} received error:`,rt);const xt=rt.status;let ot=function(_){const y=tt[_];if(y!==void 0)return Rc(y)}(xt),T=rt.message;ot===void 0&&(ot=S.INTERNAL,T="Unknown error status: "+xt+" with message "+rt.message),P=!0,D.So(new N(ot,T)),w.close()}else k(gt,`RPC '${t}' stream ${i} received:`,G),D.bo(G)}}),M(u,Xa.STAT_EVENT,V=>{V.stat===Pi.PROXY?k(gt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===Pi.NOPROXY&&k(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function pi(){return typeof document<"u"?document:null}/**
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
 */function br(n){return new sf(n,!0)}/**
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
 */class ss{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Fc{constructor(t,e,r,i,o,a,u,h){this.ui=t,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ss(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===e&&this.P_(r,i)},r=>{t(()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yf extends Fc{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=uf(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Pt(a.readTime):L.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Mi(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=Vi(h)?{documents:hf(o,h)}:{query:df(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Cc(o,a.resumeToken);const d=ki(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=fr(o,a.snapshotVersion.toTimestamp());const d=ki(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=mf(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Mi(this.serializer),e.removeTarget=t,this.a_(e)}}class Xf extends Fc{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return q(!!t.streamToken),this.lastStreamToken=t.streamToken,q(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=lf(t.writeResults,t.commitTime),r=Pt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Mi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>kc(this.serializer,r))};this.a_(e)}}/**
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
 */class Jf extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Ni(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())})}Lo(t,e,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Ni(e,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Zf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qt(e),this.D_=!1):k("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class tm{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ee(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=F(h);d.L_.add(4),await Cn(d),d.q_.set("Unknown"),d.L_.delete(4),await Vr(d)}(this))})}),this.q_=new Zf(r,i)}}async function Vr(n){if(Ee(n))for(const t of n.B_)await t(!0)}async function Cn(n){for(const t of n.B_)await t(!1)}function Uc(n,t){const e=F(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),us(e)?cs(e):Fe(e).r_()&&as(e,t))}function os(n,t){const e=F(n),r=Fe(e);e.N_.delete(t),r.r_()&&Bc(e,t),e.N_.size===0&&(r.r_()?r.o_():Ee(e)&&e.q_.set("Unknown"))}function as(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fe(n).A_(t)}function Bc(n,t){n.Q_.xe(t),Fe(n).R_(t)}function cs(n){n.Q_=new tf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Fe(n).start(),n.q_.v_()}function us(n){return Ee(n)&&!Fe(n).n_()&&n.N_.size>0}function Ee(n){return F(n).L_.size===0}function jc(n){n.Q_=void 0}async function em(n){n.q_.set("Online")}async function nm(n){n.N_.forEach((t,e)=>{as(n,t)})}async function rm(n,t){jc(n),us(n)?(n.q_.M_(t),cs(n)):n.q_.set("Unknown")}async function im(n,t,e){if(n.q_.set("Online"),t instanceof Sc&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,t)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await pr(n,r)}else if(t instanceof rr?n.Q_.Ke(t):t instanceof Pc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(L.min()))try{const r=await Lc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),Bc(o,h);const w=new Wt(p.target,h,d,p.sequenceNumber);as(o,w)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await pr(n,r)}}async function pr(n,t,e){if(!An(t))throw t;n.L_.add(1),await Cn(n),n.q_.set("Offline"),e||(e=()=>Lc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Vr(n)})}function qc(n,t){return t().catch(e=>pr(n,e,t))}async function Dr(n){const t=F(n),e=ee(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;sm(t);)try{const i=await qf(t.localStore,r);if(i===null){t.O_.length===0&&e.o_();break}r=i.batchId,om(t,i)}catch(i){await pr(t,i)}$c(t)&&zc(t)}function sm(n){return Ee(n)&&n.O_.length<10}function om(n,t){n.O_.push(t);const e=ee(n);e.r_()&&e.V_&&e.m_(t.mutations)}function $c(n){return Ee(n)&&!ee(n).n_()&&n.O_.length>0}function zc(n){ee(n).start()}async function am(n){ee(n).p_()}async function cm(n){const t=ee(n);for(const e of n.O_)t.m_(e.mutations)}async function um(n,t,e){const r=n.O_.shift(),i=Zi.from(r,t,e);await qc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Dr(n)}async function lm(n,t){t&&ee(n).V_&&await async function(r,i){if(function(a){return Ac(a)&&a!==S.ABORTED}(i.code)){const o=r.O_.shift();ee(r).s_(),await qc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Dr(r)}}(n,t),$c(n)&&zc(n)}async function ga(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=Ee(e);e.L_.add(3),await Cn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Vr(e)}async function hm(n,t){const e=F(n);t?(e.L_.delete(2),await Vr(e)):t||(e.L_.add(2),await Cn(e),e.q_.set("Unknown"))}function Fe(n){return n.K_||(n.K_=function(e,r,i){const o=F(e);return o.w_(),new Yf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:em.bind(null,n),Ro:nm.bind(null,n),mo:rm.bind(null,n),d_:im.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),us(n)?cs(n):n.q_.set("Unknown")):(await n.K_.stop(),jc(n))})),n.K_}function ee(n){return n.U_||(n.U_=function(e,r,i){const o=F(e);return o.w_(),new Xf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:am.bind(null,n),mo:lm.bind(null,n),f_:cm.bind(null,n),g_:um.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Dr(n)):(await n.U_.stop(),n.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ls{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,u=new ls(t,e,a,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hs(n,t){if(qt("AsyncQueue",`${t}: ${n}`),An(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class be{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=on(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new be(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof be)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new be;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class _a{constructor(){this.W_=new X(O.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):x():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Oe{constructor(t,e,r,i,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Oe(t,e,be.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dm{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class fm{constructor(){this.queries=ya(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=ya(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function ya(){return new Le(n=>hc(n),wr)}async function Kc(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(r=2):(o=new dm,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=hs(a,`Initialization of query '${Re(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ds(e)}async function Gc(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function mm(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&ds(e)}function pm(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.j_)o.onError(e);r.queries.delete(t)}function ds(n){n.Y_.forEach(t=>{t.next()})}var xi,Ea;(Ea=xi||(xi={})).ea="default",Ea.Cache="cache";class Hc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Oe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==xi.Cache}}/**
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
 */class Wc{constructor(t){this.key=t}}class Qc{constructor(t){this.key=t}}class gm{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=dc(t),this.Ra=new be(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new _a,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,w)=>{const A=i.get(p),P=Ar(this.query,w)?w:null,D=!!A&&this.mutatedKeys.has(A.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;A&&P?A.data.isEqual(P.data)?D!==M&&(r.track({type:3,doc:P}),V=!0):this.ga(A,P)||(r.track({type:2,doc:P}),V=!0,(h&&this.Aa(P,h)>0||d&&this.Aa(P,d)<0)&&(u=!0)):!A&&P?(r.track({type:0,doc:P}),V=!0):A&&!P&&(r.track({type:1,doc:A}),V=!0,(h||d)&&(u=!0)),V&&(P?(a=a.add(P),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,w)=>function(P,D){const M=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return M(P)-M(D)}(p.type,w.type)||this.Aa(p.doc,w.doc)),this.pa(r),i=i!=null&&i;const u=e&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Oe(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _a,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Qc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Wc(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Oe.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _m{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ym{constructor(t){this.key=t,this.va=!1}}class Em{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Le(u=>hc(u),wr),this.Ma=new Map,this.xa=new Set,this.Oa=new X(O.comparator),this.Na=new Map,this.La=new ns,this.Ba={},this.ka=new Map,this.qa=Me.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Tm(n,t,e=!0){const r=eu(n);let i;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Yc(r,t,e,!0),i}async function vm(n,t){const e=eu(n);await Yc(e,t,!0,!1)}async function Yc(n,t,e,r){const i=await $f(n.localStore,kt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Im(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Uc(n.remoteStore,i),u}async function Im(n,t,e,r,i){n.Ka=(w,A,P)=>async function(M,V,K,G){let W=V.view.ma(K);W.ns&&(W=await fa(M.localStore,V.query,!1).then(({documents:T})=>V.view.ma(T,W)));const rt=G&&G.targetChanges.get(V.targetId),xt=G&&G.targetMismatches.get(V.targetId)!=null,ot=V.view.applyChanges(W,M.isPrimaryClient,rt,xt);return va(M,V.targetId,ot.wa),ot.snapshot}(n,w,A,P);const o=await fa(n.localStore,t,!0),a=new gm(t,o.Ts),u=a.ma(o.documents),h=Sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);va(n,e,d.wa);const p=new _m(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function wm(n,t,e){const r=F(n),i=r.Fa.get(t),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!wr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Oi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&os(r.remoteStore,i.targetId),Li(r,i.targetId)}).catch(wn)):(Li(r,i.targetId),await Oi(r.localStore,i.targetId,!0))}async function Am(n,t){const e=F(n),r=e.Fa.get(t),i=e.Ma.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),os(e.remoteStore,r.targetId))}async function Rm(n,t,e){const r=km(n);try{const i=await function(a,u){const h=F(a),d=nt.now(),p=u.reduce((P,D)=>P.add(D.key),U());let w,A;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=$t(),M=U();return h.cs.getEntries(P,p).next(V=>{D=V,D.forEach((K,G)=>{G.isValidDocument()||(M=M.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,D)).next(V=>{w=V;const K=[];for(const G of u){const W=Wd(G,w.get(G.key).overlayedDocument);W!=null&&K.push(new re(G.key,W,ic(W.value.mapValue),yt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,K,u)}).next(V=>{A=V;const K=V.applyToLocalDocumentSet(w,M);return h.documentOverlayCache.saveOverlays(P,V.batchId,K)})}).then(()=>({batchId:A.batchId,changes:mc(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new X(z)),d=d.insert(u,h),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,e),await bn(r,i.changes),await Dr(r.remoteStore)}catch(i){const o=hs(i,"Failed to persist write");e.reject(o)}}async function Xc(n,t){const e=F(n);try{const r=await Bf(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?q(a.va):i.removedDocuments.size>0&&(q(a.va),a.va=!1))}),await bn(e,r,t)}catch(r){await wn(r)}}function Ta(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=F(a);h.onlineState=u;let d=!1;h.queries.forEach((p,w)=>{for(const A of w.j_)A.Z_(u)&&(d=!0)}),d&&ds(h)}(r.eventManager,t),i.length&&r.Ca.d_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Pm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Na.get(t),o=i&&i.key;if(o){let a=new X(O.comparator);a=a.insert(o,st.newNoDocument(o,L.min()));const u=U().add(o),h=new Cr(L.min(),new Map,new X(z),a,u);await Xc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),fs(r)}else await Oi(r.localStore,t,!1).then(()=>Li(r,t,e)).catch(wn)}async function Sm(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Uf(e.localStore,t);Zc(e,r,null),Jc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await bn(e,i)}catch(i){await wn(i)}}async function Cm(n,t,e){const r=F(n);try{const i=await function(a,u){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(w=>(q(w!==null),p=w.keys(),h.mutationQueue.removeMutationBatch(d,w))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Zc(r,t,e),Jc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await bn(r,i)}catch(i){await wn(i)}}function Jc(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Zc(n,t,e){const r=F(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Li(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||tu(n,r)})}function tu(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(os(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),fs(n))}function va(n,t,e){for(const r of e)r instanceof Wc?(n.La.addReference(r.key,t),bm(n,r)):r instanceof Qc?(k("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||tu(n,r.key)):x()}function bm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(k("SyncEngine","New document in limbo: "+e),n.xa.add(r),fs(n))}function fs(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new O(Q.fromString(t)),r=n.qa.next();n.Na.set(r,new ym(e)),n.Oa=n.Oa.insert(e,r),Uc(n.remoteStore,new Wt(kt(Xi(e.path)),r,"TargetPurposeLimboResolution",Ki.oe))}}async function bn(n,t,e){const r=F(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const w=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(d){i.push(d);const w=is.Wi(h.targetId,d);o.push(w)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>C.forEach(d,A=>C.forEach(A.$i,P=>p.persistence.referenceDelegate.addReference(w,A.targetId,P)).next(()=>C.forEach(A.Ui,P=>p.persistence.referenceDelegate.removeReference(w,A.targetId,P)))))}catch(w){if(!An(w))throw w;k("LocalStore","Failed to update sequence numbers: "+w)}for(const w of d){const A=w.targetId;if(!w.fromCache){const P=p.os.get(A),D=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(D);p.os=p.os.insert(A,M)}}}(r.localStore,o))}async function Vm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const r=await xc(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new N(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bn(e,r.hs)}}function Dm(n,t){const e=F(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let i=U();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const u=e.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function eu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pm.bind(null,t),t.Ca.d_=mm.bind(null,t.eventManager),t.Ca.$a=pm.bind(null,t.eventManager),t}function km(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Sm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Cm.bind(null,t),t}class gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Ff(this.persistence,new xf,t.initialUser,this.serializer)}Ga(t){return new Nf(rs.Zr,this.serializer)}Wa(t){return new Kf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gr.provider={build:()=>new gr};class Fi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ta(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vm.bind(null,this.syncEngine),await hm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fm}()}createDatastore(t){const e=br(t.databaseInfo.databaseId),r=function(o){return new Qf(o)}(t.databaseInfo);return function(o,a,u,h){return new Jf(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,u){return new tm(r,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ta(this.syncEngine,e,0),function(){return pa.D()?new pa:new Gf}())}createSyncEngine(t,e){return function(i,o,a,u,h,d,p){const w=new Em(i,o,a,u,h,d);return p&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);k("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Cn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Fi.provider={build:()=>new Fi};/**
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
 */class nu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Nm{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(i,o){const a=F(i),u={documents:o.map(w=>mr(a.serializer,w))},h=await a.Lo("BatchGetDocuments",a.serializer.databaseId,Q.emptyPath(),u,o.length),d=new Map;h.forEach(w=>{const A=cf(a.serializer,w);d.set(A.key.toString(),A)});const p=[];return o.forEach(w=>{const A=d.get(w.toString());q(!!A),p.push(A)}),p}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Sr(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=O.fromPath(r);this.mutations.push(new wc(i,this.precondition(i)))}),await async function(r,i){const o=F(r),a={writes:i.map(u=>kc(o.serializer,u))};await o.Mo("Commit",o.serializer.databaseId,Q.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw x();e=L.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new N(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(L.min())?yt.exists(!1):yt.updateTime(e):yt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(L.min()))throw new N(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return yt.updateTime(e)}return yt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
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
 */class Mm{constructor(t,e,r,i,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=o,this._u=r.maxAttempts,this.t_=new ss(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const t=new Nm(this.datastore),e=this.cu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(t){try{const e=this.updateFunction(t);return!Rn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}lu(t){this._u>0&&this.hu(t)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(t)}hu(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Ac(e)}return!1}}/**
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
 */class Om{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=hs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function gi(n,t){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ia(n,t){n.asyncQueue.verifyOperationInProgress();const e=await xm(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ga(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>ga(t.remoteStore,i)),n._onlineComponents=t}async function xm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await gi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ve("Error using user provided cache. Falling back to memory cache: "+e),await gi(n,new gr)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await gi(n,new gr);return n._offlineComponents}async function ms(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await Ia(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await Ia(n,new Fi))),n._onlineComponents}function Lm(n){return ms(n).then(t=>t.syncEngine)}function Fm(n){return ms(n).then(t=>t.datastore)}async function ru(n){const t=await ms(n),e=t.eventManager;return e.onListen=Tm.bind(null,t.syncEngine),e.onUnlisten=wm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Am.bind(null,t.syncEngine),e}function Um(n,t,e={}){const r=new Dt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new nu({next:A=>{p.Za(),a.enqueueAndForget(()=>Gc(o,w));const P=A.docs.has(u);!P&&A.fromCache?d.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&h&&h.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),w=new Hc(Xi(u.path),p,{includeMetadataChanges:!0,_a:!0});return Kc(o,w)}(await ru(n),n.asyncQueue,t,e,r)),r.promise}function Bm(n,t,e={}){const r=new Dt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new nu({next:A=>{p.Za(),a.enqueueAndForget(()=>Gc(o,w)),A.fromCache&&h.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),w=new Hc(u,p,{includeMetadataChanges:!0,_a:!0});return Kc(o,w)}(await ru(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function iu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const wa=new Map;/**
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
 */function su(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function jm(n,t,e,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Aa(n){if(!O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ra(n){if(O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ps(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function Ot(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ps(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Pa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pa({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nd;switch(r.type){case"firstParty":return new od(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=wa.get(e);r&&(k("ComponentProvider","Removing Datastore"),wa.delete(e),r.terminate())}(this),Promise.resolve()}}function qm(n,t,e,r={}){var i;const o=(n=Ot(n,kr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=_t.MOCK_USER;else{u=Ml(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(d)}n._authCredentials=new rd(new tc(u,h))}}/**
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
 */class Nr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Nr(this.firestore,t,this._query)}}class It{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Xt extends Nr{constructor(t,e,r){super(t,e,Xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new O(t))}withConverter(t){return new Xt(this.firestore,t,this._path)}}function Dg(n,t,...e){if(n=bt(n),su("collection","path",t),n instanceof kr){const r=Q.fromString(t,...e);return Ra(r),new Xt(n,null,r)}{if(!(n instanceof It||n instanceof Xt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Ra(r),new Xt(n.firestore,null,r)}}function $m(n,t,...e){if(n=bt(n),arguments.length===1&&(t=ec.newId()),su("doc","path",t),n instanceof kr){const r=Q.fromString(t,...e);return Aa(r),new It(n,null,new O(r))}{if(!(n instanceof It||n instanceof Xt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Aa(r),new It(n.firestore,n instanceof Xt?n.converter:null,new O(r))}}/**
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
 */class Sa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ss(this,"async_queue_retry"),this.Vu=()=>{const r=pi();r&&k("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=pi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=pi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Dt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!An(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw qt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=ls.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Te extends kr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Sa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Sa(t),this._firestoreClient=void 0,await t}}}function zm(n,t){const e=Ka(),r="(default)",i=In(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=kl("firestore");o&&qm(i,...o)}return i}function Mr(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Km(n),n._firestoreClient}function Km(n){var t,e,r;const i=n._freezeSettings(),o=function(u,h,d,p){return new Ed(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,iu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Om(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pe(ht.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new pe(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Or{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class gs{constructor(t){this._methodName=t}}/**
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
 */class _s{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ys{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Gm=/^__.*__$/;class Hm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new re(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}class ou{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new re(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function au(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Es{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Es(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.Ou(t),i}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return _r(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(au(this.Cu)&&Gm.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Wm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||br(t)}Qu(t,e,r,i=!1){return new Es({Cu:t,methodName:e,qu:r,path:ut.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ts(n){const t=n._freezeSettings(),e=br(n._databaseId);return new Wm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function vs(n,t,e,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,i);Is("Data must be an object, but it was:",a,r);const u=cu(r,a);let h,d;if(o.merge)h=new Rt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const w of o.mergeFields){const A=Ui(t,w,e);if(!a.contains(A))throw new N(S.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);lu(p,A)||p.push(A)}h=new Rt(p),d=a.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,d=a.fieldTransforms;return new Hm(new vt(u),h,d)}class xr extends gs{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof xr}}function Qm(n,t,e,r){const i=n.Qu(1,t,e);Is("Data must be an object, but it was:",i,r);const o=[],a=vt.empty();ye(r,(h,d)=>{const p=ws(t,h,e);d=bt(d);const w=i.Nu(p);if(d instanceof xr)o.push(p);else{const A=Lr(d,w);A!=null&&(o.push(p),a.set(p,A))}});const u=new Rt(o);return new ou(a,u,i.fieldTransforms)}function Ym(n,t,e,r,i,o){const a=n.Qu(1,t,e),u=[Ui(t,r,e)],h=[i];if(o.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)u.push(Ui(t,o[A])),h.push(o[A+1]);const d=[],p=vt.empty();for(let A=u.length-1;A>=0;--A)if(!lu(d,u[A])){const P=u[A];let D=h[A];D=bt(D);const M=a.Nu(P);if(D instanceof xr)d.push(P);else{const V=Lr(D,M);V!=null&&(d.push(P),p.set(P,V))}}const w=new Rt(d);return new ou(p,w,a.fieldTransforms)}function Lr(n,t){if(uu(n=bt(n)))return Is("Unsupported field value:",t,n),cu(n,t);if(n instanceof gs)return function(r,i){if(!au(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=Lr(u,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:fr(i.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fr(i.serializer,o)}}if(r instanceof _s)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pe)return{bytesValue:Cc(i.serializer,r._byteString)};if(r instanceof It){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:es(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ys)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Bu("VectorValues must only contain numeric values.");return Ji(u.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ps(r)}`)}(n,t)}function cu(n,t){const e={};return nc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ye(n,(r,i)=>{const o=Lr(i,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function uu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof _s||n instanceof pe||n instanceof It||n instanceof gs||n instanceof ys)}function Is(n,t,e){if(!uu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ps(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Ui(n,t,e){if((t=bt(t))instanceof Or)return t._internalPath;if(typeof t=="string")return ws(n,t);throw _r("Field path arguments must be of type string or ",n,!1,void 0,e)}const Xm=new RegExp("[~\\*/\\[\\]]");function ws(n,t,e){if(t.search(Xm)>=0)throw _r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Or(...t.split("."))._internalPath}catch{throw _r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function _r(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new N(S.INVALID_ARGUMENT,u+n+h)}function lu(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class yr{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(hu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Jm extends yr{data(){return super.data()}}function hu(n,t){return typeof t=="string"?ws(n,t):t instanceof Or?t._internalPath:t._delegate._internalPath}/**
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
 */function Zm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class du{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ye(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Z(a.doubleValue));return new ys(o)}convertGeoPoint(t){return new _s(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Hi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=te(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Q.fromString(t);q(Oc(r));const i=new yn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function As(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class tp extends du{constructor(t){super(),this.firestore=t}convertBytes(t){return new pe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}/**
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
 */class Ce{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Rs extends yr{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(hu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ir extends Rs{data(t={}){return super.data(t)}}class ep{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Ce(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ir(this._firestore,this._userDataWriter,r.key,r,new Ce(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new ir(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ce(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ir(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ce(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:np(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function np(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
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
 */function kg(n){n=Ot(n,It);const t=Ot(n.firestore,Te);return Um(Mr(t),n._key).then(e=>rp(t,n,e))}class Ps extends du{constructor(t){super(),this.firestore=t}convertBytes(t){return new pe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Ng(n){n=Ot(n,Nr);const t=Ot(n.firestore,Te),e=Mr(t),r=new Ps(t);return Zm(n._query),Bm(e,n._query).then(i=>new ep(t,r,n,i))}function Mg(n,t,e){n=Ot(n,It);const r=Ot(n.firestore,Te),i=As(n.converter,t,e);return Ss(r,[vs(Ts(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,yt.none())])}function Og(n){return Ss(Ot(n.firestore,Te),[new Sr(n._key,yt.none())])}function xg(n,t){const e=Ot(n.firestore,Te),r=$m(n),i=As(n.converter,t);return Ss(e,[vs(Ts(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,yt.exists(!1))]).then(()=>r)}function Ss(n,t){return function(r,i){const o=new Dt;return r.asyncQueue.enqueueAndForget(async()=>Rm(await Lm(r),i,o)),o.promise}(Mr(n),t)}function rp(n,t,e){const r=e.docs.get(t._key),i=new Ps(n);return new Rs(n,i,t._key,r,new Ce(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const ip={maxAttempts:5};function rn(n,t){if((n=bt(n)).firestore!==t)throw new N(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class sp extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Ts(e)}get(e){const r=rn(e,this._firestore),i=new tp(this._firestore);return this._transaction.lookup([r._key]).then(o=>{if(!o||o.length!==1)return x();const a=o[0];if(a.isFoundDocument())return new yr(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new yr(this._firestore,i,r._key,null,r.converter);throw x()})}set(e,r,i){const o=rn(e,this._firestore),a=As(o.converter,r,i),u=vs(this._dataReader,"Transaction.set",o._key,a,o.converter!==null,i);return this._transaction.set(o._key,u),this}update(e,r,i,...o){const a=rn(e,this._firestore);let u;return u=typeof(r=bt(r))=="string"||r instanceof Or?Ym(this._dataReader,"Transaction.update",a._key,r,i,o):Qm(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,u),this}delete(e){const r=rn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=rn(t,this._firestore),r=new Ps(this._firestore);return super.get(t).then(i=>new Rs(this._firestore,r,e._key,i._document,new Ce(!1,!1),e.converter))}}function Fg(n,t,e){n=Ot(n,Te);const r=Object.assign(Object.assign({},ip),e);return function(o){if(o.maxAttempts<1)throw new N(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,a,u){const h=new Dt;return o.asyncQueue.enqueueAndForget(async()=>{const d=await Fm(o);new Mm(o.asyncQueue,d,u,a,h).au()}),h.promise}(Mr(n),i=>t(new sp(n,i)),r)}(function(t,e=!0){(function(i){xe=i})(zh),Jt(new Bt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Te(new id(r.getProvider("auth-internal")),new cd(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Vt(Go,"4.7.3",t),Vt(Go,"4.7.3","esm2017")})();const fu="@firebase/installations",Cs="0.6.9";/**
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
 */const mu=1e4,pu=`w:${Cs}`,gu="FIS_v2",op="https://firebaseinstallations.googleapis.com/v1",ap=60*60*1e3,cp="installations",up="Installations";/**
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
 */const lp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ge=new vr(cp,up,lp);function _u(n){return n instanceof ne&&n.code.includes("request-failed")}/**
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
 */function yu({projectId:n}){return`${op}/projects/${n}/installations`}function Eu(n){return{token:n.token,requestStatus:2,expiresIn:dp(n.expiresIn),creationTime:Date.now()}}async function Tu(n,t){const r=(await t.json()).error;return ge.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function hp(n,{refreshToken:t}){const e=vu(n);return e.append("Authorization",fp(t)),e}async function Iu(n){const t=await n();return t.status>=500&&t.status<600?n():t}function dp(n){return Number(n.replace("s","000"))}function fp(n){return`${gu} ${n}`}/**
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
 */async function mp({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=yu(n),i=vu(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:e,authVersion:gu,appId:n.appId,sdkVersion:pu},u={method:"POST",headers:i,body:JSON.stringify(a)},h=await Iu(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Eu(d.authToken)}}else throw await Tu("Create Installation",h)}/**
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
 */function wu(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function pp(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gp=/^[cdef][\w-]{21}$/,Bi="";function _p(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=yp(n);return gp.test(e)?e:Bi}catch{return Bi}}function yp(n){return pp(n).substr(0,22)}/**
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
 */function Fr(n){return`${n.appName}!${n.appId}`}/**
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
 */const Au=new Map;function Ru(n,t){const e=Fr(n);Pu(e,t),Ep(e,t)}function Pu(n,t){const e=Au.get(n);if(e)for(const r of e)r(t)}function Ep(n,t){const e=Tp();e&&e.postMessage({key:n,fid:t}),vp()}let le=null;function Tp(){return!le&&"BroadcastChannel"in self&&(le=new BroadcastChannel("[Firebase] FID Change"),le.onmessage=n=>{Pu(n.data.key,n.data.fid)}),le}function vp(){Au.size===0&&le&&(le.close(),le=null)}/**
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
 */const Ip="firebase-installations-database",wp=1,_e="firebase-installations-store";let _i=null;function bs(){return _i||(_i=$a(Ip,wp,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(_e)}}})),_i}async function Er(n,t){const e=Fr(n),i=(await bs()).transaction(_e,"readwrite"),o=i.objectStore(_e),a=await o.get(e);return await o.put(t,e),await i.done,(!a||a.fid!==t.fid)&&Ru(n,t.fid),t}async function Su(n){const t=Fr(n),r=(await bs()).transaction(_e,"readwrite");await r.objectStore(_e).delete(t),await r.done}async function Ur(n,t){const e=Fr(n),i=(await bs()).transaction(_e,"readwrite"),o=i.objectStore(_e),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await i.done,u&&(!a||a.fid!==u.fid)&&Ru(n,u.fid),u}/**
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
 */async function Vs(n){let t;const e=await Ur(n.appConfig,r=>{const i=Ap(r),o=Rp(n,i);return t=o.registrationPromise,o.installationEntry});return e.fid===Bi?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Ap(n){const t=n||{fid:_p(),registrationStatus:0};return Cu(t)}function Rp(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ge.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Pp(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Sp(n)}:{installationEntry:t}}async function Pp(n,t){try{const e=await mp(n,t);return Er(n.appConfig,e)}catch(e){throw _u(e)&&e.customData.serverCode===409?await Su(n.appConfig):await Er(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Sp(n){let t=await Ca(n.appConfig);for(;t.registrationStatus===1;)await wu(100),t=await Ca(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Vs(n);return r||e}return t}function Ca(n){return Ur(n,t=>{if(!t)throw ge.create("installation-not-found");return Cu(t)})}function Cu(n){return Cp(n)?{fid:n.fid,registrationStatus:0}:n}function Cp(n){return n.registrationStatus===1&&n.registrationTime+mu<Date.now()}/**
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
 */async function bp({appConfig:n,heartbeatServiceProvider:t},e){const r=Vp(n,e),i=hp(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:pu,appId:n.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},h=await Iu(()=>fetch(r,u));if(h.ok){const d=await h.json();return Eu(d)}else throw await Tu("Generate Auth Token",h)}function Vp(n,{fid:t}){return`${yu(n)}/${t}/authTokens:generate`}/**
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
 */async function Ds(n,t=!1){let e;const r=await Ur(n.appConfig,o=>{if(!bu(o))throw ge.create("not-registered");const a=o.authToken;if(!t&&Np(a))return o;if(a.requestStatus===1)return e=Dp(n,t),o;{if(!navigator.onLine)throw ge.create("app-offline");const u=Op(o);return e=kp(n,u),u}});return e?await e:r.authToken}async function Dp(n,t){let e=await ba(n.appConfig);for(;e.authToken.requestStatus===1;)await wu(100),e=await ba(n.appConfig);const r=e.authToken;return r.requestStatus===0?Ds(n,t):r}function ba(n){return Ur(n,t=>{if(!bu(t))throw ge.create("not-registered");const e=t.authToken;return xp(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function kp(n,t){try{const e=await bp(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Er(n.appConfig,r),e}catch(e){if(_u(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Su(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Er(n.appConfig,r)}throw e}}function bu(n){return n!==void 0&&n.registrationStatus===2}function Np(n){return n.requestStatus===2&&!Mp(n)}function Mp(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+ap}function Op(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function xp(n){return n.requestStatus===1&&n.requestTime+mu<Date.now()}/**
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
 */async function Lp(n){const t=n,{installationEntry:e,registrationPromise:r}=await Vs(t);return r?r.catch(console.error):Ds(t).catch(console.error),e.fid}/**
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
 */async function Fp(n,t=!1){const e=n;return await Up(e),(await Ds(e,t)).token}async function Up(n){const{registrationPromise:t}=await Vs(n);t&&await t}/**
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
 */function Bp(n){if(!n||!n.options)throw yi("App Configuration");if(!n.name)throw yi("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw yi(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function yi(n){return ge.create("missing-app-config-values",{valueName:n})}/**
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
 */const Vu="installations",jp="installations-internal",qp=n=>{const t=n.getProvider("app").getImmediate(),e=Bp(t),r=In(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$p=n=>{const t=n.getProvider("app").getImmediate(),e=In(t,Vu).getImmediate();return{getId:()=>Lp(e),getToken:i=>Fp(e,i)}};function zp(){Jt(new Bt(Vu,qp,"PUBLIC")),Jt(new Bt(jp,$p,"PRIVATE"))}zp();Vt(fu,Cs);Vt(fu,Cs,"esm2017");/**
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
 */const Tr="analytics",Kp="firebase_id",Gp="origin",Hp=60*1e3,Wp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ks="https://www.googletagmanager.com/gtag/js";/**
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
 */const wt=new qi("@firebase/analytics");/**
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
 */const Qp={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},St=new vr("analytics","Analytics",Qp);/**
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
 */function Yp(n){if(!n.startsWith(ks)){const t=St.create("invalid-gtag-resource",{gtagURL:n});return wt.warn(t.message),""}return n}function Du(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Xp(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Jp(n,t){const e=Xp("firebase-js-sdk-policy",{createScriptURL:Yp}),r=document.createElement("script"),i=`${ks}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Zp(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function tg(n,t,e,r,i,o){const a=r[i];try{if(a)await t[a];else{const h=(await Du(e)).find(d=>d.measurementId===i);h&&await t[h.appId]}}catch(u){wt.error(u)}n("config",i,o)}async function eg(n,t,e,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await Du(e);for(const h of a){const d=u.find(w=>w.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,i||{})}catch(o){wt.error(o)}}function ng(n,t,e,r){async function i(o,...a){try{if(o==="event"){const[u,h]=a;await eg(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await tg(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){wt.error(u)}}return i}function rg(n,t,e,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=ng(o,n,t,e),{gtagCore:o,wrappedGtag:window[i]}}function ig(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(ks)&&e.src.includes(n))return e;return null}/**
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
 */const sg=30,og=1e3;class ag{constructor(t={},e=og){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ku=new ag;function cg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ug(n){var t;const{appId:e,apiKey:r}=n,i={method:"GET",headers:cg(r)},o=Wp.replace("{app-id}",e),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function lg(n,t=ku,e){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw St.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw St.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new fg;return setTimeout(async()=>{u.abort()},Hp),Nu({appId:r,apiKey:i,measurementId:o},a,u,t)}async function Nu(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=ku){var o;const{appId:a,measurementId:u}=n;try{await hg(r,t)}catch(h){if(u)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await ug(n);return i.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!dg(d)){if(i.deleteThrottleMetadata(a),u)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?xo(e,i.intervalMillis,sg):xo(e,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return i.setThrottleMetadata(a,w),wt.debug(`Calling attemptFetch again in ${p} millis`),Nu(n,w,r,i)}}function hg(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(o),r(St.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function dg(n){if(!(n instanceof ne)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class fg{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function mg(n,t,e,r,i){if(i&&i.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
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
 */async function pg(){if(Ua())try{await Ba()}catch(n){return wt.warn(St.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return wt.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gg(n,t,e,r,i,o,a){var u;const h=lg(n);h.then(P=>{e[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>wt.error(P)),t.push(h);const d=pg().then(P=>{if(P)return r.getId()}),[p,w]=await Promise.all([h,d]);ig(o)||Jp(o,p.measurementId),i("js",new Date);const A=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return A[Gp]="firebase",A.update=!0,w!=null&&(A[Kp]=w),i("config",p.measurementId,A),p.measurementId}/**
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
 */class _g{constructor(t){this.app=t}_delete(){return delete fn[this.app.options.appId],Promise.resolve()}}let fn={},Va=[];const Da={};let Ei="dataLayer",yg="gtag",ka,Mu,Na=!1;function Eg(){const n=[];if(Ll()&&n.push("This is a browser extension environment."),Ul()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=St.create("invalid-analytics-context",{errorInfo:t});wt.warn(e.message)}}function Tg(n,t,e){Eg();const r=n.options.appId;if(!r)throw St.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if(fn[r]!=null)throw St.create("already-exists",{id:r});if(!Na){Zp(Ei);const{wrappedGtag:o,gtagCore:a}=rg(fn,Va,Da,Ei,yg);Mu=o,ka=a,Na=!0}return fn[r]=gg(n,Va,Da,t,ka,Ei,e),new _g(n)}function vg(n=Ka()){n=bt(n);const t=In(n,Tr);return t.isInitialized()?t.getImmediate():Ig(n)}function Ig(n,t={}){const e=In(n,Tr);if(e.isInitialized()){const i=e.getImmediate();if(or(t,e.getOptions()))return i;throw St.create("already-initialized")}return e.initialize({options:t})}function wg(n,t,e,r){n=bt(n),mg(Mu,fn[n.app.options.appId],t,e,r).catch(i=>wt.error(i))}const Ma="@firebase/analytics",Oa="0.10.8";function Ag(){Jt(new Bt(Tr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Tg(r,i,e)},"PUBLIC")),Jt(new Bt("analytics-internal",n,"PRIVATE")),Vt(Ma,Oa),Vt(Ma,Oa,"esm2017");function n(t){try{const e=t.getProvider(Tr).getImmediate();return{logEvent:(r,i,o)=>wg(e,r,i,o)}}catch(e){throw St.create("interop-component-reg-failed",{reason:e})}}}Ag();const Rg={appId:gl,apiKey:_l,authDomain:yl,projectId:El,storageBucket:Tl,messagingSenderId:vl,measurementId:Il};let Zn,Ti,mn;function Ug(){return mn||Pg(),mn}function Pg(){return(!Zn||!Ti||!mn)&&(Zn=za(Rg),Ti=vg(Zn),mn=zm()),{app:Zn,analytics:Ti,db:mn}}export{nt as T,kg as a,Ng as b,Dg as c,$m as d,xg as e,Og as f,Ug as g,Pg as i,Fg as r,Mg as s};
