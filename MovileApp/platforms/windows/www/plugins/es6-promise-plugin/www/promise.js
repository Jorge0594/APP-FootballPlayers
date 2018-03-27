﻿cordova.define("es6-promise-plugin.Promise", function(require, exports, module) {
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.2+97478eb6
 */

!function t(e,n,r){function o(u,s){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[u]={exports:{}};e[u][0].call(a.exports,function(t){var n=e[u][1][t];return o(n?n:t)},a,a.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(t){void 0===window.Promise&&t("es6-promise").polyfill()},{"es6-promise":2}],2:[function(t,e,n){(function(r,o){!function(t,r){"object"==typeof n&&"undefined"!=typeof e?e.exports=r():"function"==typeof define&&define.amd?define(r):t.ES6Promise=r()}(this,function(){"use strict";function e(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function n(t){return"function"==typeof t}function i(t){J=t}function u(t){Q=t}function s(){return function(){return r.nextTick(h)}}function c(){return"undefined"!=typeof I?function(){I(h)}:l()}function f(){var t=0,e=new X(h),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function a(){var t=new MessageChannel;return t.port1.onmessage=h,function(){return t.port2.postMessage(0)}}function l(){var t=setTimeout;return function(){return t(h,1)}}function h(){for(var t=0;H>t;t+=2){var e=te[t],n=te[t+1];e(n),te[t]=void 0,te[t+1]=void 0}H=0}function p(){try{var e=t,n=e("vertx");return I=n.runOnLoop||n.runOnContext,c()}catch(r){return l()}}function d(t,e){var n=this,r=new this.constructor(y);void 0===r[ne]&&D(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){return L(o,r,i,n._result)})}else O(n,r,t,e);return r}function v(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(y);return E(n,t),n}function y(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function w(t){try{return t.then}catch(e){return ue.error=e,ue}}function g(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function b(t,e,n){Q(function(t){var r=!1,o=g(n,e,function(n){r||(r=!0,e!==n?E(t,n):j(t,n))},function(e){r||(r=!0,x(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,x(t,o))},t)}function T(t,e){e._state===oe?j(t,e._result):e._state===ie?x(t,e._result):O(e,void 0,function(e){return E(t,e)},function(e){return x(t,e)})}function A(t,e,r){e.constructor===t.constructor&&r===d&&e.constructor.resolve===v?T(t,e):r===ue?(x(t,ue.error),ue.error=null):void 0===r?j(t,e):n(r)?b(t,e,r):j(t,e)}function E(t,n){t===n?x(t,m()):e(n)?A(t,n,w(n)):j(t,n)}function S(t){t._onerror&&t._onerror(t._result),M(t)}function j(t,e){t._state===re&&(t._result=e,t._state=oe,0!==t._subscribers.length&&Q(M,t))}function x(t,e){t._state===re&&(t._state=ie,t._result=e,Q(S,t))}function O(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+oe]=n,o[i+ie]=r,0===i&&t._state&&Q(M,t)}function M(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?L(n,r,o,i):o(i);t._subscribers.length=0}}function P(){this.error=null}function C(t,e){try{return t(e)}catch(n){return se.error=n,se}}function L(t,e,r,o){var i=n(r),u=void 0,s=void 0,c=void 0,f=void 0;if(i){if(u=C(r,o),u===se?(f=!0,s=u.error,u.error=null):c=!0,e===u)return x(e,_()),void 0}else u=o,c=!0;e._state!==re||(i&&c?E(e,u):f?x(e,s):t===oe?j(e,u):t===ie&&x(e,u))}function k(t,e){try{e(function(e){E(t,e)},function(e){x(t,e)})}catch(n){x(t,n)}}function q(){return ce++}function D(t){t[ne]=ce++,t._state=void 0,t._result=void 0,t._subscribers=[]}function F(){return new Error("Array Methods must be provided an Array")}function F(){return new Error("Array Methods must be provided an Array")}function N(t){return new fe(this,t).promise}function U(t){var e=this;return G(t)?new e(function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})}function Y(t){var e=this,n=new e(y);return x(n,t),n}function K(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function W(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(){var t=void 0;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=ae}var B=void 0;B=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var G=B,H=0,I=void 0,J=void 0,Q=function(t,e){te[H]=t,te[H+1]=e,H+=2,2===H&&(J?J(h):ee())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof r&&"[object process]"==={}.toString.call(r),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,te=new Array(1e3),ee=void 0;ee=Z?s():X?f():$?a():void 0===R&&"function"==typeof t?p():l();var ne=Math.random().toString(36).substring(16),re=void 0,oe=1,ie=2,ue=new P,se=new P,ce=0,fe=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(y),this.promise[ne]||D(this.promise),G(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&j(this.promise,this._result))):x(this.promise,F())}return t.prototype._enumerate=function(t){for(var e=0;this._state===re&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===v){var o=w(t);if(o===d&&t._state!==re)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===ae){var i=new n(y);A(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===re&&(this._remaining--,t===ie?x(r,n):this._result[e]=n),0===this._remaining&&j(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;O(t,void 0,function(t){return n._settledAt(oe,e,t)},function(t){return n._settledAt(ie,e,t)})},t}(),ae=function(){function t(e){this[ne]=q(),this._result=this._state=void 0,this._subscribers=[],y!==e&&("function"!=typeof e&&K(),this instanceof t?k(this,e):W())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this,n=e.constructor;return e.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},t}();return ae.prototype.then=d,ae.all=N,ae.race=U,ae.resolve=v,ae.reject=Y,ae._setScheduler=i,ae._setAsap=u,ae._asap=Q,ae.polyfill=z,ae.Promise=ae,ae})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:3}],3:[function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(a===setTimeout)return setTimeout(t,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){v&&p&&(v=!1,p.length?d=p.concat(d):y=-1,d.length&&s())}function s(){if(!v){var t=o(u);v=!0;for(var e=d.length;e;){for(p=d,d=[];++y<e;)p&&p[y].run();y=-1,e=d.length}p=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function f(){}var a,l,h=e.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(t){a=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,d=[],v=!1,y=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||v||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.prependListener=f,h.prependOnceListener=f,h.listeners=function(){return[]},h.binding=function(){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}]},{},[1]);


});