import{o as l}from"./index-client.D7uADTQ_.js";function p(n,o=null){return l(()=>{if(typeof o=="string"&&(o=document.querySelector(o)),!o){console.warn("cannot find container.");return}return o.appendChild(n),document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")}}),{destroy(){n.remove()}}}function c(n,{lat:o,long:r},{zoomLevel:s}={}){const e=new naver.maps.LatLng(o,r),t={center:e,zoom:s},a=new naver.maps.Map(n,t);a.setOptions({logoControl:!1,scaleControl:!1,mapDataControl:!1});const i=new naver.maps.Marker({position:e,map:a});return[a,{marker:i}]}export{c as i,p as m};
