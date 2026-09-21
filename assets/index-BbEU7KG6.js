(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const b of j.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function c(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(m){if(m.ep)return;m.ep=!0;const j=c(m);fetch(m.href,j)}})();function rh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ta={exports:{}},to={},_a={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function th(){if(Zd)return oe;Zd=1;var i=Symbol.for("react.element"),l=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),b=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),U=Symbol.iterator;function Z(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,W={};function G(x,N,J){this.props=x,this.context=N,this.refs=W,this.updater=J||le}G.prototype.isReactComponent={},G.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function me(){}me.prototype=G.prototype;function de(x,N,J){this.props=x,this.context=N,this.refs=W,this.updater=J||le}var ne=de.prototype=new me;ne.constructor=de,X(ne,G.prototype),ne.isPureReactComponent=!0;var _=Array.isArray,q=Object.prototype.hasOwnProperty,H={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function F(x,N,J){var re,ae={},ie=null,ue=null;if(N!=null)for(re in N.ref!==void 0&&(ue=N.ref),N.key!==void 0&&(ie=""+N.key),N)q.call(N,re)&&!T.hasOwnProperty(re)&&(ae[re]=N[re]);var ce=arguments.length-2;if(ce===1)ae.children=J;else if(1<ce){for(var xe=Array(ce),ze=0;ze<ce;ze++)xe[ze]=arguments[ze+2];ae.children=xe}if(x&&x.defaultProps)for(re in ce=x.defaultProps,ce)ae[re]===void 0&&(ae[re]=ce[re]);return{$$typeof:i,type:x,key:ie,ref:ue,props:ae,_owner:H.current}}function je(x,N){return{$$typeof:i,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function Pe(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function se(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(J){return N[J]})}var Te=/\/+/g;function Ce(x,N){return typeof x=="object"&&x!==null&&x.key!=null?se(""+x.key):N.toString(36)}function Ye(x,N,J,re,ae){var ie=typeof x;(ie==="undefined"||ie==="boolean")&&(x=null);var ue=!1;if(x===null)ue=!0;else switch(ie){case"string":case"number":ue=!0;break;case"object":switch(x.$$typeof){case i:case l:ue=!0}}if(ue)return ue=x,ae=ae(ue),x=re===""?"."+Ce(ue,0):re,_(ae)?(J="",x!=null&&(J=x.replace(Te,"$&/")+"/"),Ye(ae,N,J,"",function(ze){return ze})):ae!=null&&(Pe(ae)&&(ae=je(ae,J+(!ae.key||ue&&ue.key===ae.key?"":(""+ae.key).replace(Te,"$&/")+"/")+x)),N.push(ae)),1;if(ue=0,re=re===""?".":re+":",_(x))for(var ce=0;ce<x.length;ce++){ie=x[ce];var xe=re+Ce(ie,ce);ue+=Ye(ie,N,J,xe,ae)}else if(xe=Z(x),typeof xe=="function")for(x=xe.call(x),ce=0;!(ie=x.next()).done;)ie=ie.value,xe=re+Ce(ie,ce++),ue+=Ye(ie,N,J,xe,ae);else if(ie==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ue}function er(x,N,J){if(x==null)return x;var re=[],ae=0;return Ye(x,re,"","",function(ie){return N.call(J,ie,ae++)}),re}function Ke(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(J){(x._status===0||x._status===-1)&&(x._status=1,x._result=J)},function(J){(x._status===0||x._status===-1)&&(x._status=2,x._result=J)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var Ne={current:null},L={transition:null},D={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:L,ReactCurrentOwner:H};function P(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:er,forEach:function(x,N,J){er(x,function(){N.apply(this,arguments)},J)},count:function(x){var N=0;return er(x,function(){N++}),N},toArray:function(x){return er(x,function(N){return N})||[]},only:function(x){if(!Pe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},oe.Component=G,oe.Fragment=c,oe.Profiler=m,oe.PureComponent=de,oe.StrictMode=u,oe.Suspense=C,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,oe.act=P,oe.cloneElement=function(x,N,J){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var re=X({},x.props),ae=x.key,ie=x.ref,ue=x._owner;if(N!=null){if(N.ref!==void 0&&(ie=N.ref,ue=H.current),N.key!==void 0&&(ae=""+N.key),x.type&&x.type.defaultProps)var ce=x.type.defaultProps;for(xe in N)q.call(N,xe)&&!T.hasOwnProperty(xe)&&(re[xe]=N[xe]===void 0&&ce!==void 0?ce[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)re.children=J;else if(1<xe){ce=Array(xe);for(var ze=0;ze<xe;ze++)ce[ze]=arguments[ze+2];re.children=ce}return{$$typeof:i,type:x.type,key:ae,ref:ie,props:re,_owner:ue}},oe.createContext=function(x){return x={$$typeof:b,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:j,_context:x},x.Consumer=x},oe.createElement=F,oe.createFactory=function(x){var N=F.bind(null,x);return N.type=x,N},oe.createRef=function(){return{current:null}},oe.forwardRef=function(x){return{$$typeof:E,render:x}},oe.isValidElement=Pe,oe.lazy=function(x){return{$$typeof:Q,_payload:{_status:-1,_result:x},_init:Ke}},oe.memo=function(x,N){return{$$typeof:K,type:x,compare:N===void 0?null:N}},oe.startTransition=function(x){var N=L.transition;L.transition={};try{x()}finally{L.transition=N}},oe.unstable_act=P,oe.useCallback=function(x,N){return Ne.current.useCallback(x,N)},oe.useContext=function(x){return Ne.current.useContext(x)},oe.useDebugValue=function(){},oe.useDeferredValue=function(x){return Ne.current.useDeferredValue(x)},oe.useEffect=function(x,N){return Ne.current.useEffect(x,N)},oe.useId=function(){return Ne.current.useId()},oe.useImperativeHandle=function(x,N,J){return Ne.current.useImperativeHandle(x,N,J)},oe.useInsertionEffect=function(x,N){return Ne.current.useInsertionEffect(x,N)},oe.useLayoutEffect=function(x,N){return Ne.current.useLayoutEffect(x,N)},oe.useMemo=function(x,N){return Ne.current.useMemo(x,N)},oe.useReducer=function(x,N,J){return Ne.current.useReducer(x,N,J)},oe.useRef=function(x){return Ne.current.useRef(x)},oe.useState=function(x){return Ne.current.useState(x)},oe.useSyncExternalStore=function(x,N,J){return Ne.current.useSyncExternalStore(x,N,J)},oe.useTransition=function(){return Ne.current.useTransition()},oe.version="18.3.1",oe}var Jd;function Za(){return Jd||(Jd=1,_a.exports=th()),_a.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eu;function nh(){if(eu)return to;eu=1;var i=Za(),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function b(E,C,K){var Q,U={},Z=null,le=null;K!==void 0&&(Z=""+K),C.key!==void 0&&(Z=""+C.key),C.ref!==void 0&&(le=C.ref);for(Q in C)u.call(C,Q)&&!j.hasOwnProperty(Q)&&(U[Q]=C[Q]);if(E&&E.defaultProps)for(Q in C=E.defaultProps,C)U[Q]===void 0&&(U[Q]=C[Q]);return{$$typeof:l,type:E,key:Z,ref:le,props:U,_owner:m.current}}return to.Fragment=c,to.jsx=b,to.jsxs=b,to}var ru;function oh(){return ru||(ru=1,Ta.exports=nh()),Ta.exports}var n=oh(),ji={},Pa={exports:{}},lr={},Ba={exports:{}},Aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tu;function ih(){return tu||(tu=1,(function(i){function l(L,D){var P=L.length;L.push(D);e:for(;0<P;){var x=P-1>>>1,N=L[x];if(0<m(N,D))L[x]=D,L[P]=N,P=x;else break e}}function c(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var D=L[0],P=L.pop();if(P!==D){L[0]=P;e:for(var x=0,N=L.length,J=N>>>1;x<J;){var re=2*(x+1)-1,ae=L[re],ie=re+1,ue=L[ie];if(0>m(ae,P))ie<N&&0>m(ue,ae)?(L[x]=ue,L[ie]=P,x=ie):(L[x]=ae,L[re]=P,x=re);else if(ie<N&&0>m(ue,P))L[x]=ue,L[ie]=P,x=ie;else break e}}return D}function m(L,D){var P=L.sortIndex-D.sortIndex;return P!==0?P:L.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;i.unstable_now=function(){return j.now()}}else{var b=Date,E=b.now();i.unstable_now=function(){return b.now()-E}}var C=[],K=[],Q=1,U=null,Z=3,le=!1,X=!1,W=!1,G=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(L){for(var D=c(K);D!==null;){if(D.callback===null)u(K);else if(D.startTime<=L)u(K),D.sortIndex=D.expirationTime,l(C,D);else break;D=c(K)}}function _(L){if(W=!1,ne(L),!X)if(c(C)!==null)X=!0,Ke(q);else{var D=c(K);D!==null&&Ne(_,D.startTime-L)}}function q(L,D){X=!1,W&&(W=!1,me(F),F=-1),le=!0;var P=Z;try{for(ne(D),U=c(C);U!==null&&(!(U.expirationTime>D)||L&&!se());){var x=U.callback;if(typeof x=="function"){U.callback=null,Z=U.priorityLevel;var N=x(U.expirationTime<=D);D=i.unstable_now(),typeof N=="function"?U.callback=N:U===c(C)&&u(C),ne(D)}else u(C);U=c(C)}if(U!==null)var J=!0;else{var re=c(K);re!==null&&Ne(_,re.startTime-D),J=!1}return J}finally{U=null,Z=P,le=!1}}var H=!1,T=null,F=-1,je=5,Pe=-1;function se(){return!(i.unstable_now()-Pe<je)}function Te(){if(T!==null){var L=i.unstable_now();Pe=L;var D=!0;try{D=T(!0,L)}finally{D?Ce():(H=!1,T=null)}}else H=!1}var Ce;if(typeof de=="function")Ce=function(){de(Te)};else if(typeof MessageChannel!="undefined"){var Ye=new MessageChannel,er=Ye.port2;Ye.port1.onmessage=Te,Ce=function(){er.postMessage(null)}}else Ce=function(){G(Te,0)};function Ke(L){T=L,H||(H=!0,Ce())}function Ne(L,D){F=G(function(){L(i.unstable_now())},D)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_continueExecution=function(){X||le||(X=!0,Ke(q))},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return Z},i.unstable_getFirstCallbackNode=function(){return c(C)},i.unstable_next=function(L){switch(Z){case 1:case 2:case 3:var D=3;break;default:D=Z}var P=Z;Z=D;try{return L()}finally{Z=P}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(L,D){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var P=Z;Z=L;try{return D()}finally{Z=P}},i.unstable_scheduleCallback=function(L,D,P){var x=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?x+P:x):P=x,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=P+N,L={id:Q++,callback:D,priorityLevel:L,startTime:P,expirationTime:N,sortIndex:-1},P>x?(L.sortIndex=P,l(K,L),c(C)===null&&L===c(K)&&(W?(me(F),F=-1):W=!0,Ne(_,P-x))):(L.sortIndex=N,l(C,L),X||le||(X=!0,Ke(q))),L},i.unstable_shouldYield=se,i.unstable_wrapCallback=function(L){var D=Z;return function(){var P=Z;Z=D;try{return L.apply(this,arguments)}finally{Z=P}}}})(Aa)),Aa}var nu;function sh(){return nu||(nu=1,Ba.exports=ih()),Ba.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou;function ah(){if(ou)return lr;ou=1;var i=Za(),l=sh();function c(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function j(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(m[e]=r,e=0;e<r.length;e++)u.add(r[e])}var E=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),C=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},U={};function Z(e){return C.call(U,e)?!0:C.call(Q,e)?!1:K.test(e)?U[e]=!0:(Q[e]=!0,!1)}function le(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,r,t,o){if(r===null||typeof r=="undefined"||le(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(e,r,t,o,s,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];G[r]=new W(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(me,de);G[r]=new W(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(me,de);G[r]=new W(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(me,de);G[r]=new W(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,r,t,o){var s=G.hasOwnProperty(r)?G[r]:null;(s!==null?s.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,t,s,o)&&(t=null),o||s===null?Z(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(r=s.attributeName,o=s.attributeNamespace,t===null?e.removeAttribute(r):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var _=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),H=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),je=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),se=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),L=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var J=!1;function re(e,r){if(!e||J)return"";J=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var s=y.stack.split(`
`),a=o.stack.split(`
`),d=s.length-1,p=a.length-1;1<=d&&0<=p&&s[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(s[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||s[d]!==a[p]){var f=`
`+s[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?N(e):""}function ae(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case H:return"Portal";case je:return"Profiler";case F:return"StrictMode";case Ce:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case Te:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:ie(e.type)||"Memo";case Ke:r=e._payload,e=e._init;try{return ie(e(r))}catch{}}return null}function ue(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ze(e){var r=xe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Kr(e){e._valueTracker||(e._valueTracker=ze(e))}function vt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fi(e,r){var t=r.checked;return P({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function il(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=ce(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function sl(e,r){r=r.checked,r!=null&&ne(e,"checked",r,!1)}function Mi(e,r){sl(e,r);var t=ce(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Di(e,r.type,t):r.hasOwnProperty("defaultValue")&&Di(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function al(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Di(e,r,t){(r!=="number"||kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gn=Array.isArray;function Rt(e,r,t,o){if(e=e.options,r){r={};for(var s=0;s<t.length;s++)r["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=r.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),r=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function Ui(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(c(91));return P({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ll(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(c(92));if(gn(t)){if(1<t.length)throw Error(c(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:ce(t)}}function cl(e,r){var t=ce(r.value),o=ce(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function dl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ul(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wi(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ul(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,pl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,o,s){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,s)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function vn(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},op=["Webkit","ms","Moz","O"];Object.keys(yn).forEach(function(e){op.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),yn[r]=yn[e]})});function fl(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||yn.hasOwnProperty(e)&&yn[e]?(""+r).trim():r+"px"}function hl(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,s=fl(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,s):e[t]=s}}var ip=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hi(e,r){if(r){if(ip[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(c(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(c(61))}if(r.style!=null&&typeof r.style!="object")throw Error(c(62))}}function $i(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,Ft=null,Mt=null;function ml(e){if(e=Un(e)){if(typeof Gi!="function")throw Error(c(280));var r=e.stateNode;r&&(r=Ao(r),Gi(e.stateNode,e.type,r))}}function xl(e){Ft?Mt?Mt.push(e):Mt=[e]:Ft=e}function gl(){if(Ft){var e=Ft,r=Mt;if(Mt=Ft=null,ml(e),r)for(e=0;e<r.length;e++)ml(r[e])}}function vl(e,r){return e(r)}function yl(){}var Yi=!1;function jl(e,r,t){if(Yi)return e(r,t);Yi=!0;try{return vl(e,r,t)}finally{Yi=!1,(Ft!==null||Mt!==null)&&(yl(),gl())}}function jn(e,r){var t=e.stateNode;if(t===null)return null;var o=Ao(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,r,typeof t));return t}var Ki=!1;if(E)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ki=!1}function sp(e,r,t,o,s,a,d,p,f){var y=Array.prototype.slice.call(arguments,3);try{r.apply(t,y)}catch(k){this.onError(k)}}var wn=!1,fo=null,ho=!1,Xi=null,ap={onError:function(e){wn=!0,fo=e}};function lp(e,r,t,o,s,a,d,p,f){wn=!1,fo=null,sp.apply(ap,arguments)}function cp(e,r,t,o,s,a,d,p,f){if(lp.apply(this,arguments),wn){if(wn){var y=fo;wn=!1,fo=null}else throw Error(c(198));ho||(ho=!0,Xi=y)}}function yt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Nl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function wl(e){if(yt(e)!==e)throw Error(c(188))}function dp(e){var r=e.alternate;if(!r){if(r=yt(e),r===null)throw Error(c(188));return r!==e?null:e}for(var t=e,o=r;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){t=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return wl(s),e;if(a===o)return wl(s),r;a=a.sibling}throw Error(c(188))}if(t.return!==o.return)t=s,o=a;else{for(var d=!1,p=s.child;p;){if(p===t){d=!0,t=s,o=a;break}if(p===o){d=!0,o=s,t=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===t){d=!0,t=a,o=s;break}if(p===o){d=!0,o=a,t=s;break}p=p.sibling}if(!d)throw Error(c(189))}}if(t.alternate!==o)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:r}function kl(e){return e=dp(e),e!==null?bl(e):null}function bl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=bl(e);if(r!==null)return r;e=e.sibling}return null}var Sl=l.unstable_scheduleCallback,Cl=l.unstable_cancelCallback,up=l.unstable_shouldYield,pp=l.unstable_requestPaint,Be=l.unstable_now,fp=l.unstable_getCurrentPriorityLevel,qi=l.unstable_ImmediatePriority,El=l.unstable_UserBlockingPriority,mo=l.unstable_NormalPriority,hp=l.unstable_LowPriority,zl=l.unstable_IdlePriority,xo=null,Pr=null;function mp(e){if(Pr&&typeof Pr.onCommitFiberRoot=="function")try{Pr.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var br=Math.clz32?Math.clz32:vp,xp=Math.log,gp=Math.LN2;function vp(e){return e>>>=0,e===0?32:31-(xp(e)/gp|0)|0}var go=64,vo=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,d=t&268435455;if(d!==0){var p=d&~s;p!==0?o=kn(p):(a&=d,a!==0&&(o=kn(a)))}else d=t&~s,d!==0?o=kn(d):a!==0&&(o=kn(a));if(o===0)return 0;if(r!==0&&r!==o&&(r&s)===0&&(s=o&-o,a=r&-r,s>=a||s===16&&(a&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-br(r),s=1<<t,o|=e[t],r&=~s;return o}function yp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-br(a),p=1<<d,f=s[d];f===-1?((p&t)===0||(p&o)!==0)&&(s[d]=yp(p,r)):f<=r&&(e.expiredLanes|=p),a&=~p}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Il(){var e=go;return go<<=1,(go&4194240)===0&&(go=64),e}function Ji(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function bn(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-br(r),e[r]=t}function Np(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-br(t),a=1<<s;r[s]=0,o[s]=-1,e[s]=-1,t&=~a}}function es(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-br(t),s=1<<o;s&r|e[o]&r&&(e[o]|=r),t&=~s}}var ve=0;function Ll(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tl,rs,_l,Pl,Bl,ts=!1,jo=[],Xr=null,qr=null,Zr=null,Sn=new Map,Cn=new Map,Jr=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(e,r){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Sn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(r.pointerId)}}function En(e,r,t,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},r!==null&&(r=Un(r),r!==null&&rs(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function kp(e,r,t,o,s){switch(r){case"focusin":return Xr=En(Xr,e,r,t,o,s),!0;case"dragenter":return qr=En(qr,e,r,t,o,s),!0;case"mouseover":return Zr=En(Zr,e,r,t,o,s),!0;case"pointerover":var a=s.pointerId;return Sn.set(a,En(Sn.get(a)||null,e,r,t,o,s)),!0;case"gotpointercapture":return a=s.pointerId,Cn.set(a,En(Cn.get(a)||null,e,r,t,o,s)),!0}return!1}function Ol(e){var r=jt(e.target);if(r!==null){var t=yt(r);if(t!==null){if(r=t.tag,r===13){if(r=Nl(t),r!==null){e.blockedOn=r,Bl(e.priority,function(){_l(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=os(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Vi=o,t.target.dispatchEvent(o),Vi=null}else return r=Un(t),r!==null&&rs(r),e.blockedOn=t,!1;r.shift()}return!0}function Rl(e,r,t){No(e)&&t.delete(r)}function bp(){ts=!1,Xr!==null&&No(Xr)&&(Xr=null),qr!==null&&No(qr)&&(qr=null),Zr!==null&&No(Zr)&&(Zr=null),Sn.forEach(Rl),Cn.forEach(Rl)}function zn(e,r){e.blockedOn===r&&(e.blockedOn=null,ts||(ts=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,bp)))}function In(e){function r(s){return zn(s,e)}if(0<jo.length){zn(jo[0],e);for(var t=1;t<jo.length;t++){var o=jo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Xr!==null&&zn(Xr,e),qr!==null&&zn(qr,e),Zr!==null&&zn(Zr,e),Sn.forEach(r),Cn.forEach(r),t=0;t<Jr.length;t++)o=Jr[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Jr.length&&(t=Jr[0],t.blockedOn===null);)Ol(t),t.blockedOn===null&&Jr.shift()}var Dt=_.ReactCurrentBatchConfig,wo=!0;function Sp(e,r,t,o){var s=ve,a=Dt.transition;Dt.transition=null;try{ve=1,ns(e,r,t,o)}finally{ve=s,Dt.transition=a}}function Cp(e,r,t,o){var s=ve,a=Dt.transition;Dt.transition=null;try{ve=4,ns(e,r,t,o)}finally{ve=s,Dt.transition=a}}function ns(e,r,t,o){if(wo){var s=os(e,r,t,o);if(s===null)Ns(e,r,o,ko,t),Al(e,o);else if(kp(s,e,r,t,o))o.stopPropagation();else if(Al(e,o),r&4&&-1<wp.indexOf(e)){for(;s!==null;){var a=Un(s);if(a!==null&&Tl(a),a=os(e,r,t,o),a===null&&Ns(e,r,o,ko,t),a===s)break;s=a}s!==null&&o.stopPropagation()}else Ns(e,r,o,null,t)}}var ko=null;function os(e,r,t,o){if(ko=null,e=Qi(o),e=jt(e),e!==null)if(r=yt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Nl(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return ko=e,null}function Fl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fp()){case qi:return 1;case El:return 4;case mo:case hp:return 16;case zl:return 536870912;default:return 16}default:return 16}}var et=null,is=null,bo=null;function Ml(){if(bo)return bo;var e,r=is,t=r.length,o,s="value"in et?et.value:et.textContent,a=s.length;for(e=0;e<t&&r[e]===s[e];e++);var d=t-e;for(o=1;o<=d&&r[t-o]===s[a-o];o++);return bo=s.slice(e,1<o?1-o:void 0)}function So(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function Dl(){return!1}function dr(e){function r(t,o,s,a,d){this._reactName=t,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Co:Dl,this.isPropagationStopped=Dl,this}return P(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),r}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=dr(Ut),Ln=P({},Ut,{view:0,detail:0}),Ep=dr(Ln),as,ls,Tn,Eo=P({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(as=e.screenX-Tn.screenX,ls=e.screenY-Tn.screenY):ls=as=0,Tn=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),Ul=dr(Eo),zp=P({},Eo,{dataTransfer:0}),Ip=dr(zp),Lp=P({},Ln,{relatedTarget:0}),cs=dr(Lp),Tp=P({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),_p=dr(Tp),Pp=P({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bp=dr(Pp),Ap=P({},Ut,{data:0}),Wl=dr(Ap),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Fp[e])?!!r[e]:!1}function ds(){return Mp}var Dp=P({},Ln,{key:function(e){if(e.key){var r=Op[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=dr(Dp),Wp=P({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=dr(Wp),Hp=P({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),$p=dr(Hp),Vp=P({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qp=dr(Vp),Gp=P({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=dr(Gp),Kp=[9,13,27,32],us=E&&"CompositionEvent"in window,_n=null;E&&"documentMode"in document&&(_n=document.documentMode);var Xp=E&&"TextEvent"in window&&!_n,$l=E&&(!us||_n&&8<_n&&11>=_n),Vl=" ",Ql=!1;function Gl(e,r){switch(e){case"keyup":return Kp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function qp(e,r){switch(e){case"compositionend":return Yl(r);case"keypress":return r.which!==32?null:(Ql=!0,Vl);case"textInput":return e=r.data,e===Vl&&Ql?null:e;default:return null}}function Zp(e,r){if(Wt)return e==="compositionend"||!us&&Gl(e,r)?(e=Ml(),bo=is=et=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $l&&r.locale!=="ko"?null:r.data;default:return null}}var Jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Jp[e.type]:r==="textarea"}function Xl(e,r,t,o){xl(o),r=_o(r,"onChange"),0<r.length&&(t=new ss("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var Pn=null,Bn=null;function ef(e){hc(e,0)}function zo(e){var r=Gt(e);if(vt(r))return e}function rf(e,r){if(e==="change")return r}var ql=!1;if(E){var ps;if(E){var fs="oninput"in document;if(!fs){var Zl=document.createElement("div");Zl.setAttribute("oninput","return;"),fs=typeof Zl.oninput=="function"}ps=fs}else ps=!1;ql=ps&&(!document.documentMode||9<document.documentMode)}function Jl(){Pn&&(Pn.detachEvent("onpropertychange",ec),Bn=Pn=null)}function ec(e){if(e.propertyName==="value"&&zo(Bn)){var r=[];Xl(r,Bn,e,Qi(e)),jl(ef,r)}}function tf(e,r,t){e==="focusin"?(Jl(),Pn=r,Bn=t,Pn.attachEvent("onpropertychange",ec)):e==="focusout"&&Jl()}function nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(Bn)}function of(e,r){if(e==="click")return zo(r)}function sf(e,r){if(e==="input"||e==="change")return zo(r)}function af(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Sr=typeof Object.is=="function"?Object.is:af;function An(e,r){if(Sr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var s=t[o];if(!C.call(r,s)||!Sr(e[s],r[s]))return!1}return!0}function rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tc(e,r){var t=rc(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rc(t)}}function nc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?nc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function oc(){for(var e=window,r=kr();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=kr(e.document)}return r}function hs(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function lf(e){var r=oc(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&nc(t.ownerDocument.documentElement,t)){if(o!==null&&hs(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=tc(t,a);var d=tc(t,o);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cf=E&&"documentMode"in document&&11>=document.documentMode,Ht=null,ms=null,On=null,xs=!1;function ic(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xs||Ht==null||Ht!==kr(o)||(o=Ht,"selectionStart"in o&&hs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),On&&An(On,o)||(On=o,o=_o(ms,"onSelect"),0<o.length&&(r=new ss("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Ht)))}function Io(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var $t={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},gs={},sc={};E&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function Lo(e){if(gs[e])return gs[e];if(!$t[e])return e;var r=$t[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in sc)return gs[e]=r[t];return e}var ac=Lo("animationend"),lc=Lo("animationiteration"),cc=Lo("animationstart"),dc=Lo("transitionend"),uc=new Map,pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,r){uc.set(e,r),j(r,[e])}for(var vs=0;vs<pc.length;vs++){var ys=pc[vs],df=ys.toLowerCase(),uf=ys[0].toUpperCase()+ys.slice(1);rt(df,"on"+uf)}rt(ac,"onAnimationEnd"),rt(lc,"onAnimationIteration"),rt(cc,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(dc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function fc(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,cp(o,r,void 0,e),e.currentTarget=null}function hc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],s=o.event;o=o.listeners;e:{var a=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],f=p.instance,y=p.currentTarget;if(p=p.listener,f!==a&&s.isPropagationStopped())break e;fc(s,p,y),a=f}else for(d=0;d<o.length;d++){if(p=o[d],f=p.instance,y=p.currentTarget,p=p.listener,f!==a&&s.isPropagationStopped())break e;fc(s,p,y),a=f}}}if(ho)throw e=Xi,ho=!1,Xi=null,e}function ke(e,r){var t=r[Es];t===void 0&&(t=r[Es]=new Set);var o=e+"__bubble";t.has(o)||(mc(r,e,2,!1),t.add(o))}function js(e,r,t){var o=0;r&&(o|=4),mc(t,e,o,r)}var To="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[To]){e[To]=!0,u.forEach(function(t){t!=="selectionchange"&&(pf.has(t)||js(t,!1,e),js(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[To]||(r[To]=!0,js("selectionchange",!1,r))}}function mc(e,r,t,o){switch(Fl(r)){case 1:var s=Sp;break;case 4:s=Cp;break;default:s=ns}t=s.bind(null,r,t,e),s=void 0,!Ki||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(r,t,{capture:!0,passive:s}):e.addEventListener(r,t,!0):s!==void 0?e.addEventListener(r,t,{passive:s}):e.addEventListener(r,t,!1)}function Ns(e,r,t,o,s){var a=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===s||p.nodeType===8&&p.parentNode===s)break;if(d===4)for(d=o.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;d=d.return}for(;p!==null;){if(d=jt(p),d===null)return;if(f=d.tag,f===5||f===6){o=a=d;continue e}p=p.parentNode}}o=o.return}jl(function(){var y=a,k=Qi(t),S=[];e:{var w=uc.get(e);if(w!==void 0){var B=ss,O=e;switch(e){case"keypress":if(So(t)===0)break e;case"keydown":case"keyup":B=Up;break;case"focusin":O="focus",B=cs;break;case"focusout":O="blur",B=cs;break;case"beforeblur":case"afterblur":B=cs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Ul;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=$p;break;case ac:case lc:case cc:B=_p;break;case dc:B=Qp;break;case"scroll":B=Ep;break;case"wheel":B=Yp;break;case"copy":case"cut":case"paste":B=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Hl}var R=(r&4)!==0,Ae=!R&&e==="scroll",g=R?w!==null?w+"Capture":null:w;R=[];for(var h=y,v;h!==null;){v=h;var z=v.stateNode;if(v.tag===5&&z!==null&&(v=z,g!==null&&(z=jn(h,g),z!=null&&R.push(Mn(h,z,v)))),Ae)break;h=h.return}0<R.length&&(w=new B(w,O,null,t,k),S.push({event:w,listeners:R}))}}if((r&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",w&&t!==Vi&&(O=t.relatedTarget||t.fromElement)&&(jt(O)||O[Fr]))break e;if((B||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,B?(O=t.relatedTarget||t.toElement,B=y,O=O?jt(O):null,O!==null&&(Ae=yt(O),O!==Ae||O.tag!==5&&O.tag!==6)&&(O=null)):(B=null,O=y),B!==O)){if(R=Ul,z="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(R=Hl,z="onPointerLeave",g="onPointerEnter",h="pointer"),Ae=B==null?w:Gt(B),v=O==null?w:Gt(O),w=new R(z,h+"leave",B,t,k),w.target=Ae,w.relatedTarget=v,z=null,jt(k)===y&&(R=new R(g,h+"enter",O,t,k),R.target=v,R.relatedTarget=Ae,z=R),Ae=z,B&&O)r:{for(R=B,g=O,h=0,v=R;v;v=Vt(v))h++;for(v=0,z=g;z;z=Vt(z))v++;for(;0<h-v;)R=Vt(R),h--;for(;0<v-h;)g=Vt(g),v--;for(;h--;){if(R===g||g!==null&&R===g.alternate)break r;R=Vt(R),g=Vt(g)}R=null}else R=null;B!==null&&xc(S,w,B,R,!1),O!==null&&Ae!==null&&xc(S,Ae,O,R,!0)}}e:{if(w=y?Gt(y):window,B=w.nodeName&&w.nodeName.toLowerCase(),B==="select"||B==="input"&&w.type==="file")var M=rf;else if(Kl(w))if(ql)M=sf;else{M=nf;var $=tf}else(B=w.nodeName)&&B.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(M=of);if(M&&(M=M(e,y))){Xl(S,M,t,k);break e}$&&$(e,w,y),e==="focusout"&&($=w._wrapperState)&&$.controlled&&w.type==="number"&&Di(w,"number",w.value)}switch($=y?Gt(y):window,e){case"focusin":(Kl($)||$.contentEditable==="true")&&(Ht=$,ms=y,On=null);break;case"focusout":On=ms=Ht=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,ic(S,t,k);break;case"selectionchange":if(cf)break;case"keydown":case"keyup":ic(S,t,k)}var V;if(us)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Wt?Gl(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&($l&&t.locale!=="ko"&&(Wt||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Wt&&(V=Ml()):(et=k,is="value"in et?et.value:et.textContent,Wt=!0)),$=_o(y,Y),0<$.length&&(Y=new Wl(Y,e,null,t,k),S.push({event:Y,listeners:$}),V?Y.data=V:(V=Yl(t),V!==null&&(Y.data=V)))),(V=Xp?qp(e,t):Zp(e,t))&&(y=_o(y,"onBeforeInput"),0<y.length&&(k=new Wl("onBeforeInput","beforeinput",null,t,k),S.push({event:k,listeners:y}),k.data=V))}hc(S,r)})}function Mn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function _o(e,r){for(var t=r+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=jn(e,t),a!=null&&o.unshift(Mn(e,a,s)),a=jn(e,r),a!=null&&o.push(Mn(e,a,s))),e=e.return}return o}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,r,t,o,s){for(var a=r._reactName,d=[];t!==null&&t!==o;){var p=t,f=p.alternate,y=p.stateNode;if(f!==null&&f===o)break;p.tag===5&&y!==null&&(p=y,s?(f=jn(t,a),f!=null&&d.unshift(Mn(t,f,p))):s||(f=jn(t,a),f!=null&&d.push(Mn(t,f,p)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var ff=/\r\n?/g,hf=/\u0000|\uFFFD/g;function gc(e){return(typeof e=="string"?e:""+e).replace(ff,`
`).replace(hf,"")}function Po(e,r,t){if(r=gc(r),gc(e)!==r&&t)throw Error(c(425))}function Bo(){}var ws=null,ks=null;function bs(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ss=typeof setTimeout=="function"?setTimeout:void 0,mf=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,xf=typeof queueMicrotask=="function"?queueMicrotask:typeof vc!="undefined"?function(e){return vc.resolve(null).then(e).catch(gf)}:Ss;function gf(e){setTimeout(function(){throw e})}function Cs(e,r){var t=r,o=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(o===0){e.removeChild(s),In(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=s}while(t);In(r)}function tt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function yc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Qt=Math.random().toString(36).slice(2),Br="__reactFiber$"+Qt,Dn="__reactProps$"+Qt,Fr="__reactContainer$"+Qt,Es="__reactEvents$"+Qt,vf="__reactListeners$"+Qt,yf="__reactHandles$"+Qt;function jt(e){var r=e[Br];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Fr]||t[Br]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=yc(e);e!==null;){if(t=e[Br])return t;e=yc(e)}return r}e=t,t=e.parentNode}return null}function Un(e){return e=e[Br]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Ao(e){return e[Dn]||null}var zs=[],Yt=-1;function nt(e){return{current:e}}function be(e){0>Yt||(e.current=zs[Yt],zs[Yt]=null,Yt--)}function we(e,r){Yt++,zs[Yt]=e.current,e.current=r}var ot={},Xe=nt(ot),nr=nt(!1),Nt=ot;function Kt(e,r){var t=e.type.contextTypes;if(!t)return ot;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=r[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function or(e){return e=e.childContextTypes,e!=null}function Oo(){be(nr),be(Xe)}function jc(e,r,t){if(Xe.current!==ot)throw Error(c(168));we(Xe,r),we(nr,t)}function Nc(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var s in o)if(!(s in r))throw Error(c(108,ue(e)||"Unknown",s));return P({},t,o)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,Nt=Xe.current,we(Xe,e),we(nr,nr.current),!0}function wc(e,r,t){var o=e.stateNode;if(!o)throw Error(c(169));t?(e=Nc(e,r,Nt),o.__reactInternalMemoizedMergedChildContext=e,be(nr),be(Xe),we(Xe,e)):be(nr),we(nr,t)}var Mr=null,Fo=!1,Is=!1;function kc(e){Mr===null?Mr=[e]:Mr.push(e)}function jf(e){Fo=!0,kc(e)}function it(){if(!Is&&Mr!==null){Is=!0;var e=0,r=ve;try{var t=Mr;for(ve=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Mr=null,Fo=!1}catch(s){throw Mr!==null&&(Mr=Mr.slice(e+1)),Sl(qi,it),s}finally{ve=r,Is=!1}}return null}var Xt=[],qt=0,Mo=null,Do=0,xr=[],gr=0,wt=null,Dr=1,Ur="";function kt(e,r){Xt[qt++]=Do,Xt[qt++]=Mo,Mo=e,Do=r}function bc(e,r,t){xr[gr++]=Dr,xr[gr++]=Ur,xr[gr++]=wt,wt=e;var o=Dr;e=Ur;var s=32-br(o)-1;o&=~(1<<s),t+=1;var a=32-br(r)+s;if(30<a){var d=s-s%5;a=(o&(1<<d)-1).toString(32),o>>=d,s-=d,Dr=1<<32-br(r)+s|t<<s|o,Ur=a+e}else Dr=1<<a|t<<s|o,Ur=e}function Ls(e){e.return!==null&&(kt(e,1),bc(e,1,0))}function Ts(e){for(;e===Mo;)Mo=Xt[--qt],Xt[qt]=null,Do=Xt[--qt],Xt[qt]=null;for(;e===wt;)wt=xr[--gr],xr[gr]=null,Ur=xr[--gr],xr[gr]=null,Dr=xr[--gr],xr[gr]=null}var ur=null,pr=null,Ee=!1,Cr=null;function Sc(e,r){var t=Nr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Cc(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ur=e,pr=tt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ur=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=wt!==null?{id:Dr,overflow:Ur}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Nr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ur=e,pr=null,!0):!1;default:return!1}}function _s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(Ee){var r=pr;if(r){var t=r;if(!Cc(e,r)){if(_s(e))throw Error(c(418));r=tt(t.nextSibling);var o=ur;r&&Cc(e,r)?Sc(o,t):(e.flags=e.flags&-4097|2,Ee=!1,ur=e)}}else{if(_s(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ee=!1,ur=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Uo(e){if(e!==ur)return!1;if(!Ee)return Ec(e),Ee=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!bs(e.type,e.memoizedProps)),r&&(r=pr)){if(_s(e))throw zc(),Error(c(418));for(;r;)Sc(e,r),r=tt(r.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){pr=tt(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=ur?tt(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=pr;e;)e=tt(e.nextSibling)}function Zt(){pr=ur=null,Ee=!1}function Bs(e){Cr===null?Cr=[e]:Cr.push(e)}var Nf=_.ReactCurrentBatchConfig;function Wn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var o=t.stateNode}if(!o)throw Error(c(147,e));var s=o,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var p=s.refs;d===null?delete p[a]:p[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function Wo(e,r){throw e=Object.prototype.toString.call(r),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Ic(e){var r=e._init;return r(e._payload)}function Lc(e){function r(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function t(g,h){if(!e)return null;for(;h!==null;)r(g,h),h=h.sibling;return null}function o(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(g,h){return g=ft(g,h),g.index=0,g.sibling=null,g}function a(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function p(g,h,v,z){return h===null||h.tag!==6?(h=Sa(v,g.mode,z),h.return=g,h):(h=s(h,v),h.return=g,h)}function f(g,h,v,z){var M=v.type;return M===T?k(g,h,v.props.children,z,v.key):h!==null&&(h.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ke&&Ic(M)===h.type)?(z=s(h,v.props),z.ref=Wn(g,h,v),z.return=g,z):(z=pi(v.type,v.key,v.props,null,g.mode,z),z.ref=Wn(g,h,v),z.return=g,z)}function y(g,h,v,z){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Ca(v,g.mode,z),h.return=g,h):(h=s(h,v.children||[]),h.return=g,h)}function k(g,h,v,z,M){return h===null||h.tag!==7?(h=Tt(v,g.mode,z,M),h.return=g,h):(h=s(h,v),h.return=g,h)}function S(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Sa(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case q:return v=pi(h.type,h.key,h.props,null,g.mode,v),v.ref=Wn(g,null,h),v.return=g,v;case H:return h=Ca(h,g.mode,v),h.return=g,h;case Ke:var z=h._init;return S(g,z(h._payload),v)}if(gn(h)||D(h))return h=Tt(h,g.mode,v,null),h.return=g,h;Wo(g,h)}return null}function w(g,h,v,z){var M=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:p(g,h,""+v,z);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return v.key===M?f(g,h,v,z):null;case H:return v.key===M?y(g,h,v,z):null;case Ke:return M=v._init,w(g,h,M(v._payload),z)}if(gn(v)||D(v))return M!==null?null:k(g,h,v,z,null);Wo(g,v)}return null}function B(g,h,v,z,M){if(typeof z=="string"&&z!==""||typeof z=="number")return g=g.get(v)||null,p(h,g,""+z,M);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case q:return g=g.get(z.key===null?v:z.key)||null,f(h,g,z,M);case H:return g=g.get(z.key===null?v:z.key)||null,y(h,g,z,M);case Ke:var $=z._init;return B(g,h,v,$(z._payload),M)}if(gn(z)||D(z))return g=g.get(v)||null,k(h,g,z,M,null);Wo(h,z)}return null}function O(g,h,v,z){for(var M=null,$=null,V=h,Y=h=0,He=null;V!==null&&Y<v.length;Y++){V.index>Y?(He=V,V=null):He=V.sibling;var fe=w(g,V,v[Y],z);if(fe===null){V===null&&(V=He);break}e&&V&&fe.alternate===null&&r(g,V),h=a(fe,h,Y),$===null?M=fe:$.sibling=fe,$=fe,V=He}if(Y===v.length)return t(g,V),Ee&&kt(g,Y),M;if(V===null){for(;Y<v.length;Y++)V=S(g,v[Y],z),V!==null&&(h=a(V,h,Y),$===null?M=V:$.sibling=V,$=V);return Ee&&kt(g,Y),M}for(V=o(g,V);Y<v.length;Y++)He=B(V,g,Y,v[Y],z),He!==null&&(e&&He.alternate!==null&&V.delete(He.key===null?Y:He.key),h=a(He,h,Y),$===null?M=He:$.sibling=He,$=He);return e&&V.forEach(function(ht){return r(g,ht)}),Ee&&kt(g,Y),M}function R(g,h,v,z){var M=D(v);if(typeof M!="function")throw Error(c(150));if(v=M.call(v),v==null)throw Error(c(151));for(var $=M=null,V=h,Y=h=0,He=null,fe=v.next();V!==null&&!fe.done;Y++,fe=v.next()){V.index>Y?(He=V,V=null):He=V.sibling;var ht=w(g,V,fe.value,z);if(ht===null){V===null&&(V=He);break}e&&V&&ht.alternate===null&&r(g,V),h=a(ht,h,Y),$===null?M=ht:$.sibling=ht,$=ht,V=He}if(fe.done)return t(g,V),Ee&&kt(g,Y),M;if(V===null){for(;!fe.done;Y++,fe=v.next())fe=S(g,fe.value,z),fe!==null&&(h=a(fe,h,Y),$===null?M=fe:$.sibling=fe,$=fe);return Ee&&kt(g,Y),M}for(V=o(g,V);!fe.done;Y++,fe=v.next())fe=B(V,g,Y,fe.value,z),fe!==null&&(e&&fe.alternate!==null&&V.delete(fe.key===null?Y:fe.key),h=a(fe,h,Y),$===null?M=fe:$.sibling=fe,$=fe);return e&&V.forEach(function(eh){return r(g,eh)}),Ee&&kt(g,Y),M}function Ae(g,h,v,z){if(typeof v=="object"&&v!==null&&v.type===T&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case q:e:{for(var M=v.key,$=h;$!==null;){if($.key===M){if(M=v.type,M===T){if($.tag===7){t(g,$.sibling),h=s($,v.props.children),h.return=g,g=h;break e}}else if($.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ke&&Ic(M)===$.type){t(g,$.sibling),h=s($,v.props),h.ref=Wn(g,$,v),h.return=g,g=h;break e}t(g,$);break}else r(g,$);$=$.sibling}v.type===T?(h=Tt(v.props.children,g.mode,z,v.key),h.return=g,g=h):(z=pi(v.type,v.key,v.props,null,g.mode,z),z.ref=Wn(g,h,v),z.return=g,g=z)}return d(g);case H:e:{for($=v.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(g,h.sibling),h=s(h,v.children||[]),h.return=g,g=h;break e}else{t(g,h);break}else r(g,h);h=h.sibling}h=Ca(v,g.mode,z),h.return=g,g=h}return d(g);case Ke:return $=v._init,Ae(g,h,$(v._payload),z)}if(gn(v))return O(g,h,v,z);if(D(v))return R(g,h,v,z);Wo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(g,h.sibling),h=s(h,v),h.return=g,g=h):(t(g,h),h=Sa(v,g.mode,z),h.return=g,g=h),d(g)):t(g,h)}return Ae}var Jt=Lc(!0),Tc=Lc(!1),Ho=nt(null),$o=null,en=null,As=null;function Os(){As=en=$o=null}function Rs(e){var r=Ho.current;be(Ho),e._currentValue=r}function Fs(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function rn(e,r){$o=e,As=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(ir=!0),e.firstContext=null)}function vr(e){var r=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:r,next:null},en===null){if($o===null)throw Error(c(308));en=e,$o.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return r}var bt=null;function Ms(e){bt===null?bt=[e]:bt.push(e)}function _c(e,r,t,o){var s=r.interleaved;return s===null?(t.next=t,Ms(r)):(t.next=s.next,s.next=t),r.interleaved=t,Wr(e,o)}function Wr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var st=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function at(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(pe&2)!==0){var s=o.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),o.pending=r,Wr(e,t)}return s=o.interleaved,s===null?(r.next=r,Ms(o)):(r.next=s.next,s.next=r),o.interleaved=r,Wr(e,t)}function Vo(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,es(e,t)}}function Bc(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=d:a=a.next=d,t=t.next}while(t!==null);a===null?s=a=r:a=a.next=r}else s=a=r;t={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Qo(e,r,t,o){var s=e.updateQueue;st=!1;var a=s.firstBaseUpdate,d=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var f=p,y=f.next;f.next=null,d===null?a=y:d.next=y,d=f;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==d&&(p===null?k.firstBaseUpdate=y:p.next=y,k.lastBaseUpdate=f))}if(a!==null){var S=s.baseState;d=0,k=y=f=null,p=a;do{var w=p.lane,B=p.eventTime;if((o&w)===w){k!==null&&(k=k.next={eventTime:B,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var O=e,R=p;switch(w=r,B=t,R.tag){case 1:if(O=R.payload,typeof O=="function"){S=O.call(B,S,w);break e}S=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=R.payload,w=typeof O=="function"?O.call(B,S,w):O,w==null)break e;S=P({},S,w);break e;case 2:st=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,w=s.effects,w===null?s.effects=[p]:w.push(p))}else B={eventTime:B,lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(y=k=B,f=S):k=k.next=B,d|=w;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;w=p,p=w.next,w.next=null,s.lastBaseUpdate=w,s.shared.pending=null}}while(!0);if(k===null&&(f=S),s.baseState=f,s.firstBaseUpdate=y,s.lastBaseUpdate=k,r=s.shared.interleaved,r!==null){s=r;do d|=s.lane,s=s.next;while(s!==r)}else a===null&&(s.shared.lanes=0);Et|=d,e.lanes=d,e.memoizedState=S}}function Ac(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],s=o.callback;if(s!==null){if(o.callback=null,o=t,typeof s!="function")throw Error(c(191,s));s.call(o)}}}var Hn={},Ar=nt(Hn),$n=nt(Hn),Vn=nt(Hn);function St(e){if(e===Hn)throw Error(c(174));return e}function Us(e,r){switch(we(Vn,r),we($n,e),we(Ar,Hn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Wi(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Wi(r,e)}be(Ar),we(Ar,r)}function tn(){be(Ar),be($n),be(Vn)}function Oc(e){St(Vn.current);var r=St(Ar.current),t=Wi(r,e.type);r!==t&&(we($n,e),we(Ar,t))}function Ws(e){$n.current===e&&(be(Ar),be($n))}var Ie=nt(0);function Go(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Hs=[];function $s(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var Yo=_.ReactCurrentDispatcher,Vs=_.ReactCurrentBatchConfig,Ct=0,Le=null,Fe=null,Ue=null,Ko=!1,Qn=!1,Gn=0,wf=0;function qe(){throw Error(c(321))}function Qs(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Sr(e[t],r[t]))return!1;return!0}function Gs(e,r,t,o,s,a){if(Ct=a,Le=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Yo.current=e===null||e.memoizedState===null?Cf:Ef,e=t(o,s),Qn){a=0;do{if(Qn=!1,Gn=0,25<=a)throw Error(c(301));a+=1,Ue=Fe=null,r.updateQueue=null,Yo.current=zf,e=t(o,s)}while(Qn)}if(Yo.current=Zo,r=Fe!==null&&Fe.next!==null,Ct=0,Ue=Fe=Le=null,Ko=!1,r)throw Error(c(300));return e}function Ys(){var e=Gn!==0;return Gn=0,e}function Or(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Le.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function yr(){if(Fe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var r=Ue===null?Le.memoizedState:Ue.next;if(r!==null)Ue=r,Fe=e;else{if(e===null)throw Error(c(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ue===null?Le.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Yn(e,r){return typeof r=="function"?r(e):r}function Ks(e){var r=yr(),t=r.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var o=Fe,s=o.baseQueue,a=t.pending;if(a!==null){if(s!==null){var d=s.next;s.next=a.next,a.next=d}o.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,o=o.baseState;var p=d=null,f=null,y=a;do{var k=y.lane;if((Ct&k)===k)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var S={lane:k,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(p=f=S,d=o):f=f.next=S,Le.lanes|=k,Et|=k}y=y.next}while(y!==null&&y!==a);f===null?d=o:f.next=p,Sr(o,r.memoizedState)||(ir=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=f,t.lastRenderedState=o}if(e=t.interleaved,e!==null){s=e;do a=s.lane,Le.lanes|=a,Et|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Xs(e){var r=yr(),t=r.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var o=t.dispatch,s=t.pending,a=r.memoizedState;if(s!==null){t.pending=null;var d=s=s.next;do a=e(a,d.action),d=d.next;while(d!==s);Sr(a,r.memoizedState)||(ir=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),t.lastRenderedState=a}return[a,o]}function Rc(){}function Fc(e,r){var t=Le,o=yr(),s=r(),a=!Sr(o.memoizedState,s);if(a&&(o.memoizedState=s,ir=!0),o=o.queue,qs(Uc.bind(null,t,o,e),[e]),o.getSnapshot!==r||a||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,Kn(9,Dc.bind(null,t,o,s,r),void 0,null),We===null)throw Error(c(349));(Ct&30)!==0||Mc(t,r,s)}return s}function Mc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Dc(e,r,t,o){r.value=t,r.getSnapshot=o,Wc(r)&&Hc(e)}function Uc(e,r,t){return t(function(){Wc(r)&&Hc(e)})}function Wc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Sr(e,t)}catch{return!0}}function Hc(e){var r=Wr(e,1);r!==null&&Lr(r,e,1,-1)}function $c(e){var r=Or();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},r.queue=e,e=e.dispatch=Sf.bind(null,Le,e),[r.memoizedState,e]}function Kn(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=Le.updateQueue,r===null?(r={lastEffect:null,stores:null},Le.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function Vc(){return yr().memoizedState}function Xo(e,r,t,o){var s=Or();Le.flags|=e,s.memoizedState=Kn(1|r,t,void 0,o===void 0?null:o)}function qo(e,r,t,o){var s=yr();o=o===void 0?null:o;var a=void 0;if(Fe!==null){var d=Fe.memoizedState;if(a=d.destroy,o!==null&&Qs(o,d.deps)){s.memoizedState=Kn(r,t,a,o);return}}Le.flags|=e,s.memoizedState=Kn(1|r,t,a,o)}function Qc(e,r){return Xo(8390656,8,e,r)}function qs(e,r){return qo(2048,8,e,r)}function Gc(e,r){return qo(4,2,e,r)}function Yc(e,r){return qo(4,4,e,r)}function Kc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Xc(e,r,t){return t=t!=null?t.concat([e]):null,qo(4,4,Kc.bind(null,r,e),t)}function Zs(){}function qc(e,r){var t=yr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Qs(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function Zc(e,r){var t=yr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Qs(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function Jc(e,r,t){return(Ct&21)===0?(e.baseState&&(e.baseState=!1,ir=!0),e.memoizedState=t):(Sr(t,r)||(t=Il(),Le.lanes|=t,Et|=t,e.baseState=!0),r)}function kf(e,r){var t=ve;ve=t!==0&&4>t?t:4,e(!0);var o=Vs.transition;Vs.transition={};try{e(!1),r()}finally{ve=t,Vs.transition=o}}function ed(){return yr().memoizedState}function bf(e,r,t){var o=ut(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},rd(e))td(r,t);else if(t=_c(e,r,t,o),t!==null){var s=tr();Lr(t,e,o,s),nd(t,r,o)}}function Sf(e,r,t){var o=ut(e),s={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(rd(e))td(r,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,p=a(d,t);if(s.hasEagerState=!0,s.eagerState=p,Sr(p,d)){var f=r.interleaved;f===null?(s.next=s,Ms(r)):(s.next=f.next,f.next=s),r.interleaved=s;return}}catch{}finally{}t=_c(e,r,s,o),t!==null&&(s=tr(),Lr(t,e,o,s),nd(t,r,o))}}function rd(e){var r=e.alternate;return e===Le||r!==null&&r===Le}function td(e,r){Qn=Ko=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function nd(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,es(e,t)}}var Zo={readContext:vr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Cf={readContext:vr,useCallback:function(e,r){return Or().memoizedState=[e,r===void 0?null:r],e},useContext:vr,useEffect:Qc,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Xo(4194308,4,Kc.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Xo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Xo(4,2,e,r)},useMemo:function(e,r){var t=Or();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Or();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=bf.bind(null,Le,e),[o.memoizedState,e]},useRef:function(e){var r=Or();return e={current:e},r.memoizedState=e},useState:$c,useDebugValue:Zs,useDeferredValue:function(e){return Or().memoizedState=e},useTransition:function(){var e=$c(!1),r=e[0];return e=kf.bind(null,e[1]),Or().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=Le,s=Or();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=r(),We===null)throw Error(c(349));(Ct&30)!==0||Mc(o,r,t)}s.memoizedState=t;var a={value:t,getSnapshot:r};return s.queue=a,Qc(Uc.bind(null,o,a,e),[e]),o.flags|=2048,Kn(9,Dc.bind(null,o,a,t,r),void 0,null),t},useId:function(){var e=Or(),r=We.identifierPrefix;if(Ee){var t=Ur,o=Dr;t=(o&~(1<<32-br(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=Gn++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=wf++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ef={readContext:vr,useCallback:qc,useContext:vr,useEffect:qs,useImperativeHandle:Xc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:Zc,useReducer:Ks,useRef:Vc,useState:function(){return Ks(Yn)},useDebugValue:Zs,useDeferredValue:function(e){var r=yr();return Jc(r,Fe.memoizedState,e)},useTransition:function(){var e=Ks(Yn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Rc,useSyncExternalStore:Fc,useId:ed,unstable_isNewReconciler:!1},zf={readContext:vr,useCallback:qc,useContext:vr,useEffect:qs,useImperativeHandle:Xc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:Zc,useReducer:Xs,useRef:Vc,useState:function(){return Xs(Yn)},useDebugValue:Zs,useDeferredValue:function(e){var r=yr();return Fe===null?r.memoizedState=e:Jc(r,Fe.memoizedState,e)},useTransition:function(){var e=Xs(Yn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Rc,useSyncExternalStore:Fc,useId:ed,unstable_isNewReconciler:!1};function Er(e,r){if(e&&e.defaultProps){r=P({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Js(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:P({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Jo={isMounted:function(e){return(e=e._reactInternals)?yt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=tr(),s=ut(e),a=Hr(o,s);a.payload=r,t!=null&&(a.callback=t),r=at(e,a,s),r!==null&&(Lr(r,e,s,o),Vo(r,e,s))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=tr(),s=ut(e),a=Hr(o,s);a.tag=1,a.payload=r,t!=null&&(a.callback=t),r=at(e,a,s),r!==null&&(Lr(r,e,s,o),Vo(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),o=ut(e),s=Hr(t,o);s.tag=2,r!=null&&(s.callback=r),r=at(e,s,o),r!==null&&(Lr(r,e,o,t),Vo(r,e,o))}};function od(e,r,t,o,s,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):r.prototype&&r.prototype.isPureReactComponent?!An(t,o)||!An(s,a):!0}function id(e,r,t){var o=!1,s=ot,a=r.contextType;return typeof a=="object"&&a!==null?a=vr(a):(s=or(r)?Nt:Xe.current,o=r.contextTypes,a=(o=o!=null)?Kt(e,s):ot),r=new r(t,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jo,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),r}function sd(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&Jo.enqueueReplaceState(r,r.state,null)}function ea(e,r,t,o){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},Ds(e);var a=r.contextType;typeof a=="object"&&a!==null?s.context=vr(a):(a=or(r)?Nt:Xe.current,s.context=Kt(e,a)),s.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Js(e,r,a,t),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Jo.enqueueReplaceState(s,s.state,null),Qo(e,t,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,r){try{var t="",o=r;do t+=ae(o),o=o.return;while(o);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:s,digest:null}}function ra(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function ta(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var If=typeof WeakMap=="function"?WeakMap:Map;function ad(e,r,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){si||(si=!0,ga=o),ta(e,r)},t}function ld(e,r,t){t=Hr(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=r.value;t.payload=function(){return o(s)},t.callback=function(){ta(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){ta(e,r),typeof o!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function cd(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new If;var s=new Set;o.set(r,s)}else s=o.get(r),s===void 0&&(s=new Set,o.set(r,s));s.has(t)||(s.add(t),e=Hf.bind(null,e,r,t),r.then(e,e))}function dd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ud(e,r,t,o,s){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Hr(-1,1),r.tag=2,at(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Lf=_.ReactCurrentOwner,ir=!1;function rr(e,r,t,o){r.child=e===null?Tc(r,null,t,o):Jt(r,e.child,t,o)}function pd(e,r,t,o,s){t=t.render;var a=r.ref;return rn(r,s),o=Gs(e,r,t,o,a,s),t=Ys(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,$r(e,r,s)):(Ee&&t&&Ls(r),r.flags|=1,rr(e,r,o,s),r.child)}function fd(e,r,t,o,s){if(e===null){var a=t.type;return typeof a=="function"&&!ba(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=a,hd(e,r,a,o,s)):(e=pi(t.type,null,o,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&s)===0){var d=a.memoizedProps;if(t=t.compare,t=t!==null?t:An,t(d,o)&&e.ref===r.ref)return $r(e,r,s)}return r.flags|=1,e=ft(a,o),e.ref=r.ref,e.return=r,r.child=e}function hd(e,r,t,o,s){if(e!==null){var a=e.memoizedProps;if(An(a,o)&&e.ref===r.ref)if(ir=!1,r.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(ir=!0);else return r.lanes=e.lanes,$r(e,r,s)}return na(e,r,t,o,s)}function md(e,r,t){var o=r.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(sn,fr),fr|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,we(sn,fr),fr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:t,we(sn,fr),fr|=o}else a!==null?(o=a.baseLanes|t,r.memoizedState=null):o=t,we(sn,fr),fr|=o;return rr(e,r,s,t),r.child}function xd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function na(e,r,t,o,s){var a=or(t)?Nt:Xe.current;return a=Kt(r,a),rn(r,s),t=Gs(e,r,t,o,a,s),o=Ys(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,$r(e,r,s)):(Ee&&o&&Ls(r),r.flags|=1,rr(e,r,t,s),r.child)}function gd(e,r,t,o,s){if(or(t)){var a=!0;Ro(r)}else a=!1;if(rn(r,s),r.stateNode===null)ri(e,r),id(r,t,o),ea(r,t,o,s),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var f=d.context,y=t.contextType;typeof y=="object"&&y!==null?y=vr(y):(y=or(t)?Nt:Xe.current,y=Kt(r,y));var k=t.getDerivedStateFromProps,S=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||f!==y)&&sd(r,d,o,y),st=!1;var w=r.memoizedState;d.state=w,Qo(r,o,d,s),f=r.memoizedState,p!==o||w!==f||nr.current||st?(typeof k=="function"&&(Js(r,t,k,o),f=r.memoizedState),(p=st||od(r,t,p,o,w,f,y))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=f),d.props=o,d.state=f,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Pc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Er(r.type,p),d.props=y,S=r.pendingProps,w=d.context,f=t.contextType,typeof f=="object"&&f!==null?f=vr(f):(f=or(t)?Nt:Xe.current,f=Kt(r,f));var B=t.getDerivedStateFromProps;(k=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==S||w!==f)&&sd(r,d,o,f),st=!1,w=r.memoizedState,d.state=w,Qo(r,o,d,s);var O=r.memoizedState;p!==S||w!==O||nr.current||st?(typeof B=="function"&&(Js(r,t,B,o),O=r.memoizedState),(y=st||od(r,t,y,o,w,O,f)||!1)?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,O,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,O,f)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=O),d.props=o,d.state=O,d.context=f,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),o=!1)}return oa(e,r,t,o,a,s)}function oa(e,r,t,o,s,a){xd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return s&&wc(r,t,!1),$r(e,r,a);o=r.stateNode,Lf.current=r;var p=d&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=Jt(r,e.child,null,a),r.child=Jt(r,null,p,a)):rr(e,r,p,a),r.memoizedState=o.state,s&&wc(r,t,!0),r.child}function vd(e){var r=e.stateNode;r.pendingContext?jc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&jc(e,r.context,!1),Us(e,r.containerInfo)}function yd(e,r,t,o,s){return Zt(),Bs(s),r.flags|=256,rr(e,r,t,o),r.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function jd(e,r,t){var o=r.pendingProps,s=Ie.current,a=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(s&2)!==0),p?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),we(Ie,s&1),e===null)return Ps(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=r.mode,a=r.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=fi(d,o,0,null),e=Tt(e,o,t,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=sa(t),r.memoizedState=ia,e):aa(r,d));if(s=e.memoizedState,s!==null&&(p=s.dehydrated,p!==null))return Tf(e,r,d,o,p,s,t);if(a){a=o.fallback,d=r.mode,s=e.child,p=s.sibling;var f={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==s?(o=r.child,o.childLanes=0,o.pendingProps=f,r.deletions=null):(o=ft(s,f),o.subtreeFlags=s.subtreeFlags&14680064),p!==null?a=ft(p,a):(a=Tt(a,d,t,null),a.flags|=2),a.return=r,o.return=r,o.sibling=a,r.child=o,o=a,a=r.child,d=e.child.memoizedState,d=d===null?sa(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~t,r.memoizedState=ia,o}return a=e.child,e=a.sibling,o=ft(a,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function aa(e,r){return r=fi({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ei(e,r,t,o){return o!==null&&Bs(o),Jt(r,e.child,null,t),e=aa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Tf(e,r,t,o,s,a,d){if(t)return r.flags&256?(r.flags&=-257,o=ra(Error(c(422))),ei(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=o.fallback,s=r.mode,o=fi({mode:"visible",children:o.children},s,0,null),a=Tt(a,s,d,null),a.flags|=2,o.return=r,a.return=r,o.sibling=a,r.child=o,(r.mode&1)!==0&&Jt(r,e.child,null,d),r.child.memoizedState=sa(d),r.memoizedState=ia,a);if((r.mode&1)===0)return ei(e,r,d,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(c(419)),o=ra(a,o,void 0),ei(e,r,d,o)}if(p=(d&e.childLanes)!==0,ir||p){if(o=We,o!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|d))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Wr(e,s),Lr(o,e,s,-1))}return ka(),o=ra(Error(c(421))),ei(e,r,d,o)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=$f.bind(null,e),s._reactRetry=r,null):(e=a.treeContext,pr=tt(s.nextSibling),ur=r,Ee=!0,Cr=null,e!==null&&(xr[gr++]=Dr,xr[gr++]=Ur,xr[gr++]=wt,Dr=e.id,Ur=e.overflow,wt=r),r=aa(r,o.children),r.flags|=4096,r)}function Nd(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Fs(e.return,r,t)}function la(e,r,t,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:s}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=t,a.tailMode=s)}function wd(e,r,t){var o=r.pendingProps,s=o.revealOrder,a=o.tail;if(rr(e,r,o.children,t),o=Ie.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,t,r);else if(e.tag===19)Nd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(we(Ie,o),(r.mode&1)===0)r.memoizedState=null;else switch(s){case"forwards":for(t=r.child,s=null;t!==null;)e=t.alternate,e!==null&&Go(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=r.child,r.child=null):(s=t.sibling,t.sibling=null),la(r,!1,s,t,a);break;case"backwards":for(t=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&Go(e)===null){r.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}la(r,!0,t,null,a);break;case"together":la(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ri(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function $r(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Et|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(c(153));if(r.child!==null){for(e=r.child,t=ft(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=ft(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function _f(e,r,t){switch(r.tag){case 3:vd(r),Zt();break;case 5:Oc(r);break;case 1:or(r.type)&&Ro(r);break;case 4:Us(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,s=r.memoizedProps.value;we(Ho,o._currentValue),o._currentValue=s;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(we(Ie,Ie.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?jd(e,r,t):(we(Ie,Ie.current&1),e=$r(e,r,t),e!==null?e.sibling:null);we(Ie,Ie.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return wd(e,r,t);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Ie,Ie.current),o)break;return null;case 22:case 23:return r.lanes=0,md(e,r,t)}return $r(e,r,t)}var kd,ca,bd,Sd;kd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ca=function(){},bd=function(e,r,t,o){var s=e.memoizedProps;if(s!==o){e=r.stateNode,St(Ar.current);var a=null;switch(t){case"input":s=Fi(e,s),o=Fi(e,o),a=[];break;case"select":s=P({},s,{value:void 0}),o=P({},o,{value:void 0}),a=[];break;case"textarea":s=Ui(e,s),o=Ui(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Bo)}Hi(t,o);var d;t=null;for(y in s)if(!o.hasOwnProperty(y)&&s.hasOwnProperty(y)&&s[y]!=null)if(y==="style"){var p=s[y];for(d in p)p.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in o){var f=o[y];if(p=s!=null?s[y]:void 0,o.hasOwnProperty(y)&&f!==p&&(f!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in f)f.hasOwnProperty(d)&&p[d]!==f[d]&&(t||(t={}),t[d]=f[d])}else t||(a||(a=[]),a.push(y,t)),t=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(a=a||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&ke("scroll",e),a||p===f||(a=[])):(a=a||[]).push(y,f))}t&&(a=a||[]).push("style",t);var y=a;(r.updateQueue=y)&&(r.flags|=4)}},Sd=function(e,r,t,o){t!==o&&(r.flags|=4)};function Xn(e,r){if(!Ee)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function Pf(e,r,t){var o=r.pendingProps;switch(Ts(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return or(r.type)&&Oo(),Ze(r),null;case 3:return o=r.stateNode,tn(),be(nr),be(Xe),$s(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Uo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cr!==null&&(ja(Cr),Cr=null))),ca(e,r),Ze(r),null;case 5:Ws(r);var s=St(Vn.current);if(t=r.type,e!==null&&r.stateNode!=null)bd(e,r,t,o,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(c(166));return Ze(r),null}if(e=St(Ar.current),Uo(r)){o=r.stateNode,t=r.type;var a=r.memoizedProps;switch(o[Br]=r,o[Dn]=a,e=(r.mode&1)!==0,t){case"dialog":ke("cancel",o),ke("close",o);break;case"iframe":case"object":case"embed":ke("load",o);break;case"video":case"audio":for(s=0;s<Rn.length;s++)ke(Rn[s],o);break;case"source":ke("error",o);break;case"img":case"image":case"link":ke("error",o),ke("load",o);break;case"details":ke("toggle",o);break;case"input":il(o,a),ke("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},ke("invalid",o);break;case"textarea":ll(o,a),ke("invalid",o)}Hi(t,a),s=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),s=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),s=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&ke("scroll",o)}switch(t){case"input":Kr(o),al(o,a,!0);break;case"textarea":Kr(o),dl(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Bo)}o=s,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ul(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(t,{is:o.is}):(e=d.createElement(t),t==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,t),e[Br]=r,e[Dn]=o,kd(e,r,!1,!1),r.stateNode=e;e:{switch(d=$i(t,o),t){case"dialog":ke("cancel",e),ke("close",e),s=o;break;case"iframe":case"object":case"embed":ke("load",e),s=o;break;case"video":case"audio":for(s=0;s<Rn.length;s++)ke(Rn[s],e);s=o;break;case"source":ke("error",e),s=o;break;case"img":case"image":case"link":ke("error",e),ke("load",e),s=o;break;case"details":ke("toggle",e),s=o;break;case"input":il(e,o),s=Fi(e,o),ke("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=P({},o,{value:void 0}),ke("invalid",e);break;case"textarea":ll(e,o),s=Ui(e,o),ke("invalid",e);break;default:s=o}Hi(t,s),p=s;for(a in p)if(p.hasOwnProperty(a)){var f=p[a];a==="style"?hl(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&pl(e,f)):a==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&vn(e,f):typeof f=="number"&&vn(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?f!=null&&a==="onScroll"&&ke("scroll",e):f!=null&&ne(e,a,f,d))}switch(t){case"input":Kr(e),al(e,o,!1);break;case"textarea":Kr(e),dl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ce(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Rt(e,!!o.multiple,a,!1):o.defaultValue!=null&&Rt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Bo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ze(r),null;case 6:if(e&&r.stateNode!=null)Sd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(c(166));if(t=St(Vn.current),St(Ar.current),Uo(r)){if(o=r.stateNode,t=r.memoizedProps,o[Br]=r,(a=o.nodeValue!==t)&&(e=ur,e!==null))switch(e.tag){case 3:Po(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(o.nodeValue,t,(e.mode&1)!==0)}a&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Br]=r,r.stateNode=o}return Ze(r),null;case 13:if(be(Ie),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)zc(),Zt(),r.flags|=98560,a=!1;else if(a=Uo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Br]=r}else Zt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),a=!1}else Cr!==null&&(ja(Cr),Cr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Ie.current&1)!==0?Me===0&&(Me=3):ka())),r.updateQueue!==null&&(r.flags|=4),Ze(r),null);case 4:return tn(),ca(e,r),e===null&&Fn(r.stateNode.containerInfo),Ze(r),null;case 10:return Rs(r.type._context),Ze(r),null;case 17:return or(r.type)&&Oo(),Ze(r),null;case 19:if(be(Ie),a=r.memoizedState,a===null)return Ze(r),null;if(o=(r.flags&128)!==0,d=a.rendering,d===null)if(o)Xn(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Go(e),d!==null){for(r.flags|=128,Xn(a,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)a=t,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return we(Ie,Ie.current&1|2),r.child}e=e.sibling}a.tail!==null&&Be()>an&&(r.flags|=128,o=!0,Xn(a,!1),r.lanes=4194304)}else{if(!o)if(e=Go(d),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Xn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ee)return Ze(r),null}else 2*Be()-a.renderingStartTime>an&&t!==1073741824&&(r.flags|=128,o=!0,Xn(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(t=a.last,t!==null?t.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Be(),r.sibling=null,t=Ie.current,we(Ie,o?t&1|2:t&1),r):(Ze(r),null);case 22:case 23:return wa(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(fr&1073741824)!==0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),null;case 24:return null;case 25:return null}throw Error(c(156,r.tag))}function Bf(e,r){switch(Ts(r),r.tag){case 1:return or(r.type)&&Oo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return tn(),be(nr),be(Xe),$s(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Ws(r),null;case 13:if(be(Ie),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(c(340));Zt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return be(Ie),null;case 4:return tn(),null;case 10:return Rs(r.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var ti=!1,Je=!1,Af=typeof WeakSet=="function"?WeakSet:Set,A=null;function on(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){_e(e,r,o)}else t.current=null}function da(e,r,t){try{t()}catch(o){_e(e,r,o)}}var Cd=!1;function Of(e,r){if(ws=wo,e=oc(),hs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var d=0,p=-1,f=-1,y=0,k=0,S=e,w=null;r:for(;;){for(var B;S!==t||s!==0&&S.nodeType!==3||(p=d+s),S!==a||o!==0&&S.nodeType!==3||(f=d+o),S.nodeType===3&&(d+=S.nodeValue.length),(B=S.firstChild)!==null;)w=S,S=B;for(;;){if(S===e)break r;if(w===t&&++y===s&&(p=d),w===a&&++k===o&&(f=d),(B=S.nextSibling)!==null)break;S=w,w=S.parentNode}S=B}t=p===-1||f===-1?null:{start:p,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(ks={focusedElem:e,selectionRange:t},wo=!1,A=r;A!==null;)if(r=A,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,A=e;else for(;A!==null;){r=A;try{var O=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var R=O.memoizedProps,Ae=O.memoizedState,g=r.stateNode,h=g.getSnapshotBeforeUpdate(r.elementType===r.type?R:Er(r.type,R),Ae);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(z){_e(r,r.return,z)}if(e=r.sibling,e!==null){e.return=r.return,A=e;break}A=r.return}return O=Cd,Cd=!1,O}function qn(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&da(r,t,a)}s=s.next}while(s!==o)}}function ni(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function ua(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Ed(e){var r=e.alternate;r!==null&&(e.alternate=null,Ed(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Br],delete r[Dn],delete r[Es],delete r[vf],delete r[yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Bo));else if(o!==4&&(e=e.child,e!==null))for(pa(e,r,t),e=e.sibling;e!==null;)pa(e,r,t),e=e.sibling}function fa(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(fa(e,r,t),e=e.sibling;e!==null;)fa(e,r,t),e=e.sibling}var $e=null,zr=!1;function lt(e,r,t){for(t=t.child;t!==null;)Ld(e,r,t),t=t.sibling}function Ld(e,r,t){if(Pr&&typeof Pr.onCommitFiberUnmount=="function")try{Pr.onCommitFiberUnmount(xo,t)}catch{}switch(t.tag){case 5:Je||on(t,r);case 6:var o=$e,s=zr;$e=null,lt(e,r,t),$e=o,zr=s,$e!==null&&(zr?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(zr?(e=$e,t=t.stateNode,e.nodeType===8?Cs(e.parentNode,t):e.nodeType===1&&Cs(e,t),In(e)):Cs($e,t.stateNode));break;case 4:o=$e,s=zr,$e=t.stateNode.containerInfo,zr=!0,lt(e,r,t),$e=o,zr=s;break;case 0:case 11:case 14:case 15:if(!Je&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&da(t,r,d),s=s.next}while(s!==o)}lt(e,r,t);break;case 1:if(!Je&&(on(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(p){_e(t,r,p)}lt(e,r,t);break;case 21:lt(e,r,t);break;case 22:t.mode&1?(Je=(o=Je)||t.memoizedState!==null,lt(e,r,t),Je=o):lt(e,r,t);break;default:lt(e,r,t)}}function Td(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Af),r.forEach(function(o){var s=Vf.bind(null,e,o);t.has(o)||(t.add(o),o.then(s,s))})}}function Ir(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var s=t[o];try{var a=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:$e=p.stateNode,zr=!1;break e;case 3:$e=p.stateNode.containerInfo,zr=!0;break e;case 4:$e=p.stateNode.containerInfo,zr=!0;break e}p=p.return}if($e===null)throw Error(c(160));Ld(a,d,s),$e=null,zr=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(y){_e(s,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)_d(r,e),r=r.sibling}function _d(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ir(r,e),Rr(e),o&4){try{qn(3,e,e.return),ni(3,e)}catch(R){_e(e,e.return,R)}try{qn(5,e,e.return)}catch(R){_e(e,e.return,R)}}break;case 1:Ir(r,e),Rr(e),o&512&&t!==null&&on(t,t.return);break;case 5:if(Ir(r,e),Rr(e),o&512&&t!==null&&on(t,t.return),e.flags&32){var s=e.stateNode;try{vn(s,"")}catch(R){_e(e,e.return,R)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,d=t!==null?t.memoizedProps:a,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&sl(s,a),$i(p,d);var y=$i(p,a);for(d=0;d<f.length;d+=2){var k=f[d],S=f[d+1];k==="style"?hl(s,S):k==="dangerouslySetInnerHTML"?pl(s,S):k==="children"?vn(s,S):ne(s,k,S,y)}switch(p){case"input":Mi(s,a);break;case"textarea":cl(s,a);break;case"select":var w=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var B=a.value;B!=null?Rt(s,!!a.multiple,B,!1):w!==!!a.multiple&&(a.defaultValue!=null?Rt(s,!!a.multiple,a.defaultValue,!0):Rt(s,!!a.multiple,a.multiple?[]:"",!1))}s[Dn]=a}catch(R){_e(e,e.return,R)}}break;case 6:if(Ir(r,e),Rr(e),o&4){if(e.stateNode===null)throw Error(c(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(R){_e(e,e.return,R)}}break;case 3:if(Ir(r,e),Rr(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{In(r.containerInfo)}catch(R){_e(e,e.return,R)}break;case 4:Ir(r,e),Rr(e);break;case 13:Ir(r,e),Rr(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(xa=Be())),o&4&&Td(e);break;case 22:if(k=t!==null&&t.memoizedState!==null,e.mode&1?(Je=(y=Je)||k,Ir(r,e),Je=y):Ir(r,e),Rr(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!k&&(e.mode&1)!==0)for(A=e,k=e.child;k!==null;){for(S=A=k;A!==null;){switch(w=A,B=w.child,w.tag){case 0:case 11:case 14:case 15:qn(4,w,w.return);break;case 1:on(w,w.return);var O=w.stateNode;if(typeof O.componentWillUnmount=="function"){o=w,t=w.return;try{r=o,O.props=r.memoizedProps,O.state=r.memoizedState,O.componentWillUnmount()}catch(R){_e(o,t,R)}}break;case 5:on(w,w.return);break;case 22:if(w.memoizedState!==null){Ad(S);continue}}B!==null?(B.return=w,A=B):Ad(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{s=S.stateNode,y?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=S.stateNode,f=S.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=fl("display",d))}catch(R){_e(e,e.return,R)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(R){_e(e,e.return,R)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Ir(r,e),Rr(e),o&4&&Td(e);break;case 21:break;default:Ir(r,e),Rr(e)}}function Rr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(zd(t)){var o=t;break e}t=t.return}throw Error(c(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(vn(s,""),o.flags&=-33);var a=Id(e);fa(e,a,s);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Id(e);pa(e,p,d);break;default:throw Error(c(161))}}catch(f){_e(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Rf(e,r,t){A=e,Pd(e)}function Pd(e,r,t){for(var o=(e.mode&1)!==0;A!==null;){var s=A,a=s.child;if(s.tag===22&&o){var d=s.memoizedState!==null||ti;if(!d){var p=s.alternate,f=p!==null&&p.memoizedState!==null||Je;p=ti;var y=Je;if(ti=d,(Je=f)&&!y)for(A=s;A!==null;)d=A,f=d.child,d.tag===22&&d.memoizedState!==null?Od(s):f!==null?(f.return=d,A=f):Od(s);for(;a!==null;)A=a,Pd(a),a=a.sibling;A=s,ti=p,Je=y}Bd(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,A=a):Bd(e)}}function Bd(e){for(;A!==null;){var r=A;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Je||ni(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Je)if(t===null)o.componentDidMount();else{var s=r.elementType===r.type?t.memoizedProps:Er(r.type,t.memoizedProps);o.componentDidUpdate(s,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Ac(r,a,o);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Ac(r,d,t)}break;case 5:var p=r.stateNode;if(t===null&&r.flags&4){t=p;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var k=y.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&In(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Je||r.flags&512&&ua(r)}catch(w){_e(r,r.return,w)}}if(r===e){A=null;break}if(t=r.sibling,t!==null){t.return=r.return,A=t;break}A=r.return}}function Ad(e){for(;A!==null;){var r=A;if(r===e){A=null;break}var t=r.sibling;if(t!==null){t.return=r.return,A=t;break}A=r.return}}function Od(e){for(;A!==null;){var r=A;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{ni(4,r)}catch(f){_e(r,t,f)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var s=r.return;try{o.componentDidMount()}catch(f){_e(r,s,f)}}var a=r.return;try{ua(r)}catch(f){_e(r,a,f)}break;case 5:var d=r.return;try{ua(r)}catch(f){_e(r,d,f)}}}catch(f){_e(r,r.return,f)}if(r===e){A=null;break}var p=r.sibling;if(p!==null){p.return=r.return,A=p;break}A=r.return}}var Ff=Math.ceil,oi=_.ReactCurrentDispatcher,ha=_.ReactCurrentOwner,jr=_.ReactCurrentBatchConfig,pe=0,We=null,Oe=null,Ve=0,fr=0,sn=nt(0),Me=0,Zn=null,Et=0,ii=0,ma=0,Jn=null,sr=null,xa=0,an=1/0,Vr=null,si=!1,ga=null,ct=null,ai=!1,dt=null,li=0,eo=0,va=null,ci=-1,di=0;function tr(){return(pe&6)!==0?Be():ci!==-1?ci:ci=Be()}function ut(e){return(e.mode&1)===0?1:(pe&2)!==0&&Ve!==0?Ve&-Ve:Nf.transition!==null?(di===0&&(di=Il()),di):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Fl(e.type)),e)}function Lr(e,r,t,o){if(50<eo)throw eo=0,va=null,Error(c(185));bn(e,t,o),((pe&2)===0||e!==We)&&(e===We&&((pe&2)===0&&(ii|=t),Me===4&&pt(e,Ve)),ar(e,o),t===1&&pe===0&&(r.mode&1)===0&&(an=Be()+500,Fo&&it()))}function ar(e,r){var t=e.callbackNode;jp(e,r);var o=yo(e,e===We?Ve:0);if(o===0)t!==null&&Cl(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&Cl(t),r===1)e.tag===0?jf(Fd.bind(null,e)):kc(Fd.bind(null,e)),xf(function(){(pe&6)===0&&it()}),t=null;else{switch(Ll(o)){case 1:t=qi;break;case 4:t=El;break;case 16:t=mo;break;case 536870912:t=zl;break;default:t=mo}t=Qd(t,Rd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Rd(e,r){if(ci=-1,di=0,(pe&6)!==0)throw Error(c(327));var t=e.callbackNode;if(ln()&&e.callbackNode!==t)return null;var o=yo(e,e===We?Ve:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=ui(e,o);else{r=o;var s=pe;pe|=2;var a=Dd();(We!==e||Ve!==r)&&(Vr=null,an=Be()+500,It(e,r));do try{Uf();break}catch(p){Md(e,p)}while(!0);Os(),oi.current=a,pe=s,Oe!==null?r=0:(We=null,Ve=0,r=Me)}if(r!==0){if(r===2&&(s=Zi(e),s!==0&&(o=s,r=ya(e,s))),r===1)throw t=Zn,It(e,0),pt(e,o),ar(e,Be()),t;if(r===6)pt(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Mf(s)&&(r=ui(e,o),r===2&&(a=Zi(e),a!==0&&(o=a,r=ya(e,a))),r===1))throw t=Zn,It(e,0),pt(e,o),ar(e,Be()),t;switch(e.finishedWork=s,e.finishedLanes=o,r){case 0:case 1:throw Error(c(345));case 2:Lt(e,sr,Vr);break;case 3:if(pt(e,o),(o&130023424)===o&&(r=xa+500-Be(),10<r)){if(yo(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){tr(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ss(Lt.bind(null,e,sr,Vr),r);break}Lt(e,sr,Vr);break;case 4:if(pt(e,o),(o&4194240)===o)break;for(r=e.eventTimes,s=-1;0<o;){var d=31-br(o);a=1<<d,d=r[d],d>s&&(s=d),o&=~a}if(o=s,o=Be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ff(o/1960))-o,10<o){e.timeoutHandle=Ss(Lt.bind(null,e,sr,Vr),o);break}Lt(e,sr,Vr);break;case 5:Lt(e,sr,Vr);break;default:throw Error(c(329))}}}return ar(e,Be()),e.callbackNode===t?Rd.bind(null,e):null}function ya(e,r){var t=Jn;return e.current.memoizedState.isDehydrated&&(It(e,r).flags|=256),e=ui(e,r),e!==2&&(r=sr,sr=t,r!==null&&ja(r)),e}function ja(e){sr===null?sr=e:sr.push.apply(sr,e)}function Mf(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var s=t[o],a=s.getSnapshot;s=s.value;try{if(!Sr(a(),s))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pt(e,r){for(r&=~ma,r&=~ii,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-br(r),o=1<<t;e[t]=-1,r&=~o}}function Fd(e){if((pe&6)!==0)throw Error(c(327));ln();var r=yo(e,0);if((r&1)===0)return ar(e,Be()),null;var t=ui(e,r);if(e.tag!==0&&t===2){var o=Zi(e);o!==0&&(r=o,t=ya(e,o))}if(t===1)throw t=Zn,It(e,0),pt(e,r),ar(e,Be()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Lt(e,sr,Vr),ar(e,Be()),null}function Na(e,r){var t=pe;pe|=1;try{return e(r)}finally{pe=t,pe===0&&(an=Be()+500,Fo&&it())}}function zt(e){dt!==null&&dt.tag===0&&(pe&6)===0&&ln();var r=pe;pe|=1;var t=jr.transition,o=ve;try{if(jr.transition=null,ve=1,e)return e()}finally{ve=o,jr.transition=t,pe=r,(pe&6)===0&&it()}}function wa(){fr=sn.current,be(sn)}function It(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,mf(t)),Oe!==null)for(t=Oe.return;t!==null;){var o=t;switch(Ts(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Oo();break;case 3:tn(),be(nr),be(Xe),$s();break;case 5:Ws(o);break;case 4:tn();break;case 13:be(Ie);break;case 19:be(Ie);break;case 10:Rs(o.type._context);break;case 22:case 23:wa()}t=t.return}if(We=e,Oe=e=ft(e.current,null),Ve=fr=r,Me=0,Zn=null,ma=ii=Et=0,sr=Jn=null,bt!==null){for(r=0;r<bt.length;r++)if(t=bt[r],o=t.interleaved,o!==null){t.interleaved=null;var s=o.next,a=t.pending;if(a!==null){var d=a.next;a.next=s,o.next=d}t.pending=o}bt=null}return e}function Md(e,r){do{var t=Oe;try{if(Os(),Yo.current=Zo,Ko){for(var o=Le.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ko=!1}if(Ct=0,Ue=Fe=Le=null,Qn=!1,Gn=0,ha.current=null,t===null||t.return===null){Me=1,Zn=r,Oe=null;break}e:{var a=e,d=t.return,p=t,f=r;if(r=Ve,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,k=p,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var B=dd(d);if(B!==null){B.flags&=-257,ud(B,d,p,a,r),B.mode&1&&cd(a,y,r),r=B,f=y;var O=r.updateQueue;if(O===null){var R=new Set;R.add(f),r.updateQueue=R}else O.add(f);break e}else{if((r&1)===0){cd(a,y,r),ka();break e}f=Error(c(426))}}else if(Ee&&p.mode&1){var Ae=dd(d);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),ud(Ae,d,p,a,r),Bs(nn(f,p));break e}}a=f=nn(f,p),Me!==4&&(Me=2),Jn===null?Jn=[a]:Jn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var g=ad(a,f,r);Bc(a,g);break e;case 1:p=f;var h=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ct===null||!ct.has(v)))){a.flags|=65536,r&=-r,a.lanes|=r;var z=ld(a,p,r);Bc(a,z);break e}}a=a.return}while(a!==null)}Wd(t)}catch(M){r=M,Oe===t&&t!==null&&(Oe=t=t.return);continue}break}while(!0)}function Dd(){var e=oi.current;return oi.current=Zo,e===null?Zo:e}function ka(){(Me===0||Me===3||Me===2)&&(Me=4),We===null||(Et&268435455)===0&&(ii&268435455)===0||pt(We,Ve)}function ui(e,r){var t=pe;pe|=2;var o=Dd();(We!==e||Ve!==r)&&(Vr=null,It(e,r));do try{Df();break}catch(s){Md(e,s)}while(!0);if(Os(),pe=t,oi.current=o,Oe!==null)throw Error(c(261));return We=null,Ve=0,Me}function Df(){for(;Oe!==null;)Ud(Oe)}function Uf(){for(;Oe!==null&&!up();)Ud(Oe)}function Ud(e){var r=Vd(e.alternate,e,fr);e.memoizedProps=e.pendingProps,r===null?Wd(e):Oe=r,ha.current=null}function Wd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Pf(t,r,fr),t!==null){Oe=t;return}}else{if(t=Bf(t,r),t!==null){t.flags&=32767,Oe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Oe=null;return}}if(r=r.sibling,r!==null){Oe=r;return}Oe=r=e}while(r!==null);Me===0&&(Me=5)}function Lt(e,r,t){var o=ve,s=jr.transition;try{jr.transition=null,ve=1,Wf(e,r,t,o)}finally{jr.transition=s,ve=o}return null}function Wf(e,r,t,o){do ln();while(dt!==null);if((pe&6)!==0)throw Error(c(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Np(e,a),e===We&&(Oe=We=null,Ve=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ai||(ai=!0,Qd(mo,function(){return ln(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=jr.transition,jr.transition=null;var d=ve;ve=1;var p=pe;pe|=4,ha.current=null,Of(e,t),_d(t,e),lf(ks),wo=!!ws,ks=ws=null,e.current=t,Rf(t),pp(),pe=p,ve=d,jr.transition=a}else e.current=t;if(ai&&(ai=!1,dt=e,li=s),a=e.pendingLanes,a===0&&(ct=null),mp(t.stateNode),ar(e,Be()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)s=r[t],o(s.value,{componentStack:s.stack,digest:s.digest});if(si)throw si=!1,e=ga,ga=null,e;return(li&1)!==0&&e.tag!==0&&ln(),a=e.pendingLanes,(a&1)!==0?e===va?eo++:(eo=0,va=e):eo=0,it(),null}function ln(){if(dt!==null){var e=Ll(li),r=jr.transition,t=ve;try{if(jr.transition=null,ve=16>e?16:e,dt===null)var o=!1;else{if(e=dt,dt=null,li=0,(pe&6)!==0)throw Error(c(331));var s=pe;for(pe|=4,A=e.current;A!==null;){var a=A,d=a.child;if((A.flags&16)!==0){var p=a.deletions;if(p!==null){for(var f=0;f<p.length;f++){var y=p[f];for(A=y;A!==null;){var k=A;switch(k.tag){case 0:case 11:case 15:qn(8,k,a)}var S=k.child;if(S!==null)S.return=k,A=S;else for(;A!==null;){k=A;var w=k.sibling,B=k.return;if(Ed(k),k===y){A=null;break}if(w!==null){w.return=B,A=w;break}A=B}}}var O=a.alternate;if(O!==null){var R=O.child;if(R!==null){O.child=null;do{var Ae=R.sibling;R.sibling=null,R=Ae}while(R!==null)}}A=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,A=d;else e:for(;A!==null;){if(a=A,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:qn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,A=g;break e}A=a.return}}var h=e.current;for(A=h;A!==null;){d=A;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,A=v;else e:for(d=h;A!==null;){if(p=A,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ni(9,p)}}catch(M){_e(p,p.return,M)}if(p===d){A=null;break e}var z=p.sibling;if(z!==null){z.return=p.return,A=z;break e}A=p.return}}if(pe=s,it(),Pr&&typeof Pr.onPostCommitFiberRoot=="function")try{Pr.onPostCommitFiberRoot(xo,e)}catch{}o=!0}return o}finally{ve=t,jr.transition=r}}return!1}function Hd(e,r,t){r=nn(t,r),r=ad(e,r,1),e=at(e,r,1),r=tr(),e!==null&&(bn(e,1,r),ar(e,r))}function _e(e,r,t){if(e.tag===3)Hd(e,e,t);else for(;r!==null;){if(r.tag===3){Hd(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ct===null||!ct.has(o))){e=nn(t,e),e=ld(r,e,1),r=at(r,e,1),e=tr(),r!==null&&(bn(r,1,e),ar(r,e));break}}r=r.return}}function Hf(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,We===e&&(Ve&t)===t&&(Me===4||Me===3&&(Ve&130023424)===Ve&&500>Be()-xa?It(e,0):ma|=t),ar(e,r)}function $d(e,r){r===0&&((e.mode&1)===0?r=1:(r=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var t=tr();e=Wr(e,r),e!==null&&(bn(e,r,t),ar(e,t))}function $f(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),$d(e,t)}function Vf(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(c(314))}o!==null&&o.delete(r),$d(e,t)}var Vd;Vd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)ir=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return ir=!1,_f(e,r,t);ir=(e.flags&131072)!==0}else ir=!1,Ee&&(r.flags&1048576)!==0&&bc(r,Do,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;ri(e,r),e=r.pendingProps;var s=Kt(r,Xe.current);rn(r,t),s=Gs(null,r,o,e,s,t);var a=Ys();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(o)?(a=!0,Ro(r)):a=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ds(r),s.updater=Jo,r.stateNode=s,s._reactInternals=r,ea(r,o,e,t),r=oa(null,r,o,!0,a,t)):(r.tag=0,Ee&&a&&Ls(r),rr(null,r,s,t),r=r.child),r;case 16:o=r.elementType;e:{switch(ri(e,r),e=r.pendingProps,s=o._init,o=s(o._payload),r.type=o,s=r.tag=Gf(o),e=Er(o,e),s){case 0:r=na(null,r,o,e,t);break e;case 1:r=gd(null,r,o,e,t);break e;case 11:r=pd(null,r,o,e,t);break e;case 14:r=fd(null,r,o,Er(o.type,e),t);break e}throw Error(c(306,o,""))}return r;case 0:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Er(o,s),na(e,r,o,s,t);case 1:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Er(o,s),gd(e,r,o,s,t);case 3:e:{if(vd(r),e===null)throw Error(c(387));o=r.pendingProps,a=r.memoizedState,s=a.element,Pc(e,r),Qo(r,o,null,t);var d=r.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){s=nn(Error(c(423)),r),r=yd(e,r,o,t,s);break e}else if(o!==s){s=nn(Error(c(424)),r),r=yd(e,r,o,t,s);break e}else for(pr=tt(r.stateNode.containerInfo.firstChild),ur=r,Ee=!0,Cr=null,t=Tc(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zt(),o===s){r=$r(e,r,t);break e}rr(e,r,o,t)}r=r.child}return r;case 5:return Oc(r),e===null&&Ps(r),o=r.type,s=r.pendingProps,a=e!==null?e.memoizedProps:null,d=s.children,bs(o,s)?d=null:a!==null&&bs(o,a)&&(r.flags|=32),xd(e,r),rr(e,r,d,t),r.child;case 6:return e===null&&Ps(r),null;case 13:return jd(e,r,t);case 4:return Us(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Jt(r,null,o,t):rr(e,r,o,t),r.child;case 11:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Er(o,s),pd(e,r,o,s,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,s=r.pendingProps,a=r.memoizedProps,d=s.value,we(Ho,o._currentValue),o._currentValue=d,a!==null)if(Sr(a.value,d)){if(a.children===s.children&&!nr.current){r=$r(e,r,t);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var f=p.firstContext;f!==null;){if(f.context===o){if(a.tag===1){f=Hr(-1,t&-t),f.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var k=y.pending;k===null?f.next=f:(f.next=k.next,k.next=f),y.pending=f}}a.lanes|=t,f=a.alternate,f!==null&&(f.lanes|=t),Fs(a.return,t,r),p.lanes|=t;break}f=f.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(c(341));d.lanes|=t,p=d.alternate,p!==null&&(p.lanes|=t),Fs(d,t,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}rr(e,r,s.children,t),r=r.child}return r;case 9:return s=r.type,o=r.pendingProps.children,rn(r,t),s=vr(s),o=o(s),r.flags|=1,rr(e,r,o,t),r.child;case 14:return o=r.type,s=Er(o,r.pendingProps),s=Er(o.type,s),fd(e,r,o,s,t);case 15:return hd(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:Er(o,s),ri(e,r),r.tag=1,or(o)?(e=!0,Ro(r)):e=!1,rn(r,t),id(r,o,s),ea(r,o,s,t),oa(null,r,o,!0,e,t);case 19:return wd(e,r,t);case 22:return md(e,r,t)}throw Error(c(156,r.tag))};function Qd(e,r){return Sl(e,r)}function Qf(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,r,t,o){return new Qf(e,r,t,o)}function ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===er)return 14}return 2}function ft(e,r){var t=e.alternate;return t===null?(t=Nr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function pi(e,r,t,o,s,a){var d=2;if(o=e,typeof e=="function")ba(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case T:return Tt(t.children,s,a,r);case F:d=8,s|=8;break;case je:return e=Nr(12,t,r,s|2),e.elementType=je,e.lanes=a,e;case Ce:return e=Nr(13,t,r,s),e.elementType=Ce,e.lanes=a,e;case Ye:return e=Nr(19,t,r,s),e.elementType=Ye,e.lanes=a,e;case Ne:return fi(t,s,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:d=10;break e;case se:d=9;break e;case Te:d=11;break e;case er:d=14;break e;case Ke:d=16,o=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return r=Nr(d,t,r,s),r.elementType=e,r.type=o,r.lanes=a,r}function Tt(e,r,t,o){return e=Nr(7,e,o,r),e.lanes=t,e}function fi(e,r,t,o){return e=Nr(22,e,o,r),e.elementType=Ne,e.lanes=t,e.stateNode={isHidden:!1},e}function Sa(e,r,t){return e=Nr(6,e,null,r),e.lanes=t,e}function Ca(e,r,t){return r=Nr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Yf(e,r,t,o,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ji(0),this.expirationTimes=Ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ea(e,r,t,o,s,a,d,p,f){return e=new Yf(e,r,t,p,f),r===1?(r=1,a===!0&&(r|=8)):r=0,a=Nr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(a),e}function Kf(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function Gd(e){if(!e)return ot;e=e._reactInternals;e:{if(yt(e)!==e||e.tag!==1)throw Error(c(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(or(t))return Nc(e,t,r)}return r}function Yd(e,r,t,o,s,a,d,p,f){return e=Ea(t,o,!0,e,s,a,d,p,f),e.context=Gd(null),t=e.current,o=tr(),s=ut(t),a=Hr(o,s),a.callback=r!=null?r:null,at(t,a,s),e.current.lanes=s,bn(e,s,o),ar(e,o),e}function hi(e,r,t,o){var s=r.current,a=tr(),d=ut(s);return t=Gd(t),r.context===null?r.context=t:r.pendingContext=t,r=Hr(a,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=at(s,r,d),e!==null&&(Lr(e,s,d,a),Vo(e,s,d)),d}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function za(e,r){Kd(e,r),(e=e.alternate)&&Kd(e,r)}function Xf(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ia(e){this._internalRoot=e}xi.prototype.render=Ia.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(c(409));hi(e,r,null,null)},xi.prototype.unmount=Ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;zt(function(){hi(null,e,null,null)}),r[Fr]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var r=Pl();e={blockedOn:null,target:e,priority:r};for(var t=0;t<Jr.length&&r!==0&&r<Jr[t].priority;t++);Jr.splice(t,0,e),t===0&&Ol(e)}};function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qd(){}function qf(e,r,t,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var y=mi(d);a.call(y)}}var d=Yd(r,o,e,0,null,!1,!1,"",qd);return e._reactRootContainer=d,e[Fr]=d.current,Fn(e.nodeType===8?e.parentNode:e),zt(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var p=o;o=function(){var y=mi(f);p.call(y)}}var f=Ea(e,0,!1,null,null,!1,!1,"",qd);return e._reactRootContainer=f,e[Fr]=f.current,Fn(e.nodeType===8?e.parentNode:e),zt(function(){hi(r,f,t,o)}),f}function vi(e,r,t,o,s){var a=t._reactRootContainer;if(a){var d=a;if(typeof s=="function"){var p=s;s=function(){var f=mi(d);p.call(f)}}hi(r,d,e,s)}else d=qf(t,r,e,s,o);return mi(d)}Tl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=kn(r.pendingLanes);t!==0&&(es(r,t|1),ar(r,Be()),(pe&6)===0&&(an=Be()+500,it()))}break;case 13:zt(function(){var o=Wr(e,1);if(o!==null){var s=tr();Lr(o,e,1,s)}}),za(e,1)}},rs=function(e){if(e.tag===13){var r=Wr(e,134217728);if(r!==null){var t=tr();Lr(r,e,134217728,t)}za(e,134217728)}},_l=function(e){if(e.tag===13){var r=ut(e),t=Wr(e,r);if(t!==null){var o=tr();Lr(t,e,r,o)}za(e,r)}},Pl=function(){return ve},Bl=function(e,r){var t=ve;try{return ve=e,r()}finally{ve=t}},Gi=function(e,r,t){switch(r){case"input":if(Mi(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var s=Ao(o);if(!s)throw Error(c(90));vt(o),Mi(o,s)}}}break;case"textarea":cl(e,t);break;case"select":r=t.value,r!=null&&Rt(e,!!t.multiple,r,!1)}},vl=Na,yl=zt;var Zf={usingClientEntryPoint:!1,Events:[Un,Gt,Ao,xl,gl,Na]},ro={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jf={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kl(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{xo=yi.inject(Jf),Pr=yi}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf,lr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!La(r))throw Error(c(200));return Kf(e,r,null,t)},lr.createRoot=function(e,r){if(!La(e))throw Error(c(299));var t=!1,o="",s=Xd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=Ea(e,1,!1,null,null,t,!1,o,s),e[Fr]=r.current,Fn(e.nodeType===8?e.parentNode:e),new Ia(r)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=kl(r),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return zt(e)},lr.hydrate=function(e,r,t){if(!gi(r))throw Error(c(200));return vi(null,e,r,!0,t)},lr.hydrateRoot=function(e,r,t){if(!La(e))throw Error(c(405));var o=t!=null&&t.hydratedSources||null,s=!1,a="",d=Xd;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=Yd(r,null,e,1,t!=null?t:null,s,!1,a,d),e[Fr]=r.current,Fn(e),o)for(e=0;e<o.length;e++)t=o[e],s=t._getVersion,s=s(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,s]:r.mutableSourceEagerHydrationData.push(t,s);return new xi(r)},lr.render=function(e,r,t){if(!gi(r))throw Error(c(200));return vi(null,e,r,!1,t)},lr.unmountComponentAtNode=function(e){if(!gi(e))throw Error(c(40));return e._reactRootContainer?(zt(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1},lr.unstable_batchedUpdates=Na,lr.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!gi(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return vi(e,r,t,!1,o)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var iu;function lh(){if(iu)return Pa.exports;iu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Pa.exports=ah(),Pa.exports}var su;function ch(){if(su)return ji;su=1;var i=lh();return ji.createRoot=i.createRoot,ji.hydrateRoot=i.hydrateRoot,ji}var dh=ch(),ge=Za();const mr=rh(ge);var cr=function(){return cr=Object.assign||function(l){for(var c,u=1,m=arguments.length;u<m;u++){c=arguments[u];for(var j in c)Object.prototype.hasOwnProperty.call(c,j)&&(l[j]=c[j])}return l},cr.apply(this,arguments)};function Ci(i,l,c){if(c||arguments.length===2)for(var u=0,m=l.length,j;u<m;u++)(j||!(u in l))&&(j||(j=Array.prototype.slice.call(l,0,u)),j[u]=l[u]);return i.concat(j||Array.prototype.slice.call(l))}var Se="-ms-",io="-moz-",he="-webkit-",zu="comm",Pi="rule",Ja="decl",uh="@import",ph="@namespace",Iu="@keyframes",fh="@layer",Lu=Math.abs,el=String.fromCharCode,Ha=Object.assign;function hh(i,l){return De(i,0)^45?(((l<<2^De(i,0))<<2^De(i,1))<<2^De(i,2))<<2^De(i,3):0}function Tu(i){return i.trim()}function Gr(i,l){return(i=l.exec(i))?i[0]:i}function te(i,l,c){return i.replace(l,c)}function Ni(i,l,c){return i.indexOf(l,c)}function De(i,l){return i.charCodeAt(l)|0}function Ot(i,l,c){return i.slice(l,c)}function Tr(i){return i.length}function _u(i){return i.length}function no(i,l){return l.push(i),i}function mh(i,l){return i.map(l).join("")}function au(i,l){return i.filter(function(c){return!Gr(c,l)})}var Bi=1,dn=1,Pu=0,wr=0,Re=0,mn="";function Ai(i,l,c,u,m,j,b,E){return{value:i,root:l,parent:c,type:u,props:m,children:j,line:Bi,column:dn,length:b,return:"",siblings:E}}function mt(i,l){return Ha(Ai("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},l)}function cn(i){for(;i.root;)i=mt(i.root,{children:[i]});no(i,i.siblings)}function xh(){return Re}function gh(){return Re=wr>0?De(mn,--wr):0,dn--,Re===10&&(dn=1,Bi--),Re}function _r(){return Re=wr<Pu?De(mn,wr++):0,dn++,Re===10&&(dn=1,Bi++),Re}function xt(){return De(mn,wr)}function wi(){return wr}function Oi(i,l){return Ot(mn,i,l)}function ao(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vh(i){return Bi=dn=1,Pu=Tr(mn=i),wr=0,[]}function yh(i){return mn="",i}function Oa(i){return Tu(Oi(wr-1,$a(i===91?i+2:i===40?i+1:i)))}function jh(i){for(;(Re=xt())&&Re<33;)_r();return ao(i)>2||ao(Re)>3?"":" "}function Nh(i,l){for(;--l&&_r()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Oi(i,wi()+(l<6&&xt()==32&&_r()==32))}function $a(i){for(;_r();)switch(Re){case i:return wr;case 34:case 39:i!==34&&i!==39&&$a(Re);break;case 40:i===41&&$a(i);break;case 92:_r();break}return wr}function wh(i,l){for(;_r()&&i+Re!==57;)if(i+Re===84&&xt()===47)break;return"/*"+Oi(l,wr-1)+"*"+el(i===47?i:_r())}function kh(i){for(;!ao(xt());)_r();return Oi(i,wr)}function bh(i){return yh(ki("",null,null,null,[""],i=vh(i),0,[0],i))}function ki(i,l,c,u,m,j,b,E,C){for(var K=0,Q=0,U=b,Z=0,le=0,X=0,W=1,G=1,me=1,de=0,ne="",_=m,q=j,H=u,T=ne;G;)switch(X=de,de=_r()){case 40:if(X!=108&&De(T,U-1)==58){Ni(T+=te(Oa(de),"&","&\f"),"&\f",Lu(K?E[K-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:T+=Oa(de);break;case 9:case 10:case 13:case 32:T+=jh(X);break;case 92:T+=Nh(wi()-1,7);continue;case 47:switch(xt()){case 42:case 47:no(Sh(wh(_r(),wi()),l,c,C),C),(ao(X||1)==5||ao(xt()||1)==5)&&Tr(T)&&Ot(T,-1,void 0)!==" "&&(T+=" ");break;default:T+="/"}break;case 123*W:E[K++]=Tr(T)*me;case 125*W:case 59:case 0:switch(de){case 0:case 125:G=0;case 59+Q:me==-1&&(T=te(T,/\f/g,"")),le>0&&(Tr(T)-U||W===0&&X===47)&&no(le>32?cu(T+";",u,c,U-1,C):cu(te(T," ","")+";",u,c,U-2,C),C);break;case 59:T+=";";default:if(no(H=lu(T,l,c,K,Q,m,E,ne,_=[],q=[],U,j),j),de===123)if(Q===0)ki(T,l,H,H,_,j,U,E,q);else{switch(Z){case 99:if(De(T,3)===110)break;case 108:if(De(T,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?ki(i,H,H,u&&no(lu(i,H,H,0,0,m,E,ne,m,_=[],U,q),q),m,q,U,E,u?_:q):ki(T,H,H,H,[""],q,0,E,q)}}K=Q=le=0,W=me=1,ne=T="",U=b;break;case 58:U=1+Tr(T),le=X;default:if(W<1){if(de==123)--W;else if(de==125&&W++==0&&gh()==125)continue}switch(T+=el(de),de*W){case 38:me=Q>0?1:(T+="\f",-1);break;case 44:E[K++]=(Tr(T)-1)*me,me=1;break;case 64:xt()===45&&(T+=Oa(_r())),Z=xt(),Q=U=Tr(ne=T+=kh(wi())),de++;break;case 45:X===45&&Tr(T)==2&&(W=0)}}return j}function lu(i,l,c,u,m,j,b,E,C,K,Q,U){for(var Z=m-1,le=m===0?j:[""],X=_u(le),W=0,G=0,me=0;W<u;++W)for(var de=0,ne=Ot(i,Z+1,Z=Lu(G=b[W])),_=i;de<X;++de)(_=Tu(G>0?le[de]+" "+ne:te(ne,/&\f/g,le[de])))&&(C[me++]=_);return Ai(i,l,c,m===0?Pi:E,C,K,Q,U)}function Sh(i,l,c,u){return Ai(i,l,c,zu,el(xh()),Ot(i,2,-2),0,u)}function cu(i,l,c,u,m){return Ai(i,l,c,Ja,Ot(i,0,u),Ot(i,u+1,-1),u,m)}function Bu(i,l,c){switch(hh(i,l)){case 5103:return he+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+i+i;case 4855:return he+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return io+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return he+i+io+i+Se+i+i;case 5936:switch(De(i,l+11)){case 114:return he+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return he+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return he+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return he+i+Se+i+i;case 6165:return he+i+Se+"flex-"+i+i;case 5187:return he+i+te(i,/(\w+).+(:[^]+)/,he+"box-$1$2"+Se+"flex-$1$2")+i;case 5443:return he+i+Se+"flex-item-"+te(i,/flex-|-self/g,"")+(Gr(i,/flex-|baseline/)?"":Se+"grid-row-"+te(i,/flex-|-self/g,""))+i;case 4675:return he+i+Se+"flex-line-pack"+te(i,/align-content|flex-|-self/g,"")+i;case 5548:return he+i+Se+te(i,"shrink","negative")+i;case 5292:return he+i+Se+te(i,"basis","preferred-size")+i;case 6060:return he+"box-"+te(i,"-grow","")+he+i+Se+te(i,"grow","positive")+i;case 4554:return he+te(i,/([^-])(transform)/g,"$1"+he+"$2")+i;case 6187:return te(te(te(i,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),i,"")+i;case 5495:case 3959:return te(i,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return te(te(i,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+he+i+i;case 4200:if(!Gr(i,/flex-|baseline/))return Se+"grid-column-align"+Ot(i,l)+i;break;case 2592:case 3360:return Se+te(i,"template-","")+i;case 4384:case 3616:return c&&c.some(function(u,m){return l=m,Gr(u.props,/grid-\w+-end/)})?~Ni(i+(c=c[l].value),"span",0)?i:Se+te(i,"-start","")+i+Se+"grid-row-span:"+(~Ni(c,"span",0)?Gr(c,/\d+/):+Gr(c,/\d+/)-+Gr(i,/\d+/))+";":Se+te(i,"-start","")+i;case 4896:case 4128:return c&&c.some(function(u){return Gr(u.props,/grid-\w+-start/)})?i:Se+te(te(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return te(i,/(.+)-inline(.+)/,he+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tr(i)-1-l>6)switch(De(i,l+1)){case 109:if(De(i,l+4)!==45)break;case 102:return te(i,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+io+(De(i,l+3)==108?"$3":"$2-$3"))+i;case 115:return~Ni(i,"stretch",0)?Bu(te(i,"stretch","fill-available"),l,c)+i:i}break;case 5152:case 5920:return te(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,m,j,b,E,C,K){return Se+m+":"+j+K+(b?Se+m+"-span:"+(E?C:+C-+j)+K:"")+i});case 4949:if(De(i,l+6)===121)return te(i,":",":"+he)+i;break;case 6444:switch(De(i,De(i,14)===45?18:11)){case 120:return te(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(De(i,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Se+"$2box$3")+i;case 100:return te(i,":",":"+Se)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(i,"scroll-","scroll-snap-")+i}return i}function Ei(i,l){for(var c="",u=0;u<i.length;u++)c+=l(i[u],u,i,l)||"";return c}function Ch(i,l,c,u){switch(i.type){case fh:if(i.children.length)break;case uh:case ph:case Ja:return i.return=i.return||i.value;case zu:return"";case Iu:return i.return=i.value+"{"+Ei(i.children,u)+"}";case Pi:if(!Tr(i.value=i.props.join(",")))return""}return Tr(c=Ei(i.children,u))?i.return=i.value+"{"+c+"}":""}function Eh(i){var l=_u(i);return function(c,u,m,j){for(var b="",E=0;E<l;E++)b+=i[E](c,u,m,j)||"";return b}}function zh(i){return function(l){l.root||(l=l.return)&&i(l)}}function Ih(i,l,c,u){if(i.length>-1&&!i.return)switch(i.type){case Ja:i.return=Bu(i.value,i.length,c);return;case Iu:return Ei([mt(i,{value:te(i.value,"@","@"+he)})],u);case Pi:if(i.length)return mh(c=i.props,function(m){switch(Gr(m,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(mt(i,{props:[te(m,/:(read-\w+)/,":"+io+"$1")]})),cn(mt(i,{props:[m]})),Ha(i,{props:au(c,u)});break;case"::placeholder":cn(mt(i,{props:[te(m,/:(plac\w+)/,":"+he+"input-$1")]})),cn(mt(i,{props:[te(m,/:(plac\w+)/,":"+io+"$1")]})),cn(mt(i,{props:[te(m,/:(plac\w+)/,Se+"input-$1")]})),cn(mt(i,{props:[m]})),Ha(i,{props:au(c,u)});break}return""})}}var Lh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr={},un=typeof process!="undefined"&&hr!==void 0&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",Au="active",Ou="data-styled-version",Ri="6.3.10",rl=`/*!sc*/
`,so=typeof window!="undefined"&&typeof document!="undefined",Th=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY);function uo(i){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(l.length>0?" Args: ".concat(l.join(", ")):""))}var bi=new Map,zi=new Map,Si=1,oo=function(i){if(bi.has(i))return bi.get(i);for(;zi.has(Si);)Si++;var l=Si++;return bi.set(i,l),zi.set(l,i),l},_h=function(i,l){Si=l+1,bi.set(i,l),zi.set(l,i)},tl=Object.freeze([]),pn=Object.freeze({});function Ph(i,l,c){return c===void 0&&(c=pn),i.theme!==c.theme&&i.theme||l||c.theme}var Ru=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Bh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ah=/(^-|-$)/g;function du(i){return i.replace(Bh,"-").replace(Ah,"")}var Oh=/(a)(d)/gi,uu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Va(i){var l,c="";for(l=Math.abs(i);l>52;l=l/52|0)c=uu(l%52)+c;return(uu(l%52)+c).replace(Oh,"$1-$2")}var Ra,_t=function(i,l){for(var c=l.length;c;)i=33*i^l.charCodeAt(--c);return i},Fu=function(i){return _t(5381,i)};function Rh(i){return Va(Fu(i)>>>0)}function Fh(i){return i.displayName||i.name||"Component"}function Fa(i){return typeof i=="string"&&!0}var Mu=typeof Symbol=="function"&&Symbol.for,Du=Mu?Symbol.for("react.memo"):60115,Mh=Mu?Symbol.for("react.forward_ref"):60112,Dh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Uu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wh=((Ra={})[Mh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ra[Du]=Uu,Ra);function pu(i){return("type"in(l=i)&&l.type.$$typeof)===Du?Uu:"$$typeof"in i?Wh[i.$$typeof]:Dh;var l}var Hh=Object.defineProperty,$h=Object.getOwnPropertyNames,fu=Object.getOwnPropertySymbols,Vh=Object.getOwnPropertyDescriptor,Qh=Object.getPrototypeOf,hu=Object.prototype;function Wu(i,l,c){if(typeof l!="string"){if(hu){var u=Qh(l);u&&u!==hu&&Wu(i,u,c)}var m=$h(l);fu&&(m=m.concat(fu(l)));for(var j=pu(i),b=pu(l),E=0;E<m.length;++E){var C=m[E];if(!(C in Uh||c&&c[C]||b&&C in b||j&&C in j)){var K=Vh(l,C);try{Hh(i,C,K)}catch{}}}}return i}function fn(i){return typeof i=="function"}function nl(i){return typeof i=="object"&&"styledComponentId"in i}function Bt(i,l){return i&&l?"".concat(i," ").concat(l):i||l||""}function mu(i,l){return i.join("")}function lo(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Qa(i,l,c){if(c===void 0&&(c=!1),!c&&!lo(i)&&!Array.isArray(i))return l;if(Array.isArray(l))for(var u=0;u<l.length;u++)i[u]=Qa(i[u],l[u]);else if(lo(l))for(var u in l)i[u]=Qa(i[u],l[u]);return i}function ol(i,l){Object.defineProperty(i,"toString",{value:l})}var Gh=(function(){function i(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(l){if(l===this._cGroup)return this._cIndex;var c=this._cIndex;if(l>this._cGroup)for(var u=this._cGroup;u<l;u++)c+=this.groupSizes[u];else for(u=this._cGroup-1;u>=l;u--)c-=this.groupSizes[u];return this._cGroup=l,this._cIndex=c,c},i.prototype.insertRules=function(l,c){if(l>=this.groupSizes.length){for(var u=this.groupSizes,m=u.length,j=m;l>=j;)if((j<<=1)<0)throw uo(16,"".concat(l));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var b=m;b<j;b++)this.groupSizes[b]=0}for(var E=this.indexOfGroup(l+1),C=0,K=(b=0,c.length);b<K;b++)this.tag.insertRule(E,c[b])&&(this.groupSizes[l]++,E++,C++);C>0&&this._cGroup>l&&(this._cIndex+=C)},i.prototype.clearGroup=function(l){if(l<this.length){var c=this.groupSizes[l],u=this.indexOfGroup(l),m=u+c;this.groupSizes[l]=0;for(var j=u;j<m;j++)this.tag.deleteRule(u);c>0&&this._cGroup>l&&(this._cIndex-=c)}},i.prototype.getGroup=function(l){var c="";if(l>=this.length||this.groupSizes[l]===0)return c;for(var u=this.groupSizes[l],m=this.indexOfGroup(l),j=m+u,b=m;b<j;b++)c+=this.tag.getRule(b)+rl;return c},i})(),Yh="style[".concat(un,"][").concat(Ou,'="').concat(Ri,'"]'),Kh=new RegExp("^".concat(un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xu=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},Ga=function(i){if(!i)return document;if(xu(i))return i;if("getRootNode"in i){var l=i.getRootNode();if(xu(l))return l}return document},Xh=function(i,l,c){for(var u,m=c.split(","),j=0,b=m.length;j<b;j++)(u=m[j])&&i.registerName(l,u)},qh=function(i,l){for(var c,u=((c=l.textContent)!==null&&c!==void 0?c:"").split(rl),m=[],j=0,b=u.length;j<b;j++){var E=u[j].trim();if(E){var C=E.match(Kh);if(C){var K=0|parseInt(C[1],10),Q=C[2];K!==0&&(_h(Q,K),Xh(i,Q,C[3]),i.getTag().insertRules(K,m)),m.length=0}else m.push(E)}}},Ma=function(i){for(var l=Ga(i.options.target).querySelectorAll(Yh),c=0,u=l.length;c<u;c++){var m=l[c];m&&m.getAttribute(un)!==Au&&(qh(i,m),m.parentNode&&m.parentNode.removeChild(m))}};function Zh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Hu=function(i){var l=document.head,c=i||l,u=document.createElement("style"),m=(function(E){var C=Array.from(E.querySelectorAll("style[".concat(un,"]")));return C[C.length-1]})(c),j=m!==void 0?m.nextSibling:null;u.setAttribute(un,Au),u.setAttribute(Ou,Ri);var b=Zh();return b&&u.setAttribute("nonce",b),c.insertBefore(u,j),u},Jh=(function(){function i(l){this.element=Hu(l),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var u;if(c.sheet)return c.sheet;for(var m=(u=c.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,j=0,b=m.length;j<b;j++){var E=m[j];if(E.ownerNode===c)return E}throw uo(17)})(this.element),this.length=0}return i.prototype.insertRule=function(l,c){try{return this.sheet.insertRule(c,l),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},i.prototype.getRule=function(l){var c=this.sheet.cssRules[l];return c&&c.cssText?c.cssText:""},i})(),em=(function(){function i(l){this.element=Hu(l),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(l,c){if(l<=this.length&&l>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[l]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},i.prototype.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},i})(),rm=(function(){function i(l){this.rules=[],this.length=0}return i.prototype.insertRule=function(l,c){return l<=this.length&&(l===this.length?this.rules.push(c):this.rules.splice(l,0,c),this.length++,!0)},i.prototype.deleteRule=function(l){this.rules.splice(l,1),this.length--},i.prototype.getRule=function(l){return l<this.length?this.rules[l]:""},i})(),gu=so,tm={isServer:!so,useCSSOMInjection:!Th},$u=(function(){function i(l,c,u){l===void 0&&(l=pn),c===void 0&&(c={});var m=this;this.options=cr(cr({},tm),l),this.gs=c,this.names=new Map(u),this.server=!!l.isServer,!this.server&&so&&gu&&(gu=!1,Ma(this)),ol(this,function(){return(function(j){for(var b=j.getTag(),E=b.length,C="",K=function(U){var Z=(function(me){return zi.get(me)})(U);if(Z===void 0)return"continue";var le=j.names.get(Z);if(le===void 0||!le.size)return"continue";var X=b.getGroup(U);if(X.length===0)return"continue";var W=un+".g"+U+'[id="'+Z+'"]',G="";le.forEach(function(me){me.length>0&&(G+=me+",")}),C+=X+W+'{content:"'+G+'"}'+rl},Q=0;Q<E;Q++)K(Q);return C})(m)})}return i.registerId=function(l){return oo(l)},i.prototype.rehydrate=function(){!this.server&&so&&Ma(this)},i.prototype.reconstructWithOptions=function(l,c){c===void 0&&(c=!0);var u=new i(cr(cr({},this.options),l),this.gs,c&&this.names||void 0);return!this.server&&so&&l.target!==this.options.target&&Ga(this.options.target)!==Ga(l.target)&&Ma(u),u},i.prototype.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(l=(function(c){var u=c.useCSSOMInjection,m=c.target;return c.isServer?new rm(m):u?new Jh(m):new em(m)})(this.options),new Gh(l)));var l},i.prototype.hasNameForId=function(l,c){var u,m;return(m=(u=this.names.get(l))===null||u===void 0?void 0:u.has(c))!==null&&m!==void 0&&m},i.prototype.registerName=function(l,c){oo(l);var u=this.names.get(l);u?u.add(c):this.names.set(l,new Set([c]))},i.prototype.insertRules=function(l,c,u){this.registerName(l,c),this.getTag().insertRules(oo(l),u)},i.prototype.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},i.prototype.clearRules=function(l){this.getTag().clearGroup(oo(l)),this.clearNames(l)},i.prototype.clearTag=function(){this.tag=void 0},i})(),nm=/&/g,Yr=47,Pt=42;function vu(i){if(i.indexOf("}")===-1)return!1;for(var l=i.length,c=0,u=0,m=!1,j=0;j<l;j++){var b=i.charCodeAt(j);if(u!==0||m||b!==Yr||i.charCodeAt(j+1)!==Pt)if(m)b===Pt&&i.charCodeAt(j+1)===Yr&&(m=!1,j++);else if(b!==34&&b!==39||j!==0&&i.charCodeAt(j-1)===92){if(u===0){if(b===123)c++;else if(b===125&&--c<0)return!0}}else u===0?u=b:u===b&&(u=0);else m=!0,j++}return c!==0||u!==0}function Vu(i,l){return i.map(function(c){return c.type==="rule"&&(c.value="".concat(l," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(l," ")),c.props=c.props.map(function(u){return"".concat(l," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Vu(c.children,l)),c})}function om(i){var l,c,u,m=pn,j=m.options,b=j===void 0?pn:j,E=m.plugins,C=E===void 0?tl:E,K=function(X,W,G){return G.startsWith(c)&&G.endsWith(c)&&G.replaceAll(c,"").length>0?".".concat(l):X},Q=C.slice();Q.push(function(X){X.type===Pi&&X.value.includes("&")&&(u||(u=new RegExp("\\".concat(c,"\\b"),"g")),X.props[0]=X.props[0].replace(nm,c).replace(u,K))}),b.prefix&&Q.push(Ih),Q.push(Ch);var U=[],Z=Eh(Q.concat(zh(function(X){return U.push(X)}))),le=function(X,W,G,me){W===void 0&&(W=""),G===void 0&&(G=""),me===void 0&&(me="&"),l=me,c=W,u=void 0;var de=(function(_){if(!vu(_))return _;for(var q=_.length,H="",T=0,F=0,je=0,Pe=!1,se=0;se<q;se++){var Te=_.charCodeAt(se);if(je!==0||Pe||Te!==Yr||_.charCodeAt(se+1)!==Pt)if(Pe)Te===Pt&&_.charCodeAt(se+1)===Yr&&(Pe=!1,se++);else if(Te!==34&&Te!==39||se!==0&&_.charCodeAt(se-1)===92){if(je===0)if(Te===123)F++;else if(Te===125){if(--F<0){for(var Ce=se+1;Ce<q;){var Ye=_.charCodeAt(Ce);if(Ye===59||Ye===10)break;Ce++}Ce<q&&_.charCodeAt(Ce)===59&&Ce++,F=0,se=Ce-1,T=Ce;continue}F===0&&(H+=_.substring(T,se+1),T=se+1)}else Te===59&&F===0&&(H+=_.substring(T,se+1),T=se+1)}else je===0?je=Te:je===Te&&(je=0);else Pe=!0,se++}if(T<q){var er=_.substring(T);vu(er)||(H+=er)}return H})((function(_){if(_.indexOf("//")===-1)return _;for(var q=_.length,H=[],T=0,F=0,je=0,Pe=0;F<q;){var se=_.charCodeAt(F);if(se!==34&&se!==39||F!==0&&_.charCodeAt(F-1)===92)if(je===0)if(se===Yr&&F+1<q&&_.charCodeAt(F+1)===Pt){for(F+=2;F+1<q&&(_.charCodeAt(F)!==Pt||_.charCodeAt(F+1)!==Yr);)F++;F+=2}else if(se===40&&F>=3&&(32|_.charCodeAt(F-1))==108&&(32|_.charCodeAt(F-2))==114&&(32|_.charCodeAt(F-3))==117)Pe=1,F++;else if(Pe>0)se===41?Pe--:se===40&&Pe++,F++;else if(se===Pt&&F+1<q&&_.charCodeAt(F+1)===Yr)F>T&&H.push(_.substring(T,F)),T=F+=2;else if(se===Yr&&F+1<q&&_.charCodeAt(F+1)===Yr){for(F>T&&H.push(_.substring(T,F));F<q&&_.charCodeAt(F)!==10;)F++;T=F}else F++;else F++;else je===0?je=se:je===se&&(je=0),F++}return T===0?_:(T<q&&H.push(_.substring(T)),H.join(""))})(X)),ne=bh(G||W?"".concat(G," ").concat(W," { ").concat(de," }"):de);return b.namespace&&(ne=Vu(ne,b.namespace)),U=[],Ei(ne,Z),U};return le.hash=C.length?C.reduce(function(X,W){return W.name||uo(15),_t(X,W.name)},5381).toString():"",le}var im=new $u,Ya=om(),Qu=mr.createContext({shouldForwardProp:void 0,styleSheet:im,stylis:Ya});Qu.Consumer;mr.createContext(void 0);function yu(){return mr.useContext(Qu)}var sm=(function(){function i(l,c){var u=this;this.inject=function(m,j){j===void 0&&(j=Ya);var b=u.name+j.hash;m.hasNameForId(u.id,b)||m.insertRules(u.id,b,j(u.rules,b,"@keyframes"))},this.name=l,this.id="sc-keyframes-".concat(l),this.rules=c,ol(this,function(){throw uo(12,String(u.name))})}return i.prototype.getName=function(l){return l===void 0&&(l=Ya),this.name+l.hash},i})();function am(i,l){return l==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||i in Lh||i.startsWith("--")?String(l).trim():"".concat(l,"px")}var lm=function(i){return i>="A"&&i<="Z"};function ju(i){for(var l="",c=0;c<i.length;c++){var u=i[c];if(c===1&&u==="-"&&i[0]==="-")return i;lm(u)?l+="-"+u.toLowerCase():l+=u}return l.startsWith("ms-")?"-"+l:l}var Gu=function(i){return i==null||i===!1||i===""},Yu=function(i){var l=[];for(var c in i){var u=i[c];i.hasOwnProperty(c)&&!Gu(u)&&(Array.isArray(u)&&u.isCss||fn(u)?l.push("".concat(ju(c),":"),u,";"):lo(u)?l.push.apply(l,Ci(Ci(["".concat(c," {")],Yu(u),!1),["}"],!1)):l.push("".concat(ju(c),": ").concat(am(c,u),";")))}return l};function At(i,l,c,u,m){if(m===void 0&&(m=[]),typeof i=="string")return i&&m.push(i),m;if(Gu(i))return m;if(nl(i))return m.push(".".concat(i.styledComponentId)),m;if(fn(i)){if(!fn(b=i)||b.prototype&&b.prototype.isReactComponent||!l)return m.push(i),m;var j=i(l);return At(j,l,c,u,m)}var b;if(i instanceof sm)return c?(i.inject(c,u),m.push(i.getName(u))):m.push(i),m;if(lo(i)){for(var E=Yu(i),C=0;C<E.length;C++)m.push(E[C]);return m}if(!Array.isArray(i))return m.push(i.toString()),m;for(C=0;C<i.length;C++)At(i[C],l,c,u,m);return m}function cm(i){for(var l=0;l<i.length;l+=1){var c=i[l];if(fn(c)&&!nl(c))return!1}return!0}var dm=Fu(Ri),um=(function(){function i(l,c,u){this.rules=l,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&cm(l),this.componentId=c,this.baseHash=_t(dm,c),this.baseStyle=u,$u.registerId(c)}return i.prototype.generateAndInjectStyles=function(l,c,u){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(l,c,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))m=Bt(m,this.staticRulesId);else{var j=mu(At(this.rules,l,c,u)),b=Va(_t(this.baseHash,j)>>>0);if(!c.hasNameForId(this.componentId,b)){var E=u(j,".".concat(b),void 0,this.componentId);c.insertRules(this.componentId,b,E)}m=Bt(m,b),this.staticRulesId=b}else{for(var C=_t(this.baseHash,u.hash),K="",Q=0;Q<this.rules.length;Q++){var U=this.rules[Q];if(typeof U=="string")K+=U;else if(U){var Z=mu(At(U,l,c,u));C=_t(_t(C,String(Q)),Z),K+=Z}}if(K){var le=Va(C>>>0);if(!c.hasNameForId(this.componentId,le)){var X=u(K,".".concat(le),void 0,this.componentId);c.insertRules(this.componentId,le,X)}m=Bt(m,le)}}return{className:m,css:typeof window=="undefined"?c.getTag().getGroup(oo(this.componentId)):""}},i})(),Ku=mr.createContext(void 0);Ku.Consumer;var Da={};function pm(i,l,c){var u=nl(i),m=i,j=!Fa(i),b=l.attrs,E=b===void 0?tl:b,C=l.componentId,K=C===void 0?(function(_,q){var H=typeof _!="string"?"sc":du(_);Da[H]=(Da[H]||0)+1;var T="".concat(H,"-").concat(Rh(Ri+H+Da[H]));return q?"".concat(q,"-").concat(T):T})(l.displayName,l.parentComponentId):C,Q=l.displayName,U=Q===void 0?(function(_){return Fa(_)?"styled.".concat(_):"Styled(".concat(Fh(_),")")})(i):Q,Z=l.displayName&&l.componentId?"".concat(du(l.displayName),"-").concat(l.componentId):l.componentId||K,le=u&&m.attrs?m.attrs.concat(E).filter(Boolean):E,X=l.shouldForwardProp;if(u&&m.shouldForwardProp){var W=m.shouldForwardProp;if(l.shouldForwardProp){var G=l.shouldForwardProp;X=function(_,q){return W(_,q)&&G(_,q)}}else X=W}var me=new um(c,Z,u?m.componentStyle:void 0);function de(_,q){return(function(H,T,F){var je=H.attrs,Pe=H.componentStyle,se=H.defaultProps,Te=H.foldedComponentIds,Ce=H.styledComponentId,Ye=H.target,er=mr.useContext(Ku),Ke=yu(),Ne=H.shouldForwardProp||Ke.shouldForwardProp,L=Ph(T,er,se)||pn,D=(function(ie,ue,ce){for(var xe,ze=cr(cr({},ue),{className:void 0,theme:ce}),Kr=0;Kr<ie.length;Kr+=1){var vt=fn(xe=ie[Kr])?xe(ze):xe;for(var kr in vt)kr==="className"?ze.className=Bt(ze.className,vt[kr]):kr==="style"?ze.style=cr(cr({},ze.style),vt[kr]):ze[kr]=vt[kr]}return"className"in ue&&typeof ue.className=="string"&&(ze.className=Bt(ze.className,ue.className)),ze})(je,T,L),P=D.as||Ye,x={};for(var N in D)D[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&D.theme===L||(N==="forwardedAs"?x.as=D.forwardedAs:Ne&&!Ne(N,P)||(x[N]=D[N]));var J=(function(ie,ue){var ce=yu(),xe=ie.generateAndInjectStyles(ue,ce.styleSheet,ce.stylis);return xe})(Pe,D),re=J.className,ae=Bt(Te,Ce);return re&&(ae+=" "+re),D.className&&(ae+=" "+D.className),x[Fa(P)&&!Ru.has(P)?"class":"className"]=ae,F&&(x.ref=F),ge.createElement(P,x)})(ne,_,q)}de.displayName=U;var ne=mr.forwardRef(de);return ne.attrs=le,ne.componentStyle=me,ne.displayName=U,ne.shouldForwardProp=X,ne.foldedComponentIds=u?Bt(m.foldedComponentIds,m.styledComponentId):"",ne.styledComponentId=Z,ne.target=u?m.target:i,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=u?(function(q){for(var H=[],T=1;T<arguments.length;T++)H[T-1]=arguments[T];for(var F=0,je=H;F<je.length;F++)Qa(q,je[F],!0);return q})({},m.defaultProps,_):_}}),ol(ne,function(){return".".concat(ne.styledComponentId)}),j&&Wu(ne,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Nu(i,l){for(var c=[i[0]],u=0,m=l.length;u<m;u+=1)c.push(l[u],i[u+1]);return c}var wu=function(i){return Object.assign(i,{isCss:!0})};function fm(i){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];if(fn(i)||lo(i))return wu(At(Nu(tl,Ci([i],l,!0))));var u=i;return l.length===0&&u.length===1&&typeof u[0]=="string"?At(u):wu(At(Nu(u,l)))}function Ka(i,l,c){if(c===void 0&&(c=pn),!l)throw uo(1,l);var u=function(m){for(var j=[],b=1;b<arguments.length;b++)j[b-1]=arguments[b];return i(l,c,fm.apply(void 0,Ci([m],j,!1)))};return u.attrs=function(m){return Ka(i,l,cr(cr({},c),{attrs:Array.prototype.concat(c.attrs,m).filter(Boolean)}))},u.withConfig=function(m){return Ka(i,l,cr(cr({},c),m))},u}var Xu=function(i){return Ka(pm,i)},ye=Xu;Ru.forEach(function(i){ye[i]=Xu(i)});const Ua={Wrapper:ye.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ye.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:ye.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .workspaceLayout {
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: grid;
            grid-template-columns: 260px minmax(0, 1fr);
            gap: 28px;
            padding: 18px 22px 42px;
        }
        .sideMenu {
            position: sticky;
            top: 18px;
            align-self: start;
            /* Keep the complete menu inside the visible area below the header. */
            height: calc(100vh - 60px - 36px);
            max-height: calc(100vh - 60px - 36px);
            box-sizing: border-box;
            overflow-y: auto;
            padding: 16px 10px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
        }
        .menuLabel { margin: 0 10px 12px; color: var(--color-text-muted); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .sideMenu nav { display: grid; gap: 5px; }
        .sideMenu button { width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--color-text-secondary); text-align: left; cursor: pointer; font: inherit; }
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #07110b; }
        .contentWrapper { min-width: 0; padding: 4px 0; }
        .scrollTopButton {
            position: fixed;
            right: 24px;
            bottom: 24px;
            z-index: 10;
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 50%;
            background: var(--color-surface);
            color: var(--color-text-primary);
            cursor: pointer;
            box-shadow: 0 8px 20px var(--color-shadow);
        }
        .scrollTopButton:hover {
            background: var(--color-primary);
            color: #07110b;
        }
        @media (max-width: 820px) {
            .workspaceLayout { grid-template-columns: 1fr; padding: 14px; }
            .sideMenu { position: static; height: auto; max-height: none; }
            .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .scrollTopButton { right: 16px; bottom: 16px; }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},ku={Wrapper:ye.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:ye.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `};var qu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bu=mr.createContext&&mr.createContext(qu),hm=["attr","size","title"];function mm(i,l){if(i==null)return{};var c=xm(i,l),u,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(i);for(m=0;m<j.length;m++)u=j[m],!(l.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(i,u)&&(c[u]=i[u])}return c}function xm(i,l){if(i==null)return{};var c={};for(var u in i)if(Object.prototype.hasOwnProperty.call(i,u)){if(l.indexOf(u)>=0)continue;c[u]=i[u]}return c}function Ii(){return Ii=Object.assign?Object.assign.bind():function(i){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(i[u]=c[u])}return i},Ii.apply(this,arguments)}function Su(i,l){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);l&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(i,m).enumerable})),c.push.apply(c,u)}return c}function Li(i){for(var l=1;l<arguments.length;l++){var c=arguments[l]!=null?arguments[l]:{};l%2?Su(Object(c),!0).forEach(function(u){gm(i,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):Su(Object(c)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(c,u))})}return i}function gm(i,l,c){return l=vm(l),l in i?Object.defineProperty(i,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[l]=c,i}function vm(i){var l=ym(i,"string");return typeof l=="symbol"?l:l+""}function ym(i,l){if(typeof i!="object"||!i)return i;var c=i[Symbol.toPrimitive];if(c!==void 0){var u=c.call(i,l);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(i)}function Zu(i){return i&&i.map((l,c)=>mr.createElement(l.tag,Li({key:c},l.attr),Zu(l.child)))}function ee(i){return l=>mr.createElement(jm,Ii({attr:Li({},i.attr)},l),Zu(i.child))}function jm(i){var l=c=>{var{attr:u,size:m,title:j}=i,b=mm(i,hm),E=m||c.size||"1em",C;return c.className&&(C=c.className),i.className&&(C=(C?C+" ":"")+i.className),mr.createElement("svg",Ii({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,u,b,{className:C,style:Li(Li({color:i.color||c.color},c.style),i.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),j&&mr.createElement("title",null,j),i.children)};return bu!==void 0?mr.createElement(bu.Consumer,null,c=>l(c)):l(qu)}function Nm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}function hn(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function wm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function km(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function Ju(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function Qe(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function Ge(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(i)}function bm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function I(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function Sm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function ep(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(i)}function xn(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function Cm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Em(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(i)}function rp(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(i)}function zm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(i)}function Ti(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function Im(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function Lm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function Tm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function tp(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(i)}function Xa(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function _m(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function gt(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function Pm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function Bm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(i)}function Am(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function Om(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}function Rm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(i)}function Fm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(i)}function Mm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function Dm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function Um(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function qa(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function Wm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function Hm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function _i(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(i)}function $m(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(i)}function Vm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(i)}function Qm(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(i)}function co(i){return ee({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const Gm=()=>{const[i,l]=ge.useState(!1),[c,u]=ge.useState("dark");ge.useEffect(()=>{const E=localStorage.getItem("app-theme")||"dark";u(E),E==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ge.useEffect(()=>{c==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",c)},[c]);const m=ge.useMemo(()=>c==="light"?"dark":"light",[c]),j=()=>{u(m)};return n.jsx(ku.Wrapper,{children:n.jsx(ku.Main,{children:n.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[n.jsxs("div",{className:"logoNameWrapper",children:[n.jsxs("div",{className:"logoWrapper",children:[!i&&n.jsx("div",{className:"logoSkeleton"}),n.jsx("img",{src:"/c-core-notes/logo.png",alt:"C Core Notes logo",onLoad:()=>l(!0),style:{opacity:i?1:0}})]}),n.jsxs("div",{className:"nameWrapper",children:[n.jsx("div",{className:"title",children:"c-core-notes"}),n.jsx("div",{className:"subTitle",children:"At-a-glance c revision"})]})]}),n.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[n.jsx("span",{className:"icon",children:c==="light"?n.jsx(Mm,{}):n.jsx(Hm,{})}),n.jsx("span",{className:"label",children:c==="light"?"Light":"Dark"})]})]})})})},Wa={Wrapper:ye.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 18px 15px 28px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copyright a {
            color: var(--color-text-primary);
            font-weight: 700;
        }

        @media (width < 680px) {
            align-items: flex-start;
            flex-direction: column;
        }
    `,Links:ye.nav`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;

        @media (width < 680px) {
            justify-content: flex-start;
        }
    `,IconLink:ye.a`
        width: 34px;
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-border);
        border-radius: 9px;
        color: var(--color-text-secondary);
        transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;

        &:hover,
        &:focus-visible {
            color: var(--color-primary);
            border-color: var(--color-primary);
            box-shadow: 0 0 16px var(--color-shadow);
            text-decoration: none;
        }
    `},Ym=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:Lm},{label:"GitHub",href:"https://github.com/a2rp",icon:Im},{label:"CodePen",href:"https://codepen.io/ash1198",icon:I},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:Bm},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:Em},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:Qm},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:Om},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Fm},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Sm},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:_m}],Km=i=>i.startsWith("mailto:")?{}:{target:"_blank",rel:"noopener noreferrer"},Xm=()=>n.jsxs(Wa.Wrapper,{children:[n.jsxs("div",{className:"copyright",children:["Copyright © ",new Date().getFullYear()," "," ",n.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),n.jsx(Wa.Links,{"aria-label":"Social and support links",children:Ym.map(({label:i,href:l,icon:c})=>n.jsx(Wa.IconLink,{href:l,title:i,"aria-label":i,...Km(l),children:ge.createElement(c,{"aria-hidden":"true"})},i))})]}),Cu={Wrapper:ye.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ye.div`
        max-width: 1440px;
        width: 100%;
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 26px;
        box-shadow: 0 10px 30px var(--color-shadow);

        .top {
            margin-bottom: 18px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 8px 12px;
            border-radius: 999px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 12px;
        }

        .badgeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .heading {
            font-size: 32px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .sub {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 6;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
        }

        .card.wide {
            grid-column: span 12;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            font-size: 14px;
        }

        .cardIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .meta {
            margin-top: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding-top: 12px;
            border-top: 1px dashed var(--color-border-light);
        }

        .metaLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .metaIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 7px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        @media (max-width: 900px) {
            padding: 18px;

            .card {
                grid-column: span 12;
            }

            .heading {
                font-size: 26px;
            }
        }
    `},np=()=>{const i="2026-09-21T17:34:51.923Z",l=new Date(i).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return n.jsx(Cu.Wrapper,{children:n.jsxs(Cu.Content,{children:[n.jsxs("div",{className:"top",children:[n.jsxs("div",{className:"badge",children:[n.jsx("span",{className:"badgeIcon",children:n.jsx(_i,{})}),"C core revision"]}),n.jsx("h2",{className:"heading",children:"About C Programming"}),n.jsx("p",{className:"sub",children:"A low level, procedural language where you learn what a program really is - memory, compilation, and control."})]}),n.jsxs("div",{className:"grid",children:[n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(xn,{})}),"What is C"]}),n.jsx("p",{className:"p",children:"C is a general purpose, procedural programming language created in 1972 by Dennis Ritchie. It is one of the most influential languages and forms the foundation of many modern languages and systems."})]}),n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(tp,{})}),"Why C matters"]}),n.jsx("p",{className:"p",children:"C gives direct access to memory through pointers and manual memory management. This makes it fast and powerful, but it also requires careful thinking about stack, heap, memory layout, and safety."})]}),n.jsxs("div",{className:"card wide",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(_i,{})}),"About c-core-notes"]}),n.jsx("p",{className:"p",children:"The c-core-notes project is designed as a focused revision system. It organizes syntax, control flow, functions, arrays, pointers, structures, dynamic memory, and file handling into a structured single page reference. The goal is strong fundamentals, clear memory concepts, and clean logical thinking."}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"metaLeft",children:[n.jsx("span",{className:"metaIcon",children:n.jsx(bm,{})}),n.jsx("span",{className:"metaLabel",children:"Last updated"})]}),n.jsx("span",{className:"metaValue",children:l})]})]})]})]})})},qm={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Zm=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(qm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(_i,{})}),n.jsx("span",{className:"title",children:"Introduction to C"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"C is where you learn how programs work at a lower level. You write logic, control memory, and understand the compilation pipeline. If you learn C properly, every other language becomes easier."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(xn,{})}),"What is C"]}),n.jsx("p",{className:"p",children:"C is a general purpose, procedural programming language used for systems programming, embedded software, and performance critical code. It gives you direct access to memory and low level control."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(km,{})}),"History of C"]}),n.jsx("p",{className:"p",children:"C was created by Dennis Ritchie at Bell Labs in the early 1970s. It was designed to build the Unix operating system and became one of the most widely used languages."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(co,{})}),"Why C is important"]}),n.jsx("p",{className:"p",children:"C teaches core computer science concepts like memory layout, pointers, compilation, and performance. It is still used in OS kernels, device drivers, embedded systems, databases, and high performance libraries."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Compiled language concept"]}),n.jsx("p",{className:"p",children:"C is a compiled language. Your C code is converted into machine code (binary instructions) before it runs. This is different from languages that mostly run inside a runtime or virtual machine."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - compile and run"]}),n.jsx("pre",{className:"code",children:`gcc main.c -o app
./app

// output - depends on your program`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Structure of a C program"}),n.jsx("p",{className:"p",children:"A basic C program typically has header includes, the main function, and statements inside main. Large programs are split into multiple source and header files."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Minimal structure"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  printf("Hello C\\n");
  return 0;
}

// output - Hello C`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"main function"}),n.jsx("p",{className:"p",children:"main is the entry point of a C program. Execution starts from main. A return value of 0 usually means success."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"main return value"]}),n.jsx("pre",{className:"code",children:`int main() {
  return 0; // success
}

// output - program exits successfully`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Header files"}),n.jsx("p",{className:"p",children:"Header files contain declarations like function prototypes, macros, and type definitions. You include them using #include. Common headers are stdio.h, stdlib.h, string.h, and math.h."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - include header"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

// stdio.h provides printf and scanf`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Standard library overview"}),n.jsx("p",{className:"p",children:"The C standard library provides reusable functions for input output, memory management, strings, math, and more. You use it by including the correct header."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"stdio.h - input output"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"stdlib.h - malloc, free, exit"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"string.h - strlen, strcpy, strcmp"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"math.h - sqrt, pow"]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"How compilation works - preprocess compile link execute"}),n.jsx("p",{className:"p",children:"C programs go through a pipeline. First the preprocessor expands includes and macros. Then the compiler converts code to assembly or object code. Then the linker combines object files and libraries into an executable. Finally the OS loads and executes it."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Simple pipeline view"]}),n.jsx("pre",{className:"code",children:`// 1 - preprocess
gcc -E main.c -o main.i

// 2 - compile
gcc -S main.i -o main.s

// 3 - assemble
gcc -c main.s -o main.o

// 4 - link
gcc main.o -o app

// 5 - execute
./app`})]}),n.jsx("div",{className:"hint",children:'If you see "undefined reference" errors, that is usually a linking problem.'})]})]})]})},Jm={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
        }

        .p {
            color: var(--color-text-secondary);
            font-size: 14px;
            margin-bottom: 10px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            overflow-x: auto;
            white-space: pre;
        }
    `},ex=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(Jm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(I,{})}),n.jsx("span",{className:"title",children:"Basic Syntax"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Comments - single line and multi line"}),n.jsx("pre",{className:"code",children:`// single line comment

/* 
   multi line comment
*/`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"printf and scanf"}),n.jsx("p",{className:"p",children:"printf prints output. scanf reads input from user."}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int age;
  printf("Enter age: ");
  scanf("%d", &age);
  printf("You entered %d\\n", age);
  return 0;
}

// input - 21
// output - You entered 21`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Escape sequences"}),n.jsx("pre",{className:"code",children:`\\n  new line
\\t  tab
\\"  double quote
\\\\  backslash

printf("Hello\\nWorld");

// output
// Hello
// World`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Tokens in C"}),n.jsx("p",{className:"p",children:"Smallest units in C program - keywords, identifiers, constants, operators, symbols."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Keywords"}),n.jsx("p",{className:"p",children:"Reserved words like int, return, if, while."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Identifiers"}),n.jsx("p",{className:"p",children:"Names given to variables and functions."}),n.jsx("pre",{className:"code",children:`int totalMarks;
float priceValue;`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Constants"}),n.jsx("pre",{className:"code",children:`const int MAX = 100;
#define PI 3.14`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Variables"}),n.jsx("pre",{className:"code",children:`int age = 20;
float price = 99.5;`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Data types - int float double char"}),n.jsx("pre",{className:"code",children:`int a = 10;
float b = 5.5;
double c = 10.123456;
char d = 'A';

printf("%d %f %lf %c", a, b, c, d);

// output - 10 5.500000 10.123456 A`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Modifiers - short long signed unsigned"}),n.jsx("pre",{className:"code",children:`short int x = 10;
long int y = 100000L;
unsigned int z = 50;`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Format specifiers"}),n.jsx("pre",{className:"code",children:`%d   int
%f   float
%lf  double
%c   char
%s   string

int age = 25;
printf("Age is %d", age);

// output - Age is 25`})]})]})]})},rx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 12px;
            font-family: ui-monospace, monospace;
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            color: var(--color-text-secondary);
        }
    `},tx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(rx.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(xn,{})}),n.jsx("span",{className:"title",children:"Operators"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx(Qr,{title:"Arithmetic operators",code:`int a = 10;
int b = 3;

printf("%d\\n", a + b); // 13
printf("%d\\n", a - b); // 7
printf("%d\\n", a * b); // 30
printf("%d\\n", a / b); // 3
printf("%d\\n", a % b); // 1`}),n.jsx(Qr,{title:"Relational operators",code:`int x = 5;
int y = 10;

printf("%d\\n", x < y);  // 1
printf("%d\\n", x > y);  // 0
printf("%d\\n", x == y); // 0
printf("%d\\n", x != y); // 1`}),n.jsx(Qr,{title:"Logical operators",code:`int a = 1;
int b = 0;

printf("%d\\n", a && b); // 0
printf("%d\\n", a || b); // 1
printf("%d\\n", !a);     // 0`}),n.jsx(Qr,{title:"Assignment operators",code:`int n = 5;

n += 3;  // n = 8
n -= 2;  // n = 6
n *= 2;  // n = 12
n /= 3;  // n = 4`}),n.jsx(Qr,{title:"Increment and decrement",code:`int i = 5;

printf("%d\\n", i++); // 5
printf("%d\\n", i);   // 6

printf("%d\\n", ++i); // 7`}),n.jsx(Qr,{title:"Bitwise operators",code:`int a = 5;  // 0101
int b = 3;  // 0011

printf("%d\\n", a & b); // 1
printf("%d\\n", a | b); // 7
printf("%d\\n", a ^ b); // 6
printf("%d\\n", a << 1); // 10`}),n.jsx(Qr,{title:"Ternary operator",code:`int age = 18;

char *result = (age >= 18) ? "Adult" : "Minor";
printf("%s\\n", result); // Adult`}),n.jsx(Qr,{title:"Operator precedence",code:`int result = 5 + 2 * 3;
printf("%d\\n", result); // 11

// multiplication runs before addition`}),n.jsx(Qr,{title:"Type casting",code:`int a = 5;
int b = 2;

float result = (float)a / b;
printf("%.2f\\n", result); // 2.50`})]})]})},Qr=({title:i,code:l})=>n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:i}),n.jsx("pre",{className:"code",children:l})]}),nx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            display: grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 10000px;
        }

        .intro,
        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            font-weight: 800;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            font-family: ui-monospace, monospace;
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            color: var(--color-text-secondary);
        }
    `},ox=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(nx.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ti,{})}),n.jsx("span",{className:"title",children:"Control Flow"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Control flow determines how your program makes decisions and repeats actions. In C, this includes conditions and loops."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"if"}),n.jsx("p",{className:"p",children:"Executes code only if the condition is true."}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("Adult\\n");
    }

    return 0;
}

// output - Adult`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"if else"}),n.jsx("p",{className:"p",children:"Runs one block if condition is true, another if false."}),n.jsx("pre",{className:"code",children:`if (age >= 18) {
    printf("Adult\\n");
} else {
    printf("Minor\\n");
}

// output - Adult`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"nested if"}),n.jsx("p",{className:"p",children:"An if statement inside another if statement."}),n.jsx("pre",{className:"code",children:`int num = 10;

if (num > 0) {
    if (num % 2 == 0) {
        printf("Positive Even\\n");
    }
}

// output - Positive Even`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"switch"}),n.jsx("p",{className:"p",children:"Used when checking one variable against multiple fixed values."}),n.jsx("pre",{className:"code",children:`int day = 2;

switch (day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    default:
        printf("Invalid\\n");
}

// output - Tuesday`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"for loop"}),n.jsx("p",{className:"p",children:"Used when the number of iterations is known."}),n.jsx("pre",{className:"code",children:`for (int i = 1; i <= 3; i++) {
    printf("%d\\n", i);
}

// output - 1
// output - 2
// output - 3`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"while loop"}),n.jsx("p",{className:"p",children:"Repeats while condition remains true."}),n.jsx("pre",{className:"code",children:`int i = 1;

while (i <= 3) {
    printf("%d\\n", i);
    i++;
}

// output - 1
// output - 2
// output - 3`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"do while"}),n.jsx("p",{className:"p",children:"Executes at least once before checking condition."}),n.jsx("pre",{className:"code",children:`int i = 1;

do {
    printf("%d\\n", i);
    i++;
} while (i <= 3);

// output - 1
// output - 2
// output - 3`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"break"}),n.jsx("p",{className:"p",children:"Immediately exits a loop or switch."}),n.jsx("pre",{className:"code",children:`for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    printf("%d\\n", i);
}

// output - 1
// output - 2`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"continue"}),n.jsx("p",{className:"p",children:"Skips the current iteration and continues the loop."}),n.jsx("pre",{className:"code",children:`for (int i = 1; i <= 4; i++) {
    if (i == 2) {
        continue;
    }
    printf("%d\\n", i);
}

// output - 1
// output - 3
// output - 4`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"goto"}),n.jsx("p",{className:"p",children:"Jumps to a labeled statement. Rarely recommended because it can make code harder to understand."}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
    int i = 0;

start:
    printf("%d\\n", i);
    i++;

    if (i < 3)
        goto start;

    return 0;
}

// output - 0
// output - 1
// output - 2`})]})]})]})},ix={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 10000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .code {
            margin-top: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 12px;
            font-size: 13px;
            overflow-x: auto;
            white-space: pre;
        }

        .bullets {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .bullets li {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        .dot {
            width: 6px;
            height: 6px;
            background: var(--color-primary);
            border-radius: 999px;
        }
    `},sx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(ix.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(I,{})}),n.jsx("span",{className:"title",children:"Functions"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Functions help break programs into reusable blocks. They improve structure, readability, and modular design."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function declaration"}),n.jsx("p",{className:"p",children:"A declaration tells the compiler about a function before it is used."}),n.jsx("pre",{className:"code",children:"int add(int a, int b); // declaration"})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function definition"}),n.jsx("p",{className:"p",children:"A definition contains the actual implementation."}),n.jsx("pre",{className:"code",children:`int add(int a, int b) {
    return a + b;
}`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function call"}),n.jsx("p",{className:"p",children:"Calling a function executes its code."}),n.jsx("pre",{className:"code",children:`int result = add(5, 3);
printf("%d", result);

// output - 8`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Return values"}),n.jsx("p",{className:"p",children:"A function can return a value using return."}),n.jsx("pre",{className:"code",children:`int square(int x) {
    return x * x;
}

printf("%d", square(4));

// output - 16`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Void functions"}),n.jsx("p",{className:"p",children:"A void function does not return anything."}),n.jsx("pre",{className:"code",children:`void greet() {
    printf("Hello\\n");
}

greet();

// output - Hello`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Parameter passing"}),n.jsx("p",{className:"p",children:"Parameters allow functions to receive input values."}),n.jsx("pre",{className:"code",children:`int multiply(int a, int b) {
    return a * b;
}`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Call by value"}),n.jsx("p",{className:"p",children:"C uses call by value. The function receives a copy of the variable. Original value does not change."}),n.jsx("pre",{className:"code",children:`void change(int x) {
    x = 100;
}

int main() {
    int a = 10;
    change(a);
    printf("%d", a);
}

// output - 10`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx(Dm,{})," Recursion"]}),n.jsx("p",{className:"p",children:"Recursion is when a function calls itself. It must have a base condition to stop."}),n.jsx("pre",{className:"code",children:`int factorial(int n) {
    if (n == 1)
        return 1;
    return n * factorial(n - 1);
}

printf("%d", factorial(4));

// output - 24`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx(gt,{})," Scope of variables"]}),n.jsx("p",{className:"p",children:"Scope defines where a variable can be accessed. Local variables exist inside functions. Global variables exist outside functions."}),n.jsx("pre",{className:"code",children:`int globalVar = 10;

void test() {
    int localVar = 5;
}`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Storage classes - auto static extern register"}),n.jsx("p",{className:"p",children:"Storage classes define lifetime and visibility."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," auto - default local variable"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," static - retains value between function calls"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," extern - refers to global variable from another file"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," register - suggests storing variable in CPU register"]})]}),n.jsx("pre",{className:"code",children:`void counter() {
    static int count = 0;
    count++;
    printf("%d\\n", count);
}

// calling counter twice
// output - 1
// output - 2`})]})]})]})},ax={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 16000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIconMini {
            display: inline-grid;
            place-items: center;
            margin-right: 8px;
            color: var(--color-primary);
            font-size: 14px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .hintIcon {
            color: var(--color-primary);
            margin-top: 2px;
            flex: 0 0 auto;
        }
    `},lx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(ax.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Tm,{})}),n.jsx("span",{className:"title",children:"Arrays"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"An array is a fixed size collection of elements of the same data type stored in continuous memory. Arrays make iteration fast and predictable, and they are the base of strings and many data structures."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"One dimensional arrays"}),n.jsx("p",{className:"p",children:"A 1D array stores values in a single line. Indexing starts from 0."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - 1D array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int a[5] = {10, 20, 30, 40, 50};

  printf("%d\\n", a[0]);
  printf("%d\\n", a[4]);

  return 0;
}

// output - 10
// output - 50`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Two dimensional arrays"}),n.jsx("p",{className:"p",children:"A 2D array is like a table with rows and columns. You access elements using a[row][col]."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - 2D array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int m[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
  };

  printf("%d\\n", m[0][1]);
  printf("%d\\n", m[1][2]);

  return 0;
}

// output - 2
// output - 6`})]}),n.jsx("div",{className:"hint",children:"C stores 2D arrays in row major order, meaning one row after another in memory."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Multidimensional arrays"}),n.jsx("p",{className:"p",children:"Multidimensional arrays are arrays with more than 2 dimensions. They are less common, but useful for 3D grids and certain simulations."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - 3D array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int box[2][2][2] = {
    { {1, 2}, {3, 4} },
    { {5, 6}, {7, 8} }
  };

  printf("%d\\n", box[1][0][1]);

  return 0;
}

// output - 6`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Passing arrays to functions"}),n.jsx("p",{className:"p",children:"When you pass an array to a function, it decays into a pointer to its first element. That is why the function cannot know the size automatically. You usually pass the length separately."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - sum array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int sum(int arr[], int n) {
  int s = 0;
  for (int i = 0; i < n; i++) {
    s += arr[i];
  }
  return s;
}

int main() {
  int a[] = {1, 2, 3, 4};
  int n = sizeof(a) / sizeof(a[0]);

  printf("%d\\n", sum(a, n));

  return 0;
}

// output - 10`})]}),n.jsx("div",{className:"hint",children:"arr[] and int *arr are treated the same in function parameters."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Array initialization"}),n.jsx("p",{className:"p",children:"You can initialize arrays in multiple ways. If you give fewer values, remaining elements become 0."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Examples - initialization patterns"]}),n.jsx("pre",{className:"code",children:`int a[3] = {1, 2, 3};      // full init
int b[5] = {1, 2};         // remaining are 0
int c[]  = {10, 20, 30};   // size inferred

// b looks like - {1, 2, 0, 0, 0}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIconMini",children:n.jsx(tp,{})}),"Memory layout of arrays"]}),n.jsx("p",{className:"p",children:"Arrays are stored in contiguous memory. The address of a[i] is calculated using base address plus i multiplied by size of element. This is why indexing is fast."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - addresses"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int a[3] = {10, 20, 30};

  printf("%p\\n", (void*)&a[0]);
  printf("%p\\n", (void*)&a[1]);
  printf("%p\\n", (void*)&a[2]);

  return 0;
}

// output - addresses will increase by sizeof(int) each time`})]}),n.jsxs("div",{className:"hint",children:[n.jsx("span",{className:"hintIcon",children:n.jsx(ep,{})}),"In most systems, sizeof(int) is 4 bytes, so addresses usually differ by 4."]})]})]})]})},cx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 10px 25px var(--color-shadow);

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro,
        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .code {
            margin: 0;
            padding: 12px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            font-family: ui-monospace, monospace;
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            white-space: pre;
        }
    `},dx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(cx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Vm,{})}),n.jsx("span",{className:"title",children:"Strings"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"In C, a string is not a built in type. It is simply a character array that ends with a special null character '\\0'."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Character arrays"}),n.jsx("p",{className:"p",children:"Strings are stored in arrays of characters."}),n.jsx("pre",{className:"code",children:`char name[] = "Ashish";

printf("%s", name);

// output - Ashish`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Null character"}),n.jsx("p",{className:"p",children:"Every C string ends with '\\0'. This tells the compiler where the string stops."}),n.jsx("pre",{className:"code",children:`char word[6] = {'H','e','l','l','o','\\0'};

printf("%s", word);

// output - Hello`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"gets and fgets"}),n.jsx("p",{className:"p",children:"gets is unsafe and removed in modern C. Always use fgets to avoid buffer overflow."}),n.jsx("pre",{className:"code",children:`char str[20];

fgets(str, sizeof(str), stdin);

printf("%s", str);

// input - Hello
// output - Hello`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"puts"}),n.jsx("p",{className:"p",children:"puts prints a string and automatically adds a new line."}),n.jsx("pre",{className:"code",children:`char msg[] = "C Language";

puts(msg);

// output - C Language`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"String handling functions - strlen strcpy strcat strcmp"}),n.jsx("p",{className:"p",children:"These functions are available in string.h."}),n.jsx("pre",{className:"code",children:`#include <string.h>

char a[20] = "Hello";
char b[] = "World";

printf("%lu", strlen(a));
// output - 5

strcpy(a, b);
printf("%s", a);
// output - World

strcat(a, "!");
printf("%s", a);
// output - World!

printf("%d", strcmp("A", "B"));
// output - negative value`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"String and pointers relation"}),n.jsx("p",{className:"p",children:"A string can also be accessed using pointers. The array name itself acts like a pointer to the first character."}),n.jsx("pre",{className:"code",children:`char str[] = "Code";
char *ptr = str;

printf("%c", *ptr);
// output - C

printf("%c", *(ptr + 1));
// output - o`}),n.jsx("p",{className:"p",children:"Pointer based strings are powerful but modifying string literals directly can cause undefined behavior."})]})]})]})},ux={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 20000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .danger {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .dangerIcon {
            color: var(--color-warning);
            margin-top: 2px;
            flex: 0 0 auto;
        }

        .endNote {
            padding: 14px 16px;
            display: flex;
            align-items: center;
            gap: 10px;
            border-top: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .endIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }
    `},px=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(ux.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(co,{})}),n.jsx("span",{className:"title",children:"Pointers"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Pointers store memory addresses. They let you work directly with memory, build efficient data structures, and write low level code. This is where C becomes powerful - and also where bugs become dangerous."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"What is a pointer"}),n.jsx("p",{className:"p",children:"A pointer is a variable that stores the address of another variable. It does not store the value directly."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 10;
int *p = &x;

printf("%d\\n", x);
printf("%d\\n", *p);

// output - 10
// output - 10`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Address operator"}),n.jsx("p",{className:"p",children:"The address operator & gives the memory address of a variable."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 10;
printf("%p\\n", (void *)&x);

// output - memory address like 0x7ffc...`})]}),n.jsx("div",{className:"hint",children:"Use %p to print addresses. Cast to (void *) for clean, standard output."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Dereference operator"}),n.jsx("p",{className:"p",children:"The dereference operator * accesses the value stored at an address."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 25;
int *p = &x;

*p = 99;

printf("%d\\n", x);

// output - 99`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointer declaration"}),n.jsx("p",{className:"p",children:"Pointer declaration uses * with a type. The type tells how many bytes to read or write when dereferencing."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Examples"]}),n.jsx("pre",{className:"code",children:`int *pi;      // pointer to int
char *pc;     // pointer to char
double *pd;   // pointer to double`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointer arithmetic"}),n.jsx("p",{className:"p",children:"When you add or subtract on a pointer, it moves by the size of its type. This is why pointers work well with arrays."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int a[3] = {10, 20, 30};
int *p = a; // same as &a[0]

printf("%d\\n", *p);
printf("%d\\n", *(p + 1));
printf("%d\\n", *(p + 2));

// output - 10
// output - 20
// output - 30`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointers and arrays"}),n.jsx("p",{className:"p",children:"In most expressions, an array name decays into a pointer to its first element. That is why a and &a[0] often behave the same."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int a[2] = {7, 8};

printf("%d\\n", a[0]);
printf("%d\\n", *a);
printf("%d\\n", *(a + 1));

// output - 7
// output - 7
// output - 8`})]}),n.jsx("div",{className:"hint",children:"a is not a modifiable pointer. You cannot do a++ but you can do p++ if p is a pointer variable."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointer to pointer"}),n.jsx("p",{className:"p",children:"A pointer to pointer stores the address of another pointer. Useful for 2D arrays, dynamic allocation, and when you want a function to modify a pointer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 5;
int *p = &x;
int **pp = &p;

printf("%d\\n", x);
printf("%d\\n", *p);
printf("%d\\n", **pp);

// output - 5
// output - 5
// output - 5`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Null pointer"}),n.jsx("p",{className:"p",children:"A null pointer points to nothing. It is used to represent an invalid or empty pointer safely. Always initialize pointers."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int *p = NULL;

if (p == NULL) {
  printf("No address\\n");
}

// output - No address`})]}),n.jsxs("div",{className:"danger",children:[n.jsx("span",{className:"dangerIcon",children:n.jsx(hn,{})}),"Never dereference a null pointer - it causes a crash."]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Dangling pointer"}),n.jsx("p",{className:"p",children:"A dangling pointer points to memory that has been freed or gone out of scope. Accessing it leads to undefined behavior."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int *p = (int *)malloc(sizeof(int));
*p = 42;

free(p);
p = NULL; // fix - avoid dangling pointer

// output - memory freed safely`})]}),n.jsx("div",{className:"hint",children:"After free, set pointer to NULL to avoid accidental use."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Wild pointer"}),n.jsx("p",{className:"p",children:"A wild pointer is an uninitialized pointer. It points to a random address. Dereferencing it can crash or corrupt memory."}),n.jsxs("div",{className:"danger",children:[n.jsx("span",{className:"dangerIcon",children:n.jsx(hn,{})}),"Always initialize pointers - use NULL if you do not have a valid address yet."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Good practice"]}),n.jsx("pre",{className:"code",children:`int *p = NULL;

// output - safe pointer initialization`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Void pointer"}),n.jsx("p",{className:"p",children:"A void pointer can store the address of any type. You cannot directly dereference it without casting to the correct type first."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 77;
void *p = &x;

printf("%d\\n", *(int *)p);

// output - 77`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function pointers"}),n.jsx("p",{className:"p",children:"Function pointers store the address of a function. They are used for callbacks and building flexible APIs like custom sorting functions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int add(int a, int b) {
  return a + b;
}

int main() {
  int (*fn)(int, int) = add;
  printf("%d\\n", fn(2, 3));
  return 0;
}

// output - 5`})]}),n.jsx("div",{className:"hint",children:"Read it as - fn is a pointer to a function that takes (int, int) and returns int."})]}),n.jsxs("div",{className:"endNote",children:[n.jsx("span",{className:"endIcon",children:n.jsx(xn,{})}),"This is where C becomes powerful."]})]})]})},fx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},hx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(fx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ju,{})}),n.jsx("span",{className:"title",children:"Structures and Unions"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Structures and unions let you group related data into a single type. struct stores all members separately. union shares memory between members."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"struct keyword"]}),n.jsx("p",{className:"p",children:"struct creates a custom type that groups multiple fields under one name. Each field has its own memory."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - define and create"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

struct Student {
  int id;
  char grade;
};

int main() {
  struct Student s1 = { 101, 'A' };
  printf("%d %c\\n", s1.id, s1.grade);

  return 0;
}

// output - 101 A`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Accessing members"}),n.jsx("p",{className:"p",children:"Use dot operator to access members of a struct variable."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - dot operator"]}),n.jsx("pre",{className:"code",children:`struct Student s = { 5, 'B' };
printf("%d\\n", s.id);   // output - 5
printf("%c\\n", s.grade); // output - B`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Array of structures"}),n.jsx("p",{className:"p",children:"An array of structs stores multiple records of the same type, like a mini table of data."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - array of structs"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

struct Student {
  int id;
  char grade;
};

int main() {
  struct Student arr[2] = {
    { 1, 'A' },
    { 2, 'C' }
  };

  printf("%d %c\\n", arr[0].id, arr[0].grade);
  printf("%d %c\\n", arr[1].id, arr[1].grade);

  return 0;
}

// output - 1 A
// output - 2 C`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Pm,{})}),"Pointer to structure"]}),n.jsx("p",{className:"p",children:"A pointer can store the address of a struct. Use arrow operator -> to access members through a pointer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - arrow operator"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

struct Student {
  int id;
  char grade;
};

int main() {
  struct Student s = { 7, 'A' };
  struct Student *ptr = &s;

  printf("%d\\n", ptr->id);
  printf("%c\\n", ptr->grade);

  return 0;
}

// output - 7
// output - A`})]}),n.jsx("div",{className:"hint",children:"ptr->id is the same as (*ptr).id - arrow is just cleaner."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Nested structures"}),n.jsx("p",{className:"p",children:"A struct can contain another struct. This is useful for grouping related details inside one record."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - nested struct"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

struct Address {
  int pin;
};

struct Person {
  int id;
  struct Address addr;
};

int main() {
  struct Person p = { 10, { 560049 } };
  printf("%d\\n", p.id);
  printf("%d\\n", p.addr.pin);

  return 0;
}

// output - 10
// output - 560049`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Union concept"}),n.jsx("p",{className:"p",children:"union is like struct, but all members share the same memory location. Only one member should be used at a time, because writing to one overwrites the others."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - union overwrite"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

union Data {
  int n;
  char ch;
};

int main() {
  union Data d;

  d.n = 65;
  printf("%d\\n", d.n);  // output - 65

  d.ch = 'A';
  printf("%c\\n", d.ch); // output - A

  // after setting d.ch, d.n is not reliable anymore
  // output - undefined value if printed

  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Difference between struct and union"}),n.jsx("p",{className:"p",children:"struct allocates separate memory for each member, so all values can exist together. union shares memory across members, so only one value should be used at a time."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"struct - size is roughly sum of members (with padding)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"union - size is max of member sizes"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"struct - all fields usable together"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"union - one field at a time"]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"typedef"}),n.jsx("p",{className:"p",children:"typedef creates an alias for an existing type. It is commonly used with structs to avoid writing struct again and again."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - typedef with struct"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

typedef struct {
  int id;
  char grade;
} Student;

int main() {
  Student s = { 12, 'B' };
  printf("%d %c\\n", s.id, s.grade);

  return 0;
}

// output - 12 B`})]}),n.jsx("div",{className:"hint",children:"typedef makes your code shorter and cleaner, especially when structs are used everywhere."})]})]})]})},mx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},xx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(mx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Cm,{})}),n.jsx("span",{className:"title",children:"Dynamic Memory Allocation"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Dynamic memory allocation lets you request memory at runtime from the heap. This is useful when you do not know the size in advance. But it also means you must free memory yourself, otherwise memory leaks happen."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Heap vs stack memory"]}),n.jsx("p",{className:"p",children:"The stack is fast and automatic. Local variables and function calls live on the stack. The heap is for dynamic memory that you allocate manually using malloc and friends. Heap memory stays until you free it."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"stack - automatic, function scoped, freed on return"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"heap - manual, flexible size, must free yourself"]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"malloc"}),n.jsx("p",{className:"p",children:"malloc allocates a block of memory of given size (in bytes) on the heap. It returns a pointer to the first byte. The memory is not initialized."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - malloc int array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 3;
  int *arr = (int*)malloc(n * sizeof(int));

  if (arr == NULL) {
    printf("Allocation failed\\n");
    return 1;
  }

  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;

  printf("%d %d %d\\n", arr[0], arr[1], arr[2]);

  free(arr);
  arr = NULL;

  return 0;
}

// output - 10 20 30`})]}),n.jsx("div",{className:"hint",children:"malloc can return NULL. Always check before using the pointer."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"calloc"}),n.jsx("p",{className:"p",children:"calloc allocates memory for an array of elements and initializes all bytes to 0. It takes two arguments - number of elements and size of each element."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - calloc zero init"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 4;
  int *arr = (int*)calloc(n, sizeof(int));

  if (arr == NULL) {
    printf("Allocation failed\\n");
    return 1;
  }

  for (int i = 0; i < n; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");

  free(arr);
  arr = NULL;

  return 0;
}

// output - 0 0 0 0`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"realloc"}),n.jsx("p",{className:"p",children:"realloc resizes an existing heap block. It may move the block to a new location. If it moves, the old pointer becomes invalid. A safe pattern is to store the result in a temporary pointer first."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - grow array using realloc"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 2;
  int *arr = (int*)malloc(n * sizeof(int));

  if (arr == NULL) return 1;

  arr[0] = 5;
  arr[1] = 15;

  int newN = 4;
  int *temp = (int*)realloc(arr, newN * sizeof(int));

  if (temp == NULL) {
    // realloc failed - arr is still valid here
    free(arr);
    return 1;
  }

  arr = temp;
  arr[2] = 25;
  arr[3] = 35;

  for (int i = 0; i < newN; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");

  free(arr);
  arr = NULL;

  return 0;
}

// output - 5 15 25 35`})]}),n.jsx("div",{className:"hint",children:"Do not assign realloc directly to arr without a temp. If realloc fails, you lose the original pointer and leak memory."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx($m,{})}),"free"]}),n.jsx("p",{className:"p",children:"free releases heap memory that you allocated. After freeing, set the pointer to NULL to avoid accidentally using freed memory."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - free and null"]}),n.jsx("pre",{className:"code",children:`int *p = (int*)malloc(sizeof(int));
if (p == NULL) return 1;

*p = 99;

free(p);
p = NULL; // good habit

// output - memory released safely`})]}),n.jsx("div",{className:"hint",children:"Using a pointer after free is a bug called use after free. It can crash your program."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Memory leak concept"]}),n.jsx("p",{className:"p",children:"A memory leak happens when you allocate memory but never free it. The memory stays reserved until the program ends. In long running programs, leaks can grow and cause slowdowns or crashes."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - leak vs fixed"]}),n.jsx("pre",{className:"code",children:`// leak - allocated but never freed
int *p = (int*)malloc(100 * sizeof(int));
if (p == NULL) return 1;
// no free(p) here

// fixed
int *q = (int*)malloc(100 * sizeof(int));
if (q == NULL) return 1;
free(q);
q = NULL;`})]}),n.jsx("div",{className:"hint",children:"Every malloc or calloc should have a matching free. Think in pairs - allocate then release."})]})]})]})},gx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},vx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(gx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(zm,{})}),n.jsx("span",{className:"title",children:"File Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"File handling lets your C program read and write data that stays even after the program exits. The standard library uses a file pointer of type FILE* to represent an open file."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(rp,{})}),"File pointer"]}),n.jsx("p",{className:"p",children:"A file pointer is a pointer to a FILE object managed by the C runtime. You get it from fopen and use it in file functions like fprintf, fscanf, fread, fwrite, and fclose."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - FILE*"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("notes.txt", "w");
  if (fp == NULL) {
    printf("Failed to open file\\n");
    return 1;
  }

  fprintf(fp, "Hello file\\n");
  fclose(fp);

  // output - file "notes.txt" created with text inside
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fopen modes"}),n.jsx("p",{className:"p",children:"fopen takes a filename and a mode. Mode decides whether you read, write, append, and whether it is text or binary."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "r" - read (file must exist)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "w" - write (creates or truncates)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "a" - append (creates if missing)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "r+" - read and write']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "w+" - write and read (truncates)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "a+" - append and read']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' add "b" for binary - "rb", "wb", "ab"']})]}),n.jsx("div",{className:"hint",children:'"w" clears the file content. Use "a" if you want to keep old content and add new lines.'})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fclose"}),n.jsx("p",{className:"p",children:"fclose closes the file and flushes pending writes. Always close files to avoid data loss and resource leaks."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - fclose"]}),n.jsx("pre",{className:"code",children:`FILE* fp = fopen("a.txt", "w");
if (fp == NULL) return 1;

fprintf(fp, "saved\\n");
fclose(fp);

// output - file closed, data flushed`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fprintf"}),n.jsx("p",{className:"p",children:"fprintf writes formatted text to a file, similar to printf but with a file pointer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - fprintf"]}),n.jsx("pre",{className:"code",children:`FILE* fp = fopen("scores.txt", "w");
if (fp == NULL) return 1;

int score = 95;
fprintf(fp, "Score - %d\\n", score);
fclose(fp);

// output - scores.txt contains "Score - 95"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fscanf"}),n.jsx("p",{className:"p",children:"fscanf reads formatted text from a file, similar to scanf. It is useful for structured text but you must handle errors carefully."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - fscanf"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("scores.txt", "r");
  if (fp == NULL) return 1;

  int score = 0;
  fscanf(fp, "Score - %d", &score);
  fclose(fp);

  printf("%d\\n", score);

  // output - 95
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:"Always check the return value of fscanf to confirm how many values were successfully read."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fread"}),n.jsx("p",{className:"p",children:"fread reads binary data in blocks. It is used when you store raw bytes, structs, or binary files."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - fread"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("bin.dat", "rb");
  if (fp == NULL) return 1;

  int x = 0;
  size_t n = fread(&x, sizeof(int), 1, fp);
  fclose(fp);

  // n - 1 means one item read successfully
  printf("%d\\n", x);

  // output - depends on file content
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fwrite"}),n.jsx("p",{className:"p",children:"fwrite writes binary data in blocks. Useful for saving numbers or structs without converting to text."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - fwrite"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("bin.dat", "wb");
  if (fp == NULL) return 1;

  int x = 1234;
  size_t n = fwrite(&x, sizeof(int), 1, fp);
  fclose(fp);

  // n - 1 means one item written successfully
  // output - bin.dat contains binary bytes of 1234
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Rm,{})}),"fseek"]}),n.jsx("p",{className:"p",children:"fseek moves the file position indicator. This allows you to jump to a specific byte offset in the file."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_SET - from beginning"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_CUR - from current position"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_END - from end"]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - fseek"]}),n.jsx("pre",{className:"code",children:`FILE* fp = fopen("data.txt", "r");
if (fp == NULL) return 1;

fseek(fp, 0, SEEK_END); // jump to end
fclose(fp);

// output - file cursor moved to end`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"ftell"}),n.jsx("p",{className:"p",children:"ftell returns the current position (byte offset) in the file. It is commonly used with fseek to find file size."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - file size using fseek and ftell"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("data.txt", "r");
  if (fp == NULL) return 1;

  fseek(fp, 0, SEEK_END);
  long size = ftell(fp);
  fclose(fp);

  printf("%ld\\n", size);

  // output - number of bytes in data.txt
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Um,{})}),"EOF handling"]}),n.jsx("p",{className:"p",children:"EOF means end of file. For reading loops, you usually check the return value of input functions rather than comparing directly with EOF in a fragile way."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - safe line reading with EOF handling"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("data.txt", "r");
  if (fp == NULL) return 1;

  char line[256];

  while (fgets(line, sizeof(line), fp) != NULL) {
    printf("%s", line);
  }

  fclose(fp);

  // output - prints full file content line by line
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:"For binary reads, use fread and check how many items were read. For text, prefer fgets over gets."})]})]})]})},yx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},jx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(yx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Xa,{})}),n.jsx("span",{className:"title",children:"Preprocessor"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"The C preprocessor runs before compilation. It modifies your source code by expanding headers and replacing macros. Think of it as a text processing step that happens before the compiler sees the code."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"#include"]}),n.jsx("p",{className:"p",children:"#include literally inserts the contents of a header file into your source file. Use angle brackets for standard library headers and quotes for your own local headers."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - standard vs local include"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>   // standard library header
#include "utils.h"   // local project header

// output - no direct output, it changes the source before compile`})]}),n.jsx("div",{className:"hint",children:'If you see "file not found" errors, your include path is wrong or the header is missing.'})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Xa,{})}),"#define"]}),n.jsx("p",{className:"p",children:"#define creates a macro. It is a replacement rule. The preprocessor replaces the macro name with its value before compilation."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - constant style macro"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define PI 3.14159

int main() {
  printf("%.2f\\n", PI);
  return 0;
}

// output - 3.14`})]}),n.jsx("div",{className:"hint",children:"Prefer const variables for typed constants in modern C code, but macros are still common in C projects."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Macros"}),n.jsx("p",{className:"p",children:"Macros can also act like functions. They can be faster because there is no function call, but they can be risky because they do not perform type checking. Always use parentheses to avoid precedence bugs."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - function like macro"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define SQUARE(x) ((x) * (x))

int main() {
  int n = 5;
  printf("%d\\n", SQUARE(n));
  return 0;
}

// output - 25`})]}),n.jsx("div",{className:"hint",children:"Without parentheses, SQUARE(1 + 2) could break. That is why macros are written with extra parentheses."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(qa,{})}),"Conditional compilation"]}),n.jsx("p",{className:"p",children:"Conditional compilation lets you include or exclude code depending on conditions. This is commonly used for debug logs, platform specific code, or feature flags."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - debug flag"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define DEBUG 1

int main() {
#if DEBUG
  printf("Debug mode\\n");
#endif

  printf("App running\\n");
  return 0;
}

// output - Debug mode
// output - App running`})]}),n.jsx("div",{className:"hint",children:"Use conditional compilation to avoid shipping debug logs in production builds."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"#ifdef and #ifndef"}),n.jsx("p",{className:"p",children:"#ifdef checks if a macro is defined. #ifndef checks if a macro is not defined. This is most commonly used for header guards, which prevent double includes."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - header guard pattern"]}),n.jsx("pre",{className:"code",children:`// utils.h

#ifndef UTILS_H
#define UTILS_H

int add(int a, int b);

#endif

// output - no direct output, prevents duplicate definitions`})]}),n.jsx("div",{className:"hint",children:'Without header guards, including the same header twice can cause "redefinition" errors during compilation.'})]})]})]})},Nx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},wx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(Nx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Wm,{})}),n.jsx("span",{className:"title",children:"Bit Manipulation"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Bit manipulation means working with numbers at the bit level (0 and 1). It is heavily used in embedded systems, performance code, flags, masks, and low level utilities."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Xa,{})}),"Bitwise AND OR XOR NOT"]}),n.jsx("p",{className:"p",children:"These operators work on bits. Think of them as tools for combining and checking flags."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - AND OR XOR NOT"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int a = 5;  // 0101
  int b = 3;  // 0011

  printf("%d\\n", a & b);  // 0001
  printf("%d\\n", a | b);  // 0111
  printf("%d\\n", a ^ b);  // 0110
  printf("%d\\n", ~a);     // bitwise NOT

  return 0;
}

// output - 1
// output - 7
// output - 6
// output - depends on integer size (two's complement)`})]}),n.jsx("div",{className:"hint",children:`~a flips all bits. The numeric result depends on signed representation (two's complement). For beginners, treat it as "invert all bits".`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(co,{})}),"Left shift"]}),n.jsx("p",{className:"p",children:"Left shift moves bits to the left. For positive numbers, shifting left by 1 usually multiplies by 2."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - left shift"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x = 3; // 0011
  printf("%d\\n", x << 1); // 0110
  printf("%d\\n", x << 2); // 1100

  return 0;
}

// output - 6
// output - 12`})]}),n.jsx("div",{className:"hint",children:"For signed integers, shifting into the sign bit can be tricky. Use unsigned for bit operations when possible."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(co,{})}),"Right shift"]}),n.jsx("p",{className:"p",children:"Right shift moves bits to the right. For positive numbers, shifting right by 1 usually divides by 2."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - right shift"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x = 12; // 1100
  printf("%d\\n", x >> 1); // 0110
  printf("%d\\n", x >> 2); // 0011

  return 0;
}

// output - 6
// output - 3`})]}),n.jsx("div",{className:"hint",children:"Right shift on negative numbers may do sign extension depending on compiler. Use unsigned for predictable behavior."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Setting clearing toggling bits"}),n.jsx("p",{className:"p",children:"Common pattern - use a mask. A mask is a number with a single bit set like 1 << k. With this you can set, clear, toggle, or check a specific bit."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - set clear toggle check"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  unsigned int x = 10; // 1010
  unsigned int k = 1;  // bit position (0 based)
  unsigned int mask = 1u << k; // 0010

  // set bit k
  x = x | mask;
  printf("%u\\n", x); // 1010 stays 1010 because bit 1 is already 1

  // clear bit k
  x = x & ~mask;
  printf("%u\\n", x); // 1000

  // toggle bit k
  x = x ^ mask;
  printf("%u\\n", x); // 1010

  // check bit k
  if (x & mask) {
    printf("bit is 1\\n");
  } else {
    printf("bit is 0\\n");
  }

  return 0;
}

// output - 10
// output - 8
// output - 10
// output - bit is 1`})]}),n.jsx("div",{className:"hint",children:"Use unsigned int and 1u for masks. It avoids sign issues and makes shifts safer."})]})]})]})},kx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        code {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 13px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            padding: 2px 6px;
            border-radius: 8px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},bx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(kx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(co,{})}),n.jsx("span",{className:"title",children:"Advanced Concepts"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"These topics appear in real systems code and interviews. The goal is not to memorize everything, but to understand what can go wrong and why C requires careful thinking."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(_i,{})}),"Command line arguments"]}),n.jsxs("p",{className:"p",children:["main can receive arguments from the command line.",n.jsx("code",{children:"argc"})," is the count, and ",n.jsx("code",{children:"argv"})," is an array of strings. ",n.jsx("code",{children:"argv[0]"})," is the program name."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main(int argc, char *argv[]) {
  printf("argc = %d\\n", argc);
  if (argc > 1) {
    printf("first arg = %s\\n", argv[1]);
  }
  return 0;
}

/*
run - ./app hello

output - argc = 2
output - first arg = hello
*/`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(xn,{})}),"const keyword"]}),n.jsx("p",{className:"p",children:"const means the variable should not be modified through that name. It helps prevent accidental changes and improves readability."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  const int maxUsers = 100;
  printf("%d\\n", maxUsers);

  // maxUsers = 200; // error - assignment of read-only variable
  return 0;
}

// output - 100`})]}),n.jsx("div",{className:"hint",children:"const does not always mean the value is stored in ROM. It means you are not allowed to modify it through that identifier."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Nm,{})}),"volatile keyword"]}),n.jsx("p",{className:"p",children:'volatile tells the compiler "this value can change unexpectedly" - for example hardware registers or a variable changed by an interrupt. It prevents the compiler from optimizing away repeated reads.'}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Concept example"]}),n.jsx("pre",{className:"code",children:`volatile int flag = 0;

while (flag == 0) {
  // wait until flag changes
}

/*
idea - some other system part changes flag
output - loop stops when flag becomes 1
*/`})]}),n.jsx("div",{className:"hint",children:"volatile is common in embedded systems. It is not a replacement for thread safety."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Inline functions"}),n.jsx("p",{className:"p",children:"inline suggests the compiler to replace a function call with the function body to reduce call overhead. The compiler may ignore it. Use it for very small functions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

static inline int add(int a, int b) {
  return a + b;
}

int main() {
  printf("%d\\n", add(2, 3));
  return 0;
}

// output - 5`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Static variables in functions"}),n.jsx("p",{className:"p",children:"A static local variable keeps its value between function calls. It is initialized only once and lives for the entire program runtime."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

void hit() {
  static int count = 0;
  count++;
  printf("count = %d\\n", count);
}

int main() {
  hit();
  hit();
  hit();
  return 0;
}

/*
output - count = 1
output - count = 2
output - count = 3
*/`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Memory alignment"}),n.jsx("p",{className:"p",children:"CPUs often read memory faster when data is aligned to certain boundaries. Compilers may insert padding inside structs to keep alignment, which can increase struct size."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - struct padding"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

struct A {
  char c;   // 1 byte
  int x;    // 4 bytes
};

int main() {
  printf("%zu\\n", sizeof(struct A));
  return 0;
}

/*
output - often 8 (because of padding)
note - exact value depends on compiler and platform
*/`})]}),n.jsx("div",{className:"hint",children:"Padding is normal. It improves performance. In low level code, struct size matters, so alignment is important."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Undefined behavior"]}),n.jsx("p",{className:"p",children:"Undefined behavior means the C standard does not define what happens. The program might crash, work sometimes, or do something unpredictable. Compilers are allowed to make aggressive optimizations assuming undefined behavior never happens."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - reading uninitialized variable"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x;
  printf("%d\\n", x); // undefined behavior - x is uninitialized
  return 0;
}

/*
output - unpredictable garbage value
*/`})]}),n.jsx("div",{className:"hint",children:"Another common undefined behavior is accessing an array out of bounds."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Segmentation fault concept"]}),n.jsx("p",{className:"p",children:"A segmentation fault happens when your program tries to access memory it is not allowed to access. This often comes from invalid pointers, freed memory usage, or writing outside array bounds."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - dereferencing NULL"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int *p = NULL;
  *p = 10; // crash - invalid memory access
  printf("%d\\n", *p);
  return 0;
}

/*
output - program crashes (segmentation fault)
*/`})]}),n.jsx("div",{className:"hint",children:"Most segfaults are pointer mistakes. Use a debugger and print statements to locate where the invalid access happens."})]})]})]})},Sx={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Cx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(Sx.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ti,{})}),n.jsx("span",{className:"title",children:"Data Structures using C"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Data structures store data in a way that makes operations like insert, delete, search, and traversal efficient. In C, most data structures are built using pointers and dynamic memory allocation."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ti,{})}),"Linked list"]}),n.jsx("p",{className:"p",children:"A linked list is a sequence of nodes where each node stores data and a pointer to the next node. It is useful when you need dynamic size and frequent insertions or deletions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Node structure and simple insert at head"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
#include <stdlib.h>

struct Node {
  int data;
  struct Node* next;
};

struct Node* pushFront(struct Node* head, int val) {
  struct Node* n = (struct Node*)malloc(sizeof(struct Node));
  n->data = val;
  n->next = head;
  return n;
}

int main() {
  struct Node* head = NULL;
  head = pushFront(head, 10);
  head = pushFront(head, 20);

  printf("%d\\n", head->data);       // output - 20
  printf("%d\\n", head->next->data); // output - 10
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:"Important - always free allocated nodes when done to avoid memory leaks."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Stack"]}),n.jsx("p",{className:"p",children:"A stack follows LIFO - Last In First Out. Common operations are push, pop, and peek. You can implement it using an array or a linked list."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Stack using array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define MAX 5

int stack[MAX];
int top = -1;

void push(int x) {
  if (top == MAX - 1) return; // stack full
  stack[++top] = x;
}

int pop() {
  if (top == -1) return -1; // stack empty
  return stack[top--];
}

int main() {
  push(5);
  push(9);

  printf("%d\\n", pop()); // output - 9
  printf("%d\\n", pop()); // output - 5
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:"Stack is used in function calls, undo operations, and expression evaluation."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ju,{})}),"Queue"]}),n.jsx("p",{className:"p",children:"A queue follows FIFO - First In First Out. Common operations are enqueue and dequeue. A circular queue is often used for fixed size array implementations."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Simple queue using array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define MAX 5

int q[MAX];
int front = 0;
int rear = 0;

void enqueue(int x) {
  if (rear == MAX) return; // queue full
  q[rear++] = x;
}

int dequeue() {
  if (front == rear) return -1; // queue empty
  return q[front++];
}

int main() {
  enqueue(1);
  enqueue(2);
  enqueue(3);

  printf("%d\\n", dequeue()); // output - 1
  printf("%d\\n", dequeue()); // output - 2
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:"For real usage, prefer a circular queue to reuse space."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(ep,{})}),"Trees basics"]}),n.jsx("p",{className:"p",children:"A tree is a hierarchical data structure made of nodes. Each node can have children. The most common type is a binary tree where each node has up to two children - left and right."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Binary tree node and creation"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
#include <stdlib.h>

struct TNode {
  int data;
  struct TNode* left;
  struct TNode* right;
};

struct TNode* newNode(int val) {
  struct TNode* n = (struct TNode*)malloc(sizeof(struct TNode));
  n->data = val;
  n->left = NULL;
  n->right = NULL;
  return n;
}

int main() {
  struct TNode* root = newNode(10);
  root->left = newNode(5);
  root->right = newNode(15);

  printf("%d\\n", root->data);       // output - 10
  printf("%d\\n", root->left->data); // output - 5
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Implementation using pointers"}),n.jsx("p",{className:"p",children:"In C, pointers are the core tool behind dynamic data structures. A node usually stores data plus one or more pointers to other nodes. malloc allocates memory, and pointers connect nodes together."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Linked list - each node points to next"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Stack with linked list - push and pop at head"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Queue with linked list - enqueue at tail, dequeue at head"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Trees - each node points to children"]})]}),n.jsx("div",{className:"hint",children:"Rule - if you use malloc, you must plan where free will happen."})]})]})]})},Ex={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 9000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},zx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(Ex.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ti,{})}),n.jsx("span",{className:"title",children:"C vs C++"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"C and C++ are closely related languages, but they follow different programming paradigms. C focuses on procedural programming, while C++ adds object oriented features on top of C."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(xn,{})}),"Key differences"]}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C supports procedural programming only."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ supports procedural and object oriented programming."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C does not support classes and objects."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ supports classes, inheritance, polymorphism, and encapsulation."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C uses printf and scanf for IO."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ uses cout and cin for IO."]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"C example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  printf("Hello from C\\n");
  return 0;
}

// output - Hello from C`})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"C++ example"]}),n.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  cout << "Hello from C++" << endl;
  return 0;
}

// output - Hello from C++`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Procedural vs Object Oriented"]}),n.jsx("p",{className:"p",children:"Procedural programming focuses on functions and step by step instructions. Object oriented programming focuses on objects that combine data and behavior."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Procedural style in C"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

void greet() {
  printf("Hello\\n");
}

int main() {
  greet();
  return 0;
}

// output - Hello`})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Object oriented style in C++"]}),n.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

class Greeter {
public:
  void greet() {
    cout << "Hello" << endl;
  }
};

int main() {
  Greeter g;
  g.greet();
  return 0;
}

// output - Hello`})]}),n.jsx("div",{className:"hint",children:"C++ is often described as an extension of C, but modern C++ is much more powerful and feature rich than C."})]})]})]})},Ix={Wrapper:ye.section`
        width: 100%;
        margin-bottom: 5px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 25px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            display: grid;
            place-items: center;
            width: 36px;
            height: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .hIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            margin-top: 12px;
            display: grid;
            gap: 10px;
            padding-left: 0;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }
    `},Lx=()=>{const[i,l]=ge.useState(!0),c=()=>l(u=>!u);return n.jsxs(Ix.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:c,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(qa,{})}),n.jsx("span",{className:"title",children:"Best Practices"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"In C, small mistakes can become big bugs. Best practices help you write code that is readable, testable, and safer. The main idea is simple - control your memory, validate inputs, and keep your code organized."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Code structure"]}),n.jsx("p",{className:"p",children:"Keep each file focused. Split large programs into modules. Use meaningful function names and keep functions small. One function should do one job."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - simple project layout"]}),n.jsx("pre",{className:"code",children:`// src layout
// - src/main.c
// - src/math_utils.c
// - include/math_utils.h

// output - easier to read and maintain`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(rp,{})}),"Header file separation"]}),n.jsx("p",{className:"p",children:"Put function declarations in headers and implementations in .c files. This keeps modules clean and reusable. Always use include guards to avoid multiple include problems."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - header and source separation"]}),n.jsx("pre",{className:"code",children:`// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif

// math_utils.c
#include "math_utils.h"

int add(int a, int b) {
  return a + b;
}

// output - clean module with proper guard`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Defensive programming"]}),n.jsx("p",{className:"p",children:"Assume inputs can be wrong and memory allocation can fail. Check return values. Validate pointers before using them. Return early when something is invalid."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - check malloc and inputs"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
#include <stdlib.h>

int main() {
  int n = 3;

  if (n <= 0) {
    printf("Invalid n\\n");
    return 0;
  }

  int *arr = (int*)malloc(sizeof(int) * n);
  if (arr == NULL) {
    printf("Allocation failed\\n");
    return 0;
  }

  arr[0] = 10;
  printf("%d\\n", arr[0]); // output - 10

  free(arr);
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Am,{})}),"Avoiding buffer overflow"]}),n.jsx("p",{className:"p",children:"Buffer overflow happens when you write more data than a buffer can hold. This can crash your program and is also a major security issue. Prefer safer functions like fgets instead of gets. Always set size limits."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - unsafe vs safe input"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  char name[10];

  // unsafe - never use gets
  // gets(name);

  // safe - reads up to sizeof(name) - 1 chars
  fgets(name, sizeof(name), stdin);

  printf("%s", name);
  // output - whatever user typed (up to 9 chars + \\0)
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:'Tip - avoid scanf("%s", name) for long user input because it can overflow unless you provide a width limit.'})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(qa,{})}),"Secure coding basics"]}),n.jsx("p",{className:"p",children:"Secure C code is about preventing undefined behavior and validating everything. Main rules - initialize variables, check bounds, check return values, avoid dangerous functions, and free memory properly."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Initialize pointers to NULL"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Check bounds before writing to arrays"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Prefer snprintf over sprintf"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Use fgets for input instead of gets"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Free allocated memory and set pointer to NULL after free"]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - safe string formatting"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  char out[12];

  // safe - protects buffer size
  snprintf(out, sizeof(out), "%s", "hello");

  printf("%s\\n", out);
  // output - hello
  return 0;
}`})]})]})]})]})},Eu=[["about","About C",np],["intro","C Introduction",Zm],["syntax","Basic Syntax",ex],["operators","Operators",tx],["flow","Control Flow",ox],["functions","Functions",sx],["arrays","Arrays",lx],["strings","C Strings",dx],["pointers","Pointers",px],["structures","Structures and Unions",hx],["memory","Dynamic Memory",xx],["files","File Handling",vx],["preprocessor","Preprocessor",jx],["bits","Bit Manipulation",wx],["advanced","Advanced Concepts",bx],["data-structures","Data Structures",Cx],["c-cpp","C vs C++",zx],["best-practices","Best Practices",Lx]],Tx=()=>{var b;const[i,l]=ge.useState("about"),[c,u]=ge.useState(!1),m=ge.useRef(null),j=((b=Eu.find(([E])=>E===i))==null?void 0:b[2])||np;return ge.useEffect(()=>{var E;(E=m.current)==null||E.scrollTo({top:0,behavior:"auto"}),u(!1)},[i]),ge.useEffect(()=>{const E=m.current;if(!E)return;const C=()=>u(E.scrollTop>240);return C(),E.addEventListener("scroll",C,{passive:!0}),()=>E.removeEventListener("scroll",C)},[]),n.jsxs(Ua.Wrapper,{children:[n.jsx(Ua.Header,{children:n.jsx(Gm,{})}),n.jsxs(Ua.Main,{ref:m,children:[n.jsxs("div",{className:"workspaceLayout",children:[n.jsxs("aside",{className:"sideMenu","aria-label":"C notes topics",children:[n.jsx("p",{className:"menuLabel",children:"Study guide"}),n.jsx("nav",{children:Eu.map(([E,C])=>n.jsx("button",{type:"button",className:i===E?"active":"",onClick:()=>l(E),children:C},E))})]}),n.jsx("section",{className:"contentWrapper","aria-live":"polite",children:n.jsx(j,{})})]}),c&&n.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var E;return(E=m.current)==null?void 0:E.scrollTo({top:0,behavior:"smooth"})},children:n.jsx(wm,{"aria-hidden":"true"})}),n.jsx("div",{className:"footerWrapper",children:n.jsx(Xm,{})})]})]})};dh.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(Tx,{})}));
