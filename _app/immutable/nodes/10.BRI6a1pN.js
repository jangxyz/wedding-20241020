import"../chunks/disclose-version.Bg9kRutz.js";import{p as L,a as Q,g as t,f as U,s as V,d as a}from"../chunks/runtime.BHjHiDob.js";import{a as c,t as _}from"../chunks/template.B0Ysn9ZH.js";import{p as q,s as z}from"../chunks/index-client.DiypyI_7.js";import{e as A,s as E,S as G,a as u,I as J,B as K,g as W}from"../chunks/Sample326.CwUwjEX_.js";import{B as X}from"../chunks/BojagiLayout.GmSJ2wlC.js";import{R as Y,C as Z}from"../chunks/Contact.D2THsTBj.js";var $=_('<div class="insa_text svelte-732865" style="margin-top: 1rem;">2024년 10월 20일 일요일 오후 3시 30분 <br> 라온제나분당 8층 플로렌스 홀</div>'),ee=_("<!> <!>",1);function me(h,e){L(e,!0);const p=n=>{u(n,{name:"rsvp",id:"rsvp_section",class:"rsvp_section",children:(r,s)=>{const i=a(()=>"축하의 마음으로 참석해주시는 모든 분들을 귀하게 모실 수 있도록 참석 의사를 전달 부탁드립니다.");Y(r,{get weddingId(){return t(D)},get sessionId(){return C},brideName:m,get message(){return t(i)},groomName:d,get dateTime(){return t(y)},location:`${f??""} ${S??""}`,showModalOnMount:!1})},$$slots:{default:!0}})},b=n=>{u(n,{name:"insa",id:"insa_section",children:(r,s)=>{var i=ee(),l=U(i);J(l,{title:"초대합니다.",text:F,m_name:d,g_name:m,get m_parents(){return e.data.m_parents},get g_parents(){return e.data.g_parents},footerText:R=>{var H=$();c(R,H)}});var M=V(l,2),T=a(()=>({name:e.data.m_name,number:e.data.m_phone_entries[0].tel})),j=a(()=>({name:e.data.m_parents[0],number:e.data.m_phone_entries[1].tel})),P=a(()=>({name:e.data.m_parents[1],number:e.data.m_phone_entries[2].tel})),B=a(()=>({name:e.data.g_name,number:e.data.g_phone_entries[0].tel})),N=a(()=>({name:e.data.g_parents[0],number:e.data.g_phone_entries[1].tel})),O=a(()=>({name:e.data.g_parents[1],number:e.data.g_phone_entries[2].tel}));Z(M,{get groom(){return t(T)},get groomFather(){return t(j)},get groomMother(){return t(P)},get bride(){return t(B)},get brideFather(){return t(N)},get brideMother(){return t(O)},buttonClass:"contact-popup-button"}),c(r,i)},$$slots:{default:!0}})},v=n=>{u(n,{name:"bank",header:null,children:(r,s)=>{K(r,{get m_bank_accounts(){return e.data.m_bank_accounts},get g_bank_accounts(){return e.data.g_bank_accounts},use_bank_fold:!0,description:`축하의 마음을 담아 축의금을 전달하세요.
복사 버튼을 클릭해 계좌번호를 복사할 수 있습니다`})},$$slots:{default:!0}})};let{m_name:d,g_name:m,uid:g,venue_name:f,venue_floor:S}=e.data,o=a(()=>W(e.data.wday)),k=a(()=>t(o).month),I=a(()=>t(o).day),w=a(()=>t(o).timeDescription),y=a(()=>t(o).dt),x=a(()=>`${t(k)}월 ${t(I)}일 ${t(w)}
${e.data.wposition}`),D=a(()=>`bojagicard/${g}`),C=q(A());const F=E`
		키보드와 주사기를 잠시 내려놓고 올라간 산에서 만난 인연이 마침내 결실을 맺게 되었습니다.

		이제 함께 오르는 모든 순간 
		서로에게 힘이 되어주고자 합니다.

		시작하려는 우리의 발걸음을 응원하는 마음으로 함께해 주시면 감사하겠습니다.
	`;X(h,{waitForjQuery:!1,children:(n,r)=>{var s=a(()=>`https://coding-nurse.io/bojagi/scene/${g.slice(0,2)??""}/${g??""}/thumbnail.jpg`);G(n,z(()=>e.data,{class:"mode-senior",ogSiteName:"https://coding-nurse.io",ogUrl:"https://coding-nurse.io/20241020/wedding-invitation/mode=snr/",ogTitle:`${d??""}♡${m??""}의 모바일청첩장`,get ogDescription(){return t(x)},get ogImage(){return t(s)},sectionOrder:[["insa",b],"map",["bank",v],"calendar",["rsvp",p],"photo","notice","fromtodayShareFooter"]}))},$$slots:{default:!0}}),Q()}export{me as component};
