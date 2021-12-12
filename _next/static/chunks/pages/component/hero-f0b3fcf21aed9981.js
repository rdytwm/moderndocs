(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[863],{818:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=n(9008);function s(e){return r.createElement("p",null,"navbar top")}function l(e){return r.createElement("p",null,"Footer")}function c(e){return r.createElement("aside",{class:"sidebar sidebar--wrapper sidebar--fixed-left sidebar--full-height sidebar--250"},r.createElement("ul",{class:"sidebar__menu"},r.createElement("li",{class:"sidebar__menu__list sidebar__menu__list--nested"},r.createElement("a",{href:"/layout"},r.createElement("span",null,"Layouts")),r.createElement("ul",{class:"sidebar__menu"},r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/navbar"},r.createElement("span",null,"Grid"))))),r.createElement("li",{class:"sidebar__menu__list sidebar__menu__list--nested"},r.createElement("a",{href:"/component"},r.createElement("span",null,"Component")),r.createElement("ul",{class:"sidebar__menu"},r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/navbar"},r.createElement("span",null,"Navbar"))),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/button"},"Button")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/hero"},"Hero")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/card"},"Card")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/alert"},"Alert")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/accordion"},"Accordion")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/badge"},"Badge")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/breadcumb"},"Breadcumb")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/dropdown"},"Dropdown")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/list"},"List")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/modal"},"Modal")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/nav"},"Nav")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/tab"},"Tab")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/pagination"},"Pagination")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/placeholder"},"Placeholder")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/spiner"},"Spiner")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/component/progress"},"Progress")))),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/helper"},"Helper")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/Utils"},"Utils")),r.createElement("li",{class:"sidebar__menu__list"},r.createElement("a",{href:"/Utils"},"Icon"))))}function o(e){return r.createElement(r.Fragment,null,r.createElement(a.default,null,r.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap-reboot.min.css"}),r.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"})),r.createElement(s,null),r.createElement(c,null),r.createElement("main",{class:"push--left-250"},e.children),r.createElement(l,null))}},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;const a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=l,t.useAmp=function(){return l(a.default.useContext(s.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},s=n(8e3);function l({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=i,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(r=n(1585))&&r.__esModule?r:{default:r},l=n(8e3),c=n(5850),o=n(5646);function i(e=!1){const t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const m=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce(((e,t)=>{const n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(i(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return a=>{let s=!0,l=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){l=!0;const t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){const t=m[e];if(a.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?s=!1:n.add(t);else{const e=a.props[t],n=r[t]||new Set;"name"===t&&l||!n.has(e)?(n.add(e),r[t]=n):s=!1}}}return s}}()).reverse().map(((e,n)=>{const r=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((t=>e.props.href.startsWith(t)))){const t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})}))}var p=function({children:e}){const t=a.useContext(l.AmpStateContext),n=a.useContext(c.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:d,headManager:n,inAmpMode:o.isInAmpMode(t)},e)};t.default=p},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));class a extends r.Component{constructor(e){super(e),this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=a},5954:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(818);function s(){return r.createElement(a.Z,null,r.createElement("div",{class:"container"},r.createElement("div",{class:"row"},r.createElement("div",{class:"col-12"},r.createElement("h1",null,"Hero"),r.createElement("div",{class:"hero"},r.createElement("h2",{class:"hero__title"},"We Am Hero"),r.createElement("h5",{class:"hero__slug"},"Slug Hero"))))))}},9511:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/hero",function(){return n(5954)}])},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[888,774,179],(function(){return t=9511,e(e.s=t);var t}));var t=e.O();_N_E=t}]);