import{P as _,Q as g,u as d,R as w,b as h,j as E,d as N,m as v,c as V,o as B,n as P,p as D,S,C}from"./index-40f04da4.js";var $;const T=typeof window<"u",X=e=>typeof e=="boolean",A=e=>typeof e=="number",Y=e=>typeof e=="string",Z=()=>{};T&&(($=window==null?void 0:window.navigator)==null?void 0:$.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function I(e){return typeof e=="function"?e():d(e)}function z(e,s){function a(...o){e(()=>s.apply(this,o),{fn:s,thisArg:this,args:o})}return a}function F(e,s=!0,a=!0){let o=0,r,c=!0;const f=()=>{r&&(clearTimeout(r),r=void 0)};return p=>{const l=I(e),m=Date.now()-o;if(f(),l<=0)return o=Date.now(),p();m>l&&(a||!c)?(o=Date.now(),p()):s&&(r=setTimeout(()=>{o=Date.now(),c=!0,f(),p()},l-m)),!a&&!r&&(r=setTimeout(()=>c=!0,l)),c=!1}}function j(e){return e}function k(e){return _()?(g(e),!0):!1}function ee(e,s=200,a=!1,o=!0){return z(F(s,a,o),e)}const U=e=>e===void 0,te=e=>typeof Element>"u"?!1:e instanceof Element;function b(e,s="px"){if(!e)return"";if(w(e))return e;if(A(e))return`${e}${s}`}const O="el",G="is-",u=(e,s,a,o,r)=>{let c=`${e}-${s}`;return a&&(c+=`-${a}`),o&&(c+=`__${o}`),r&&(c+=`--${r}`),c},L=e=>{const s=h("namespace",O);return{namespace:s,b:(t="")=>u(s.value,e,t,"",""),e:t=>t?u(s.value,e,"",t,""):"",m:t=>t?u(s.value,e,"","",t):"",be:(t,n)=>t&&n?u(s.value,e,t,n,""):"",em:(t,n)=>t&&n?u(s.value,e,"",t,n):"",bm:(t,n)=>t&&n?u(s.value,e,t,"",n):"",bem:(t,n,i)=>t&&n&&i?u(s.value,e,t,n,i):"",is:(t,...n)=>{const i=n.length>=1?n[0]:!0;return t&&i?`${G}${t}`:""},cssVar:t=>{const n={};for(const i in t)t[i]&&(n[`--${s.value}-${i}`]=t[i]);return n},cssVarName:t=>`--${s.value}-${t}`,cssVarBlock:t=>{const n={};for(const i in t)t[i]&&(n[`--${s.value}-${e}-${i}`]=t[i]);return n},cssVarBlockName:t=>`--${s.value}-${e}-${t}`}};var Q=(e,s)=>{const a=e.__vccOpts||e;for(const[o,r]of s)a[o]=r;return a};const R=E({size:{type:N([Number,String])},color:{type:String}}),W=v({name:"ElIcon",inheritAttrs:!1}),q=v({...W,props:R,setup(e){const s=e,a=L("icon"),o=V(()=>{const{size:r,color:c}=s;return!r&&!c?{}:{fontSize:U(r)?void 0:b(r),"--color":c}});return(r,c)=>(B(),P("i",S({class:d(a).b(),style:d(o)},r.$attrs),[D(r.$slots,"default")],16))}});var x=Q(q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const se=C(x);export{se as E,Q as _,Y as a,j as b,T as c,ee as d,O as e,X as f,te as g,U as h,A as i,Z as n,I as r,k as t,L as u};