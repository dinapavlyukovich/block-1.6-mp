(()=>{var e={483:function(){!function(){"use strict";function e(e){var t=!0,n=!1,s=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!i[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function c(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function a(n){n.metaKey||n.altKey||n.ctrlKey||(o(e.activeElement)&&c(e.activeElement),t=!0)}function u(e){t=!1}function m(e){o(e.target)&&(t||r(e.target))&&c(e.target)}function p(e){o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(s),s=window.setTimeout((function(){n=!1}),100),d(e.target))}function v(e){"hidden"===document.visibilityState&&(n&&(t=!0),b())}function b(){document.addEventListener("mousemove",f),document.addEventListener("mousedown",f),document.addEventListener("mouseup",f),document.addEventListener("pointermove",f),document.addEventListener("pointerdown",f),document.addEventListener("pointerup",f),document.addEventListener("touchmove",f),document.addEventListener("touchstart",f),document.addEventListener("touchend",f)}function l(){document.removeEventListener("mousemove",f),document.removeEventListener("mousedown",f),document.removeEventListener("mouseup",f),document.removeEventListener("pointermove",f),document.removeEventListener("pointerdown",f),document.removeEventListener("pointerup",f),document.removeEventListener("touchmove",f),document.removeEventListener("touchstart",f),document.removeEventListener("touchend",f)}function f(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,l())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",v,!0),b(),e.addEventListener("focus",m,!0),e.addEventListener("blur",p,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},69:(e,t,n)=>{"use strict";e.exports=n.p+"img/Group.8988ae4be0a7f98a8573.svg"},305:(e,t,n)=>{"use strict";e.exports=n.p+"img/acer.11bfc296d185693bc12c.svg"},178:(e,t,n)=>{"use strict";e.exports=n.p+"img/apple.29b62369ef8d5fa39cae.svg"},657:(e,t,n)=>{"use strict";e.exports=n.p+"img/bosch.5addb0eb95c9d51a94c1.svg"},109:(e,t,n)=>{"use strict";e.exports=n.p+"img/burger-exit.f4159b4fd6408dcb61e5.svg"},825:(e,t,n)=>{"use strict";e.exports=n.p+"img/burger.098abb1599d51b6ef04d.svg"},774:(e,t,n)=>{"use strict";e.exports=n.p+"img/call.b3f435f7317e70d7065b.svg"},294:(e,t,n)=>{"use strict";e.exports=n.p+"img/chat.e0f6fe5aeab076468934.svg"},905:(e,t,n)=>{"use strict";e.exports=n.p+"img/checkstatus.65c0d421785a09435d9b.svg"},36:(e,t,n)=>{"use strict";e.exports=n.p+"img/divider.c81a7bec2ace61cd0921.svg"},206:(e,t,n)=>{"use strict";e.exports=n.p+"img/go.e31ada0fec41679bf985.svg"},462:(e,t,n)=>{"use strict";e.exports=n.p+"img/hp.113b7f84d3691fa81572.svg"},866:(e,t,n)=>{"use strict";e.exports=n.p+"img/lenovo.1e513a36e7cf99c71fdd.svg"},927:(e,t,n)=>{"use strict";e.exports=n.p+"img/mainimage.87c580fbeaccfc9e354a.png"},173:(e,t,n)=>{"use strict";e.exports=n.p+"img/profile.f53f4d75111616e46fd7.svg"},143:(e,t,n)=>{"use strict";e.exports=n.p+"img/repair.1a391734d700e965015a.svg"},838:(e,t,n)=>{"use strict";e.exports=n.p+"img/samsung.fea0b53c03720569a9ce.svg"},226:(e,t,n)=>{"use strict";e.exports=n.p+"img/search.f28d22b54286cb1c12ea.svg"},519:(e,t,n)=>{"use strict";e.exports=n.p+"img/sony.0101c526fb19afd25339.svg"},979:(e,t,n)=>{"use strict";e.exports=n.p+"img/viewsonic.41ed4086b78d347ac47b.svg"}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{"use strict";n(483);var e=n(370),t=n.n(e),s=new URL(n(69),n.b),i=new URL(n(226),n.b),o=new URL(n(774),n.b),r=new URL(n(294),n.b),c=new URL(n(173),n.b),d=new URL(n(109),n.b),a=new URL(n(825),n.b),u=new URL(n(36),n.b),m=new URL(n(143),n.b),p=new URL(n(905),n.b),v=new URL(n(927),n.b),b=new URL(n(866),n.b),l=new URL(n(206),n.b),f=new URL(n(838),n.b),g=new URL(n(178),n.b),w=new URL(n(979),n.b),L=new URL(n(657),n.b),E=new URL(n(462),n.b),h=new URL(n(305),n.b),x=new URL(n(519),n.b);t()(s),t()(i),t()(o),t()(r),t()(c),t()(d),t()(a),t()(u),t()(m),t()(p),t()(v),t()(b),t()(l),t()(f),t()(g),t()(w),t()(L),t()(E),t()(h),t()(x);new Swiper(".swiper-container-1",{pagination:{el:".swiper-pagination-1",clickable:!0},slidesPerView:1.2}),new Swiper(".swiper-container-2",{pagination:{el:".swiper-pagination-2",clickable:!0},slidesPerView:1.2}),new Swiper(".swiper-container-3",{pagination:{el:".swiper-pagination-3",clickable:!0},slidesPerView:1.2})})()})();