"use strict";var p=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var g=p(function(S,P){
var l=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist');function D(r,a,v,x,o,q,b){var u,n,c,f,t,i,e,m,s;for(u=a.data,n=o.data,c=a.accessors[0],f=o.accessors[0],i=x,e=b,s=0;s<r&&f(n,e)!==0;s++)i+=v,e+=q;if(s===r)return NaN;if(t=c(u,i),l(t))return t;for(s+=1,s;s<r;s++)if(i+=v,e+=q,!f(n,e)){if(m=c(u,i),l(m))return m;(m>t||m===t&&C(m))&&(t=m)}return t}P.exports=D
});var y=p(function(T,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),F=g();function G(r,a,v,x,o,q,b){var u,n,c,f,t,i,e;if(r<=0)return NaN;if(f=j(a),t=j(o),f.accessorProtocol||t.accessorProtocol)return F(r,f,v,x,t,q,b);for(n=x,c=b,e=0;e<r&&o[c]!==0;e++)n+=v,c+=q;if(e===r)return NaN;if(u=a[n],Z(u))return u;for(e+=1,e;e<r;e++)if(n+=v,c+=q,!o[c]){if(i=a[n],Z(i))return i;(i>u||i===u&&E(i))&&(u=i)}return u}O.exports=G
});var w=p(function(U,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),H=y();function I(r,a,v,x,o){return H(r,a,v,R(r,v),x,o,R(r,o))}h.exports=I
});var B=p(function(V,A){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),K=y();J(z,"ndarray",K);A.exports=z
});var L=B();module.exports=L;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
