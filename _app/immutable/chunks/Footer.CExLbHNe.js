import{t as C,c as D,s as p,a as _,b as B}from"./utils.BVjC9hLa.js";import"./disclose-version.Bg9kRutz.js";import{o as c,p as s,a as g,t as k,C as j,r as l}from"./template.CBm1eiE_.js";import{p as z,A as y,a as A}from"./runtime.C0n2djTQ.js";import{d as F}from"./events.BBpaa9N7.js";import{s as x}from"./snippet.RX547NFD.js";import{p as T}from"./index-client.CkNNLNIg.js";function W(a,e){const t=C(a);return isNaN(e)?D(a,NaN):(e&&t.setDate(t.getDate()+e),t)}function H(a,e){const t=e*7;return W(a,t)}function G(a,e){const t=C(a.start),v=C(a.end);let r=+t>+v;const n=r?p(v,e):p(t,e),u=r?p(t,e):p(v,e);n.setHours(15),u.setHours(15);const d=+u.getTime();let o=n,h=1;const i=[];for(;+o<=d;)o.setHours(0),i.push(C(o)),o=H(o,h),o.setHours(15);return r?i.reverse():i}function N(){const a=location.href.replace(/\?.+/g,"");_(a),alert(`주소가 복사되었습니다.
필요한 곳에 붙여넣기 하세요.`)}var O=k('<div class="copyright-wrap svelte-15uoicj"><div class="copyright svelte-15uoicj">Copyright 2024. <span class="brand svelte-15uoicj">FROM TODAY</span>. All rights reserved.</div></div>'),E=(a,e)=>{var t;return(t=e.onClickShareKakao)==null?void 0:t.call(e)},M=k('<div><div class="kakao-wrap svelte-15uoicj"><button class="btn-kakao svelte-15uoicj"><svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svelte-15uoicj"><path d="m9.462 9.306-.692 1.951h1.383z"></path><path d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z"></path></svg> <span>카카오톡 공유하기</span></button> <button class="btn-kakao svelte-15uoicj"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="svelte-15uoicj"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path></svg> <span>링크주소 복사하기</span></button></div> <!></div>');function J(a,e){z(e,!0);let v=T(e,"children",3,b=>{var m=O(),f=c(m);s(c(f)),j(),l(f),l(m),g(b,m)});var r=M(),n=c(r),u=c(n);u.__click=[E,e];var d=c(u),o=c(d);s(o),l(d),s(s(d,!0)),l(u);var h=s(s(u,!0));h.__click=[N];var i=c(h);c(i),l(i),s(s(i,!0)),l(h),l(n);var w=s(s(n,!0));x(w,v),l(r),y(()=>B(r,`footer-wrap ${e.class??""} svelte-15uoicj`)),g(a,r),A()}F(["click"]);export{J as F,W as a,G as e};
