import{J as z,K as Z,S as c,M as G,N as V,x as H,F as E,y as B,G as p,O as x,i as _,v as J,g as S,C as Q,b as W,P as L,c as M,d as U,E as X,Q as k,R as ee,T as ne,B as K,U as te,V as w,I as se,W as re,f as v,X as I,e as ie,Y as fe}from"./runtime.C0n2djTQ.js";import{U as b,h as g,b as ae,v as ue,w as le,i as oe,s as Y,d as ce,x as j,y as de,z as _e,B as pe}from"./template.BXHdiYLZ.js";function R(e,n=null,t){if(typeof e=="object"&&e!=null&&!z(e)&&!(Z in e)){if(c in e){const r=e[c];if(r.t===e||r.p===e)return r.p}const s=Q(e);if(s===G||s===V){const r=new Proxy(e,ve);return H(e,c,{value:{s:new Map,v:E(0),a:B(e),p:r,t:e},writable:!0,enumerable:!1}),r}}return e}function q(e,n=1){p(e,e.v+n)}const ve={defineProperty(e,n,t){if(t.value){const s=e[c],r=s.s.get(n);r!==void 0&&p(r,R(t.value,s))}return Reflect.defineProperty(e,n,t)},deleteProperty(e,n){const t=e[c],s=t.s.get(n),r=t.a,i=delete e[n];if(r&&i){const f=t.s.get("length"),a=e.length-1;f!==void 0&&f.v!==a&&p(f,a)}return s!==void 0&&p(s,b),i&&q(t.v),i},get(e,n,t){var i;if(n===c)return Reflect.get(e,c);const s=e[c];let r=s.s.get(n);if(r===void 0&&(!(n in e)||(i=x(e,n))!=null&&i.writable)&&(r=E(R(e[n],s)),s.s.set(n,r)),r!==void 0){const f=_(r);return f===b?void 0:f}return Reflect.get(e,n,t)},getOwnPropertyDescriptor(e,n){const t=Reflect.getOwnPropertyDescriptor(e,n);if(t&&"value"in t){const r=e[c].s.get(n);r&&(t.value=_(r))}return t},has(e,n){var i;if(n===c)return!0;const t=e[c],s=Reflect.has(e,n);let r=t.s.get(n);return(r!==void 0||J!==null&&(!s||(i=x(e,n))!=null&&i.writable))&&(r===void 0&&(r=E(s?R(e[n],t):b),t.s.set(n,r)),_(r)===b)?!1:s},set(e,n,t,s){const r=e[c];let i=r.s.get(n);i===void 0&&(S(()=>s[n]),i=r.s.get(n)),i!==void 0&&p(i,R(t,r));const f=r.a,a=!(n in e);if(f&&n==="length")for(let l=t;l<e.length;l+=1){const d=r.s.get(l+"");d!==void 0&&p(d,b)}var u=Reflect.getOwnPropertyDescriptor(e,n);if(u!=null&&u.set?u.set.call(s,t):e[n]=t,a){if(f){const l=r.s.get("length"),d=e.length;l!==void 0&&l.v!==d&&p(l,d)}q(r.v)}return!0},ownKeys(e){const n=e[c];return _(n.v),Reflect.ownKeys(e)}};function Ee(e,n,t,s=null,r=!1){g&&ae();var i=e,f=null,a=null,u=null,l=r?X:0;W(()=>{if(u===(u=!!n()))return;let d=!1;if(g){const P=i.data===ue;u===P&&(i=le(),oe(i),Y(!1),d=!0)}u?(f?L(f):f=M(()=>t(i)),a&&U(a,()=>{a=null})):(a?L(a):s&&(a=M(()=>s(i))),f&&U(f,()=>{f=null})),d&&Y(!0)},l),g&&(i=ce)}const he={get(e,n){if(!e.exclude.includes(n))return _(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,t){return n in e.special||(e.special[n]=me({get[n](){return e.props[n]}},n,j)),e.special[n](t),re(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function xe(e,n){return new Proxy({props:e,exclude:n,special:{},version:E(0)},he)}const ye={get(e,n){let t=e.props.length;for(;t--;){let s=e.props[t];if(w(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s)return s[n]}},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let s=e.props[t];if(w(s)&&(s=s()),typeof s=="object"&&s!==null&&n in s){const r=x(s,n);return r&&!r.configurable&&(r.configurable=!0),r}}},has(e,n){for(let t of e.props)if(w(t)&&(t=t()),t!=null&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props){w(t)&&(t=t());for(const s in t)n.includes(s)||n.push(s)}return n}};function Se(...e){return new Proxy({props:e},ye)}function me(e,n,t,s){var A;var r=(t&de)!==0,i=(t&_e)!==0,f=(t&pe)!==0,a=e[n],u=(A=x(e,n))==null?void 0:A.set,l=s,d=!0,P=()=>(f&&d&&(d=!1,l=S(s)),l);a===void 0&&s!==void 0&&(u&&i&&k(),a=P(),u&&u(a));var h;if(i)h=()=>{var o=e[n];return o===void 0?P():(d=!0,o)};else{var D=(r?K:te)(()=>e[n]);D.f|=ee,h=()=>{var o=_(D);return o!==void 0&&(l=void 0),o===void 0?l:o}}if(!(t&j))return h;if(u){var F=e.$$legacy;return function(o,y){return arguments.length>0?((!i||!y||F)&&u(y?h():o),o):h()}}var O=!1,T=se(a),m=K(()=>{var o=h(),y=_(T);return O?(O=!1,y):T.v=o});return r||(m.equals=ne),function(o,y){var $=_(m);if(arguments.length>0){const N=y?_(m):o;return m.equals(N)||(O=!0,p(T,N),_(m)),o}return $}}function be(e){v===null&&I(),v.l!==null?C(v).m.push(e):ie(()=>{const n=S(e);if(typeof n=="function")return n})}function Ie(e){v===null&&I(),be(()=>()=>S(e))}function Pe(e,n,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:t,cancelable:s})}function Oe(){const e=v;return e===null&&I(),(n,t,s)=>{var i;const r=(i=e.s.$$events)==null?void 0:i[n];if(r){const f=B(r)?r.slice():[r],a=Pe(n,t,s);for(const u of f)u.call(e.x,a);return!a.defaultPrevented}return!0}}function Te(e){v===null&&I(),v.l===null&&fe(),C(v).a.push(e)}function C(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{R as a,Ie as b,Oe as c,Te as d,Ee as i,xe as l,be as o,me as p,Se as s};
