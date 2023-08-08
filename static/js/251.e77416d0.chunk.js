/*! For license information please see 251.e77416d0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksame_it_test=self.webpackChunksame_it_test||[]).push([[251],{8001:function(t,n,e){e.d(n,{Z:function(){return _}});var r,o,i,a,c,u=e(5861),s=e(9439),l=e(5705),h=e(9128),f=e(1087),d=e(168),p=e(5867),m=e(3682),v=(0,p.ZP)(m.Z)(r||(r=(0,d.Z)(["\n  position: absolute;\n  color: ",";\n  text-align: right;\n  font-size: ","px;\n  line-height: calc(16 / 12);\n  right: 25px;\n  top: 50px;\n"])),(function(t){return t.theme.colors.error}),(function(t){return t.theme.fontSizes[0]})),g=e(184),y=function(t){var n=t.name;return(0,g.jsx)(l.Bc,{name:n,render:function(t){return(0,g.jsx)(v,{children:t})}})},x=(0,p.ZP)(l.l0)(o||(o=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: auto;\n  justify-content: center;\n  margin-bottom: ","px;\n  gap: ","px;\n  max-width: 300px;\n  width: 100%;\n\n  @media screen and (min-width: 480px) {\n    grid-template-columns: auto auto;\n  }\n"])),(function(t){return t.theme.space[5]}),(function(t){return t.theme.space[4]})),w=p.ZP.label(i||(i=(0,d.Z)(["\n  position: relative;\n"]))),b=(0,p.ZP)(l.gN)(a||(a=(0,d.Z)(["\n  max-width: 240px;\n  width: 100%;\n  padding: ","px ","px;\n  border-radius: ",";\n  border-color: ",";\n  outline: none;\n  background-color: ",";\n  font-size: ","px;\n\n  @media screen and (min-width: 480px) {\n    width: 300px;\n  }\n\n  :placeholder {\n    font-size: ","px;\n    color: ",";\n  }\n\n  /* &:not(:focus):not(:placeholder-shown):valid {\n    border-color: ",";\n  }\n\n  &:not(:focus):not(:placeholder-shown):invalid {\n    border-color: ",";\n  } */\n"])),(function(t){return t.theme.space[2]}),(function(t){return t.theme.space[3]}),(function(t){return t.theme.radii.med}),(function(t){return t.theme.colors.border}),(function(t){return t.theme.colors.btnBg}),(function(t){return t.theme.fontSizes[3]}),(function(t){return t.theme.fontSizes[2]}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.colors.hover}),(function(t){return t.theme.colors.error})),j=p.ZP.button(c||(c=(0,d.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n\n  &:disabled svg {\n    fill: ",";\n    color: ",";\n  }\n\n  svg {\n    transition: color 300ms ease-in-out;\n    color: ",";\n    transition: color 250ms linear;\n  }\n\n  &:not(:disabled):hover,\n  &:not(:disabled):focus {\n    svg {\n      color: ",";\n    }\n  }\n"])),(function(t){return t.theme.colors.border}),(function(t){return t.theme.colors.disabled}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.colors.hover})),Z=e(2791),L=e(6200);function P(){P=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(S){u=function(t,n,e){return t[n]=e}}function s(t,n,e,o){var i=n&&n.prototype instanceof f?n:f,a=Object.create(i.prototype),c=new E(o||[]);return r(a,"_invoke",{value:b(t,e,c)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function f(){}function d(){}function p(){}var m={};u(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==n&&e.call(g,i)&&(m=g);var y=p.prototype=f.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function o(r,i,a,c){var u=l(t[r],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function b(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=l(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function Z(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new w(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(y),u(y,c,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var E={query:""},_=function(t){var n,e=t.schema,r=t.placeholderMsg,o=t.onChangeActions,i=(0,f.lr)(),a=(0,s.Z)(i,2),c=a[0],d=a[1],p=(0,L.Z)(500),m=c.get(null!==(n="search")?n:"");(0,Z.useEffect)((function(){}),[m]);var v=function(t){t.preventDefault(),o&&p((function(){d(""!==t.target.value.toLowerCase().trim()?{search:t.target.value.toLowerCase().trim()}:{})}))},_=function(){var t=(0,u.Z)(P().mark((function t(n,e){var r,o;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.query,o=e.resetForm,d(""!==r?{search:r}:{}),o();case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}();return(0,g.jsx)(l.J9,{initialValues:E,onSubmit:_,validationSchema:e,children:function(t){var n=t.isValid;return(0,g.jsxs)(x,{autoComplete:"off",onChange:v,children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(b,{type:"text",name:"query",placeholder:r}),(0,g.jsx)(y,{name:"query"})]}),(0,g.jsx)(j,{type:"submit",disabled:!n,children:(0,g.jsx)(h.cMR,{size:40})})]})}})}},8251:function(t,n,e){e.r(n),e.d(n,{default:function(){return O}});var r,o,i,a,c,u,s,l,h=e(9439),f=e(3682),d=e(168),p=e(5867),m=p.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),v=p.ZP.section(o||(o=(0,d.Z)(["\n  margin-top: ","px;\n"])),(function(t){return t.theme.space[4]})),g=p.ZP.div(i||(i=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: auto;\n  width: 100%;\n  height: 100%;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n  }\n"]))),y=p.ZP.h1(a||(a=(0,d.Z)(["\n  font-size: ","px;\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.fontSizes[4]}),(function(t){return t.theme.space[2]})),x=e(8001),w=e(6727),b=e(1087),j=e(2791),Z=e(4838),L=p.ZP.ul(c||(c=(0,d.Z)(["\n  background-color: ",";\n  margin-bottom: ","px;\n  width: 100%;\n"])),(function(t){return t.theme.colors.modalBg}),(function(t){return t.theme.space[4]})),P=p.ZP.li(u||(u=(0,d.Z)(["\n  padding: ","px;\n  display: flex;\n  align-items: baseline;\n  color: ",";\n  border-radius: ",";\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 10px;\n  }\n"])),(function(t){return t.theme.fontSizes[2]}),(function(t){return t.theme.colors.textP}),(function(t){return t.theme.radii.max}),(function(t){return t.theme.colors.btnHover}),(function(t){return t.theme.colors.textP})),E=p.ZP.h3(s||(s=(0,d.Z)(["\n  font-size: ","px;\n"])),(function(t){return t.theme.fontSizes[2]})),_=p.ZP.p(l||(l=(0,d.Z)(["\n  font-size: ","px;\n"])),(function(t){return t.theme.fontSizes[3]})),k=e(184),S=function(t){var n=t.cities,e=(t.departments,t.setDepartments);return console.log("cities:",n),(0,k.jsx)(L,{children:n.map((function(t,n){return(0,k.jsxs)(P,{onClick:function(){(0,Z.aF)(t.Ref).then((function(t){var n=t.data;return e(n)}))},children:[(0,k.jsxs)(E,{children:[" ",n+1,"."]})," ",(0,k.jsxs)(E,{children:[t.Description," "]}),(0,k.jsxs)(_,{children:[" ",t.AreaDescription," \u043e\u0431\u043b\u0430\u0441\u0442\u044c"]})]},n)}))})},z=(0,w.Ry)({query:(0,w.Z_)()}),O=function(){var t,n=(0,j.useState)(!1),e=(0,h.Z)(n,2),r=e[0],o=e[1],i=(0,j.useState)(!1),a=(0,h.Z)(i,2),c=a[0],u=a[1];console.log("departments:",c);var s=(0,b.lr)(),l=(0,h.Z)(s,1)[0].get(null!==(t="search")?t:"");return(0,j.useEffect)((function(){l&&(0,Z.Pl)(l).then((function(t){return o(t.data)}))}),[l]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(v,{children:[(0,k.jsx)(m,{children:(0,k.jsx)(x.Z,{schema:z,placeholderMsg:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043c\u0456\u0441\u0442\u0430",onChangeActions:true})}),(0,k.jsxs)(g,{children:[(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(y,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u0438\u0445 \u043c\u0456\u0441\u0442:"}),r&&(0,k.jsx)(S,{cities:r,departments:c,setDepartments:u}),!r&&(0,k.jsx)(y,{children:"\u0437\u0430 \u0412\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]}),(0,k.jsx)(f.Z,{children:"sgfsgfsdgdf"})]})]})})}}}]);
//# sourceMappingURL=251.e77416d0.chunk.js.map