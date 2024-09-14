var xn=Array.isArray,On=Array.from,Nn=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Rn=Object.prototype,Sn=Array.prototype,$t=Object.getPrototypeOf;function kn(t){return typeof t=="function"}const Dn=()=>{};function Cn(t){return t()}function _t(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,ct=4,q=8,pt=16,T=32,nt=64,O=128,U=256,d=512,A=1024,N=2048,C=4096,b=8192,Zt=16384,vt=32768,qn=65536,zt=1<<18,at=Symbol("$state"),bn=Symbol("");function ht(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Jt(t,this.v)}function Wt(t){throw new Error("effect_in_teardown")}function Xt(){throw new Error("effect_in_unowned_derived")}function Qt(t){throw new Error("effect_orphan")}function tn(){throw new Error("effect_update_depth_exceeded")}function Ln(){throw new Error("hydration_failed")}function Pn(t){throw new Error("lifecycle_legacy_only")}function Mn(t){throw new Error("props_invalid_value")}function Fn(){throw new Error("state_descriptors_fixed")}function Hn(){throw new Error("state_prototype_fixed")}function nn(){throw new Error("state_unsafe_local_read")}function rn(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Yn(t){return Et(rt(t))}function en(t){var r;const n=rt(t);return n.equals=dt,o!==null&&o.l!==null&&((r=o.l).s??(r.s=[])).push(n),n}function jn(t){return Et(en(t))}function Et(t){return l!==null&&l.f&w&&(y===null?En([t]):y.push(t)),t}function yt(t,n){return l!==null&&Q()&&l.f&w&&(y===null||!y.includes(t))&&rn(),t.equals(n)||(t.v=n,t.version=Mt(),wt(t,A),Q()&&f!==null&&f.f&d&&!(f.f&T)&&(p!==null&&p.includes(t)?(h(f,A),Z(f)):m===null?yn([t]):m.push(t))),n}function wt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),s=r.length,a=0;a<s;a++){var u=r[a],_=u.f;_&A||!e&&u===f||(h(u,n),_&(d|O)&&(_&w?wt(u,N):Z(u)))}}const Bn=1,Un=2,Vn=4,Gn=8,Kn=16,$n=1,Zn=2,zn=4,Jn=8,Wn=16,Xn=1,Qn=2,tr=4,nr=1,rr=2,sn="[",an="[!",un="]",Tt={},er=Symbol();function mt(t){console.warn("hydration_mismatch")}let x=!1;function sr(t){x=t}let E;function V(t){if(t===null)throw mt(),Tt;return E=t}function ar(){return V(R(E))}function ur(t){if(x){if(R(E)!==null)throw mt(),Tt;E=t}}function or(t=1){if(x){for(var n=t,r=E;n--;)r=R(r);E=r}}function lr(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===sn||r===an)&&(t+=1)}var e=R(n);n.remove(),n=e}}var ut,on,At,It;function ir(){if(ut===void 0){ut=window,on=document;var t=Element.prototype,n=Node.prototype;At=st(n,"firstChild").get,It=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function gt(t=""){return document.createTextNode(t)}function J(t){return At.call(t)}function R(t){return It.call(t)}function fr(t){if(!x)return J(t);var n=J(E);return n===null&&(n=E.appendChild(gt())),V(n),n}function _r(t,n){if(!x){var r=J(t);return r instanceof Comment&&r.data===""?R(r):r}return E}function cr(t,n=1,r=!1){let e=x?E:t;for(;n--;)e=R(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var a=gt();return e==null||e.before(a),V(a),a}return V(e),e}function pr(t){t.textContent=""}function xt(t){f===null&&l===null&&Qt(),l!==null&&l.f&O&&Xt(),et&&Wt()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var s=(t&nt)!==0,a=f,u={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var _=k;try{ot(!0),j(u),u.f|=Zt}catch(I){throw Y(u),I}finally{ot(_)}}else n!==null&&Z(u);var i=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null;if(!i&&!s&&e&&(a!==null&&ln(u,a),l!==null&&l.f&w)){var c=l;(c.children??(c.children=[])).push(u)}return u}function vr(t){const n=L(q,null,!1);return h(n,d),n.teardown=t,n}function hr(t){xt();var n=f!==null&&(f.f&q)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push(t)}else{var e=Ot(t);return e}}function dr(t){return xt(),$(t)}function Er(t){const n=L(nt,t,!0);return()=>{Y(n)}}function Ot(t){return L(ct,t,!1)}function yr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=$(()=>{t(),!e.ran&&(e.ran=!0,yt(r.l.r2,!0),An(n))})}function wr(){var t=o;$(()=>{if(Vt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&h(r,N),P(r)&&j(r),n.ran=!1}t.l.r2.v=!1}})}function $(t){return L(q,t,!0)}function Tr(t){return $(t)}function mr(t,n=0){return L(q|pt|n,t,!0)}function Ar(t,n=!0){return L(q|T,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=et,e=l;lt(!0),it(null);try{n.call(null)}finally{lt(r),it(e)}}}function Y(t,n=!0){var r=!1;if((n||t.f&zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Ht(t,n&&!r),H(t,0),h(t,b);var u=t.transitions;if(u!==null)for(const i of u)i.stop();Nt(t);var _=t.parent;_!==null&&_.first!==null&&Rt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Rt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Ir(t,n){var r=[];St(t,r,!0),fn(r,()=>{Y(t),n&&n()})}function fn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function St(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&T)!==0;St(e,n,a?r:!1),e=s}}}function gr(t){kt(t,!0)}function kt(t,n){if(t.f&C){t.f^=C,P(t)&&j(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&T)!==0;kt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const _n=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let G=!1,K=!1,W=[],X=[];function Dt(){G=!1;const t=W.slice();W=[],_t(t)}function Ct(){K=!1;const t=X.slice();X=[],_t(t)}function xr(t){G||(G=!0,queueMicrotask(Dt)),W.push(t)}function Or(t){K||(K=!0,_n(Ct)),X.push(t)}function cn(){G&&Dt(),K&&Ct()}function pn(t){let n=w|A;f===null&&(n|=O);const r={children:null,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0};if(l!==null&&l.f&w){var e=l;(e.children??(e.children=[])).push(r)}return r}function Nr(t){const n=pn(t);return n.equals=dt,n}function qt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?vn(e):Y(e)}}}function bt(t){var n;qt(t),n=Ft(t);var r=(S||t.f&O)&&t.deps!==null?N:d;h(t,r),t.equals(n)||(t.v=n,t.version=Mt())}function vn(t){qt(t),H(t,0),h(t,b),t.children=t.deps=t.reactions=t.fn=null}function hn(t){throw new Error("lifecycle_outside_component")}const Lt=0,dn=1;let B=Lt,F=!1,k=!1,et=!1;function ot(t){k=t}function lt(t){et=t}let g=[],D=0;let l=null;function it(t){l=t}let f=null,y=null;function En(t){y=t}let p=null,v=0,m=null;function yn(t){m=t}let Pt=0,S=!1,o=null;function Mt(){return++Pt}function Q(){return o!==null&&o.l===null}function P(t){var u,_;var n=t.f;if(n&A)return!0;if(n&N){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(P(a)&&bt(a),e&&f!==null&&!S&&!((_=a==null?void 0:a.reactions)!=null&&_.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||h(t,d)}return!1}function wn(t,n,r){throw t}function Ft(t){var I;var n=p,r=v,e=m,s=l,a=S,u=y;p=null,v=0,m=null,l=t.f&(T|nt)?null:t,S=!k&&(t.f&O)!==0,y=null;try{var _=(0,t.fn)(),i=t.deps;if(p!==null){var c;if(H(t,v),i!==null&&v>0)for(i.length=v+p.length,c=0;c<p.length;c++)i[v+c]=p[c];else t.deps=i=p;if(!S)for(c=v;c<i.length;c++)((I=i[c]).reactions??(I.reactions=[])).push(t)}else i!==null&&v<i.length&&(H(t,v),i.length=v);return _}finally{p=n,v=r,m=e,l=s,S=a,y=u}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(h(n,N),n.f&(O|U)||(n.f^=U),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;Y(r,n),r=e}}function j(t){var n=t.f;if(!(n&b)){h(t,d);var r=t.ctx,e=f,s=o;f=t,o=r;try{n&pt||Ht(t),Nt(t);var a=Ft(t);t.teardown=typeof a=="function"?a:null,t.version=Pt}catch(u){wn(u)}finally{f=e,o=s}}}function Yt(){D>1e3&&(D=0,tn()),D++}function jt(t){var n=t.length;if(n!==0){Yt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];if(s.first===null&&!(s.f&T))ft([s]);else{var a=[];Bt(s,a),ft(a)}}}finally{k=r}}}function ft(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(b|C))&&P(e)&&(j(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Rt(e):e.fn=null))}}function mn(){if(F=!1,D>1001)return;const t=g;g=[],jt(t),F||(D=0)}function Z(t){B===Lt&&(F||(F=!0,queueMicrotask(mn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&T){if(!(r&d))return;h(n,N)}}g.push(n)}function Bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&(b|C))===0,u=(s&T)!==0,_=(s&d)!==0,i=r.first;if(a&&(!u||!_)){if(u&&h(r,d),s&q){if(!u&&P(r)&&j(r),i=r.first,i!==null){r=i;continue}}else if(s&ct)if(u||_){if(i!==null){r=i;continue}}else e.push(r)}var c=r.next;if(c===null){let M=r.parent;for(;M!==null;){if(t===M)break t;var I=M.next;if(I!==null){r=I;continue t}M=M.parent}}r=c}for(var z=0;z<e.length;z++)i=e[z],n.push(i),Bt(i,n)}function Ut(t){var n=B,r=g;try{Yt();const s=[];B=dn,g=s,F=!1,jt(r);var e=t==null?void 0:t();return cn(),(g.length>0||s.length>0)&&Ut(),D=0,e}finally{B=n,g=r}}async function Rr(){await Promise.resolve(),Ut()}function Vt(t){var n=t.f;if(n&b)return t.v;if(l!==null){y!==null&&y.includes(t)&&nn();var r=l.deps;p===null&&r!==null&&r[v]===t?v++:p===null?p=[t]:p.push(t),m!==null&&f!==null&&f.f&d&&!(f.f&T)&&m.includes(t)&&(h(f,A),Z(f))}if(n&w){var e=t;P(e)&&bt(e)}return t.v}function An(t){const n=l;try{return l=null,t()}finally{l=n}}const In=~(A|N|d);function h(t,n){t.f=t.f&In|n}function Sr(t){return Gt().get(t)}function kr(t,n){return Gt().set(t,n),n}function Gt(t){return o===null&&hn(),o.c??(o.c=new Map(gn(o)||void 0))}function gn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Dr(t,n=1){var r=+Vt(t);return yt(t,r+n),r}function Cr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},n||(o.l={s:null,u:null,r1:[],r2:rt(!1)})}function qr(t){const n=o;if(n!==null){t!==void 0&&(n.x=t);const e=n.e;if(e!==null){n.e=null;for(var r=0;r<e.length;r++)Ot(e[r])}o=n.p,n.m=!0}return t||{}}function br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(at in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&at in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{on as $,xr as A,gt as B,ir as C,J as D,R as E,Tt as F,sr as G,sn as H,V as I,un as J,mt as K,Ln as L,pr as M,On as N,Er as O,f as P,zt as Q,vt as R,at as S,Y as T,bn as U,Or as V,$t as W,Kt as X,vr as Y,Nn as Z,xn as _,qr as a,nr as a0,rr as a1,Yn as a2,yt as a3,or as a4,en as a5,Rn as a6,Sn as a7,rt as a8,Fn as a9,kr as aA,yr as aB,wr as aC,jn as aD,Sr as aE,Vn as aF,C as aG,Bn as aH,Un as aI,Kn as aJ,St as aK,fn as aL,Gn as aM,ut as aN,st as aa,er as ab,Hn as ac,an as ad,lr as ae,gr as af,Mn as ag,qn as ah,zn as ai,dt as aj,$n as ak,Zn as al,Jn as am,Nr as an,kn as ao,Wn as ap,Dr as aq,hn as ar,Pn as as,Ut as at,Rr as au,pt as av,Zt as aw,Xn as ax,Qn as ay,tr as az,ar as b,fr as c,pn as d,mr as e,_r as f,Vt as g,x as h,Ar as i,Ir as j,E as k,Jt as l,hr as m,Dn as n,o,Cr as p,_t as q,ur as r,cr as s,Tr as t,dr as u,An as v,Cn as w,br as x,Ot as y,$ as z};
