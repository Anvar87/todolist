!function(e){function t(t){for(var r,c,o=t[0],u=t[1],s=t[2],p=0,d=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;i.push([68,1]),n()}({50:function(e,t,n){var r=n(21),a=n(51);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},51:function(e,t,n){(t=n(22)(!1)).push([e.i,".ticker{position:absolute;width:120px;background-color:#3e3e3e;height:30px;display:flex;color:#fff;align-items:center;justify-content:center;cursor:pointer;-webkit-animation:4s linear 1s infinite alternate slidein;animation:4s linear 1s infinite alternate slidein;-webkit-animation-play-state:running;animation-play-state:running}.ticker:hover{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes slidein{from{left:0%}to{left:calc(100% - 120px)}}@keyframes slidein{from{left:0%}to{left:calc(100% - 120px)}}\n",""]),e.exports=t},52:function(e,t,n){var r=n(21),a=n(53);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},53:function(e,t,n){(t=n(22)(!1)).push([e.i,".like{min-width:20px;height:20px;cursor:pointer;margin-right:20px}\n",""]),e.exports=t},54:function(e,t,n){var r=n(21),a=n(55);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},55:function(e,t,n){(t=n(22)(!1)).push([e.i,".delete{min-width:20px;height:20px;margin-right:20px;cursor:pointer}\n",""]),e.exports=t},56:function(e,t,n){var r=n(21),a=n(57);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},57:function(e,t,n){(t=n(22)(!1)).push([e.i,".list__item{display:flex;align-items:center;padding:10px;background-color:#fff;box-shadow:-1px 3px 9px rgba(51,51,51,0.2);cursor:pointer;flex:1;margin:10px}.list__link{color:#696868}\n",""]),e.exports=t},64:function(e,t,n){var r=n(21),a=n(65);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},65:function(e,t,n){(t=n(22)(!1)).push([e.i,".list{padding:0;margin-top:60px}\n",""]),e.exports=t},66:function(e,t,n){var r=n(21),a=n(67);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);e.exports=a.locals||{}},67:function(e,t,n){(t=n(22)(!1)).push([e.i,"html{height:100%;font-family:Arial, Helvetica, sans-serif}body{margin:0;height:100%}img{max-width:100%;max-height:100%}.main{padding:30px;height:100vh;box-sizing:border-box}.main__block{position:relative;height:150px;margin-bottom:30px}\n",""]),e.exports=t},68:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"watchSetFramework",(function(){return L})),n.d(r,"watchCache",(function(){return C}));var a=n(1),i=n.n(a),c=n(17),o=n.n(c),u=n(14),s=n(19),l=n(37),p=n(15),d=n.n(p),f=n(25),m=n.n(f),b=n(16),y=function(e){return{type:"SET_FRAMEWORK",payload:e}},h=function(e){return{type:"SET_CACHE",payload:e}},v=n(0),g=n.n(v),O=n(35),x=n.n(O);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=x()(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/".concat(t,".json"),w({},n));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=d.a.mark(L),_=d.a.mark(C),P=d.a.mark(I),S=d.a.mark(N);function L(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.f)("SET_FRAMEWORK",I);case 2:case"end":return e.stop()}}),E)}function C(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.f)("SET_CACHE",N);case 2:case"end":return e.stop()}}),_)}function I(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.b)(y);case 2:return n.next=4,Object(b.b)(j,e.payload);case 4:return t=n.sent,n.next=7,Object(b.e)({type:"PUT_LINKS",payload:{name:e.payload,data:t.data.children}});case 7:case"end":return n.stop()}}),P)}function N(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(b.c)(12e4);case 3:return t.next=5,Object(b.e)(h(e.payload));case 5:t.next=0;break;case 7:case"end":return t.stop()}}),S)}var K=d.a.mark(M);function M(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(m()(Object.values(r)).map(b.d));case 2:case"end":return e.stop()}}),K)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=Object(l.a)(),D=Object(s.d)((function(e,t){switch(t.type){case"PUT_LINKS":return R(R({},e),{},g()({},t.payload.name,R(R({},e[t.payload.name]),{},{links:t.payload.data,loaded:!0})));case"SET_FRAMEWORK":return R(R({},e),{},{currentFramework:t.payload});case"CLICK_TICKER":return R(R({},e),{},g()({currentFramework:t.payload},t.payload,R(R({},e[t.payload]),{},{count:e[t.payload].count+1})));case"SET_CACHE":return R(R({},e),{},g()({},t.payload,R(R({},e[t.payload]),{},{loaded:!1})));case"PUSH_LINKS":return R(R({},e),{},{activeLinks:e.activeLinks.concat(t.payload)});case"CHANGE_LIKE":return R(R({},e),{},{activeLinks:e.activeLinks.map((function(e){return e.data.id===t.payload&&(e.data.clicked=!e.data.clicked),e}))});case"DELETE_LINK":return R(R({},e),{},{activeLinks:e.activeLinks.filter((function(e){return e.data.id!==t.payload}))});default:return e}}),{currentFramework:"",frameworks:[{name:"Frontend",id:"frontend"},{name:"ReactJS",id:"reactjs"},{name:"VueJS",id:"vuejs"},{name:"Angular",id:"angular"}],frontend:{count:0,data:[],links:[],loaded:!1},reactjs:{count:0,data:[],links:[],loaded:!1},vuejs:{count:0,data:[],links:[],loaded:!1},angular:{count:0,data:[],links:[],loaded:!1},activeLinks:[]},Object(s.a)(A));A.run(M);n(50);var H=function(e){var t=e.id,n=e.children,r=e.idx,a=Object(u.b)(),c=Object(u.c)((function(e){return e}));return i.a.createElement("div",{className:"ticker",onClick:function(e){return function(e){c[e].loaded||(a(y(e)),a(h(e))),a(function(e){return{type:"CLICK_TICKER",payload:e}}(e))}(t)},style:{top:"".concat(40*r,"px")}},i.a.createElement("span",null,n))};var F=n.p+"images/heart.svg";var J=n.p+"images/like.svg",U=(n(52),function(e){var t=e.clicked,n=e.id,r=Object(u.b)();return i.a.createElement("div",{className:"like",onClick:function(e){return function(e){return r(function(e){return{type:"CHANGE_LIKE",payload:e}}(e))}(n)}},t?i.a.createElement("img",{src:F,alt:"icon"}):i.a.createElement("img",{src:J,alt:"icon"}))});n(54);var W=n.p+"images/delete.svg",G=function(e){var t=e.id,n=Object(u.b)();return i.a.createElement("div",{className:"delete",onClick:function(e){return function(e){return n(function(e){return{type:"DELETE_LINK",payload:e}}(e))}(t)}},i.a.createElement("img",{src:W,alt:"icon"}))},z=(n(56),function(e){var t=e.url,n=e.children,r=e.clicked,a=e.id;e.idx,Object(u.c)((function(e){return e.activeLinks})),Object(u.b)();return i.a.createElement("div",{className:"list__item"},i.a.createElement(U,{clicked:r,id:a}),i.a.createElement(G,{id:a}),i.a.createElement("a",{className:"list__link",href:t,target:"_blank"},n))}),B=n(23),V=(n(64),function(e){var t=e.activeLinks,n=Object(a.useRef)(new B.c({fixedWidth:!0,defaultHeight:100}));return i.a.createElement("div",{style:{width:"100%",height:"400px"},className:"list"},i.a.createElement(B.a,null,(function(e){var r=e.width,a=e.height;return i.a.createElement(B.d,{width:r,height:a,rowCount:t.length,rowHeight:80,deferredMeasurementCache:n.current,rowRenderer:function(e){var r=e.key,a=e.index,c=e.isScrolling,o=e.style,u=e.parent;return i.a.createElement(B.b,{key:r,cache:n.current,parent:u,columnIndex:0,rowIndex:a},c?"":i.a.createElement(z,{url:t[a].data.url,clicked:t[a].data.clicked,id:t[a].data.id,style:o},t[a].data.title))}})})))}),q=(n(66),function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})),n=Object(u.c)((function(e){return e})),r=n.frameworks,c=n.activeLinks,o=n.currentFramework;return Object(a.useEffect)((function(){if(o){var n=t[o].links.splice(t[o].count-1,1);e({type:"PUSH_LINKS",payload:n})}}),[o,t[o]]),Object(a.useEffect)((function(e){localStorage.setItem("activelinks",{links:c})}),[c]),i.a.createElement("main",{className:"main"},i.a.createElement("section",{className:"main__block"},r.map((function(e,t){return i.a.createElement(H,{key:e.id,id:e.id,idx:t},e.name)}))),i.a.createElement(V,{activeLinks:c}))});o.a.render(i.a.createElement(u.a,{store:D},i.a.createElement(q,null)),document.getElementById("root"))}});