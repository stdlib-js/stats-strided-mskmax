"use strict";var y=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var g=y(function(K,P){
var p=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-assert-is-positive-zero/dist');function B(r,e,u,x,t,q,b){var v,n,c,s,o,i,a,m,f;for(v=e.data,n=t.data,c=e.accessors[0],s=t.accessors[0],i=x,a=b,f=0;f<r&&s(n,a)!==0;f++)i+=u,a+=q;if(f===r)return NaN;if(o=c(v,i),p(o))return o;for(f+=1,f;f<r;f++)if(i+=u,a+=q,!s(n,a)){if(m=c(v,i),p(m))return m;(m>o||m===o&&A(m))&&(o=m)}return o}P.exports=B
});var l=y(function(L,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=g();function E(r,e,u,x,t,q,b){var v,n,c,s,o,i,a;if(r<=0)return NaN;if(s=j(e),o=j(t),s.accessorProtocol||o.accessorProtocol)return D(r,s,u,x,o,q,b);for(n=x,c=b,a=0;a<r&&t[c]!==0;a++)n+=u,c+=q;if(a===r)return NaN;if(v=e[n],Z(v))return v;for(a+=1,a;a<r;a++)if(n+=u,c+=q,!t[c]){if(i=e[n],Z(i))return i;(i>v||i===v&&C(i))&&(v=i)}return v}O.exports=E
});var w=y(function(Q,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=l();function G(r,e,u,x,t){return F(r,e,u,R(r,u),x,t,R(r,t))}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=l();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
