import{B as b,C as p,D as A,H,E as I,F as m,G as c,I as T,b as M,k as f,J as Y,K as k,L as C,M as S,N as V,O as $,i as B,p as F,h as v,P as G,a as J,o as K}from"./runtime.BHjHiDob.js";import{a as P,r as D,h,i as W}from"./utils.B_hTaLZS.js";import{r as j}from"./svelte-head.CJtmmBda.js";import{b as q}from"./template.B0Ysn9ZH.js";let L=!0;function x(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function z(t,e){const n=e.anchor??e.target.appendChild(b());return N(t,{...e,anchor:n})}function ee(t,e){p(),e.intro=e.intro??!1;const n=e.target,_=v,u=f;try{for(var r=A(n);r&&(r.nodeType!==8||r.data!==H);)r=I(r);if(!r)throw m;c(!0),T(r),M();const d=N(t,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==Y)throw k(),m;return c(!1),d}catch(d){if(d===m)return e.recover===!1&&C(),p(),S(n),c(!1),z(t,e);throw d}finally{c(_),T(u),j()}}const o=new Map;function N(t,{target:e,anchor:n,props:_={},events:u,context:r,intro:d=!0}){p();var g=new Set,y=a=>{for(var i=0;i<a.length;i++){var s=a[i];if(!g.has(s)){g.add(s);var E=W(s);e.addEventListener(s,h,{passive:E});var R=o.get(s);R===void 0?(document.addEventListener(s,h,{passive:E}),o.set(s,1)):o.set(s,R+1)}}};y(V(P)),D.add(y);var l=void 0,O=$(()=>(B(()=>{if(r){F({});var a=K;a.c=r}u&&(_.$$events=u),v&&q(n,null),L=d,l=t(n,_)||{},L=!0,v&&(G.nodes_end=f),r&&J()}),()=>{for(var a of g){e.removeEventListener(a,h);var i=o.get(a);--i===0?(document.removeEventListener(a,h),o.delete(a)):o.set(a,i)}D.delete(y),w.delete(l)}));return w.set(l,O),l}let w=new WeakMap;function te(t){const e=w.get(t);e&&e()}export{L as a,ee as h,z as m,x as s,te as u};
