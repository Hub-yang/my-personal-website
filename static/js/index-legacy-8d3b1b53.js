System.register(["./index-legacy-d83b7c41.js"],(function(e,n){"use strict";var t,o,r,u,i,s,c,l,a,f,v,m,d,p,$,g,w,y,b;return{setters:[e=>{t=e.H,o=e.E,r=e.U,u=e.V,i=e.u,s=e.W,c=e.I,l=e.X,a=e.Y,f=e.L,v=e.b,m=e.v,d=e.d,p=e.e,$=e.o,g=e.f,w=e.r,y=e.Z,b=e.l}],execute:function(){var n;e({c:function(e,n=!0){s()?c(e):n?e():l(e)},e:function(e){return e},f:function(e,n=200,t=!1,o=!0){return k(function(e,n=!0,t=!0){let o,r=0,u=!0;const i=()=>{o&&(clearTimeout(o),o=void 0)};return s=>{const c=_(e),l=Date.now()-r;if(i(),c<=0)return r=Date.now(),s();l>c&&(t||!u)?(r=Date.now(),s()):n&&(o=setTimeout((()=>{r=Date.now(),u=!0,i(),s()}),c-l)),t||o||(o=setTimeout((()=>u=!0),c)),u=!1}}(n,t,o),e)},k:function(e,n=200,r={}){const u=t(e.value),i=function(e,n=200,t={}){return k(function(e,n={}){let t,o;return r=>{const u=_(e),i=_(n.maxWait);if(t&&clearTimeout(t),u<=0||void 0!==i&&i<=0)return o&&(clearTimeout(o),o=null),r();i&&!o&&(o=setTimeout((()=>{t&&clearTimeout(t),o=null,r()}),i)),t=setTimeout((()=>{o&&clearTimeout(o),o=null,r()}),u)}}(n,t),e)}((()=>{u.value=e.value}),n,r);return o(e,(()=>i())),u},l:V,r:_,t:function(e){return!!r()&&(u(e),!0)}});const T=e("b","undefined"!=typeof window),h=(e("g",(e=>"boolean"==typeof e)),e("i",(e=>"number"==typeof e)));function _(e){return"function"==typeof e?e():i(e)}function k(e,n){return function(...t){e((()=>n.apply(this,t)),{fn:n,thisArg:this,args:t})}}e("a",(e=>"string"==typeof e)),e("n",(()=>{})),T&&(null==(n=null==window?void 0:window.navigator)?void 0:n.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const E=e("j",(e=>void 0===e));function V(e,n="px"){return e?a(e)?e:h(e)?`${e}${n}`:void 0:""}e("h",(e=>"undefined"!=typeof Element&&e instanceof Element));const x=e("d","el"),A=(e,n,t,o,r)=>{let u=`${e}-${n}`;return t&&(u+=`-${t}`),o&&(u+=`__${o}`),r&&(u+=`--${r}`),u},D=e("u",(e=>{const n=f("namespace",x);return{namespace:n,b:(t="")=>A(n.value,e,t,"",""),e:t=>t?A(n.value,e,"",t,""):"",m:t=>t?A(n.value,e,"","",t):"",be:(t,o)=>t&&o?A(n.value,e,t,o,""):"",em:(t,o)=>t&&o?A(n.value,e,"",t,o):"",bm:(t,o)=>t&&o?A(n.value,e,t,"",o):"",bem:(t,o,r)=>t&&o&&r?A(n.value,e,t,o,r):"",is:(e,...n)=>{const t=!(n.length>=1)||n[0];return e&&t?`is-${e}`:""},cssVar:e=>{const t={};for(const o in e)e[o]&&(t[`--${n.value}-${o}`]=e[o]);return t},cssVarName:e=>`--${n.value}-${e}`,cssVarBlock:t=>{const o={};for(const r in t)t[r]&&(o[`--${n.value}-${e}-${r}`]=t[r]);return o},cssVarBlockName:t=>`--${n.value}-${e}-${t}`}}));var S=e("_",((e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t}));const z=v({size:{type:m([Number,String])},color:{type:String}}),N=d({name:"ElIcon",inheritAttrs:!1}),j=d({...N,props:z,setup(e){const n=e,t=D("icon"),o=p((()=>{const{size:e,color:t}=n;return e||t?{fontSize:E(e)?void 0:V(e),"--color":t}:{}}));return(e,n)=>($(),g("i",y({class:i(t).b(),style:i(o)},e.$attrs),[w(e.$slots,"default")],16))}});e("E",b(S(j,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]])))}}}));
