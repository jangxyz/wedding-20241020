import{y,q as b,z as v,A as k}from"./runtime.DACh3OvZ.js";const q=new Set,E=new Set;function L(r,a,i,n){function e(t){if(n.capture||B.call(a,t),!t.cancelBubble)return i.call(this,t)}return r.startsWith("pointer")||r==="wheel"?b(()=>{a.addEventListener(r,e,n)}):a.addEventListener(r,e,n),e}function S(r,a,i,n,e){var t={capture:n,passive:e},o=L(r,a,i,t);(a===document.body||a===window||a===document)&&y(()=>{a.removeEventListener(r,o,t)})}function x(r){for(var a=0;a<r.length;a++)q.add(r[a]);for(var i of E)i(r)}function B(r){var p;var a=this,i=a.ownerDocument,n=r.type,e=((p=r.composedPath)==null?void 0:p.call(r))||[],t=e[0]||r.target,o=0,d=r.__root;if(d){var c=e.indexOf(d);if(c!==-1&&(a===document||a===window)){r.__root=a;return}var h=e.indexOf(a);if(h===-1)return;c<=h&&(o=c)}if(t=e[o]||r.target,t!==a){v(r,"currentTarget",{configurable:!0,get(){return t||i}});try{for(var l,_=[];t!==null;){var s=t.parentNode||t.host||null;try{var u=t["__"+n];if(u!==void 0&&!t.disabled)if(k(u)){var[w,...g]=u;w.apply(t,[r,...g])}else u.call(t,r)}catch(f){l?_.push(f):l=f}if(r.cancelBubble||s===a||s===null)break;t=s}if(l){for(let f of _)queueMicrotask(()=>{throw f});throw l}}finally{r.__root=a,t=a}}}export{q as a,L as c,x as d,S as e,B as h,E as r};
