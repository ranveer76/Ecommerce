"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[673],{673:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var n=r(540),o=r(976),u=r(767);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function l(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(l=function(){return!!t})()}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function p(t){var e=function(t){if("object"!=i(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:e+""}var y=function(t){function e(){var t,r,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];return t=function(t,e,r){return e=a(e),function(t,e){if(e&&("object"==i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,l()?Reflect.construct(e,r||[],a(t).constructor):e.apply(t,r))}(this,e,[].concat(c)),r=t,n="pages",o=new P,(n=p(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(e,t),r=e,(u=[{key:"render",value:function(){return n.createElement("nav",null,n.createElement("ul",null,Object.keys(this.pages.routes).map((function(t){return n.createElement("li",{key:t},n.createElement(o.N_,{to:t},""===t.split("/")[t.split("/").length-1]?"Home":t.split("/")[t.split("/").length-1].charAt(0).toUpperCase()+t.split("/")[t.split("/").length-1].slice(1)))}))))}}])&&c(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,u}(n.Component),b=r(695);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,O(n.key),n)}}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function O(t){var e=function(t){if("object"!=s(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}var j=(0,n.lazy)((function(){return r.e(45).then(r.bind(r,45))})),g=(0,n.lazy)((function(){return r.e(69).then(r.bind(r,69))})),E=(0,n.lazy)((function(){return r.e(954).then(r.bind(r,954))})),P=function(t){function e(){var t,r,o,u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return t=function(t,e,r){return e=d(e),function(t,e){if(e&&("object"==s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,h()?Reflect.construct(e,r||[],d(t).constructor):e.apply(t,r))}(this,e,[].concat(c)),r=t,o="routes",u={"/":n.createElement(j,null),"/about":n.createElement(g,null),"/contact":n.createElement(E,null)},(o=O(o))in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(e,t),r=e,(o=[{key:"render",value:function(){var t;return n.createElement(n.Fragment,null,n.createElement(y,null),n.createElement(b.A,null,n.createElement(u.BV,null,null===(t=Object.entries(this.routes))||void 0===t?void 0:t.map((function(t){var e=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,u,i,c=[],l=!0,a=!1;try{if(u=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=u.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(a)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),r=e[0],o=e[1];return n.createElement(u.qh,{path:r,key:r,element:o})})),n.createElement(u.qh,{path:"*",element:n.createElement("h1",null,"Not Found")}))))}}])&&v(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(n.Component);function S(){return n.createElement("div",null,n.createElement(o.Kd,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0}},n.createElement(P,null)))}}}]);