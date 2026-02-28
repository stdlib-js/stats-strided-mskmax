"use strict";var y=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var g=y(function(K,P){
var p=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-assert-is-positive-zero/dist');function B(r,a,o,x,t,q,b){var u,n,c,s,v,i,e,m,f;for(u=a.data,n=t.data,c=a.accessors[0],s=t.accessors[0],i=x,e=b,f=0;f<r&&s(n,e)!==0;f++)i+=o,e+=q;if(f===r)return NaN;if(v=c(u,i),p(v))return v;for(f+=1,f;f<r;f++)if(i+=o,e+=q,!s(n,e)){if(m=c(u,i),p(m))return m;(m>v||m===v&&A(m))&&(v=m)}return v}P.exports=B
});var l=y(function(L,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=g();function E(r,a,o,x,t,q,b){var u,n,c,s,v,i,e;if(r<=0)return NaN;if(s=j(a),v=j(t),s.accessorProtocol||v.accessorProtocol)return D(r,s,o,x,v,q,b);for(n=x,c=b,e=0;e<r&&t[c]!==0;e++)n+=o,c+=q;if(e===r)return NaN;if(u=a[n],Z(u))return u;for(e+=1,e;e<r;e++)if(n+=o,c+=q,!t[c]){if(i=a[n],Z(i))return i;(i>u||i===u&&C(i))&&(u=i)}return u}O.exports=E
});var w=y(function(Q,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(r,a,o,x,t){return F(r,a,o,R(r,o),x,t,R(r,t))}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=l();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
