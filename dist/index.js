"use strict";var y=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var g=y(function(K,P){
var p=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-assert-is-positive-zero/dist');function B(r,a,n,q,o,x,b){var u,t,c,s,v,i,e,m,f;for(u=a.data,t=o.data,c=a.accessors[0],s=o.accessors[0],i=q,e=b,f=0;f<r&&s(t,e)!==0;f++)i+=n,e+=x;if(f===r)return NaN;if(v=c(u,i),p(v))return v;for(f+=1,f;f<r;f++)if(i+=n,e+=x,!s(t,e)){if(m=c(u,i),p(m))return m;(m>v||m===v&&A(m))&&(v=m)}return v}P.exports=B
});var l=y(function(L,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=g();function E(r,a,n,q,o,x,b){var u,t,c,s,v,i,e;if(r<=0)return NaN;if(s=j(a),v=j(o),s.accessorProtocol||v.accessorProtocol)return D(r,s,n,q,v,x,b);for(t=q,c=b,e=0;e<r&&o[c]!==0;e++)t+=n,c+=x;if(e===r)return NaN;if(u=a[t],Z(u))return u;for(e+=1,e;e<r;e++)if(t+=n,c+=x,!o[c]){if(i=a[t],Z(i))return i;(i>u||i===u&&C(i))&&(u=i)}return u}O.exports=E
});var w=y(function(Q,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(r,a,n,q,o){return F(r,a,n,R(r,n),q,o,R(r,o))}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=l();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
