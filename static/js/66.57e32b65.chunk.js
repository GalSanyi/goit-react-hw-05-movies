"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[66],{7066:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(885),a=n(501),s=n(6871),c=n(2791),i="MovieDetailsPage_wrap__naRpx",u="MovieDetailsPage_button__ALdYt",o="MovieDetailsPage_textContent__DTrUF",l="MovieDetailsPage_title__V6Qqi",p="MovieDetailsPage_Overview__NR7it",v="MovieDetailsPage_content__Trpn7",d="MovieDetailsPage_link__ZcFL2",h=n(4390),f=n(184);function g(){var e=(0,s.TH)().state,t=(0,s.s0)(),n=(0,s.UO)().movieId,g=(0,c.useState)(null),_=(0,r.Z)(g,2),m=_[0],x=_[1];return(0,c.useEffect)((function(){h.Y5(n).then(x)}),[n]),(0,f.jsxs)(f.Fragment,{children:[m&&(0,f.jsxs)("div",{className:i,children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("button",{className:u,onClick:function(){var n;return t(null!==(n=null===e||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},children:[(0,f.jsx)("svg",{height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 1024 1024",children:(0,f.jsx)("path",{d:"M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"})}),(0,f.jsx)("span",{children:"Back"})]}),(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(m.poster_path),alt:m.title,width:"250"})]}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsxs)("h2",{className:l,children:[m.title," (",m.release_date,")"]}),(0,f.jsxs)("p",{children:["vote average: ",m.vote_average]}),(0,f.jsx)("p",{className:p,children:"Overview:"}),(0,f.jsx)("p",{className:v,children:m.overview})]})]}),(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsx)(a.OL,{className:d,to:"cast",children:"Cast"}),(0,f.jsx)(a.OL,{className:d,to:"reviews",children:"Reviews"}),(0,f.jsx)(s.j3,{})]})}},4390:function(e,t,n){n.d(t,{Me:function(){return d},SU:function(){return o},Y5:function(){return p},bI:function(){return _},np:function(){return f}});var r=n(5861),a=n(7757),s=n.n(a),c=n(4569),i=n.n(c),u="0b3a2577ef47ebb117f3888c8be479cf";function o(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/trending/all/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=").concat(n,"&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=66.57e32b65.chunk.js.map