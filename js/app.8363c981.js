(function(){"use strict";var e={6565:function(e,t,o){o.d(t,{t:function(){return n}});var r=o(4161);const n=r.Z.create({baseURL:"https://oenoportfoliobackend.crm:44300/"})},6975:function(e,t,o){var r=o(6369),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagewidth-max",attrs:{id:"app"}},[t("router-view"),t("notifications",{attrs:{group:"oeno"}})],1)},a=[],i=o(1001),l={},u=(0,i.Z)(l,n,a,!1,null,null,null),s=u.exports,d=o(2631),c=o(3822),f=o(5103);r["default"].use(c.ZP);const p=new f.ZP({storage:window.localStorage}),b=new c.ZP.Store({plugins:[p.plugin],state:{token:null,user:null,portfolio:null,retailorder:null,orderData:{},market:"oenohouse"},mutations:{login(e,t){e.token=t.token},storeUserData(e,t){e.user=t.userdata},storePortfolioData(e,t){e.portfolio=t.portfoliodata,e.retailorder=t.retailorderdata},storeOrderData(e,t){e.orderData=t.orderData},storeMarketData(e,t){e.marketData=t.marketData}},actions:{login({commit:e},t){e("login",{token:t.token})},storeUserData({commit:e},t){e("storeUserData",{userdata:t.userdata})},storePortfolioData({commit:e},t){console.log(t.portfoliodata),console.log(t.portfoliodata.investment),console.log(t.portfoliodata.retailOrders),e("storePortfolioData",{portfoliodata:t.portfoliodata.investment,retailorderdata:t.portfoliodata.retailOrders})},storeOrderData({commit:e},t){e("storeOrderData",{orderData:t})},storeMarketData({commit:e},t){e("storeMarketData",{marketData:t})}}});var h=b;r["default"].use(d.ZP);const g=[{path:"/",redirect:{name:"page-portfolio"}},{path:"/login",name:"page-login",component:()=>o.e(22).then(o.bind(o,5022))},{path:"/forgot",name:"page-forgot",component:()=>o.e(564).then(o.bind(o,5564))},{path:"/forgotreset",name:"page-forgotreset",component:()=>o.e(873).then(o.bind(o,4873))},{path:"/portfolio",name:"page-portfolio",component:()=>o.e(512).then(o.bind(o,512)),props:!0},{path:"*",redirect:"/error-404"}],m=new d.ZP({mode:"history",base:"/",routes:g});m.beforeEach(((e,t,o)=>{const r=["/error-404","/login","/terms","/privacy","/forgot","/forgotreset"],n=!r.includes(e.path),a=h.state.token;if(n&&!a)return o("/login");o()}));var v=m,y=o(4809),w=o.n(y),k=o(4951),D=o(7131),x=o.n(D),O=o(4398),P=o.n(O),E=(o(5800),o(2223)),C=(o(7658),o(6565));r["default"].mixin({methods:{currencyFormatter(e,t=!1){const o={significantDigits:2,thousandsSeparator:",",decimalSeparator:".",symbol:""};"number"!==typeof e&&(e=parseFloat(e)),t&&(e+=e*parseFloat("0.02")),e=e.toFixed(o.significantDigits);const[r,n]=e.split(".");return`${o.symbol} ${r.replace(/\B(?=(\d{3})+(?!\d))/g,o.thousandsSeparator)}${o.decimalSeparator}${n}`},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)},updateProfile(){const e={"Content-Type":"application/json",Authorization:"Bearer "+this.$store.state.token};C.t.get("/api/get-profile",{headers:e}).then((e=>{200==e.data.statuscode&&this.$store.dispatch("storeUserData",{userdata:e.data.data.user})})).catch((e=>{401==e.response.status&&(this.$store.dispatch("login",{token:""}),this.$router.push("/login"),this.$store.dispatch("storePortfolioData",{}))}))}}});const S={"t-dropdown":{component:E.TDropdown,props:{classes:"border-2 block w-full rounded text-gray-800"}},"t-input":{component:E.TInput,props:{classes:"border-2 block w-full rounded text-gray-800"}},"t-textarea":{component:E.TTextarea,props:{classes:"border-2 block w-full rounded text-gray-800"}},"t-pagination":{component:E.TPagination,props:{classes:{wrapper:"table border-collapse text-center bg-white mx-auto shadow-sm m-5",element:"w-8 h-8 border border-gray-200 table-cell hover:border-blue-100 ",activeElement:"w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600",disabledElement:"w-8 h-8 border border-gray-200 table-cell",ellipsisElement:"w-8 h-8 border border-gray-200 hidden md:table-cell",activeButton:"bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",disabledButton:"opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",button:"hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",ellipsis:""},variants:{rounded:{wrapper:"bg-white mx-auto text-center flex space-x-2 place-items-center",element:"w-8 h-8 rounded-full",activeElement:"w-8 h-8 rounded-full",disabledElement:"w-8 h-8 rounded-full",ellipsisElement:"w-8 h-8 rounded-full hidden md:inline",activeButton:"border border-black bg-black w-full h-full rounded-full text-white hover:bg-black transition duration-100 ease-in-out focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-50 base-font",disabledButton:"border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out base-font",button:"border border-gray-200 hover:bg-black hover:border-black rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-black focus:outline-none hover:text-white focus:ring-opacity-50  base-font",ellipsis:""}}}}};r["default"].use(P(),S),r["default"].use(w()),r["default"].use(k.ZP),r["default"].use(x()),r["default"].material={...r["default"].material,locale:{...r["default"].material.locale,dateFormat:"dd/MM/yyyy",firstDayOfAWeek:1}},r["default"].use(c.ZP),new r["default"]({router:v,store:h,render:e=>e(s)}).$mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,a){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],a=e[d][2];for(var l=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[u])}))?r.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{21:"5c1d3b78",22:"bc06cf36",512:"3068f467",564:"d9cf030e",815:"fd6737ae",873:"6e0542ea"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{22:"f874da2c",512:"446cbdee",564:"f874da2c",873:"f874da2c"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="oeno-portfolio-website:";o.l=function(r,n,a,i){if(e[r])e[r].push(n);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var c=s[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+a){l=c;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[n];var f=function(t,o){l.onerror=l.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode&&a.parentNode.removeChild(a),n(u)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=function(r){return new Promise((function(n,a){var i=o.miniCssF(r),l=o.p+i;if(t(i,l))return n();e(r,l,null,n,a)}))},n={143:0};o.f.miniCss=function(e,t){var o={22:1,512:1,564:1,873:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=a);var i=o.p+o.u(t),l=new Error,u=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};o.l(i,u,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],l=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(u)var d=u(o)}for(t&&t(r);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},r=self["webpackChunkoeno_portfolio_website"]=self["webpackChunkoeno_portfolio_website"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(6975)}));r=o.O(r)})();
//# sourceMappingURL=app.8363c981.js.map