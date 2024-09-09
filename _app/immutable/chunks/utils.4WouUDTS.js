function u(t){return t.replaceAll(`
`,"<br />")}async function s(t,{interval:e,timeout:n}={interval:100,timeout:1e4}){if(n<=0)throw new Error("timeout");return new Promise((i,c)=>{const o=t();o&&i(o),setTimeout(async()=>{try{const r=await s(t,{interval:e,timeout:n-e});i(r)}catch(r){c(r)}},e)})}export{u as t,s as w};
