import{g as xe,I as he,h as k,k as H,d as me,w as De,x as te,j as X,e as T,l as _e,J as N,K as V,L as j,p as Se,M as Te,N as We,m as pe,i as Ee,q as ne,O as Ye}from"./disclose-version.vA1tCEFu.js";import{b as ge,y as Ce,P as we,c as J,d as Ne,a3 as Fe,q as qe,v as re,G as ae,I as Ae,F as ie,a4 as He,a5 as Re,z as ye,J as Le,K as Ie,S as Qe,k as Xe,g as Be,l as Ge,j as je}from"./runtime.Dj8kY1lO.js";let B=null;function an(t,e){return e}function Ve(t,e,n,r){for(var a=[],i=e.length,s=0;s<i;s++)He(e[s].e,a,!0);var u=i>0&&a.length===0&&n!==null;if(u){var f=n.parentNode;Se(f),f.append(n),r.clear(),_(t,e[0].prev,e[i-1].next)}Re(a,()=>{for(var l=0;l<i;l++){var d=e[l];u||(r.delete(d.k),_(t,d.prev,d.next)),ye(d.e,!u)}})}function sn(t,e,n,r,a,i=null){var s=t,u={flags:e,items:new Map,first:null},f=(e&he)!==0;if(f){var l=t;s=k?H(l.firstChild):l.appendChild(xe())}k&&me();var d=null;ge(()=>{var c=n(),b=Ce(c)?c:c==null?[]:Array.from(c),h=b.length,w=u.flags;w&j&&!Le(b)&&!(Ie in b)&&!(Qe in b)&&(w^=j,w&We&&!(w&N)&&(w^=N));let v=!1;if(k){var O=s.data===De;O!==(h===0)&&(s=te(),H(s),X(!1),v=!0)}if(k){for(var M=null,y,o=0;o<h;o++){if(T.nodeType===8&&T.data===_e){s=T,v=!0,X(!1);break}var g=b[o],q=r(g,o);y=be(T,u,M,null,g,q,o,a,w),u.items.set(q,y),M=y}h>0&&H(te())}k||Je(b,u,s,a,w,r),i!==null&&(h===0?d?we(d):d=J(()=>i(s)):d!==null&&Ne(d,()=>{d=null})),v&&X(!0)}),k&&(s=T)}function Je(t,e,n,r,a,i){var K,U,z,Z;var s=(a&Te)!==0,u=(a&(N|V))!==0,f=t.length,l=e.items,d=e.first,c=d,b=new Set,h=null,w=new Set,v=[],O=[],M,y,o,g;if(s)for(g=0;g<f;g+=1)M=t[g],y=i(M,g),o=l.get(y),o!==void 0&&((K=o.a)==null||K.measure(),w.add(o));for(g=0;g<f;g+=1){if(M=t[g],y=i(M,g),o=l.get(y),o===void 0){var q=c?c.e.nodes.start:n;h=be(q,e,h,h===null?e.first:h.next,M,y,g,r,a),l.set(y,h),v=[],O=[],c=h.next;continue}if(u&&$e(o,M,g,a),o.e.f&Fe&&(we(o.e),s&&((U=o.a)==null||U.unfix(),w.delete(o))),o!==c){if(b.has(o)){if(v.length<O.length){var A=O[0],x;h=A.prev;var $=v[0],I=v[v.length-1];for(x=0;x<v.length;x+=1)se(v[x],A,n);for(x=0;x<O.length;x+=1)b.delete(O[x]);_(e,$.prev,I.next),_(e,h,$),_(e,I,A),c=A,h=I,g-=1,v=[],O=[]}else b.delete(o),se(o,c,n),_(e,o.prev,o.next),_(e,o,h===null?e.first:h.next),_(e,h,o),h=o;continue}for(v=[],O=[];c!==null&&c.k!==y;)b.add(c),O.push(c),c=c.next;if(c===null)continue;o=c}v.push(o),h=o,c=o.next}const E=Array.from(b);for(;c!==null;)E.push(c),c=c.next;var Q=E.length;if(Q>0){var ke=a&he&&f===0?n:null;if(s){for(g=0;g<Q;g+=1)(z=E[g].a)==null||z.measure();for(g=0;g<Q;g+=1)(Z=E[g].a)==null||Z.fix()}Ve(e,E,ke,l)}s&&qe(()=>{var ee;for(o of w)(ee=o.a)==null||ee.apply()}),re.first=e.first&&e.first.e,re.last=h&&h.e}function $e(t,e,n,r){r&N&&ae(t.v,e),r&V?ae(t.i,n):t.i=n}function be(t,e,n,r,a,i,s,u,f){var l=B;try{var d=(f&N)!==0,c=(f&j)===0,b=d?c?Ae(a):ie(a):a,h=f&V?ie(s):s,w={i:h,v:b,k:i,a:null,e:null,prev:n,next:r};return B=w,w.e=J(()=>u(t,b,h),k),w.e.prev=n&&n.e,w.e.next=r&&r.e,n===null?e.first=w:(n.next=w,n.e.next=w.e),r!==null&&(r.prev=w,r.e.prev=w.e),w}finally{B=l}}function se(t,e,n){for(var r=t.next?t.next.e.nodes.start:n,a=e?e.e.nodes.start:n,i=t.e.nodes.start;i!==r;){var s=i.nextSibling;a.before(i),i=s}}function _(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function on(t,e,n,r){var a=t,i="",s;ge(()=>{i!==(i=e())&&(s&&(ye(s),s=null),i!==""&&(s=J(()=>{if(k){T.data;for(var u=me(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=u.nextSibling;if(u===null)throw pe(),Ee;ne(T,f),a=H(u);return}var l=i+"",d=Ye(l);ne(d.firstChild,d.lastChild),a.before(d)})))})}function un(t,e,n){Xe(()=>{var r=Be(()=>e(t,n==null?void 0:n())||{});if(n&&(r!=null&&r.update)){var a=!1;Ge(()=>{var i=n();je(i),a&&r.update(i)}),a=!0}if(r!=null&&r.destroy)return()=>r.destroy()})}function cn(t,e){var n=t.__className,r=Ke(e);k&&t.className===r?t.__className=r:(n!==r||k&&t.className!==r)&&(e==null?t.removeAttribute("class"):t.className=r,t.__className=r)}function Ke(t){return t??""}function dn(t,e,n){n?t.classList.add(e):t.classList.remove(e)}function fn(t,e,n,r){const a=t.style,i=a.getPropertyValue(e);n==null?i!==""&&a.removeProperty(e):i!==n&&a.setProperty(e,n,"")}function P(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function W(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const ve=6048e5,Ue=864e5;let ze={};function L(){return ze}function F(t,e){var u,f,l,d;const n=L(),r=(e==null?void 0:e.weekStartsOn)??((f=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:f.weekStartsOn)??n.weekStartsOn??((d=(l=n.locale)==null?void 0:l.options)==null?void 0:d.weekStartsOn)??0,a=P(t),i=a.getDay(),s=(i<r?7:0)+i-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function R(t){return F(t,{weekStartsOn:1})}function Oe(t){const e=P(t),n=e.getFullYear(),r=W(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=R(r),i=W(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=R(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function oe(t){const e=P(t);return e.setHours(0,0,0,0),e}function ue(t){const e=P(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Ze(t,e){const n=oe(t),r=oe(e),a=+n-ue(n),i=+r-ue(r);return Math.round((a-i)/Ue)}function et(t){const e=Oe(t),n=W(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),R(n)}function tt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function nt(t){if(!tt(t)&&typeof t!="number")return!1;const e=P(t);return!isNaN(Number(e))}function rt(t){const e=P(t),n=W(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const at={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},it=(t,e,n)=>{let r;const a=at[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function G(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const st={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ot={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ut={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ct={date:G({formats:st,defaultWidth:"full"}),time:G({formats:ot,defaultWidth:"full"}),dateTime:G({formats:ut,defaultWidth:"full"})},dt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ft=(t,e,n,r)=>dt[t];function Y(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const s=t.defaultFormattingWidth||t.defaultWidth,u=n!=null&&n.width?String(n.width):s;a=t.formattingValues[u]||t.formattingValues[s]}else{const s=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[s]}const i=t.argumentCallback?t.argumentCallback(e):e;return a[i]}}const lt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ht={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},mt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},wt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},yt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},bt=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},vt={ordinalNumber:bt,era:Y({values:lt,defaultWidth:"wide"}),quarter:Y({values:ht,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Y({values:mt,defaultWidth:"wide"}),day:Y({values:gt,defaultWidth:"wide"}),dayPeriod:Y({values:wt,defaultWidth:"wide",formattingValues:yt,defaultFormattingWidth:"wide"})};function C(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],f=Array.isArray(u)?Mt(u,c=>c.test(s)):Ot(u,c=>c.test(s));let l;l=t.valueCallback?t.valueCallback(f):f,l=n.valueCallback?n.valueCallback(l):l;const d=e.slice(s.length);return{value:l,rest:d}}}function Ot(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Mt(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Pt(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],i=e.match(t.parsePattern);if(!i)return null;let s=t.valueCallback?t.valueCallback(i[0]):i[0];s=n.valueCallback?n.valueCallback(s):s;const u=e.slice(a.length);return{value:s,rest:u}}}const kt=/^(\d+)(th|st|nd|rd)?/i,xt=/\d+/i,Dt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},_t={any:[/^b/i,/^(a|c)/i]},St={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tt={any:[/1/i,/2/i,/3/i,/4/i]},Wt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Et={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Yt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ct={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Nt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ft={ordinalNumber:Pt({matchPattern:kt,parsePattern:xt,valueCallback:t=>parseInt(t,10)}),era:C({matchPatterns:Dt,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any"}),quarter:C({matchPatterns:St,defaultMatchWidth:"wide",parsePatterns:Tt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:C({matchPatterns:Wt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),day:C({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:Yt,defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:Ct,defaultMatchWidth:"any",parsePatterns:Nt,defaultParseWidth:"any"})},qt={code:"en-US",formatDistance:it,formatLong:ct,formatRelative:ft,localize:vt,match:Ft,options:{weekStartsOn:0,firstWeekContainsDate:1}};function At(t){const e=P(t);return Ze(e,rt(e))+1}function Ht(t){const e=P(t),n=+R(e)-+et(e);return Math.round(n/ve)+1}function Me(t,e){var d,c,b,h;const n=P(t),r=n.getFullYear(),a=L(),i=(e==null?void 0:e.firstWeekContainsDate)??((c=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??a.firstWeekContainsDate??((h=(b=a.locale)==null?void 0:b.options)==null?void 0:h.firstWeekContainsDate)??1,s=W(t,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const u=F(s,e),f=W(t,0);f.setFullYear(r,0,i),f.setHours(0,0,0,0);const l=F(f,e);return n.getTime()>=u.getTime()?r+1:n.getTime()>=l.getTime()?r:r-1}function Rt(t,e){var u,f,l,d;const n=L(),r=(e==null?void 0:e.firstWeekContainsDate)??((f=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(l=n.locale)==null?void 0:l.options)==null?void 0:d.firstWeekContainsDate)??1,a=Me(t,e),i=W(t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),F(i,e)}function Lt(t,e){const n=P(t),r=+F(n,e)-+Rt(n,e);return Math.round(r/ve)+1}function m(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const D={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return m(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):m(n+1,2)},d(t,e){return m(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return m(t.getHours()%12||12,e.length)},H(t,e){return m(t.getHours(),e.length)},m(t,e){return m(t.getMinutes(),e.length)},s(t,e){return m(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return m(a,e.length)}},p={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ce={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return D.y(t,e)},Y:function(t,e,n,r){const a=Me(t,r),i=a>0?a:1-a;if(e==="YY"){const s=i%100;return m(s,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):m(i,e.length)},R:function(t,e){const n=Oe(t);return m(n,e.length)},u:function(t,e){const n=t.getFullYear();return m(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return m(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return m(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return D.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return m(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Lt(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):m(a,e.length)},I:function(t,e,n){const r=Ht(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):m(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):D.d(t,e)},D:function(t,e,n){const r=At(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):m(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return m(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return m(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return m(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=p.noon:r===0?a=p.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=p.evening:r>=12?a=p.afternoon:r>=4?a=p.morning:a=p.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return D.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):D.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):m(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):m(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):D.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):D.s(t,e)},S:function(t,e){return D.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return fe(r);case"XXXX":case"XX":return S(r);case"XXXXX":case"XXX":default:return S(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return fe(r);case"xxxx":case"xx":return S(r);case"xxxxx":case"xxx":default:return S(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+de(r,":");case"OOOO":default:return"GMT"+S(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+de(r,":");case"zzzz":default:return"GMT"+S(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return m(r,e.length)},T:function(t,e,n){const r=t.getTime();return m(r,e.length)}};function de(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+e+m(i,2)}function fe(t,e){return t%60===0?(t>0?"-":"+")+m(Math.abs(t)/60,2):S(t,e)}function S(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=m(Math.trunc(r/60),2),i=m(r%60,2);return n+a+e+i}const le=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Pe=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},It=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return le(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",le(r,e)).replace("{{time}}",Pe(a,e))},Qt={p:Pe,P:It},Xt=/^D+$/,Bt=/^Y+$/,Gt=["D","DD","YY","YYYY"];function jt(t){return Xt.test(t)}function Vt(t){return Bt.test(t)}function Jt(t,e,n){const r=$t(t,e,n);if(console.warn(r),Gt.includes(t))throw new RangeError(r)}function $t(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Kt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,zt=/^'([^]*?)'?$/,Zt=/''/g,en=/[a-zA-Z]/;function ln(t,e,n){var d,c,b,h,w,v,O,M;const r=L(),a=(n==null?void 0:n.locale)??r.locale??qt,i=(n==null?void 0:n.firstWeekContainsDate)??((c=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??r.firstWeekContainsDate??((h=(b=r.locale)==null?void 0:b.options)==null?void 0:h.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((v=(w=n==null?void 0:n.locale)==null?void 0:w.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((M=(O=r.locale)==null?void 0:O.options)==null?void 0:M.weekStartsOn)??0,u=P(t);if(!nt(u))throw new RangeError("Invalid time value");let f=e.match(Ut).map(y=>{const o=y[0];if(o==="p"||o==="P"){const g=Qt[o];return g(y,a.formatLong)}return y}).join("").match(Kt).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const o=y[0];if(o==="'")return{isToken:!1,value:tn(y)};if(ce[o])return{isToken:!0,value:y};if(o.match(en))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return{isToken:!1,value:y}});a.localize.preprocessor&&(f=a.localize.preprocessor(u,f));const l={firstWeekContainsDate:i,weekStartsOn:s,locale:a};return f.map(y=>{if(!y.isToken)return y.value;const o=y.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Vt(o)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&jt(o))&&Jt(o,e,String(t));const g=ce[o[0]];return g(u,o,a.localize,l)}).join("")}function tn(t){const e=t.match(zt);return e?e[1].replace(Zt,"'"):t}function hn(t){const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,9999),document.execCommand("copy"),document.body.removeChild(e)}function mn(){let t=()=>{console.log("default resolve.")},e=()=>{};return[new Promise((r,a)=>{t=i=>{r(i)},e=a}),[t,e]]}function gn(t,e){const n={};for(const r of Object.keys(t))r!==e&&(n[r]=t[r]);return n}export{Y as a,G as b,W as c,Pt as d,C as e,ln as f,fn as g,un as h,on as i,sn as j,an as k,cn as l,dn as m,Ze as n,hn as o,oe as p,mn as q,gn as r,F as s,P as t};
