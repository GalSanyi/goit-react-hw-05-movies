"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[274],{7274:function(t,n,e){e.r(n),e.d(n,{default:function(){return o}});var r=e(885),a=e(2791),c=e(6871),u=e(4390),i=e(184);function o(){var t=(0,c.UO)().movieId,n=(0,a.useState)([]),e=(0,r.Z)(n,2),o=e[0],s=e[1];return(0,a.useEffect)((function(){u.np(t).then(s)}),[t]),console.log(o),(0,i.jsx)("div",{children:o>0?(0,i.jsx)("ul",{children:o.map((function(t){return(0,i.jsx)("li",{children:t.content?t.content:(0,i.jsx)("h3",{children:"don't content"})},t.id)}))}):(0,i.jsx)("h3",{children:"Don't content"})})}},4390:function(t,n,e){e.d(n,{Me:function(){return h},SU:function(){return s},Y5:function(){return f},bI:function(){return m},np:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o="0b3a2577ef47ebb117f3888c8be479cf";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/all/day?api_key=".concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(n,"&language=en-US&page=").concat(e,"&include_adult=false"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=274.16a93270.chunk.js.map