(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))f(h);new MutationObserver(h=>{for(const w of h)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&f(S)}).observe(document,{childList:!0,subtree:!0});function a(h){const w={};return h.integrity&&(w.integrity=h.integrity),h.referrerPolicy&&(w.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?w.credentials="include":h.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function f(h){if(h.ep)return;h.ep=!0;const w=a(h);fetch(h.href,w)}})();function Zp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Cs={exports:{}},br={},_s={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc;function em(){if(Xc)return re;Xc=1;var o=Symbol.for("react.element"),s=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),S=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),z=Symbol.iterator;function L(g){return g===null||typeof g!="object"?null:(g=z&&g[z]||g["@@iterator"],typeof g=="function"?g:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,B={};function H(g,k,q){this.props=g,this.context=k,this.refs=B,this.updater=q||U}H.prototype.isReactComponent={},H.prototype.setState=function(g,k){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,k,"setState")},H.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function se(){}se.prototype=H.prototype;function Z(g,k,q){this.props=g,this.context=k,this.refs=B,this.updater=q||U}var X=Z.prototype=new se;X.constructor=Z,Y(X,H.prototype),X.isPureReactComponent=!0;var b=Array.isArray,oe=Object.prototype.hasOwnProperty,J={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function Te(g,k,q){var ee,ie={},ne=null,de=null;if(k!=null)for(ee in k.ref!==void 0&&(de=k.ref),k.key!==void 0&&(ne=""+k.key),k)oe.call(k,ee)&&!K.hasOwnProperty(ee)&&(ie[ee]=k[ee]);var le=arguments.length-2;if(le===1)ie.children=q;else if(1<le){for(var ue=Array(le),De=0;De<le;De++)ue[De]=arguments[De+2];ie.children=ue}if(g&&g.defaultProps)for(ee in le=g.defaultProps,le)ie[ee]===void 0&&(ie[ee]=le[ee]);return{$$typeof:o,type:g,key:ne,ref:de,props:ie,_owner:J.current}}function tt(g,k){return{$$typeof:o,type:g.type,key:k,ref:g.ref,props:g.props,_owner:g._owner}}function vt(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Ot(g){var k={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return k[q]})}var at=/\/+/g;function Ke(g,k){return typeof g=="object"&&g!==null&&g.key!=null?Ot(""+g.key):k.toString(36)}function nt(g,k,q,ee,ie){var ne=typeof g;(ne==="undefined"||ne==="boolean")&&(g=null);var de=!1;if(g===null)de=!0;else switch(ne){case"string":case"number":de=!0;break;case"object":switch(g.$$typeof){case o:case s:de=!0}}if(de)return de=g,ie=ie(de),g=ee===""?"."+Ke(de,0):ee,b(ie)?(q="",g!=null&&(q=g.replace(at,"$&/")+"/"),nt(ie,k,q,"",function(De){return De})):ie!=null&&(vt(ie)&&(ie=tt(ie,q+(!ie.key||de&&de.key===ie.key?"":(""+ie.key).replace(at,"$&/")+"/")+g)),k.push(ie)),1;if(de=0,ee=ee===""?".":ee+":",b(g))for(var le=0;le<g.length;le++){ne=g[le];var ue=ee+Ke(ne,le);de+=nt(ne,k,q,ue,ie)}else if(ue=L(g),typeof ue=="function")for(g=ue.call(g),le=0;!(ne=g.next()).done;)ne=ne.value,ue=ee+Ke(ne,le++),de+=nt(ne,k,q,ue,ie);else if(ne==="object")throw k=String(g),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return de}function ut(g,k,q){if(g==null)return g;var ee=[],ie=0;return nt(g,ee,"","",function(ne){return k.call(q,ne,ie++)}),ee}function Ve(g){if(g._status===-1){var k=g._result;k=k(),k.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=k)}if(g._status===1)return g._result.default;throw g._result}var he={current:null},T={transition:null},V={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:T,ReactCurrentOwner:J};function O(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:ut,forEach:function(g,k,q){ut(g,function(){k.apply(this,arguments)},q)},count:function(g){var k=0;return ut(g,function(){k++}),k},toArray:function(g){return ut(g,function(k){return k})||[]},only:function(g){if(!vt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},re.Component=H,re.Fragment=a,re.Profiler=h,re.PureComponent=Z,re.StrictMode=f,re.Suspense=E,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,re.act=O,re.cloneElement=function(g,k,q){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ee=Y({},g.props),ie=g.key,ne=g.ref,de=g._owner;if(k!=null){if(k.ref!==void 0&&(ne=k.ref,de=J.current),k.key!==void 0&&(ie=""+k.key),g.type&&g.type.defaultProps)var le=g.type.defaultProps;for(ue in k)oe.call(k,ue)&&!K.hasOwnProperty(ue)&&(ee[ue]=k[ue]===void 0&&le!==void 0?le[ue]:k[ue])}var ue=arguments.length-2;if(ue===1)ee.children=q;else if(1<ue){le=Array(ue);for(var De=0;De<ue;De++)le[De]=arguments[De+2];ee.children=le}return{$$typeof:o,type:g.type,key:ie,ref:ne,props:ee,_owner:de}},re.createContext=function(g){return g={$$typeof:S,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},re.createElement=Te,re.createFactory=function(g){var k=Te.bind(null,g);return k.type=g,k},re.createRef=function(){return{current:null}},re.forwardRef=function(g){return{$$typeof:_,render:g}},re.isValidElement=vt,re.lazy=function(g){return{$$typeof:I,_payload:{_status:-1,_result:g},_init:Ve}},re.memo=function(g,k){return{$$typeof:R,type:g,compare:k===void 0?null:k}},re.startTransition=function(g){var k=T.transition;T.transition={};try{g()}finally{T.transition=k}},re.unstable_act=O,re.useCallback=function(g,k){return he.current.useCallback(g,k)},re.useContext=function(g){return he.current.useContext(g)},re.useDebugValue=function(){},re.useDeferredValue=function(g){return he.current.useDeferredValue(g)},re.useEffect=function(g,k){return he.current.useEffect(g,k)},re.useId=function(){return he.current.useId()},re.useImperativeHandle=function(g,k,q){return he.current.useImperativeHandle(g,k,q)},re.useInsertionEffect=function(g,k){return he.current.useInsertionEffect(g,k)},re.useLayoutEffect=function(g,k){return he.current.useLayoutEffect(g,k)},re.useMemo=function(g,k){return he.current.useMemo(g,k)},re.useReducer=function(g,k,q){return he.current.useReducer(g,k,q)},re.useRef=function(g){return he.current.useRef(g)},re.useState=function(g){return he.current.useState(g)},re.useSyncExternalStore=function(g,k,q){return he.current.useSyncExternalStore(g,k,q)},re.useTransition=function(){return he.current.useTransition()},re.version="18.3.1",re}var Jc;function Gs(){return Jc||(Jc=1,_s.exports=em()),_s.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc;function tm(){if(bc)return br;bc=1;var o=Gs(),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function S(_,E,R){var I,z={},L=null,U=null;R!==void 0&&(L=""+R),E.key!==void 0&&(L=""+E.key),E.ref!==void 0&&(U=E.ref);for(I in E)f.call(E,I)&&!w.hasOwnProperty(I)&&(z[I]=E[I]);if(_&&_.defaultProps)for(I in E=_.defaultProps,E)z[I]===void 0&&(z[I]=E[I]);return{$$typeof:s,type:_,key:L,ref:U,props:z,_owner:h.current}}return br.Fragment=a,br.jsx=S,br.jsxs=S,br}var qc;function nm(){return qc||(qc=1,Cs.exports=tm()),Cs.exports}var c=nm(),fe=Gs();const Qt=Zp(fe);var mo={},Ps={exports:{}},et={},Rs={exports:{}},zs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc;function rm(){return Zc||(Zc=1,function(o){function s(T,V){var O=T.length;T.push(V);e:for(;0<O;){var g=O-1>>>1,k=T[g];if(0<h(k,V))T[g]=V,T[O]=k,O=g;else break e}}function a(T){return T.length===0?null:T[0]}function f(T){if(T.length===0)return null;var V=T[0],O=T.pop();if(O!==V){T[0]=O;e:for(var g=0,k=T.length,q=k>>>1;g<q;){var ee=2*(g+1)-1,ie=T[ee],ne=ee+1,de=T[ne];if(0>h(ie,O))ne<k&&0>h(de,ie)?(T[g]=de,T[ne]=O,g=ne):(T[g]=ie,T[ee]=O,g=ee);else if(ne<k&&0>h(de,O))T[g]=de,T[ne]=O,g=ne;else break e}}return V}function h(T,V){var O=T.sortIndex-V.sortIndex;return O!==0?O:T.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var S=Date,_=S.now();o.unstable_now=function(){return S.now()-_}}var E=[],R=[],I=1,z=null,L=3,U=!1,Y=!1,B=!1,H=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(T){for(var V=a(R);V!==null;){if(V.callback===null)f(R);else if(V.startTime<=T)f(R),V.sortIndex=V.expirationTime,s(E,V);else break;V=a(R)}}function b(T){if(B=!1,X(T),!Y)if(a(E)!==null)Y=!0,Ve(oe);else{var V=a(R);V!==null&&he(b,V.startTime-T)}}function oe(T,V){Y=!1,B&&(B=!1,se(Te),Te=-1),U=!0;var O=L;try{for(X(V),z=a(E);z!==null&&(!(z.expirationTime>V)||T&&!Ot());){var g=z.callback;if(typeof g=="function"){z.callback=null,L=z.priorityLevel;var k=g(z.expirationTime<=V);V=o.unstable_now(),typeof k=="function"?z.callback=k:z===a(E)&&f(E),X(V)}else f(E);z=a(E)}if(z!==null)var q=!0;else{var ee=a(R);ee!==null&&he(b,ee.startTime-V),q=!1}return q}finally{z=null,L=O,U=!1}}var J=!1,K=null,Te=-1,tt=5,vt=-1;function Ot(){return!(o.unstable_now()-vt<tt)}function at(){if(K!==null){var T=o.unstable_now();vt=T;var V=!0;try{V=K(!0,T)}finally{V?Ke():(J=!1,K=null)}}else J=!1}var Ke;if(typeof Z=="function")Ke=function(){Z(at)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ut=nt.port2;nt.port1.onmessage=at,Ke=function(){ut.postMessage(null)}}else Ke=function(){H(at,0)};function Ve(T){K=T,J||(J=!0,Ke())}function he(T,V){Te=H(function(){T(o.unstable_now())},V)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_continueExecution=function(){Y||U||(Y=!0,Ve(oe))},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_getFirstCallbackNode=function(){return a(E)},o.unstable_next=function(T){switch(L){case 1:case 2:case 3:var V=3;break;default:V=L}var O=L;L=V;try{return T()}finally{L=O}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(T,V){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var O=L;L=T;try{return V()}finally{L=O}},o.unstable_scheduleCallback=function(T,V,O){var g=o.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?g+O:g):O=g,T){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=O+k,T={id:I++,callback:V,priorityLevel:T,startTime:O,expirationTime:k,sortIndex:-1},O>g?(T.sortIndex=O,s(R,T),a(E)===null&&T===a(R)&&(B?(se(Te),Te=-1):B=!0,he(b,O-g))):(T.sortIndex=k,s(E,T),Y||U||(Y=!0,Ve(oe))),T},o.unstable_shouldYield=Ot,o.unstable_wrapCallback=function(T){var V=L;return function(){var O=L;L=V;try{return T.apply(this,arguments)}finally{L=O}}}}(zs)),zs}var ed;function im(){return ed||(ed=1,Rs.exports=rm()),Rs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function om(){if(td)return et;td=1;var o=Gs(),s=im();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,h={};function w(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(h[e]=t,e=0;e<t.length;e++)f.add(t[e])}var _=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,R=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},z={};function L(e){return E.call(z,e)?!0:E.call(I,e)?!1:R.test(e)?z[e]=!0:(I[e]=!0,!1)}function U(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y(e,t,n,r){if(t===null||typeof t>"u"||U(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,n,r,i,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var se=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(se,Z);H[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(se,Z);H[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(se,Z);H[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var i=H.hasOwnProperty(t)?H[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y(t,n,i,r)&&(n=null),r||i===null?L(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),J=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Ot=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Ke=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ut=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),T=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,g;function k(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var q=!1;function ee(e,t){if(!e||q)return"";q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var i=x.stack.split(`
`),l=r.stack.split(`
`),u=i.length-1,d=l.length-1;1<=u&&0<=d&&i[u]!==l[d];)d--;for(;1<=u&&0<=d;u--,d--)if(i[u]!==l[d]){if(u!==1||d!==1)do if(u--,d--,0>d||i[u]!==l[d]){var p=`
`+i[u].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=u&&0<=d);break}}}finally{q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?k(e):""}function ie(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ne(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case J:return"Portal";case tt:return"Profiler";case Te:return"StrictMode";case Ke:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ot:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case at:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ut:return t=e.displayName||null,t!==null?t:ne(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return ne(e(t))}catch{}}return null}function de(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(t);case 8:return t===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=ue(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){e._valueTracker||(e._valueTracker=De(e))}function yt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ue(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Io(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function na(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ra(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function Oo(e,t){ra(e,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ia(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(fr(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function la(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function aa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?aa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,ua=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nf=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){nf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function ca(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function da(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ca(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var rf=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(rf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function $o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vo=null;function Uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,In=null,On=null;function fa(e){if(e=Dr(e)){if(typeof Bo!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Pi(t),Bo(e.stateNode,e.type,t))}}function pa(e){In?On?On.push(e):On=[e]:In=e}function ma(){if(In){var e=In,t=On;if(On=In=null,fa(e),t)for(e=0;e<t.length;e++)fa(t[e])}}function ha(e,t){return e(t)}function ga(){}var Ho=!1;function va(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return ha(e,t,n)}finally{Ho=!1,(In!==null||On!==null)&&(ga(),ma())}}function hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Wo=!1;if(_)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Wo=!1}function of(e,t,n,r,i,l,u,d,p){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(N){this.onError(N)}}var vr=!1,li=null,si=!1,Qo=null,lf={onError:function(e){vr=!0,li=e}};function sf(e,t,n,r,i,l,u,d,p){vr=!1,li=null,of.apply(lf,arguments)}function af(e,t,n,r,i,l,u,d,p){if(sf.apply(this,arguments),vr){if(vr){var x=li;vr=!1,li=null}else throw Error(a(198));si||(si=!0,Qo=x)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ya(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xa(e){if(mn(e)!==e)throw Error(a(188))}function uf(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return xa(i),e;if(l===r)return xa(i),t;l=l.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=l;else{for(var u=!1,d=i.child;d;){if(d===n){u=!0,n=i,r=l;break}if(d===r){u=!0,r=i,n=l;break}d=d.sibling}if(!u){for(d=l.child;d;){if(d===n){u=!0,n=l,r=i;break}if(d===r){u=!0,r=l,n=i;break}d=d.sibling}if(!u)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function wa(e){return e=uf(e),e!==null?Sa(e):null}function Sa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sa(e);if(t!==null)return t;e=e.sibling}return null}var ka=s.unstable_scheduleCallback,ja=s.unstable_cancelCallback,cf=s.unstable_shouldYield,df=s.unstable_requestPaint,Ee=s.unstable_now,ff=s.unstable_getCurrentPriorityLevel,Ko=s.unstable_ImmediatePriority,Ea=s.unstable_UserBlockingPriority,ai=s.unstable_NormalPriority,pf=s.unstable_LowPriority,Na=s.unstable_IdlePriority,ui=null,_t=null;function mf(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:vf,hf=Math.log,gf=Math.LN2;function vf(e){return e>>>=0,e===0?32:31-(hf(e)/gf|0)|0}var ci=64,di=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var d=u&~i;d!==0?r=yr(d):(l&=u,l!==0&&(r=yr(l)))}else u=n&~i,u!==0?r=yr(u):l!==0&&(r=yr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function yf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-xt(l),d=1<<u,p=i[u];p===-1?(!(d&n)||d&r)&&(i[u]=yf(d,t)):p<=t&&(e.expiredLanes|=d),l&=~d}}function Yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ca(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function wf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function _a(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pa,Jo,Ra,za,Ta,bo=!1,pi=[],Kt=null,Yt=null,Gt=null,wr=new Map,Sr=new Map,Xt=[],Sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function La(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function kr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Dr(t),t!==null&&Jo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kf(e,t,n,r,i){switch(t){case"focusin":return Kt=kr(Kt,e,t,n,r,i),!0;case"dragenter":return Yt=kr(Yt,e,t,n,r,i),!0;case"mouseover":return Gt=kr(Gt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return wr.set(l,kr(wr.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Sr.set(l,kr(Sr.get(l)||null,e,t,n,r,i)),!0}return!1}function Ia(e){var t=hn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=ya(n),t!==null){e.blockedOn=t,Ta(e.priority,function(){Ra(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vo=r,n.target.dispatchEvent(r),Vo=null}else return t=Dr(n),t!==null&&Jo(t),e.blockedOn=n,!1;t.shift()}return!0}function Oa(e,t,n){mi(e)&&n.delete(t)}function jf(){bo=!1,Kt!==null&&mi(Kt)&&(Kt=null),Yt!==null&&mi(Yt)&&(Yt=null),Gt!==null&&mi(Gt)&&(Gt=null),wr.forEach(Oa),Sr.forEach(Oa)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,jf)))}function Er(e){function t(i){return jr(i,e)}if(0<pi.length){jr(pi[0],e);for(var n=1;n<pi.length;n++){var r=pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&jr(Kt,e),Yt!==null&&jr(Yt,e),Gt!==null&&jr(Gt,e),wr.forEach(t),Sr.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Ia(n),n.blockedOn===null&&Xt.shift()}var Mn=b.ReactCurrentBatchConfig,hi=!0;function Ef(e,t,n,r){var i=me,l=Mn.transition;Mn.transition=null;try{me=1,qo(e,t,n,r)}finally{me=i,Mn.transition=l}}function Nf(e,t,n,r){var i=me,l=Mn.transition;Mn.transition=null;try{me=4,qo(e,t,n,r)}finally{me=i,Mn.transition=l}}function qo(e,t,n,r){if(hi){var i=Zo(e,t,n,r);if(i===null)gl(e,t,r,gi,n),La(e,r);else if(kf(i,e,t,n,r))r.stopPropagation();else if(La(e,r),t&4&&-1<Sf.indexOf(e)){for(;i!==null;){var l=Dr(i);if(l!==null&&Pa(l),l=Zo(e,t,n,r),l===null&&gl(e,t,r,gi,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else gl(e,t,r,null,n)}}var gi=null;function Zo(e,t,n,r){if(gi=null,e=Uo(r),e=hn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ya(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function Ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ff()){case Ko:return 1;case Ea:return 4;case ai:case pf:return 16;case Na:return 536870912;default:return 16}default:return 16}}var Jt=null,el=null,vi=null;function Da(){if(vi)return vi;var e,t=el,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===i[l-r];r++);return vi=i.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Fa(){return!1}function rt(e){function t(n,r,i,l,u){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xi:Fa,this.isPropagationStopped=Fa,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=rt(Dn),Nr=O({},Dn,{view:0,detail:0}),Cf=rt(Nr),nl,rl,Cr,wi=O({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(nl=e.screenX-Cr.screenX,rl=e.screenY-Cr.screenY):rl=nl=0,Cr=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),Aa=rt(wi),_f=O({},wi,{dataTransfer:0}),Pf=rt(_f),Rf=O({},Nr,{relatedTarget:0}),il=rt(Rf),zf=O({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tf=rt(zf),Lf=O({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),If=rt(Lf),Of=O({},Dn,{data:0}),$a=rt(Of),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ff[e])?!!t[e]:!1}function ol(){return Af}var $f=O({},Nr,{key:function(e){if(e.key){var t=Mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vf=rt($f),Uf=O({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Va=rt(Uf),Bf=O({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),Hf=rt(Bf),Wf=O({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=rt(Wf),Kf=O({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yf=rt(Kf),Gf=[9,13,27,32],ll=_&&"CompositionEvent"in window,_r=null;_&&"documentMode"in document&&(_r=document.documentMode);var Xf=_&&"TextEvent"in window&&!_r,Ua=_&&(!ll||_r&&8<_r&&11>=_r),Ba=" ",Ha=!1;function Wa(e,t){switch(e){case"keyup":return Gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function Jf(e,t){switch(e){case"compositionend":return Qa(t);case"keypress":return t.which!==32?null:(Ha=!0,Ba);case"textInput":return e=t.data,e===Ba&&Ha?null:e;default:return null}}function bf(e,t){if(Fn)return e==="compositionend"||!ll&&Wa(e,t)?(e=Da(),vi=el=Jt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ua&&t.locale!=="ko"?null:t.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qf[e.type]:t==="textarea"}function Ya(e,t,n,r){pa(r),t=Ni(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Rr=null;function Zf(e){du(e,0)}function Si(e){var t=Bn(e);if(yt(t))return e}function ep(e,t){if(e==="change")return t}var Ga=!1;if(_){var sl;if(_){var al="oninput"in document;if(!al){var Xa=document.createElement("div");Xa.setAttribute("oninput","return;"),al=typeof Xa.oninput=="function"}sl=al}else sl=!1;Ga=sl&&(!document.documentMode||9<document.documentMode)}function Ja(){Pr&&(Pr.detachEvent("onpropertychange",ba),Rr=Pr=null)}function ba(e){if(e.propertyName==="value"&&Si(Rr)){var t=[];Ya(t,Rr,e,Uo(e)),va(Zf,t)}}function tp(e,t,n){e==="focusin"?(Ja(),Pr=t,Rr=n,Pr.attachEvent("onpropertychange",ba)):e==="focusout"&&Ja()}function np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Rr)}function rp(e,t){if(e==="click")return Si(t)}function ip(e,t){if(e==="input"||e==="change")return Si(t)}function op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:op;function zr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!E.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function qa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Za(e,t){var n=qa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qa(n)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ii(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lp(e){var t=tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eu(n.ownerDocument.documentElement,n)){if(r!==null&&ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Za(n,l);var u=Za(n,r);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sp=_&&"documentMode"in document&&11>=document.documentMode,An=null,cl=null,Tr=null,dl=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||An==null||An!==ii(r)||(r=An,"selectionStart"in r&&ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&zr(Tr,r)||(Tr=r,r=Ni(cl,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function ki(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},fl={},ru={};_&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function ji(e){if(fl[e])return fl[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ru)return fl[e]=t[n];return e}var iu=ji("animationend"),ou=ji("animationiteration"),lu=ji("animationstart"),su=ji("transitionend"),au=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){au.set(e,t),w(t,[e])}for(var pl=0;pl<uu.length;pl++){var ml=uu[pl],ap=ml.toLowerCase(),up=ml[0].toUpperCase()+ml.slice(1);bt(ap,"on"+up)}bt(iu,"onAnimationEnd"),bt(ou,"onAnimationIteration"),bt(lu,"onAnimationStart"),bt("dblclick","onDoubleClick"),bt("focusin","onFocus"),bt("focusout","onBlur"),bt(su,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,af(r,t,void 0,e),e.currentTarget=null}function du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var u=r.length-1;0<=u;u--){var d=r[u],p=d.instance,x=d.currentTarget;if(d=d.listener,p!==l&&i.isPropagationStopped())break e;cu(i,d,x),l=p}else for(u=0;u<r.length;u++){if(d=r[u],p=d.instance,x=d.currentTarget,d=d.listener,p!==l&&i.isPropagationStopped())break e;cu(i,d,x),l=p}}}if(si)throw e=Qo,si=!1,Qo=null,e}function ve(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(fu(t,e,2,!1),n.add(r))}function hl(e,t,n){var r=0;t&&(r|=4),fu(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[Ei]){e[Ei]=!0,f.forEach(function(n){n!=="selectionchange"&&(cp.has(n)||hl(n,!1,e),hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,hl("selectionchange",!1,t))}}function fu(e,t,n,r){switch(Ma(t)){case 1:var i=Ef;break;case 4:i=Nf;break;default:i=qo}n=i.bind(null,t,n,e),i=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function gl(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(u===4)for(u=r.return;u!==null;){var p=u.tag;if((p===3||p===4)&&(p=u.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;u=u.return}for(;d!==null;){if(u=hn(d),u===null)return;if(p=u.tag,p===5||p===6){r=l=u;continue e}d=d.parentNode}}r=r.return}va(function(){var x=l,N=Uo(n),C=[];e:{var j=au.get(e);if(j!==void 0){var M=tl,F=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":M=Vf;break;case"focusin":F="focus",M=il;break;case"focusout":F="blur",M=il;break;case"beforeblur":case"afterblur":M=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Hf;break;case iu:case ou:case lu:M=Tf;break;case su:M=Qf;break;case"scroll":M=Cf;break;case"wheel":M=Yf;break;case"copy":case"cut":case"paste":M=If;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Va}var A=(t&4)!==0,Ne=!A&&e==="scroll",v=A?j!==null?j+"Capture":null:j;A=[];for(var m=x,y;m!==null;){y=m;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,v!==null&&(P=hr(m,v),P!=null&&A.push(Or(m,P,y)))),Ne)break;m=m.return}0<A.length&&(j=new M(j,F,null,n,N),C.push({event:j,listeners:A}))}}if(!(t&7)){e:{if(j=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",j&&n!==Vo&&(F=n.relatedTarget||n.fromElement)&&(hn(F)||F[Dt]))break e;if((M||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,M?(F=n.relatedTarget||n.toElement,M=x,F=F?hn(F):null,F!==null&&(Ne=mn(F),F!==Ne||F.tag!==5&&F.tag!==6)&&(F=null)):(M=null,F=x),M!==F)){if(A=Aa,P="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=Va,P="onPointerLeave",v="onPointerEnter",m="pointer"),Ne=M==null?j:Bn(M),y=F==null?j:Bn(F),j=new A(P,m+"leave",M,n,N),j.target=Ne,j.relatedTarget=y,P=null,hn(N)===x&&(A=new A(v,m+"enter",F,n,N),A.target=y,A.relatedTarget=Ne,P=A),Ne=P,M&&F)t:{for(A=M,v=F,m=0,y=A;y;y=Vn(y))m++;for(y=0,P=v;P;P=Vn(P))y++;for(;0<m-y;)A=Vn(A),m--;for(;0<y-m;)v=Vn(v),y--;for(;m--;){if(A===v||v!==null&&A===v.alternate)break t;A=Vn(A),v=Vn(v)}A=null}else A=null;M!==null&&pu(C,j,M,A,!1),F!==null&&Ne!==null&&pu(C,Ne,F,A,!0)}}e:{if(j=x?Bn(x):window,M=j.nodeName&&j.nodeName.toLowerCase(),M==="select"||M==="input"&&j.type==="file")var $=ep;else if(Ka(j))if(Ga)$=ip;else{$=np;var W=tp}else(M=j.nodeName)&&M.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&($=rp);if($&&($=$(e,x))){Ya(C,$,n,N);break e}W&&W(e,j,x),e==="focusout"&&(W=j._wrapperState)&&W.controlled&&j.type==="number"&&Mo(j,"number",j.value)}switch(W=x?Bn(x):window,e){case"focusin":(Ka(W)||W.contentEditable==="true")&&(An=W,cl=x,Tr=null);break;case"focusout":Tr=cl=An=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,nu(C,n,N);break;case"selectionchange":if(sp)break;case"keydown":case"keyup":nu(C,n,N)}var Q;if(ll)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Fn?Wa(e,n)&&(G="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Ua&&n.locale!=="ko"&&(Fn||G!=="onCompositionStart"?G==="onCompositionEnd"&&Fn&&(Q=Da()):(Jt=N,el="value"in Jt?Jt.value:Jt.textContent,Fn=!0)),W=Ni(x,G),0<W.length&&(G=new $a(G,e,null,n,N),C.push({event:G,listeners:W}),Q?G.data=Q:(Q=Qa(n),Q!==null&&(G.data=Q)))),(Q=Xf?Jf(e,n):bf(e,n))&&(x=Ni(x,"onBeforeInput"),0<x.length&&(N=new $a("onBeforeInput","beforeinput",null,n,N),C.push({event:N,listeners:x}),N.data=Q))}du(C,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=hr(e,n),l!=null&&r.unshift(Or(e,l,i)),l=hr(e,t),l!=null&&r.push(Or(e,l,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pu(e,t,n,r,i){for(var l=t._reactName,u=[];n!==null&&n!==r;){var d=n,p=d.alternate,x=d.stateNode;if(p!==null&&p===r)break;d.tag===5&&x!==null&&(d=x,i?(p=hr(n,l),p!=null&&u.unshift(Or(n,p,d))):i||(p=hr(n,l),p!=null&&u.push(Or(n,p,d)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var dp=/\r\n?/g,fp=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(dp,`
`).replace(fp,"")}function Ci(e,t,n){if(t=mu(t),mu(e)!==t&&n)throw Error(a(425))}function _i(){}var vl=null,yl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,pp=typeof clearTimeout=="function"?clearTimeout:void 0,hu=typeof Promise=="function"?Promise:void 0,mp=typeof queueMicrotask=="function"?queueMicrotask:typeof hu<"u"?function(e){return hu.resolve(null).then(e).catch(hp)}:wl;function hp(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Er(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Un,Mr="__reactProps$"+Un,Dt="__reactContainer$"+Un,kl="__reactEvents$"+Un,gp="__reactListeners$"+Un,vp="__reactHandles$"+Un;function hn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gu(e);e!==null;){if(n=e[Pt])return n;e=gu(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[Pt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Pi(e){return e[Mr]||null}var jl=[],Hn=-1;function Zt(e){return{current:e}}function ye(e){0>Hn||(e.current=jl[Hn],jl[Hn]=null,Hn--)}function ge(e,t){Hn++,jl[Hn]=e.current,e.current=t}var en={},Ue=Zt(en),Xe=Zt(!1),gn=en;function Wn(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function Ri(){ye(Xe),ye(Ue)}function vu(e,t,n){if(Ue.current!==en)throw Error(a(168));ge(Ue,t),ge(Xe,n)}function yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(a(108,de(e)||"Unknown",i));return O({},n,r)}function zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,gn=Ue.current,ge(Ue,e),ge(Xe,Xe.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=yu(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,ye(Xe),ye(Ue),ge(Ue,e)):ye(Xe),ge(Xe,n)}var Ft=null,Ti=!1,El=!1;function wu(e){Ft===null?Ft=[e]:Ft.push(e)}function yp(e){Ti=!0,wu(e)}function tn(){if(!El&&Ft!==null){El=!0;var e=0,t=me;try{var n=Ft;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,Ti=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),ka(Ko,tn),i}finally{me=t,El=!1}}return null}var Qn=[],Kn=0,Li=null,Ii=0,ct=[],dt=0,vn=null,At=1,$t="";function yn(e,t){Qn[Kn++]=Ii,Qn[Kn++]=Li,Li=e,Ii=t}function Su(e,t,n){ct[dt++]=At,ct[dt++]=$t,ct[dt++]=vn,vn=e;var r=At;e=$t;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var l=32-xt(t)+i;if(30<l){var u=i-i%5;l=(r&(1<<u)-1).toString(32),r>>=u,i-=u,At=1<<32-xt(t)+i|n<<i|r,$t=l+e}else At=1<<l|n<<i|r,$t=e}function Nl(e){e.return!==null&&(yn(e,1),Su(e,1,0))}function Cl(e){for(;e===Li;)Li=Qn[--Kn],Qn[Kn]=null,Ii=Qn[--Kn],Qn[Kn]=null;for(;e===vn;)vn=ct[--dt],ct[dt]=null,$t=ct[--dt],ct[dt]=null,At=ct[--dt],ct[dt]=null}var it=null,ot=null,we=!1,St=null;function ku(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,ot=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:At,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,ot=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(we){var t=ot;if(t){var n=t;if(!ju(e,t)){if(_l(e))throw Error(a(418));t=qt(n.nextSibling);var r=it;t&&ju(e,t)?ku(r,n):(e.flags=e.flags&-4097|2,we=!1,it=e)}}else{if(_l(e))throw Error(a(418));e.flags=e.flags&-4097|2,we=!1,it=e}}}function Eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Oi(e){if(e!==it)return!1;if(!we)return Eu(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=ot)){if(_l(e))throw Nu(),Error(a(418));for(;t;)ku(e,t),t=qt(t.nextSibling)}if(Eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=it?qt(e.stateNode.nextSibling):null;return!0}function Nu(){for(var e=ot;e;)e=qt(e.nextSibling)}function Yn(){ot=it=null,we=!1}function Rl(e){St===null?St=[e]:St.push(e)}var xp=b.ReactCurrentBatchConfig;function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var d=i.refs;u===null?delete d[l]:d[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Mi(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cu(e){var t=e._init;return t(e._payload)}function _u(e){function t(v,m){if(e){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=cn(v,m),v.index=0,v.sibling=null,v}function l(v,m,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function u(v){return e&&v.alternate===null&&(v.flags|=2),v}function d(v,m,y,P){return m===null||m.tag!==6?(m=ws(y,v.mode,P),m.return=v,m):(m=i(m,y),m.return=v,m)}function p(v,m,y,P){var $=y.type;return $===K?N(v,m,y.props.children,P,y.key):m!==null&&(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ve&&Cu($)===m.type)?(P=i(m,y.props),P.ref=Fr(v,m,y),P.return=v,P):(P=oo(y.type,y.key,y.props,null,v.mode,P),P.ref=Fr(v,m,y),P.return=v,P)}function x(v,m,y,P){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Ss(y,v.mode,P),m.return=v,m):(m=i(m,y.children||[]),m.return=v,m)}function N(v,m,y,P,$){return m===null||m.tag!==7?(m=Cn(y,v.mode,P,$),m.return=v,m):(m=i(m,y),m.return=v,m)}function C(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ws(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oe:return y=oo(m.type,m.key,m.props,null,v.mode,y),y.ref=Fr(v,null,m),y.return=v,y;case J:return m=Ss(m,v.mode,y),m.return=v,m;case Ve:var P=m._init;return C(v,P(m._payload),y)}if(fr(m)||V(m))return m=Cn(m,v.mode,y,null),m.return=v,m;Mi(v,m)}return null}function j(v,m,y,P){var $=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return $!==null?null:d(v,m,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oe:return y.key===$?p(v,m,y,P):null;case J:return y.key===$?x(v,m,y,P):null;case Ve:return $=y._init,j(v,m,$(y._payload),P)}if(fr(y)||V(y))return $!==null?null:N(v,m,y,P,null);Mi(v,y)}return null}function M(v,m,y,P,$){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(y)||null,d(m,v,""+P,$);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case oe:return v=v.get(P.key===null?y:P.key)||null,p(m,v,P,$);case J:return v=v.get(P.key===null?y:P.key)||null,x(m,v,P,$);case Ve:var W=P._init;return M(v,m,y,W(P._payload),$)}if(fr(P)||V(P))return v=v.get(y)||null,N(m,v,P,$,null);Mi(m,P)}return null}function F(v,m,y,P){for(var $=null,W=null,Q=m,G=m=0,Oe=null;Q!==null&&G<y.length;G++){Q.index>G?(Oe=Q,Q=null):Oe=Q.sibling;var ce=j(v,Q,y[G],P);if(ce===null){Q===null&&(Q=Oe);break}e&&Q&&ce.alternate===null&&t(v,Q),m=l(ce,m,G),W===null?$=ce:W.sibling=ce,W=ce,Q=Oe}if(G===y.length)return n(v,Q),we&&yn(v,G),$;if(Q===null){for(;G<y.length;G++)Q=C(v,y[G],P),Q!==null&&(m=l(Q,m,G),W===null?$=Q:W.sibling=Q,W=Q);return we&&yn(v,G),$}for(Q=r(v,Q);G<y.length;G++)Oe=M(Q,v,G,y[G],P),Oe!==null&&(e&&Oe.alternate!==null&&Q.delete(Oe.key===null?G:Oe.key),m=l(Oe,m,G),W===null?$=Oe:W.sibling=Oe,W=Oe);return e&&Q.forEach(function(dn){return t(v,dn)}),we&&yn(v,G),$}function A(v,m,y,P){var $=V(y);if(typeof $!="function")throw Error(a(150));if(y=$.call(y),y==null)throw Error(a(151));for(var W=$=null,Q=m,G=m=0,Oe=null,ce=y.next();Q!==null&&!ce.done;G++,ce=y.next()){Q.index>G?(Oe=Q,Q=null):Oe=Q.sibling;var dn=j(v,Q,ce.value,P);if(dn===null){Q===null&&(Q=Oe);break}e&&Q&&dn.alternate===null&&t(v,Q),m=l(dn,m,G),W===null?$=dn:W.sibling=dn,W=dn,Q=Oe}if(ce.done)return n(v,Q),we&&yn(v,G),$;if(Q===null){for(;!ce.done;G++,ce=y.next())ce=C(v,ce.value,P),ce!==null&&(m=l(ce,m,G),W===null?$=ce:W.sibling=ce,W=ce);return we&&yn(v,G),$}for(Q=r(v,Q);!ce.done;G++,ce=y.next())ce=M(Q,v,G,ce.value,P),ce!==null&&(e&&ce.alternate!==null&&Q.delete(ce.key===null?G:ce.key),m=l(ce,m,G),W===null?$=ce:W.sibling=ce,W=ce);return e&&Q.forEach(function(qp){return t(v,qp)}),we&&yn(v,G),$}function Ne(v,m,y,P){if(typeof y=="object"&&y!==null&&y.type===K&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oe:e:{for(var $=y.key,W=m;W!==null;){if(W.key===$){if($=y.type,$===K){if(W.tag===7){n(v,W.sibling),m=i(W,y.props.children),m.return=v,v=m;break e}}else if(W.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ve&&Cu($)===W.type){n(v,W.sibling),m=i(W,y.props),m.ref=Fr(v,W,y),m.return=v,v=m;break e}n(v,W);break}else t(v,W);W=W.sibling}y.type===K?(m=Cn(y.props.children,v.mode,P,y.key),m.return=v,v=m):(P=oo(y.type,y.key,y.props,null,v.mode,P),P.ref=Fr(v,m,y),P.return=v,v=P)}return u(v);case J:e:{for(W=y.key;m!==null;){if(m.key===W)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(v,m.sibling),m=i(m,y.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Ss(y,v.mode,P),m.return=v,v=m}return u(v);case Ve:return W=y._init,Ne(v,m,W(y._payload),P)}if(fr(y))return F(v,m,y,P);if(V(y))return A(v,m,y,P);Mi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,y),m.return=v,v=m):(n(v,m),m=ws(y,v.mode,P),m.return=v,v=m),u(v)):n(v,m)}return Ne}var Gn=_u(!0),Pu=_u(!1),Di=Zt(null),Fi=null,Xn=null,zl=null;function Tl(){zl=Xn=Fi=null}function Ll(e){var t=Di.current;ye(Di),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){Fi=e,zl=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Fi===null)throw Error(a(308));Xn=e,Fi.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var xn=null;function Ol(e){xn===null?xn=[e]:xn.push(e)}function Ru(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ol(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ol(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}function Tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $i(e,t,n,r){var i=e.updateQueue;nn=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var p=d,x=p.next;p.next=null,u===null?l=x:u.next=x,u=p;var N=e.alternate;N!==null&&(N=N.updateQueue,d=N.lastBaseUpdate,d!==u&&(d===null?N.firstBaseUpdate=x:d.next=x,N.lastBaseUpdate=p))}if(l!==null){var C=i.baseState;u=0,N=x=p=null,d=l;do{var j=d.lane,M=d.eventTime;if((r&j)===j){N!==null&&(N=N.next={eventTime:M,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var F=e,A=d;switch(j=t,M=n,A.tag){case 1:if(F=A.payload,typeof F=="function"){C=F.call(M,C,j);break e}C=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=A.payload,j=typeof F=="function"?F.call(M,C,j):F,j==null)break e;C=O({},C,j);break e;case 2:nn=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,j=i.effects,j===null?i.effects=[d]:j.push(d))}else M={eventTime:M,lane:j,tag:d.tag,payload:d.payload,callback:d.callback,next:null},N===null?(x=N=M,p=C):N=N.next=M,u|=j;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;j=d,d=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);if(N===null&&(p=C),i.baseState=p,i.firstBaseUpdate=x,i.lastBaseUpdate=N,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);kn|=u,e.lanes=u,e.memoizedState=C}}function Lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var Ar={},Rt=Zt(Ar),$r=Zt(Ar),Vr=Zt(Ar);function wn(e){if(e===Ar)throw Error(a(174));return e}function Dl(e,t){switch(ge(Vr,t),ge($r,e),ge(Rt,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fo(t,e)}ye(Rt),ge(Rt,t)}function bn(){ye(Rt),ye($r),ye(Vr)}function Iu(e){wn(Vr.current);var t=wn(Rt.current),n=Fo(t,e.type);t!==n&&(ge($r,e),ge(Rt,n))}function Fl(e){$r.current===e&&(ye(Rt),ye($r))}var Se=Zt(0);function Vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function $l(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Ui=b.ReactCurrentDispatcher,Vl=b.ReactCurrentBatchConfig,Sn=0,ke=null,Pe=null,Le=null,Bi=!1,Ur=!1,Br=0,wp=0;function Be(){throw Error(a(321))}function Ul(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Bl(e,t,n,r,i,l){if(Sn=l,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?Ep:Np,e=n(r,i),Ur){l=0;do{if(Ur=!1,Br=0,25<=l)throw Error(a(301));l+=1,Le=Pe=null,t.updateQueue=null,Ui.current=Cp,e=n(r,i)}while(Ur)}if(Ui.current=Qi,t=Pe!==null&&Pe.next!==null,Sn=0,Le=Pe=ke=null,Bi=!1,t)throw Error(a(300));return e}function Hl(){var e=Br!==0;return Br=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ke.memoizedState=Le=e:Le=Le.next=e,Le}function pt(){if(Pe===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Le===null?ke.memoizedState:Le.next;if(t!==null)Le=t,Pe=e;else{if(e===null)throw Error(a(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Le===null?ke.memoizedState=Le=e:Le=Le.next=e}return Le}function Hr(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=pt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var d=u=null,p=null,x=l;do{var N=x.lane;if((Sn&N)===N)p!==null&&(p=p.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var C={lane:N,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};p===null?(d=p=C,u=r):p=p.next=C,ke.lanes|=N,kn|=N}x=x.next}while(x!==null&&x!==l);p===null?u=r:p.next=d,wt(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ke.lanes|=l,kn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=pt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do l=e(l,u.action),u=u.next;while(u!==i);wt(l,t.memoizedState)||(be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ou(){}function Mu(e,t){var n=ke,r=pt(),i=t(),l=!wt(r.memoizedState,i);if(l&&(r.memoizedState=i,be=!0),r=r.queue,Kl(Au.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Wr(9,Fu.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(a(349));Sn&30||Du(n,t,i)}return i}function Du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fu(e,t,n,r){t.value=n,t.getSnapshot=r,$u(t)&&Vu(e)}function Au(e,t,n){return n(function(){$u(t)&&Vu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Vu(e){var t=Vt(e,1);t!==null&&Nt(t,e,1,-1)}function Uu(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=jp.bind(null,ke,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bu(){return pt().memoizedState}function Hi(e,t,n,r){var i=zt();ke.flags|=e,i.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var i=pt();r=r===void 0?null:r;var l=void 0;if(Pe!==null){var u=Pe.memoizedState;if(l=u.destroy,r!==null&&Ul(r,u.deps)){i.memoizedState=Wr(t,n,l,r);return}}ke.flags|=e,i.memoizedState=Wr(1|t,n,l,r)}function Hu(e,t){return Hi(8390656,8,e,t)}function Kl(e,t){return Wi(2048,8,e,t)}function Wu(e,t){return Wi(4,2,e,t)}function Qu(e,t){return Wi(4,4,e,t)}function Ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yu(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,Ku.bind(null,t,e),n)}function Yl(){}function Gu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ul(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ju(e,t,n){return Sn&21?(wt(n,t)||(n=Ca(),ke.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function Sp(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=Vl.transition;Vl.transition={};try{e(!1),t()}finally{me=n,Vl.transition=r}}function bu(){return pt().memoizedState}function kp(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qu(e))Zu(t,n);else if(n=Ru(e,t,n,r),n!==null){var i=Ge();Nt(n,e,r,i),ec(n,t,r)}}function jp(e,t,n){var r=an(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qu(e))Zu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,d=l(u,n);if(i.hasEagerState=!0,i.eagerState=d,wt(d,u)){var p=t.interleaved;p===null?(i.next=i,Ol(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}n=Ru(e,t,i,r),n!==null&&(i=Ge(),Nt(n,e,r,i),ec(n,t,r))}}function qu(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Zu(e,t){Ur=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ec(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}var Qi={readContext:ft,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Ep={readContext:ft,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4194308,4,Ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=kp.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:Yl,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=Sp.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=zt();if(we){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),Ie===null)throw Error(a(349));Sn&30||Du(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Hu(Au.bind(null,r,l,e),[e]),r.flags|=2048,Wr(9,Fu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=zt(),t=Ie.identifierPrefix;if(we){var n=$t,r=At;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Np={readContext:ft,useCallback:Gu,useContext:ft,useEffect:Kl,useImperativeHandle:Yu,useInsertionEffect:Wu,useLayoutEffect:Qu,useMemo:Xu,useReducer:Wl,useRef:Bu,useState:function(){return Wl(Hr)},useDebugValue:Yl,useDeferredValue:function(e){var t=pt();return Ju(t,Pe.memoizedState,e)},useTransition:function(){var e=Wl(Hr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Mu,useId:bu,unstable_isNewReconciler:!1},Cp={readContext:ft,useCallback:Gu,useContext:ft,useEffect:Kl,useImperativeHandle:Yu,useInsertionEffect:Wu,useLayoutEffect:Qu,useMemo:Xu,useReducer:Ql,useRef:Bu,useState:function(){return Ql(Hr)},useDebugValue:Yl,useDeferredValue:function(e){var t=pt();return Pe===null?t.memoizedState=e:Ju(t,Pe.memoizedState,e)},useTransition:function(){var e=Ql(Hr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Ou,useSyncExternalStore:Mu,useId:bu,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ki={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=an(e),l=Ut(r,i);l.payload=t,n!=null&&(l.callback=n),t=rn(e,l,i),t!==null&&(Nt(t,e,i,r),Ai(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=an(e),l=Ut(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=rn(e,l,i),t!==null&&(Nt(t,e,i,r),Ai(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=an(e),i=Ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=rn(e,i,r),t!==null&&(Nt(t,e,r,n),Ai(t,e,r))}};function tc(e,t,n,r,i,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,u):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,l):!0}function nc(e,t,n){var r=!1,i=en,l=t.contextType;return typeof l=="object"&&l!==null?l=ft(l):(i=Je(t)?gn:Ue.current,r=t.contextTypes,l=(r=r!=null)?Wn(e,i):en),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ki.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ml(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ft(l):(l=Je(t)?gn:Ue.current,i.context=Wn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Gl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ki.enqueueReplaceState(i,i.state,null),$i(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t){try{var n="",r=t;do n+=ie(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function ic(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zi||(Zi=!0,fs=r),bl(e,t)},n}function oc(e,t,n){n=Ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function lc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Up.bind(null,e,t,n),t.then(e,e))}function sc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Pp=b.ReactCurrentOwner,be=!1;function Ye(e,t,n,r){t.child=e===null?Pu(t,null,n,r):Gn(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var l=t.ref;return Jn(t,i),r=Bl(e,t,n,r,l,i),n=Hl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(we&&n&&Nl(t),t.flags|=1,Ye(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!xs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,dc(e,t,l,r,i)):(e=oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(u,r)&&e.ref===t.ref)return Bt(e,t,i)}return t.flags|=1,e=cn(l,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(zr(l,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Bt(e,t,i)}return ql(e,t,n,r,i)}function fc(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(er,lt),lt|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(er,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ge(er,lt),lt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ge(er,lt),lt|=r;return Ye(e,t,i,n),t.child}function pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,i){var l=Je(n)?gn:Ue.current;return l=Wn(t,l),Jn(t,i),n=Bl(e,t,n,r,l,i),r=Hl(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bt(e,t,i)):(we&&r&&Nl(t),t.flags|=1,Ye(e,t,n,i),t.child)}function mc(e,t,n,r,i){if(Je(n)){var l=!0;zi(t)}else l=!1;if(Jn(t,i),t.stateNode===null)Gi(e,t),nc(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var u=t.stateNode,d=t.memoizedProps;u.props=d;var p=u.context,x=n.contextType;typeof x=="object"&&x!==null?x=ft(x):(x=Je(n)?gn:Ue.current,x=Wn(t,x));var N=n.getDerivedStateFromProps,C=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function";C||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==r||p!==x)&&rc(t,u,r,x),nn=!1;var j=t.memoizedState;u.state=j,$i(t,r,u,i),p=t.memoizedState,d!==r||j!==p||Xe.current||nn?(typeof N=="function"&&(Gl(t,n,N,r),p=t.memoizedState),(d=nn||tc(t,n,d,r,j,p,x))?(C||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),u.props=r,u.state=p,u.context=x,r=d):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,zu(e,t),d=t.memoizedProps,x=t.type===t.elementType?d:kt(t.type,d),u.props=x,C=t.pendingProps,j=u.context,p=n.contextType,typeof p=="object"&&p!==null?p=ft(p):(p=Je(n)?gn:Ue.current,p=Wn(t,p));var M=n.getDerivedStateFromProps;(N=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==C||j!==p)&&rc(t,u,r,p),nn=!1,j=t.memoizedState,u.state=j,$i(t,r,u,i);var F=t.memoizedState;d!==C||j!==F||Xe.current||nn?(typeof M=="function"&&(Gl(t,n,M,r),F=t.memoizedState),(x=nn||tc(t,n,x,r,j,F,p)||!1)?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,F,p),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,F,p)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=F),u.props=r,u.state=F,u.context=p,r=x):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,l,i)}function Zl(e,t,n,r,i,l){pc(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return i&&xu(t,n,!1),Bt(e,t,l);r=t.stateNode,Pp.current=t;var d=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=Gn(t,e.child,null,l),t.child=Gn(t,null,d,l)):Ye(e,t,d,l),t.memoizedState=r.state,i&&xu(t,n,!0),t.child}function hc(e){var t=e.stateNode;t.pendingContext?vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vu(e,t.context,!1),Dl(e,t.containerInfo)}function gc(e,t,n,r,i){return Yn(),Rl(i),t.flags|=256,Ye(e,t,n,r),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function vc(e,t,n){var r=t.pendingProps,i=Se.current,l=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Se,i&1),e===null)return Pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=r.children,e=r.fallback,l?(r=t.mode,l=t.child,u={mode:"hidden",children:u},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=u):l=lo(u,r,0,null),e=Cn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ts(n),t.memoizedState=es,e):ns(t,u));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return Rp(e,t,u,r,d,i,n);if(l){l=r.fallback,u=t.mode,i=e.child,d=i.sibling;var p={mode:"hidden",children:r.children};return!(u&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=cn(i,p),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=cn(d,l):(l=Cn(l,u,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,u=e.child.memoizedState,u=u===null?ts(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=es,r}return l=e.child,e=l.sibling,r=cn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ns(e,t){return t=lo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&Rl(r),Gn(t,e.child,null,n),e=ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,n,r,i,l,u){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(a(422))),Yi(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=lo({mode:"visible",children:r.children},i,0,null),l=Cn(l,i,u,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Gn(t,e.child,null,u),t.child.memoizedState=ts(u),t.memoizedState=es,l);if(!(t.mode&1))return Yi(e,t,u,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(a(419)),r=Jl(l,r,void 0),Yi(e,t,u,r)}if(d=(u&e.childLanes)!==0,be||d){if(r=Ie,r!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|u)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Vt(e,i),Nt(r,e,i,-1))}return ys(),r=Jl(Error(a(421))),Yi(e,t,u,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Bp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ot=qt(i.nextSibling),it=t,we=!0,St=null,e!==null&&(ct[dt++]=At,ct[dt++]=$t,ct[dt++]=vn,At=e.id,$t=e.overflow,vn=t),t=ns(t,r.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function rs(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function xc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Ye(e,t,r.children,n),r=Se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rs(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rs(t,!0,n,null,l);break;case"together":rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zp(e,t,n){switch(t.tag){case 3:hc(t),Yn();break;case 5:Iu(t);break;case 1:Je(t.type)&&zi(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(Di,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Se,Se.current&1),t.flags|=128,null):n&t.child.childLanes?vc(e,t,n):(ge(Se,Se.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);ge(Se,Se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Se,Se.current),r)break;return null;case 22:case 23:return t.lanes=0,fc(e,t,n)}return Bt(e,t,n)}var wc,is,Sc,kc;wc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},is=function(){},Sc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(Rt.current);var l=null;switch(n){case"input":i=Io(e,i),r=Io(e,r),l=[];break;case"select":i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),l=[];break;case"textarea":i=Do(e,i),r=Do(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_i)}Ao(n,r);var u;n=null;for(x in i)if(!r.hasOwnProperty(x)&&i.hasOwnProperty(x)&&i[x]!=null)if(x==="style"){var d=i[x];for(u in d)d.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(h.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var p=r[x];if(d=i!=null?i[x]:void 0,r.hasOwnProperty(x)&&p!==d&&(p!=null||d!=null))if(x==="style")if(d){for(u in d)!d.hasOwnProperty(u)||p&&p.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in p)p.hasOwnProperty(u)&&d[u]!==p[u]&&(n||(n={}),n[u]=p[u])}else n||(l||(l=[]),l.push(x,n)),n=p;else x==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,d=d?d.__html:void 0,p!=null&&d!==p&&(l=l||[]).push(x,p)):x==="children"?typeof p!="string"&&typeof p!="number"||(l=l||[]).push(x,""+p):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(h.hasOwnProperty(x)?(p!=null&&x==="onScroll"&&ve("scroll",e),l||d===p||(l=[])):(l=l||[]).push(x,p))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}},kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qr(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tp(e,t,n){var r=t.pendingProps;switch(Cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Je(t.type)&&Ri(),He(t),null;case 3:return r=t.stateNode,bn(),ye(Xe),ye(Ue),$l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(hs(St),St=null))),is(e,t),He(t),null;case 5:Fl(t);var i=wn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Sc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return He(t),null}if(e=wn(Rt.current),Oi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Pt]=t,r[Mr]=l,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)ve(Lr[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":na(r,l),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ve("invalid",r);break;case"textarea":oa(r,l),ve("invalid",r)}Ao(n,l),i=null;for(var u in l)if(l.hasOwnProperty(u)){var d=l[u];u==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&Ci(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&Ci(r.textContent,d,e),i=["children",""+d]):h.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&ve("scroll",r)}switch(n){case"input":Mt(r),ia(r,l,!0);break;case"textarea":Mt(r),sa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=_i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=aa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[Pt]=t,e[Mr]=r,wc(e,t,!1,!1),t.stateNode=e;e:{switch(u=$o(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)ve(Lr[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":na(e,r),i=Io(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=O({},r,{value:void 0}),ve("invalid",e);break;case"textarea":oa(e,r),i=Do(e,r),ve("invalid",e);break;default:i=r}Ao(n,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var p=d[l];l==="style"?da(e,p):l==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&ua(e,p)):l==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&pr(e,p):typeof p=="number"&&pr(e,""+p):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(h.hasOwnProperty(l)?p!=null&&l==="onScroll"&&ve("scroll",e):p!=null&&X(e,l,p,u))}switch(n){case"input":Mt(e),ia(e,r,!1);break;case"textarea":Mt(e),sa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=wn(Vr.current),wn(Rt.current),Oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(l=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return He(t),null;case 13:if(ye(Se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&ot!==null&&t.mode&1&&!(t.flags&128))Nu(),Yn(),t.flags|=98560,l=!1;else if(l=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[Pt]=t}else Yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else St!==null&&(hs(St),St=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Re===0&&(Re=3):ys())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return bn(),is(e,t),e===null&&Ir(t.stateNode.containerInfo),He(t),null;case 10:return Ll(t.type._context),He(t),null;case 17:return Je(t.type)&&Ri(),He(t),null;case 19:if(ye(Se),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,u=l.rendering,u===null)if(r)Qr(l,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=Vi(e),u!==null){for(t.flags|=128,Qr(l,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Se,Se.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ee()>tr&&(t.flags|=128,r=!0,Qr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Vi(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!we)return He(t),null}else 2*Ee()-l.renderingStartTime>tr&&n!==1073741824&&(t.flags|=128,r=!0,Qr(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(n=l.last,n!==null?n.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ee(),t.sibling=null,n=Se.current,ge(Se,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Lp(e,t){switch(Cl(t),t.tag){case 1:return Je(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),ye(Xe),ye(Ue),$l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fl(t),null;case 13:if(ye(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(Se),null;case 4:return bn(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return vs(),null;case 24:return null;default:return null}}var Xi=!1,We=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,D=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function os(e,t,n){try{n()}catch(r){je(e,t,r)}}var jc=!1;function Op(e,t){if(vl=hi,e=tu(),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,d=-1,p=-1,x=0,N=0,C=e,j=null;t:for(;;){for(var M;C!==n||i!==0&&C.nodeType!==3||(d=u+i),C!==l||r!==0&&C.nodeType!==3||(p=u+r),C.nodeType===3&&(u+=C.nodeValue.length),(M=C.firstChild)!==null;)j=C,C=M;for(;;){if(C===e)break t;if(j===n&&++x===i&&(d=u),j===l&&++N===r&&(p=u),(M=C.nextSibling)!==null)break;C=j,j=C.parentNode}C=M}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(yl={focusedElem:e,selectionRange:n},hi=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var F=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var A=F.memoizedProps,Ne=F.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?A:kt(t.type,A),Ne);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(P){je(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return F=jc,jc=!1,F}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&os(t,n,l)}i=i.next}while(i!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Mr],delete t[kl],delete t[gp],delete t[vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nc(e){return e.tag===5||e.tag===3||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_i));else if(r!==4&&(e=e.child,e!==null))for(ss(e,t,n),e=e.sibling;e!==null;)ss(e,t,n),e=e.sibling}function as(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(as(e,t,n),e=e.sibling;e!==null;)as(e,t,n),e=e.sibling}var Fe=null,jt=!1;function on(e,t,n){for(n=n.child;n!==null;)_c(e,t,n),n=n.sibling}function _c(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ui,n)}catch{}switch(n.tag){case 5:We||Zn(n,t);case 6:var r=Fe,i=jt;Fe=null,on(e,t,n),Fe=r,jt=i,Fe!==null&&(jt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(jt?(e=Fe,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),Er(e)):Sl(Fe,n.stateNode));break;case 4:r=Fe,i=jt,Fe=n.stateNode.containerInfo,jt=!0,on(e,t,n),Fe=r,jt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,u=l.destroy;l=l.tag,u!==void 0&&(l&2||l&4)&&os(n,t,u),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!We&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){je(n,t,d)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,on(e,t,n),We=r):on(e,t,n);break;default:on(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ip),t.forEach(function(r){var i=Hp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 5:Fe=d.stateNode,jt=!1;break e;case 3:Fe=d.stateNode.containerInfo,jt=!0;break e;case 4:Fe=d.stateNode.containerInfo,jt=!0;break e}d=d.return}if(Fe===null)throw Error(a(160));_c(l,u,i),Fe=null,jt=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(x){je(i,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rc(t,e),t=t.sibling}function Rc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Tt(e),r&4){try{Kr(3,e,e.return),Ji(3,e)}catch(A){je(e,e.return,A)}try{Kr(5,e,e.return)}catch(A){je(e,e.return,A)}}break;case 1:Et(t,e),Tt(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(Et(t,e),Tt(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var i=e.stateNode;try{pr(i,"")}catch(A){je(e,e.return,A)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,d=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&ra(i,l),$o(d,u);var x=$o(d,l);for(u=0;u<p.length;u+=2){var N=p[u],C=p[u+1];N==="style"?da(i,C):N==="dangerouslySetInnerHTML"?ua(i,C):N==="children"?pr(i,C):X(i,N,C,x)}switch(d){case"input":Oo(i,l);break;case"textarea":la(i,l);break;case"select":var j=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var M=l.value;M!=null?Ln(i,!!l.multiple,M,!1):j!==!!l.multiple&&(l.defaultValue!=null?Ln(i,!!l.multiple,l.defaultValue,!0):Ln(i,!!l.multiple,l.multiple?[]:"",!1))}i[Mr]=l}catch(A){je(e,e.return,A)}}break;case 6:if(Et(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(A){je(e,e.return,A)}}break;case 3:if(Et(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(A){je(e,e.return,A)}break;case 4:Et(t,e),Tt(e);break;case 13:Et(t,e),Tt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ds=Ee())),r&4&&Pc(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(We=(x=We)||N,Et(t,e),We=x):Et(t,e),Tt(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!N&&e.mode&1)for(D=e,N=e.child;N!==null;){for(C=D=N;D!==null;){switch(j=D,M=j.child,j.tag){case 0:case 11:case 14:case 15:Kr(4,j,j.return);break;case 1:Zn(j,j.return);var F=j.stateNode;if(typeof F.componentWillUnmount=="function"){r=j,n=j.return;try{t=r,F.props=t.memoizedProps,F.state=t.memoizedState,F.componentWillUnmount()}catch(A){je(r,n,A)}}break;case 5:Zn(j,j.return);break;case 22:if(j.memoizedState!==null){Lc(C);continue}}M!==null?(M.return=j,D=M):Lc(C)}N=N.sibling}e:for(N=null,C=e;;){if(C.tag===5){if(N===null){N=C;try{i=C.stateNode,x?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=C.stateNode,p=C.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null,d.style.display=ca("display",u))}catch(A){je(e,e.return,A)}}}else if(C.tag===6){if(N===null)try{C.stateNode.nodeValue=x?"":C.memoizedProps}catch(A){je(e,e.return,A)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;N===C&&(N=null),C=C.return}N===C&&(N=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:Et(t,e),Tt(e),r&4&&Pc(e);break;case 21:break;default:Et(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nc(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pr(i,""),r.flags&=-33);var l=Cc(e);as(e,l,i);break;case 3:case 4:var u=r.stateNode.containerInfo,d=Cc(e);ss(e,d,u);break;default:throw Error(a(161))}}catch(p){je(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mp(e,t,n){D=e,zc(e)}function zc(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,l=i.child;if(i.tag===22&&r){var u=i.memoizedState!==null||Xi;if(!u){var d=i.alternate,p=d!==null&&d.memoizedState!==null||We;d=Xi;var x=We;if(Xi=u,(We=p)&&!x)for(D=i;D!==null;)u=D,p=u.child,u.tag===22&&u.memoizedState!==null?Ic(i):p!==null?(p.return=u,D=p):Ic(i);for(;l!==null;)D=l,zc(l),l=l.sibling;D=i,Xi=d,We=x}Tc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,D=l):Tc(e)}}function Tc(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Lu(t,l,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lu(t,u,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var N=x.memoizedState;if(N!==null){var C=N.dehydrated;C!==null&&Er(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}We||t.flags&512&&ls(t)}catch(j){je(t,t.return,j)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Lc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Ic(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(p){je(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(p){je(t,i,p)}}var l=t.return;try{ls(t)}catch(p){je(t,l,p)}break;case 5:var u=t.return;try{ls(t)}catch(p){je(t,u,p)}}}catch(p){je(t,t.return,p)}if(t===e){D=null;break}var d=t.sibling;if(d!==null){d.return=t.return,D=d;break}D=t.return}}var Dp=Math.ceil,bi=b.ReactCurrentDispatcher,us=b.ReactCurrentOwner,mt=b.ReactCurrentBatchConfig,ae=0,Ie=null,Ce=null,Ae=0,lt=0,er=Zt(0),Re=0,Yr=null,kn=0,qi=0,cs=0,Gr=null,qe=null,ds=0,tr=1/0,Ht=null,Zi=!1,fs=null,ln=null,eo=!1,sn=null,to=0,Xr=0,ps=null,no=-1,ro=0;function Ge(){return ae&6?Ee():no!==-1?no:no=Ee()}function an(e){return e.mode&1?ae&2&&Ae!==0?Ae&-Ae:xp.transition!==null?(ro===0&&(ro=Ca()),ro):(e=me,e!==0||(e=window.event,e=e===void 0?16:Ma(e.type)),e):1}function Nt(e,t,n,r){if(50<Xr)throw Xr=0,ps=null,Error(a(185));xr(e,n,r),(!(ae&2)||e!==Ie)&&(e===Ie&&(!(ae&2)&&(qi|=n),Re===4&&un(e,Ae)),Ze(e,r),n===1&&ae===0&&!(t.mode&1)&&(tr=Ee()+500,Ti&&tn()))}function Ze(e,t){var n=e.callbackNode;xf(e,t);var r=fi(e,e===Ie?Ae:0);if(r===0)n!==null&&ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ja(n),t===1)e.tag===0?yp(Mc.bind(null,e)):wu(Mc.bind(null,e)),mp(function(){!(ae&6)&&tn()}),n=null;else{switch(_a(r)){case 1:n=Ko;break;case 4:n=Ea;break;case 16:n=ai;break;case 536870912:n=Na;break;default:n=ai}n=Hc(n,Oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Oc(e,t){if(no=-1,ro=0,ae&6)throw Error(a(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=fi(e,e===Ie?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=io(e,r);else{t=r;var i=ae;ae|=2;var l=Fc();(Ie!==e||Ae!==t)&&(Ht=null,tr=Ee()+500,En(e,t));do try{$p();break}catch(d){Dc(e,d)}while(!0);Tl(),bi.current=l,ae=i,Ce!==null?t=0:(Ie=null,Ae=0,t=Re)}if(t!==0){if(t===2&&(i=Yo(e),i!==0&&(r=i,t=ms(e,i))),t===1)throw n=Yr,En(e,0),un(e,r),Ze(e,Ee()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fp(i)&&(t=io(e,r),t===2&&(l=Yo(e),l!==0&&(r=l,t=ms(e,l))),t===1))throw n=Yr,En(e,0),un(e,r),Ze(e,Ee()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:Nn(e,qe,Ht);break;case 3:if(un(e,r),(r&130023424)===r&&(t=ds+500-Ee(),10<t)){if(fi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wl(Nn.bind(null,e,qe,Ht),t);break}Nn(e,qe,Ht);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var u=31-xt(r);l=1<<u,u=t[u],u>i&&(i=u),r&=~l}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dp(r/1960))-r,10<r){e.timeoutHandle=wl(Nn.bind(null,e,qe,Ht),r);break}Nn(e,qe,Ht);break;case 5:Nn(e,qe,Ht);break;default:throw Error(a(329))}}}return Ze(e,Ee()),e.callbackNode===n?Oc.bind(null,e):null}function ms(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(En(e,t).flags|=256),e=io(e,t),e!==2&&(t=qe,qe=n,t!==null&&hs(t)),e}function hs(e){qe===null?qe=e:qe.push.apply(qe,e)}function Fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!wt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~cs,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Mc(e){if(ae&6)throw Error(a(327));nr();var t=fi(e,0);if(!(t&1))return Ze(e,Ee()),null;var n=io(e,t);if(e.tag!==0&&n===2){var r=Yo(e);r!==0&&(t=r,n=ms(e,r))}if(n===1)throw n=Yr,En(e,0),un(e,t),Ze(e,Ee()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,qe,Ht),Ze(e,Ee()),null}function gs(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(tr=Ee()+500,Ti&&tn())}}function jn(e){sn!==null&&sn.tag===0&&!(ae&6)&&nr();var t=ae;ae|=1;var n=mt.transition,r=me;try{if(mt.transition=null,me=1,e)return e()}finally{me=r,mt.transition=n,ae=t,!(ae&6)&&tn()}}function vs(){lt=er.current,ye(er)}function En(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pp(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Cl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:bn(),ye(Xe),ye(Ue),$l();break;case 5:Fl(r);break;case 4:bn();break;case 13:ye(Se);break;case 19:ye(Se);break;case 10:Ll(r.type._context);break;case 22:case 23:vs()}n=n.return}if(Ie=e,Ce=e=cn(e.current,null),Ae=lt=t,Re=0,Yr=null,cs=qi=kn=0,qe=Gr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var u=l.next;l.next=i,r.next=u}n.pending=r}xn=null}return e}function Dc(e,t){do{var n=Ce;try{if(Tl(),Ui.current=Qi,Bi){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bi=!1}if(Sn=0,Le=Pe=ke=null,Ur=!1,Br=0,us.current=null,n===null||n.return===null){Re=1,Yr=t,Ce=null;break}e:{var l=e,u=n.return,d=n,p=t;if(t=Ae,d.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var x=p,N=d,C=N.tag;if(!(N.mode&1)&&(C===0||C===11||C===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var M=sc(u);if(M!==null){M.flags&=-257,ac(M,u,d,l,t),M.mode&1&&lc(l,x,t),t=M,p=x;var F=t.updateQueue;if(F===null){var A=new Set;A.add(p),t.updateQueue=A}else F.add(p);break e}else{if(!(t&1)){lc(l,x,t),ys();break e}p=Error(a(426))}}else if(we&&d.mode&1){var Ne=sc(u);if(Ne!==null){!(Ne.flags&65536)&&(Ne.flags|=256),ac(Ne,u,d,l,t),Rl(qn(p,d));break e}}l=p=qn(p,d),Re!==4&&(Re=2),Gr===null?Gr=[l]:Gr.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var v=ic(l,p,t);Tu(l,v);break e;case 1:d=p;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ln===null||!ln.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var P=oc(l,d,t);Tu(l,P);break e}}l=l.return}while(l!==null)}$c(n)}catch($){t=$,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Fc(){var e=bi.current;return bi.current=Qi,e===null?Qi:e}function ys(){(Re===0||Re===3||Re===2)&&(Re=4),Ie===null||!(kn&268435455)&&!(qi&268435455)||un(Ie,Ae)}function io(e,t){var n=ae;ae|=2;var r=Fc();(Ie!==e||Ae!==t)&&(Ht=null,En(e,t));do try{Ap();break}catch(i){Dc(e,i)}while(!0);if(Tl(),ae=n,bi.current=r,Ce!==null)throw Error(a(261));return Ie=null,Ae=0,Re}function Ap(){for(;Ce!==null;)Ac(Ce)}function $p(){for(;Ce!==null&&!cf();)Ac(Ce)}function Ac(e){var t=Bc(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?$c(e):Ce=t,us.current=null}function $c(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lp(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ce=null;return}}else if(n=Tp(n,t,lt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Re===0&&(Re=5)}function Nn(e,t,n){var r=me,i=mt.transition;try{mt.transition=null,me=1,Vp(e,t,n,r)}finally{mt.transition=i,me=r}return null}function Vp(e,t,n,r){do nr();while(sn!==null);if(ae&6)throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(wf(e,l),e===Ie&&(Ce=Ie=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Hc(ai,function(){return nr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=mt.transition,mt.transition=null;var u=me;me=1;var d=ae;ae|=4,us.current=null,Op(e,n),Rc(n,e),lp(yl),hi=!!vl,yl=vl=null,e.current=n,Mp(n),df(),ae=d,me=u,mt.transition=l}else e.current=n;if(eo&&(eo=!1,sn=e,to=i),l=e.pendingLanes,l===0&&(ln=null),mf(n.stateNode),Ze(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zi)throw Zi=!1,e=fs,fs=null,e;return to&1&&e.tag!==0&&nr(),l=e.pendingLanes,l&1?e===ps?Xr++:(Xr=0,ps=e):Xr=0,tn(),null}function nr(){if(sn!==null){var e=_a(to),t=mt.transition,n=me;try{if(mt.transition=null,me=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,to=0,ae&6)throw Error(a(331));var i=ae;for(ae|=4,D=e.current;D!==null;){var l=D,u=l.child;if(D.flags&16){var d=l.deletions;if(d!==null){for(var p=0;p<d.length;p++){var x=d[p];for(D=x;D!==null;){var N=D;switch(N.tag){case 0:case 11:case 15:Kr(8,N,l)}var C=N.child;if(C!==null)C.return=N,D=C;else for(;D!==null;){N=D;var j=N.sibling,M=N.return;if(Ec(N),N===x){D=null;break}if(j!==null){j.return=M,D=j;break}D=M}}}var F=l.alternate;if(F!==null){var A=F.child;if(A!==null){F.child=null;do{var Ne=A.sibling;A.sibling=null,A=Ne}while(A!==null)}}D=l}}if(l.subtreeFlags&2064&&u!==null)u.return=l,D=u;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Kr(9,l,l.return)}var v=l.sibling;if(v!==null){v.return=l.return,D=v;break e}D=l.return}}var m=e.current;for(D=m;D!==null;){u=D;var y=u.child;if(u.subtreeFlags&2064&&y!==null)y.return=u,D=y;else e:for(u=m;D!==null;){if(d=D,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Ji(9,d)}}catch($){je(d,d.return,$)}if(d===u){D=null;break e}var P=d.sibling;if(P!==null){P.return=d.return,D=P;break e}D=d.return}}if(ae=i,tn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ui,e)}catch{}r=!0}return r}finally{me=n,mt.transition=t}}return!1}function Vc(e,t,n){t=qn(n,t),t=ic(e,t,1),e=rn(e,t,1),t=Ge(),e!==null&&(xr(e,1,t),Ze(e,t))}function je(e,t,n){if(e.tag===3)Vc(e,e,n);else for(;t!==null;){if(t.tag===3){Vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=qn(n,e),e=oc(t,e,1),t=rn(t,e,1),e=Ge(),t!==null&&(xr(t,1,e),Ze(t,e));break}}t=t.return}}function Up(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ae&n)===n&&(Re===4||Re===3&&(Ae&130023424)===Ae&&500>Ee()-ds?En(e,0):cs|=n),Ze(e,t)}function Uc(e,t){t===0&&(e.mode&1?(t=di,di<<=1,!(di&130023424)&&(di=4194304)):t=1);var n=Ge();e=Vt(e,t),e!==null&&(xr(e,t,n),Ze(e,n))}function Bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uc(e,n)}function Hp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Uc(e,n)}var Bc;Bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,zp(e,t,n);be=!!(e.flags&131072)}else be=!1,we&&t.flags&1048576&&Su(t,Ii,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gi(e,t),e=t.pendingProps;var i=Wn(t,Ue.current);Jn(t,n),i=Bl(null,t,r,e,i,n);var l=Hl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(l=!0,zi(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ml(t),i.updater=Ki,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=Zl(null,t,r,!0,l,n)):(t.tag=0,we&&l&&Nl(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qp(r),e=kt(r,e),i){case 0:t=ql(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=uc(null,t,r,e,n);break e;case 14:t=cc(null,t,r,kt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),mc(e,t,r,i,n);case 3:e:{if(hc(t),e===null)throw Error(a(387));r=t.pendingProps,l=t.memoizedState,i=l.element,zu(e,t),$i(t,r,null,n);var u=t.memoizedState;if(r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=qn(Error(a(423)),t),t=gc(e,t,r,n,i);break e}else if(r!==i){i=qn(Error(a(424)),t),t=gc(e,t,r,n,i);break e}else for(ot=qt(t.stateNode.containerInfo.firstChild),it=t,we=!0,St=null,n=Pu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yn(),r===i){t=Bt(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Iu(t),e===null&&Pl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,u=i.children,xl(r,i)?u=null:l!==null&&xl(r,l)&&(t.flags|=32),pc(e,t),Ye(e,t,u,n),t.child;case 6:return e===null&&Pl(t),null;case 13:return vc(e,t,n);case 4:return Dl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),uc(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,u=i.value,ge(Di,r._currentValue),r._currentValue=u,l!==null)if(wt(l.value,u)){if(l.children===i.children&&!Xe.current){t=Bt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){u=l.child;for(var p=d.firstContext;p!==null;){if(p.context===r){if(l.tag===1){p=Ut(-1,n&-n),p.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var N=x.pending;N===null?p.next=p:(p.next=N.next,N.next=p),x.pending=p}}l.lanes|=n,p=l.alternate,p!==null&&(p.lanes|=n),Il(l.return,n,t),d.lanes|=n;break}p=p.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(a(341));u.lanes|=n,d=u.alternate,d!==null&&(d.lanes|=n),Il(u,n,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=ft(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=kt(r,t.pendingProps),i=kt(r.type,i),cc(e,t,r,i,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kt(r,i),Gi(e,t),t.tag=1,Je(r)?(e=!0,zi(t)):e=!1,Jn(t,n),nc(t,r,i),Xl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return xc(e,t,n);case 22:return fc(e,t,n)}throw Error(a(156,t.tag))};function Hc(e,t){return ka(e,t)}function Wp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new Wp(e,t,n,r)}function xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qp(e){if(typeof e=="function")return xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===at)return 11;if(e===ut)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,i,l){var u=2;if(r=e,typeof e=="function")xs(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case K:return Cn(n.children,i,l,t);case Te:u=8,i|=8;break;case tt:return e=ht(12,n,t,i|2),e.elementType=tt,e.lanes=l,e;case Ke:return e=ht(13,n,t,i),e.elementType=Ke,e.lanes=l,e;case nt:return e=ht(19,n,t,i),e.elementType=nt,e.lanes=l,e;case he:return lo(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:u=10;break e;case Ot:u=9;break e;case at:u=11;break e;case ut:u=14;break e;case Ve:u=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=ht(u,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Cn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function lo(e,t,n,r){return e=ht(22,e,r,t),e.elementType=he,e.lanes=n,e.stateNode={isHidden:!1},e}function ws(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function Ss(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ks(e,t,n,r,i,l,u,d,p){return e=new Kp(e,t,n,d,p),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ht(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(l),e}function Yp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wc(e){if(!e)return en;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(Je(n))return yu(e,n,t)}return t}function Qc(e,t,n,r,i,l,u,d,p){return e=ks(n,r,!0,e,i,l,u,d,p),e.context=Wc(null),n=e.current,r=Ge(),i=an(n),l=Ut(r,i),l.callback=t??null,rn(n,l,i),e.current.lanes=i,xr(e,i,r),Ze(e,r),e}function so(e,t,n,r){var i=t.current,l=Ge(),u=an(i);return n=Wc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(l,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rn(i,t,u),e!==null&&(Nt(e,i,u,l),Ai(e,i,u)),u}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function Gp(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}uo.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));so(e,t,null,null)},uo.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){so(null,e,null,null)}),t[Dt]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=za();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Ia(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function Xp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var x=ao(u);l.call(x)}}var u=Qc(t,r,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=u,e[Dt]=u.current,Ir(e.nodeType===8?e.parentNode:e),jn(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var x=ao(p);d.call(x)}}var p=ks(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=p,e[Dt]=p.current,Ir(e.nodeType===8?e.parentNode:e),jn(function(){so(t,p,n,r)}),p}function fo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var u=l;if(typeof i=="function"){var d=i;i=function(){var p=ao(u);d.call(p)}}so(t,u,e,i)}else u=Xp(n,t,e,i,r);return ao(u)}Pa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(Xo(t,n|1),Ze(t,Ee()),!(ae&6)&&(tr=Ee()+500,tn()))}break;case 13:jn(function(){var r=Vt(e,1);if(r!==null){var i=Ge();Nt(r,e,1,i)}}),js(e,1)}},Jo=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=Ge();Nt(t,e,134217728,n)}js(e,134217728)}},Ra=function(e){if(e.tag===13){var t=an(e),n=Vt(e,t);if(n!==null){var r=Ge();Nt(n,e,t,r)}js(e,t)}},za=function(){return me},Ta=function(e,t){var n=me;try{return me=e,t()}finally{me=n}},Bo=function(e,t,n){switch(t){case"input":if(Oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pi(r);if(!i)throw Error(a(90));yt(r),Oo(r,i)}}}break;case"textarea":la(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}},ha=gs,ga=jn;var Jp={usingClientEntryPoint:!1,Events:[Dr,Bn,Pi,pa,ma,gs]},Jr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bp={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wa(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||Gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{ui=po.inject(bp),_t=po}catch{}}return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp,et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(a(200));return Yp(e,t,null,n)},et.createRoot=function(e,t){if(!Ns(e))throw Error(a(299));var n=!1,r="",i=Yc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ks(e,1,!1,null,null,n,!1,r,i),e[Dt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new Es(t)},et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=wa(t),e=e===null?null:e.stateNode,e},et.flushSync=function(e){return jn(e)},et.hydrate=function(e,t,n){if(!co(t))throw Error(a(200));return fo(null,e,t,!0,n)},et.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",u=Yc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=Qc(t,null,e,1,n??null,i,!1,l,u),e[Dt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new uo(t)},et.render=function(e,t,n){if(!co(t))throw Error(a(200));return fo(null,e,t,!1,n)},et.unmountComponentAtNode=function(e){if(!co(e))throw Error(a(40));return e._reactRootContainer?(jn(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},et.unstable_batchedUpdates=gs,et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!co(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return fo(e,t,n,!1,r)},et.version="18.3.1-next-f1338f8080-20240426",et}var nd;function lm(){if(nd)return Ps.exports;nd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(s){console.error(s)}}return o(),Ps.exports=om(),Ps.exports}var rd;function sm(){if(rd)return mo;rd=1;var o=lm();return mo.createRoot=o.createRoot,mo.hydrateRoot=o.hydrateRoot,mo}var am=sm(),Qe=function(){return Qe=Object.assign||function(s){for(var a,f=1,h=arguments.length;f<h;f++){a=arguments[f];for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&(s[w]=a[w])}return s},Qe.apply(this,arguments)};function ei(o,s,a){if(a||arguments.length===2)for(var f=0,h=s.length,w;f<h;f++)(w||!(f in s))&&(w||(w=Array.prototype.slice.call(s,0,f)),w[f]=s[f]);return o.concat(w||Array.prototype.slice.call(s))}var xe="-ms-",Zr="-moz-",pe="-webkit-",yd="comm",_o="rule",Xs="decl",um="@import",xd="@keyframes",cm="@layer",wd=Math.abs,Js=String.fromCharCode,Fs=Object.assign;function dm(o,s){return Me(o,0)^45?(((s<<2^Me(o,0))<<2^Me(o,1))<<2^Me(o,2))<<2^Me(o,3):0}function Sd(o){return o.trim()}function Wt(o,s){return(o=s.exec(o))?o[0]:o}function te(o,s,a){return o.replace(s,a)}function yo(o,s,a){return o.indexOf(s,a)}function Me(o,s){return o.charCodeAt(s)|0}function or(o,s,a){return o.slice(s,a)}function It(o){return o.length}function kd(o){return o.length}function qr(o,s){return s.push(o),o}function fm(o,s){return o.map(s).join("")}function id(o,s){return o.filter(function(a){return!Wt(a,s)})}var Po=1,lr=1,jd=0,gt=0,_e=0,cr="";function Ro(o,s,a,f,h,w,S,_){return{value:o,root:s,parent:a,type:f,props:h,children:w,line:Po,column:lr,length:S,return:"",siblings:_}}function fn(o,s){return Fs(Ro("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},s)}function rr(o){for(;o.root;)o=fn(o.root,{children:[o]});qr(o,o.siblings)}function pm(){return _e}function mm(){return _e=gt>0?Me(cr,--gt):0,lr--,_e===10&&(lr=1,Po--),_e}function Ct(){return _e=gt<jd?Me(cr,gt++):0,lr++,_e===10&&(lr=1,Po++),_e}function Tn(){return Me(cr,gt)}function xo(){return gt}function zo(o,s){return or(cr,o,s)}function As(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hm(o){return Po=lr=1,jd=It(cr=o),gt=0,[]}function gm(o){return cr="",o}function Ts(o){return Sd(zo(gt-1,$s(o===91?o+2:o===40?o+1:o)))}function vm(o){for(;(_e=Tn())&&_e<33;)Ct();return As(o)>2||As(_e)>3?"":" "}function ym(o,s){for(;--s&&Ct()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return zo(o,xo()+(s<6&&Tn()==32&&Ct()==32))}function $s(o){for(;Ct();)switch(_e){case o:return gt;case 34:case 39:o!==34&&o!==39&&$s(_e);break;case 40:o===41&&$s(o);break;case 92:Ct();break}return gt}function xm(o,s){for(;Ct()&&o+_e!==57;)if(o+_e===84&&Tn()===47)break;return"/*"+zo(s,gt-1)+"*"+Js(o===47?o:Ct())}function wm(o){for(;!As(Tn());)Ct();return zo(o,gt)}function Sm(o){return gm(wo("",null,null,null,[""],o=hm(o),0,[0],o))}function wo(o,s,a,f,h,w,S,_,E){for(var R=0,I=0,z=S,L=0,U=0,Y=0,B=1,H=1,se=1,Z=0,X="",b=h,oe=w,J=f,K=X;H;)switch(Y=Z,Z=Ct()){case 40:if(Y!=108&&Me(K,z-1)==58){yo(K+=te(Ts(Z),"&","&\f"),"&\f",wd(R?_[R-1]:0))!=-1&&(se=-1);break}case 34:case 39:case 91:K+=Ts(Z);break;case 9:case 10:case 13:case 32:K+=vm(Y);break;case 92:K+=ym(xo()-1,7);continue;case 47:switch(Tn()){case 42:case 47:qr(km(xm(Ct(),xo()),s,a,E),E);break;default:K+="/"}break;case 123*B:_[R++]=It(K)*se;case 125*B:case 59:case 0:switch(Z){case 0:case 125:H=0;case 59+I:se==-1&&(K=te(K,/\f/g,"")),U>0&&It(K)-z&&qr(U>32?ld(K+";",f,a,z-1,E):ld(te(K," ","")+";",f,a,z-2,E),E);break;case 59:K+=";";default:if(qr(J=od(K,s,a,R,I,h,_,X,b=[],oe=[],z,w),w),Z===123)if(I===0)wo(K,s,J,J,b,w,z,_,oe);else switch(L===99&&Me(K,3)===110?100:L){case 100:case 108:case 109:case 115:wo(o,J,J,f&&qr(od(o,J,J,0,0,h,_,X,h,b=[],z,oe),oe),h,oe,z,_,f?b:oe);break;default:wo(K,J,J,J,[""],oe,0,_,oe)}}R=I=U=0,B=se=1,X=K="",z=S;break;case 58:z=1+It(K),U=Y;default:if(B<1){if(Z==123)--B;else if(Z==125&&B++==0&&mm()==125)continue}switch(K+=Js(Z),Z*B){case 38:se=I>0?1:(K+="\f",-1);break;case 44:_[R++]=(It(K)-1)*se,se=1;break;case 64:Tn()===45&&(K+=Ts(Ct())),L=Tn(),I=z=It(X=K+=wm(xo())),Z++;break;case 45:Y===45&&It(K)==2&&(B=0)}}return w}function od(o,s,a,f,h,w,S,_,E,R,I,z){for(var L=h-1,U=h===0?w:[""],Y=kd(U),B=0,H=0,se=0;B<f;++B)for(var Z=0,X=or(o,L+1,L=wd(H=S[B])),b=o;Z<Y;++Z)(b=Sd(H>0?U[Z]+" "+X:te(X,/&\f/g,U[Z])))&&(E[se++]=b);return Ro(o,s,a,h===0?_o:_,E,R,I,z)}function km(o,s,a,f){return Ro(o,s,a,yd,Js(pm()),or(o,2,-2),0,f)}function ld(o,s,a,f,h){return Ro(o,s,a,Xs,or(o,0,f),or(o,f+1,-1),f,h)}function Ed(o,s,a){switch(dm(o,s)){case 5103:return pe+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+o+o;case 4789:return Zr+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+o+Zr+o+xe+o+o;case 5936:switch(Me(o,s+11)){case 114:return pe+o+xe+te(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return pe+o+xe+te(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return pe+o+xe+te(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return pe+o+xe+o+o;case 6165:return pe+o+xe+"flex-"+o+o;case 5187:return pe+o+te(o,/(\w+).+(:[^]+)/,pe+"box-$1$2"+xe+"flex-$1$2")+o;case 5443:return pe+o+xe+"flex-item-"+te(o,/flex-|-self/g,"")+(Wt(o,/flex-|baseline/)?"":xe+"grid-row-"+te(o,/flex-|-self/g,""))+o;case 4675:return pe+o+xe+"flex-line-pack"+te(o,/align-content|flex-|-self/g,"")+o;case 5548:return pe+o+xe+te(o,"shrink","negative")+o;case 5292:return pe+o+xe+te(o,"basis","preferred-size")+o;case 6060:return pe+"box-"+te(o,"-grow","")+pe+o+xe+te(o,"grow","positive")+o;case 4554:return pe+te(o,/([^-])(transform)/g,"$1"+pe+"$2")+o;case 6187:return te(te(te(o,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),o,"")+o;case 5495:case 3959:return te(o,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return te(te(o,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+o+o;case 4200:if(!Wt(o,/flex-|baseline/))return xe+"grid-column-align"+or(o,s)+o;break;case 2592:case 3360:return xe+te(o,"template-","")+o;case 4384:case 3616:return a&&a.some(function(f,h){return s=h,Wt(f.props,/grid-\w+-end/)})?~yo(o+(a=a[s].value),"span",0)?o:xe+te(o,"-start","")+o+xe+"grid-row-span:"+(~yo(a,"span",0)?Wt(a,/\d+/):+Wt(a,/\d+/)-+Wt(o,/\d+/))+";":xe+te(o,"-start","")+o;case 4896:case 4128:return a&&a.some(function(f){return Wt(f.props,/grid-\w+-start/)})?o:xe+te(te(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return te(o,/(.+)-inline(.+)/,pe+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(o)-1-s>6)switch(Me(o,s+1)){case 109:if(Me(o,s+4)!==45)break;case 102:return te(o,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Zr+(Me(o,s+3)==108?"$3":"$2-$3"))+o;case 115:return~yo(o,"stretch",0)?Ed(te(o,"stretch","fill-available"),s,a)+o:o}break;case 5152:case 5920:return te(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,h,w,S,_,E,R){return xe+h+":"+w+R+(S?xe+h+"-span:"+(_?E:+E-+w)+R:"")+o});case 4949:if(Me(o,s+6)===121)return te(o,":",":"+pe)+o;break;case 6444:switch(Me(o,Me(o,14)===45?18:11)){case 120:return te(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Me(o,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+xe+"$2box$3")+o;case 100:return te(o,":",":"+xe)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(o,"scroll-","scroll-snap-")+o}return o}function jo(o,s){for(var a="",f=0;f<o.length;f++)a+=s(o[f],f,o,s)||"";return a}function jm(o,s,a,f){switch(o.type){case cm:if(o.children.length)break;case um:case Xs:return o.return=o.return||o.value;case yd:return"";case xd:return o.return=o.value+"{"+jo(o.children,f)+"}";case _o:if(!It(o.value=o.props.join(",")))return""}return It(a=jo(o.children,f))?o.return=o.value+"{"+a+"}":""}function Em(o){var s=kd(o);return function(a,f,h,w){for(var S="",_=0;_<s;_++)S+=o[_](a,f,h,w)||"";return S}}function Nm(o){return function(s){s.root||(s=s.return)&&o(s)}}function Cm(o,s,a,f){if(o.length>-1&&!o.return)switch(o.type){case Xs:o.return=Ed(o.value,o.length,a);return;case xd:return jo([fn(o,{value:te(o.value,"@","@"+pe)})],f);case _o:if(o.length)return fm(a=o.props,function(h){switch(Wt(h,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rr(fn(o,{props:[te(h,/:(read-\w+)/,":"+Zr+"$1")]})),rr(fn(o,{props:[h]})),Fs(o,{props:id(a,f)});break;case"::placeholder":rr(fn(o,{props:[te(h,/:(plac\w+)/,":"+pe+"input-$1")]})),rr(fn(o,{props:[te(h,/:(plac\w+)/,":"+Zr+"$1")]})),rr(fn(o,{props:[te(h,/:(plac\w+)/,xe+"input-$1")]})),rr(fn(o,{props:[h]})),Fs(o,{props:id(a,f)});break}return""})}}var _m={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},st={},sr=typeof process<"u"&&st!==void 0&&(st.REACT_APP_SC_ATTR||st.SC_ATTR)||"data-styled",Nd="active",Cd="data-styled-version",To="6.1.13",bs=`/*!sc*/
`,Eo=typeof window<"u"&&"HTMLElement"in window,Pm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==""?st.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&st.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.SC_DISABLE_SPEEDY!==void 0&&st.SC_DISABLE_SPEEDY!==""&&st.SC_DISABLE_SPEEDY!=="false"&&st.SC_DISABLE_SPEEDY),Rm={},Lo=Object.freeze([]),ar=Object.freeze({});function _d(o,s,a){return a===void 0&&(a=ar),o.theme!==a.theme&&o.theme||s||a.theme}var Pd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tm=/(^-|-$)/g;function sd(o){return o.replace(zm,"-").replace(Tm,"")}var Lm=/(a)(d)/gi,ho=52,ad=function(o){return String.fromCharCode(o+(o>25?39:97))};function Vs(o){var s,a="";for(s=Math.abs(o);s>ho;s=s/ho|0)a=ad(s%ho)+a;return(ad(s%ho)+a).replace(Lm,"$1-$2")}var Ls,Rd=5381,ir=function(o,s){for(var a=s.length;a;)o=33*o^s.charCodeAt(--a);return o},zd=function(o){return ir(Rd,o)};function Td(o){return Vs(zd(o)>>>0)}function Im(o){return o.displayName||o.name||"Component"}function Is(o){return typeof o=="string"&&!0}var Ld=typeof Symbol=="function"&&Symbol.for,Id=Ld?Symbol.for("react.memo"):60115,Om=Ld?Symbol.for("react.forward_ref"):60112,Mm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Od={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fm=((Ls={})[Om]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ls[Id]=Od,Ls);function ud(o){return("type"in(s=o)&&s.type.$$typeof)===Id?Od:"$$typeof"in o?Fm[o.$$typeof]:Mm;var s}var Am=Object.defineProperty,$m=Object.getOwnPropertyNames,cd=Object.getOwnPropertySymbols,Vm=Object.getOwnPropertyDescriptor,Um=Object.getPrototypeOf,dd=Object.prototype;function Md(o,s,a){if(typeof s!="string"){if(dd){var f=Um(s);f&&f!==dd&&Md(o,f,a)}var h=$m(s);cd&&(h=h.concat(cd(s)));for(var w=ud(o),S=ud(s),_=0;_<h.length;++_){var E=h[_];if(!(E in Dm||a&&a[E]||S&&E in S||w&&E in w)){var R=Vm(s,E);try{Am(o,E,R)}catch{}}}}return o}function ur(o){return typeof o=="function"}function qs(o){return typeof o=="object"&&"styledComponentId"in o}function zn(o,s){return o&&s?"".concat(o," ").concat(s):o||s||""}function Us(o,s){if(o.length===0)return"";for(var a=o[0],f=1;f<o.length;f++)a+=o[f];return a}function ti(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Bs(o,s,a){if(a===void 0&&(a=!1),!a&&!ti(o)&&!Array.isArray(o))return s;if(Array.isArray(s))for(var f=0;f<s.length;f++)o[f]=Bs(o[f],s[f]);else if(ti(s))for(var f in s)o[f]=Bs(o[f],s[f]);return o}function Zs(o,s){Object.defineProperty(o,"toString",{value:s})}function ni(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Bm=function(){function o(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s}return o.prototype.indexOfGroup=function(s){for(var a=0,f=0;f<s;f++)a+=this.groupSizes[f];return a},o.prototype.insertRules=function(s,a){if(s>=this.groupSizes.length){for(var f=this.groupSizes,h=f.length,w=h;s>=w;)if((w<<=1)<0)throw ni(16,"".concat(s));this.groupSizes=new Uint32Array(w),this.groupSizes.set(f),this.length=w;for(var S=h;S<w;S++)this.groupSizes[S]=0}for(var _=this.indexOfGroup(s+1),E=(S=0,a.length);S<E;S++)this.tag.insertRule(_,a[S])&&(this.groupSizes[s]++,_++)},o.prototype.clearGroup=function(s){if(s<this.length){var a=this.groupSizes[s],f=this.indexOfGroup(s),h=f+a;this.groupSizes[s]=0;for(var w=f;w<h;w++)this.tag.deleteRule(f)}},o.prototype.getGroup=function(s){var a="";if(s>=this.length||this.groupSizes[s]===0)return a;for(var f=this.groupSizes[s],h=this.indexOfGroup(s),w=h+f,S=h;S<w;S++)a+="".concat(this.tag.getRule(S)).concat(bs);return a},o}(),So=new Map,No=new Map,ko=1,go=function(o){if(So.has(o))return So.get(o);for(;No.has(ko);)ko++;var s=ko++;return So.set(o,s),No.set(s,o),s},Hm=function(o,s){ko=s+1,So.set(o,s),No.set(s,o)},Wm="style[".concat(sr,"][").concat(Cd,'="').concat(To,'"]'),Qm=new RegExp("^".concat(sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Km=function(o,s,a){for(var f,h=a.split(","),w=0,S=h.length;w<S;w++)(f=h[w])&&o.registerName(s,f)},Ym=function(o,s){for(var a,f=((a=s.textContent)!==null&&a!==void 0?a:"").split(bs),h=[],w=0,S=f.length;w<S;w++){var _=f[w].trim();if(_){var E=_.match(Qm);if(E){var R=0|parseInt(E[1],10),I=E[2];R!==0&&(Hm(I,R),Km(o,I,E[3]),o.getTag().insertRules(R,h)),h.length=0}else h.push(_)}}},fd=function(o){for(var s=document.querySelectorAll(Wm),a=0,f=s.length;a<f;a++){var h=s[a];h&&h.getAttribute(sr)!==Nd&&(Ym(o,h),h.parentNode&&h.parentNode.removeChild(h))}};function Gm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dd=function(o){var s=document.head,a=o||s,f=document.createElement("style"),h=function(_){var E=Array.from(_.querySelectorAll("style[".concat(sr,"]")));return E[E.length-1]}(a),w=h!==void 0?h.nextSibling:null;f.setAttribute(sr,Nd),f.setAttribute(Cd,To);var S=Gm();return S&&f.setAttribute("nonce",S),a.insertBefore(f,w),f},Xm=function(){function o(s){this.element=Dd(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(a){if(a.sheet)return a.sheet;for(var f=document.styleSheets,h=0,w=f.length;h<w;h++){var S=f[h];if(S.ownerNode===a)return S}throw ni(17)}(this.element),this.length=0}return o.prototype.insertRule=function(s,a){try{return this.sheet.insertRule(a,s),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},o.prototype.getRule=function(s){var a=this.sheet.cssRules[s];return a&&a.cssText?a.cssText:""},o}(),Jm=function(){function o(s){this.element=Dd(s),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(s,a){if(s<=this.length&&s>=0){var f=document.createTextNode(a);return this.element.insertBefore(f,this.nodes[s]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},o.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},o}(),bm=function(){function o(s){this.rules=[],this.length=0}return o.prototype.insertRule=function(s,a){return s<=this.length&&(this.rules.splice(s,0,a),this.length++,!0)},o.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},o.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},o}(),pd=Eo,qm={isServer:!Eo,useCSSOMInjection:!Pm},Co=function(){function o(s,a,f){s===void 0&&(s=ar),a===void 0&&(a={});var h=this;this.options=Qe(Qe({},qm),s),this.gs=a,this.names=new Map(f),this.server=!!s.isServer,!this.server&&Eo&&pd&&(pd=!1,fd(this)),Zs(this,function(){return function(w){for(var S=w.getTag(),_=S.length,E="",R=function(z){var L=function(se){return No.get(se)}(z);if(L===void 0)return"continue";var U=w.names.get(L),Y=S.getGroup(z);if(U===void 0||!U.size||Y.length===0)return"continue";var B="".concat(sr,".g").concat(z,'[id="').concat(L,'"]'),H="";U!==void 0&&U.forEach(function(se){se.length>0&&(H+="".concat(se,","))}),E+="".concat(Y).concat(B,'{content:"').concat(H,'"}').concat(bs)},I=0;I<_;I++)R(I);return E}(h)})}return o.registerId=function(s){return go(s)},o.prototype.rehydrate=function(){!this.server&&Eo&&fd(this)},o.prototype.reconstructWithOptions=function(s,a){return a===void 0&&(a=!0),new o(Qe(Qe({},this.options),s),this.gs,a&&this.names||void 0)},o.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(s=function(a){var f=a.useCSSOMInjection,h=a.target;return a.isServer?new bm(h):f?new Xm(h):new Jm(h)}(this.options),new Bm(s)));var s},o.prototype.hasNameForId=function(s,a){return this.names.has(s)&&this.names.get(s).has(a)},o.prototype.registerName=function(s,a){if(go(s),this.names.has(s))this.names.get(s).add(a);else{var f=new Set;f.add(a),this.names.set(s,f)}},o.prototype.insertRules=function(s,a,f){this.registerName(s,a),this.getTag().insertRules(go(s),f)},o.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},o.prototype.clearRules=function(s){this.getTag().clearGroup(go(s)),this.clearNames(s)},o.prototype.clearTag=function(){this.tag=void 0},o}(),Zm=/&/g,eh=/^\s*\/\/.*$/gm;function Fd(o,s){return o.map(function(a){return a.type==="rule"&&(a.value="".concat(s," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(s," ")),a.props=a.props.map(function(f){return"".concat(s," ").concat(f)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=Fd(a.children,s)),a})}function th(o){var s,a,f,h=ar,w=h.options,S=w===void 0?ar:w,_=h.plugins,E=_===void 0?Lo:_,R=function(L,U,Y){return Y.startsWith(a)&&Y.endsWith(a)&&Y.replaceAll(a,"").length>0?".".concat(s):L},I=E.slice();I.push(function(L){L.type===_o&&L.value.includes("&")&&(L.props[0]=L.props[0].replace(Zm,a).replace(f,R))}),S.prefix&&I.push(Cm),I.push(jm);var z=function(L,U,Y,B){U===void 0&&(U=""),Y===void 0&&(Y=""),B===void 0&&(B="&"),s=B,a=U,f=new RegExp("\\".concat(a,"\\b"),"g");var H=L.replace(eh,""),se=Sm(Y||U?"".concat(Y," ").concat(U," { ").concat(H," }"):H);S.namespace&&(se=Fd(se,S.namespace));var Z=[];return jo(se,Em(I.concat(Nm(function(X){return Z.push(X)})))),Z};return z.hash=E.length?E.reduce(function(L,U){return U.name||ni(15),ir(L,U.name)},Rd).toString():"",z}var nh=new Co,Hs=th(),Ad=Qt.createContext({shouldForwardProp:void 0,styleSheet:nh,stylis:Hs});Ad.Consumer;Qt.createContext(void 0);function Ws(){return fe.useContext(Ad)}var rh=function(){function o(s,a){var f=this;this.inject=function(h,w){w===void 0&&(w=Hs);var S=f.name+w.hash;h.hasNameForId(f.id,S)||h.insertRules(f.id,S,w(f.rules,S,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=a,Zs(this,function(){throw ni(12,String(f.name))})}return o.prototype.getName=function(s){return s===void 0&&(s=Hs),this.name+s.hash},o}(),ih=function(o){return o>="A"&&o<="Z"};function md(o){for(var s="",a=0;a<o.length;a++){var f=o[a];if(a===1&&f==="-"&&o[0]==="-")return o;ih(f)?s+="-"+f.toLowerCase():s+=f}return s.startsWith("ms-")?"-"+s:s}var $d=function(o){return o==null||o===!1||o===""},Vd=function(o){var s,a,f=[];for(var h in o){var w=o[h];o.hasOwnProperty(h)&&!$d(w)&&(Array.isArray(w)&&w.isCss||ur(w)?f.push("".concat(md(h),":"),w,";"):ti(w)?f.push.apply(f,ei(ei(["".concat(h," {")],Vd(w),!1),["}"],!1)):f.push("".concat(md(h),": ").concat((s=h,(a=w)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||s in _m||s.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return f};function pn(o,s,a,f){if($d(o))return[];if(qs(o))return[".".concat(o.styledComponentId)];if(ur(o)){if(!ur(w=o)||w.prototype&&w.prototype.isReactComponent||!s)return[o];var h=o(s);return pn(h,s,a,f)}var w;return o instanceof rh?a?(o.inject(a,f),[o.getName(f)]):[o]:ti(o)?Vd(o):Array.isArray(o)?Array.prototype.concat.apply(Lo,o.map(function(S){return pn(S,s,a,f)})):[o.toString()]}function Ud(o){for(var s=0;s<o.length;s+=1){var a=o[s];if(ur(a)&&!qs(a))return!1}return!0}var oh=zd(To),lh=function(){function o(s,a,f){this.rules=s,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&Ud(s),this.componentId=a,this.baseHash=ir(oh,a),this.baseStyle=f,Co.registerId(a)}return o.prototype.generateAndInjectStyles=function(s,a,f){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,a,f):"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))h=zn(h,this.staticRulesId);else{var w=Us(pn(this.rules,s,a,f)),S=Vs(ir(this.baseHash,w)>>>0);if(!a.hasNameForId(this.componentId,S)){var _=f(w,".".concat(S),void 0,this.componentId);a.insertRules(this.componentId,S,_)}h=zn(h,S),this.staticRulesId=S}else{for(var E=ir(this.baseHash,f.hash),R="",I=0;I<this.rules.length;I++){var z=this.rules[I];if(typeof z=="string")R+=z;else if(z){var L=Us(pn(z,s,a,f));E=ir(E,L+I),R+=L}}if(R){var U=Vs(E>>>0);a.hasNameForId(this.componentId,U)||a.insertRules(this.componentId,U,f(R,".".concat(U),void 0,this.componentId)),h=zn(h,U)}}return h},o}(),ea=Qt.createContext(void 0);ea.Consumer;var Os={};function sh(o,s,a){var f=qs(o),h=o,w=!Is(o),S=s.attrs,_=S===void 0?Lo:S,E=s.componentId,R=E===void 0?function(b,oe){var J=typeof b!="string"?"sc":sd(b);Os[J]=(Os[J]||0)+1;var K="".concat(J,"-").concat(Td(To+J+Os[J]));return oe?"".concat(oe,"-").concat(K):K}(s.displayName,s.parentComponentId):E,I=s.displayName,z=I===void 0?function(b){return Is(b)?"styled.".concat(b):"Styled(".concat(Im(b),")")}(o):I,L=s.displayName&&s.componentId?"".concat(sd(s.displayName),"-").concat(s.componentId):s.componentId||R,U=f&&h.attrs?h.attrs.concat(_).filter(Boolean):_,Y=s.shouldForwardProp;if(f&&h.shouldForwardProp){var B=h.shouldForwardProp;if(s.shouldForwardProp){var H=s.shouldForwardProp;Y=function(b,oe){return B(b,oe)&&H(b,oe)}}else Y=B}var se=new lh(a,L,f?h.componentStyle:void 0);function Z(b,oe){return function(J,K,Te){var tt=J.attrs,vt=J.componentStyle,Ot=J.defaultProps,at=J.foldedComponentIds,Ke=J.styledComponentId,nt=J.target,ut=Qt.useContext(ea),Ve=Ws(),he=J.shouldForwardProp||Ve.shouldForwardProp,T=_d(K,ut,Ot)||ar,V=function(ie,ne,de){for(var le,ue=Qe(Qe({},ne),{className:void 0,theme:de}),De=0;De<ie.length;De+=1){var Mt=ur(le=ie[De])?le(ue):le;for(var yt in Mt)ue[yt]=yt==="className"?zn(ue[yt],Mt[yt]):yt==="style"?Qe(Qe({},ue[yt]),Mt[yt]):Mt[yt]}return ne.className&&(ue.className=zn(ue.className,ne.className)),ue}(tt,K,T),O=V.as||nt,g={};for(var k in V)V[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&V.theme===T||(k==="forwardedAs"?g.as=V.forwardedAs:he&&!he(k,O)||(g[k]=V[k]));var q=function(ie,ne){var de=Ws(),le=ie.generateAndInjectStyles(ne,de.styleSheet,de.stylis);return le}(vt,V),ee=zn(at,Ke);return q&&(ee+=" "+q),V.className&&(ee+=" "+V.className),g[Is(O)&&!Pd.has(O)?"class":"className"]=ee,g.ref=Te,fe.createElement(O,g)}(X,b,oe)}Z.displayName=z;var X=Qt.forwardRef(Z);return X.attrs=U,X.componentStyle=se,X.displayName=z,X.shouldForwardProp=Y,X.foldedComponentIds=f?zn(h.foldedComponentIds,h.styledComponentId):"",X.styledComponentId=L,X.target=f?h.target:o,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=f?function(oe){for(var J=[],K=1;K<arguments.length;K++)J[K-1]=arguments[K];for(var Te=0,tt=J;Te<tt.length;Te++)Bs(oe,tt[Te],!0);return oe}({},h.defaultProps,b):b}}),Zs(X,function(){return".".concat(X.styledComponentId)}),w&&Md(X,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function hd(o,s){for(var a=[o[0]],f=0,h=s.length;f<h;f+=1)a.push(s[f],o[f+1]);return a}var gd=function(o){return Object.assign(o,{isCss:!0})};function Bd(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];if(ur(o)||ti(o))return gd(pn(hd(Lo,ei([o],s,!0))));var f=o;return s.length===0&&f.length===1&&typeof f[0]=="string"?pn(f):gd(pn(hd(f,s)))}function Qs(o,s,a){if(a===void 0&&(a=ar),!s)throw ni(1,s);var f=function(h){for(var w=[],S=1;S<arguments.length;S++)w[S-1]=arguments[S];return o(s,a,Bd.apply(void 0,ei([h],w,!1)))};return f.attrs=function(h){return Qs(o,s,Qe(Qe({},a),{attrs:Array.prototype.concat(a.attrs,h).filter(Boolean)}))},f.withConfig=function(h){return Qs(o,s,Qe(Qe({},a),h))},f}var Hd=function(o){return Qs(sh,o)},ze=Hd;Pd.forEach(function(o){ze[o]=Hd(o)});var ah=function(){function o(s,a){this.rules=s,this.componentId=a,this.isStatic=Ud(s),Co.registerId(this.componentId+1)}return o.prototype.createStyles=function(s,a,f,h){var w=h(Us(pn(this.rules,a,f,h)),""),S=this.componentId+s;f.insertRules(S,S,w)},o.prototype.removeStyles=function(s,a){a.clearRules(this.componentId+s)},o.prototype.renderStyles=function(s,a,f,h){s>2&&Co.registerId(this.componentId+s),this.removeStyles(s,f),this.createStyles(s,a,f,h)},o}();function uh(o){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];var f=Bd.apply(void 0,ei([o],s,!1)),h="sc-global-".concat(Td(JSON.stringify(f))),w=new ah(f,h),S=function(E){var R=Ws(),I=Qt.useContext(ea),z=Qt.useRef(R.styleSheet.allocateGSInstance(h)).current;return R.styleSheet.server&&_(z,E,R.styleSheet,I,R.stylis),Qt.useLayoutEffect(function(){if(!R.styleSheet.server)return _(z,E,R.styleSheet,I,R.stylis),function(){return w.removeStyles(z,R.styleSheet)}},[z,E,R.styleSheet,I,R.stylis]),null};function _(E,R,I,z,L){if(w.isStatic)w.renderStyles(E,Rm,I,L);else{var U=Qe(Qe({},R),{theme:_d(R,z,S.defaultProps)});w.renderStyles(E,U,I,L)}}return Qt.memo(S)}const ch=ze.div`
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
`,Wd="/portifolio/assets/whatsapp-icon.svg",Qd="/portifolio/assets/profile.png",dh="/portifolio/assets/img-1.png",fh="/portifolio/assets/img-2.png",ph="/portifolio/assets/img-3.png",mh=ze.main`
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
      width: 20em;
    }
  }
`;var Ks=new Map,vo=new WeakMap,vd=0,hh=void 0;function gh(o){return o?(vo.has(o)||(vd+=1,vo.set(o,vd.toString())),vo.get(o)):"0"}function vh(o){return Object.keys(o).sort().filter(s=>o[s]!==void 0).map(s=>`${s}_${s==="root"?gh(o.root):o[s]}`).toString()}function yh(o){const s=vh(o);let a=Ks.get(s);if(!a){const f=new Map;let h;const w=new IntersectionObserver(S=>{S.forEach(_=>{var E;const R=_.isIntersecting&&h.some(I=>_.intersectionRatio>=I);o.trackVisibility&&typeof _.isVisible>"u"&&(_.isVisible=R),(E=f.get(_.target))==null||E.forEach(I=>{I(R,_)})})},o);h=w.thresholds||(Array.isArray(o.threshold)?o.threshold:[o.threshold||0]),a={id:s,observer:w,elements:f},Ks.set(s,a)}return a}function xh(o,s,a={},f=hh){if(typeof window.IntersectionObserver>"u"&&f!==void 0){const E=o.getBoundingClientRect();return s(f,{isIntersecting:f,target:o,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:E,intersectionRect:E,rootBounds:E}),()=>{}}const{id:h,observer:w,elements:S}=yh(a),_=S.get(o)||[];return S.has(o)||S.set(o,_),_.push(s),w.observe(o),function(){_.splice(_.indexOf(s),1),_.length===0&&(S.delete(o),w.unobserve(o)),S.size===0&&(w.disconnect(),Ks.delete(h))}}function dr({threshold:o,delay:s,trackVisibility:a,rootMargin:f,root:h,triggerOnce:w,skip:S,initialInView:_,fallbackInView:E,onChange:R}={}){var I;const[z,L]=fe.useState(null),U=fe.useRef(),[Y,B]=fe.useState({inView:!!_,entry:void 0});U.current=R,fe.useEffect(()=>{if(S||!z)return;let X;return X=xh(z,(b,oe)=>{B({inView:b,entry:oe}),U.current&&U.current(b,oe),oe.isIntersecting&&w&&X&&(X(),X=void 0)},{root:h,rootMargin:f,threshold:o,trackVisibility:a,delay:s},E),()=>{X&&X()}},[Array.isArray(o)?o.toString():o,z,h,f,w,S,a,E,s]);const H=(I=Y.entry)==null?void 0:I.target,se=fe.useRef();!z&&H&&!w&&!S&&se.current!==H&&(se.current=H,B({inView:!!_,entry:void 0}));const Z=[L,Y.inView,Y.entry];return Z.ref=Z[0],Z.inView=Z[1],Z.entry=Z[2],Z}function wh(){const o=fe.useRef(null),{ref:s,inView:a}=dr({threshold:.1});return c.jsxs(mh,{ref:o,id:"about-me",children:[c.jsxs("div",{className:`container-left-img ${a?"animate-left":""}`,ref:s,children:[c.jsx("img",{src:Qd,alt:"profile",className:"img-0"}),c.jsx("img",{src:dh,alt:"profile",className:"img-1"}),c.jsx("img",{src:fh,alt:"profile",className:"img-2"}),c.jsx("img",{src:ph,alt:"profile",className:"img-3"})]}),c.jsxs("div",{className:`container-right-text ${a?"animate-right":""}`,ref:s,children:[c.jsx("h3",{children:"Quem sou eu?"}),c.jsxs("p",{children:[" Olá! Eu sou ",c.jsx("span",{children:"Nei Barbosa"}),". Sou bacharel em Educação Física, com uma trajetória repleta de conhecimentos teóricos e práticos que inclui participação em campeonatos de fisiculturismo como atleta, coach e árbitro."]}),c.jsx("p",{children:"Sempre tive interesse por tecnologia, mas por muito tempo acreditava que esse mundo não era para mim. Hoje, estou provando o contrário: estou em plena transição de carreira para a área de programação e completamente apaixonado por essa nova jornada."}),c.jsx("p",{children:"Atualmente, estou cursando a formação em Developer Full Stack pelo DevClub, sempre buscando aprimorar meus conhecimentos para me tornar um profissional tão dedicado e competente quanto fui na minha carreira anterior como treinador."}),c.jsx("p",{children:"Tenho me aprofundado no aprendizado de HTML5, CSS3, JavaScript e ReactJS, enquanto exploro novas tecnologias como Node.js, SQL, MySQL, entre outras que possam contribuir para minha evolução profissional. Durante essa jornada, já desenvolvi projetos desafiadores que não apenas solidificaram meus conhecimentos, mas também alimentaram minha paixão por resolver problemas através da programação."}),c.jsx("p",{children:"O que me motiva é a possibilidade de aplicar meus aprendizados para criar soluções inovadoras e enfrentar grandes desafios. Minha experiência como treinador trouxe habilidades valiosas, como trabalho em equipe, resolução de problemas e boa comunicação, que levo comigo para o mundo da tecnologia. Estou pronto para contribuir e crescer nessa nova fase da minha vida profissional!"})]})]})}const Sh=ze.div` 
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
      width: 10em;
      font-size: 32px;
    }

    p {
      width: 22em;
    }
  }
`,kh=ze.section`
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
    margin-top: -18px;

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
    padding-top: 100px;
    
    .carousel-navigation {
      gap: 305px;
      opacity: 1;

      button {
        img {
          width: 35px;
        }
      }
    }
  }
`,jh=ze.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: -20px;

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
      width: 23em;
      height: 610px;

      h3 {
        font-size: 26px;
        text-align: center;
        margin-top: 10px;
      } 

      h4 {
        width: 330px;
      }

      p {
        width: 21em;
        font-size: 14px;
        margin-top: -15px;
      }
    }

    .treinador.active {
      opacity: 1;
      margin-left: 408px;
    }

    .developer.active {
      opacity: 1;
      margin-left: -408px;
    }
  }
`,Eh="/portifolio/assets/arrow-left.png",Nh="/portifolio/assets/arrow-right.png";function Ch(){const[o,s]=fe.useState(0),[a,f]=fe.useState(!1),h=()=>{s(R=>(R+1)%2)},w=()=>{s(R=>(R-1+2)%2)},S=fe.useRef(null),{ref:_,inView:E}=dr({threshold:.1});return fe.useEffect(()=>{f(E)},[E]),c.jsxs(kh,{id:"expertise",ref:S,children:[c.jsx(Sh,{className:`title ${E?"animate-left":""}`,ref:_,children:c.jsx("h2",{children:"Experiências Profissionais"})}),c.jsxs("div",{className:`experiences ${a?"jump":""}`,ref:_,children:[c.jsxs(jh,{children:[c.jsxs("div",{className:`treinador ${o===0?"active":""}`,children:[c.jsx("h3",{children:"Personal Trainer"}),c.jsx("h4",{children:"Bacharel em Educação Física – Centro Universitário de João Pessoa UNIPÊ | de 2018 à 2021."}),c.jsx("p",{children:"Treinador com mais de 4 anos de experiência, incluindo estágio e atuação profissional, especializado no desenvolvimento de programas de treino, focados em objetivos como hipertrofia, emagrecimento e melhora de performance."}),c.jsx("p",{children:"Amplo domínio de técnicas avançadas de periodização e adaptação de treinos para diferentes níveis, garantindo eficiência e segurança. Experiência prática no acompanhamento de alunos em academias e consultorias online, com foco na evolução contínua e no alcance de metas dentro de prazos definidos. Além disso, sou atleta de fisiculturismo, o que me proporciona conhecimento aprofundado sobre hipertrofia, emagrecimento e performance."})]}),c.jsxs("div",{className:`developer ${o===1?"active":""}`,children:[c.jsx("h3",{children:"Desenvolvedor Web (Front-End)"}),c.jsx("h4",{children:"Programação e Desenvolvimento Web pela DevClub | Outubro 2024 - Cursando"}),c.jsx("p",{children:"Profissional em transição de carreira, com sólida experiência como Personal Trainer, agora dedicado à área de Desenvolvimento Web. Minha experiência como treinador me proporcionou habilidades valiosas. Essas competências me ajudam a criar soluções eficientes para os desafios que surgem diariamente, além de compreender melhor as necessidades dos usuários e clientes."}),c.jsx("p",{children:"Tenho experiência em tecnologias front-end, incluindo HTML5, CSS4, JavaScript e ReactJS, para o desenvolvimento de projetos responsivos e dinâmicos. Além disso, possuo conhecimentos básicos em back-end, abrangendo Node.js, Docker, SQL e MySQL."})]}),c.jsxs("div",{className:"carousel-navigation",children:[c.jsx("button",{onClick:w,children:c.jsx("img",{src:Eh,alt:"arrow left",className:"arrow-left"})}),c.jsx("button",{onClick:h,children:c.jsx("img",{src:Nh,alt:"arrow right",className:"arrow-right"})})]})]}),c.jsxs("div",{className:"pages-info",children:[c.jsx("div",{className:`page1 ${o===0?"active":""}`}),c.jsx("div",{className:`page2 ${o===1?"active":""}`})]})]})]})}const _h=ze.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
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

  @media screen and (max-width: 540px) {

    .button-one {
      &:hover {
        background: linear-gradient(180deg,
          rgba(41, 166, 164, 1) 0%, 
          rgba(16, 32, 50, 1) 100%);
        border: none;
        transition: none;
        transform: none;
      }
    }

    .button-two {     
      &:hover {
        background-color: #fff;
        color: #000;
        border: none;
        transition: none;
        transform: none;
      }
    }
  }
`;function Lt({children:o,...s}){return c.jsx(_h,{...s,children:o})}const Ph=ze.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 110px;
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
      height: 227px;
      margin-top: 15px;
      padding: 5px 10px 5px 10px;

      resize: none;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
        margin: 5px;
      }
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

    p {
      opacity: 0.5;
      font-size: 14px;
      text-align: center;
    }
  }

  .to-send {
    width: 290px;
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-width: 540px) {
    display: flex;
    padding-top: 100px;

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
`,Ms=ze.p`
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
`,Ds=ze.input`
  border: 2px solid #29a6a4;
  border-radius: 10px;
  background-color: transparent;
  outline: none;

  width: 300px;
  height: 40px;

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
`,Rh=ze.div` 
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
      width: 10em;
      font-size: 38px;
    }

    p {
      width: 22em;
    }
  }
`;class ri{constructor(s=0,a="Network Error"){this.status=s,this.text=a}}const zh=()=>{if(!(typeof localStorage>"u"))return{get:o=>Promise.resolve(localStorage.getItem(o)),set:(o,s)=>Promise.resolve(localStorage.setItem(o,s)),remove:o=>Promise.resolve(localStorage.removeItem(o))}},$e={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:zh()},ta=o=>o?typeof o=="string"?{publicKey:o}:o.toString()==="[object Object]"?o:{}:{},Th=(o,s="https://api.emailjs.com")=>{if(!o)return;const a=ta(o);$e.publicKey=a.publicKey,$e.blockHeadless=a.blockHeadless,$e.storageProvider=a.storageProvider,$e.blockList=a.blockList,$e.limitRate=a.limitRate,$e.origin=a.origin||s},Kd=async(o,s,a={})=>{const f=await fetch($e.origin+o,{method:"POST",headers:a,body:s}),h=await f.text(),w=new ri(f.status,h);if(f.ok)return w;throw w},Yd=(o,s,a)=>{if(!o||typeof o!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s||typeof s!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Lh=o=>{if(o&&o.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Gd=o=>o.webdriver||!o.languages||o.languages.length===0,Xd=()=>new ri(451,"Unavailable For Headless Browser"),Ih=(o,s)=>{if(!Array.isArray(o))throw"The BlockList list has to be an array";if(typeof s!="string")throw"The BlockList watchVariable has to be a string"},Oh=o=>{var s;return!((s=o.list)!=null&&s.length)||!o.watchVariable},Mh=(o,s)=>o instanceof FormData?o.get(s):o[s],Jd=(o,s)=>{if(Oh(o))return!1;Ih(o.list,o.watchVariable);const a=Mh(s,o.watchVariable);return typeof a!="string"?!1:o.list.includes(a)},bd=()=>new ri(403,"Forbidden"),Dh=(o,s)=>{if(typeof o!="number"||o<0)throw"The LimitRate throttle has to be a positive number";if(s&&typeof s!="string")throw"The LimitRate ID has to be a non-empty string"},Fh=async(o,s,a)=>{const f=Number(await a.get(o)||0);return s-Date.now()+f},qd=async(o,s,a)=>{if(!s.throttle||!a)return!1;Dh(s.throttle,s.id);const f=s.id||o;return await Fh(f,s.throttle,a)>0?!0:(await a.set(f,Date.now().toString()),!1)},Zd=()=>new ri(429,"Too Many Requests"),Ah=async(o,s,a,f)=>{const h=ta(f),w=h.publicKey||$e.publicKey,S=h.blockHeadless||$e.blockHeadless,_=h.storageProvider||$e.storageProvider,E={...$e.blockList,...h.blockList},R={...$e.limitRate,...h.limitRate};return S&&Gd(navigator)?Promise.reject(Xd()):(Yd(w,o,s),Lh(a),a&&Jd(E,a)?Promise.reject(bd()):await qd(location.pathname,R,_)?Promise.reject(Zd()):Kd("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:w,service_id:o,template_id:s,template_params:a}),{"Content-type":"application/json"}))},$h=o=>{if(!o||o.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Vh=o=>typeof o=="string"?document.querySelector(o):o,Uh=async(o,s,a,f)=>{const h=ta(f),w=h.publicKey||$e.publicKey,S=h.blockHeadless||$e.blockHeadless,_=$e.storageProvider||h.storageProvider,E={...$e.blockList,...h.blockList},R={...$e.limitRate,...h.limitRate};if(S&&Gd(navigator))return Promise.reject(Xd());const I=Vh(a);Yd(w,o,s),$h(I);const z=new FormData(I);return Jd(E,z)?Promise.reject(bd()):await qd(location.pathname,R,_)?Promise.reject(Zd()):(z.append("lib_version","4.4.1"),z.append("service_id",o),z.append("template_id",s),z.append("user_id",w),Kd("/api/v1.0/email/send-form",z))},Bh={init:Th,send:Ah,sendForm:Uh,EmailJSResponseStatus:ri};function Hh(){const[o,s]=fe.useState(""),[a,f]=fe.useState(""),[h,w]=fe.useState(""),[S,_]=fe.useState(""),E=fe.useRef(null),{ref:R,inView:I}=dr({threshold:.1});function z(L){if(L.preventDefault(),o===""||a===""||S===""){alert("Preencha todos os campos");return}const U={name:o,email:a,telefone:h,message:S};Bh.send("service_za4aivk","template_x61afyb",U,"jkB5CHRiHgFKdHByN").then(Y=>{console.log("EMAIL ENVIADO!",Y.status,Y.text),s(""),f(""),w(""),_("")}).catch(Y=>{console.log("Erro: ",Y)})}return c.jsxs(Ph,{id:"contact",ref:E,onSubmit:z,children:[c.jsx(Rh,{className:`title ${I?"animate-left":""}`,ref:R,children:c.jsx("h2",{children:"Entre em Contato"})}),c.jsxs("div",{className:`contact-local ${I?"animate-jump":""}`,ref:R,children:[c.jsxs("div",{className:"inputs",children:[c.jsxs("div",{children:[c.jsxs(Ms,{children:["Nome ",c.jsx("span",{children:"*"})]}),c.jsx(Ds,{type:"text",placeholder:"Nome e sobremone",id:"inputName",onChange:L=>s(L.target.value),value:o})]}),c.jsxs("div",{children:[c.jsxs(Ms,{children:["E-mail ",c.jsx("span",{children:"*"})]}),c.jsx(Ds,{type:"text",placeholder:"E-mail para contato",id:"inputEmail",onChange:L=>f(L.target.value),value:a})]}),c.jsxs("div",{children:[c.jsxs(Ms,{children:["Telefone ",c.jsx("span",{children:"*"})]}),c.jsx(Ds,{type:"tel",placeholder:"(00) 00000-0000",id:"inputTel",onChange:L=>w(L.target.value),value:h})]})]}),c.jsx("div",{className:"text-area",children:c.jsx("textarea",{name:"message",placeholder:"Digite aqui a sua mensagem...",onChange:L=>_(L.target.value),value:S})})]}),c.jsxs("div",{className:`submit-button ${I?"animate-jump":""}`,ref:R,children:[c.jsx(Lt,{children:c.jsx("button",{className:"button-one to-send",type:"submit",children:"Enviar"})}),c.jsx("p",{children:"© 2024. Todos os direitos reservados."})]})]})}const Wh=ze.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 350px;
  padding: 20px;
  position: fixed;
  width: 100vw;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(50px);
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
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(50px);

    .navbar-left {
      display: flex;
      margin-left: -80px;
    }
    .navbar-right {
      display: none;
    }

  }
`,Qh=ze.aside`
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
      border: none;

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
`,Kh="/portifolio/assets/hamburger.svg",Yh="/portifolio/assets/close-sidebar.svg";function Gh(){const o=fe.useRef(null),s=fe.useRef(null),a=fe.useRef(null),f=fe.useRef(null),h=fe.useRef(null),w=fe.useRef(null),S=H=>{H.preventDefault(),o.current&&o.current.scrollIntoView({behavior:"smooth"})},_=H=>{H.preventDefault(),window.scrollTo({top:s.current.offsetTop,behavior:"smooth"})},E=H=>{H.preventDefault(),window.scrollTo({top:a.current.offsetTop,behavior:"smooth"})},R=H=>{H.preventDefault(),window.scrollTo({top:f.current.offsetTop,behavior:"smooth"})},I=H=>{H.preventDefault(),window.scrollTo({top:h.current.offsetTop,behavior:"smooth"})},z=H=>{H.preventDefault(),window.scrollTo({top:w.current.offsetTop,behavior:"smooth"})},L=fe.useRef(null),U=fe.useRef(null),Y=()=>{L.current&&U.current&&(L.current.classList.add("active"),U.current.classList.add("visible"))},B=()=>{L.current&&U.current&&(L.current.classList.add("closing"),setTimeout(()=>{L.current.classList.remove("active","closing")},100),U.current.classList.remove("visible"))};return c.jsxs("header",{children:[c.jsxs(Wh,{className:"navabar",children:[c.jsx("div",{className:"navbar-left",children:c.jsx("h2",{children:c.jsxs("a",{href:"#main",onClick:()=>S,children:["Nei",c.jsx("span",{children:"Barbosa"}),c.jsx("span",{className:"span2",children:".dev"})]})})}),c.jsx("div",{className:"navbar-right",children:c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"#about-me",onClick:()=>_,children:"Sobre mim"})}),c.jsx("li",{children:c.jsx("a",{href:"#skill",onClick:()=>E,children:"Habilidades"})}),c.jsx("li",{children:c.jsx("a",{href:"#expertise",onClick:()=>R,children:"Experiências"})}),c.jsx("li",{children:c.jsx("a",{href:"#projects",onClick:()=>I,children:"Projetos"})}),c.jsx("li",{children:c.jsx("a",{href:"#contact",onClick:()=>z,children:"Contato"})})]})})]}),c.jsxs(Qh,{children:[c.jsx("button",{id:"hamburger",onClick:Y,children:c.jsx("img",{src:Kh,alt:"menu icon",width:"35px"})}),c.jsx("button",{id:"close-sidebar",ref:U,onClick:B,children:c.jsx("img",{src:Yh,alt:"close menu icon",width:"35px"})}),c.jsx("div",{className:"aside",ref:L,children:c.jsxs("ul",{children:[c.jsx("li",{className:"li-info",onClick:B,children:c.jsx("a",{href:"#about-me",onClick:()=>_,children:"Sobre mim"})}),c.jsx("li",{className:"li-info",onClick:B,children:c.jsx("a",{href:"#skill",onClick:()=>E,children:"Habilidades"})}),c.jsx("li",{className:"li-info",onClick:B,children:c.jsx("a",{href:"#expertise",onClick:()=>R,children:"Experiências"})}),c.jsx("li",{className:"li-info",onClick:B,children:c.jsx("a",{href:"#projects",onClick:()=>I,children:"Projetos"})}),c.jsx("li",{className:"li-info",onClick:B,children:c.jsx("a",{href:"#contact",onClick:()=>z,children:"Contato"})}),c.jsx("a",{href:"https://wa.me/message/DBN2KDY5BI2GN1",target:"_blank",className:"li-info",onClick:B,children:c.jsx("img",{src:Wd,alt:"whatsapp icon"})})]})})]})]})}const Xh=ze.main`
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
      width: 25em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transform: translateX(0);

      .my-info {

        h1 {
          font-size: 53px;
          gap: 15px;
        }

        h3 {
          margin-top: 0px;
          margin-left: 0px;
        }

      }     

      p {
        text-align: center;
        font-size: 16px;
        width: 22em;
      }
    }

    .container-right {
      img {
        width: 300px;
        height: 300px;
        z-index: -1;
      }
    }
  }
`,Jh=ze.div`
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
`,bh="/portifolio/assets/linkedin-icon.svg",ef="/portifolio/assets/github-icon.svg";function qh(){const o=fe.useRef(null),{ref:s,inView:a}=dr({threshold:.1,triggerOnce:!1}),f=fe.useRef(null),h=w=>{w.preventDefault(),f.current&&f.current.scrollIntoView({behavior:"smooth"})};return c.jsxs(Xh,{id:"main",ref:o,children:[c.jsxs("div",{className:`container-left ${a?"animate-left":""}`,ref:s,children:[c.jsxs("div",{className:"my-info",children:[c.jsxs("h1",{children:["Nei ",c.jsx("span",{children:"Barbosa"})]}),c.jsx("h3",{children:"Developer Front End"})]}),c.jsx("p",{children:"Olá, seja muito bem-vindo(a)! Sinta-se à vontade para explorar e descobrir mais sobre o meu trabalho. Este espaço foi criado com carinho para apresentar minhas habilidades e projetos. Aproveite a visita!"}),c.jsxs(Lt,{className:"buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://drive.google.com/file/d/1IcwSVHE6IwQ9TQOZAcaxNtst_AxqidN9/view?usp=sharing",target:"_blank",children:"Baixar CV"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"#projects",onClick:()=>h,children:"Meus Projetos"})})]}),c.jsxs(Jh,{className:"social-media",children:[c.jsx("p",{className:"p",children:"Minhas Redes:"}),c.jsx("a",{href:"https://www.linkedin.com/in/dev-neibarbosa/",target:"_blank",children:c.jsx("img",{src:bh,alt:"ícone linkedin",className:"linkedin"})}),c.jsx("a",{href:"https://github.com/devNeiBarbosa",target:"_blank",children:c.jsx("img",{src:ef,alt:"ícone github",className:"github"})})]})]}),c.jsx("div",{className:`container-right ${a?"animate-right":""}`,children:c.jsx("img",{src:Qd,alt:"profile"})})]})}const Zh="/portifolio/assets/portifolio-img.png",e0="/portifolio/assets/meow-cafe-img.png",t0="/portifolio/assets/valorant-points-img.png",n0="/portifolio/assets/cadastrar-usuarios-img.png",r0="/portifolio/assets/game-jokenpo-img.png",i0="/portifolio/assets/conversor-img.png",o0="/portifolio/assets/sorteador-img.png",l0="/portifolio/assets/irmaos-encanadores-img.png",_n="/portifolio/assets/icon-html5.png",Pn="/portifolio/assets/icon-css3.png",Rn="/portifolio/assets/icon-js.png",Ys="/portifolio/assets/icon-react.png",tf="/portifolio/assets/icon-node.png",s0=ze.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 110px;
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
    padding-top: 110px;
    padding-bottom: 150px;

    .my-projects {
      display: grid;
      gap: 150px;
      grid-template-columns: 1fr;
      grid-template-rows: 360px;
      margin-top: -170px;
      opacity: 1;
      transform: scale(1);

      .portifolio {
        margin-bottom: -150px;
      }
    }
  }
`,a0=ze.div` 
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
      width: 10em;
      font-size: 32px;
    }

    p {
      width: 22em;
    }
  }
`,u0=()=>{const o=fe.useRef(null),{ref:s,inView:a}=dr({threshold:.1});return c.jsxs(s0,{id:"projects",ref:o,children:[c.jsx(a0,{className:`title ${a?"animate-left":""}`,ref:s,children:c.jsx("h2",{children:"Meus Projetos"})}),c.jsxs("section",{className:`my-projects ${a?"animate-jump":""}`,ref:s,children:[c.jsxs("div",{className:"hover portifolio",children:[" ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:Zh,alt:"page model",className:"page"}),c.jsx("h3",{children:"Portifólio"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/portifolio/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/portifolio",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Meu Portifólio."}),c.jsx("p",{children:"Projeto desenvolvido com o objetivo de aprimorar e consolidar minhas habilidades em React, além de apresentar meus projetos de maneira mais profissional."}),c.jsx("div",{className:"tech-used",children:c.jsx("img",{src:Ys,alt:"icon React",className:"react",width:"50px"})})]})]}),c.jsxs("div",{className:"hover",children:["  ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:e0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Meow Café"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Meow-cafeteria/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Meow-cafeteria",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Landing Page para uma Cafeteria."}),c.jsx("p",{children:"Projeto criado com o objetivo de consolidar minhas habilidades em HTML5 e CSS3 puros explorandos ao máximo. O JavaScript foi usado minimamente."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["  ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:t0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Valorant Points"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Site-Valorant-points/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Site-Valorant-points",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Landing Page para venda de VPs."}),c.jsx("p",{children:"Projeto desenvolvido para consolidar habilidades em Front-End, explorando funções do JavaScript como Array e forEach."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["   ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:n0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Cadastro de Usuários"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/React-cadastro-de-usuarios",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Página de cadastro de usuários."}),c.jsx("p",{children:"Projeto criado com o intuito de aprimorar e consolidar minhas habilidades em React e Node.js. Esse foi o meu primeiro projeto com banco de dados."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:Ys,alt:"icon React",className:"react",width:"50px"}),c.jsx("img",{src:tf,alt:"icon Node.js",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["    ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:r0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Game Jolenpô"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Game-jokenpo/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Game-jokenpo",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Game virtual de Jokenpô."}),c.jsx("p",{children:"Projeto desenvolvido com o intuito de consolidar minhas habilidades no Front-End. Neste projeto, aprofundei meus conhecimentos sobre a função Math."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["   ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:i0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Conversor de Moedas"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Conversor-de-moedas/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Conversor-de-moedas",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Site de conversão de moedas."}),c.jsx("p",{children:"Projeto desenvolvido com o objetivo de consolidar minhas habilidades no Front-End. Este é o meu primeiro projeto com APIs (cotação de moeda)."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["   ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:o0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Sorteador de Números"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Sorteador-de-numeros/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Sorteador-de-numeros",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:" Site para sortear números aleatoriamente."}),c.jsx("p",{children:"Projeto desenvolvido com o objetivo de consolidar minhas habilidades no Front-End. Este foi o primeiro projeto em que utilizei a função Math."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]}),c.jsxs("div",{className:"hover",children:["  ",c.jsxs("div",{className:"info-lading-page",children:[c.jsx("img",{src:l0,alt:"page model",className:"page"}),c.jsx("h3",{children:"Irmãos Encanadores"}),c.jsxs(Lt,{className:"redirect-buttons",children:[c.jsx("button",{className:"button-one",children:c.jsx("a",{href:"https://devneibarbosa.github.io/Projeto-irmaos-encanadores/",target:"_blank",children:"Web Site"})}),c.jsx("button",{className:"button-two",children:c.jsx("a",{href:"https://github.com/devNeiBarbosa/Projeto-irmaos-encanadores",target:"_blank",children:"Repositório"})})]})]}),c.jsxs("div",{className:"hover-active",children:[c.jsx("p",{children:"Site para prestação de Serviços."}),c.jsx("p",{children:"Projeto criado com o intuito de aprimorar e consolidar minhas habilidades em HTML5, CSS3 e JavaScript."}),c.jsxs("div",{className:"tech-used",children:[c.jsx("img",{src:_n,alt:"icon HTML5",width:"50px"}),c.jsx("img",{src:Pn,alt:"icon CSS3",width:"50px"}),c.jsx("img",{src:Rn,alt:"icon JavaScript",width:"50px"})]})]})]})]})]})},c0=ze.div` 
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
      width: 10em;
      font-size: 32px;
    }

    p {
      width: 22em;
    }
  }
`,d0=ze.section`
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
    padding-top: 120px;

    img {

      width: 85px;

      &.docker {
          width: 70px;
          margin-top: 8px;
          margin-bottom: 8px;
        }
    }
    .icons-tech {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: -50px;

      .icons-top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
      }
      
      .icons-bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
      }
    }
  }
`,f0="/portifolio/assets/icon-docker.png",p0="/portifolio/assets/icon-git.png";function m0(){const o=fe.useRef(null),{ref:s,inView:a}=dr({threshold:.1});return c.jsxs(d0,{id:"skill",ref:o,children:[c.jsxs(c0,{className:`title ${a?"animate-left":""}`,ref:s,children:[c.jsx("h2",{children:"Minhas Habilidades"}),c.jsx("p",{children:"Essas são as tecnologias que utilizo para garantir desempenho, escalabilidade e excelência, com expertise no frontend, criando interfaces intuitivas e funcionais, e conhecimentos básicos no backend."})]}),c.jsxs("div",{className:`icons-tech ${a?"animate-right":""}`,ref:s,children:[c.jsxs("div",{className:"icons-top",children:[c.jsx("img",{src:_n,alt:"icon HTML5"}),c.jsx("img",{src:Pn,alt:"icon CSS3"}),c.jsx("img",{src:Rn,alt:"icon JavaScript"}),c.jsx("img",{src:Ys,alt:"icon React",className:"react"})]}),c.jsxs("div",{className:"icons-bottom",children:[c.jsx("img",{src:tf,alt:"icon Node.js"}),c.jsx("img",{src:f0,alt:"icon Docker",className:"docker"}),c.jsx("img",{src:p0,alt:"icon Git"}),c.jsx("img",{src:ef,alt:"icon GitHub"})]})]})]})}function h0(){return c.jsxs(c.Fragment,{children:[c.jsx(Gh,{}),c.jsx(qh,{}),c.jsx(wh,{}),c.jsx(m0,{}),c.jsx(Ch,{}),c.jsx(u0,{}),c.jsx(Hh,{}),c.jsx(ch,{children:c.jsx("a",{href:"https://wa.me/message/DBN2KDY5BI2GN1",target:"_blank",children:c.jsx("img",{src:Wd,alt:"whatsapp icon"})})})]})}const g0=uh`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    list-style-type: none;
    color: #fff;
    overflow-x: none;
    }

    a {
    text-decoration: none;
    color: inherit; 
    }

    body {
        background-color: #000;
    }
`;am.createRoot(document.getElementById("root")).render(c.jsxs(fe.StrictMode,{children:[c.jsx(g0,{}),c.jsx(h0,{})]}));
