"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{687:function(t,e,r){r.d(e,{C$:function(){return s},IQ:function(){return p},Jh:function(){return o},Op:function(){return f},s2:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(912),i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=004aa31770cc2729c6dd319813b8b5dc&page=1");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=004aa31770cc2729c6dd319813b8b5dc"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=004aa31770cc2729c6dd319813b8b5dc"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=004aa31770cc2729c6dd319813b8b5dc"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=004aa31770cc2729c6dd319813b8b5dc&query=".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},544:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),s=r(687),o=r(689),p=r(87),f=r(673),d=r(686),h=r(184);e.default=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1],v=(0,i.useState)(!1),l=(0,a.Z)(v,2),m=l[0],b=l[1],w=(0,o.TH)();return(0,i.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,b(!0),t.next=4,(0,s.s2)();case 4:e=t.sent,r=e.results,c(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),d.Notify.failure("Oooops, smth went wrong :(");case 12:return t.prev=12,b(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending today"}),(0,h.jsx)("ul",{children:r&&r.map((function(t){return(0,h.jsx)("li",{children:(0,h.jsx)(p.rU,{to:"/movies/".concat(t.id),state:{from:w.pathname},children:(0,h.jsx)("h3",{children:t.title})})},t.id)}))}),m&&(0,h.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=544.7f611e4e.chunk.js.map