!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var f=c(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(u)):a.push({identifier:l,updater:m(u,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,b=0;function m(e,t){var n,r,o;if(t.singleton){var i=b++;n=h||(h=d(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=s(e,t),d=0;d<n.length;d++){var l=c(n[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Work+Sans&display=swap);"]),t.push([e.i,"*{box-sizing:border-box;margin:0;padding:0;font-family:'Work Sans', sans-serif}p,span,li{font-family:'Work Sans', sans-serif}.content{width:100%;display:flex}.content h2{font-size:50px}.top-header{width:100%;height:70px;background-color:#F23A2C}#side-bar{position:sticky;top:0;left:0;width:30%;height:100vh;border-right:2px #c2c2c2 solid}#side-bar .top-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;color:white;padding:15px}#side-bar .top-header div{display:flex;flex-direction:row;align-items:center}#side-bar .top-header .left-icons span{font-size:18px;margin-left:4px}#side-bar .top-header .right-icons *:first-child{margin-right:15px}#side-bar #projects .projects-header{padding:15px;display:flex;background:#F2F2F3;justify-content:space-between}#side-bar #projects #list-projects li{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;padding:15px;border-bottom:0.6px solid #f6f6f6}#side-bar #projects #list-projects li:last-child{border-bottom:none}#side-bar #projects #list-projects .li_bullet{display:block;border-radius:100%;width:10px;height:10px;background-color:#85C3F1;margin-right:10px}#main-content{width:70%}#main-content .top-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:15px;color:white}#main-content .top-header span{font-size:18px}#main-content .date{padding:15px;border-bottom:0.6px solid #f6f6f6}#main-content .date b{font-size:18px;color:#8e8e8e}#main-content .date span{font-size:12px;color:#bfbfbf}#main-content .todos .todo{padding:20px 15px;display:flex;flex-direction:row;align-items:center;border-bottom:0.6px solid #f6f6f6}#main-content .todos .todo .check-done{border-radius:100%;border:1px solid #8e8e8e;background:white;width:25px;height:25px;margin-right:20px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r=class{constructor(e){this.pName=e,this.todoList=[]}};n(0);new r("test","test","test","test")}]);