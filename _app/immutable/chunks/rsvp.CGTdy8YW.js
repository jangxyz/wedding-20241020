import{g,d as i,c as T,a as S,T as u,s as C}from"./init_firebase.C2PdSPqF.js";import{z as t}from"./index.DXqQCM1T.js";import{o as H}from"./utils.vkuU_gs0.js";import{n as v}from"./firebase_utils.uA8kCWMc.js";import{f as w}from"./modalPortal-action.q8WiRC-G.js";t.object({name:t.string(),side:t.union([t.literal("groom"),t.literal("bride")]),count:t.number(),dining:t.union([t.literal("true"),t.literal("false"),t.literal("tbd")])});const b="rsvp";async function y(e,o){if(!o)return[null,null];const m=g(),d=i(m,"wedding",v(e)),r=T(d,b),l=i(r,o),s=await S(l);return[p(s),s];function p(a){const c=a.data();if(!c)return null;const D=c.createdTimestamp.toDate(),R=w(D,"yyyy-M-d HH:mm"),f=c.updatedTimestamp.toDate(),h=w(f,"yyyy-M-d HH:mm");return{...H(c,"createdTimestamp","updatedTimestamp"),id:a.id,date:D,dateStr:R,updatedDate:f,updatedDateStr:h}}}async function N(e,o,m){const d=g(),[r]=await y(e,o),l=i(d,"wedding",v(e)),s=T(l,b);try{const n=u.now(),p=r?u.fromDate(r.date):u.now(),a=i(s,o);return await C(a,{...m,updatedTimestamp:n,createdTimestamp:p}),console.log("Document written with ID: ",a.id,a),await y(e,o)}catch(n){throw console.error("Error adding document: ",n),n}}export{y as loadRsvpSessionData,N as saveRsvpSessionData};
