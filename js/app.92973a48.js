(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/monty-hall-problem/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"401c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Monty Hall problem")]),n("div",{staticClass:"form"},[t.started?t._e():n("div",[n("label",{attrs:{for:"portsAmount"}},[t._v("How many doors?")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.portsAmount,expression:"portsAmount",modifiers:{number:!0}}],attrs:{type:"text",id:"portsAmount",size:"3"},domProps:{value:t.portsAmount},on:{change:t.maxPorts,input:function(e){e.target.composing||(t.portsAmount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.started?t._e():n("div",[n("label",{attrs:{for:"selectedPort"}},[t._v("Which door will win?")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.selectedPort,expression:"selectedPort",modifiers:{number:!0}}],attrs:{type:"text",id:"selectedPort",size:"3"},domProps:{value:t.selectedPort},on:{input:function(e){e.target.composing||(t.selectedPort=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.started?t._e():n("button",{on:{click:function(e){t.started=!0}}},[t._v("Start")]),t.started?n("button",{on:{click:function(e){t.started=!1}}},[t._v("Restart")]):t._e()]),t.started?n("div",{staticClass:"doors"},t._l(t.portsAmount,(function(e){return n("div",{key:e},[n("Door",{attrs:{hasGift:e==t.selectedPort,number:e}})],1)})),0):t._e()])},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"door-area"},[n("div",{staticClass:"door-frame",class:{selected:t.selected&&!t.open}},[t.open&&t.hasGift?n("Gift"):t._e()],1),n("div",{staticClass:"door",class:{open:t.open},on:{click:function(e){t.selected=!t.selected}}},[n("div",{staticClass:"number",class:{selected:t.selected}},[t._v(t._s(t.number))]),n("div",{staticClass:"knob",class:{selected:t.selected},on:{click:function(e){e.stopPropagation(),t.open=!0}}})])])},i=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gift"},[n("div",{staticClass:"gift-tie-1"}),n("div",{staticClass:"gift-tie-2"}),n("div",{staticClass:"gift-top"}),n("div",{staticClass:"gift-body"})])}],u={name:"Gift"},d=u,f=(n("7f0d"),n("2877")),p=Object(f["a"])(d,c,l,!1,null,null,null),m=p.exports,v={name:"Door",components:{Gift:m},props:{number:{},hasGift:{type:Boolean}},data:function(){return{open:!1,selected:!1}}},b=v,h=(n("f5dc"),Object(f["a"])(b,a,i,!1,null,null,null)),_=h.exports,g={name:"App",components:{Door:_},data:function(){return{started:!1,portsAmount:3,selectedPort:null}},methods:{maxPorts:function(){this.portsAmount>100&&(this.portsAmount=100)}}},y=g,P=(n("034f"),Object(f["a"])(y,o,s,!1,null,null,null)),w=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},"7f0d":function(t,e,n){"use strict";var r=n("e301"),o=n.n(r);o.a},"85ec":function(t,e,n){},e301:function(t,e,n){},f5dc:function(t,e,n){"use strict";var r=n("401c"),o=n.n(r);o.a}});
//# sourceMappingURL=app.92973a48.js.map