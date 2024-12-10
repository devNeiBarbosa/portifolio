(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))f(h);new MutationObserver(h=>{for(const w of h)if(w.type==="childList")for(const k of w.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&f(k)}).observe(document,{childList:!0,subtree:!0});function u(h){const w={};return h.integrity&&(w.integrity=h.integrity),h.referrerPolicy&&(w.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?w.credentials="include":h.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(h){if(h.ep)return;h.ep=!0;const w=u(h);fetch(h.href,w)}})();function em(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var _s={exports:{}},qr={},Ps={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jc;function tm(){if(Jc)return le;Jc=1;var l=Symbol.for("react.element"),a=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),k=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),z=Symbol.iterator;function $(g){return g===null||typeof g!="object"?null:(g=z&&g[z]||g["@@iterator"],typeof g=="function"?g:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,W={};function Y(g,S,q){this.props=g,this.context=S,this.refs=W,this.updater=q||H}Y.prototype.isReactComponent={},Y.prototype.setState=function(g,S){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,S,"setState")},Y.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ue(){}ue.prototype=Y.prototype;function ne(g,S,q){this.props=g,this.context=S,this.refs=W,this.updater=q||H}var X=ne.prototype=new ue;X.constructor=ne,te(X,Y.prototype),X.isPureReactComponent=!0;var b=Array.isArray,oe=Object.prototype.hasOwnProperty,J={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function Ee(g,S,q){var ee,ie={},Z=null,B=null;if(S!=null)for(ee in S.ref!==void 0&&(B=S.ref),S.key!==void 0&&(Z=""+S.key),S)oe.call(S,ee)&&!V.hasOwnProperty(ee)&&(ie[ee]=S[ee]);var se=arguments.length-2;if(se===1)ie.children=q;else if(1<se){for(var ae=Array(se),Ae=0;Ae<se;Ae++)ae[Ae]=arguments[Ae+2];ie.children=ae}if(g&&g.defaultProps)for(ee in se=g.defaultProps,se)ie[ee]===void 0&&(ie[ee]=se[ee]);return{$$typeof:l,type:g,key:Z,ref:B,props:ie,_owner:J.current}}function Fe(g,S){return{$$typeof:l,type:g.type,key:S,ref:g.ref,props:g.props,_owner:g._owner}}function be(g){return typeof g=="object"&&g!==null&&g.$$typeof===l}function dt(g){var S={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return S[q]})}var Ve=/\/+/g;function Re(g,S){return typeof g=="object"&&g!==null&&g.key!=null?dt(""+g.key):S.toString(36)}function Xe(g,S,q,ee,ie){var Z=typeof g;(Z==="undefined"||Z==="boolean")&&(g=null);var B=!1;if(g===null)B=!0;else switch(Z){case"string":case"number":B=!0;break;case"object":switch(g.$$typeof){case l:case a:B=!0}}if(B)return B=g,ie=ie(B),g=ee===""?"."+Re(B,0):ee,b(ie)?(q="",g!=null&&(q=g.replace(Ve,"$&/")+"/"),Xe(ie,S,q,"",function(Ae){return Ae})):ie!=null&&(be(ie)&&(ie=Fe(ie,q+(!ie.key||B&&B.key===ie.key?"":(""+ie.key).replace(Ve,"$&/")+"/")+g)),S.push(ie)),1;if(B=0,ee=ee===""?".":ee+":",b(g))for(var se=0;se<g.length;se++){Z=g[se];var ae=ee+Re(Z,se);B+=Xe(Z,S,q,ae,ie)}else if(ae=$(g),typeof ae=="function")for(g=ae.call(g),se=0;!(Z=g.next()).done;)Z=Z.value,ae=ee+Re(Z,se++),B+=Xe(Z,S,q,ae,ie);else if(Z==="object")throw S=String(g),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return B}function Je(g,S,q){if(g==null)return g;var ee=[],ie=0;return Xe(g,ee,"","",function(Z){return S.call(q,Z,ie++)}),ee}function ze(g){if(g._status===-1){var S=g._result;S=S(),S.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=S)}if(g._status===1)return g._result.default;throw g._result}var pe={current:null},R={transition:null},F={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:R,ReactCurrentOwner:J};function T(){throw Error("act(...) is not supported in production builds of React.")}return le.Children={map:Je,forEach:function(g,S,q){Je(g,function(){S.apply(this,arguments)},q)},count:function(g){var S=0;return Je(g,function(){S++}),S},toArray:function(g){return Je(g,function(S){return S})||[]},only:function(g){if(!be(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},le.Component=Y,le.Fragment=u,le.Profiler=h,le.PureComponent=ne,le.StrictMode=f,le.Suspense=N,le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,le.act=T,le.cloneElement=function(g,S,q){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ee=te({},g.props),ie=g.key,Z=g.ref,B=g._owner;if(S!=null){if(S.ref!==void 0&&(Z=S.ref,B=J.current),S.key!==void 0&&(ie=""+S.key),g.type&&g.type.defaultProps)var se=g.type.defaultProps;for(ae in S)oe.call(S,ae)&&!V.hasOwnProperty(ae)&&(ee[ae]=S[ae]===void 0&&se!==void 0?se[ae]:S[ae])}var ae=arguments.length-2;if(ae===1)ee.children=q;else if(1<ae){se=Array(ae);for(var Ae=0;Ae<ae;Ae++)se[Ae]=arguments[Ae+2];ee.children=se}return{$$typeof:l,type:g.type,key:ie,ref:Z,props:ee,_owner:B}},le.createContext=function(g){return g={$$typeof:k,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},le.createElement=Ee,le.createFactory=function(g){var S=Ee.bind(null,g);return S.type=g,S},le.createRef=function(){return{current:null}},le.forwardRef=function(g){return{$$typeof:P,render:g}},le.isValidElement=be,le.lazy=function(g){return{$$typeof:O,_payload:{_status:-1,_result:g},_init:ze}},le.memo=function(g,S){return{$$typeof:L,type:g,compare:S===void 0?null:S}},le.startTransition=function(g){var S=R.transition;R.transition={};try{g()}finally{R.transition=S}},le.unstable_act=T,le.useCallback=function(g,S){return pe.current.useCallback(g,S)},le.useContext=function(g){return pe.current.useContext(g)},le.useDebugValue=function(){},le.useDeferredValue=function(g){return pe.current.useDeferredValue(g)},le.useEffect=function(g,S){return pe.current.useEffect(g,S)},le.useId=function(){return pe.current.useId()},le.useImperativeHandle=function(g,S,q){return pe.current.useImperativeHandle(g,S,q)},le.useInsertionEffect=function(g,S){return pe.current.useInsertionEffect(g,S)},le.useLayoutEffect=function(g,S){return pe.current.useLayoutEffect(g,S)},le.useMemo=function(g,S){return pe.current.useMemo(g,S)},le.useReducer=function(g,S,q){return pe.current.useReducer(g,S,q)},le.useRef=function(g){return pe.current.useRef(g)},le.useState=function(g){return pe.current.useState(g)},le.useSyncExternalStore=function(g,S,q){return pe.current.useSyncExternalStore(g,S,q)},le.useTransition=function(){return pe.current.useTransition()},le.version="18.3.1",le}var qc;function Xs(){return qc||(qc=1,Ps.exports=tm()),Ps.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function nm(){if(Zc)return qr;Zc=1;var l=Xs(),a=Symbol.for("react.element"),u=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function k(P,N,L){var O,z={},$=null,H=null;L!==void 0&&($=""+L),N.key!==void 0&&($=""+N.key),N.ref!==void 0&&(H=N.ref);for(O in N)f.call(N,O)&&!w.hasOwnProperty(O)&&(z[O]=N[O]);if(P&&P.defaultProps)for(O in N=P.defaultProps,N)z[O]===void 0&&(z[O]=N[O]);return{$$typeof:a,type:P,key:$,ref:H,props:z,_owner:h.current}}return qr.Fragment=u,qr.jsx=k,qr.jsxs=k,qr}var bc;function rm(){return bc||(bc=1,_s.exports=nm()),_s.exports}var c=rm(),je=Xs();const Qt=em(je);var mo={},Rs={exports:{}},ot={},zs={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function im(){return ed||(ed=1,function(l){function a(R,F){var T=R.length;R.push(F);e:for(;0<T;){var g=T-1>>>1,S=R[g];if(0<h(S,F))R[g]=F,R[T]=S,T=g;else break e}}function u(R){return R.length===0?null:R[0]}function f(R){if(R.length===0)return null;var F=R[0],T=R.pop();if(T!==F){R[0]=T;e:for(var g=0,S=R.length,q=S>>>1;g<q;){var ee=2*(g+1)-1,ie=R[ee],Z=ee+1,B=R[Z];if(0>h(ie,T))Z<S&&0>h(B,ie)?(R[g]=B,R[Z]=T,g=Z):(R[g]=ie,R[ee]=T,g=ee);else if(Z<S&&0>h(B,T))R[g]=B,R[Z]=T,g=Z;else break e}}return F}function h(R,F){var T=R.sortIndex-F.sortIndex;return T!==0?T:R.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var k=Date,P=k.now();l.unstable_now=function(){return k.now()-P}}var N=[],L=[],O=1,z=null,$=3,H=!1,te=!1,W=!1,Y=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(R){for(var F=u(L);F!==null;){if(F.callback===null)f(L);else if(F.startTime<=R)f(L),F.sortIndex=F.expirationTime,a(N,F);else break;F=u(L)}}function b(R){if(W=!1,X(R),!te)if(u(N)!==null)te=!0,ze(oe);else{var F=u(L);F!==null&&pe(b,F.startTime-R)}}function oe(R,F){te=!1,W&&(W=!1,ue(Ee),Ee=-1),H=!0;var T=$;try{for(X(F),z=u(N);z!==null&&(!(z.expirationTime>F)||R&&!dt());){var g=z.callback;if(typeof g=="function"){z.callback=null,$=z.priorityLevel;var S=g(z.expirationTime<=F);F=l.unstable_now(),typeof S=="function"?z.callback=S:z===u(N)&&f(N),X(F)}else f(N);z=u(N)}if(z!==null)var q=!0;else{var ee=u(L);ee!==null&&pe(b,ee.startTime-F),q=!1}return q}finally{z=null,$=T,H=!1}}var J=!1,V=null,Ee=-1,Fe=5,be=-1;function dt(){return!(l.unstable_now()-be<Fe)}function Ve(){if(V!==null){var R=l.unstable_now();be=R;var F=!0;try{F=V(!0,R)}finally{F?Re():(J=!1,V=null)}}else J=!1}var Re;if(typeof ne=="function")Re=function(){ne(Ve)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Je=Xe.port2;Xe.port1.onmessage=Ve,Re=function(){Je.postMessage(null)}}else Re=function(){Y(Ve,0)};function ze(R){V=R,J||(J=!0,Re())}function pe(R,F){Ee=Y(function(){R(l.unstable_now())},F)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(R){R.callback=null},l.unstable_continueExecution=function(){te||H||(te=!0,ze(oe))},l.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fe=0<R?Math.floor(1e3/R):5},l.unstable_getCurrentPriorityLevel=function(){return $},l.unstable_getFirstCallbackNode=function(){return u(N)},l.unstable_next=function(R){switch($){case 1:case 2:case 3:var F=3;break;default:F=$}var T=$;$=F;try{return R()}finally{$=T}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(R,F){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var T=$;$=R;try{return F()}finally{$=T}},l.unstable_scheduleCallback=function(R,F,T){var g=l.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?g+T:g):T=g,R){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=T+S,R={id:O++,callback:F,priorityLevel:R,startTime:T,expirationTime:S,sortIndex:-1},T>g?(R.sortIndex=T,a(L,R),u(N)===null&&R===u(L)&&(W?(ue(Ee),Ee=-1):W=!0,pe(b,T-g))):(R.sortIndex=S,a(N,R),te||H||(te=!0,ze(oe))),R},l.unstable_shouldYield=dt,l.unstable_wrapCallback=function(R){var F=$;return function(){var T=$;$=F;try{return R.apply(this,arguments)}finally{$=T}}}}(Ts)),Ts}var td;function om(){return td||(td=1,zs.exports=im()),zs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function lm(){if(nd)return ot;nd=1;var l=Xs(),a=om();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,h={};function w(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(h[e]=t,e=0;e<t.length;e++)f.add(t[e])}var P=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),N=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,O={},z={};function $(e){return N.call(z,e)?!0:N.call(O,e)?!1:L.test(e)?z[e]=!0:(O[e]=!0,!1)}function H(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function te(e,t,n,r){if(t===null||typeof t>"u"||H(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var ue=/[\-:]([a-z])/g;function ne(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ue,ne);Y[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ue,ne);Y[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ue,ne);Y[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(te(t,n,i,r)&&(n=null),r||i===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var b=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),J=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),dt=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),Je=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),R=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,g;function S(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var q=!1;function ee(e,t){if(!e||q)return"";q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,d=o.length-1;1<=s&&0<=d&&i[s]!==o[d];)d--;for(;1<=s&&0<=d;s--,d--)if(i[s]!==o[d]){if(s!==1||d!==1)do if(s--,d--,0>d||i[s]!==o[d]){var p=`
`+i[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=s&&0<=d);break}}}finally{q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?S(e):""}function ie(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case J:return"Portal";case Fe:return"Profiler";case Ee:return"StrictMode";case Re:return"Suspense";case Xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dt:return(e.displayName||"Context")+".Consumer";case be:return(e._context.displayName||"Context")+".Provider";case Ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Je:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}function B(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=ae(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){e._valueTracker||(e._valueTracker=Ae(e))}function xt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ae(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ra(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=se(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ia(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function Mo(e,t){ia(e,t);var n=se(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Do(e,t.type,n):t.hasOwnProperty("defaultValue")&&Do(e,t.type,se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Do(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+se(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return T({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function la(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(fr(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:se(n)}}function sa(e,t){var n=se(t.value),r=se(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function aa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ua(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ua(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,ca=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rf=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){rf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function da(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function fa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=da(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var of=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(e,t){if(t){if(of[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function Uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function Vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,In=null,On=null;function pa(e){if(e=Dr(e)){if(typeof Ho!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Pi(t),Ho(e.stateNode,e.type,t))}}function ma(e){In?On?On.push(e):On=[e]:In=e}function ha(){if(In){var e=In,t=On;if(On=In=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function ga(e,t){return e(t)}function va(){}var Wo=!1;function ya(e,t,n){if(Wo)return e(t,n);Wo=!0;try{return ga(e,t,n)}finally{Wo=!1,(In!==null||On!==null)&&(va(),ha())}}function hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Qo=!1;if(P)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Qo=!1}function lf(e,t,n,r,i,o,s,d,p){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(E){this.onError(E)}}var vr=!1,li=null,si=!1,Ko=null,sf={onError:function(e){vr=!0,li=e}};function af(e,t,n,r,i,o,s,d,p){vr=!1,li=null,lf.apply(sf,arguments)}function uf(e,t,n,r,i,o,s,d,p){if(af.apply(this,arguments),vr){if(vr){var x=li;vr=!1,li=null}else throw Error(u(198));si||(si=!0,Ko=x)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wa(e){if(mn(e)!==e)throw Error(u(188))}function cf(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wa(i),e;if(o===r)return wa(i),t;o=o.sibling}throw Error(u(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,d=i.child;d;){if(d===n){s=!0,n=i,r=o;break}if(d===r){s=!0,r=i,n=o;break}d=d.sibling}if(!s){for(d=o.child;d;){if(d===n){s=!0,n=o,r=i;break}if(d===r){s=!0,r=o,n=i;break}d=d.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Sa(e){return e=cf(e),e!==null?ka(e):null}function ka(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ka(e);if(t!==null)return t;e=e.sibling}return null}var ja=a.unstable_scheduleCallback,Ea=a.unstable_cancelCallback,df=a.unstable_shouldYield,ff=a.unstable_requestPaint,Ce=a.unstable_now,pf=a.unstable_getCurrentPriorityLevel,Yo=a.unstable_ImmediatePriority,Ca=a.unstable_UserBlockingPriority,ai=a.unstable_NormalPriority,mf=a.unstable_LowPriority,Na=a.unstable_IdlePriority,ui=null,Pt=null;function hf(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:yf,gf=Math.log,vf=Math.LN2;function yf(e){return e>>>=0,e===0?32:31-(gf(e)/vf|0)|0}var ci=64,di=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var d=s&~i;d!==0?r=yr(d):(o&=s,o!==0&&(r=yr(o)))}else s=n&~i,s!==0?r=yr(s):o!==0&&(r=yr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-wt(o),d=1<<s,p=i[s];p===-1?(!(d&n)||d&r)&&(i[s]=xf(d,t)):p<=t&&(e.expiredLanes|=d),o&=~d}}function Go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _a(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function Sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function Pa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ra,qo,za,Ta,La,Zo=!1,pi=[],Kt=null,Yt=null,Gt=null,wr=new Map,Sr=new Map,Xt=[],kf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ia(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Dr(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jf(e,t,n,r,i){switch(t){case"focusin":return Kt=kr(Kt,e,t,n,r,i),!0;case"dragenter":return Yt=kr(Yt,e,t,n,r,i),!0;case"mouseover":return Gt=kr(Gt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return wr.set(o,kr(wr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Sr.set(o,kr(Sr.get(o)||null,e,t,n,r,i)),!0}return!1}function Oa(e){var t=hn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=xa(n),t!==null){e.blockedOn=t,La(e.priority,function(){za(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=el(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bo=r,n.target.dispatchEvent(r),Bo=null}else return t=Dr(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ma(e,t,n){mi(e)&&n.delete(t)}function Ef(){Zo=!1,Kt!==null&&mi(Kt)&&(Kt=null),Yt!==null&&mi(Yt)&&(Yt=null),Gt!==null&&mi(Gt)&&(Gt=null),wr.forEach(Ma),Sr.forEach(Ma)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ef)))}function Er(e){function t(i){return jr(i,e)}if(0<pi.length){jr(pi[0],e);for(var n=1;n<pi.length;n++){var r=pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&jr(Kt,e),Yt!==null&&jr(Yt,e),Gt!==null&&jr(Gt,e),wr.forEach(t),Sr.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Oa(n),n.blockedOn===null&&Xt.shift()}var Mn=b.ReactCurrentBatchConfig,hi=!0;function Cf(e,t,n,r){var i=me,o=Mn.transition;Mn.transition=null;try{me=1,bo(e,t,n,r)}finally{me=i,Mn.transition=o}}function Nf(e,t,n,r){var i=me,o=Mn.transition;Mn.transition=null;try{me=4,bo(e,t,n,r)}finally{me=i,Mn.transition=o}}function bo(e,t,n,r){if(hi){var i=el(e,t,n,r);if(i===null)vl(e,t,r,gi,n),Ia(e,r);else if(jf(i,e,t,n,r))r.stopPropagation();else if(Ia(e,r),t&4&&-1<kf.indexOf(e)){for(;i!==null;){var o=Dr(i);if(o!==null&&Ra(o),o=el(e,t,n,r),o===null&&vl(e,t,r,gi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var gi=null;function el(e,t,n,r){if(gi=null,e=Vo(r),e=hn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function Da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pf()){case Yo:return 1;case Ca:return 4;case ai:case mf:return 16;case Na:return 536870912;default:return 16}default:return 16}}var Jt=null,tl=null,vi=null;function Fa(){if(vi)return vi;var e,t=tl,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return vi=i.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Aa(){return!1}function lt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:Aa,this.isPropagationStopped=Aa,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=lt(Dn),Cr=T({},Dn,{view:0,detail:0}),_f=lt(Cr),rl,il,Nr,wi=T({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(rl=e.screenX-Nr.screenX,il=e.screenY-Nr.screenY):il=rl=0,Nr=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:il}}),$a=lt(wi),Pf=T({},wi,{dataTransfer:0}),Rf=lt(Pf),zf=T({},Cr,{relatedTarget:0}),ol=lt(zf),Tf=T({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lf=lt(Tf),If=T({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=lt(If),Mf=T({},Dn,{data:0}),Ua=lt(Mf),Df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Af[e])?!!t[e]:!1}function ll(){return $f}var Uf=T({},Cr,{key:function(e){if(e.key){var t=Df[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ll,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bf=lt(Uf),Vf=T({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ba=lt(Vf),Hf=T({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ll}),Wf=lt(Hf),Qf=T({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kf=lt(Qf),Yf=T({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=lt(Yf),Xf=[9,13,27,32],sl=P&&"CompositionEvent"in window,_r=null;P&&"documentMode"in document&&(_r=document.documentMode);var Jf=P&&"TextEvent"in window&&!_r,Va=P&&(!sl||_r&&8<_r&&11>=_r),Ha=" ",Wa=!1;function Qa(e,t){switch(e){case"keyup":return Xf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ka(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function qf(e,t){switch(e){case"compositionend":return Ka(t);case"keypress":return t.which!==32?null:(Wa=!0,Ha);case"textInput":return e=t.data,e===Ha&&Wa?null:e;default:return null}}function Zf(e,t){if(Fn)return e==="compositionend"||!sl&&Qa(e,t)?(e=Fa(),vi=tl=Jt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Va&&t.locale!=="ko"?null:t.data;default:return null}}var bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bf[e.type]:t==="textarea"}function Ga(e,t,n,r){ma(r),t=Ci(t,"onChange"),0<t.length&&(n=new nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Rr=null;function ep(e){fu(e,0)}function Si(e){var t=Vn(e);if(xt(t))return e}function tp(e,t){if(e==="change")return t}var Xa=!1;if(P){var al;if(P){var ul="oninput"in document;if(!ul){var Ja=document.createElement("div");Ja.setAttribute("oninput","return;"),ul=typeof Ja.oninput=="function"}al=ul}else al=!1;Xa=al&&(!document.documentMode||9<document.documentMode)}function qa(){Pr&&(Pr.detachEvent("onpropertychange",Za),Rr=Pr=null)}function Za(e){if(e.propertyName==="value"&&Si(Rr)){var t=[];Ga(t,Rr,e,Vo(e)),ya(ep,t)}}function np(e,t,n){e==="focusin"?(qa(),Pr=t,Rr=n,Pr.attachEvent("onpropertychange",Za)):e==="focusout"&&qa()}function rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Rr)}function ip(e,t){if(e==="click")return Si(t)}function op(e,t){if(e==="input"||e==="change")return Si(t)}function lp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:lp;function zr(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!N.call(t,i)||!St(e[i],t[i]))return!1}return!0}function ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var n=ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ba(n)}}function tu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nu(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sp(e){var t=nu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tu(n.ownerDocument.documentElement,n)){if(r!==null&&cl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=eu(n,o);var s=eu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=P&&"documentMode"in document&&11>=document.documentMode,An=null,dl=null,Tr=null,fl=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||An==null||An!==ii(r)||(r=An,"selectionStart"in r&&cl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&zr(Tr,r)||(Tr=r,r=Ci(dl,"onSelect"),0<r.length&&(t=new nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},pl={},iu={};P&&(iu=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function ji(e){if(pl[e])return pl[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in iu)return pl[e]=t[n];return e}var ou=ji("animationend"),lu=ji("animationiteration"),su=ji("animationstart"),au=ji("transitionend"),uu=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){uu.set(e,t),w(t,[e])}for(var ml=0;ml<cu.length;ml++){var hl=cu[ml],up=hl.toLowerCase(),cp=hl[0].toUpperCase()+hl.slice(1);qt(up,"on"+cp)}qt(ou,"onAnimationEnd"),qt(lu,"onAnimationIteration"),qt(su,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(au,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function du(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uf(r,t,void 0,e),e.currentTarget=null}function fu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var d=r[s],p=d.instance,x=d.currentTarget;if(d=d.listener,p!==o&&i.isPropagationStopped())break e;du(i,d,x),o=p}else for(s=0;s<r.length;s++){if(d=r[s],p=d.instance,x=d.currentTarget,d=d.listener,p!==o&&i.isPropagationStopped())break e;du(i,d,x),o=p}}}if(si)throw e=Ko,si=!1,Ko=null,e}function ge(e,t){var n=t[jl];n===void 0&&(n=t[jl]=new Set);var r=e+"__bubble";n.has(r)||(pu(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),pu(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[Ei]){e[Ei]=!0,f.forEach(function(n){n!=="selectionchange"&&(dp.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,gl("selectionchange",!1,t))}}function pu(e,t,n,r){switch(Da(t)){case 1:var i=Cf;break;case 4:i=Nf;break;default:i=bo}n=i.bind(null,t,n,e),i=void 0,!Qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var p=s.tag;if((p===3||p===4)&&(p=s.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;s=s.return}for(;d!==null;){if(s=hn(d),s===null)return;if(p=s.tag,p===5||p===6){r=o=s;continue e}d=d.parentNode}}r=r.return}ya(function(){var x=o,E=Vo(n),C=[];e:{var j=uu.get(e);if(j!==void 0){var I=nl,D=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":I=Bf;break;case"focusin":D="focus",I=ol;break;case"focusout":D="blur",I=ol;break;case"beforeblur":case"afterblur":I=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=$a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Wf;break;case ou:case lu:case su:I=Lf;break;case au:I=Kf;break;case"scroll":I=_f;break;case"wheel":I=Gf;break;case"copy":case"cut":case"paste":I=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ba}var A=(t&4)!==0,Ne=!A&&e==="scroll",v=A?j!==null?j+"Capture":null:j;A=[];for(var m=x,y;m!==null;){y=m;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,v!==null&&(_=hr(m,v),_!=null&&A.push(Or(m,_,y)))),Ne)break;m=m.return}0<A.length&&(j=new I(j,D,null,n,E),C.push({event:j,listeners:A}))}}if(!(t&7)){e:{if(j=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",j&&n!==Bo&&(D=n.relatedTarget||n.fromElement)&&(hn(D)||D[Dt]))break e;if((I||j)&&(j=E.window===E?E:(j=E.ownerDocument)?j.defaultView||j.parentWindow:window,I?(D=n.relatedTarget||n.toElement,I=x,D=D?hn(D):null,D!==null&&(Ne=mn(D),D!==Ne||D.tag!==5&&D.tag!==6)&&(D=null)):(I=null,D=x),I!==D)){if(A=$a,_="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ba,_="onPointerLeave",v="onPointerEnter",m="pointer"),Ne=I==null?j:Vn(I),y=D==null?j:Vn(D),j=new A(_,m+"leave",I,n,E),j.target=Ne,j.relatedTarget=y,_=null,hn(E)===x&&(A=new A(v,m+"enter",D,n,E),A.target=y,A.relatedTarget=Ne,_=A),Ne=_,I&&D)t:{for(A=I,v=D,m=0,y=A;y;y=Un(y))m++;for(y=0,_=v;_;_=Un(_))y++;for(;0<m-y;)A=Un(A),m--;for(;0<y-m;)v=Un(v),y--;for(;m--;){if(A===v||v!==null&&A===v.alternate)break t;A=Un(A),v=Un(v)}A=null}else A=null;I!==null&&mu(C,j,I,A,!1),D!==null&&Ne!==null&&mu(C,Ne,D,A,!0)}}e:{if(j=x?Vn(x):window,I=j.nodeName&&j.nodeName.toLowerCase(),I==="select"||I==="input"&&j.type==="file")var U=tp;else if(Ya(j))if(Xa)U=op;else{U=rp;var Q=np}else(I=j.nodeName)&&I.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(U=ip);if(U&&(U=U(e,x))){Ga(C,U,n,E);break e}Q&&Q(e,j,x),e==="focusout"&&(Q=j._wrapperState)&&Q.controlled&&j.type==="number"&&Do(j,"number",j.value)}switch(Q=x?Vn(x):window,e){case"focusin":(Ya(Q)||Q.contentEditable==="true")&&(An=Q,dl=x,Tr=null);break;case"focusout":Tr=dl=An=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,ru(C,n,E);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":ru(C,n,E)}var K;if(sl)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Fn?Qa(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Va&&n.locale!=="ko"&&(Fn||G!=="onCompositionStart"?G==="onCompositionEnd"&&Fn&&(K=Fa()):(Jt=E,tl="value"in Jt?Jt.value:Jt.textContent,Fn=!0)),Q=Ci(x,G),0<Q.length&&(G=new Ua(G,e,null,n,E),C.push({event:G,listeners:Q}),K?G.data=K:(K=Ka(n),K!==null&&(G.data=K)))),(K=Jf?qf(e,n):Zf(e,n))&&(x=Ci(x,"onBeforeInput"),0<x.length&&(E=new Ua("onBeforeInput","beforeinput",null,n,E),C.push({event:E,listeners:x}),E.data=K))}fu(C,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=hr(e,n),o!=null&&r.unshift(Or(e,o,i)),o=hr(e,t),o!=null&&r.push(Or(e,o,i))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var d=n,p=d.alternate,x=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&x!==null&&(d=x,i?(p=hr(n,o),p!=null&&s.unshift(Or(n,p,d))):i||(p=hr(n,o),p!=null&&s.push(Or(n,p,d)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var fp=/\r\n?/g,pp=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(fp,`
`).replace(pp,"")}function Ni(e,t,n){if(t=hu(t),hu(e)!==t&&n)throw Error(u(425))}function _i(){}var yl=null,xl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,mp=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,hp=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(gp)}:Sl;function gp(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Er(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Bn,Mr="__reactProps$"+Bn,Dt="__reactContainer$"+Bn,jl="__reactEvents$"+Bn,vp="__reactListeners$"+Bn,yp="__reactHandles$"+Bn;function hn(e){var t=e[Rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vu(e);e!==null;){if(n=e[Rt])return n;e=vu(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[Rt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Pi(e){return e[Mr]||null}var El=[],Hn=-1;function bt(e){return{current:e}}function ve(e){0>Hn||(e.current=El[Hn],El[Hn]=null,Hn--)}function he(e,t){Hn++,El[Hn]=e.current,e.current=t}var en={},He=bt(en),et=bt(!1),gn=en;function Wn(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function Ri(){ve(et),ve(He)}function yu(e,t,n){if(He.current!==en)throw Error(u(168));he(He,t),he(et,n)}function xu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(u(108,B(e)||"Unknown",i));return T({},n,r)}function zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,gn=He.current,he(He,e),he(et,et.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=xu(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,ve(et),ve(He),he(He,e)):ve(et),he(et,n)}var Ft=null,Ti=!1,Cl=!1;function Su(e){Ft===null?Ft=[e]:Ft.push(e)}function xp(e){Ti=!0,Su(e)}function tn(){if(!Cl&&Ft!==null){Cl=!0;var e=0,t=me;try{var n=Ft;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ti=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),ja(Yo,tn),i}finally{me=t,Cl=!1}}return null}var Qn=[],Kn=0,Li=null,Ii=0,ft=[],pt=0,vn=null,At=1,$t="";function yn(e,t){Qn[Kn++]=Ii,Qn[Kn++]=Li,Li=e,Ii=t}function ku(e,t,n){ft[pt++]=At,ft[pt++]=$t,ft[pt++]=vn,vn=e;var r=At;e=$t;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,At=1<<32-wt(t)+i|n<<i|r,$t=o+e}else At=1<<o|n<<i|r,$t=e}function Nl(e){e.return!==null&&(yn(e,1),ku(e,1,0))}function _l(e){for(;e===Li;)Li=Qn[--Kn],Qn[Kn]=null,Ii=Qn[--Kn],Qn[Kn]=null;for(;e===vn;)vn=ft[--pt],ft[pt]=null,$t=ft[--pt],ft[pt]=null,At=ft[--pt],ft[pt]=null}var st=null,at=null,xe=!1,kt=null;function ju(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,at=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:At,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,at=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(xe){var t=at;if(t){var n=t;if(!Eu(e,t)){if(Pl(e))throw Error(u(418));t=Zt(n.nextSibling);var r=st;t&&Eu(e,t)?ju(r,n):(e.flags=e.flags&-4097|2,xe=!1,st=e)}}else{if(Pl(e))throw Error(u(418));e.flags=e.flags&-4097|2,xe=!1,st=e}}}function Cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Oi(e){if(e!==st)return!1;if(!xe)return Cu(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=at)){if(Pl(e))throw Nu(),Error(u(418));for(;t;)ju(e,t),t=Zt(t.nextSibling)}if(Cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=st?Zt(e.stateNode.nextSibling):null;return!0}function Nu(){for(var e=at;e;)e=Zt(e.nextSibling)}function Yn(){at=st=null,xe=!1}function zl(e){kt===null?kt=[e]:kt.push(e)}var wp=b.ReactCurrentBatchConfig;function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var d=i.refs;s===null?delete d[o]:d[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function Mi(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _u(e){var t=e._init;return t(e._payload)}function Pu(e){function t(v,m){if(e){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=cn(v,m),v.index=0,v.sibling=null,v}function o(v,m,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function d(v,m,y,_){return m===null||m.tag!==6?(m=Ss(y,v.mode,_),m.return=v,m):(m=i(m,y),m.return=v,m)}function p(v,m,y,_){var U=y.type;return U===V?E(v,m,y.props.children,_,y.key):m!==null&&(m.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ze&&_u(U)===m.type)?(_=i(m,y.props),_.ref=Fr(v,m,y),_.return=v,_):(_=oo(y.type,y.key,y.props,null,v.mode,_),_.ref=Fr(v,m,y),_.return=v,_)}function x(v,m,y,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ks(y,v.mode,_),m.return=v,m):(m=i(m,y.children||[]),m.return=v,m)}function E(v,m,y,_,U){return m===null||m.tag!==7?(m=Nn(y,v.mode,_,U),m.return=v,m):(m=i(m,y),m.return=v,m)}function C(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ss(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oe:return y=oo(m.type,m.key,m.props,null,v.mode,y),y.ref=Fr(v,null,m),y.return=v,y;case J:return m=ks(m,v.mode,y),m.return=v,m;case ze:var _=m._init;return C(v,_(m._payload),y)}if(fr(m)||F(m))return m=Nn(m,v.mode,y,null),m.return=v,m;Mi(v,m)}return null}function j(v,m,y,_){var U=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return U!==null?null:d(v,m,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oe:return y.key===U?p(v,m,y,_):null;case J:return y.key===U?x(v,m,y,_):null;case ze:return U=y._init,j(v,m,U(y._payload),_)}if(fr(y)||F(y))return U!==null?null:E(v,m,y,_,null);Mi(v,y)}return null}function I(v,m,y,_,U){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(y)||null,d(m,v,""+_,U);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oe:return v=v.get(_.key===null?y:_.key)||null,p(m,v,_,U);case J:return v=v.get(_.key===null?y:_.key)||null,x(m,v,_,U);case ze:var Q=_._init;return I(v,m,y,Q(_._payload),U)}if(fr(_)||F(_))return v=v.get(y)||null,E(m,v,_,U,null);Mi(m,_)}return null}function D(v,m,y,_){for(var U=null,Q=null,K=m,G=m=0,Me=null;K!==null&&G<y.length;G++){K.index>G?(Me=K,K=null):Me=K.sibling;var de=j(v,K,y[G],_);if(de===null){K===null&&(K=Me);break}e&&K&&de.alternate===null&&t(v,K),m=o(de,m,G),Q===null?U=de:Q.sibling=de,Q=de,K=Me}if(G===y.length)return n(v,K),xe&&yn(v,G),U;if(K===null){for(;G<y.length;G++)K=C(v,y[G],_),K!==null&&(m=o(K,m,G),Q===null?U=K:Q.sibling=K,Q=K);return xe&&yn(v,G),U}for(K=r(v,K);G<y.length;G++)Me=I(K,v,G,y[G],_),Me!==null&&(e&&Me.alternate!==null&&K.delete(Me.key===null?G:Me.key),m=o(Me,m,G),Q===null?U=Me:Q.sibling=Me,Q=Me);return e&&K.forEach(function(dn){return t(v,dn)}),xe&&yn(v,G),U}function A(v,m,y,_){var U=F(y);if(typeof U!="function")throw Error(u(150));if(y=U.call(y),y==null)throw Error(u(151));for(var Q=U=null,K=m,G=m=0,Me=null,de=y.next();K!==null&&!de.done;G++,de=y.next()){K.index>G?(Me=K,K=null):Me=K.sibling;var dn=j(v,K,de.value,_);if(dn===null){K===null&&(K=Me);break}e&&K&&dn.alternate===null&&t(v,K),m=o(dn,m,G),Q===null?U=dn:Q.sibling=dn,Q=dn,K=Me}if(de.done)return n(v,K),xe&&yn(v,G),U;if(K===null){for(;!de.done;G++,de=y.next())de=C(v,de.value,_),de!==null&&(m=o(de,m,G),Q===null?U=de:Q.sibling=de,Q=de);return xe&&yn(v,G),U}for(K=r(v,K);!de.done;G++,de=y.next())de=I(K,v,G,de.value,_),de!==null&&(e&&de.alternate!==null&&K.delete(de.key===null?G:de.key),m=o(de,m,G),Q===null?U=de:Q.sibling=de,Q=de);return e&&K.forEach(function(bp){return t(v,bp)}),xe&&yn(v,G),U}function Ne(v,m,y,_){if(typeof y=="object"&&y!==null&&y.type===V&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oe:e:{for(var U=y.key,Q=m;Q!==null;){if(Q.key===U){if(U=y.type,U===V){if(Q.tag===7){n(v,Q.sibling),m=i(Q,y.props.children),m.return=v,v=m;break e}}else if(Q.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===ze&&_u(U)===Q.type){n(v,Q.sibling),m=i(Q,y.props),m.ref=Fr(v,Q,y),m.return=v,v=m;break e}n(v,Q);break}else t(v,Q);Q=Q.sibling}y.type===V?(m=Nn(y.props.children,v.mode,_,y.key),m.return=v,v=m):(_=oo(y.type,y.key,y.props,null,v.mode,_),_.ref=Fr(v,m,y),_.return=v,v=_)}return s(v);case J:e:{for(Q=y.key;m!==null;){if(m.key===Q)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(v,m.sibling),m=i(m,y.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=ks(y,v.mode,_),m.return=v,v=m}return s(v);case ze:return Q=y._init,Ne(v,m,Q(y._payload),_)}if(fr(y))return D(v,m,y,_);if(F(y))return A(v,m,y,_);Mi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,y),m.return=v,v=m):(n(v,m),m=Ss(y,v.mode,_),m.return=v,v=m),s(v)):n(v,m)}return Ne}var Gn=Pu(!0),Ru=Pu(!1),Di=bt(null),Fi=null,Xn=null,Tl=null;function Ll(){Tl=Xn=Fi=null}function Il(e){var t=Di.current;ve(Di),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){Fi=e,Tl=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Fi===null)throw Error(u(308));Xn=e,Fi.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var xn=null;function Ml(e){xn===null?xn=[e]:xn.push(e)}function zu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ml(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Ml(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}function Lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $i(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var p=d,x=p.next;p.next=null,s===null?o=x:s.next=x,s=p;var E=e.alternate;E!==null&&(E=E.updateQueue,d=E.lastBaseUpdate,d!==s&&(d===null?E.firstBaseUpdate=x:d.next=x,E.lastBaseUpdate=p))}if(o!==null){var C=i.baseState;s=0,E=x=p=null,d=o;do{var j=d.lane,I=d.eventTime;if((r&j)===j){E!==null&&(E=E.next={eventTime:I,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var D=e,A=d;switch(j=t,I=n,A.tag){case 1:if(D=A.payload,typeof D=="function"){C=D.call(I,C,j);break e}C=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=A.payload,j=typeof D=="function"?D.call(I,C,j):D,j==null)break e;C=T({},C,j);break e;case 2:nn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,j=i.effects,j===null?i.effects=[d]:j.push(d))}else I={eventTime:I,lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},E===null?(x=E=I,p=C):E=E.next=I,s|=j;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;j=d,d=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);if(E===null&&(p=C),i.baseState=p,i.firstBaseUpdate=x,i.lastBaseUpdate=E,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kn|=s,e.lanes=s,e.memoizedState=C}}function Iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(u(191,i));i.call(r)}}}var Ar={},zt=bt(Ar),$r=bt(Ar),Ur=bt(Ar);function wn(e){if(e===Ar)throw Error(u(174));return e}function Fl(e,t){switch(he(Ur,t),he($r,e),he(zt,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ao(t,e)}ve(zt),he(zt,t)}function qn(){ve(zt),ve($r),ve(Ur)}function Ou(e){wn(Ur.current);var t=wn(zt.current),n=Ao(t,e.type);t!==n&&(he($r,e),he(zt,n))}function Al(e){$r.current===e&&(ve(zt),ve($r))}var we=bt(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function Ul(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Bi=b.ReactCurrentDispatcher,Bl=b.ReactCurrentBatchConfig,Sn=0,Se=null,Te=null,Ie=null,Vi=!1,Br=!1,Vr=0,Sp=0;function We(){throw Error(u(321))}function Vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Hl(e,t,n,r,i,o){if(Sn=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bi.current=e===null||e.memoizedState===null?Cp:Np,e=n(r,i),Br){o=0;do{if(Br=!1,Vr=0,25<=o)throw Error(u(301));o+=1,Ie=Te=null,t.updateQueue=null,Bi.current=_p,e=n(r,i)}while(Br)}if(Bi.current=Qi,t=Te!==null&&Te.next!==null,Sn=0,Ie=Te=Se=null,Vi=!1,t)throw Error(u(300));return e}function Wl(){var e=Vr!==0;return Vr=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?Se.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function ht(){if(Te===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ie===null?Se.memoizedState:Ie.next;if(t!==null)Ie=t,Te=e;else{if(e===null)throw Error(u(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ie===null?Se.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Hr(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=ht(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var d=s=null,p=null,x=o;do{var E=x.lane;if((Sn&E)===E)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var C={lane:E,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(d=p=C,s=r):p=p.next=C,Se.lanes|=E,kn|=E}x=x.next}while(x!==null&&x!==o);p===null?s=r:p.next=d,St(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Se.lanes|=o,kn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kl(e){var t=ht(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);St(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mu(){}function Du(e,t){var n=Se,r=ht(),i=t(),o=!St(r.memoizedState,i);if(o&&(r.memoizedState=i,nt=!0),r=r.queue,Yl($u.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Wr(9,Au.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(u(349));Sn&30||Fu(n,t,i)}return i}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Au(e,t,n,r){t.value=n,t.getSnapshot=r,Uu(t)&&Bu(e)}function $u(e,t,n){return n(function(){Uu(t)&&Bu(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Bu(e){var t=Ut(e,1);t!==null&&Nt(t,e,1,-1)}function Vu(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ep.bind(null,Se,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hu(){return ht().memoizedState}function Hi(e,t,n,r){var i=Tt();Se.flags|=e,i.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var i=ht();r=r===void 0?null:r;var o=void 0;if(Te!==null){var s=Te.memoizedState;if(o=s.destroy,r!==null&&Vl(r,s.deps)){i.memoizedState=Wr(t,n,o,r);return}}Se.flags|=e,i.memoizedState=Wr(1|t,n,o,r)}function Wu(e,t){return Hi(8390656,8,e,t)}function Yl(e,t){return Wi(2048,8,e,t)}function Qu(e,t){return Wi(4,2,e,t)}function Ku(e,t){return Wi(4,4,e,t)}function Yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gu(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,Yu.bind(null,t,e),n)}function Gl(){}function Xu(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ju(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qu(e,t,n){return Sn&21?(St(n,t)||(n=_a(),Se.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function kp(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{me=n,Bl.transition=r}}function Zu(){return ht().memoizedState}function jp(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bu(e))ec(t,n);else if(n=zu(e,t,n,r),n!==null){var i=Ze();Nt(n,e,r,i),tc(n,t,r)}}function Ep(e,t,n){var r=an(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bu(e))ec(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,d=o(s,n);if(i.hasEagerState=!0,i.eagerState=d,St(d,s)){var p=t.interleaved;p===null?(i.next=i,Ml(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}n=zu(e,t,i,r),n!==null&&(i=Ze(),Nt(n,e,r,i),tc(n,t,r))}}function bu(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function ec(e,t){Br=Vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jo(e,n)}}var Qi={readContext:mt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Cp={readContext:mt,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4194308,4,Yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jp.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Vu,useDebugValue:Gl,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Vu(!1),t=e[0];return e=kp.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,i=Tt();if(xe){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Oe===null)throw Error(u(349));Sn&30||Fu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wu($u.bind(null,r,o,e),[e]),r.flags|=2048,Wr(9,Au.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Tt(),t=Oe.identifierPrefix;if(xe){var n=$t,r=At;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Np={readContext:mt,useCallback:Xu,useContext:mt,useEffect:Yl,useImperativeHandle:Gu,useInsertionEffect:Qu,useLayoutEffect:Ku,useMemo:Ju,useReducer:Ql,useRef:Hu,useState:function(){return Ql(Hr)},useDebugValue:Gl,useDeferredValue:function(e){var t=ht();return qu(t,Te.memoizedState,e)},useTransition:function(){var e=Ql(Hr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1},_p={readContext:mt,useCallback:Xu,useContext:mt,useEffect:Yl,useImperativeHandle:Gu,useInsertionEffect:Qu,useLayoutEffect:Ku,useMemo:Ju,useReducer:Kl,useRef:Hu,useState:function(){return Kl(Hr)},useDebugValue:Gl,useDeferredValue:function(e){var t=ht();return Te===null?t.memoizedState=e:qu(t,Te.memoizedState,e)},useTransition:function(){var e=Kl(Hr)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1};function jt(e,t){if(e&&e.defaultProps){t=T({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=an(e),o=Bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(Nt(t,e,i,r),Ai(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=an(e),o=Bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=rn(e,o,i),t!==null&&(Nt(t,e,i,r),Ai(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=an(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(Nt(t,e,r,n),Ai(t,e,r))}};function nc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,o):!0}function rc(e,t,n){var r=!1,i=en,o=t.contextType;return typeof o=="object"&&o!==null?o=mt(o):(i=tt(t)?gn:He.current,r=t.contextTypes,o=(r=r!=null)?Wn(e,i):en),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ic(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Dl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mt(o):(o=tt(t)?gn:He.current,i.context=Wn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ki.enqueueReplaceState(i,i.state,null),$i(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zn(e,t){try{var n="",r=t;do n+=ie(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pp=typeof WeakMap=="function"?WeakMap:Map;function oc(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bi||(bi=!0,ps=r),Zl(e,t)},n}function lc(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Zl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zl(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vp.bind(null,e,t,n),t.then(e,e))}function ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Rp=b.ReactCurrentOwner,nt=!1;function qe(e,t,n,r){t.child=e===null?Ru(t,null,n,r):Gn(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var o=t.ref;return Jn(t,i),r=Hl(e,t,n,r,o,i),n=Wl(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(xe&&n&&Nl(t),t.flags|=1,qe(e,t,r,i),t.child)}function dc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ws(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,fc(e,t,o,r,i)):(e=oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(s,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=cn(o,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zr(o,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return bl(e,t,n,r,i)}function pc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(er,ut),ut|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(er,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(er,ut),ut|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(er,ut),ut|=r;return qe(e,t,i,n),t.child}function mc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bl(e,t,n,r,i){var o=tt(n)?gn:He.current;return o=Wn(t,o),Jn(t,i),n=Hl(e,t,n,r,o,i),r=Wl(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(xe&&r&&Nl(t),t.flags|=1,qe(e,t,n,i),t.child)}function hc(e,t,n,r,i){if(tt(n)){var o=!0;zi(t)}else o=!1;if(Jn(t,i),t.stateNode===null)Gi(e,t),rc(t,n,r),Jl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,d=t.memoizedProps;s.props=d;var p=s.context,x=n.contextType;typeof x=="object"&&x!==null?x=mt(x):(x=tt(n)?gn:He.current,x=Wn(t,x));var E=n.getDerivedStateFromProps,C=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function";C||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==r||p!==x)&&ic(t,s,r,x),nn=!1;var j=t.memoizedState;s.state=j,$i(t,r,s,i),p=t.memoizedState,d!==r||j!==p||et.current||nn?(typeof E=="function"&&(Xl(t,n,E,r),p=t.memoizedState),(d=nn||nc(t,n,d,r,j,p,x))?(C||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=x,r=d):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Tu(e,t),d=t.memoizedProps,x=t.type===t.elementType?d:jt(t.type,d),s.props=x,C=t.pendingProps,j=s.context,p=n.contextType,typeof p=="object"&&p!==null?p=mt(p):(p=tt(n)?gn:He.current,p=Wn(t,p));var I=n.getDerivedStateFromProps;(E=typeof I=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==C||j!==p)&&ic(t,s,r,p),nn=!1,j=t.memoizedState,s.state=j,$i(t,r,s,i);var D=t.memoizedState;d!==C||j!==D||et.current||nn?(typeof I=="function"&&(Xl(t,n,I,r),D=t.memoizedState),(x=nn||nc(t,n,x,r,j,D,p)||!1)?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,D,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,D,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=D),s.props=r,s.state=D,s.context=p,r=x):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return es(e,t,n,r,o,i)}function es(e,t,n,r,i,o){mc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&wu(t,n,!1),Vt(e,t,o);r=t.stateNode,Rp.current=t;var d=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,o),t.child=Gn(t,null,d,o)):qe(e,t,d,o),t.memoizedState=r.state,i&&wu(t,n,!0),t.child}function gc(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),Fl(e,t.containerInfo)}function vc(e,t,n,r,i){return Yn(),zl(i),t.flags|=256,qe(e,t,n,r),t.child}var ts={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,n){var r=t.pendingProps,i=we.current,o=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=lo(s,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ns(n),t.memoizedState=ts,e):rs(t,s));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return zp(e,t,s,r,d,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,d=i.sibling;var p={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=cn(i,p),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?o=cn(d,o):(o=Nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ns(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ts,r}return o=e.child,e=o.sibling,r=cn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rs(e,t){return t=lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&zl(r),Gn(t,e.child,null,n),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zp(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(u(422))),Yi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=lo({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=ns(s),t.memoizedState=ts,o);if(!(t.mode&1))return Yi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,o=Error(u(419)),r=ql(o,r,void 0),Yi(e,t,s,r)}if(d=(s&e.childLanes)!==0,nt||d){if(r=Oe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),Nt(r,e,i,-1))}return xs(),r=ql(Error(u(421))),Yi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,at=Zt(i.nextSibling),st=t,xe=!0,kt=null,e!==null&&(ft[pt++]=At,ft[pt++]=$t,ft[pt++]=vn,At=e.id,$t=e.overflow,vn=t),t=rs(t,r.children),t.flags|=4096,t)}function xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function is(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(qe(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xc(e,n,t);else if(e.tag===19)xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ui(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),is(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}is(t,!0,n,null,o);break;case"together":is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tp(e,t,n){switch(t.tag){case 3:gc(t),Yn();break;case 5:Ou(t);break;case 1:tt(t.type)&&zi(t);break;case 4:Fl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?yc(e,t,n):(he(we,we.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,pc(e,t,n)}return Vt(e,t,n)}var Sc,os,kc,jc;Sc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},os=function(){},kc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(zt.current);var o=null;switch(n){case"input":i=Oo(e,i),r=Oo(e,r),o=[];break;case"select":i=T({},i,{value:void 0}),r=T({},r,{value:void 0}),o=[];break;case"textarea":i=Fo(e,i),r=Fo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_i)}$o(n,r);var s;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var d=i[x];for(s in d)d.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(h.hasOwnProperty(x)?o||(o=[]):(o=o||[]).push(x,null));for(x in r){var p=r[x];if(d=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&p!==d&&(p!=null||d!=null))if(x==="style")if(d){for(s in d)!d.hasOwnProperty(s)||p&&p.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in p)p.hasOwnProperty(s)&&d[s]!==p[s]&&(n||(n={}),n[s]=p[s])}else n||(o||(o=[]),o.push(x,n)),n=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(o=o||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(o=o||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(h.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&ge("scroll",e),o||d===p||(o=[])):(o=o||[]).push(x,p))}n&&(o=o||[]).push("style",n);var x=o;(t.updateQueue=x)&&(t.flags|=4)}},jc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lp(e,t,n){var r=t.pendingProps;switch(_l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return tt(t.type)&&Ri(),Qe(t),null;case 3:return r=t.stateNode,qn(),ve(et),ve(He),Ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(gs(kt),kt=null))),os(e,t),Qe(t),null;case 5:Al(t);var i=wn(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)kc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Qe(t),null}if(e=wn(zt.current),Oi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Rt]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)ge(Lr[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":ra(r,o),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ge("invalid",r);break;case"textarea":la(r,o),ge("invalid",r)}$o(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var d=o[s];s==="children"?typeof d=="string"?r.textContent!==d&&(o.suppressHydrationWarning!==!0&&Ni(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&Ni(r.textContent,d,e),i=["children",""+d]):h.hasOwnProperty(s)&&d!=null&&s==="onScroll"&&ge("scroll",r)}switch(n){case"input":Mt(r),oa(r,o,!0);break;case"textarea":Mt(r),aa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ua(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Rt]=t,e[Mr]=r,Sc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Uo(n,r),n){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)ge(Lr[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":ra(e,r),i=Oo(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=T({},r,{value:void 0}),ge("invalid",e);break;case"textarea":la(e,r),i=Fo(e,r),ge("invalid",e);break;default:i=r}$o(n,i),d=i;for(o in d)if(d.hasOwnProperty(o)){var p=d[o];o==="style"?fa(e,p):o==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ca(e,p)):o==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&pr(e,p):typeof p=="number"&&pr(e,""+p):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(h.hasOwnProperty(o)?p!=null&&o==="onScroll"&&ge("scroll",e):p!=null&&X(e,o,p,s))}switch(n){case"input":Mt(e),oa(e,r,!1);break;case"textarea":Mt(e),aa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+se(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)jc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=wn(Ur.current),wn(zt.current),Oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Rt]=t,(o=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ni(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=t,t.stateNode=r}return Qe(t),null;case 13:if(ve(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&at!==null&&t.mode&1&&!(t.flags&128))Nu(),Yn(),t.flags|=98560,o=!1;else if(o=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Rt]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),o=!1}else kt!==null&&(gs(kt),kt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Le===0&&(Le=3):xs())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return qn(),os(e,t),e===null&&Ir(t.stateNode.containerInfo),Qe(t),null;case 10:return Il(t.type._context),Qe(t),null;case 17:return tt(t.type)&&Ri(),Qe(t),null;case 19:if(ve(we),o=t.memoizedState,o===null)return Qe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Qr(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ui(e),s!==null){for(t.flags|=128,Qr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(we,we.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ce()>tr&&(t.flags|=128,r=!0,Qr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ui(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!xe)return Qe(t),null}else 2*Ce()-o.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=we.current,he(we,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return ys(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Ip(e,t){switch(_l(t),t.tag){case 1:return tt(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),ve(et),ve(He),Ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Al(t),null;case 13:if(ve(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(we),null;case 4:return qn(),null;case 10:return Il(t.type._context),null;case 22:case 23:return ys(),null;case 24:return null;default:return null}}var Xi=!1,Ke=!1,Op=typeof WeakSet=="function"?WeakSet:Set,M=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(e,t,r)}else n.current=null}function ls(e,t,n){try{n()}catch(r){ke(e,t,r)}}var Ec=!1;function Mp(e,t){if(yl=hi,e=nu(),cl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,d=-1,p=-1,x=0,E=0,C=e,j=null;t:for(;;){for(var I;C!==n||i!==0&&C.nodeType!==3||(d=s+i),C!==o||r!==0&&C.nodeType!==3||(p=s+r),C.nodeType===3&&(s+=C.nodeValue.length),(I=C.firstChild)!==null;)j=C,C=I;for(;;){if(C===e)break t;if(j===n&&++x===i&&(d=s),j===o&&++E===r&&(p=s),(I=C.nextSibling)!==null)break;C=j,j=C.parentNode}C=I}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},hi=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var D=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var A=D.memoizedProps,Ne=D.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?A:jt(t.type,A),Ne);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(_){ke(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return D=Ec,Ec=!1,D}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ls(t,n,o)}i=i.next}while(i!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Mr],delete t[jl],delete t[vp],delete t[yp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_i));else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}var $e=null,Et=!1;function on(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(ui,n)}catch{}switch(n.tag){case 5:Ke||bn(n,t);case 6:var r=$e,i=Et;$e=null,on(e,t,n),$e=r,Et=i,$e!==null&&(Et?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Et?(e=$e,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),Er(e)):kl($e,n.stateNode));break;case 4:r=$e,i=Et,$e=n.stateNode.containerInfo,Et=!0,on(e,t,n),$e=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ls(n,t,s),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!Ke&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){ke(n,t,d)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,on(e,t,n),Ke=r):on(e,t,n);break;default:on(e,t,n)}}function Rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Op),t.forEach(function(r){var i=Wp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 5:$e=d.stateNode,Et=!1;break e;case 3:$e=d.stateNode.containerInfo,Et=!0;break e;case 4:$e=d.stateNode.containerInfo,Et=!0;break e}d=d.return}if($e===null)throw Error(u(160));Pc(o,s,i),$e=null,Et=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(x){ke(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zc(t,e),t=t.sibling}function zc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Lt(e),r&4){try{Kr(3,e,e.return),Ji(3,e)}catch(A){ke(e,e.return,A)}try{Kr(5,e,e.return)}catch(A){ke(e,e.return,A)}}break;case 1:Ct(t,e),Lt(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(Ct(t,e),Lt(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var i=e.stateNode;try{pr(i,"")}catch(A){ke(e,e.return,A)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&ia(i,o),Uo(d,s);var x=Uo(d,o);for(s=0;s<p.length;s+=2){var E=p[s],C=p[s+1];E==="style"?fa(i,C):E==="dangerouslySetInnerHTML"?ca(i,C):E==="children"?pr(i,C):X(i,E,C,x)}switch(d){case"input":Mo(i,o);break;case"textarea":sa(i,o);break;case"select":var j=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var I=o.value;I!=null?Ln(i,!!o.multiple,I,!1):j!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(A){ke(e,e.return,A)}}break;case 6:if(Ct(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(u(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(A){ke(e,e.return,A)}}break;case 3:if(Ct(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(A){ke(e,e.return,A)}break;case 4:Ct(t,e),Lt(e);break;case 13:Ct(t,e),Lt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fs=Ce())),r&4&&Rc(e);break;case 22:if(E=n!==null&&n.memoizedState!==null,e.mode&1?(Ke=(x=Ke)||E,Ct(t,e),Ke=x):Ct(t,e),Lt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!E&&e.mode&1)for(M=e,E=e.child;E!==null;){for(C=M=E;M!==null;){switch(j=M,I=j.child,j.tag){case 0:case 11:case 14:case 15:Kr(4,j,j.return);break;case 1:bn(j,j.return);var D=j.stateNode;if(typeof D.componentWillUnmount=="function"){r=j,n=j.return;try{t=r,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(A){ke(r,n,A)}}break;case 5:bn(j,j.return);break;case 22:if(j.memoizedState!==null){Ic(C);continue}}I!==null?(I.return=j,M=I):Ic(C)}E=E.sibling}e:for(E=null,C=e;;){if(C.tag===5){if(E===null){E=C;try{i=C.stateNode,x?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=C.stateNode,p=C.memoizedProps.style,s=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=da("display",s))}catch(A){ke(e,e.return,A)}}}else if(C.tag===6){if(E===null)try{C.stateNode.nodeValue=x?"":C.memoizedProps}catch(A){ke(e,e.return,A)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;E===C&&(E=null),C=C.return}E===C&&(E=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:Ct(t,e),Lt(e),r&4&&Rc(e);break;case 21:break;default:Ct(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pr(i,""),r.flags&=-33);var o=_c(e);us(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,d=_c(e);as(e,d,s);break;default:throw Error(u(161))}}catch(p){ke(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dp(e,t,n){M=e,Tc(e)}function Tc(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Xi;if(!s){var d=i.alternate,p=d!==null&&d.memoizedState!==null||Ke;d=Xi;var x=Ke;if(Xi=s,(Ke=p)&&!x)for(M=i;M!==null;)s=M,p=s.child,s.tag===22&&s.memoizedState!==null?Oc(i):p!==null?(p.return=s,M=p):Oc(i);for(;o!==null;)M=o,Tc(o),o=o.sibling;M=i,Xi=d,Ke=x}Lc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,M=o):Lc(e)}}function Lc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ke||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Iu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iu(t,s,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var E=x.memoizedState;if(E!==null){var C=E.dehydrated;C!==null&&Er(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ke||t.flags&512&&ss(t)}catch(j){ke(t,t.return,j)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Ic(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Oc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(p){ke(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(p){ke(t,i,p)}}var o=t.return;try{ss(t)}catch(p){ke(t,o,p)}break;case 5:var s=t.return;try{ss(t)}catch(p){ke(t,s,p)}}}catch(p){ke(t,t.return,p)}if(t===e){M=null;break}var d=t.sibling;if(d!==null){d.return=t.return,M=d;break}M=t.return}}var Fp=Math.ceil,qi=b.ReactCurrentDispatcher,cs=b.ReactCurrentOwner,gt=b.ReactCurrentBatchConfig,ce=0,Oe=null,_e=null,Ue=0,ut=0,er=bt(0),Le=0,Yr=null,kn=0,Zi=0,ds=0,Gr=null,rt=null,fs=0,tr=1/0,Ht=null,bi=!1,ps=null,ln=null,eo=!1,sn=null,to=0,Xr=0,ms=null,no=-1,ro=0;function Ze(){return ce&6?Ce():no!==-1?no:no=Ce()}function an(e){return e.mode&1?ce&2&&Ue!==0?Ue&-Ue:wp.transition!==null?(ro===0&&(ro=_a()),ro):(e=me,e!==0||(e=window.event,e=e===void 0?16:Da(e.type)),e):1}function Nt(e,t,n,r){if(50<Xr)throw Xr=0,ms=null,Error(u(185));xr(e,n,r),(!(ce&2)||e!==Oe)&&(e===Oe&&(!(ce&2)&&(Zi|=n),Le===4&&un(e,Ue)),it(e,r),n===1&&ce===0&&!(t.mode&1)&&(tr=Ce()+500,Ti&&tn()))}function it(e,t){var n=e.callbackNode;wf(e,t);var r=fi(e,e===Oe?Ue:0);if(r===0)n!==null&&Ea(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ea(n),t===1)e.tag===0?xp(Dc.bind(null,e)):Su(Dc.bind(null,e)),hp(function(){!(ce&6)&&tn()}),n=null;else{switch(Pa(r)){case 1:n=Yo;break;case 4:n=Ca;break;case 16:n=ai;break;case 536870912:n=Na;break;default:n=ai}n=Wc(n,Mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mc(e,t){if(no=-1,ro=0,ce&6)throw Error(u(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=fi(e,e===Oe?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=io(e,r);else{t=r;var i=ce;ce|=2;var o=Ac();(Oe!==e||Ue!==t)&&(Ht=null,tr=Ce()+500,En(e,t));do try{Up();break}catch(d){Fc(e,d)}while(!0);Ll(),qi.current=o,ce=i,_e!==null?t=0:(Oe=null,Ue=0,t=Le)}if(t!==0){if(t===2&&(i=Go(e),i!==0&&(r=i,t=hs(e,i))),t===1)throw n=Yr,En(e,0),un(e,r),it(e,Ce()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ap(i)&&(t=io(e,r),t===2&&(o=Go(e),o!==0&&(r=o,t=hs(e,o))),t===1))throw n=Yr,En(e,0),un(e,r),it(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:Cn(e,rt,Ht);break;case 3:if(un(e,r),(r&130023424)===r&&(t=fs+500-Ce(),10<t)){if(fi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sl(Cn.bind(null,e,rt,Ht),t);break}Cn(e,rt,Ht);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-wt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=Sl(Cn.bind(null,e,rt,Ht),r);break}Cn(e,rt,Ht);break;case 5:Cn(e,rt,Ht);break;default:throw Error(u(329))}}}return it(e,Ce()),e.callbackNode===n?Mc.bind(null,e):null}function hs(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=io(e,t),e!==2&&(t=rt,rt=n,t!==null&&gs(t)),e}function gs(e){rt===null?rt=e:rt.push.apply(rt,e)}function Ap(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!St(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~ds,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function Dc(e){if(ce&6)throw Error(u(327));nr();var t=fi(e,0);if(!(t&1))return it(e,Ce()),null;var n=io(e,t);if(e.tag!==0&&n===2){var r=Go(e);r!==0&&(t=r,n=hs(e,r))}if(n===1)throw n=Yr,En(e,0),un(e,t),it(e,Ce()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,rt,Ht),it(e,Ce()),null}function vs(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(tr=Ce()+500,Ti&&tn())}}function jn(e){sn!==null&&sn.tag===0&&!(ce&6)&&nr();var t=ce;ce|=1;var n=gt.transition,r=me;try{if(gt.transition=null,me=1,e)return e()}finally{me=r,gt.transition=n,ce=t,!(ce&6)&&tn()}}function ys(){ut=er.current,ve(er)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mp(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(_l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:qn(),ve(et),ve(He),Ul();break;case 5:Al(r);break;case 4:qn();break;case 13:ve(we);break;case 19:ve(we);break;case 10:Il(r.type._context);break;case 22:case 23:ys()}n=n.return}if(Oe=e,_e=e=cn(e.current,null),Ue=ut=t,Le=0,Yr=null,ds=Zi=kn=0,rt=Gr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}xn=null}return e}function Fc(e,t){do{var n=_e;try{if(Ll(),Bi.current=Qi,Vi){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vi=!1}if(Sn=0,Ie=Te=Se=null,Br=!1,Vr=0,cs.current=null,n===null||n.return===null){Le=1,Yr=t,_e=null;break}e:{var o=e,s=n.return,d=n,p=t;if(t=Ue,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,E=d,C=E.tag;if(!(E.mode&1)&&(C===0||C===11||C===15)){var j=E.alternate;j?(E.updateQueue=j.updateQueue,E.memoizedState=j.memoizedState,E.lanes=j.lanes):(E.updateQueue=null,E.memoizedState=null)}var I=ac(s);if(I!==null){I.flags&=-257,uc(I,s,d,o,t),I.mode&1&&sc(o,x,t),t=I,p=x;var D=t.updateQueue;if(D===null){var A=new Set;A.add(p),t.updateQueue=A}else D.add(p);break e}else{if(!(t&1)){sc(o,x,t),xs();break e}p=Error(u(426))}}else if(xe&&d.mode&1){var Ne=ac(s);if(Ne!==null){!(Ne.flags&65536)&&(Ne.flags|=256),uc(Ne,s,d,o,t),zl(Zn(p,d));break e}}o=p=Zn(p,d),Le!==4&&(Le=2),Gr===null?Gr=[o]:Gr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=oc(o,p,t);Lu(o,v);break e;case 1:d=p;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ln===null||!ln.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=lc(o,d,t);Lu(o,_);break e}}o=o.return}while(o!==null)}Uc(n)}catch(U){t=U,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function Ac(){var e=qi.current;return qi.current=Qi,e===null?Qi:e}function xs(){(Le===0||Le===3||Le===2)&&(Le=4),Oe===null||!(kn&268435455)&&!(Zi&268435455)||un(Oe,Ue)}function io(e,t){var n=ce;ce|=2;var r=Ac();(Oe!==e||Ue!==t)&&(Ht=null,En(e,t));do try{$p();break}catch(i){Fc(e,i)}while(!0);if(Ll(),ce=n,qi.current=r,_e!==null)throw Error(u(261));return Oe=null,Ue=0,Le}function $p(){for(;_e!==null;)$c(_e)}function Up(){for(;_e!==null&&!df();)$c(_e)}function $c(e){var t=Hc(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Uc(e):_e=t,cs.current=null}function Uc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ip(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,_e=null;return}}else if(n=Lp(n,t,ut),n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Le===0&&(Le=5)}function Cn(e,t,n){var r=me,i=gt.transition;try{gt.transition=null,me=1,Bp(e,t,n,r)}finally{gt.transition=i,me=r}return null}function Bp(e,t,n,r){do nr();while(sn!==null);if(ce&6)throw Error(u(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sf(e,o),e===Oe&&(_e=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Wc(ai,function(){return nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=gt.transition,gt.transition=null;var s=me;me=1;var d=ce;ce|=4,cs.current=null,Mp(e,n),zc(n,e),sp(xl),hi=!!yl,xl=yl=null,e.current=n,Dp(n),ff(),ce=d,me=s,gt.transition=o}else e.current=n;if(eo&&(eo=!1,sn=e,to=i),o=e.pendingLanes,o===0&&(ln=null),hf(n.stateNode),it(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bi)throw bi=!1,e=ps,ps=null,e;return to&1&&e.tag!==0&&nr(),o=e.pendingLanes,o&1?e===ms?Xr++:(Xr=0,ms=e):Xr=0,tn(),null}function nr(){if(sn!==null){var e=Pa(to),t=gt.transition,n=me;try{if(gt.transition=null,me=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,to=0,ce&6)throw Error(u(331));var i=ce;for(ce|=4,M=e.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var d=o.deletions;if(d!==null){for(var p=0;p<d.length;p++){var x=d[p];for(M=x;M!==null;){var E=M;switch(E.tag){case 0:case 11:case 15:Kr(8,E,o)}var C=E.child;if(C!==null)C.return=E,M=C;else for(;M!==null;){E=M;var j=E.sibling,I=E.return;if(Cc(E),E===x){M=null;break}if(j!==null){j.return=I,M=j;break}M=I}}}var D=o.alternate;if(D!==null){var A=D.child;if(A!==null){D.child=null;do{var Ne=A.sibling;A.sibling=null,A=Ne}while(A!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kr(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,M=v;break e}M=o.return}}var m=e.current;for(M=m;M!==null;){s=M;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,M=y;else e:for(s=m;M!==null;){if(d=M,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Ji(9,d)}}catch(U){ke(d,d.return,U)}if(d===s){M=null;break e}var _=d.sibling;if(_!==null){_.return=d.return,M=_;break e}M=d.return}}if(ce=i,tn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(ui,e)}catch{}r=!0}return r}finally{me=n,gt.transition=t}}return!1}function Bc(e,t,n){t=Zn(n,t),t=oc(e,t,1),e=rn(e,t,1),t=Ze(),e!==null&&(xr(e,1,t),it(e,t))}function ke(e,t,n){if(e.tag===3)Bc(e,e,n);else for(;t!==null;){if(t.tag===3){Bc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=Zn(n,e),e=lc(t,e,1),t=rn(t,e,1),e=Ze(),t!==null&&(xr(t,1,e),it(t,e));break}}t=t.return}}function Vp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ue&n)===n&&(Le===4||Le===3&&(Ue&130023424)===Ue&&500>Ce()-fs?En(e,0):ds|=n),it(e,t)}function Vc(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var n=Ze();e=Ut(e,t),e!==null&&(xr(e,t,n),it(e,n))}function Hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vc(e,n)}function Wp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Vc(e,n)}var Hc;Hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,Tp(e,t,n);nt=!!(e.flags&131072)}else nt=!1,xe&&t.flags&1048576&&ku(t,Ii,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gi(e,t),e=t.pendingProps;var i=Wn(t,He.current);Jn(t,n),i=Hl(null,t,r,e,i,n);var o=Wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,zi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dl(t),i.updater=Ki,t.stateNode=i,i._reactInternals=t,Jl(t,r,e,n),t=es(null,t,r,!0,o,n)):(t.tag=0,xe&&o&&Nl(t),qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Kp(r),e=jt(r,e),i){case 0:t=bl(null,t,r,e,n);break e;case 1:t=hc(null,t,r,e,n);break e;case 11:t=cc(null,t,r,e,n);break e;case 14:t=dc(null,t,r,jt(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),bl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),hc(e,t,r,i,n);case 3:e:{if(gc(t),e===null)throw Error(u(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Tu(e,t),$i(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zn(Error(u(423)),t),t=vc(e,t,r,n,i);break e}else if(r!==i){i=Zn(Error(u(424)),t),t=vc(e,t,r,n,i);break e}else for(at=Zt(t.stateNode.containerInfo.firstChild),st=t,xe=!0,kt=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=Vt(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return Ou(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,wl(r,i)?s=null:o!==null&&wl(r,o)&&(t.flags|=32),mc(e,t),qe(e,t,s,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return yc(e,t,n);case 4:return Fl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),cc(e,t,r,i,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,he(Di,r._currentValue),r._currentValue=s,o!==null)if(St(o.value,s)){if(o.children===i.children&&!et.current){t=Vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var d=o.dependencies;if(d!==null){s=o.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(o.tag===1){p=Bt(-1,n&-n),p.tag=2;var x=o.updateQueue;if(x!==null){x=x.shared;var E=x.pending;E===null?p.next=p:(p.next=E.next,E.next=p),x.pending=p}}o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),Ol(o.return,n,t),d.lanes|=n;break}p=p.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(u(341));s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),Ol(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=mt(i),r=r(i),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,i=jt(r,t.pendingProps),i=jt(r.type,i),dc(e,t,r,i,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Gi(e,t),t.tag=1,tt(r)?(e=!0,zi(t)):e=!1,Jn(t,n),rc(t,r,i),Jl(t,r,i,n),es(null,t,r,!0,e,n);case 19:return wc(e,t,n);case 22:return pc(e,t,n)}throw Error(u(156,t.tag))};function Wc(e,t){return ja(e,t)}function Qp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Qp(e,t,n,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kp(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ve)return 11;if(e===Je)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ws(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case V:return Nn(n.children,i,o,t);case Ee:s=8,i|=8;break;case Fe:return e=vt(12,n,t,i|2),e.elementType=Fe,e.lanes=o,e;case Re:return e=vt(13,n,t,i),e.elementType=Re,e.lanes=o,e;case Xe:return e=vt(19,n,t,i),e.elementType=Xe,e.lanes=o,e;case pe:return lo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case be:s=10;break e;case dt:s=9;break e;case Ve:s=11;break e;case Je:s=14;break e;case ze:s=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=vt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function lo(e,t,n,r){return e=vt(22,e,r,t),e.elementType=pe,e.lanes=n,e.stateNode={isHidden:!1},e}function Ss(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function ks(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function js(e,t,n,r,i,o,s,d,p){return e=new Yp(e,t,n,d,p),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(o),e}function Gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qc(e){if(!e)return en;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(tt(n))return xu(e,n,t)}return t}function Kc(e,t,n,r,i,o,s,d,p){return e=js(n,r,!0,e,i,o,s,d,p),e.context=Qc(null),n=e.current,r=Ze(),i=an(n),o=Bt(r,i),o.callback=t??null,rn(n,o,i),e.current.lanes=i,xr(e,i,r),it(e,r),e}function so(e,t,n,r){var i=t.current,o=Ze(),s=an(i);return n=Qc(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,s),e!==null&&(Nt(e,i,s,o),Ai(e,i,s)),s}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){Yc(e,t),(e=e.alternate)&&Yc(e,t)}function Xp(){return null}var Gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cs(e){this._internalRoot=e}uo.prototype.render=Cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));so(e,t,null,null)},uo.prototype.unmount=Cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){so(null,e,null,null)}),t[Dt]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ta();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Oa(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xc(){}function Jp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var x=ao(s);o.call(x)}}var s=Kc(t,r,e,0,null,!1,!1,"",Xc);return e._reactRootContainer=s,e[Dt]=s.current,Ir(e.nodeType===8?e.parentNode:e),jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var x=ao(p);d.call(x)}}var p=js(e,0,!1,null,null,!1,!1,"",Xc);return e._reactRootContainer=p,e[Dt]=p.current,Ir(e.nodeType===8?e.parentNode:e),jn(function(){so(t,p,n,r)}),p}function fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var d=i;i=function(){var p=ao(s);d.call(p)}}so(t,s,e,i)}else s=Jp(n,t,e,i,r);return ao(s)}Ra=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(Jo(t,n|1),it(t,Ce()),!(ce&6)&&(tr=Ce()+500,tn()))}break;case 13:jn(function(){var r=Ut(e,1);if(r!==null){var i=Ze();Nt(r,e,1,i)}}),Es(e,1)}},qo=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ze();Nt(t,e,134217728,n)}Es(e,134217728)}},za=function(e){if(e.tag===13){var t=an(e),n=Ut(e,t);if(n!==null){var r=Ze();Nt(n,e,t,r)}Es(e,t)}},Ta=function(){return me},La=function(e,t){var n=me;try{return me=e,t()}finally{me=n}},Ho=function(e,t,n){switch(t){case"input":if(Mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pi(r);if(!i)throw Error(u(90));xt(r),Mo(r,i)}}}break;case"textarea":sa(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}},ga=vs,va=jn;var qp={usingClientEntryPoint:!1,Events:[Dr,Vn,Pi,ma,ha,vs]},Jr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zp={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sa(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||Xp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{ui=po.inject(Zp),Pt=po}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(u(200));return Gp(e,t,null,n)},ot.createRoot=function(e,t){if(!Ns(e))throw Error(u(299));var n=!1,r="",i=Gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=js(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new Cs(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Sa(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return jn(e)},ot.hydrate=function(e,t,n){if(!co(t))throw Error(u(200));return fo(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Gc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Kc(t,null,e,1,n??null,i,!1,o,s),e[Dt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uo(t)},ot.render=function(e,t,n){if(!co(t))throw Error(u(200));return fo(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!co(e))throw Error(u(40));return e._reactRootContainer?(jn(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},ot.unstable_batchedUpdates=vs,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!co(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return fo(e,t,n,!1,r)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var rd;function sm(){if(rd)return Rs.exports;rd=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(a){console.error(a)}}return l(),Rs.exports=lm(),Rs.exports}var id;function am(){if(id)return mo;id=1;var l=sm();return mo.createRoot=l.createRoot,mo.hydrateRoot=l.hydrateRoot,mo}var um=am(),Ye=function(){return Ye=Object.assign||function(a){for(var u,f=1,h=arguments.length;f<h;f++){u=arguments[f];for(var w in u)Object.prototype.hasOwnProperty.call(u,w)&&(a[w]=u[w])}return a},Ye.apply(this,arguments)};function ei(l,a,u){if(u||arguments.length===2)for(var f=0,h=a.length,w;f<h;f++)(w||!(f in a))&&(w||(w=Array.prototype.slice.call(a,0,f)),w[f]=a[f]);return l.concat(w||Array.prototype.slice.call(a))}var ye="-ms-",br="-moz-",fe="-webkit-",jd="comm",Po="rule",Js="decl",cm="@import",Ed="@keyframes",dm="@layer",Cd=Math.abs,qs=String.fromCharCode,$s=Object.assign;function fm(l,a){return De(l,0)^45?(((a<<2^De(l,0))<<2^De(l,1))<<2^De(l,2))<<2^De(l,3):0}function Nd(l){return l.trim()}function Wt(l,a){return(l=a.exec(l))?l[0]:l}function re(l,a,u){return l.replace(a,u)}function xo(l,a,u){return l.indexOf(a,u)}function De(l,a){return l.charCodeAt(a)|0}function lr(l,a,u){return l.slice(a,u)}function Ot(l){return l.length}function _d(l){return l.length}function Zr(l,a){return a.push(l),l}function pm(l,a){return l.map(a).join("")}function od(l,a){return l.filter(function(u){return!Wt(u,a)})}var Ro=1,sr=1,Pd=0,yt=0,Pe=0,dr="";function zo(l,a,u,f,h,w,k,P){return{value:l,root:a,parent:u,type:f,props:h,children:w,line:Ro,column:sr,length:k,return:"",siblings:P}}function fn(l,a){return $s(zo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},a)}function rr(l){for(;l.root;)l=fn(l.root,{children:[l]});Zr(l,l.siblings)}function mm(){return Pe}function hm(){return Pe=yt>0?De(dr,--yt):0,sr--,Pe===10&&(sr=1,Ro--),Pe}function _t(){return Pe=yt<Pd?De(dr,yt++):0,sr++,Pe===10&&(sr=1,Ro++),Pe}function Tn(){return De(dr,yt)}function wo(){return yt}function To(l,a){return lr(dr,l,a)}function Us(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gm(l){return Ro=sr=1,Pd=Ot(dr=l),yt=0,[]}function vm(l){return dr="",l}function Ls(l){return Nd(To(yt-1,Bs(l===91?l+2:l===40?l+1:l)))}function ym(l){for(;(Pe=Tn())&&Pe<33;)_t();return Us(l)>2||Us(Pe)>3?"":" "}function xm(l,a){for(;--a&&_t()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return To(l,wo()+(a<6&&Tn()==32&&_t()==32))}function Bs(l){for(;_t();)switch(Pe){case l:return yt;case 34:case 39:l!==34&&l!==39&&Bs(Pe);break;case 40:l===41&&Bs(l);break;case 92:_t();break}return yt}function wm(l,a){for(;_t()&&l+Pe!==57;)if(l+Pe===84&&Tn()===47)break;return"/*"+To(a,yt-1)+"*"+qs(l===47?l:_t())}function Sm(l){for(;!Us(Tn());)_t();return To(l,yt)}function km(l){return vm(So("",null,null,null,[""],l=gm(l),0,[0],l))}function So(l,a,u,f,h,w,k,P,N){for(var L=0,O=0,z=k,$=0,H=0,te=0,W=1,Y=1,ue=1,ne=0,X="",b=h,oe=w,J=f,V=X;Y;)switch(te=ne,ne=_t()){case 40:if(te!=108&&De(V,z-1)==58){xo(V+=re(Ls(ne),"&","&\f"),"&\f",Cd(L?P[L-1]:0))!=-1&&(ue=-1);break}case 34:case 39:case 91:V+=Ls(ne);break;case 9:case 10:case 13:case 32:V+=ym(te);break;case 92:V+=xm(wo()-1,7);continue;case 47:switch(Tn()){case 42:case 47:Zr(jm(wm(_t(),wo()),a,u,N),N);break;default:V+="/"}break;case 123*W:P[L++]=Ot(V)*ue;case 125*W:case 59:case 0:switch(ne){case 0:case 125:Y=0;case 59+O:ue==-1&&(V=re(V,/\f/g,"")),H>0&&Ot(V)-z&&Zr(H>32?sd(V+";",f,u,z-1,N):sd(re(V," ","")+";",f,u,z-2,N),N);break;case 59:V+=";";default:if(Zr(J=ld(V,a,u,L,O,h,P,X,b=[],oe=[],z,w),w),ne===123)if(O===0)So(V,a,J,J,b,w,z,P,oe);else switch($===99&&De(V,3)===110?100:$){case 100:case 108:case 109:case 115:So(l,J,J,f&&Zr(ld(l,J,J,0,0,h,P,X,h,b=[],z,oe),oe),h,oe,z,P,f?b:oe);break;default:So(V,J,J,J,[""],oe,0,P,oe)}}L=O=H=0,W=ue=1,X=V="",z=k;break;case 58:z=1+Ot(V),H=te;default:if(W<1){if(ne==123)--W;else if(ne==125&&W++==0&&hm()==125)continue}switch(V+=qs(ne),ne*W){case 38:ue=O>0?1:(V+="\f",-1);break;case 44:P[L++]=(Ot(V)-1)*ue,ue=1;break;case 64:Tn()===45&&(V+=Ls(_t())),$=Tn(),O=z=Ot(X=V+=Sm(wo())),ne++;break;case 45:te===45&&Ot(V)==2&&(W=0)}}return w}function ld(l,a,u,f,h,w,k,P,N,L,O,z){for(var $=h-1,H=h===0?w:[""],te=_d(H),W=0,Y=0,ue=0;W<f;++W)for(var ne=0,X=lr(l,$+1,$=Cd(Y=k[W])),b=l;ne<te;++ne)(b=Nd(Y>0?H[ne]+" "+X:re(X,/&\f/g,H[ne])))&&(N[ue++]=b);return zo(l,a,u,h===0?Po:P,N,L,O,z)}function jm(l,a,u,f){return zo(l,a,u,jd,qs(mm()),lr(l,2,-2),0,f)}function sd(l,a,u,f,h){return zo(l,a,u,Js,lr(l,0,f),lr(l,f+1,-1),f,h)}function Rd(l,a,u){switch(fm(l,a)){case 5103:return fe+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+l+l;case 4789:return br+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+l+br+l+ye+l+l;case 5936:switch(De(l,a+11)){case 114:return fe+l+ye+re(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return fe+l+ye+re(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return fe+l+ye+re(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return fe+l+ye+l+l;case 6165:return fe+l+ye+"flex-"+l+l;case 5187:return fe+l+re(l,/(\w+).+(:[^]+)/,fe+"box-$1$2"+ye+"flex-$1$2")+l;case 5443:return fe+l+ye+"flex-item-"+re(l,/flex-|-self/g,"")+(Wt(l,/flex-|baseline/)?"":ye+"grid-row-"+re(l,/flex-|-self/g,""))+l;case 4675:return fe+l+ye+"flex-line-pack"+re(l,/align-content|flex-|-self/g,"")+l;case 5548:return fe+l+ye+re(l,"shrink","negative")+l;case 5292:return fe+l+ye+re(l,"basis","preferred-size")+l;case 6060:return fe+"box-"+re(l,"-grow","")+fe+l+ye+re(l,"grow","positive")+l;case 4554:return fe+re(l,/([^-])(transform)/g,"$1"+fe+"$2")+l;case 6187:return re(re(re(l,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),l,"")+l;case 5495:case 3959:return re(l,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return re(re(l,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+l+l;case 4200:if(!Wt(l,/flex-|baseline/))return ye+"grid-column-align"+lr(l,a)+l;break;case 2592:case 3360:return ye+re(l,"template-","")+l;case 4384:case 3616:return u&&u.some(function(f,h){return a=h,Wt(f.props,/grid-\w+-end/)})?~xo(l+(u=u[a].value),"span",0)?l:ye+re(l,"-start","")+l+ye+"grid-row-span:"+(~xo(u,"span",0)?Wt(u,/\d+/):+Wt(u,/\d+/)-+Wt(l,/\d+/))+";":ye+re(l,"-start","")+l;case 4896:case 4128:return u&&u.some(function(f){return Wt(f.props,/grid-\w+-start/)})?l:ye+re(re(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return re(l,/(.+)-inline(.+)/,fe+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ot(l)-1-a>6)switch(De(l,a+1)){case 109:if(De(l,a+4)!==45)break;case 102:return re(l,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+br+(De(l,a+3)==108?"$3":"$2-$3"))+l;case 115:return~xo(l,"stretch",0)?Rd(re(l,"stretch","fill-available"),a,u)+l:l}break;case 5152:case 5920:return re(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,h,w,k,P,N,L){return ye+h+":"+w+L+(k?ye+h+"-span:"+(P?N:+N-+w)+L:"")+l});case 4949:if(De(l,a+6)===121)return re(l,":",":"+fe)+l;break;case 6444:switch(De(l,De(l,14)===45?18:11)){case 120:return re(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(De(l,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+ye+"$2box$3")+l;case 100:return re(l,":",":"+ye)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(l,"scroll-","scroll-snap-")+l}return l}function Eo(l,a){for(var u="",f=0;f<l.length;f++)u+=a(l[f],f,l,a)||"";return u}function Em(l,a,u,f){switch(l.type){case dm:if(l.children.length)break;case cm:case Js:return l.return=l.return||l.value;case jd:return"";case Ed:return l.return=l.value+"{"+Eo(l.children,f)+"}";case Po:if(!Ot(l.value=l.props.join(",")))return""}return Ot(u=Eo(l.children,f))?l.return=l.value+"{"+u+"}":""}function Cm(l){var a=_d(l);return function(u,f,h,w){for(var k="",P=0;P<a;P++)k+=l[P](u,f,h,w)||"";return k}}function Nm(l){return function(a){a.root||(a=a.return)&&l(a)}}function _m(l,a,u,f){if(l.length>-1&&!l.return)switch(l.type){case Js:l.return=Rd(l.value,l.length,u);return;case Ed:return Eo([fn(l,{value:re(l.value,"@","@"+fe)})],f);case Po:if(l.length)return pm(u=l.props,function(h){switch(Wt(h,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rr(fn(l,{props:[re(h,/:(read-\w+)/,":"+br+"$1")]})),rr(fn(l,{props:[h]})),$s(l,{props:od(u,f)});break;case"::placeholder":rr(fn(l,{props:[re(h,/:(plac\w+)/,":"+fe+"input-$1")]})),rr(fn(l,{props:[re(h,/:(plac\w+)/,":"+br+"$1")]})),rr(fn(l,{props:[re(h,/:(plac\w+)/,ye+"input-$1")]})),rr(fn(l,{props:[h]})),$s(l,{props:od(u,f)});break}return""})}}var Pm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ct={},ar=typeof process<"u"&&ct!==void 0&&(ct.REACT_APP_SC_ATTR||ct.SC_ATTR)||"data-styled",zd="active",Td="data-styled-version",Lo="6.1.13",Zs=`/*!sc*/
`,Co=typeof window<"u"&&"HTMLElement"in window,Rm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ct!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==""?ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ct!==void 0&&ct.SC_DISABLE_SPEEDY!==void 0&&ct.SC_DISABLE_SPEEDY!==""&&ct.SC_DISABLE_SPEEDY!=="false"&&ct.SC_DISABLE_SPEEDY),zm={},Io=Object.freeze([]),ur=Object.freeze({});function Ld(l,a,u){return u===void 0&&(u=ur),l.theme!==u.theme&&l.theme||a||u.theme}var Id=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lm=/(^-|-$)/g;function ad(l){return l.replace(Tm,"-").replace(Lm,"")}var Im=/(a)(d)/gi,ho=52,ud=function(l){return String.fromCharCode(l+(l>25?39:97))};function Vs(l){var a,u="";for(a=Math.abs(l);a>ho;a=a/ho|0)u=ud(a%ho)+u;return(ud(a%ho)+u).replace(Im,"$1-$2")}var Is,Od=5381,or=function(l,a){for(var u=a.length;u;)l=33*l^a.charCodeAt(--u);return l},Md=function(l){return or(Od,l)};function Dd(l){return Vs(Md(l)>>>0)}function Om(l){return l.displayName||l.name||"Component"}function Os(l){return typeof l=="string"&&!0}var Fd=typeof Symbol=="function"&&Symbol.for,Ad=Fd?Symbol.for("react.memo"):60115,Mm=Fd?Symbol.for("react.forward_ref"):60112,Dm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$d={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Am=((Is={})[Mm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Is[Ad]=$d,Is);function cd(l){return("type"in(a=l)&&a.type.$$typeof)===Ad?$d:"$$typeof"in l?Am[l.$$typeof]:Dm;var a}var $m=Object.defineProperty,Um=Object.getOwnPropertyNames,dd=Object.getOwnPropertySymbols,Bm=Object.getOwnPropertyDescriptor,Vm=Object.getPrototypeOf,fd=Object.prototype;function Ud(l,a,u){if(typeof a!="string"){if(fd){var f=Vm(a);f&&f!==fd&&Ud(l,f,u)}var h=Um(a);dd&&(h=h.concat(dd(a)));for(var w=cd(l),k=cd(a),P=0;P<h.length;++P){var N=h[P];if(!(N in Fm||u&&u[N]||k&&N in k||w&&N in w)){var L=Bm(a,N);try{$m(l,N,L)}catch{}}}}return l}function cr(l){return typeof l=="function"}function bs(l){return typeof l=="object"&&"styledComponentId"in l}function zn(l,a){return l&&a?"".concat(l," ").concat(a):l||a||""}function Hs(l,a){if(l.length===0)return"";for(var u=l[0],f=1;f<l.length;f++)u+=l[f];return u}function ti(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Ws(l,a,u){if(u===void 0&&(u=!1),!u&&!ti(l)&&!Array.isArray(l))return a;if(Array.isArray(a))for(var f=0;f<a.length;f++)l[f]=Ws(l[f],a[f]);else if(ti(a))for(var f in a)l[f]=Ws(l[f],a[f]);return l}function ea(l,a){Object.defineProperty(l,"toString",{value:a})}function ni(l){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Hm=function(){function l(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return l.prototype.indexOfGroup=function(a){for(var u=0,f=0;f<a;f++)u+=this.groupSizes[f];return u},l.prototype.insertRules=function(a,u){if(a>=this.groupSizes.length){for(var f=this.groupSizes,h=f.length,w=h;a>=w;)if((w<<=1)<0)throw ni(16,"".concat(a));this.groupSizes=new Uint32Array(w),this.groupSizes.set(f),this.length=w;for(var k=h;k<w;k++)this.groupSizes[k]=0}for(var P=this.indexOfGroup(a+1),N=(k=0,u.length);k<N;k++)this.tag.insertRule(P,u[k])&&(this.groupSizes[a]++,P++)},l.prototype.clearGroup=function(a){if(a<this.length){var u=this.groupSizes[a],f=this.indexOfGroup(a),h=f+u;this.groupSizes[a]=0;for(var w=f;w<h;w++)this.tag.deleteRule(f)}},l.prototype.getGroup=function(a){var u="";if(a>=this.length||this.groupSizes[a]===0)return u;for(var f=this.groupSizes[a],h=this.indexOfGroup(a),w=h+f,k=h;k<w;k++)u+="".concat(this.tag.getRule(k)).concat(Zs);return u},l}(),ko=new Map,No=new Map,jo=1,go=function(l){if(ko.has(l))return ko.get(l);for(;No.has(jo);)jo++;var a=jo++;return ko.set(l,a),No.set(a,l),a},Wm=function(l,a){jo=a+1,ko.set(l,a),No.set(a,l)},Qm="style[".concat(ar,"][").concat(Td,'="').concat(Lo,'"]'),Km=new RegExp("^".concat(ar,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ym=function(l,a,u){for(var f,h=u.split(","),w=0,k=h.length;w<k;w++)(f=h[w])&&l.registerName(a,f)},Gm=function(l,a){for(var u,f=((u=a.textContent)!==null&&u!==void 0?u:"").split(Zs),h=[],w=0,k=f.length;w<k;w++){var P=f[w].trim();if(P){var N=P.match(Km);if(N){var L=0|parseInt(N[1],10),O=N[2];L!==0&&(Wm(O,L),Ym(l,O,N[3]),l.getTag().insertRules(L,h)),h.length=0}else h.push(P)}}},pd=function(l){for(var a=document.querySelectorAll(Qm),u=0,f=a.length;u<f;u++){var h=a[u];h&&h.getAttribute(ar)!==zd&&(Gm(l,h),h.parentNode&&h.parentNode.removeChild(h))}};function Xm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bd=function(l){var a=document.head,u=l||a,f=document.createElement("style"),h=function(P){var N=Array.from(P.querySelectorAll("style[".concat(ar,"]")));return N[N.length-1]}(u),w=h!==void 0?h.nextSibling:null;f.setAttribute(ar,zd),f.setAttribute(Td,Lo);var k=Xm();return k&&f.setAttribute("nonce",k),u.insertBefore(f,w),f},Jm=function(){function l(a){this.element=Bd(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var f=document.styleSheets,h=0,w=f.length;h<w;h++){var k=f[h];if(k.ownerNode===u)return k}throw ni(17)}(this.element),this.length=0}return l.prototype.insertRule=function(a,u){try{return this.sheet.insertRule(u,a),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},l.prototype.getRule=function(a){var u=this.sheet.cssRules[a];return u&&u.cssText?u.cssText:""},l}(),qm=function(){function l(a){this.element=Bd(a),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(a,u){if(a<=this.length&&a>=0){var f=document.createTextNode(u);return this.element.insertBefore(f,this.nodes[a]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},l.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},l}(),Zm=function(){function l(a){this.rules=[],this.length=0}return l.prototype.insertRule=function(a,u){return a<=this.length&&(this.rules.splice(a,0,u),this.length++,!0)},l.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},l.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},l}(),md=Co,bm={isServer:!Co,useCSSOMInjection:!Rm},_o=function(){function l(a,u,f){a===void 0&&(a=ur),u===void 0&&(u={});var h=this;this.options=Ye(Ye({},bm),a),this.gs=u,this.names=new Map(f),this.server=!!a.isServer,!this.server&&Co&&md&&(md=!1,pd(this)),ea(this,function(){return function(w){for(var k=w.getTag(),P=k.length,N="",L=function(z){var $=function(ue){return No.get(ue)}(z);if($===void 0)return"continue";var H=w.names.get($),te=k.getGroup(z);if(H===void 0||!H.size||te.length===0)return"continue";var W="".concat(ar,".g").concat(z,'[id="').concat($,'"]'),Y="";H!==void 0&&H.forEach(function(ue){ue.length>0&&(Y+="".concat(ue,","))}),N+="".concat(te).concat(W,'{content:"').concat(Y,'"}').concat(Zs)},O=0;O<P;O++)L(O);return N}(h)})}return l.registerId=function(a){return go(a)},l.prototype.rehydrate=function(){!this.server&&Co&&pd(this)},l.prototype.reconstructWithOptions=function(a,u){return u===void 0&&(u=!0),new l(Ye(Ye({},this.options),a),this.gs,u&&this.names||void 0)},l.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(a=function(u){var f=u.useCSSOMInjection,h=u.target;return u.isServer?new Zm(h):f?new Jm(h):new qm(h)}(this.options),new Hm(a)));var a},l.prototype.hasNameForId=function(a,u){return this.names.has(a)&&this.names.get(a).has(u)},l.prototype.registerName=function(a,u){if(go(a),this.names.has(a))this.names.get(a).add(u);else{var f=new Set;f.add(u),this.names.set(a,f)}},l.prototype.insertRules=function(a,u,f){this.registerName(a,u),this.getTag().insertRules(go(a),f)},l.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},l.prototype.clearRules=function(a){this.getTag().clearGroup(go(a)),this.clearNames(a)},l.prototype.clearTag=function(){this.tag=void 0},l}(),eh=/&/g,th=/^\s*\/\/.*$/gm;function Vd(l,a){return l.map(function(u){return u.type==="rule"&&(u.value="".concat(a," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(a," ")),u.props=u.props.map(function(f){return"".concat(a," ").concat(f)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Vd(u.children,a)),u})}function nh(l){var a,u,f,h=ur,w=h.options,k=w===void 0?ur:w,P=h.plugins,N=P===void 0?Io:P,L=function($,H,te){return te.startsWith(u)&&te.endsWith(u)&&te.replaceAll(u,"").length>0?".".concat(a):$},O=N.slice();O.push(function($){$.type===Po&&$.value.includes("&")&&($.props[0]=$.props[0].replace(eh,u).replace(f,L))}),k.prefix&&O.push(_m),O.push(Em);var z=function($,H,te,W){H===void 0&&(H=""),te===void 0&&(te=""),W===void 0&&(W="&"),a=W,u=H,f=new RegExp("\\".concat(u,"\\b"),"g");var Y=$.replace(th,""),ue=km(te||H?"".concat(te," ").concat(H," { ").concat(Y," }"):Y);k.namespace&&(ue=Vd(ue,k.namespace));var ne=[];return Eo(ue,Cm(O.concat(Nm(function(X){return ne.push(X)})))),ne};return z.hash=N.length?N.reduce(function($,H){return H.name||ni(15),or($,H.name)},Od).toString():"",z}var rh=new _o,Qs=nh(),Hd=Qt.createContext({shouldForwardProp:void 0,styleSheet:rh,stylis:Qs});Hd.Consumer;Qt.createContext(void 0);function Ks(){return je.useContext(Hd)}var ih=function(){function l(a,u){var f=this;this.inject=function(h,w){w===void 0&&(w=Qs);var k=f.name+w.hash;h.hasNameForId(f.id,k)||h.insertRules(f.id,k,w(f.rules,k,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=u,ea(this,function(){throw ni(12,String(f.name))})}return l.prototype.getName=function(a){return a===void 0&&(a=Qs),this.name+a.hash},l}(),oh=function(l){return l>="A"&&l<="Z"};function hd(l){for(var a="",u=0;u<l.length;u++){var f=l[u];if(u===1&&f==="-"&&l[0]==="-")return l;oh(f)?a+="-"+f.toLowerCase():a+=f}return a.startsWith("ms-")?"-"+a:a}var Wd=function(l){return l==null||l===!1||l===""},Qd=function(l){var a,u,f=[];for(var h in l){var w=l[h];l.hasOwnProperty(h)&&!Wd(w)&&(Array.isArray(w)&&w.isCss||cr(w)?f.push("".concat(hd(h),":"),w,";"):ti(w)?f.push.apply(f,ei(ei(["".concat(h," {")],Qd(w),!1),["}"],!1)):f.push("".concat(hd(h),": ").concat((a=h,(u=w)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||a in Pm||a.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return f};function pn(l,a,u,f){if(Wd(l))return[];if(bs(l))return[".".concat(l.styledComponentId)];if(cr(l)){if(!cr(w=l)||w.prototype&&w.prototype.isReactComponent||!a)return[l];var h=l(a);return pn(h,a,u,f)}var w;return l instanceof ih?u?(l.inject(u,f),[l.getName(f)]):[l]:ti(l)?Qd(l):Array.isArray(l)?Array.prototype.concat.apply(Io,l.map(function(k){return pn(k,a,u,f)})):[l.toString()]}function Kd(l){for(var a=0;a<l.length;a+=1){var u=l[a];if(cr(u)&&!bs(u))return!1}return!0}var lh=Md(Lo),sh=function(){function l(a,u,f){this.rules=a,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&Kd(a),this.componentId=u,this.baseHash=or(lh,u),this.baseStyle=f,_o.registerId(u)}return l.prototype.generateAndInjectStyles=function(a,u,f){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,u,f):"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))h=zn(h,this.staticRulesId);else{var w=Hs(pn(this.rules,a,u,f)),k=Vs(or(this.baseHash,w)>>>0);if(!u.hasNameForId(this.componentId,k)){var P=f(w,".".concat(k),void 0,this.componentId);u.insertRules(this.componentId,k,P)}h=zn(h,k),this.staticRulesId=k}else{for(var N=or(this.baseHash,f.hash),L="",O=0;O<this.rules.length;O++){var z=this.rules[O];if(typeof z=="string")L+=z;else if(z){var $=Hs(pn(z,a,u,f));N=or(N,$+O),L+=$}}if(L){var H=Vs(N>>>0);u.hasNameForId(this.componentId,H)||u.insertRules(this.componentId,H,f(L,".".concat(H),void 0,this.componentId)),h=zn(h,H)}}return h},l}(),ta=Qt.createContext(void 0);ta.Consumer;var Ms={};function ah(l,a,u){var f=bs(l),h=l,w=!Os(l),k=a.attrs,P=k===void 0?Io:k,N=a.componentId,L=N===void 0?function(b,oe){var J=typeof b!="string"?"sc":ad(b);Ms[J]=(Ms[J]||0)+1;var V="".concat(J,"-").concat(Dd(Lo+J+Ms[J]));return oe?"".concat(oe,"-").concat(V):V}(a.displayName,a.parentComponentId):N,O=a.displayName,z=O===void 0?function(b){return Os(b)?"styled.".concat(b):"Styled(".concat(Om(b),")")}(l):O,$=a.displayName&&a.componentId?"".concat(ad(a.displayName),"-").concat(a.componentId):a.componentId||L,H=f&&h.attrs?h.attrs.concat(P).filter(Boolean):P,te=a.shouldForwardProp;if(f&&h.shouldForwardProp){var W=h.shouldForwardProp;if(a.shouldForwardProp){var Y=a.shouldForwardProp;te=function(b,oe){return W(b,oe)&&Y(b,oe)}}else te=W}var ue=new sh(u,$,f?h.componentStyle:void 0);function ne(b,oe){return function(J,V,Ee){var Fe=J.attrs,be=J.componentStyle,dt=J.defaultProps,Ve=J.foldedComponentIds,Re=J.styledComponentId,Xe=J.target,Je=Qt.useContext(ta),ze=Ks(),pe=J.shouldForwardProp||ze.shouldForwardProp,R=Ld(V,Je,dt)||ur,F=function(ie,Z,B){for(var se,ae=Ye(Ye({},Z),{className:void 0,theme:B}),Ae=0;Ae<ie.length;Ae+=1){var Mt=cr(se=ie[Ae])?se(ae):se;for(var xt in Mt)ae[xt]=xt==="className"?zn(ae[xt],Mt[xt]):xt==="style"?Ye(Ye({},ae[xt]),Mt[xt]):Mt[xt]}return Z.className&&(ae.className=zn(ae.className,Z.className)),ae}(Fe,V,R),T=F.as||Xe,g={};for(var S in F)F[S]===void 0||S[0]==="$"||S==="as"||S==="theme"&&F.theme===R||(S==="forwardedAs"?g.as=F.forwardedAs:pe&&!pe(S,T)||(g[S]=F[S]));var q=function(ie,Z){var B=Ks(),se=ie.generateAndInjectStyles(Z,B.styleSheet,B.stylis);return se}(be,F),ee=zn(Ve,Re);return q&&(ee+=" "+q),F.className&&(ee+=" "+F.className),g[Os(T)&&!Id.has(T)?"class":"className"]=ee,g.ref=Ee,je.createElement(T,g)}(X,b,oe)}ne.displayName=z;var X=Qt.forwardRef(ne);return X.attrs=H,X.componentStyle=ue,X.displayName=z,X.shouldForwardProp=te,X.foldedComponentIds=f?zn(h.foldedComponentIds,h.styledComponentId):"",X.styledComponentId=$,X.target=f?h.target:l,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=f?function(oe){for(var J=[],V=1;V<arguments.length;V++)J[V-1]=arguments[V];for(var Ee=0,Fe=J;Ee<Fe.length;Ee++)Ws(oe,Fe[Ee],!0);return oe}({},h.defaultProps,b):b}}),ea(X,function(){return".".concat(X.styledComponentId)}),w&&Ud(X,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function gd(l,a){for(var u=[l[0]],f=0,h=a.length;f<h;f+=1)u.push(a[f],l[f+1]);return u}var vd=function(l){return Object.assign(l,{isCss:!0})};function Yd(l){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];if(cr(l)||ti(l))return vd(pn(gd(Io,ei([l],a,!0))));var f=l;return a.length===0&&f.length===1&&typeof f[0]=="string"?pn(f):vd(pn(gd(f,a)))}function Ys(l,a,u){if(u===void 0&&(u=ur),!a)throw ni(1,a);var f=function(h){for(var w=[],k=1;k<arguments.length;k++)w[k-1]=arguments[k];return l(a,u,Yd.apply(void 0,ei([h],w,!1)))};return f.attrs=function(h){return Ys(l,a,Ye(Ye({},u),{attrs:Array.prototype.concat(u.attrs,h).filter(Boolean)}))},f.withConfig=function(h){return Ys(l,a,Ye(Ye({},u),h))},f}var Gd=function(l){return Ys(ah,l)},Ge=Gd;Id.forEach(function(l){Ge[l]=Gd(l)});var uh=function(){function l(a,u){this.rules=a,this.componentId=u,this.isStatic=Kd(a),_o.registerId(this.componentId+1)}return l.prototype.createStyles=function(a,u,f,h){var w=h(Hs(pn(this.rules,u,f,h)),""),k=this.componentId+a;f.insertRules(k,k,w)},l.prototype.removeStyles=function(a,u){u.clearRules(this.componentId+a)},l.prototype.renderStyles=function(a,u,f,h){a>2&&_o.registerId(this.componentId+a),this.removeStyles(a,f),this.createStyles(a,u,f,h)},l}();function ch(l){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];var f=Yd.apply(void 0,ei([l],a,!1)),h="sc-global-".concat(Dd(JSON.stringify(f))),w=new uh(f,h),k=function(N){var L=Ks(),O=Qt.useContext(ta),z=Qt.useRef(L.styleSheet.allocateGSInstance(h)).current;return L.styleSheet.server&&P(z,N,L.styleSheet,O,L.stylis),Qt.useLayoutEffect(function(){if(!L.styleSheet.server)return P(z,N,L.styleSheet,O,L.stylis),function(){return w.removeStyles(z,L.styleSheet)}},[z,N,L.styleSheet,O,L.stylis]),null};function P(N,L,O,z,$){if(w.isStatic)w.renderStyles(N,zm,O,$);else{var H=Ye(Ye({},L),{theme:Ld(L,z,k.defaultProps)});w.renderStyles(N,H,O,$)}}return Qt.memo(k)}const dh=Ge.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 350px;
  padding: 20px;
  position: fixed;
  width: 100vw;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 -2px 10px 0 white;
  z-index: 901;

  .navbar-left {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 40px;
        font-weight: 400;
        cursor: pointer;
        margin: 0;

        span {
            color: #29a6a4;
            font-weight: 500;
        }

        .span2 {
            font-size: 20px;
            font-style: italic;
            color: #fff;
        }
    }
  }

  .navbar-right {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      cursor: pointer;
      margin: 0;

      li {
        font-size: 16px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li:hover {
        color: #29a6a4;
        transition: 0.2s ease-in-out;

        &:active {
          transform: scale(0.9);
        }
      }
    }
      
  }

  @media screen and (max-width: 540px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .navbar-left {
      display: flex;
      margin-left: -80px;
    }
    .navbar-right {
      display: none;
    }

  }
`,fh=Ge.aside`
  display: none;

  @media screen and (max-width: 540px) {
    display: flex;

    #hamburger {
      position: fixed;
      top: 30px;
      right: 30px;
      z-index: 150;
      background-color: transparent;
      border: none;
      z-index: 901;
    }

    #close-sidebar {
      position: fixed;
      top: 30px;
      right: 30px;
      z-index: 150;
      background-color: transparent;
      border: none;
      z-index: 1001;

      visibility: hidden;
      opacity: 0;
      transform: scale(0) rotate(0deg);
      transition: opacity 0.3s ease, transform 0.5s ease;
      transition-delay: 0.5s;

      &.visible {
      opacity: 1;
      visibility: visible;
      transform: scale(1) rotate(360deg);
      transition-delay: 0s;
    }
    }

    .aside {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      background: linear-gradient(180deg,
          rgba(41, 166, 164, 1) 0%, 
          rgba(16, 32, 50, 0.96) 100%); 
      border: 1px solid rgba(255, 255, 255, 0.5);

      opacity: 0;
      transform: translateX(100%);
      transition: opacity 0.3s ease, transform 0.3s ease;
      visibility: hidden;

      &.active {
        opacity: 1;
        transform: translateX(0);
        visibility: visible;
      }

      &.closing {
        opacity: 0;
        transform: translateX(100%);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;

        img {
          width: 50px;
          margin-left: -20px;
        }
      }

      li {
        font-size: 30px;
        margin-left: -20px;
      }

      li:hover {
        color: #000;
        transition: 0.2s ease-in-out;

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }
`,ph=Ge.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 280px;
  padding-top: 200px;

  .container-left {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;

    &.animate-left {
      opacity: 1;
      transform: translateX(0);
    }; 

    .my-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 262px;
        height: 27px;
        margin-left: 135px;
        margin-top: -15px;
        
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        
        background: linear-gradient(180deg,
          rgba(41, 166, 164, 1) 0%, 
          rgba(16, 32, 50, 1) 100%); 
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 15px;   
      }

      h1 {
        display: flex;
        gap: 25px;
        font-size: 63.2px;
        font-weight: 700;

        span {
          color: #29a6a4;
        }
      }
    };

    p {
      font-size: 15px;
      line-height: 22px;
      font-weight: 300;
      width: 540px;
    };

  }

  .container-right {
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;

    &.animate-right {
      opacity: 1;
      transform: scale(1);
    }

    img {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background-color: #29a6a4;
      animation: 
        moveUpDown 3s ease-in-out infinite, 
        shadowPulse 3s ease-in-out infinite;
      transform: translateX(0);
    }

    @keyframes moveUpDown {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px); /* Ajuste o quanto o elemento sobe */
      }
    }

    @keyframes shadowPulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 60, 76, 0.8);
      }
      50% {
        box-shadow: 0 0 100px rgba(0, 60, 76, 1); 
      }
    }
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column ;
    gap: 40px;
    justify-content: center;
    align-items: center;
    padding-top: 130px;

    .container-left {
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transform: translateX(0);

      p {
        width: 400px;
      }
    }

    .container-right {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
`,mh=Ge.div`
  display: flex;
  width: 190px;
  gap: 10px;

  .p {
    margin-top: 5px;
  }

  .linkedin {
    display: flex;
    width: 25px;
    cursor: pointer;
  
    &:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
    }

    &:active {
      transform: scale(0.7);
    }
  }

  .github {
    width: 30px;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1);
      transition: 0.2s ease-in-out;
    }

    &:active {
      transform: scale(0.7);
    }
  }
`,hh=Ge.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-top: 120px;
  margin-bottom: 100px;

  img {
    width: 170px;
    border-radius: 50%;
    animation: 
    float 5s ease-in-out infinite,  
    pulseShadow 2.5s ease-in-out infinite;
  }

  .container-left-img {
    display: flex;
    width: 300px;
    opacity: 0;
    margin-top: -40px;
    transform: scale(0.5);
    transition: all 0.4s ease-in-out;

    &.animate-left {
      opacity: 1;
      transform: scale(1);
    }

    .img-0 {
      position: absolute;
      margin-top: -190px;
      margin-left: 100px;
      animation-delay: 0s;
    }

    .img-1 {
      position: absolute;
      margin-top: -100px;
      animation-delay: 0.18s;
    }

    .img-2 {
      position: absolute;
      margin-top: 5px;
      margin-left: 100px;
      animation-delay: 0.28s;
    }

    .img-3 {
      position: absolute;
      margin-top: 100px;
      animation-delay: 0.43s;
    }

    @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    }

    @keyframes pulseShadow {
      0%, 100% {
        box-shadow: 0 0 0 rgba(41, 166, 164, 0.1);
      }
      50% {
        box-shadow: 0 0 15px rgba(41, 166, 164, 0.8);
      }
    }
  }

  .container-right-text {
    display: flex;
    flex-direction: column;
    width: 700px;
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.4s ease-in-out;

    &.animate-right {
      opacity: 1;
      transform: translateX(0);
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #29a6a4;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media screen and (max-width: 540px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .container-left-img {
      display: none;
    }
    
    .container-right-text {
      width: 380px;
    }
  }
`,vo=Ge.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform: translateX(-100%);
  transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  opacity: 0;
  z-index: 900;

  &.title.animate-left {
    opacity: 1;
    transform: translateX(0);
  }

  h2 {
    font-size: 40px;
    color: #29a6a4;
  }

  p {
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    width: 800px;
  }

  @media screen and (max-width: 540px) {
    h2 {
      text-align: center;
      width: 400px;
      font-size: 26;
    }

    p {
      width: 350px;
    }
  }
`,gh=Ge.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-top: 140px;
  overflow: hidden;
  
  img {
    width: 120px;
    cursor: pointer;

    &.react {
      animation: girar 20s linear infinite;

      @keyframes girar {
        from {transform: rotate(0deg)}

        to {transform:rotate(360deg)}
      }
    }

    &.docker {
      width: 100px;
      margin: 0px 10px;
    }
  }

  .icons-tech {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    transform: translateX(50%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
    opacity: 0;

    &.animate-right {
      opacity: 1;
      transform: translateX(0);
    }

    .icons-top {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 85px;
    }

    .icons-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 85px;
    }
  } 

  @media screen and (max-width: 540px) {

    img {

      &.docker {
          margin-top: 10px;
          margin-bottom: 10px;
        }
    }
    .icons-tech {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icons-top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      
      .icons-bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`,vh=Ge.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 150px;
  padding-bottom: 50px;
  overflow: hidden;
  z-index: 1;

  .carousel-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1020px;
    position: absolute;

    button {
      background-color: transparent;
      border: none;
      opacity: 0.5;

      img {
        width: 50px;
     }

     &:hover {
      opacity: 1;
     }

     &:active img{
      opacity: 0.3;
     }
    }
  }
  
  .experiences {
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
  }

  .jump {
    opacity: 1;
    transform: scale(1);
  }

  .pages-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    z-index: 100;
    margin-top: -20px;

    .page1, .page2, .page3{
      width: 25px;
      height: 2px;
      background-color: #ccc;
      transition: transform 0.4s ease-out,
    }

    .page1.active, .page2.active, .page3.active {
      transition: 0.2s ease;
      background-color: #000;
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 540px) {
    .carousel-navigation {
      gap: 355px;
      opacity: 0.5;
    }
  }
`,yh=Ge.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 150px;
  padding-bottom: 50px;

  .hover{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &:hover .hover-active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: visibility 0.2s, transform 0.3s ease, opacity 0.4s ease;
    }
  }

  .my-projects {
    display: grid ;
    grid-template-columns: 360px 360px 360px;
    grid-template-rows: 320px 320px 320px;
    gap: 30px;
    margin-top: -60px;
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.animate-jump {
      opacity: 1;
      transform: scale(1);
    }
  }

  .info-lading-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    padding: 20px;
    border: 1px solid #29a6a4;
    border-radius: 20px;
    background: linear-gradient(180deg,
        rgba(41, 166, 164, 0.3) 0%, 
        rgba(16, 32, 50, 0.5) 100%);

    .page {
      width: 320px;
      height: 180px;
      border-radius: 10px;
      cursor: pointer;
    }

    h3 {
      font-size: 26px;
      text-align: center;
      margin: 10px 0 -5px 0;
    }

    .redirect-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0px;
    }
  }

  .hover-active {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;

    width: 320px;
    height: 181px;

    border-radius: 10px;
    background: linear-gradient(180deg, 
      rgba(0,0,0,0.72) 0%, 
      rgba(0,0,0,0.90) 65%, 
      rgba(0,0,0,0.97) 100%);

    position: relative;
    margin-top: -322px;

    transform: translateY(5px);

    p {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      margin-bottom: 0;
      width: 300px;
    }

    .tech-used {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 130px;
    padding-bottom: 150px;

    .my-projects {
      display: grid;
      gap: 150px;
      grid-template-columns: 1fr;
      grid-template-rows: 360px;
      margin-top: -150px;
      opacity: 1;
      transform: scale(1);

      .portifolio {
        margin-bottom: -150px;
      }
    }
  }
`,xh=Ge.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 130px;
  padding-bottom: 100px;

  .contact-local {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 30px;
    margin: 20px auto;
    border: 1px solid #29a6a4;
    border-radius: 20px;
    background: linear-gradient(180deg,
        rgba(41, 166, 164, 0.2) 0%, 
        rgba(16, 32, 50, 0.3) 100%);

    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.animate-jump {
      opacity: 1;
      transform: scale(1);
    }
  }

  .text-area{
    display: flex;
    justify-content: center;
    align-items: center;

    textarea {
      outline: none;
      border: 2px solid #29a6a4;
      border-radius: 10px;
      background-color: transparent;
      color: #fff;
      font-size: 14px;
      line-height: 20px;

      width: 500px;
      height: 213px;
      margin-top: 14px;
      padding: 5px 10px 0 10px;
    }
  }

  .submit-button {
    opacity: 0;
    transform: scale(0.5);
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;

    &.animate-jump {
      opacity: 1;
      transform: scale(1);
    }
  }

  .to-send {
    width: 290px;
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    padding-top: 130px;

    .contact-local {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
    }

    .text-area {
      width: 300px;
      
      textarea {
        height: 130px;
      }
    }
  }
`,Ds=Ge.p`
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  margin: 10px 0 0 10px;

  span {
      color: red;
      font-size: 16px;    
  }

  @media screen and (max-width: 540px) {
    margin: 0;
  }
`,Fs=Ge.input`
  border: 2px solid #29a6a4;
  border-radius: 10px;
  background-color: transparent;
  outline: none;

  width: 300px;
  height: 35px;

  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 14px;
  line-height: 28px;
  color: #fff;

  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0
  }

  @media screen and (max-width: 540px) {
    margin: 0 0 10px 0;
  }
`,wh=Ge.div`
  position: fixed;
  right: 20px;
  top: 91%;
  
  img {
    width: 40px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 540px) {
    display: none;
  }
`;var Gs=new Map,yo=new WeakMap,yd=0,Sh=void 0;function kh(l){return l?(yo.has(l)||(yd+=1,yo.set(l,yd.toString())),yo.get(l)):"0"}function jh(l){return Object.keys(l).sort().filter(a=>l[a]!==void 0).map(a=>`${a}_${a==="root"?kh(l.root):l[a]}`).toString()}function Eh(l){const a=jh(l);let u=Gs.get(a);if(!u){const f=new Map;let h;const w=new IntersectionObserver(k=>{k.forEach(P=>{var N;const L=P.isIntersecting&&h.some(O=>P.intersectionRatio>=O);l.trackVisibility&&typeof P.isVisible>"u"&&(P.isVisible=L),(N=f.get(P.target))==null||N.forEach(O=>{O(L,P)})})},l);h=w.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),u={id:a,observer:w,elements:f},Gs.set(a,u)}return u}function Ch(l,a,u={},f=Sh){if(typeof window.IntersectionObserver>"u"&&f!==void 0){const N=l.getBoundingClientRect();return a(f,{isIntersecting:f,target:l,intersectionRatio:typeof u.threshold=="number"?u.threshold:0,time:0,boundingClientRect:N,intersectionRect:N,rootBounds:N}),()=>{}}const{id:h,observer:w,elements:k}=Eh(u),P=k.get(l)||[];return k.has(l)||k.set(l,P),P.push(a),w.observe(l),function(){P.splice(P.indexOf(a),1),P.length===0&&(k.delete(l),w.unobserve(l)),k.size===0&&(w.disconnect(),Gs.delete(h))}}function ir({threshold:l,delay:a,trackVisibility:u,rootMargin:f,root:h,triggerOnce:w,skip:k,initialInView:P,fallbackInView:N,onChange:L}={}){var O;const[z,$]=je.useState(null),H=je.useRef(),[te,W]=je.useState({inView:!!P,entry:void 0});H.current=L,je.useEffect(()=>{if(k||!z)return;let X;return X=Ch(z,(b,oe)=>{W({inView:b,entry:oe}),H.current&&H.current(b,oe),oe.isIntersecting&&w&&X&&(X(),X=void 0)},{root:h,rootMargin:f,threshold:l,trackVisibility:u,delay:a},N),()=>{X&&X()}},[Array.isArray(l)?l.toString():l,z,h,f,w,k,u,N,a]);const Y=(O=te.entry)==null?void 0:O.target,ue=je.useRef();!z&&Y&&!w&&!k&&ue.current!==Y&&(ue.current=Y,W({inView:!!P,entry:void 0}));const ne=[$,te.inView,te.entry];return ne.ref=ne[0],ne.inView=ne[1],ne.entry=ne[2],ne}const Nh=Ge.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .treinador, .developer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 1000px;
    height: 320px;
    overflow: hidden;
    background: linear-gradient(180deg,
        rgba(41, 166, 164, 0.7) 0%, 
        rgba(16, 32, 50, 1) 100%);
    border-radius: 50px;
    border: 2px solid rgba(41, 166, 164, 1);

    h3 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: -10px;
    }

    h4 {
      margin-bottom: 10px;
      font-size: 15px;
      font-weight: 500;
      font-style: italic;
      text-align: center;
      width: 900px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      width: 900px;
    }
  }

  .treinador, .developer {
    opacity: 0;
  }

  .treinador.active {
    opacity: 1;
    margin-left: 1040px;
  }

  .developer.active {
    opacity: 1;
    margin-left: -1040px;
  }

  @media screen and (max-width: 540px) {
    .treinador, .developer{
      width: 370px;
      height: 650px;

      h3 {
        font-size: 26px;
        text-align: center;
      } 

      h4 {
        width: 330px;
      }

      p {
        width: 310px;
        font-size: 14px;
      }
    }

    .treinador.active {
      opacity: 1;
      margin-left: 410px;
    }

    .developer.active {
      opacity: 1;
      margin-left: -410px;
    }
  }
`;function _h({children:l,...a}){return c.jsx(Nh,{...a,children:l})}const Ph=Ge.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 15px 0;

  button {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }

  .button-one {
    background: linear-gradient(180deg,
      rgba(41, 166, 164, 1) 0%, 
      rgba(16, 32, 50, 1) 100%);
    
    &:hover {
      background: transparent;
      border: 1px solid #fff;
      transition: 0.2s ease-in-out;
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .button-two {
    background-color: #fff;
    color: #000;

    &:hover {
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
      transition: 0.2s ease-in-out;
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;function It({children:l,...a}){return c.jsx(Ph,{...a,children:l})}const Rh="/portifolio/assets/hamburger.svg",zh="/portifolio/assets/close-sidebar.svg";class ri{constructor(a=0,u="Network Error"){this.status=a,this.text=u}}const Th=()=>{if(!(typeof localStorage>"u"))return{get:l=>Promise.resolve(localStorage.getItem(l)),set:(l,a)=>Promise.resolve(localStorage.setItem(l,a)),remove:l=>Promise.resolve(localStorage.removeItem(l))}},Be={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Th()},na=l=>l?typeof l=="string"?{publicKey:l}:l.toString()==="[object Object]"?l:{}:{},Lh=(l,a="https://api.emailjs.com")=>{if(!l)return;const u=na(l);Be.publicKey=u.publicKey,Be.blockHeadless=u.blockHeadless,Be.storageProvider=u.storageProvider,Be.blockList=u.blockList,Be.limitRate=u.limitRate,Be.origin=u.origin||a},Xd=async(l,a,u={})=>{const f=await fetch(Be.origin+l,{method:"POST",headers:u,body:a}),h=await f.text(),w=new ri(f.status,h);if(f.ok)return w;throw w},Jd=(l,a,u)=>{if(!l||typeof l!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a||typeof a!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!u||typeof u!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ih=l=>{if(l&&l.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},qd=l=>l.webdriver||!l.languages||l.languages.length===0,Zd=()=>new ri(451,"Unavailable For Headless Browser"),Oh=(l,a)=>{if(!Array.isArray(l))throw"The BlockList list has to be an array";if(typeof a!="string")throw"The BlockList watchVariable has to be a string"},Mh=l=>{var a;return!((a=l.list)!=null&&a.length)||!l.watchVariable},Dh=(l,a)=>l instanceof FormData?l.get(a):l[a],bd=(l,a)=>{if(Mh(l))return!1;Oh(l.list,l.watchVariable);const u=Dh(a,l.watchVariable);return typeof u!="string"?!1:l.list.includes(u)},ef=()=>new ri(403,"Forbidden"),Fh=(l,a)=>{if(typeof l!="number"||l<0)throw"The LimitRate throttle has to be a positive number";if(a&&typeof a!="string")throw"The LimitRate ID has to be a non-empty string"},Ah=async(l,a,u)=>{const f=Number(await u.get(l)||0);return a-Date.now()+f},tf=async(l,a,u)=>{if(!a.throttle||!u)return!1;Fh(a.throttle,a.id);const f=a.id||l;return await Ah(f,a.throttle,u)>0?!0:(await u.set(f,Date.now().toString()),!1)},nf=()=>new ri(429,"Too Many Requests"),$h=async(l,a,u,f)=>{const h=na(f),w=h.publicKey||Be.publicKey,k=h.blockHeadless||Be.blockHeadless,P=h.storageProvider||Be.storageProvider,N={...Be.blockList,...h.blockList},L={...Be.limitRate,...h.limitRate};return k&&qd(navigator)?Promise.reject(Zd()):(Jd(w,l,a),Ih(u),u&&bd(N,u)?Promise.reject(ef()):await tf(location.pathname,L,P)?Promise.reject(nf()):Xd("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:w,service_id:l,template_id:a,template_params:u}),{"Content-type":"application/json"}))},Uh=l=>{if(!l||l.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Bh=l=>typeof l=="string"?document.querySelector(l):l,Vh=async(l,a,u,f)=>{const h=na(f),w=h.publicKey||Be.publicKey,k=h.blockHeadless||Be.blockHeadless,P=Be.storageProvider||h.storageProvider,N={...Be.blockList,...h.blockList},L={...Be.limitRate,...h.limitRate};if(k&&qd(navigator))return Promise.reject(Zd());const O=Bh(u);Jd(w,l,a),Uh(O);const z=new FormData(O);return bd(N,z)?Promise.reject(ef()):await tf(location.pathname,L,P)?Promise.reject(nf()):(z.append("lib_version","4.4.1"),z.append("service_id",l),z.append("template_id",a),z.append("user_id",w),Xd("/api/v1.0/email/send-form",z))},Hh={init:Lh,send:$h,sendForm:Vh,EmailJSResponseStatus:ri},xd="/portifolio/assets/profile.png",Wh="/portifolio/assets/linkedin-icon.svg",wd="/portifolio/assets/github-icon.svg",Qh="/portifolio/assets/img-1.png",Kh="/portifolio/assets/img-2.png",Yh="/portifolio/assets/img-3.png",_n="/portifolio/assets/icon-html5.png",Pn="/portifolio/assets/icon-css3.png",Rn="/portifolio/assets/icon-js.png",As="/portifolio/assets/icon-react.png",Sd="/portifolio/assets/icon-node.png",Gh="/portifolio/assets/icon-docker.png",Xh="/portifolio/assets/icon-git.png",Jh="/portifolio/assets/arrow-left.png",qh="/portifolio/assets/arrow-right.png",Zh="/portifolio/assets/portifolio-img.png",bh="/portifolio/assets/meow-cafe-img.png",e0="/portifolio/assets/valorant-points-img.png",t0="/portifolio/assets/cadastrar-usuarios-img.png",n0="/portifolio/assets/game-jokenpo-img.png",r0="/portifolio/assets/conversor-img.png",i0="/portifolio/assets/sorteador-img.png",o0="/portifolio/assets/irmaos-encanadores-img.png",kd="/portifolio/assets/whatsapp-icon.svg";function l0(){const[l,a]=je.useState(0),[u,f]=je.useState(!1),[h,w]=je.useState(""),[k,P]=je.useState(""),[N,L]=je.useState(""),[O,z]=je.useState(""),$=je.useRef(null),H=je.useRef(null),te=je.useRef(null),W=je.useRef(null),Y=je.useRef(null),ue=je.useRef(null),{ref:ne,inView:X}=ir({threshold:.1,triggerOnce:!1}),{ref:b,inView:oe}=ir({threshold:.1}),{ref:J,inView:V}=ir({threshold:.1}),{ref:Ee,inView:Fe}=ir({threshold:.1}),{ref:be,inView:dt}=ir({threshold:.1}),{ref:Ve,inView:Re}=ir({threshold:.1}),Xe=B=>{B.preventDefault(),$.current&&$.current.scrollIntoView({behavior:"smooth"})},Je=B=>{B.preventDefault(),window.scrollTo({top:H.current.offsetTop,behavior:"smooth"})},ze=B=>{B.preventDefault(),window.scrollTo({top:te.current.offsetTop,behavior:"smooth"})},pe=B=>{B.preventDefault(),window.scrollTo({top:W.current.offsetTop,behavior:"smooth"})},R=B=>{B.preventDefault(),window.scrollTo({top:Y.current.offsetTop,behavior:"smooth"})},F=B=>{B.preventDefault(),window.scrollTo({top:ue.current.offsetTop,behavior:"smooth"})},T=()=>{a(B=>(B+1)%2)},g=()=>{a(B=>(B-1+2)%2)};je.useEffect(()=>{f(Fe)},[Fe]);function S(B){if(B.preventDefault(),h===""||k===""||O===""){alert("Preencha todos os campos");return}const se={name:h,email:k,telefone:N,message:O};Hh.send("service_za4aivk","template_x61afyb",se,"jkB5CHRiHgFKdHByN").then(ae=>{console.log("EMAIL ENVIADO!",ae.status,ae.text),w(""),P(""),L(""),z("")}).catch(ae=>{console.log("Erro: ",ae)})}const q=document.querySelector(".aside"),ee=document.getElementById("close-sidebar");function ie(){q.classList.add("active"),ee.classList.add("visible")}function Z(){q.classList.add("closing"),setTimeout(()=>{q.classList.remove("active","closing")},100),ee.classList.remove("visible")}return c.jsxs(c.Fragment,{children:[c.jsxs("header",{children:[c.jsxs(dh,{className:"navabar",children:[c.jsx("div",{className:"navbar-left",children:c.jsxs("h2",{onClick:Xe,children:["Nei",c.jsx("span",{children:"Barbosa"}),c.jsx("span",{className:"span2",children:".dev"})]})}),c.jsx("div",{className:"navbar-right",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"#about-me",onClick:Je,children:"Sobre mim"})}),c.jsx("li",{children:c.jsx("a",{href:"#skill",onClick:ze,children:"Habilidades"})}),c.jsx("li",{children:c.jsx("a",{href:"#expertise",onClick:pe,children:"Experiências"})}),c.jsx("li",{children:c.jsx("a",{href:"#projects",onClick:R,children:"Projetos"})}),c.jsx("li",{children:c.jsx("a",{href:"#contact",onClick:F,children:"Contato"})})]})})]}),c.jsxs(fh,{children:[c.jsx("button",{id:"hamburger",onClick:ie,children:c.jsx("img",{src:Rh,alt:"menu icon",width:"35px"})}),c.jsx("button",{id:"close-sidebar",onClick:Z,children:c.jsx("img",{src:zh,alt:"close menu icon",width:"35px"})}),c.jsx("div",{className:"aside",children:c.jsxs("ul",{children:[c.jsx("li",{className:"li-info",onClick:Z,children:c.jsx("a",{href:"#about-me",onClick:Je,children:"Sobre mim"})}),c.jsx("li",{className:"li-info",onClick:Z,children:c.jsx("a",{href:"#skill",onClick:ze,children:"Habilidades"})}),c.jsx("li",{className:"li-info",onClick:Z,children:c.jsx("a",{href:"#expertise",onClick:pe,children:"Experiências"})}),c.jsx("li",{className:"li-info",onClick:Z,children:c.jsx("a",{href:"#projects",onClick:R,children:"Projetos"})}),c.jsx("li",{className:"li-info",onClick:Z,children:c.jsx("a",{href:"#contact",onClick:F,children:"Contato"})}),c.jsx("a",{href:"https://wa.me/message/DBN2KDY5BI2GN1",target:"_blank",className:"li-info",onClick:Z,children:c.jsx("img",{src:kd,alt:"whatsapp icon"})})]})})]})]}),c.jsxs(ph,{ref:$,children:[c.jsxs("div",{className:`container-left ${X?"animate-left":""}`,ref:ne,children:[c.jsxs("div",{className:"my-info",children:[c.jsxs("h1",{children:["Nei ",c.jsx("span",{children:"Barbosa"})]}),c.jsx("h3",{children:"Developer Front End"})]}),c.jsx("p",{children:"Olá, seja muito bem-vindo(a)! Sinta-se à vontade para explorar e descobrir mais sobre o meu trabalho. Este espaço foi criado com carinho para apresentar minhas habilidades e projetos. Aproveite a visita!"}),c.jsxs(It,{className:"buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://drive.google.com/file/d/1JoUdSw1FtOO7C1OaacRRGU8cItK3v5JY/view?usp=sharing",target:"_blank",children:"Baixar CV"})}),c.jsx("button",{className:"button-two",onClick:R,children:"Meus Projetos"})]}),c.jsxs(mh,{className:"social-media",children:[c.jsx("p",{className:"p",children:"Minhas Redes:"}),c.jsx("a",{href:"https://www.linkedin.com/in/dev-neibarbosa/",target:"_blank",children:c.jsx("img",{src:Wh,alt:"ícone linkedin",className:"linkedin"})}),c.jsx("a",{href:"https://github.com/devNeiBarbosa",target:"_blank",children:c.jsx("img",{src:wd,alt:"ícone github",className:"github"})})]})]}),c.jsx("div",{className:`container-right ${X?"animate-right":""}`,children:c.jsx("img",{src:xd,alt:"profile"})})]}),c.jsxs(hh,{ref:H,id:"about-me",children:[c.jsxs("div",{className:`container-left-img ${oe?"animate-left":""}`,ref:b,children:[c.jsx("img",{src:xd,alt:"profile",className:"img-0"}),c.jsx("img",{src:Qh,alt:"profile",className:"img-1"}),c.jsx("img",{src:Kh,alt:"profile",className:"img-2"}),c.jsx("img",{src:Yh,alt:"profile",className:"img-3"})]}),c.jsxs("div",{className:`container-right-text ${oe?"animate-right":""}`,ref:b,children:[c.jsx("h3",{children:"Quem sou eu?"}),c.jsxs("p",{children:[" Olá! Eu sou ",c.jsx("span",{children:"Nei Barbosa"}),". Sou bacharel em Educação Física, com uma trajetória repleta de conhecimentos teóricos e práticos que inclui participação em campeonatos de fisiculturismo como atleta, coach e árbitro."]}),c.jsx("p",{children:"Sempre tive interesse por tecnologia, mas por muito tempo acreditava que esse mundo não era para mim. Hoje, estou provando o contrário: estou em plena transição de carreira para a área de programação e completamente apaixonado por essa nova jornada."}),c.jsx("p",{children:"Atualmente, estou cursando a formação em Developer Full Stack pelo DevClub, sempre buscando aprimorar meus conhecimentos para me tornar um profissional tão dedicado e competente quanto fui na minha carreira anterior como treinador."}),c.jsx("p",{children:"Tenho me aprofundado no aprendizado de HTML5, CSS3, JavaScript e ReactJS, enquanto exploro novas tecnologias como Node.js, SQL, MySQL, entre outras que possam contribuir para minha evolução profissional. Durante essa jornada, já desenvolvi projetos desafiadores que não apenas solidificaram meus conhecimentos, mas também alimentaram minha paixão por resolver problemas através da programação."}),c.jsx("p",{children:"O que me motiva é a possibilidade de aplicar meus aprendizados para criar soluções inovadoras e enfrentar grandes desafios. Minha experiência como treinador trouxe habilidades valiosas, como trabalho em equipe, resolução de problemas e boa comunicação, que levo comigo para o mundo da tecnologia. Estou pronto para contribuir e crescer nessa nova fase da minha vida profissional!"})]})]}),c.jsxs(gh,{id:"skill",ref:te,children:[c.jsxs(vo,{className:`title ${V?"animate-left":""}`,ref:J,children:[c.jsx("h2",{children:"Minhas Habilidades"}),c.jsx("p",{children:"Essas são as tecnologias que utilizo para garantir desempenho, escalabilidade e excelência, com expertise no frontend, criando interfaces intuitivas e funcionais, e conhecimentos básicos no backend."})]}),c.jsxs("div",{className:`icons-tech ${V?"animate-right":""}`,ref:J,children:[c.jsxs("div",{className:"icons-top",children:[c.jsx("img",{src:_n,alt:"icon HTML5"}),c.jsx("img",{src:Pn,alt:"icon CSS3"}),c.jsx("img",{src:Rn,alt:"icon JavaScript"}),c.jsx("img",{src:As,alt:"icon React",className:"react"})]}),c.jsxs("div",{className:"icons-bottom",children:[c.jsx("img",{src:Sd,alt:"icon Node.js"}),c.jsx("img",{src:Gh,alt:"icon Docker",className:"docker"}),c.jsx("img",{src:Xh,alt:"icon Git"}),c.jsx("img",{src:wd,alt:"icon GitHub"})]})]})]}),c.jsxs(vh,{id:"expertise",ref:W,children:[c.jsx(vo,{className:`title ${Fe?"animate-left":""}`,ref:Ee,children:c.jsx("h2",{children:"Experiências Profissionais"})}),c.jsxs("div",{className:`experiences ${u?"jump":""}`,ref:Ee,children:[c.jsxs(_h,{children:[c.jsxs("div",{className:`treinador ${l===0?"active":""}`,children:[c.jsx("h3",{children:"Personal Trainer"}),c.jsx("h4",{children:"Bacharel em Educação Física – Centro Universitário de João Pessoa UNIPÊ | de 2018 à 2021."}),c.jsx("p",{children:"Treinador com mais de 4 anos de experiência, incluindo estágio e atuação profissional, especializado no desenvolvimento de programas de treino, focados em objetivos como hipertrofia, emagrecimento e melhora de performance."}),c.jsx("p",{children:"Amplo domínio de técnicas avançadas de periodização e adaptação de treinos para diferentes níveis, garantindo eficiência e segurança. Experiência prática no acompanhamento de alunos em academias e consultorias online, com foco na evolução contínua e no alcance de metas dentro de prazos definidos. Além disso, sou atleta de fisiculturismo, o que me proporciona conhecimento aprofundado teórico e prático sobre hipertrofia, emagrecimento e performance."})]}),c.jsxs("div",{className:`developer ${l===1?"active":""}`,children:[c.jsx("h3",{children:"Desenvolvedor Web (Front-End)"}),c.jsx("h4",{children:"Programação e Desenvolvimento Web pela DevClub | Outubro 2024 - Cursando"}),c.jsx("p",{children:"Profissional em transição de carreira, com sólida experiência como Personal Trainer, agora dedicado à área de Desenvolvimento Web. Minha experiência como treinador me proporcionou habilidades valiosas. Essas competências me ajudam a criar soluções eficientes para os desafios que surgem diariamente, além de compreender melhor as necessidades dos usuários e clientes."}),c.jsx("p",{children:"Tenho experiência em tecnologias front-end, incluindo HTML5, CSS4, JavaScript e ReactJS, para o desenvolvimento de projetos responsivos e dinâmicos. Além disso, possuo conhecimentos básicos em back-end, abrangendo Node.js, Docker, SQL e MySQL."})]}),c.jsxs("div",{className:"carousel-navigation",children:[c.jsx("button",{onClick:g,children:c.jsx("img",{src:Jh,alt:"arrow left",className:"arrow-left"})}),c.jsx("button",{onClick:T,children:c.jsx("img",{src:qh,alt:"arrow right",className:"arrow-right"})})]})]}),c.jsxs("div",{className:"pages-info",children:[c.jsx("div",{className:`page1 ${l===0?"active":""}`}),c.jsx("div",{className:`page2 ${l===1?"active":""}`})]})]})]}),c.jsxs(yh,{id:"projects",ref:Y,children:[c.jsx(vo,{className:`title ${dt?"animate-left":""}`,ref:be,children:c.jsx("h2",{children:"Meus Projetos"})}),c.jsxs("section",{className:`my-projects ${dt?"animate-jump":""}`,ref:be,children:[c.jsxs("div",{className:"hover portifolio",children:[" ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:Zh,alt:"page model",className:"page"}),c.jsx("h3",{children:"Portifólio"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Meu Portifólio."}),c.jsx("p",{children:"Projeto desenvolvido com o objetivo de aprimorar e consolidar minhas habilidades em React, além de apresentar meus projetos de maneira mais profissional."}),c.jsx("div",{className:"tech-used",children:c.jsx("img",{src:As,alt:"icon React",className:"react",width:"50px"})})]})]}),c.jsxs("div",{className:"hover",children:["  ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:bh,alt:"page model",className:"page"}),c.jsx("h3",{children:"Meow Café"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Meow-cafeteria/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Meow-cafeteria",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Landing Page para uma Cafeteria."}),c.jsx("p",{children:"Projeto criado com o objetivo de consolidar minhas habilidades em HTML5 e CSS3 puros explorandos ao máximo. O JavaScript foi usado minimamente."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["  ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:e0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Valorant Points"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Site-Valorant-points/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Site-Valorant-points",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Landing Page para venda de VPs."}),c.jsx("p",{children:"Projeto desenvolvido para consolidar habilidades em Front-End, explorando funções do JavaScript como Array e forEach."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["   ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:t0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Cadastro de Usuários"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/React-cadastro-de-usuarios",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Página de cadastro de usuários."}),c.jsx("p",{children:"Projeto criado com o intuito de aprimorar e consolidar minhas habilidades em React e Node.js. Esse foi o meu primeiro projeto com banco de dados."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:As,alt:"icon React",className:"react",width:"50px"}),c.jsx("img",{src:Sd,alt:"icon Node.js",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["    ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:n0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Game Jolenpô"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Game-jokenpo/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Game-jokenpo",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Game virtual de Jokenpô."}),c.jsx("p",{children:"Projeto desenvolvido com o intuito de consolidar minhas habilidades no Front-End. Neste projeto, aprofundei meus conhecimentos sobre a função Math."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["   ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:r0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Conversor de Moedas"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Conversor-de-moedas/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Conversor-de-moedas",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Site de conversão de moedas."}),c.jsx("p",{children:"Projeto desenvolvido com o objetivo de consolidar minhas habilidades no Front-End. Este é o meu primeiro projeto com APIs (cotação de moeda)."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["   ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:i0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Sorteador de Números"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Sorteador-de-numeros/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Sorteador-de-numeros",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:" Site para sortear números aleatoriamente."}),c.jsx("p",{children:"Projeto desenvolvido com o objetivo de consolidar minhas habilidades no Front-End. Este foi o primeiro projeto em que utilizei a função Math."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["  ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:o0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Irmãos Encanadores"}),c.jsxs(It,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Projeto-irmaos-encanadores/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Projeto-irmaos-encanadores",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Site para prestação de Serviços."}),c.jsx("p",{children:"Projeto criado com o intuito de aprimorar e consolidar minhas habilidades em HTML5, CSS3 e JavaScript."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]})]})]}),c.jsxs(xh,{id:"contact",ref:ue,onSubmit:S,children:[c.jsx(vo,{className:`title ${Re?"animate-left":""}`,ref:Ve,children:c.jsx("h2",{children:"Entre em Contato"})}),c.jsxs("div",{className:`contact-local ${Re?"animate-jump":""}`,ref:Ve,children:[c.jsxs("div",{className:"inputs",children:[c.jsxs("div",{children:[c.jsxs(Ds,{children:["Nome ",c.jsx("span",{children:"*"})]}),c.jsx(Fs,{type:"text",placeholder:"Nome e sobremone",id:"inputName",onChange:B=>w(B.target.value),value:h})]}),c.jsxs("div",{children:[c.jsxs(Ds,{children:["E-mail ",c.jsx("span",{children:"*"})]}),c.jsx(Fs,{type:"text",placeholder:"E-mail para contato",id:"inputEmail",onChange:B=>P(B.target.value),value:k})]}),c.jsxs("div",{children:[c.jsxs(Ds,{children:["Telefone ",c.jsx("span",{children:"*"})]}),c.jsx(Fs,{type:"tel",placeholder:"(00) 00000-0000",id:"inputTel",onChange:B=>L(B.target.value),value:N})]})]}),c.jsx("div",{className:"text-area",children:c.jsx("textarea",{name:"message",placeholder:"Digite aqui a sua mensagem...",onChange:B=>z(B.target.value),value:O})})]}),c.jsx("div",{className:`submit-button ${Re?"animate-jump":""}`,ref:Ve,children:c.jsx(It,{children:c.jsx("button",{className:"button-one to-send",type:"submit",children:"Enviar"})})})]}),c.jsx(wh,{children:c.jsx("a",{href:"https://wa.me/message/DBN2KDY5BI2GN1",target:"_blank",children:c.jsx("img",{src:kd,alt:"whatsapp icon"})})})]})}const s0=ch`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    list-style-type: none;
    color: #fff;
    }

    a {
    text-decoration: none;
    color: inherit; 
    }

    body {
        background-color: #000;
    }
`;um.createRoot(document.getElementById("root")).render(c.jsxs(je.StrictMode,{children:[c.jsx(s0,{}),c.jsx(l0,{})]}));
