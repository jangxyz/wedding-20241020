function i(o,{lat:e,long:t},{zoomLevel:s}={}){const n=new naver.maps.LatLng(e,t),r={center:n,zoom:s},a=new naver.maps.Map(o,r);a.setOptions({logoControl:!1,scaleControl:!1,mapDataControl:!1});const p=new naver.maps.Marker({position:n,map:a});return[a,{marker:p}]}export{i};
