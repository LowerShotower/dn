!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!_[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&C()}(e,n),t&&t(e,n)};var n,o=!0,r="48a15858afbfdba48b96",i=1e4,s={},c=[],a=[];function d(e){var t=U[e];if(!t)return N;var o=function(o){return t.hot.active?(U[o]?-1===U[o].parents.indexOf(e)&&U[o].parents.push(e):(c=[e],n=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),c=[]),N(o)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return N[e]},set:function(t){N[e]=t}}};for(var i in N)Object.prototype.hasOwnProperty.call(N,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(o,i,r(i));return o.e=function(e){return"ready"===p&&f("prepare"),y++,N.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===p&&(b[e]||A(e),0===y&&0===g&&C())}},o.t=function(e,t){return 1&t&&(e=o(e)),N.t(e,-2&t)},o}function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:S,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:s[e]};return n=void 0,t}var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var m,h,v,g=0,y=0,b={},w={},_={};function E(e){return+e+""===e?+e:e}function O(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,i=N.p+""+r+".hot-update.json";o.open("GET",i,!0),o.timeout=t,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(o.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;w={},b={},_=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});h={};return A(0),"prepare"===p&&0===y&&0===g&&C(),t});var t}function A(e){_[e]?(w[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=N.p+""+e+"."+r+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function C(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return S(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(E(n));e.resolve(t)}}function S(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,o,i,a,d;function l(e){for(var t=[e],n={},o=t.map(function(e){return{chain:[e],id:e}});o.length>0;){var r=o.pop(),i=r.id,s=r.chain;if((a=U[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<a.parents.length;c++){var d=a.parents[c],l=U[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),u(n[d],[i])):(delete n[d],t.push(d),o.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}t=t||{};var m={},g=[],y={},b=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var w in h)if(Object.prototype.hasOwnProperty.call(h,w)){var O;d=E(w);var A=!1,C=!1,S=!1,j="";switch((O=h[w]?l(d):{type:"disposed",moduleId:w}).chain&&(j="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(A=new Error("Aborted because of self decline: "+O.moduleId+j));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+j));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(A=new Error("Aborted because "+d+" is not accepted"+j));break;case"accepted":t.onAccepted&&t.onAccepted(O),C=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),S=!0;break;default:throw new Error("Unexception type "+O.type)}if(A)return f("abort"),Promise.reject(A);if(C)for(d in y[d]=h[d],u(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(m[d]||(m[d]=[]),u(m[d],O.outdatedDependencies[d]));S&&(u(g,[O.moduleId]),y[d]=b)}var k,x=[];for(o=0;o<g.length;o++)d=g[o],U[d]&&U[d].hot._selfAccepted&&y[d]!==b&&x.push({module:d,errorHandler:U[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)});for(var I,T,M=g.slice();M.length>0;)if(d=M.pop(),a=U[d]){var R={},L=a.hot._disposeHandlers;for(i=0;i<L.length;i++)(n=L[i])(R);for(s[d]=R,a.hot.active=!1,delete U[d],delete m[d],i=0;i<a.children.length;i++){var D=U[a.children[i]];D&&((k=D.parents.indexOf(d))>=0&&D.parents.splice(k,1))}}for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(a=U[d]))for(T=m[d],i=0;i<T.length;i++)I=T[i],(k=a.children.indexOf(I))>=0&&a.children.splice(k,1);for(d in f("apply"),r=v,y)Object.prototype.hasOwnProperty.call(y,d)&&(e[d]=y[d]);var P=null;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(a=U[d])){T=m[d];var H=[];for(o=0;o<T.length;o++)if(I=T[o],n=a.hot._acceptedDependencies[I]){if(-1!==H.indexOf(n))continue;H.push(n)}for(o=0;o<H.length;o++){n=H[o];try{n(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:T[o],error:e}),t.ignoreErrored||P||(P=e)}}}for(o=0;o<x.length;o++){var B=x[o];d=B.module,c=[d];try{N(d)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||P||(P=n),P||(P=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||P||(P=e)}}return P?(f("fail"),Promise.reject(P)):(f("idle"),new Promise(function(e){e(g)}))}var U={};function N(t){if(U[t])return U[t].exports;var n=U[t]={i:t,l:!1,exports:{},hot:l(t),parents:(a=c,c=[],a),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}N.m=e,N.c=U,N.d=function(e,t,n){N.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},N.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},N.t=function(e,t){if(1&t&&(e=N(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(N.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)N.d(n,o,function(t){return e[t]}.bind(null,o));return n},N.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return N.d(t,"a",t),t},N.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},N.p="",N.h=function(){return r},d(6)(N.s=6)}([function(e,t,n){},function(e,t){function n(){this.items=[],this.callbacks=[]}function o(e){var t;for(var n in t=null==e?Array.isArray(e)?[]:{}:Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e)),e)e.hasOwnProperty(n)&&("object"==typeof e[n]?t[n]=o(e[n]):t[n]=e[n]);return t}n.prototype.runCallbacks=function(e){this.callbacks.forEach(function(e){e()})},n.prototype.addCallback=function(e){this.callbacks.push(e)},n.prototype.addItem=function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id===e.id)return this.items[t].addUnit("orderedNumber",e.orderedNumber),void this.runCallbacks();this.items.push(e),this.runCallbacks()},n.prototype.getItem=function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].id===e)return this.items[t];console.log("\nAn item with such id ("+e+") was not found\n")},n.prototype.getAllItems=function(){return this.items},n.prototype.deleteItemById=function(e){for(var t=0;t<this.items.length;t++)this.items[t].id===e&&(this.items.splice(t,1),this.runCallbacks())},n.prototype.deleteAllItems=function(){this.items=[],this.runCallbacks()},n.prototype.calculateTotalSum=function(){return 0!==this.items.length?this.items.reduce(function(e,t,n){return e+t.orderedNumber*t.price},0):0},n.prototype.updateItem=function(e){for(var t=!1,n=0;n<this.items.length;n++)this.items[n].id===e.id&&void 0!==this.items[n]&&(this.items[n]=o(e),t=!0);t&&console.log("\n There is no object with id "+e.id+"\n")},n.prototype.getNumberOfOrderedGoods=function(){var e=0;return this.getAllItems().forEach(function(t){e+=t.orderedNumber}),e},n.create=function(){if(void 0===n.storeCounter&&(n.storeCounter=0),n.storeCounter<1)return n.storeCounter++,new n;console.log("\n!!! A store has already been created")},e.exports=n},function(e,t){function n(e,t,o,r,i,s,c,a){void 0===n.idCounter&&(n.idCounter=0),Object.defineProperties(this,{id:{value:e||n.idCounter,writable:!1,configurable:!1,enumerable:!0}}),this.category=a,this.price=t,this.imgUrl=o,this.amount=r,this.orderedNumber=i>=0?i:0,this.title=s,this.description=c||"",Object.preventExtensions(this),n.idCounter++}function o(e){return function(t,n){void 0===n&&(n=1),["amount","price","orderedNumber"].some(function(e){return e==t})?void 0!==this[t]?e.apply(this,[t,n]):console.log("\n set value of  "+t+" first\n"):console.log("\n"+t+" is not countable or doesnt exist\n")}}n.prototype.addUnit=o(function(e,t){this[e]=this[e]+t,(e="orderedNumber")&&this[e]>this.amount&&(this[e]=this.amount)}),n.prototype.reduceUnit=o(function(e,t){this[e]=this[e]-t<=0?0:this[e]-t}),n.prototype.setDescription=function(e){void 0===e&&(e=""),this.description=e},e.exports=n},function(e,t,n){var o=n(0);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},i=n(4)(o,r);o.locals&&(e.exports=o.locals),e.hot.accept(0,function(){var t=n(0);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,o=0;for(n in e){if(!t||e[n]!==t[n])return!1;o++}for(n in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},function(e,t,n){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),a=null,d=0,l=[],u=n(5);function p(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(y(o.parts[s],t))}else{var c=[];for(s=0;s<o.parts.length;s++)c.push(y(o.parts[s],t));i[o.id]={id:o.id,refs:1,parts:c}}}}function f(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(c):n.push(o[s]={id:s,parts:[c]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertAt.before,n);n.insertBefore(t,r)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return g(t,e.attrs),m(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=d++;n=a||(a=v(t)),o=_.bind(null,n,s,!1),r=_.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),m(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(s),c&&URL.revokeObjectURL(c)}.bind(null,n,t),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return p(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var s=n[r];(c=i[s.id]).refs--,o.push(c)}e&&p(f(e,t),t);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";n.r(t);var o,r={getAllGoods:function(){return new Promise(function(e,t){return Promise.resolve(new Promise(function(e){setTimeout(function(){e(JSON.parse('[\n  {"id":1,\n    "price":134.79,\n    "category":"women",\n    "imgUrl":"/assets/img/goods-w-1.jpg",\n    "amount":1,\n    "title":"WOMENS BURNT ORANGE CASUAL TEE",\n    "description": "Classic casual t-short for women on the move. 100% cotton."\n  },\n  {"id":2,\n    "price":234.79,\n    "category":"women",\n    "imgUrl":"/assets/img/goods-w-2.jpg",\n    "amount":7,\n    "title":"WOMENS BURNT ORANGE CASUAL TEE",\n    "description": "Classic casual t-short for women on the move. 100% cotton."\n   },\n  {"id":3,\n    "price":334.79,\n    "category":"men",\n    "imgUrl":"/assets/img/goods-m-1.jpg",\n    "amount":3,\n    "title":"MENS BURNT GRAY CASUAL TEE",\n    "description": "Classic casual t-short for women on the move. 100% cotton."\n  },\n  {"id":4,\n    "price":434.79,\n    "category":"women",\n    "imgUrl":"/assets/img/goods-w-1.jpg",\n    "amount":2,\n    "title":"WOMENS BURNT RED CASUAL TEE",\n    "description": "Classic casual t-short for women on the move. 0% cotton."\n  },\n  {"id":5,\n    "price":604.79,\n    "category":"men",\n    "imgUrl":"/assets/img/goods-m-1.jpg",\n    "amount":3,\n    "title":"MENS BURNT  CASUAL TEE",\n    "description": "Classic casual t-short for women on the move. 1090% cotton."\n },\n  {"id":6,\n    "price":834.79,\n    "category":"women",\n    "imgUrl":"/assets/img/goods-w-3.jpg",\n    "amount":2,\n    "title":"WOMENS BURNT PINK  TEE",\n    "description": "Classic casual t-short for women on the move. 199% cotton."\n  },\n  {"id":7,\n    "price":224.59,\n    "category":"men",\n    "imgUrl":"/assets/img/goods-m-1.jpg",\n    "amount":1,\n    "title":"WOMENS BURNT ORANGE CASUAL TEE",\n    "description": "Classic casual t-short for men on the move. 1% cotton."\n  },\n  {"id":8,\n    "price":134.79,\n    "category":"women",\n    "imgUrl":"/assets/img/goods-w-2.jpg",\n    "amount":100,\n    "title":"WOMENS BURNT ORANGE CASUAL TEE",\n    "description": "Classic casual t-short for women on the move. 100% cotton."\n  },\n  {"id":9,\n    "price":1231,\n    "category":"men",\n    "imgUrl":"/assets/img/goods-m-1.jpg",\n    "amount":2,\n    "title":"MENS BURNT ORANGE CASUAL TEE",\n    "description": "Classic casual t-short for women on the move. 100% cotton."\n  }\n]'))},300)})).then(function(n){try{return e(n)}catch(e){return t(e)}},t)})}},i=function(){return{generateGoodsItemNode:function(e,t,n,o,r,i,s){void 0===e&&(e=9999),void 0===t&&(t=1.99),void 0===n&&(n="/assets/img/goods-m-2.jpg"),void 0===o&&(o=1),void 0===r&&(r="WOMENS BURNT ORANGE CASUAL TEE "),void 0===i&&(i="Classic casual t-short for women on the move. 100% cotton"),void 0===s&&(s="men");var c=document.createElement("div");return c.dataset.id=e,c.className="goods-block__goods-item goods-item "+s,c.innerHTML='\n <div class="goods-item__inner-wrapper">\n   <div class="goods-item__shadow-box"></div>\n   <img src="'+n+'" alt="good item" class="goods-item__image">\n   <div class="goods-item__price"><span><span class="pound">&pound;</span>'+t+'</span></div>\n   <div class="goods-item__amount"><span>'+o+'</span> left</div>\n   <div class="goods-item__description">\n     <h4 class="goods-item__description-title">'+r+'<span class="goods-item__description-price"><span\n           class="pound">&pound;</span>'+t+'</span></h4>\n     <p class="goods-item__description-text">'+i+'</p>\n     <div class="goods-item__add-item-block">\n       <input type="text" class="goods-item__description-input input" placeholder="1" value="1" onchange=console.log(\'helllo\')>\n       <button class="goods-item__description-button btn"><span><i\n             class="goods-item__description-button-cart-icon cart-icon">&#xe800;</i> add to\n           cart</span></button>\n     </div>\n   </div>\n </div>\n ',c},generateCartGoodsItemNode:function(e){var t=e.id,n=void 0===t?9999:t,o=e.price,r=void 0===o?1.99:o,i=e.imgUrl,s=void 0===i?"/assets/img/goods-m-2.jpg":i,c=(e.amount,e.orderedNumber),a=void 0===c?1:c,d=e.title,l=void 0===d?"MENS BURNT ORANGE CASUAL TEE ":d,u=e.description,p=void 0===u?"Classic casual t-short for men on the move.100 % cotton":u,f=(e.category,document.createElement("li"));return f.dataset.id=n,f.className="cart-block__list-item dropdown-submenu__link-item list__list-item",f.innerHTML='\n    <div class="small-goods-item">\n      <img src='+s+' alt="goods-w-" class="small-goods-item__img">\n      <div class="small-goods-item__description">\n        <h4 class="small-goods-item__description-title">'+l+'</h4>\n        <p class="small-goods-item__description-text">'+p+'</p>\n        <p class="small-goods-item__description-price">Price: <span class="pound">&pound;</span><span>'+r+" </span>x<span> "+a+'</p>\n      </div>\n      <div class="small-goods-item__delete-btn btn">\n        <div class="small-goods-item__delete-cross"></div>\n      </div>\n    </div>\n    ',f}}}(),s=function(){return{insert:function(e,t,n){var o=document.querySelector(t);return n?o.insertBefore(e,o.children[n]):o.appendChild(e)},filter:function(e,t){t.forEach(function(t){var n=t.classList;"all"!==e?n.contains(e)?n.toggle("hidden",!1):n.toggle("hidden",!0):n.toggle("hidden",!1)})},click:function(e,t,n){document.querySelector("."+e).addEventListener("click",function(o){for(var r=o.target,i=o.target;!r.classList.contains(e);){if(r.classList.contains(t))return void n({target:r,parent:i});r=r.parentNode}})},removeAllChildren:function(e){for(var t=document.querySelector(e);t.firstChild;)t.removeChild(t.firstChild)}}}(),c=n(1),a=n.n(c),d=n(2),l=n.n(d),u=function(){var e=[],t=a.a.create();function n(){var e=t.calculateTotalSum();document.querySelector("#totalSum").textContent=e.toFixed(2)}function o(){var e=t.getNumberOfOrderedGoods(),n=document.querySelector("#cartBtn").querySelector(".cart-block__btn-text");n.textContent=0!==e?e:"empty"}function c(){Array.from(document.querySelector(".control-block").querySelectorAll(".control-block__btn")).forEach(function(e){0===t.getAllItems().length?e.disabled=!0:e.disabled=!1})}function d(){document.querySelector("#cartList").innerHTML="",t.getAllItems().map(function(e){var n=i.generateCartGoodsItemNode(e);s.insert(n,".cart-block__list"),n.querySelector(".small-goods-item__delete-btn").addEventListener("click",function(){t.deleteItemById(e.id)})})}return{init:function(){r.getAllGoods().then(function(t){e=t,t.map(function(e){var t=e.id,n=e.price,o=e.imgUrl,r=e.amount,c=e.title,a=e.description,d=e.category,l=i.generateGoodsItemNode(t,n,o,r,c,a,d);s.insert(l,".goods-block")})}),s.click("goods-section__menu","menu__menu-item",function(e){var t=e.target,n=(e.parent,document.querySelector(".goods-block")),o=[].slice.call(n.children),r=t.dataset.filterValue;s.filter(r,o)}),s.click("goods-block","goods-item__description-button",function(n){var o=n.target,r=(n.parent,o.closest(".goods-block__goods-item")),i=r.dataset.id,s=e.find(function(e){return e.id==i}),c=s.id,a=s.category,d=s.price,u=s.imgUrl,p=s.amount,f=s.title,m=s.description,h=parseInt(r.querySelector(".goods-item__description-input").value,10);if(!isNaN(h)&&0!==h){h=h>p?p:h;var v=new l.a(c,d,u,p,h,f,m,a);t.addItem(v)}}),document.querySelector(".delete-all-btn").addEventListener("click",function(e){t.deleteAllItems()}),t.addCallback(o),t.addCallback(d),t.addCallback(c),t.addCallback(n),t.runCallbacks()}}}();(o=Element.prototype).matches=o.matches||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,o.closest=o.closest||function(e){return this?this.matches(e)?this:this.parentElement?this.parentElement.closest(e):null:null},u.init();n(3)}]);