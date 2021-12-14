(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{818:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(9008);function l(e){return a.createElement("p",null,"navbar top")}function s(e){return a.createElement("p",null,"Footer")}function c(e){return a.createElement("aside",{class:"sidebar sidebar--wrapper sidebar--fixed-left sidebar--full-height sidebar--250"},a.createElement("ul",{class:"sidebar__menu"},a.createElement("li",{class:"sidebar__menu__list sidebar__menu__list--nested"},a.createElement("a",{href:"/helper"},a.createElement("span",null,"Helper")),a.createElement("ul",{class:"sidebar__menu"},a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/helper/color"},a.createElement("span",null,"Color"))),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/helper/typography"},a.createElement("span",null,"Typography"))),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/helper/rounded"},a.createElement("span",null,"Rounded"))),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/helper/padding"},a.createElement("span",null,"Padding"))),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/helper/margin"},a.createElement("span",null,"Margin"))),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/helper/shadow"},a.createElement("span",null,"Shadow"))))),a.createElement("li",{class:"sidebar__menu__list sidebar__menu__list--nested"},a.createElement("a",{href:"/layout"},a.createElement("span",null,"Layouts")),a.createElement("ul",{class:"sidebar__menu"},a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/layout/grid"},a.createElement("span",null,"Grid"))))),a.createElement("li",{class:"sidebar__menu__list sidebar__menu__list--nested"},a.createElement("a",{href:"/component"},a.createElement("span",null,"Component")),a.createElement("ul",{class:"sidebar__menu"},a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/navbar"},a.createElement("span",null,"Navbar"))),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/button"},"Button")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/hero"},"Hero")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/card"},"Card")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/alert"},"Alert")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/accordion"},"Accordion")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/badge"},"Badge")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/breadcumb"},"Breadcumb")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/dropdown"},"Dropdown")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/list"},"List")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/modal"},"Modal")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/nav"},"Nav")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/tab"},"Tab")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/pagination"},"Pagination")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/placeholder"},"Placeholder")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/spiner"},"Spiner")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/component/progress"},"Progress")))),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/Utils"},"Utils")),a.createElement("li",{class:"sidebar__menu__list"},a.createElement("a",{href:"/Utils"},"Icon"))))}function i(e){return a.createElement(a.Fragment,null,a.createElement(r.default,null,a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap-reboot.min.css"}),a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"})),a.createElement(l,null),a.createElement(c,null),a.createElement("main",{class:"push--left-250"},e.children),a.createElement(s,null))}},8e3:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;const r=((a=n(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(l.AmpStateContext))};var a,r=(a=n(7294))&&a.__esModule?a:{default:a},l=n(8e3);function s({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=o,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(7294)),l=(a=n(1585))&&a.__esModule?a:{default:a},s=n(8e3),c=n(5850),i=n(5646);function o(e=!1){const t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const d=["name","httpEquiv","charSet","itemProp"];function u(e,t){return e.reduce(((e,t)=>{const n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(o(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,a={};return r=>{let l=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;const t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?l=!1:t.add(r.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){const t=d[e];if(r.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?l=!1:n.add(t);else{const e=r.props[t],n=a[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),a[t]=n):l=!1}}}return l}}()).reverse().map(((e,n)=>{const a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,r.default.cloneElement(e,t)}return r.default.cloneElement(e,{key:a})}))}var p=function({children:e}){const t=r.useContext(s.AmpStateContext),n=r.useContext(c.HeadManagerContext);return r.default.createElement(l.default,{reduceComponentsToState:u,headManager:n,inAmpMode:i.isInAmpMode(t)},e)};t.default=p},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(7294));class r extends a.Component{constructor(e){super(e),this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=r},2974:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),r=n(818);function l(){return a.createElement(r.Z,null,a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-12 margin-bottom--20"},a.createElement("div",{className:"prettier"},a.createElement("h3",{className:"prettier__title"},"Helper - Margin"),a.createElement("p",null,"Margin dibuat dari ukuran 0 sampai 40 px (pixel) dan bisa dipakai di semua arah dengan panggilan attribute class"),a.createElement("code",null,".margin--","{pixel}"," .margin-","{arah}","--","{pixel}"))),(()=>{const e=[];for(let t=0;t<41;t++)e.push(a.createElement("div",{class:"col-sm-6 col-md-4 col-lg-3"},a.createElement("div",{class:"card shadow--6 rounded--8 padding-top--10 padding-bottom--10 padding-left--10 padding-right--10 margin--"+t},a.createElement("span",null,"margin--",t))));return e})())))}},8294:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/helper/margin",function(){return n(2974)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[888,774,179],(function(){return t=8294,e(e.s=t);var t}));var t=e.O();_N_E=t}]);