import{v,q as C}from"./runtime.Dj8kY1lO.js";function S(e){console.warn("hydration_mismatch")}const L=1,H=2,M=4,U=8,k=16,Y=64,$=1,W=2,q=4,B=8,F=1,V=2,G=4,h=1,N=2,R="[",y="[!",g="]",O={},K=Symbol(),Q=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Z=["touchstart","touchmove","touchend"],j={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function z(e,t="exclude-on"){return e.endsWith("capture")?t=="exclude-on"?e!=="gotpointercapture"&&e!=="lostpointercapture":e!=="ongotpointercapture"&&e!=="onlostpointercapture":!1}let i=!1;function J(e){i=e}let o;function d(e){return o=e}function T(){if(o===null)throw S(),O;return o=o.nextSibling}function X(e){i&&(o=e)}function ee(){i&&T()}function te(){for(var e=0,t=o;;){if(t.nodeType===8){var n=t.data;if(n===g){if(e===0)return t;e-=1}else(n===R||n===y)&&(e+=1)}var a=t.nextSibling;t.remove(),t=a}}var m,w;function ne(){if(m===void 0){m=window,w=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function l(){return document.createTextNode("")}function re(e){if(!i)return e.firstChild;var t=o.firstChild;return t===null&&(t=o.appendChild(l())),d(t),t}function oe(e,t){if(!i){var n=e.firstChild;return n instanceof Comment&&n.data===""?n.nextSibling:n}return o}function ae(e,t=!1){if(!i)return e.nextSibling;var n=o.nextSibling,a=n.nodeType;if(t&&a!==3){var r=l();return n==null||n.before(r),d(r),r}return d(n),n}function ie(e){e.textContent=""}function E(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var n;(n=v).nodes??(n.nodes={start:e,end:t})}function D(e,t){var n=(t&h)!==0,a=(t&N)!==0,r,_=!e.startsWith("<!>");return()=>{if(i)return u(o,null),o;r||(r=E(_?e:"<!>"+e),n||(r=r.firstChild));var s=a?document.importNode(r,!0):r.cloneNode(!0);if(n){var p=s.firstChild,c=s.lastChild;u(p,c)}else u(s,s);return s}}function se(e,t){var n=!0,a=D(e,t);return()=>{if(i)return a();var r=a();return n&&(n=!1,x(r)),r}}function ue(e,t,n="svg"){var a=!e.startsWith("<!>"),r=(t&h)!==0,_=`<${n}>${a?e:"<!>"+e}</${n}>`,s;return()=>{if(i)return u(o,null),o;if(!s){var p=E(_),c=p.firstChild;if(r)for(s=document.createDocumentFragment();c.firstChild;)s.appendChild(c.firstChild);else s=c.firstChild}var f=s.cloneNode(!0);if(r){var I=f.firstChild,A=f.lastChild;u(I,A)}else u(f,f);return f}}function x(e){if(i)return;const t=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script");for(const r of t){var n=document.createElement("script");for(var a of r.attributes)n.setAttribute(a.name,a.value);n.textContent=r.textContent,r===e?C(()=>r.replaceWith(n)):r.replaceWith(n)}}function ce(){if(!i){var e=l();return u(e,e),e}var t=o;return t.nodeType!==3&&(t.before(t=l()),d(t)),u(t,t),t}function fe(){if(i)return u(o,null),o;var e=document.createDocumentFragment(),t=document.createComment(""),n=l();return e.append(t,n),u(t,n),e}function le(e,t){if(i){v.nodes.end=o,T();return}e!==null&&e.before(t)}const P="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(P);export{w as $,j as A,W as B,B as C,Q as D,ce as E,ue as F,m as G,R as H,U as I,L as J,H as K,Y as L,k as M,M as N,E as O,Z as P,V as Q,G as R,F as T,K as U,le as a,re as b,fe as c,T as d,o as e,oe as f,l as g,i as h,O as i,J as j,d as k,g as l,S as m,ee as n,ne as o,ie as p,u as q,X as r,ae as s,D as t,z as u,se as v,y as w,te as x,q as y,$ as z};
