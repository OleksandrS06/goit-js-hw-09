var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var l=n("iQIUW");const r=document.querySelector(".form"),i=r.querySelector("button");console.log(i),console.dir(r.elements);function s(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}i.addEventListener("click",(e=>{e.preventDefault();let o=Number(r.elements.delay.value);const t=Number(r.elements.step.value),n=Number(r.elements.amount.value);for(let e=1;e<=n;e+=1)s(e,o).then((({position:e,delay:o})=>{l.Notify.success(`Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{l.Notify.failure(`Rejected promise ${e} in ${o}ms`)})),o+=t}));
//# sourceMappingURL=03-promises.f5d50a89.js.map