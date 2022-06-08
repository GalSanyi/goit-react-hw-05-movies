"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{7765:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var r=n(885),o=n(4390),a="MoviePage_d1__kUF3w",i="MoviePage_d2__eEjWf",s=n(2791);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=n(907);var p=n(181);function m(e){return function(e){if(Array.isArray(e))return(0,d.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,p.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function g(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r}var y=["theme","type"],h=["delay","staleId"];function b(e){return"number"==typeof e&&!isNaN(e)}function T(e){return"boolean"==typeof e}function E(e){return"string"==typeof e}function O(e){return"function"==typeof e}function _(e){return E(e)||O(e)?e:null}function C(e){return 0===e||e}function I(e){return(0,s.isValidElement)(e)||E(e)||O(e)||b(e)}var w={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},L={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function x(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,u=e.collapseDuration,c=void 0===u?300:u;return function(e){var r=e.children,a=e.position,u=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,p=o?t+"--"+a:t,m=o?n+"--"+a:n,v=(0,s.useRef)(),g=(0,s.useRef)(0);function y(e){if(e.target===f.current){var t=f.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",y),t.removeEventListener("animationcancel",y),0===g.current&&"animationcancel"!==e.type&&(t.className=v.current)}}function h(){var e=f.current;e.removeEventListener("animationend",h),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,c):l()}return(0,s.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+p,e.addEventListener("animationend",y),e.addEventListener("animationcancel",y)}()}),[]),(0,s.useEffect)((function(){d||(u?h():function(){g.current=1;var e=f.current;e.className+=" "+m,e.addEventListener("animationend",h)}())}),[d]),s.createElement(s.Fragment,null,r)}}function k(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var P={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,m([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},N=function(e){var t=e.theme,n=e.type,r=f(e,y);return s.createElement("svg",l({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))},R={info:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(N,l({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function S(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,s.useState)([]),a=(0,r.Z)(o,2),i=a[0],u=a[1],c=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,d=function(e){return-1!==i.indexOf(e)},p=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return l.get(e)}}).current;function v(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function g(e){u((function(t){return C(e)?t.filter((function(t){return t!==e})):[]}))}function y(){var e=p.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function w(e,t){var r=t.delay,o=t.staleId,a=f(t,h);if(I(e)&&!function(e){return!c.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,u=a.updateId,d=a.data,m=p.props,v=function(){return g(i)},w=null==u;w&&p.count++;var x,N,S={toastId:i,updateId:u,data:d,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||m.theme,icon:null!=a.icon?a.icon:m.icon,isIn:!1,key:a.key||p.toastKey++,type:a.type,closeToast:v,closeButton:a.closeButton,rtl:m.rtl,position:a.position||m.position,transition:a.transition||m.transition,className:_(a.className||m.toastClassName),bodyClassName:_(a.bodyClassName||m.bodyClassName),style:a.style||m.toastStyle,bodyStyle:a.bodyStyle||m.bodyStyle,onClick:a.onClick||m.onClick,pauseOnHover:T(a.pauseOnHover)?a.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:T(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:T(a.draggable)?a.draggable:m.draggable,draggablePercent:a.draggablePercent||m.draggablePercent,draggableDirection:a.draggableDirection||m.draggableDirection,closeOnClick:T(a.closeOnClick)?a.closeOnClick:m.closeOnClick,progressClassName:_(a.progressClassName||m.progressClassName),progressStyle:a.progressStyle||m.progressStyle,autoClose:!a.isLoading&&(x=a.autoClose,N=m.autoClose,!1===x||b(x)&&x>0?x:N),hideProgressBar:T(a.hideProgressBar)?a.hideProgressBar:m.hideProgressBar,progress:a.progress,role:a.role||m.role,deleteToast:function(){var e=k(l.get(i),"removed");l.delete(i),P.emit(4,e);var t=p.queue.length;if(p.count=C(i)?p.count-1:p.count-p.displayedToast,p.count<0&&(p.count=0),t>0){var r=C(i)?1:p.props.limit;if(1===t||1===r)p.displayedToast++,y();else{var o=r>t?t:r;p.displayedToast=o;for(var a=0;a<o;a++)y()}}else n()}};S.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(O(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):E(o)||b(o)?a=o:r?a=R.spinner():function(e){return e in R}(n)&&(a=R[n](i))),a}(S),O(a.onOpen)&&(S.onOpen=a.onOpen),O(a.onClose)&&(S.onClose=a.onClose),S.closeButton=m.closeButton,!1===a.closeButton||I(a.closeButton)?S.closeButton=a.closeButton:!0===a.closeButton&&(S.closeButton=!I(m.closeButton)||m.closeButton);var D=e;(0,s.isValidElement)(e)&&!E(e.type)?D=(0,s.cloneElement)(e,{closeToast:v,toastProps:S,data:d}):O(e)&&(D=e({closeToast:v,toastProps:S,data:d})),m.limit&&m.limit>0&&p.count>m.limit&&w?p.queue.push({toastContent:D,toastProps:S,staleId:o}):b(r)?setTimeout((function(){L(D,S,o)}),r):L(D,S,o)}}function L(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),u((function(e){return[].concat(m(e),[r]).filter((function(e){return e!==n}))})),P.emit(4,k(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return p.containerId=e.containerId,P.cancelEmit(3).on(0,w).on(1,(function(e){return c.current&&g(e)})).on(5,v).emit(2,p),function(){return P.emit(3,p)}}),[]),(0,s.useEffect)((function(){p.props=e,p.isToastActive=d,p.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:d}}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function A(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,s.useState)(!1),u=(0,r.Z)(i,2),c=u[0],l=u[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=D(t.nativeEvent),d.y=M(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(d.boundingRect){var t=d.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&d.x>=o&&d.x<=a&&d.y>=n&&d.y<=r?_():E()}}function E(){a(!0)}function _(){a(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&_(),d.x=D(t),d.y=M(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+d.delta+"px)",n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",E,{once:!0}),O(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;O(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",E),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(w.onMouseEnter=_,w.onMouseLeave=E),h&&(w.onClick=function(e){y&&y(e),d.canCloseOnClick&&g()}),{playToast:E,pauseToast:_,isRunning:o,preventExitTransition:c,toastRef:f,eventHandlers:w}}function B(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,c=e.style,f=e.controlledProgress,d=e.progress,p=e.rtl,m=e.isIn,v=e.theme,y=l(l({},c),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});f&&(y.transform="scaleX("+d+")");var h=g("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+o,{"Toastify__progress-bar--rtl":p}),b=O(i)?i({rtl:p,type:o,defaultClassName:h}):g(h,i);return s.createElement("div",u({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:b,style:y},f&&d>=1?"onTransitionEnd":"onAnimationEnd",f&&d<1?null:function(){m&&r()}))}j.defaultProps={type:L.DEFAULT,hide:!1};var F=function(e){var t=A(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,u=e.children,c=e.autoClose,f=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,y=e.position,h=e.className,b=e.style,T=e.bodyClassName,E=e.bodyStyle,_=e.progressClassName,C=e.progressStyle,I=e.updateId,w=e.role,L=e.progress,x=e.rtl,k=e.toastId,P=e.deleteToast,N=e.isIn,R=e.isLoading,S=e.iconOut,D=e.theme,M=g("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+d,{"Toastify__toast--rtl":x}),F=O(h)?h({rtl:x,position:y,type:d,defaultClassName:M}):g(M,h),z=!!L,U={closeToast:m,type:d,theme:D},H=null;return!1===i||(H=O(i)?i(U):s.isValidElement(i)?s.cloneElement(i,U):B(U)),s.createElement(v,{isIn:N,done:P,position:y,preventExitTransition:r,nodeRef:o},s.createElement("div",l(l({id:k,onClick:f,className:F},a),{},{style:b,ref:o}),s.createElement("div",l(l({},N&&{role:w}),{},{className:O(T)?T({type:d}):g("Toastify__toast-body",T),style:E}),null!=S&&s.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},S),s.createElement("div",null,u)),H,(c||z)&&s.createElement(j,l(l({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:x,theme:D,delay:c,isRunning:n,isIn:N,closeToast:m,hide:p,type:d,style:C,className:_,controlledProgress:z,progress:L}))))},z=x({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),U=(x({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),x({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),x({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,s.forwardRef)((function(e,t){var n=S(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,u=e.style,c=e.rtl,f=e.containerId;function d(e){var t=g("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":c});return O(i)?i({position:e,rtl:c,defaultClassName:t}):g(t,_(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:f},r((function(e,t){var n=t.length?l({},u):l(l({},u),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(F,l(l({},o),{},{isIn:a(o.toastId),style:l(l({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));U.displayName="ToastContainer",U.defaultProps={position:w.TOP_RIGHT,transition:z,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:B,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var H,Z=new Map,q=[];function Q(){return Math.random().toString(36).substring(2,9)}function V(e){return e&&(E(e.toastId)||b(e.toastId))?e.toastId:Q()}function G(e,t){return Z.size>0?P.emit(0,e,t):q.push({content:e,options:t}),t.toastId}function W(e,t){return l(l({},t),{},{type:t&&t.type||e,toastId:V(t)})}function Y(e){return function(t,n){return G(t,W(e,n))}}function X(e,t){return G(e,W(L.DEFAULT,t))}X.loading=function(e,t){return G(e,W(L.DEFAULT,l({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},X.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=E(o)?X.loading(o,n):X.loading(o.render,l(l({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,o){if(null!=t){var a=l(l(l({type:e},s),n),{},{data:o}),i=E(t)?{render:t}:t;return r?X.update(r,l(l({},a),i)):X(i.render,l(l({},a),i)),o}X.dismiss(r)},c=O(e)?e():e;return c.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),c},X.success=Y(L.SUCCESS),X.info=Y(L.INFO),X.error=Y(L.ERROR),X.warning=Y(L.WARNING),X.warn=X.warning,X.dark=function(e,t){return G(e,W(L.DEFAULT,l({theme:"dark"},t)))},X.dismiss=function(e){return P.emit(1,e)},X.clearWaitingQueue=function(e){return void 0===e&&(e={}),P.emit(5,e)},X.isActive=function(e){var t=!1;return Z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},X.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=Z.get(n||H);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=l(l(l({},r),t),{},{toastId:t.toastId||e,updateId:Q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,G(i,a)}}),0)},X.done=function(e){X.update(e,{progress:1})},X.onChange=function(e){return P.on(4,e),function(){P.off(4,e)}},X.POSITION=w,X.TYPE=L,P.on(2,(function(e){H=e.containerId||e,Z.set(H,e),q.forEach((function(e){P.emit(0,e.content,e.options)})),q=[]})).on(3,(function(e){Z.delete(e.containerId||e),0===Z.size&&P.off(0).off(1).off(5)}));var K=n(3504),J=n(184);function $(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],c=(0,s.useState)(""),l=(0,r.Z)(c,2),f=l[0],d=l[1],p=(0,s.useState)(""),m=(0,r.Z)(p,2),v=m[0],g=m[1],y=(0,s.useState)([]),h=(0,r.Z)(y,2),b=h[0],T=h[1];(0,s.useEffect)((function(){n&&o.bI(n,f).then(T)}),[f,n]);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===v.trim())return X.error("Image not found",1e3);u(v),d(1)},children:[(0,J.jsx)("input",{className:a,value:v,onChange:function(e){g(e.currentTarget.value.toLowerCase())},name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Movie Search"}),(0,J.jsx)("button",{className:i,type:"submit",children:"Search"})]}),(0,J.jsx)(U,{}),b&&(0,J.jsx)("ul",{children:b.map((function(e){return(0,J.jsx)("li",{children:(0,J.jsx)(K.rU,{to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))})]})}},4390:function(e,t,n){n.d(t,{Me:function(){return p},SU:function(){return c},Y5:function(){return f},bI:function(){return y},np:function(){return v}});var r=n(5861),o=n(7757),a=n.n(o),i=n(4569),s=n.n(i),u="0b3a2577ef47ebb117f3888c8be479cf";function c(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/all/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=").concat(n,"&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=765.df80cfc1.chunk.js.map