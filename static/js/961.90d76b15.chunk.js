"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{6961:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(885),a=n(2791),c=n(6871),u=n(5935),i=n(4390),s=n(184);function o(){var t=(0,c.UO)().movieId,e=(0,a.useState)([]),n=(0,r.Z)(e,2),o=n[0],p=n[1];return console.log(t),(0,a.useEffect)((function(){i.Me(t).then(p)}),[t]),console.log(o),(0,s.jsxs)("div",{children:[o&&(0,s.jsx)("ul",{children:o.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h1",{children:t.name}),(0,s.jsx)("img",{src:t.profile_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(t.profile_path):u,alt:t.title,width:"100",height:"150"})]},t.id)}))}),(0,s.jsx)(c.j3,{})]})}},4390:function(t,e,n){n.d(e,{Me:function(){return h},SU:function(){return o},Y5:function(){return f},bI:function(){return v},np:function(){return g}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),i=n.n(u),s="0b3a2577ef47ebb117f3888c8be479cf";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/all/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(e,n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=").concat(n,"&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/"},5935:function(t,e,n){t.exports=n.p+"static/media/default.2e01288c0c1a3f24d743.jpg"}}]);
//# sourceMappingURL=961.90d76b15.chunk.js.map