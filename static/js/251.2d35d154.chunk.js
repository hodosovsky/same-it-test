/*! For license information please see 251.2d35d154.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksame_it_test=self.webpackChunksame_it_test||[]).push([[251],{8001:function(t,n,e){e.d(n,{Z:function(){return E}});var r,o,i,c,u,a=e(5861),s=e(9439),l=e(5705),h=e(9128),f=e(1087),d=e(168),p=e(5867),m=e(3682),v=(0,p.ZP)(m.Z)(r||(r=(0,d.Z)(["\n  position: absolute;\n  color: ",";\n  text-align: right;\n  font-size: ","px;\n  line-height: calc(16 / 12);\n  right: 25px;\n  top: 50px;\n"])),(function(t){return t.theme.colors.error}),(function(t){return t.theme.fontSizes[0]})),g=e(184),y=function(t){var n=t.name;return(0,g.jsx)(l.Bc,{name:n,render:function(t){return(0,g.jsx)(v,{children:t})}})},x=(0,p.ZP)(l.l0)(o||(o=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: auto;\n  justify-content: center;\n  margin-bottom: ","px;\n  gap: ","px;\n  max-width: 300px;\n  width: 100%;\n\n  @media screen and (min-width: 480px) {\n    grid-template-columns: auto auto;\n  }\n"])),(function(t){return t.theme.space[5]}),(function(t){return t.theme.space[4]})),b=p.ZP.label(i||(i=(0,d.Z)(["\n  position: relative;\n"]))),w=(0,p.ZP)(l.gN)(c||(c=(0,d.Z)(["\n  max-width: 240px;\n  width: 100%;\n  padding: ","px ","px;\n  border-radius: ",";\n  border-color: ",";\n  outline: none;\n  background-color: ",";\n  font-size: ","px;\n\n  @media screen and (min-width: 480px) {\n    width: 300px;\n  }\n\n  :placeholder {\n    font-size: ","px;\n    color: ",";\n  }\n\n  /* &:not(:focus):not(:placeholder-shown):valid {\n    border-color: ",";\n  }\n\n  &:not(:focus):not(:placeholder-shown):invalid {\n    border-color: ",";\n  } */\n"])),(function(t){return t.theme.space[2]}),(function(t){return t.theme.space[3]}),(function(t){return t.theme.radii.med}),(function(t){return t.theme.colors.border}),(function(t){return t.theme.colors.btnBg}),(function(t){return t.theme.fontSizes[3]}),(function(t){return t.theme.fontSizes[2]}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.colors.hover}),(function(t){return t.theme.colors.error})),Z=p.ZP.button(u||(u=(0,d.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n\n  &:disabled svg {\n    fill: ",";\n    color: ",";\n  }\n\n  svg {\n    transition: color 300ms ease-in-out;\n    color: ",";\n    transition: color 250ms linear;\n  }\n\n  &:not(:disabled):hover,\n  &:not(:disabled):focus {\n    svg {\n      color: ",";\n    }\n  }\n"])),(function(t){return t.theme.colors.border}),(function(t){return t.theme.colors.disabled}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.colors.hover})),j=e(2791),P=e(6200);function L(){L=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{a({},"")}catch(z){a=function(t,n,e){return t[n]=e}}function s(t,n,e,o){var i=n&&n.prototype instanceof f?n:f,c=Object.create(i.prototype),u=new S(o||[]);return r(c,"_invoke",{value:w(t,e,u)}),c}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(z){return{type:"throw",arg:z}}}t.wrap=s;var h={};function f(){}function d(){}function p(){}var m={};a(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(E([])));g&&g!==n&&e.call(g,i)&&(m=g);var y=p.prototype=f.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(n){a(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){function o(r,i,c,u){var a=l(t[r],t,i);if("throw"!==a.type){var s=a.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):n.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(a.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function w(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var u=Z(c,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var a=l(t,n,e);if("normal"===a.type){if(r=e.done?"completed":"suspendedYield",a.arg===h)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(r="completed",e.method="throw",e.arg=a.arg)}}}function Z(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,Z(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=a(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(b.prototype),a(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var c=new b(s(n,e,r,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(y),a(y,u,"Generator"),a(y,i,(function(){return this})),a(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return c.type="throw",c.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),a=e.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var S={query:""},E=function(t){var n,e=t.schema,r=t.placeholderMsg,o=t.onChangeActions,i=(0,f.lr)(),c=(0,s.Z)(i,2),u=c[0],d=c[1],p=(0,P.Z)(500),m=u.get(null!==(n="search")?n:"");(0,j.useEffect)((function(){}),[m]);var v=function(t){t.preventDefault(),o&&p((function(){d(""!==t.target.value.toLowerCase().trim()?{search:t.target.value.toLowerCase().trim()}:{})}))},E=function(){var t=(0,a.Z)(L().mark((function t(n,e){var r,o;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.query,o=e.resetForm,d(""!==r?{search:r}:{}),o();case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}();return(0,g.jsx)(l.J9,{initialValues:S,onSubmit:E,validationSchema:e,children:function(t){var n=t.isValid;return(0,g.jsxs)(x,{autoComplete:"off",onChange:v,children:[(0,g.jsxs)(b,{children:[(0,g.jsx)(w,{type:"text",name:"query",placeholder:r}),(0,g.jsx)(y,{name:"query"})]}),!o&&(0,g.jsx)(Z,{type:"submit",disabled:!n,children:(0,g.jsx)(h.cMR,{size:40})})]})}})}},8251:function(t,n,e){e.r(n),e.d(n,{default:function(){return I}});var r,o,i,c,u,a,s,l,h,f,d,p,m=e(9439),v=e(168),g=e(5867),y=g.ZP.div(r||(r=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),x=g.ZP.section(o||(o=(0,v.Z)(["\n  margin-top: ","px;\n"])),(function(t){return t.theme.space[4]})),b=g.ZP.div(i||(i=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: auto;\n  width: 100%;\n  height: 100%;\n"]))),w=g.ZP.h1(c||(c=(0,v.Z)(["\n  font-size: ","px;\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.fontSizes[4]}),(function(t){return t.theme.space[2]})),Z=e(8001),j=e(6727),P=e(1087),L=e(2791),S=e(4838),E=e(3433),k=g.ZP.ul(u||(u=(0,v.Z)(["\n  background-color: ",";\n  margin-bottom: ","px;\n  width: 100%;\n"])),(function(t){return t.theme.colors.modalBg}),(function(t){return t.theme.space[4]})),z=g.ZP.li(a||(a=(0,v.Z)(["\n  padding-left: ","px;\n  padding-right: ","px;\n  margin-bottom: ","px;\n  border: "," ",";\n  color: ",";\n  border-radius: ",";\n  cursor: pointer;\n"])),(function(t){return t.theme.fontSizes[2]}),(function(t){return t.theme.fontSizes[2]}),(function(t){return t.theme.fontSizes[1]}),(function(t){return t.theme.borders.primary}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.radii.max})),_=g.ZP.ul(s||(s=(0,v.Z)(["\n  margin-bottom: ","px;\n  :nth-child(even) {\n    border-top: "," ",";\n    border-bottom: "," ",";\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.fontSizes[2]}),(function(t){return t.theme.borders.primary}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.borders.primary}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.colors.white})),O=g.ZP.h3(l||(l=(0,v.Z)(["\n  font-size: ","px;\n"])),(function(t){return t.theme.fontSizes[2]})),C=g.ZP.p(h||(h=(0,v.Z)(["\n  font-size: ","px;\n"])),(function(t){return t.theme.fontSizes[3]})),D=g.ZP.p(f||(f=(0,v.Z)(["\n  font-size: ","px;\n"])),(function(t){return t.theme.fontSizes[2]})),F=g.ZP.button(d||(d=(0,v.Z)(["\n  display: block;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  color: ",";\n  transition: color 250ms linear;\n  border: "," ",";\n  border-radius: ",";\n  padding: ","px;\n  margin-bottom: ","px;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.colors.disabled}),(function(t){return t.theme.borders.primary}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.radii.med}),(function(t){return t.theme.fontSizes[1]}),(function(t){return t.theme.fontSizes[2]}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.colors.hover})),N=g.ZP.div(p||(p=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),G=e(3682),T=e(184),q=function(t){var n=t.cities;console.log("cities:",n);var e=(0,L.useState)(!1),r=(0,m.Z)(e,2),o=r[0],i=r[1],c=(0,L.useState)(1),u=(0,m.Z)(c,2),a=u[0],s=u[1];return console.log("departments:",o),(0,T.jsxs)(k,{children:[(0,T.jsx)(O,{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u043d\u043a\u0442"}),n.map((function(t,n){var e,r;return(0,T.jsxs)(z,{children:[(0,T.jsxs)(G.Z,{onClick:function(){s(1),(0,S.aF)(t.Ref).then((function(t){var n=t.data;i(n)})),s((function(t){return t+1}))},children:[(0,T.jsxs)(O,{children:[n+1,". ",t.SettlementTypeDescription," ",t.Description," "]}),(0,T.jsxs)(C,{children:[" ",t.AreaDescription," \u043e\u0431\u043b\u0430\u0441\u0442\u044c"]})]}),0!==o.length&&(0,T.jsxs)(G.Z,{children:[(0,T.jsx)(_,{children:t.Description===(null===(e=o[0])||void 0===e?void 0:e.CityDescription)&&(null===o||void 0===o?void 0:o.map((function(t){return(0,T.jsx)("li",{children:(0,T.jsx)(D,{children:t.Description})},t.SiteKey)})))}),t.Description===(null===(r=o[0])||void 0===r?void 0:r.CityDescription)&&o.length%20===0&&(0,T.jsx)(N,{children:(0,T.jsx)(F,{type:"button",onClick:function(){(0,S.aF)(t.Ref,a).then((function(t){var n=t.data;i((function(t){return[].concat((0,E.Z)(t),(0,E.Z)(n))}))})),s((function(t){return t+1}))},children:"load more"})})]})]},t.CityID)}))]})},A=(0,j.Ry)({query:(0,j.Z_)()}),I=function(){var t,n=(0,L.useState)(!1),e=(0,m.Z)(n,2),r=e[0],o=e[1],i=(0,P.lr)(),c=(0,m.Z)(i,1)[0].get(null!==(t="search")?t:"");return console.log("search:",c),(0,L.useEffect)((function(){c&&(0,S.Pl)(c).then((function(t){return o(t.data)}))}),[c]),(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(x,{children:[(0,T.jsx)(y,{children:(0,T.jsx)(Z.Z,{schema:A,placeholderMsg:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043c\u0456\u0441\u0442\u0430",onChangeActions:true})}),(0,T.jsxs)(b,{children:[(0,T.jsx)(w,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0438\u0445 \u043c\u0456\u0441\u0442:"}),r&&(0,T.jsx)(q,{cities:r}),0===r.length&&(0,T.jsx)(w,{children:"\u0417\u0430 \u0412\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})]})})}}}]);
//# sourceMappingURL=251.2d35d154.chunk.js.map