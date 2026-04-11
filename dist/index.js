"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=n(function(x,a){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),v=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-drangeabs/dist').ndarray;function g(e){var r=e[0];return o(s(r,0),d(r),v(r,0),q(r))}a.exports=g
});var m=require("path").join,f=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),j=t(),i,u=f(m(__dirname,"./native.js"));c(u)?i=j:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
