var X=Object.defineProperty,Q=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var I=(e,t,i)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,y=(e,t)=>{for(var i in t||(t={}))ee.call(t,i)&&I(e,i,t[i]);if(P)for(var i of P(t))te.call(t,i)&&I(e,i,t[i]);return e},w=(e,t)=>Q(e,Y(t));import{j as L,P as a,a as re,r as m,u as D,R as _,C as M,c as ae,b as ie,d as se}from"./vendor.7b03a7bc.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}};oe();const r=L.exports.jsx,n=L.exports.jsxs,F=L.exports.Fragment;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function q({id:e,name:t,options:i,label:o,onChange:s}){return n("div",{className:"relative flex items-center text-complementary",children:[o&&r("span",{children:o}),r("select",{id:e,name:t,className:"relative pr-4 bg-transparent appearance-none z-10",onChange:s,children:i.map(c=>r("option",{value:c.value,children:c.label},c.id))}),r("i",{className:"icon-arrow_bottom text-xs leading-none absolute right-0 z-0"})]})}q.propTypes={id:a.string.isRequired,name:a.string.isRequired,options:a.arrayOf(a.exact({id:a.string,value:a.string,label:a.string})).isRequired,label:a.string,onChange:a.func};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function O({id:e,name:t,value:i,label:o,isChecked:s,onChange:c,hasReverseLayout:h,hasBoldLabel:l,defaultColor:d,children:f}){return n("div",{className:`flex items-center ${h&&"flex-row-reverse"}`,children:[r("input",{id:`checkbox-${e}`,type:"checkbox",name:t,value:i,defaultChecked:s,onChange:c,className:"w-5 h-5 bg-white appearance-none border-2 border-gray-opacity-2 focus:ring-0 checked:bg-complementary peer"}),r("label",{htmlFor:`checkbox-${e}`,className:`${d||"text-gray-opacity-4"} peer-checked:text-complementary ${h?"pr-2.5":"pl-2.5"} ${l?"text-sm font-bold tracking-wider":"text-base"}`,dangerouslySetInnerHTML:{__html:f||o}})]})}O.propTypes={id:a.string,name:a.string,value:a.oneOfType([a.string,a.number]),label:a.string,isChecked:a.bool,onChange:a.func,hasReverseLayout:a.bool,hasBoldLabel:a.bool,defaultColor:a.string,children:a.any};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function j({title:e,filters:t,defaultColor:i,onFilterChange:o,children:s}){return n("div",{className:"mb-7.5",children:[r("h4",{className:"text-sm font-bold uppercase leading-5 tracking-wider",children:e}),s||(()=>t&&r("ul",{className:"pt-0.5",children:t.map(h=>r("div",{className:"mt-2.5",children:r(O,w(y({},h),{defaultColor:i,onChange:l=>{o(h,l.target.checked)}}))},h.id))}))()]})}j.propTypes={title:a.string,filters:a.arrayOf(a.object),defaultColor:a.string,onFilterChange:a.func,children:a.any};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function N({id:e,brand:t,title:i,price:o,originalPrice:s,extra:c,stars:h,discountLabel:l,image:d,isFavorite:f,toggleFavorite:C,isSelected:T,toggleCompare:k}){const E=()=>{k(e)},x=()=>{C(e)};let g=Array(5).fill(!1);return g=g.fill(!0,0,h),n("div",{children:[n("div",{className:"relative rounded-sm-plus bg-gray-opacity-1",children:[l&&r("div",{className:"absolute top-3.75 left-0 bg-secondary text-white rounded-tr-sm-plus rounded-br-sm-plus px-2.5 py-1.25 text-sm font-bold",children:l}),r("img",{src:d,className:"block w-full h-auto max-w-none"}),r("button",{className:"absolute top-3.75 right-3.75",type:"button",onClick:x,children:f?r("i",{className:"icon-preferiti_filled text-tertiary text-lg align-middle"}):r("i",{className:"icon-preferiti text-gray-opacity-3 text-lg align-middle"})})]}),r("h4",{className:"mt-2.5 text-sm font-bold uppercase tracking-wider",children:t}),r("p",{className:"text-base",children:i}),n("div",{className:s?"text-secondary":"text-primary",children:[n("div",{className:"flex items-baseline my-0.5",children:[r("span",{className:"text-lg font-bold",children:o}),s&&r("del",{className:"ml-2.5 text-sm font-bold opacity-30 text-black",children:s})]}),r("p",{className:"text-sm font-bold",children:c})]}),n("div",{className:"flex items-center justify-between mt-2.5 pt-2 pb-1 border-t border-gray-opacity-2",children:[r("div",{className:"flex text-sm text-primary",children:g.map((p,A)=>r("i",{className:`mr-1 ${p?"icon-rating-on":"icon-rating-off"}`},A))}),r("div",{children:r(O,{id:`checkbox-${e}`,name:"compare-product-chec",label:"CONFRONTA",checked:T,hasReverseLayout:!0,hasBoldLabel:!0,onChange:E})})]})]})}N.propTypes={id:a.string,brand:a.string,title:a.string,price:a.string,originalPrice:a.string,extra:a.string,stars:a.number,discountLabel:a.string,image:a.string,isFavorite:a.bool,toggleFavorite:a.func,isSelected:a.bool,toggleCompare:a.func};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ce=(e,t)=>[...new Set(t.map(o=>o[e]))].sort().map((o,s)=>({id:`${e}_${s}`,name:`filter_${e}`,value:o,label:o}));globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};var V=(e,t,i)=>{const o={available:()=>i.isAvailable,promo:()=>i.discountLabel&&i.discountLabel.length>0};switch(e){case"chooseFor":return o[t]();case"reviews":return i.stars===t;default:return i[e]===t}};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const ne=(e,{label:t,value:i},o)=>{const s=o.filter(c=>V(e,i,c)).length;return`${t} (${s})`};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function Z({filters:e,productsList:t,onFilterChange:i}){return n("form",{children:[n(j,{title:"CATEGORIE",children:[r("ul",{children:n("li",{className:"mt-2.5",children:[r("a",{href:"#",className:"text-base text-complementary",children:"Riscaldamento"}),n("ul",{className:"ml-5",children:[r("li",{className:"mt-2.5",children:r("a",{href:"#",children:"Casa e Acqua"})}),r("li",{className:"mt-2.5",children:r("a",{href:"#",children:"Casa"})}),r("li",{className:"mt-2.5",children:r("a",{href:"#",children:"Acqua"})})]})]})}),r("hr",{className:"border-0 border-b border-gray-opacity-2 mt-7.5"})]}),e.map(o=>{const s=y({},o),c=s.id;return typeof s.filters=="undefined"&&(s.filters=ce(c,t)),s.filters=s.filters.map(h=>w(y({},h),{label:ne(c,h,t)})),r(j,w(y({},s),{onFilterChange:i}),c)})]})}Z.propTypes={filters:a.arrayOf(a.object),productsList:a.arrayOf(N),onFilterChange:a.func};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const S=globalThis.jotaiAtomCache.get("/Users/vale/Dropbox/Projects/EnelX Products List React/enelx-products-list-react/src/js/store/atoms.js/compareListAtom",re([]));S.debugLabel="compareListAtom";globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const R="favoriteProducts";function G({productsList:e}){const[t,i]=m.exports.useState(()=>JSON.parse(localStorage.getItem(R))||[]),[o,s]=D(S),c=m.exports.useCallback(l=>{i(d=>d.includes(l)?[...d].filter(f=>f!==l):[...d,l])},[]),h=m.exports.useCallback(l=>{s(d=>d.includes(l)?[...d].filter(f=>f!==l):[...d,l])},[s]);return m.exports.useEffect(()=>{localStorage.setItem(R,JSON.stringify(t))},[t]),r("div",{className:"grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7.5",children:e.map(l=>{const d=t.includes(l.id),f=o.includes(l.id);return r(N,w(y({},l),{isFavorite:d,toggleFavorite:c,isSelected:f,toggleCompare:h}),l.id)})})}G.propTypes={productsList:a.arrayOf(N)};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function le(){return n("div",{className:"mt-20 py-7.5 border-t border-gray-opacity-2 flex items-baseline justify-between text-gray-opacity-4",children:[n("a",{href:"#",className:"flex items-baseline cursor-default",children:[r("i",{className:"icon-arrow-left text-xs mr-2"}),"Prev"]}),n("div",{className:"flex items-center text-sm font-bold tracking-wider",children:[r("a",{href:"#",className:"w-9 h-9 rounded-full flex items-center justify-center bg-complementary text-white",children:"1"}),r("a",{href:"#",className:"w-9 h-9 rounded-full flex items-center justify-center hover:underline",children:"2"}),r("a",{href:"#",className:"w-9 h-9 rounded-full flex items-center justify-center hover:underline",children:"3"})]}),n("a",{href:"#",className:"flex items-baseline text-complementary",children:["Next",r("i",{className:"icon-arrow-right text-xs ml-2"})]})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function U({type:e,label:t,disabled:i,onClick:o,children:s}){return r("button",{type:e,disabled:i,onClick:o,className:"border-2 border-white px-10 py-3.5 rounded-full text-sm font-bold uppercase leading-none tracking-wider transition ease-in-out hover:bg-white hover:text-black disabled:opacity-40 hover:disabled:bg-inherit hover:disabled:text-inherit",children:s||t})}U.propTypes={type:a.string,label:a.string,disabled:a.bool,onClick:a.func,children:a.any};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const J=({show:e})=>r(M,{in:e,timeout:300,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:"opacity-0",enterDone:"opacity-50",exit:"opacity-0"},children:r("div",{className:"transition duration-300 bg-black fixed inset-0 z-40"})});J.propTypes={show:a.bool};const W=({show:e,onClose:t,children:i})=>r(M,{in:e,timeout:300,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:"opacity-0",enterDone:"opacity-100",exit:"opacity-0"},children:r("div",{className:"flex transition duration-300 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0",children:r("div",{className:"relative px-4 w-full max-w-2xl h-full md:h-auto",children:r("div",{className:"relative bg-white rounded-lg shadow",children:n("div",{className:"p-6 flex justify-between items-center",children:[i,r("button",{type:"button",className:"bg-transparent text-sm p-1.5 ml-auto inline-flex items-center",onClick:t,children:r("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:r("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})})})})});W.propTypes={show:a.bool,onClose:a.func,children:a.any};function K({show:e,onClose:t,children:i}){const o=document.body,s=document.querySelector("#overlays");return m.exports.useEffect(()=>{o.classList.toggle("overflow-hidden",e)},[e]),n(F,{children:[_.createPortal(r(W,{show:e,onClose:t,children:i}),s),_.createPortal(r(J,{show:e}),s)]})}K.propTypes={show:a.bool,onClose:a.func,children:a.any};globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const H=["Seleziona altri 2 prodotti per confrontarli","Seleziona ancora un prodotto per un confronto pi\xF9 dettagliato","Confronta i modelli selezionati"];function he(){const[e,t]=m.exports.useState(!1),[i]=D(S),o=i.length<3,s=H.length-1,c=o?i.length-1:s,h=()=>{t(!0)},l=()=>{t(!1)};return n(F,{children:[r(M,{in:i.length>0,timeout:150,mountOnEnter:!0,unmountOnExit:!0,classNames:{enter:"translate-y-full",enterDone:"translate-y-0",exit:"translate-y-full"},children:n("div",{className:"fixed bottom-0 left-0 w-full px-7.5 py-2.5 bg-complementary text-white flex flex-col sm:flex-row items-center justify-between z-30 shadow-md-plus transition ease-in-out",children:[r("div",{className:"text-base sm:text-lg leading-6.5 mb-4 sm:mb-0 sm:mr-4",children:H[c]}),r(U,{label:"CONFRONTA",onClick:h,disabled:o})]})}),r(K,{show:e,onClose:l,children:n("div",{children:[r("h3",{className:"text-lg font-bold text-complementary",children:"COMPARE PRODUCTS"}),r("p",{children:i.toString()})]})})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const $=e=>e.split(" ")[0].replace(".","").replace(",",".")*1;globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const z=(e,t,i)=>{const o=$(t.price),s=$(i.price);switch(e){case"reviewsBest":return t.stars<i.stars;case"priceLow":return o>s;case"priceHigh":return o<s;default:return 0}};var B=[{id:"1",value:"reviewsBest",label:"migliori recensioni"},{id:"2",value:"priceLow",label:"prezzo pi\xF9 basso"},{id:"3",value:"priceHigh",label:"prezzo pi\xF9 alto"}],de=[{id:"chooseFor",title:"SCEGLI PER",filters:[{id:"chooseFor_1",name:"filter_chooseFor",value:"available",label:"Disponibili"},{id:"chooseFor_2",name:"filter_chooseFor",value:"promo",label:"In promozione"}]},{id:"brand",title:"MARCHE"},{id:"type",title:"TIPOLOGIA"},{id:"supply",title:"ALIMENTAZIONE"},{id:"power",title:"POTENZA NOMINALE (kW)"},{id:"usage",title:"UTILIZZO"},{id:"reviews",title:"RECENSIONI",defaultColor:"text-primary",filters:[{id:"reviews_5",name:"filter_reviews",value:5,label:"<i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i>"},{id:"reviews_4",name:"filter_reviews",value:4,label:"<i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-off'></i>"},{id:"reviews_3",name:"filter_reviews",value:3,label:"<i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-off'></i><i class='mr-1.5 text-sm icon-rating-off'></i>"},{id:"reviews_2",name:"filter_reviews",value:2,label:"<i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-off'></i><i class='mr-1.5 text-sm icon-rating-off'></i><i class='mr-1.5 text-sm icon-rating-off'></i>"},{id:"reviews_1",name:"filter_reviews",value:1,label:"<i class='mr-1.5 text-sm icon-rating-on'></i><i class='mr-1.5 text-sm icon-rating-off'></i><i class='mr-1.5 text-sm icon-rating-off'></i><i class='mr-1.5 text-sm icon-rating-off'></i><i class='mr-1.5 text-sm icon-rating-off'></i>"}]}];globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};function ue(){const[e,t]=m.exports.useState(!0),[i,o]=m.exports.useState([]),[s,c]=m.exports.useState([]),[h,l]=m.exports.useState([]),[d,f]=m.exports.useState(B[0].value),[C,T]=m.exports.useState();return m.exports.useEffect(()=>{(async()=>{const g=await fetch("/enelx-products-list-react/data/productsList.json");if(!g.ok)throw new Error("Something went wrong!");const v=await g.json();v.sort(z.bind(null,d)),o(v),c(v),t(!1)})().catch(g=>{t(!1),T(g.message)})},[]),m.exports.useEffect(()=>{c(()=>i.filter(x=>h.length===0?i:h.map(u=>w(y({},u),{values:[u.value]})).reduce((u,b)=>{const p=u.find(A=>A.name===b.name);return p?(p.values=[...new Set(p.values.concat(b.values))],u):(u.push(b),u)},[]).every(u=>{const b=u.name;return u.values.some(p=>V(b,p,x))})).sort(z.bind(null,d)))},[h,d]),n("main",{className:"container mt-10 mb-26",children:[r("div",{className:"flex",children:r("div",{className:"ml-auto",children:r(q,{id:"sort-products-dropdown",name:"sort-products-dropdown",options:B,label:"Ordina per:",onChange:x=>{f(x.target.value)}})})}),n("div",{className:"flex mt-5",children:[r("div",{className:"w-[292px] hidden md:block shrink-0 pr-5 mr-7.5 border-r border-gray-opacity-2",children:r(Z,{filters:de,productsList:i,onFilterChange:({name:x,value:g},v)=>{const u=x.split("_")[1];l(b=>{if(v){const p=[...b];return p.push({name:u,value:g}),p}return b.filter(p=>p.name!==u||p.value!==g)})}})}),n("div",{className:"flex-1",children:[e&&r("div",{className:"text-center",children:"Caricamento in corso..."}),C&&r("div",{className:"text-center text-red-600 font-bold",children:C}),!e&&!C&&n(F,{children:[r(G,{productsList:s}),r(le,{})]})]})]}),r(he,{})]})}globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};const me=document.getElementById("root"),pe=ae(me);pe.render(r(ie.StrictMode,{children:r(se,{children:r(ue,{})})}));