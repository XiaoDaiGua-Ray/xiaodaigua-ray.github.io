import{i as d}from"./@vue.6f9b3ecc.js";function C(i){let r=".",s="__",m="--",f;if(i){let e=i.blockPrefix;e&&(r=e),e=i.elementPrefix,e&&(s=e),e=i.modifierPrefix,e&&(m=e)}const b={install(e){f=e.c;const l=e.context;l.bem={},l.bem.b=null,l.bem.els=null}};function y(e){let l,n;return{before(t){l=t.bem.b,n=t.bem.els,t.bem.els=null},after(t){t.bem.b=l,t.bem.els=n},$({context:t,props:u}){return e=typeof e=="string"?e:e({context:t,props:u}),t.bem.b=e,`${(u==null?void 0:u.bPrefix)||r}${t.bem.b}`}}}function v(e){let l;return{before(n){l=n.bem.els},after(n){n.bem.els=l},$({context:n,props:t}){return e=typeof e=="string"?e:e({context:n,props:t}),n.bem.els=e.split(",").map(u=>u.trim()),n.bem.els.map(u=>`${(t==null?void 0:t.bPrefix)||r}${n.bem.b}${s}${u}`).join(", ")}}}function P(e){return{$({context:l,props:n}){e=typeof e=="string"?e:e({context:l,props:n});const t=e.split(",").map(o=>o.trim());function u(o){return t.map(x=>`&${(n==null?void 0:n.bPrefix)||r}${l.bem.b}${o!==void 0?`${s}${o}`:""}${m}${x}`).join(", ")}const c=l.bem.els;return c!==null?u(c[0]):u()}}}function _(e){return{$({context:l,props:n}){e=typeof e=="string"?e:e({context:l,props:n});const t=l.bem.els;return`&:not(${(n==null?void 0:n.bPrefix)||r}${l.bem.b}${t!==null&&t.length>0?`${s}${t[0]}`:""}${m}${e})`}}}return Object.assign(b,{cB:(...e)=>f(y(e[0]),e[1],e[2]),cE:(...e)=>f(v(e[0]),e[1],e[2]),cM:(...e)=>f(P(e[0]),e[1],e[2]),cNotM:(...e)=>f(_(e[0]),e[1],e[2])}),b}const $=Symbol("@css-render/vue3-ssr");function M(i,r){return`<style cssr-id="${i}">
${r}
</style>`}function S(i,r){const s=d($,null);if(s===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:m,ids:f}=s;f.has(i)||m!==null&&(f.add(i),m.push(M(i,r)))}const j=typeof document<"u";function N(){if(j)return;const i=d($,null);if(i!==null)return{adapter:S,context:i}}export{C as p,N as u};
