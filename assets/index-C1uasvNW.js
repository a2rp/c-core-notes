(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&u(S)}).observe(document,{childList:!0,subtree:!0});function l(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(m){if(m.ep)return;m.ep=!0;const j=l(m);fetch(m.href,j)}})();function Zf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _a={exports:{}},to={},La={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Jf(){if(qd)return ne;qd=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),U=Symbol.iterator;function Z(x){return x===null||typeof x!="object"?null:(x=U&&x[U]||x["@@iterator"],typeof x=="function"?x:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,W={};function G(x,N,J){this.props=x,this.context=N,this.refs=W,this.updater=J||ae}G.prototype.isReactComponent={},G.prototype.setState=function(x,N){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,N,"setState")},G.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function me(){}me.prototype=G.prototype;function ce(x,N,J){this.props=x,this.context=N,this.refs=W,this.updater=J||ae}var te=ce.prototype=new me;te.constructor=ce,X(te,G.prototype),te.isPureReactComponent=!0;var L=Array.isArray,q=Object.prototype.hasOwnProperty,H={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function F(x,N,J){var ee,se={},oe=null,de=null;if(N!=null)for(ee in N.ref!==void 0&&(de=N.ref),N.key!==void 0&&(oe=""+N.key),N)q.call(N,ee)&&!T.hasOwnProperty(ee)&&(se[ee]=N[ee]);var le=arguments.length-2;if(le===1)se.children=J;else if(1<le){for(var xe=Array(le),ze=0;ze<le;ze++)xe[ze]=arguments[ze+2];se.children=xe}if(x&&x.defaultProps)for(ee in le=x.defaultProps,le)se[ee]===void 0&&(se[ee]=le[ee]);return{$$typeof:s,type:x,key:oe,ref:de,props:se,_owner:H.current}}function ve(x,N){return{$$typeof:s,type:x.type,key:N,ref:x.ref,props:x.props,_owner:x._owner}}function Pe(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function ie(x){var N={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(J){return N[J]})}var _e=/\/+/g;function Se(x,N){return typeof x=="object"&&x!==null&&x.key!=null?ie(""+x.key):N.toString(36)}function Ye(x,N,J,ee,se){var oe=typeof x;(oe==="undefined"||oe==="boolean")&&(x=null);var de=!1;if(x===null)de=!0;else switch(oe){case"string":case"number":de=!0;break;case"object":switch(x.$$typeof){case s:case c:de=!0}}if(de)return de=x,se=se(de),x=ee===""?"."+Se(de,0):ee,L(se)?(J="",x!=null&&(J=x.replace(_e,"$&/")+"/"),Ye(se,N,J,"",function(ze){return ze})):se!=null&&(Pe(se)&&(se=ve(se,J+(!se.key||de&&de.key===se.key?"":(""+se.key).replace(_e,"$&/")+"/")+x)),N.push(se)),1;if(de=0,ee=ee===""?".":ee+":",L(x))for(var le=0;le<x.length;le++){oe=x[le];var xe=ee+Se(oe,le);de+=Ye(oe,N,J,xe,se)}else if(xe=Z(x),typeof xe=="function")for(x=xe.call(x),le=0;!(oe=x.next()).done;)oe=oe.value,xe=ee+Se(oe,le++),de+=Ye(oe,N,J,xe,se);else if(oe==="object")throw N=String(x),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return de}function er(x,N,J){if(x==null)return x;var ee=[],se=0;return Ye(x,ee,"","",function(oe){return N.call(J,oe,se++)}),ee}function Ke(x){if(x._status===-1){var N=x._result;N=N(),N.then(function(J){(x._status===0||x._status===-1)&&(x._status=1,x._result=J)},function(J){(x._status===0||x._status===-1)&&(x._status=2,x._result=J)}),x._status===-1&&(x._status=0,x._result=N)}if(x._status===1)return x._result.default;throw x._result}var ye={current:null},I={transition:null},D={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:I,ReactCurrentOwner:H};function P(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:er,forEach:function(x,N,J){er(x,function(){N.apply(this,arguments)},J)},count:function(x){var N=0;return er(x,function(){N++}),N},toArray:function(x){return er(x,function(N){return N})||[]},only:function(x){if(!Pe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=G,ne.Fragment=l,ne.Profiler=m,ne.PureComponent=ce,ne.StrictMode=u,ne.Suspense=E,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,ne.act=P,ne.cloneElement=function(x,N,J){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ee=X({},x.props),se=x.key,oe=x.ref,de=x._owner;if(N!=null){if(N.ref!==void 0&&(oe=N.ref,de=H.current),N.key!==void 0&&(se=""+N.key),x.type&&x.type.defaultProps)var le=x.type.defaultProps;for(xe in N)q.call(N,xe)&&!T.hasOwnProperty(xe)&&(ee[xe]=N[xe]===void 0&&le!==void 0?le[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)ee.children=J;else if(1<xe){le=Array(xe);for(var ze=0;ze<xe;ze++)le[ze]=arguments[ze+2];ee.children=le}return{$$typeof:s,type:x.type,key:se,ref:oe,props:ee,_owner:de}},ne.createContext=function(x){return x={$$typeof:S,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:j,_context:x},x.Consumer=x},ne.createElement=F,ne.createFactory=function(x){var N=F.bind(null,x);return N.type=x,N},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:_,render:x}},ne.isValidElement=Pe,ne.lazy=function(x){return{$$typeof:Q,_payload:{_status:-1,_result:x},_init:Ke}},ne.memo=function(x,N){return{$$typeof:K,type:x,compare:N===void 0?null:N}},ne.startTransition=function(x){var N=I.transition;I.transition={};try{x()}finally{I.transition=N}},ne.unstable_act=P,ne.useCallback=function(x,N){return ye.current.useCallback(x,N)},ne.useContext=function(x){return ye.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return ye.current.useDeferredValue(x)},ne.useEffect=function(x,N){return ye.current.useEffect(x,N)},ne.useId=function(){return ye.current.useId()},ne.useImperativeHandle=function(x,N,J){return ye.current.useImperativeHandle(x,N,J)},ne.useInsertionEffect=function(x,N){return ye.current.useInsertionEffect(x,N)},ne.useLayoutEffect=function(x,N){return ye.current.useLayoutEffect(x,N)},ne.useMemo=function(x,N){return ye.current.useMemo(x,N)},ne.useReducer=function(x,N,J){return ye.current.useReducer(x,N,J)},ne.useRef=function(x){return ye.current.useRef(x)},ne.useState=function(x){return ye.current.useState(x)},ne.useSyncExternalStore=function(x,N,J){return ye.current.useSyncExternalStore(x,N,J)},ne.useTransition=function(){return ye.current.useTransition()},ne.version="18.3.1",ne}var Zd;function qa(){return Zd||(Zd=1,La.exports=Jf()),La.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function eh(){if(Jd)return to;Jd=1;var s=qa(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(_,E,K){var Q,U={},Z=null,ae=null;K!==void 0&&(Z=""+K),E.key!==void 0&&(Z=""+E.key),E.ref!==void 0&&(ae=E.ref);for(Q in E)u.call(E,Q)&&!j.hasOwnProperty(Q)&&(U[Q]=E[Q]);if(_&&_.defaultProps)for(Q in E=_.defaultProps,E)U[Q]===void 0&&(U[Q]=E[Q]);return{$$typeof:c,type:_,key:Z,ref:ae,props:U,_owner:m.current}}return to.Fragment=l,to.jsx=S,to.jsxs=S,to}var eu;function rh(){return eu||(eu=1,_a.exports=eh()),_a.exports}var n=rh(),ji={},Pa={exports:{}},lr={},Aa={exports:{}},Ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function th(){return ru||(ru=1,(function(s){function c(I,D){var P=I.length;I.push(D);e:for(;0<P;){var x=P-1>>>1,N=I[x];if(0<m(N,D))I[x]=D,I[P]=N,P=x;else break e}}function l(I){return I.length===0?null:I[0]}function u(I){if(I.length===0)return null;var D=I[0],P=I.pop();if(P!==D){I[0]=P;e:for(var x=0,N=I.length,J=N>>>1;x<J;){var ee=2*(x+1)-1,se=I[ee],oe=ee+1,de=I[oe];if(0>m(se,P))oe<N&&0>m(de,se)?(I[x]=de,I[oe]=P,x=oe):(I[x]=se,I[ee]=P,x=ee);else if(oe<N&&0>m(de,P))I[x]=de,I[oe]=P,x=oe;else break e}}return D}function m(I,D){var P=I.sortIndex-D.sortIndex;return P!==0?P:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var S=Date,_=S.now();s.unstable_now=function(){return S.now()-_}}var E=[],K=[],Q=1,U=null,Z=3,ae=!1,X=!1,W=!1,G=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(I){for(var D=l(K);D!==null;){if(D.callback===null)u(K);else if(D.startTime<=I)u(K),D.sortIndex=D.expirationTime,c(E,D);else break;D=l(K)}}function L(I){if(W=!1,te(I),!X)if(l(E)!==null)X=!0,Ke(q);else{var D=l(K);D!==null&&ye(L,D.startTime-I)}}function q(I,D){X=!1,W&&(W=!1,me(F),F=-1),ae=!0;var P=Z;try{for(te(D),U=l(E);U!==null&&(!(U.expirationTime>D)||I&&!ie());){var x=U.callback;if(typeof x=="function"){U.callback=null,Z=U.priorityLevel;var N=x(U.expirationTime<=D);D=s.unstable_now(),typeof N=="function"?U.callback=N:U===l(E)&&u(E),te(D)}else u(E);U=l(E)}if(U!==null)var J=!0;else{var ee=l(K);ee!==null&&ye(L,ee.startTime-D),J=!1}return J}finally{U=null,Z=P,ae=!1}}var H=!1,T=null,F=-1,ve=5,Pe=-1;function ie(){return!(s.unstable_now()-Pe<ve)}function _e(){if(T!==null){var I=s.unstable_now();Pe=I;var D=!0;try{D=T(!0,I)}finally{D?Se():(H=!1,T=null)}}else H=!1}var Se;if(typeof ce=="function")Se=function(){ce(_e)};else if(typeof MessageChannel!="undefined"){var Ye=new MessageChannel,er=Ye.port2;Ye.port1.onmessage=_e,Se=function(){er.postMessage(null)}}else Se=function(){G(_e,0)};function Ke(I){T=I,H||(H=!0,Se())}function ye(I,D){F=G(function(){I(s.unstable_now())},D)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_continueExecution=function(){X||ae||(X=!0,Ke(q))},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return Z},s.unstable_getFirstCallbackNode=function(){return l(E)},s.unstable_next=function(I){switch(Z){case 1:case 2:case 3:var D=3;break;default:D=Z}var P=Z;Z=D;try{return I()}finally{Z=P}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=Z;Z=I;try{return D()}finally{Z=P}},s.unstable_scheduleCallback=function(I,D,P){var x=s.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?x+P:x):P=x,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=P+N,I={id:Q++,callback:D,priorityLevel:I,startTime:P,expirationTime:N,sortIndex:-1},P>x?(I.sortIndex=P,c(K,I),l(E)===null&&I===l(K)&&(W?(me(F),F=-1):W=!0,ye(L,P-x))):(I.sortIndex=N,c(E,I),X||ae||(X=!0,Ke(q))),I},s.unstable_shouldYield=ie,s.unstable_wrapCallback=function(I){var D=Z;return function(){var P=Z;Z=D;try{return I.apply(this,arguments)}finally{Z=P}}}})(Ba)),Ba}var tu;function nh(){return tu||(tu=1,Aa.exports=th()),Aa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nu;function oh(){if(nu)return lr;nu=1;var s=qa(),c=nh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function j(e,r){S(e,r),S(e+"Capture",r)}function S(e,r){for(m[e]=r,e=0;e<r.length;e++)u.add(r[e])}var _=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),E=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},U={};function Z(e){return E.call(U,e)?!0:E.call(Q,e)?!1:K.test(e)?U[e]=!0:(Q[e]=!0,!1)}function ae(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,r,t,o){if(r===null||typeof r=="undefined"||ae(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function W(e,r,t,o,i,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){G[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];G[r]=new W(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){G[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){G[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){G[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){G[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){G[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){G[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){G[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(me,ce);G[r]=new W(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(me,ce);G[r]=new W(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(me,ce);G[r]=new W(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),G.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){G[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,r,t,o){var i=G.hasOwnProperty(r)?G[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,t,i,o)&&(t=null),o||i===null?Z(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(r=i.attributeName,o=i.attributeNamespace,t===null?e.removeAttribute(r):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),H=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),ie=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),I=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,x;function N(e){if(x===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+e}var J=!1;function ee(e,r){if(!e||J)return"";J=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),a=o.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var f=`
`+i[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?N(e):""}function se(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case H:return"Portal";case ve:return"Profiler";case F:return"StrictMode";case Se:return"Suspense";case Ye:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case _e:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:oe(e.type)||"Memo";case Ke:r=e._payload,e=e._init;try{return oe(e(r))}catch{}}return null}function de(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ze(e){var r=xe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Kr(e){e._valueTracker||(e._valueTracker=ze(e))}function vt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fi(e,r){var t=r.checked;return P({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function ol(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=le(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function il(e,r){r=r.checked,r!=null&&te(e,"checked",r,!1)}function Mi(e,r){il(e,r);var t=le(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Di(e,r.type,t):r.hasOwnProperty("defaultValue")&&Di(e,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function sl(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Di(e,r,t){(r!=="number"||kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gn=Array.isArray;function Rt(e,r,t,o){if(e=e.options,r){r={};for(var i=0;i<t.length;i++)r["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=r.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&o&&(e[t].defaultSelected=!0)}else{for(t=""+le(t),r=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Ui(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return P({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function al(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(l(92));if(gn(t)){if(1<t.length)throw Error(l(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:le(t)}}function ll(e,r){var t=le(r.value),o=le(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function cl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function dl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wi(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?dl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,ul=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function vn(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(yn).forEach(function(e){rp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),yn[r]=yn[e]})});function pl(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||yn.hasOwnProperty(e)&&yn[e]?(""+r).trim():r+"px"}function fl(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,i=pl(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,i):e[t]=i}}var tp=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hi(e,r){if(r){if(tp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function $i(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gi=null,Ft=null,Mt=null;function hl(e){if(e=Un(e)){if(typeof Gi!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Bo(r),Gi(e.stateNode,e.type,r))}}function ml(e){Ft?Mt?Mt.push(e):Mt=[e]:Ft=e}function xl(){if(Ft){var e=Ft,r=Mt;if(Mt=Ft=null,hl(e),r)for(e=0;e<r.length;e++)hl(r[e])}}function gl(e,r){return e(r)}function vl(){}var Yi=!1;function yl(e,r,t){if(Yi)return e(r,t);Yi=!0;try{return gl(e,r,t)}finally{Yi=!1,(Ft!==null||Mt!==null)&&(vl(),xl())}}function jn(e,r){var t=e.stateNode;if(t===null)return null;var o=Bo(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,r,typeof t));return t}var Ki=!1;if(_)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ki=!1}function np(e,r,t,o,i,a,d,p,f){var y=Array.prototype.slice.call(arguments,3);try{r.apply(t,y)}catch(k){this.onError(k)}}var wn=!1,fo=null,ho=!1,Xi=null,op={onError:function(e){wn=!0,fo=e}};function ip(e,r,t,o,i,a,d,p,f){wn=!1,fo=null,np.apply(op,arguments)}function sp(e,r,t,o,i,a,d,p,f){if(ip.apply(this,arguments),wn){if(wn){var y=fo;wn=!1,fo=null}else throw Error(l(198));ho||(ho=!0,Xi=y)}}function yt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function jl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Nl(e){if(yt(e)!==e)throw Error(l(188))}function ap(e){var r=e.alternate;if(!r){if(r=yt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var t=e,o=r;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){t=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return Nl(i),e;if(a===o)return Nl(i),r;a=a.sibling}throw Error(l(188))}if(t.return!==o.return)t=i,o=a;else{for(var d=!1,p=i.child;p;){if(p===t){d=!0,t=i,o=a;break}if(p===o){d=!0,o=i,t=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===t){d=!0,t=a,o=i;break}if(p===o){d=!0,o=a,t=i;break}p=p.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==o)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:r}function wl(e){return e=ap(e),e!==null?kl(e):null}function kl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=kl(e);if(r!==null)return r;e=e.sibling}return null}var bl=c.unstable_scheduleCallback,Sl=c.unstable_cancelCallback,lp=c.unstable_shouldYield,cp=c.unstable_requestPaint,Ae=c.unstable_now,dp=c.unstable_getCurrentPriorityLevel,qi=c.unstable_ImmediatePriority,Cl=c.unstable_UserBlockingPriority,mo=c.unstable_NormalPriority,up=c.unstable_LowPriority,El=c.unstable_IdlePriority,xo=null,Pr=null;function pp(e){if(Pr&&typeof Pr.onCommitFiberRoot=="function")try{Pr.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var br=Math.clz32?Math.clz32:mp,fp=Math.log,hp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(fp(e)/hp|0)|0}var go=64,vo=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,d=t&268435455;if(d!==0){var p=d&~i;p!==0?o=kn(p):(a&=d,a!==0&&(o=kn(a)))}else d=t&~i,d!==0?o=kn(d):a!==0&&(o=kn(a));if(o===0)return 0;if(r!==0&&r!==o&&(r&i)===0&&(i=o&-o,a=r&-r,i>=a||i===16&&(a&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-br(r),i=1<<t,o|=e[t],r&=~i;return o}function xp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-br(a),p=1<<d,f=i[d];f===-1?((p&t)===0||(p&o)!==0)&&(i[d]=xp(p,r)):f<=r&&(e.expiredLanes|=p),a&=~p}}function Zi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zl(){var e=go;return go<<=1,(go&4194240)===0&&(go=64),e}function Ji(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function bn(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-br(r),e[r]=t}function vp(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-br(t),a=1<<i;r[i]=0,o[i]=-1,e[i]=-1,t&=~a}}function es(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-br(t),i=1<<o;i&r|e[o]&r&&(e[o]|=r),t&=~i}}var ge=0;function Il(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Tl,rs,_l,Ll,Pl,ts=!1,jo=[],Xr=null,qr=null,Zr=null,Sn=new Map,Cn=new Map,Jr=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(e,r){switch(e){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Sn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(r.pointerId)}}function En(e,r,t,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},r!==null&&(r=Un(r),r!==null&&rs(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function jp(e,r,t,o,i){switch(r){case"focusin":return Xr=En(Xr,e,r,t,o,i),!0;case"dragenter":return qr=En(qr,e,r,t,o,i),!0;case"mouseover":return Zr=En(Zr,e,r,t,o,i),!0;case"pointerover":var a=i.pointerId;return Sn.set(a,En(Sn.get(a)||null,e,r,t,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Cn.set(a,En(Cn.get(a)||null,e,r,t,o,i)),!0}return!1}function Bl(e){var r=jt(e.target);if(r!==null){var t=yt(r);if(t!==null){if(r=t.tag,r===13){if(r=jl(t),r!==null){e.blockedOn=r,Pl(e.priority,function(){_l(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=os(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Vi=o,t.target.dispatchEvent(o),Vi=null}else return r=Un(t),r!==null&&rs(r),e.blockedOn=t,!1;r.shift()}return!0}function Ol(e,r,t){No(e)&&t.delete(r)}function Np(){ts=!1,Xr!==null&&No(Xr)&&(Xr=null),qr!==null&&No(qr)&&(qr=null),Zr!==null&&No(Zr)&&(Zr=null),Sn.forEach(Ol),Cn.forEach(Ol)}function zn(e,r){e.blockedOn===r&&(e.blockedOn=null,ts||(ts=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Np)))}function In(e){function r(i){return zn(i,e)}if(0<jo.length){zn(jo[0],e);for(var t=1;t<jo.length;t++){var o=jo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Xr!==null&&zn(Xr,e),qr!==null&&zn(qr,e),Zr!==null&&zn(Zr,e),Sn.forEach(r),Cn.forEach(r),t=0;t<Jr.length;t++)o=Jr[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Jr.length&&(t=Jr[0],t.blockedOn===null);)Bl(t),t.blockedOn===null&&Jr.shift()}var Dt=L.ReactCurrentBatchConfig,wo=!0;function wp(e,r,t,o){var i=ge,a=Dt.transition;Dt.transition=null;try{ge=1,ns(e,r,t,o)}finally{ge=i,Dt.transition=a}}function kp(e,r,t,o){var i=ge,a=Dt.transition;Dt.transition=null;try{ge=4,ns(e,r,t,o)}finally{ge=i,Dt.transition=a}}function ns(e,r,t,o){if(wo){var i=os(e,r,t,o);if(i===null)Ns(e,r,o,ko,t),Al(e,o);else if(jp(i,e,r,t,o))o.stopPropagation();else if(Al(e,o),r&4&&-1<yp.indexOf(e)){for(;i!==null;){var a=Un(i);if(a!==null&&Tl(a),a=os(e,r,t,o),a===null&&Ns(e,r,o,ko,t),a===i)break;i=a}i!==null&&o.stopPropagation()}else Ns(e,r,o,null,t)}}var ko=null;function os(e,r,t,o){if(ko=null,e=Qi(o),e=jt(e),e!==null)if(r=yt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=jl(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return ko=e,null}function Rl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dp()){case qi:return 1;case Cl:return 4;case mo:case up:return 16;case El:return 536870912;default:return 16}default:return 16}}var et=null,is=null,bo=null;function Fl(){if(bo)return bo;var e,r=is,t=r.length,o,i="value"in et?et.value:et.textContent,a=i.length;for(e=0;e<t&&r[e]===i[e];e++);var d=t-e;for(o=1;o<=d&&r[t-o]===i[a-o];o++);return bo=i.slice(e,1<o?1-o:void 0)}function So(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Co(){return!0}function Ml(){return!1}function dr(e){function r(t,o,i,a,d){this._reactName=t,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Co:Ml,this.isPropagationStopped=Ml,this}return P(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),r}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=dr(Ut),Tn=P({},Ut,{view:0,detail:0}),bp=dr(Tn),as,ls,_n,Eo=P({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(as=e.screenX-_n.screenX,ls=e.screenY-_n.screenY):ls=as=0,_n=e),as)},movementY:function(e){return"movementY"in e?e.movementY:ls}}),Dl=dr(Eo),Sp=P({},Eo,{dataTransfer:0}),Cp=dr(Sp),Ep=P({},Tn,{relatedTarget:0}),cs=dr(Ep),zp=P({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),Ip=dr(zp),Tp=P({},Ut,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=dr(Tp),Lp=P({},Ut,{data:0}),Ul=dr(Lp),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Op(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Bp[e])?!!r[e]:!1}function ds(){return Op}var Rp=P({},Tn,{key:function(e){if(e.key){var r=Pp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fp=dr(Rp),Mp=P({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=dr(Mp),Dp=P({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Up=dr(Dp),Wp=P({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hp=dr(Wp),$p=P({},Eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=dr($p),Qp=[9,13,27,32],us=_&&"CompositionEvent"in window,Ln=null;_&&"documentMode"in document&&(Ln=document.documentMode);var Gp=_&&"TextEvent"in window&&!Ln,Hl=_&&(!us||Ln&&8<Ln&&11>=Ln),$l=" ",Vl=!1;function Ql(e,r){switch(e){case"keyup":return Qp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function Yp(e,r){switch(e){case"compositionend":return Gl(r);case"keypress":return r.which!==32?null:(Vl=!0,$l);case"textInput":return e=r.data,e===$l&&Vl?null:e;default:return null}}function Kp(e,r){if(Wt)return e==="compositionend"||!us&&Ql(e,r)?(e=Fl(),bo=is=et=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Hl&&r.locale!=="ko"?null:r.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Xp[e.type]:r==="textarea"}function Kl(e,r,t,o){ml(o),r=Lo(r,"onChange"),0<r.length&&(t=new ss("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var Pn=null,An=null;function qp(e){fc(e,0)}function zo(e){var r=Gt(e);if(vt(r))return e}function Zp(e,r){if(e==="change")return r}var Xl=!1;if(_){var ps;if(_){var fs="oninput"in document;if(!fs){var ql=document.createElement("div");ql.setAttribute("oninput","return;"),fs=typeof ql.oninput=="function"}ps=fs}else ps=!1;Xl=ps&&(!document.documentMode||9<document.documentMode)}function Zl(){Pn&&(Pn.detachEvent("onpropertychange",Jl),An=Pn=null)}function Jl(e){if(e.propertyName==="value"&&zo(An)){var r=[];Kl(r,An,e,Qi(e)),yl(qp,r)}}function Jp(e,r,t){e==="focusin"?(Zl(),Pn=r,An=t,Pn.attachEvent("onpropertychange",Jl)):e==="focusout"&&Zl()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(An)}function rf(e,r){if(e==="click")return zo(r)}function tf(e,r){if(e==="input"||e==="change")return zo(r)}function nf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Sr=typeof Object.is=="function"?Object.is:nf;function Bn(e,r){if(Sr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var i=t[o];if(!E.call(r,i)||!Sr(e[i],r[i]))return!1}return!0}function ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rc(e,r){var t=ec(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ec(t)}}function tc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?tc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function nc(){for(var e=window,r=kr();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=kr(e.document)}return r}function hs(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function of(e){var r=nc(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&tc(t.ownerDocument.documentElement,t)){if(o!==null&&hs(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=rc(t,a);var d=rc(t,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sf=_&&"documentMode"in document&&11>=document.documentMode,Ht=null,ms=null,On=null,xs=!1;function oc(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;xs||Ht==null||Ht!==kr(o)||(o=Ht,"selectionStart"in o&&hs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),On&&Bn(On,o)||(On=o,o=Lo(ms,"onSelect"),0<o.length&&(r=new ss("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Ht)))}function Io(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var $t={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},gs={},ic={};_&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function To(e){if(gs[e])return gs[e];if(!$t[e])return e;var r=$t[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in ic)return gs[e]=r[t];return e}var sc=To("animationend"),ac=To("animationiteration"),lc=To("animationstart"),cc=To("transitionend"),dc=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,r){dc.set(e,r),j(r,[e])}for(var vs=0;vs<uc.length;vs++){var ys=uc[vs],af=ys.toLowerCase(),lf=ys[0].toUpperCase()+ys.slice(1);rt(af,"on"+lf)}rt(sc,"onAnimationEnd"),rt(ac,"onAnimationIteration"),rt(lc,"onAnimationStart"),rt("dblclick","onDoubleClick"),rt("focusin","onFocus"),rt("focusout","onBlur"),rt(cc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function pc(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,sp(o,r,void 0,e),e.currentTarget=null}function fc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],i=o.event;o=o.listeners;e:{var a=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],f=p.instance,y=p.currentTarget;if(p=p.listener,f!==a&&i.isPropagationStopped())break e;pc(i,p,y),a=f}else for(d=0;d<o.length;d++){if(p=o[d],f=p.instance,y=p.currentTarget,p=p.listener,f!==a&&i.isPropagationStopped())break e;pc(i,p,y),a=f}}}if(ho)throw e=Xi,ho=!1,Xi=null,e}function we(e,r){var t=r[Es];t===void 0&&(t=r[Es]=new Set);var o=e+"__bubble";t.has(o)||(hc(r,e,2,!1),t.add(o))}function js(e,r,t){var o=0;r&&(o|=4),hc(t,e,o,r)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[_o]){e[_o]=!0,u.forEach(function(t){t!=="selectionchange"&&(cf.has(t)||js(t,!1,e),js(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[_o]||(r[_o]=!0,js("selectionchange",!1,r))}}function hc(e,r,t,o){switch(Rl(r)){case 1:var i=wp;break;case 4:i=kp;break;default:i=ns}t=i.bind(null,r,t,e),i=void 0,!Ki||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,t,{capture:!0,passive:i}):e.addEventListener(r,t,!0):i!==void 0?e.addEventListener(r,t,{passive:i}):e.addEventListener(r,t,!1)}function Ns(e,r,t,o,i){var a=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;d=d.return}for(;p!==null;){if(d=jt(p),d===null)return;if(f=d.tag,f===5||f===6){o=a=d;continue e}p=p.parentNode}}o=o.return}yl(function(){var y=a,k=Qi(t),b=[];e:{var w=dc.get(e);if(w!==void 0){var A=ss,O=e;switch(e){case"keypress":if(So(t)===0)break e;case"keydown":case"keyup":A=Fp;break;case"focusin":O="focus",A=cs;break;case"focusout":O="blur",A=cs;break;case"beforeblur":case"afterblur":A=cs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Up;break;case sc:case ac:case lc:A=Ip;break;case cc:A=Hp;break;case"scroll":A=bp;break;case"wheel":A=Vp;break;case"copy":case"cut":case"paste":A=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Wl}var R=(r&4)!==0,Be=!R&&e==="scroll",g=R?w!==null?w+"Capture":null:w;R=[];for(var h=y,v;h!==null;){v=h;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=jn(h,g),C!=null&&R.push(Mn(h,C,v)))),Be)break;h=h.return}0<R.length&&(w=new A(w,O,null,t,k),b.push({event:w,listeners:R}))}}if((r&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",w&&t!==Vi&&(O=t.relatedTarget||t.fromElement)&&(jt(O)||O[Fr]))break e;if((A||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,A?(O=t.relatedTarget||t.toElement,A=y,O=O?jt(O):null,O!==null&&(Be=yt(O),O!==Be||O.tag!==5&&O.tag!==6)&&(O=null)):(A=null,O=y),A!==O)){if(R=Dl,C="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(R=Wl,C="onPointerLeave",g="onPointerEnter",h="pointer"),Be=A==null?w:Gt(A),v=O==null?w:Gt(O),w=new R(C,h+"leave",A,t,k),w.target=Be,w.relatedTarget=v,C=null,jt(k)===y&&(R=new R(g,h+"enter",O,t,k),R.target=v,R.relatedTarget=Be,C=R),Be=C,A&&O)r:{for(R=A,g=O,h=0,v=R;v;v=Vt(v))h++;for(v=0,C=g;C;C=Vt(C))v++;for(;0<h-v;)R=Vt(R),h--;for(;0<v-h;)g=Vt(g),v--;for(;h--;){if(R===g||g!==null&&R===g.alternate)break r;R=Vt(R),g=Vt(g)}R=null}else R=null;A!==null&&mc(b,w,A,R,!1),O!==null&&Be!==null&&mc(b,Be,O,R,!0)}}e:{if(w=y?Gt(y):window,A=w.nodeName&&w.nodeName.toLowerCase(),A==="select"||A==="input"&&w.type==="file")var M=Zp;else if(Yl(w))if(Xl)M=tf;else{M=ef;var $=Jp}else(A=w.nodeName)&&A.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(M=rf);if(M&&(M=M(e,y))){Kl(b,M,t,k);break e}$&&$(e,w,y),e==="focusout"&&($=w._wrapperState)&&$.controlled&&w.type==="number"&&Di(w,"number",w.value)}switch($=y?Gt(y):window,e){case"focusin":(Yl($)||$.contentEditable==="true")&&(Ht=$,ms=y,On=null);break;case"focusout":On=ms=Ht=null;break;case"mousedown":xs=!0;break;case"contextmenu":case"mouseup":case"dragend":xs=!1,oc(b,t,k);break;case"selectionchange":if(sf)break;case"keydown":case"keyup":oc(b,t,k)}var V;if(us)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Wt?Ql(e,t)&&(Y="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Y="onCompositionStart");Y&&(Hl&&t.locale!=="ko"&&(Wt||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Wt&&(V=Fl()):(et=k,is="value"in et?et.value:et.textContent,Wt=!0)),$=Lo(y,Y),0<$.length&&(Y=new Ul(Y,e,null,t,k),b.push({event:Y,listeners:$}),V?Y.data=V:(V=Gl(t),V!==null&&(Y.data=V)))),(V=Gp?Yp(e,t):Kp(e,t))&&(y=Lo(y,"onBeforeInput"),0<y.length&&(k=new Ul("onBeforeInput","beforeinput",null,t,k),b.push({event:k,listeners:y}),k.data=V))}fc(b,r)})}function Mn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Lo(e,r){for(var t=r+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=jn(e,t),a!=null&&o.unshift(Mn(e,a,i)),a=jn(e,r),a!=null&&o.push(Mn(e,a,i))),e=e.return}return o}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mc(e,r,t,o,i){for(var a=r._reactName,d=[];t!==null&&t!==o;){var p=t,f=p.alternate,y=p.stateNode;if(f!==null&&f===o)break;p.tag===5&&y!==null&&(p=y,i?(f=jn(t,a),f!=null&&d.unshift(Mn(t,f,p))):i||(f=jn(t,a),f!=null&&d.push(Mn(t,f,p)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var df=/\r\n?/g,uf=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(uf,"")}function Po(e,r,t){if(r=xc(r),xc(e)!==r&&t)throw Error(l(425))}function Ao(){}var ws=null,ks=null;function bs(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ss=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,gc=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof gc!="undefined"?function(e){return gc.resolve(null).then(e).catch(hf)}:Ss;function hf(e){setTimeout(function(){throw e})}function Cs(e,r){var t=r,o=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(o===0){e.removeChild(i),In(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=i}while(t);In(r)}function tt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function vc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Qt=Math.random().toString(36).slice(2),Ar="__reactFiber$"+Qt,Dn="__reactProps$"+Qt,Fr="__reactContainer$"+Qt,Es="__reactEvents$"+Qt,mf="__reactListeners$"+Qt,xf="__reactHandles$"+Qt;function jt(e){var r=e[Ar];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Fr]||t[Ar]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=vc(e);e!==null;){if(t=e[Ar])return t;e=vc(e)}return r}e=t,t=e.parentNode}return null}function Un(e){return e=e[Ar]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Bo(e){return e[Dn]||null}var zs=[],Yt=-1;function nt(e){return{current:e}}function ke(e){0>Yt||(e.current=zs[Yt],zs[Yt]=null,Yt--)}function je(e,r){Yt++,zs[Yt]=e.current,e.current=r}var ot={},Xe=nt(ot),nr=nt(!1),Nt=ot;function Kt(e,r){var t=e.type.contextTypes;if(!t)return ot;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=r[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function or(e){return e=e.childContextTypes,e!=null}function Oo(){ke(nr),ke(Xe)}function yc(e,r,t){if(Xe.current!==ot)throw Error(l(168));je(Xe,r),je(nr,t)}function jc(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(l(108,de(e)||"Unknown",i));return P({},t,o)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ot,Nt=Xe.current,je(Xe,e),je(nr,nr.current),!0}function Nc(e,r,t){var o=e.stateNode;if(!o)throw Error(l(169));t?(e=jc(e,r,Nt),o.__reactInternalMemoizedMergedChildContext=e,ke(nr),ke(Xe),je(Xe,e)):ke(nr),je(nr,t)}var Mr=null,Fo=!1,Is=!1;function wc(e){Mr===null?Mr=[e]:Mr.push(e)}function gf(e){Fo=!0,wc(e)}function it(){if(!Is&&Mr!==null){Is=!0;var e=0,r=ge;try{var t=Mr;for(ge=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Mr=null,Fo=!1}catch(i){throw Mr!==null&&(Mr=Mr.slice(e+1)),bl(qi,it),i}finally{ge=r,Is=!1}}return null}var Xt=[],qt=0,Mo=null,Do=0,xr=[],gr=0,wt=null,Dr=1,Ur="";function kt(e,r){Xt[qt++]=Do,Xt[qt++]=Mo,Mo=e,Do=r}function kc(e,r,t){xr[gr++]=Dr,xr[gr++]=Ur,xr[gr++]=wt,wt=e;var o=Dr;e=Ur;var i=32-br(o)-1;o&=~(1<<i),t+=1;var a=32-br(r)+i;if(30<a){var d=i-i%5;a=(o&(1<<d)-1).toString(32),o>>=d,i-=d,Dr=1<<32-br(r)+i|t<<i|o,Ur=a+e}else Dr=1<<a|t<<i|o,Ur=e}function Ts(e){e.return!==null&&(kt(e,1),kc(e,1,0))}function _s(e){for(;e===Mo;)Mo=Xt[--qt],Xt[qt]=null,Do=Xt[--qt],Xt[qt]=null;for(;e===wt;)wt=xr[--gr],xr[gr]=null,Ur=xr[--gr],xr[gr]=null,Dr=xr[--gr],xr[gr]=null}var ur=null,pr=null,Ce=!1,Cr=null;function bc(e,r){var t=Nr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Sc(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ur=e,pr=tt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ur=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=wt!==null?{id:Dr,overflow:Ur}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Nr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ur=e,pr=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(Ce){var r=pr;if(r){var t=r;if(!Sc(e,r)){if(Ls(e))throw Error(l(418));r=tt(t.nextSibling);var o=ur;r&&Sc(e,r)?bc(o,t):(e.flags=e.flags&-4097|2,Ce=!1,ur=e)}}else{if(Ls(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ce=!1,ur=e}}}function Cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Uo(e){if(e!==ur)return!1;if(!Ce)return Cc(e),Ce=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!bs(e.type,e.memoizedProps)),r&&(r=pr)){if(Ls(e))throw Ec(),Error(l(418));for(;r;)bc(e,r),r=tt(r.nextSibling)}if(Cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){pr=tt(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=ur?tt(e.stateNode.nextSibling):null;return!0}function Ec(){for(var e=pr;e;)e=tt(e.nextSibling)}function Zt(){pr=ur=null,Ce=!1}function As(e){Cr===null?Cr=[e]:Cr.push(e)}var vf=L.ReactCurrentBatchConfig;function Wn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var o=t.stateNode}if(!o)throw Error(l(147,e));var i=o,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Wo(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function zc(e){var r=e._init;return r(e._payload)}function Ic(e){function r(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function t(g,h){if(!e)return null;for(;h!==null;)r(g,h),h=h.sibling;return null}function o(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=ft(g,h),g.index=0,g.sibling=null,g}function a(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function p(g,h,v,C){return h===null||h.tag!==6?(h=Sa(v,g.mode,C),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v,C){var M=v.type;return M===T?k(g,h,v.props.children,C,v.key):h!==null&&(h.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ke&&zc(M)===h.type)?(C=i(h,v.props),C.ref=Wn(g,h,v),C.return=g,C):(C=pi(v.type,v.key,v.props,null,g.mode,C),C.ref=Wn(g,h,v),C.return=g,C)}function y(g,h,v,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Ca(v,g.mode,C),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function k(g,h,v,C,M){return h===null||h.tag!==7?(h=_t(v,g.mode,C,M),h.return=g,h):(h=i(h,v),h.return=g,h)}function b(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Sa(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case q:return v=pi(h.type,h.key,h.props,null,g.mode,v),v.ref=Wn(g,null,h),v.return=g,v;case H:return h=Ca(h,g.mode,v),h.return=g,h;case Ke:var C=h._init;return b(g,C(h._payload),v)}if(gn(h)||D(h))return h=_t(h,g.mode,v,null),h.return=g,h;Wo(g,h)}return null}function w(g,h,v,C){var M=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:p(g,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return v.key===M?f(g,h,v,C):null;case H:return v.key===M?y(g,h,v,C):null;case Ke:return M=v._init,w(g,h,M(v._payload),C)}if(gn(v)||D(v))return M!==null?null:k(g,h,v,C,null);Wo(g,v)}return null}function A(g,h,v,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,p(h,g,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return g=g.get(C.key===null?v:C.key)||null,f(h,g,C,M);case H:return g=g.get(C.key===null?v:C.key)||null,y(h,g,C,M);case Ke:var $=C._init;return A(g,h,v,$(C._payload),M)}if(gn(C)||D(C))return g=g.get(v)||null,k(h,g,C,M,null);Wo(h,C)}return null}function O(g,h,v,C){for(var M=null,$=null,V=h,Y=h=0,He=null;V!==null&&Y<v.length;Y++){V.index>Y?(He=V,V=null):He=V.sibling;var pe=w(g,V,v[Y],C);if(pe===null){V===null&&(V=He);break}e&&V&&pe.alternate===null&&r(g,V),h=a(pe,h,Y),$===null?M=pe:$.sibling=pe,$=pe,V=He}if(Y===v.length)return t(g,V),Ce&&kt(g,Y),M;if(V===null){for(;Y<v.length;Y++)V=b(g,v[Y],C),V!==null&&(h=a(V,h,Y),$===null?M=V:$.sibling=V,$=V);return Ce&&kt(g,Y),M}for(V=o(g,V);Y<v.length;Y++)He=A(V,g,Y,v[Y],C),He!==null&&(e&&He.alternate!==null&&V.delete(He.key===null?Y:He.key),h=a(He,h,Y),$===null?M=He:$.sibling=He,$=He);return e&&V.forEach(function(ht){return r(g,ht)}),Ce&&kt(g,Y),M}function R(g,h,v,C){var M=D(v);if(typeof M!="function")throw Error(l(150));if(v=M.call(v),v==null)throw Error(l(151));for(var $=M=null,V=h,Y=h=0,He=null,pe=v.next();V!==null&&!pe.done;Y++,pe=v.next()){V.index>Y?(He=V,V=null):He=V.sibling;var ht=w(g,V,pe.value,C);if(ht===null){V===null&&(V=He);break}e&&V&&ht.alternate===null&&r(g,V),h=a(ht,h,Y),$===null?M=ht:$.sibling=ht,$=ht,V=He}if(pe.done)return t(g,V),Ce&&kt(g,Y),M;if(V===null){for(;!pe.done;Y++,pe=v.next())pe=b(g,pe.value,C),pe!==null&&(h=a(pe,h,Y),$===null?M=pe:$.sibling=pe,$=pe);return Ce&&kt(g,Y),M}for(V=o(g,V);!pe.done;Y++,pe=v.next())pe=A(V,g,Y,pe.value,C),pe!==null&&(e&&pe.alternate!==null&&V.delete(pe.key===null?Y:pe.key),h=a(pe,h,Y),$===null?M=pe:$.sibling=pe,$=pe);return e&&V.forEach(function(qf){return r(g,qf)}),Ce&&kt(g,Y),M}function Be(g,h,v,C){if(typeof v=="object"&&v!==null&&v.type===T&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case q:e:{for(var M=v.key,$=h;$!==null;){if($.key===M){if(M=v.type,M===T){if($.tag===7){t(g,$.sibling),h=i($,v.props.children),h.return=g,g=h;break e}}else if($.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ke&&zc(M)===$.type){t(g,$.sibling),h=i($,v.props),h.ref=Wn(g,$,v),h.return=g,g=h;break e}t(g,$);break}else r(g,$);$=$.sibling}v.type===T?(h=_t(v.props.children,g.mode,C,v.key),h.return=g,g=h):(C=pi(v.type,v.key,v.props,null,g.mode,C),C.ref=Wn(g,h,v),C.return=g,g=C)}return d(g);case H:e:{for($=v.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{t(g,h);break}else r(g,h);h=h.sibling}h=Ca(v,g.mode,C),h.return=g,g=h}return d(g);case Ke:return $=v._init,Be(g,h,$(v._payload),C)}if(gn(v))return O(g,h,v,C);if(D(v))return R(g,h,v,C);Wo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(g,h.sibling),h=i(h,v),h.return=g,g=h):(t(g,h),h=Sa(v,g.mode,C),h.return=g,g=h),d(g)):t(g,h)}return Be}var Jt=Ic(!0),Tc=Ic(!1),Ho=nt(null),$o=null,en=null,Bs=null;function Os(){Bs=en=$o=null}function Rs(e){var r=Ho.current;ke(Ho),e._currentValue=r}function Fs(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function rn(e,r){$o=e,Bs=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(ir=!0),e.firstContext=null)}function vr(e){var r=e._currentValue;if(Bs!==e)if(e={context:e,memoizedValue:r,next:null},en===null){if($o===null)throw Error(l(308));en=e,$o.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return r}var bt=null;function Ms(e){bt===null?bt=[e]:bt.push(e)}function _c(e,r,t,o){var i=r.interleaved;return i===null?(t.next=t,Ms(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wr(e,o)}function Wr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var st=!1;function Ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function at(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ue&2)!==0){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,Wr(e,t)}return i=o.interleaved,i===null?(r.next=r,Ms(o)):(r.next=i.next,i.next=r),o.interleaved=r,Wr(e,t)}function Vo(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,es(e,t)}}function Pc(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=d:a=a.next=d,t=t.next}while(t!==null);a===null?i=a=r:a=a.next=r}else i=a=r;t={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Qo(e,r,t,o){var i=e.updateQueue;st=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,y=f.next;f.next=null,d===null?a=y:d.next=y,d=f;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==d&&(p===null?k.firstBaseUpdate=y:p.next=y,k.lastBaseUpdate=f))}if(a!==null){var b=i.baseState;d=0,k=y=f=null,p=a;do{var w=p.lane,A=p.eventTime;if((o&w)===w){k!==null&&(k=k.next={eventTime:A,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var O=e,R=p;switch(w=r,A=t,R.tag){case 1:if(O=R.payload,typeof O=="function"){b=O.call(A,b,w);break e}b=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=R.payload,w=typeof O=="function"?O.call(A,b,w):O,w==null)break e;b=P({},b,w);break e;case 2:st=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[p]:w.push(p))}else A={eventTime:A,lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(y=k=A,f=b):k=k.next=A,d|=w;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;w=p,p=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(k===null&&(f=b),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=k,r=i.shared.interleaved,r!==null){i=r;do d|=i.lane,i=i.next;while(i!==r)}else a===null&&(i.shared.lanes=0);Et|=d,e.lanes=d,e.memoizedState=b}}function Ac(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=t,typeof i!="function")throw Error(l(191,i));i.call(o)}}}var Hn={},Br=nt(Hn),$n=nt(Hn),Vn=nt(Hn);function St(e){if(e===Hn)throw Error(l(174));return e}function Us(e,r){switch(je(Vn,r),je($n,e),je(Br,Hn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Wi(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Wi(r,e)}ke(Br),je(Br,r)}function tn(){ke(Br),ke($n),ke(Vn)}function Bc(e){St(Vn.current);var r=St(Br.current),t=Wi(r,e.type);r!==t&&(je($n,e),je(Br,t))}function Ws(e){$n.current===e&&(ke(Br),ke($n))}var Ie=nt(0);function Go(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Hs=[];function $s(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var Yo=L.ReactCurrentDispatcher,Vs=L.ReactCurrentBatchConfig,Ct=0,Te=null,Fe=null,Ue=null,Ko=!1,Qn=!1,Gn=0,yf=0;function qe(){throw Error(l(321))}function Qs(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Sr(e[t],r[t]))return!1;return!0}function Gs(e,r,t,o,i,a){if(Ct=a,Te=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Yo.current=e===null||e.memoizedState===null?kf:bf,e=t(o,i),Qn){a=0;do{if(Qn=!1,Gn=0,25<=a)throw Error(l(301));a+=1,Ue=Fe=null,r.updateQueue=null,Yo.current=Sf,e=t(o,i)}while(Qn)}if(Yo.current=Zo,r=Fe!==null&&Fe.next!==null,Ct=0,Ue=Fe=Te=null,Ko=!1,r)throw Error(l(300));return e}function Ys(){var e=Gn!==0;return Gn=0,e}function Or(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Te.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function yr(){if(Fe===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var r=Ue===null?Te.memoizedState:Ue.next;if(r!==null)Ue=r,Fe=e;else{if(e===null)throw Error(l(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ue===null?Te.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Yn(e,r){return typeof r=="function"?r(e):r}function Ks(e){var r=yr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=Fe,i=o.baseQueue,a=t.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}o.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,o=o.baseState;var p=d=null,f=null,y=a;do{var k=y.lane;if((Ct&k)===k)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var b={lane:k,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(p=f=b,d=o):f=f.next=b,Te.lanes|=k,Et|=k}y=y.next}while(y!==null&&y!==a);f===null?d=o:f.next=p,Sr(o,r.memoizedState)||(ir=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=f,t.lastRenderedState=o}if(e=t.interleaved,e!==null){i=e;do a=i.lane,Te.lanes|=a,Et|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Xs(e){var r=yr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=t.dispatch,i=t.pending,a=r.memoizedState;if(i!==null){t.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);Sr(a,r.memoizedState)||(ir=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),t.lastRenderedState=a}return[a,o]}function Oc(){}function Rc(e,r){var t=Te,o=yr(),i=r(),a=!Sr(o.memoizedState,i);if(a&&(o.memoizedState=i,ir=!0),o=o.queue,qs(Dc.bind(null,t,o,e),[e]),o.getSnapshot!==r||a||Ue!==null&&Ue.memoizedState.tag&1){if(t.flags|=2048,Kn(9,Mc.bind(null,t,o,i,r),void 0,null),We===null)throw Error(l(349));(Ct&30)!==0||Fc(t,r,i)}return i}function Fc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Te.updateQueue,r===null?(r={lastEffect:null,stores:null},Te.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Mc(e,r,t,o){r.value=t,r.getSnapshot=o,Uc(r)&&Wc(e)}function Dc(e,r,t){return t(function(){Uc(r)&&Wc(e)})}function Uc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Sr(e,t)}catch{return!0}}function Wc(e){var r=Wr(e,1);r!==null&&Tr(r,e,1,-1)}function Hc(e){var r=Or();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},r.queue=e,e=e.dispatch=wf.bind(null,Te,e),[r.memoizedState,e]}function Kn(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=Te.updateQueue,r===null?(r={lastEffect:null,stores:null},Te.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function $c(){return yr().memoizedState}function Xo(e,r,t,o){var i=Or();Te.flags|=e,i.memoizedState=Kn(1|r,t,void 0,o===void 0?null:o)}function qo(e,r,t,o){var i=yr();o=o===void 0?null:o;var a=void 0;if(Fe!==null){var d=Fe.memoizedState;if(a=d.destroy,o!==null&&Qs(o,d.deps)){i.memoizedState=Kn(r,t,a,o);return}}Te.flags|=e,i.memoizedState=Kn(1|r,t,a,o)}function Vc(e,r){return Xo(8390656,8,e,r)}function qs(e,r){return qo(2048,8,e,r)}function Qc(e,r){return qo(4,2,e,r)}function Gc(e,r){return qo(4,4,e,r)}function Yc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Kc(e,r,t){return t=t!=null?t.concat([e]):null,qo(4,4,Yc.bind(null,r,e),t)}function Zs(){}function Xc(e,r){var t=yr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Qs(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function qc(e,r){var t=yr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Qs(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function Zc(e,r,t){return(Ct&21)===0?(e.baseState&&(e.baseState=!1,ir=!0),e.memoizedState=t):(Sr(t,r)||(t=zl(),Te.lanes|=t,Et|=t,e.baseState=!0),r)}function jf(e,r){var t=ge;ge=t!==0&&4>t?t:4,e(!0);var o=Vs.transition;Vs.transition={};try{e(!1),r()}finally{ge=t,Vs.transition=o}}function Jc(){return yr().memoizedState}function Nf(e,r,t){var o=ut(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},ed(e))rd(r,t);else if(t=_c(e,r,t,o),t!==null){var i=tr();Tr(t,e,o,i),td(t,r,o)}}function wf(e,r,t){var o=ut(e),i={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(ed(e))rd(r,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,p=a(d,t);if(i.hasEagerState=!0,i.eagerState=p,Sr(p,d)){var f=r.interleaved;f===null?(i.next=i,Ms(r)):(i.next=f.next,f.next=i),r.interleaved=i;return}}catch{}finally{}t=_c(e,r,i,o),t!==null&&(i=tr(),Tr(t,e,o,i),td(t,r,o))}}function ed(e){var r=e.alternate;return e===Te||r!==null&&r===Te}function rd(e,r){Qn=Ko=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function td(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,es(e,t)}}var Zo={readContext:vr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},kf={readContext:vr,useCallback:function(e,r){return Or().memoizedState=[e,r===void 0?null:r],e},useContext:vr,useEffect:Vc,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Xo(4194308,4,Yc.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Xo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Xo(4,2,e,r)},useMemo:function(e,r){var t=Or();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Or();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Nf.bind(null,Te,e),[o.memoizedState,e]},useRef:function(e){var r=Or();return e={current:e},r.memoizedState=e},useState:Hc,useDebugValue:Zs,useDeferredValue:function(e){return Or().memoizedState=e},useTransition:function(){var e=Hc(!1),r=e[0];return e=jf.bind(null,e[1]),Or().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=Te,i=Or();if(Ce){if(t===void 0)throw Error(l(407));t=t()}else{if(t=r(),We===null)throw Error(l(349));(Ct&30)!==0||Fc(o,r,t)}i.memoizedState=t;var a={value:t,getSnapshot:r};return i.queue=a,Vc(Dc.bind(null,o,a,e),[e]),o.flags|=2048,Kn(9,Mc.bind(null,o,a,t,r),void 0,null),t},useId:function(){var e=Or(),r=We.identifierPrefix;if(Ce){var t=Ur,o=Dr;t=(o&~(1<<32-br(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=Gn++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=yf++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},bf={readContext:vr,useCallback:Xc,useContext:vr,useEffect:qs,useImperativeHandle:Kc,useInsertionEffect:Qc,useLayoutEffect:Gc,useMemo:qc,useReducer:Ks,useRef:$c,useState:function(){return Ks(Yn)},useDebugValue:Zs,useDeferredValue:function(e){var r=yr();return Zc(r,Fe.memoizedState,e)},useTransition:function(){var e=Ks(Yn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Oc,useSyncExternalStore:Rc,useId:Jc,unstable_isNewReconciler:!1},Sf={readContext:vr,useCallback:Xc,useContext:vr,useEffect:qs,useImperativeHandle:Kc,useInsertionEffect:Qc,useLayoutEffect:Gc,useMemo:qc,useReducer:Xs,useRef:$c,useState:function(){return Xs(Yn)},useDebugValue:Zs,useDeferredValue:function(e){var r=yr();return Fe===null?r.memoizedState=e:Zc(r,Fe.memoizedState,e)},useTransition:function(){var e=Xs(Yn)[0],r=yr().memoizedState;return[e,r]},useMutableSource:Oc,useSyncExternalStore:Rc,useId:Jc,unstable_isNewReconciler:!1};function Er(e,r){if(e&&e.defaultProps){r=P({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Js(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:P({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Jo={isMounted:function(e){return(e=e._reactInternals)?yt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=tr(),i=ut(e),a=Hr(o,i);a.payload=r,t!=null&&(a.callback=t),r=at(e,a,i),r!==null&&(Tr(r,e,i,o),Vo(r,e,i))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=tr(),i=ut(e),a=Hr(o,i);a.tag=1,a.payload=r,t!=null&&(a.callback=t),r=at(e,a,i),r!==null&&(Tr(r,e,i,o),Vo(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),o=ut(e),i=Hr(t,o);i.tag=2,r!=null&&(i.callback=r),r=at(e,i,o),r!==null&&(Tr(r,e,o,t),Vo(r,e,o))}};function nd(e,r,t,o,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):r.prototype&&r.prototype.isPureReactComponent?!Bn(t,o)||!Bn(i,a):!0}function od(e,r,t){var o=!1,i=ot,a=r.contextType;return typeof a=="object"&&a!==null?a=vr(a):(i=or(r)?Nt:Xe.current,o=r.contextTypes,a=(o=o!=null)?Kt(e,i):ot),r=new r(t,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Jo,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),r}function id(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&Jo.enqueueReplaceState(r,r.state,null)}function ea(e,r,t,o){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ds(e);var a=r.contextType;typeof a=="object"&&a!==null?i.context=vr(a):(a=or(r)?Nt:Xe.current,i.context=Kt(e,a)),i.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Js(e,r,a,t),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Jo.enqueueReplaceState(i,i.state,null),Qo(e,t,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,r){try{var t="",o=r;do t+=se(o),o=o.return;while(o);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:i,digest:null}}function ra(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function ta(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function sd(e,r,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){si||(si=!0,ga=o),ta(e,r)},t}function ad(e,r,t){t=Hr(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;t.payload=function(){return o(i)},t.callback=function(){ta(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){ta(e,r),typeof o!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function ld(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Cf;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(t)||(i.add(t),e=Df.bind(null,e,r,t),r.then(e,e))}function cd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function dd(e,r,t,o,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Hr(-1,1),r.tag=2,at(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ef=L.ReactCurrentOwner,ir=!1;function rr(e,r,t,o){r.child=e===null?Tc(r,null,t,o):Jt(r,e.child,t,o)}function ud(e,r,t,o,i){t=t.render;var a=r.ref;return rn(r,i),o=Gs(e,r,t,o,a,i),t=Ys(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,$r(e,r,i)):(Ce&&t&&Ts(r),r.flags|=1,rr(e,r,o,i),r.child)}function pd(e,r,t,o,i){if(e===null){var a=t.type;return typeof a=="function"&&!ba(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=a,fd(e,r,a,o,i)):(e=pi(t.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(t=t.compare,t=t!==null?t:Bn,t(d,o)&&e.ref===r.ref)return $r(e,r,i)}return r.flags|=1,e=ft(a,o),e.ref=r.ref,e.return=r,r.child=e}function fd(e,r,t,o,i){if(e!==null){var a=e.memoizedProps;if(Bn(a,o)&&e.ref===r.ref)if(ir=!1,r.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ir=!0);else return r.lanes=e.lanes,$r(e,r,i)}return na(e,r,t,o,i)}function hd(e,r,t){var o=r.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(sn,fr),fr|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,je(sn,fr),fr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:t,je(sn,fr),fr|=o}else a!==null?(o=a.baseLanes|t,r.memoizedState=null):o=t,je(sn,fr),fr|=o;return rr(e,r,i,t),r.child}function md(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function na(e,r,t,o,i){var a=or(t)?Nt:Xe.current;return a=Kt(r,a),rn(r,i),t=Gs(e,r,t,o,a,i),o=Ys(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,$r(e,r,i)):(Ce&&o&&Ts(r),r.flags|=1,rr(e,r,t,i),r.child)}function xd(e,r,t,o,i){if(or(t)){var a=!0;Ro(r)}else a=!1;if(rn(r,i),r.stateNode===null)ri(e,r),od(r,t,o),ea(r,t,o,i),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var f=d.context,y=t.contextType;typeof y=="object"&&y!==null?y=vr(y):(y=or(t)?Nt:Xe.current,y=Kt(r,y));var k=t.getDerivedStateFromProps,b=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function";b||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||f!==y)&&id(r,d,o,y),st=!1;var w=r.memoizedState;d.state=w,Qo(r,o,d,i),f=r.memoizedState,p!==o||w!==f||nr.current||st?(typeof k=="function"&&(Js(r,t,k,o),f=r.memoizedState),(p=st||nd(r,t,p,o,w,f,y))?(b||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=f),d.props=o,d.state=f,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Lc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Er(r.type,p),d.props=y,b=r.pendingProps,w=d.context,f=t.contextType,typeof f=="object"&&f!==null?f=vr(f):(f=or(t)?Nt:Xe.current,f=Kt(r,f));var A=t.getDerivedStateFromProps;(k=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==b||w!==f)&&id(r,d,o,f),st=!1,w=r.memoizedState,d.state=w,Qo(r,o,d,i);var O=r.memoizedState;p!==b||w!==O||nr.current||st?(typeof A=="function"&&(Js(r,t,A,o),O=r.memoizedState),(y=st||nd(r,t,y,o,w,O,f)||!1)?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,O,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,O,f)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=O),d.props=o,d.state=O,d.context=f,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),o=!1)}return oa(e,r,t,o,a,i)}function oa(e,r,t,o,i,a){md(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return i&&Nc(r,t,!1),$r(e,r,a);o=r.stateNode,Ef.current=r;var p=d&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=Jt(r,e.child,null,a),r.child=Jt(r,null,p,a)):rr(e,r,p,a),r.memoizedState=o.state,i&&Nc(r,t,!0),r.child}function gd(e){var r=e.stateNode;r.pendingContext?yc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&yc(e,r.context,!1),Us(e,r.containerInfo)}function vd(e,r,t,o,i){return Zt(),As(i),r.flags|=256,rr(e,r,t,o),r.child}var ia={dehydrated:null,treeContext:null,retryLane:0};function sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,r,t){var o=r.pendingProps,i=Ie.current,a=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Ie,i&1),e===null)return Ps(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=r.mode,a=r.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=fi(d,o,0,null),e=_t(e,o,t,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=sa(t),r.memoizedState=ia,e):aa(r,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return zf(e,r,d,o,p,i,t);if(a){a=o.fallback,d=r.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=f,r.deletions=null):(o=ft(i,f),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=ft(p,a):(a=_t(a,d,t,null),a.flags|=2),a.return=r,o.return=r,o.sibling=a,r.child=o,o=a,a=r.child,d=e.child.memoizedState,d=d===null?sa(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~t,r.memoizedState=ia,o}return a=e.child,e=a.sibling,o=ft(a,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function aa(e,r){return r=fi({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ei(e,r,t,o){return o!==null&&As(o),Jt(r,e.child,null,t),e=aa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function zf(e,r,t,o,i,a,d){if(t)return r.flags&256?(r.flags&=-257,o=ra(Error(l(422))),ei(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=o.fallback,i=r.mode,o=fi({mode:"visible",children:o.children},i,0,null),a=_t(a,i,d,null),a.flags|=2,o.return=r,a.return=r,o.sibling=a,r.child=o,(r.mode&1)!==0&&Jt(r,e.child,null,d),r.child.memoizedState=sa(d),r.memoizedState=ia,a);if((r.mode&1)===0)return ei(e,r,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(l(419)),o=ra(a,o,void 0),ei(e,r,d,o)}if(p=(d&e.childLanes)!==0,ir||p){if(o=We,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Wr(e,i),Tr(o,e,i,-1))}return ka(),o=ra(Error(l(421))),ei(e,r,d,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Uf.bind(null,e),i._reactRetry=r,null):(e=a.treeContext,pr=tt(i.nextSibling),ur=r,Ce=!0,Cr=null,e!==null&&(xr[gr++]=Dr,xr[gr++]=Ur,xr[gr++]=wt,Dr=e.id,Ur=e.overflow,wt=r),r=aa(r,o.children),r.flags|=4096,r)}function jd(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Fs(e.return,r,t)}function la(e,r,t,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:i}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=t,a.tailMode=i)}function Nd(e,r,t){var o=r.pendingProps,i=o.revealOrder,a=o.tail;if(rr(e,r,o.children,t),o=Ie.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,t,r);else if(e.tag===19)jd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(je(Ie,o),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(t=r.child,i=null;t!==null;)e=t.alternate,e!==null&&Go(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=r.child,r.child=null):(i=t.sibling,t.sibling=null),la(r,!1,i,t,a);break;case"backwards":for(t=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Go(e)===null){r.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}la(r,!0,t,null,a);break;case"together":la(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ri(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function $r(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Et|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,t=ft(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=ft(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function If(e,r,t){switch(r.tag){case 3:gd(r),Zt();break;case 5:Bc(r);break;case 1:or(r.type)&&Ro(r);break;case 4:Us(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;je(Ho,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(je(Ie,Ie.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?yd(e,r,t):(je(Ie,Ie.current&1),e=$r(e,r,t),e!==null?e.sibling:null);je(Ie,Ie.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Nd(e,r,t);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Ie,Ie.current),o)break;return null;case 22:case 23:return r.lanes=0,hd(e,r,t)}return $r(e,r,t)}var wd,ca,kd,bd;wd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ca=function(){},kd=function(e,r,t,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,St(Br.current);var a=null;switch(t){case"input":i=Fi(e,i),o=Fi(e,o),a=[];break;case"select":i=P({},i,{value:void 0}),o=P({},o,{value:void 0}),a=[];break;case"textarea":i=Ui(e,i),o=Ui(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ao)}Hi(t,o);var d;t=null;for(y in i)if(!o.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(d in p)p.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in o){var f=o[y];if(p=i!=null?i[y]:void 0,o.hasOwnProperty(y)&&f!==p&&(f!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in f)f.hasOwnProperty(d)&&p[d]!==f[d]&&(t||(t={}),t[d]=f[d])}else t||(a||(a=[]),a.push(y,t)),t=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(a=a||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&we("scroll",e),a||p===f||(a=[])):(a=a||[]).push(y,f))}t&&(a=a||[]).push("style",t);var y=a;(r.updateQueue=y)&&(r.flags|=4)}},bd=function(e,r,t,o){t!==o&&(r.flags|=4)};function Xn(e,r){if(!Ce)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function Tf(e,r,t){var o=r.pendingProps;switch(_s(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return or(r.type)&&Oo(),Ze(r),null;case 3:return o=r.stateNode,tn(),ke(nr),ke(Xe),$s(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Uo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cr!==null&&(ja(Cr),Cr=null))),ca(e,r),Ze(r),null;case 5:Ws(r);var i=St(Vn.current);if(t=r.type,e!==null&&r.stateNode!=null)kd(e,r,t,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Ze(r),null}if(e=St(Br.current),Uo(r)){o=r.stateNode,t=r.type;var a=r.memoizedProps;switch(o[Ar]=r,o[Dn]=a,e=(r.mode&1)!==0,t){case"dialog":we("cancel",o),we("close",o);break;case"iframe":case"object":case"embed":we("load",o);break;case"video":case"audio":for(i=0;i<Rn.length;i++)we(Rn[i],o);break;case"source":we("error",o);break;case"img":case"image":case"link":we("error",o),we("load",o);break;case"details":we("toggle",o);break;case"input":ol(o,a),we("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},we("invalid",o);break;case"textarea":al(o,a),we("invalid",o)}Hi(t,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&Po(o.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&we("scroll",o)}switch(t){case"input":Kr(o),sl(o,a,!0);break;case"textarea":Kr(o),cl(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Ao)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(t,{is:o.is}):(e=d.createElement(t),t==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,t),e[Ar]=r,e[Dn]=o,wd(e,r,!1,!1),r.stateNode=e;e:{switch(d=$i(t,o),t){case"dialog":we("cancel",e),we("close",e),i=o;break;case"iframe":case"object":case"embed":we("load",e),i=o;break;case"video":case"audio":for(i=0;i<Rn.length;i++)we(Rn[i],e);i=o;break;case"source":we("error",e),i=o;break;case"img":case"image":case"link":we("error",e),we("load",e),i=o;break;case"details":we("toggle",e),i=o;break;case"input":ol(e,o),i=Fi(e,o),we("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=P({},o,{value:void 0}),we("invalid",e);break;case"textarea":al(e,o),i=Ui(e,o),we("invalid",e);break;default:i=o}Hi(t,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var f=p[a];a==="style"?fl(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&ul(e,f)):a==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&vn(e,f):typeof f=="number"&&vn(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?f!=null&&a==="onScroll"&&we("scroll",e):f!=null&&te(e,a,f,d))}switch(t){case"input":Kr(e),sl(e,o,!1);break;case"textarea":Kr(e),cl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+le(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Rt(e,!!o.multiple,a,!1):o.defaultValue!=null&&Rt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ze(r),null;case 6:if(e&&r.stateNode!=null)bd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(t=St(Vn.current),St(Br.current),Uo(r)){if(o=r.stateNode,t=r.memoizedProps,o[Ar]=r,(a=o.nodeValue!==t)&&(e=ur,e!==null))switch(e.tag){case 3:Po(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(o.nodeValue,t,(e.mode&1)!==0)}a&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Ar]=r,r.stateNode=o}return Ze(r),null;case 13:if(ke(Ie),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ec(),Zt(),r.flags|=98560,a=!1;else if(a=Uo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Ar]=r}else Zt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),a=!1}else Cr!==null&&(ja(Cr),Cr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Ie.current&1)!==0?Me===0&&(Me=3):ka())),r.updateQueue!==null&&(r.flags|=4),Ze(r),null);case 4:return tn(),ca(e,r),e===null&&Fn(r.stateNode.containerInfo),Ze(r),null;case 10:return Rs(r.type._context),Ze(r),null;case 17:return or(r.type)&&Oo(),Ze(r),null;case 19:if(ke(Ie),a=r.memoizedState,a===null)return Ze(r),null;if(o=(r.flags&128)!==0,d=a.rendering,d===null)if(o)Xn(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Go(e),d!==null){for(r.flags|=128,Xn(a,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)a=t,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return je(Ie,Ie.current&1|2),r.child}e=e.sibling}a.tail!==null&&Ae()>an&&(r.flags|=128,o=!0,Xn(a,!1),r.lanes=4194304)}else{if(!o)if(e=Go(d),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Xn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ce)return Ze(r),null}else 2*Ae()-a.renderingStartTime>an&&t!==1073741824&&(r.flags|=128,o=!0,Xn(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(t=a.last,t!==null?t.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Ae(),r.sibling=null,t=Ie.current,je(Ie,o?t&1|2:t&1),r):(Ze(r),null);case 22:case 23:return wa(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(fr&1073741824)!==0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function _f(e,r){switch(_s(r),r.tag){case 1:return or(r.type)&&Oo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return tn(),ke(nr),ke(Xe),$s(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Ws(r),null;case 13:if(ke(Ie),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));Zt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return ke(Ie),null;case 4:return tn(),null;case 10:return Rs(r.type._context),null;case 22:case 23:return wa(),null;case 24:return null;default:return null}}var ti=!1,Je=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,B=null;function on(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Le(e,r,o)}else t.current=null}function da(e,r,t){try{t()}catch(o){Le(e,r,o)}}var Sd=!1;function Pf(e,r){if(ws=wo,e=nc(),hs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var d=0,p=-1,f=-1,y=0,k=0,b=e,w=null;r:for(;;){for(var A;b!==t||i!==0&&b.nodeType!==3||(p=d+i),b!==a||o!==0&&b.nodeType!==3||(f=d+o),b.nodeType===3&&(d+=b.nodeValue.length),(A=b.firstChild)!==null;)w=b,b=A;for(;;){if(b===e)break r;if(w===t&&++y===i&&(p=d),w===a&&++k===o&&(f=d),(A=b.nextSibling)!==null)break;b=w,w=b.parentNode}b=A}t=p===-1||f===-1?null:{start:p,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(ks={focusedElem:e,selectionRange:t},wo=!1,B=r;B!==null;)if(r=B,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,B=e;else for(;B!==null;){r=B;try{var O=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var R=O.memoizedProps,Be=O.memoizedState,g=r.stateNode,h=g.getSnapshotBeforeUpdate(r.elementType===r.type?R:Er(r.type,R),Be);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Le(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,B=e;break}B=r.return}return O=Sd,Sd=!1,O}function qn(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&da(r,t,a)}i=i.next}while(i!==o)}}function ni(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function ua(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Cd(e){var r=e.alternate;r!==null&&(e.alternate=null,Cd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Ar],delete r[Dn],delete r[Es],delete r[mf],delete r[xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Ao));else if(o!==4&&(e=e.child,e!==null))for(pa(e,r,t),e=e.sibling;e!==null;)pa(e,r,t),e=e.sibling}function fa(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(fa(e,r,t),e=e.sibling;e!==null;)fa(e,r,t),e=e.sibling}var $e=null,zr=!1;function lt(e,r,t){for(t=t.child;t!==null;)Id(e,r,t),t=t.sibling}function Id(e,r,t){if(Pr&&typeof Pr.onCommitFiberUnmount=="function")try{Pr.onCommitFiberUnmount(xo,t)}catch{}switch(t.tag){case 5:Je||on(t,r);case 6:var o=$e,i=zr;$e=null,lt(e,r,t),$e=o,zr=i,$e!==null&&(zr?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(zr?(e=$e,t=t.stateNode,e.nodeType===8?Cs(e.parentNode,t):e.nodeType===1&&Cs(e,t),In(e)):Cs($e,t.stateNode));break;case 4:o=$e,i=zr,$e=t.stateNode.containerInfo,zr=!0,lt(e,r,t),$e=o,zr=i;break;case 0:case 11:case 14:case 15:if(!Je&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&da(t,r,d),i=i.next}while(i!==o)}lt(e,r,t);break;case 1:if(!Je&&(on(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(p){Le(t,r,p)}lt(e,r,t);break;case 21:lt(e,r,t);break;case 22:t.mode&1?(Je=(o=Je)||t.memoizedState!==null,lt(e,r,t),Je=o):lt(e,r,t);break;default:lt(e,r,t)}}function Td(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Lf),r.forEach(function(o){var i=Wf.bind(null,e,o);t.has(o)||(t.add(o),o.then(i,i))})}}function Ir(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var i=t[o];try{var a=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:$e=p.stateNode,zr=!1;break e;case 3:$e=p.stateNode.containerInfo,zr=!0;break e;case 4:$e=p.stateNode.containerInfo,zr=!0;break e}p=p.return}if($e===null)throw Error(l(160));Id(a,d,i),$e=null,zr=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(y){Le(i,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)_d(r,e),r=r.sibling}function _d(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ir(r,e),Rr(e),o&4){try{qn(3,e,e.return),ni(3,e)}catch(R){Le(e,e.return,R)}try{qn(5,e,e.return)}catch(R){Le(e,e.return,R)}}break;case 1:Ir(r,e),Rr(e),o&512&&t!==null&&on(t,t.return);break;case 5:if(Ir(r,e),Rr(e),o&512&&t!==null&&on(t,t.return),e.flags&32){var i=e.stateNode;try{vn(i,"")}catch(R){Le(e,e.return,R)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=t!==null?t.memoizedProps:a,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&il(i,a),$i(p,d);var y=$i(p,a);for(d=0;d<f.length;d+=2){var k=f[d],b=f[d+1];k==="style"?fl(i,b):k==="dangerouslySetInnerHTML"?ul(i,b):k==="children"?vn(i,b):te(i,k,b,y)}switch(p){case"input":Mi(i,a);break;case"textarea":ll(i,a);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var A=a.value;A!=null?Rt(i,!!a.multiple,A,!1):w!==!!a.multiple&&(a.defaultValue!=null?Rt(i,!!a.multiple,a.defaultValue,!0):Rt(i,!!a.multiple,a.multiple?[]:"",!1))}i[Dn]=a}catch(R){Le(e,e.return,R)}}break;case 6:if(Ir(r,e),Rr(e),o&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(R){Le(e,e.return,R)}}break;case 3:if(Ir(r,e),Rr(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{In(r.containerInfo)}catch(R){Le(e,e.return,R)}break;case 4:Ir(r,e),Rr(e);break;case 13:Ir(r,e),Rr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(xa=Ae())),o&4&&Td(e);break;case 22:if(k=t!==null&&t.memoizedState!==null,e.mode&1?(Je=(y=Je)||k,Ir(r,e),Je=y):Ir(r,e),Rr(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!k&&(e.mode&1)!==0)for(B=e,k=e.child;k!==null;){for(b=B=k;B!==null;){switch(w=B,A=w.child,w.tag){case 0:case 11:case 14:case 15:qn(4,w,w.return);break;case 1:on(w,w.return);var O=w.stateNode;if(typeof O.componentWillUnmount=="function"){o=w,t=w.return;try{r=o,O.props=r.memoizedProps,O.state=r.memoizedState,O.componentWillUnmount()}catch(R){Le(o,t,R)}}break;case 5:on(w,w.return);break;case 22:if(w.memoizedState!==null){Ad(b);continue}}A!==null?(A.return=w,B=A):Ad(b)}k=k.sibling}e:for(k=null,b=e;;){if(b.tag===5){if(k===null){k=b;try{i=b.stateNode,y?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=b.stateNode,f=b.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=pl("display",d))}catch(R){Le(e,e.return,R)}}}else if(b.tag===6){if(k===null)try{b.stateNode.nodeValue=y?"":b.memoizedProps}catch(R){Le(e,e.return,R)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;k===b&&(k=null),b=b.return}k===b&&(k=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Ir(r,e),Rr(e),o&4&&Td(e);break;case 21:break;default:Ir(r,e),Rr(e)}}function Rr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Ed(t)){var o=t;break e}t=t.return}throw Error(l(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(vn(i,""),o.flags&=-33);var a=zd(e);fa(e,a,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=zd(e);pa(e,p,d);break;default:throw Error(l(161))}}catch(f){Le(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Af(e,r,t){B=e,Ld(e)}function Ld(e,r,t){for(var o=(e.mode&1)!==0;B!==null;){var i=B,a=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||ti;if(!d){var p=i.alternate,f=p!==null&&p.memoizedState!==null||Je;p=ti;var y=Je;if(ti=d,(Je=f)&&!y)for(B=i;B!==null;)d=B,f=d.child,d.tag===22&&d.memoizedState!==null?Bd(i):f!==null?(f.return=d,B=f):Bd(i);for(;a!==null;)B=a,Ld(a),a=a.sibling;B=i,ti=p,Je=y}Pd(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,B=a):Pd(e)}}function Pd(e){for(;B!==null;){var r=B;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Je||ni(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Je)if(t===null)o.componentDidMount();else{var i=r.elementType===r.type?t.memoizedProps:Er(r.type,t.memoizedProps);o.componentDidUpdate(i,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Ac(r,a,o);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Ac(r,d,t)}break;case 5:var p=r.stateNode;if(t===null&&r.flags&4){t=p;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var k=y.memoizedState;if(k!==null){var b=k.dehydrated;b!==null&&In(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Je||r.flags&512&&ua(r)}catch(w){Le(r,r.return,w)}}if(r===e){B=null;break}if(t=r.sibling,t!==null){t.return=r.return,B=t;break}B=r.return}}function Ad(e){for(;B!==null;){var r=B;if(r===e){B=null;break}var t=r.sibling;if(t!==null){t.return=r.return,B=t;break}B=r.return}}function Bd(e){for(;B!==null;){var r=B;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{ni(4,r)}catch(f){Le(r,t,f)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(f){Le(r,i,f)}}var a=r.return;try{ua(r)}catch(f){Le(r,a,f)}break;case 5:var d=r.return;try{ua(r)}catch(f){Le(r,d,f)}}}catch(f){Le(r,r.return,f)}if(r===e){B=null;break}var p=r.sibling;if(p!==null){p.return=r.return,B=p;break}B=r.return}}var Bf=Math.ceil,oi=L.ReactCurrentDispatcher,ha=L.ReactCurrentOwner,jr=L.ReactCurrentBatchConfig,ue=0,We=null,Oe=null,Ve=0,fr=0,sn=nt(0),Me=0,Zn=null,Et=0,ii=0,ma=0,Jn=null,sr=null,xa=0,an=1/0,Vr=null,si=!1,ga=null,ct=null,ai=!1,dt=null,li=0,eo=0,va=null,ci=-1,di=0;function tr(){return(ue&6)!==0?Ae():ci!==-1?ci:ci=Ae()}function ut(e){return(e.mode&1)===0?1:(ue&2)!==0&&Ve!==0?Ve&-Ve:vf.transition!==null?(di===0&&(di=zl()),di):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Rl(e.type)),e)}function Tr(e,r,t,o){if(50<eo)throw eo=0,va=null,Error(l(185));bn(e,t,o),((ue&2)===0||e!==We)&&(e===We&&((ue&2)===0&&(ii|=t),Me===4&&pt(e,Ve)),ar(e,o),t===1&&ue===0&&(r.mode&1)===0&&(an=Ae()+500,Fo&&it()))}function ar(e,r){var t=e.callbackNode;gp(e,r);var o=yo(e,e===We?Ve:0);if(o===0)t!==null&&Sl(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&Sl(t),r===1)e.tag===0?gf(Rd.bind(null,e)):wc(Rd.bind(null,e)),ff(function(){(ue&6)===0&&it()}),t=null;else{switch(Il(o)){case 1:t=qi;break;case 4:t=Cl;break;case 16:t=mo;break;case 536870912:t=El;break;default:t=mo}t=Vd(t,Od.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Od(e,r){if(ci=-1,di=0,(ue&6)!==0)throw Error(l(327));var t=e.callbackNode;if(ln()&&e.callbackNode!==t)return null;var o=yo(e,e===We?Ve:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=ui(e,o);else{r=o;var i=ue;ue|=2;var a=Md();(We!==e||Ve!==r)&&(Vr=null,an=Ae()+500,It(e,r));do try{Ff();break}catch(p){Fd(e,p)}while(!0);Os(),oi.current=a,ue=i,Oe!==null?r=0:(We=null,Ve=0,r=Me)}if(r!==0){if(r===2&&(i=Zi(e),i!==0&&(o=i,r=ya(e,i))),r===1)throw t=Zn,It(e,0),pt(e,o),ar(e,Ae()),t;if(r===6)pt(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Of(i)&&(r=ui(e,o),r===2&&(a=Zi(e),a!==0&&(o=a,r=ya(e,a))),r===1))throw t=Zn,It(e,0),pt(e,o),ar(e,Ae()),t;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:Tt(e,sr,Vr);break;case 3:if(pt(e,o),(o&130023424)===o&&(r=xa+500-Ae(),10<r)){if(yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){tr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ss(Tt.bind(null,e,sr,Vr),r);break}Tt(e,sr,Vr);break;case 4:if(pt(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var d=31-br(o);a=1<<d,d=r[d],d>i&&(i=d),o&=~a}if(o=i,o=Ae()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Bf(o/1960))-o,10<o){e.timeoutHandle=Ss(Tt.bind(null,e,sr,Vr),o);break}Tt(e,sr,Vr);break;case 5:Tt(e,sr,Vr);break;default:throw Error(l(329))}}}return ar(e,Ae()),e.callbackNode===t?Od.bind(null,e):null}function ya(e,r){var t=Jn;return e.current.memoizedState.isDehydrated&&(It(e,r).flags|=256),e=ui(e,r),e!==2&&(r=sr,sr=t,r!==null&&ja(r)),e}function ja(e){sr===null?sr=e:sr.push.apply(sr,e)}function Of(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var i=t[o],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function pt(e,r){for(r&=~ma,r&=~ii,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-br(r),o=1<<t;e[t]=-1,r&=~o}}function Rd(e){if((ue&6)!==0)throw Error(l(327));ln();var r=yo(e,0);if((r&1)===0)return ar(e,Ae()),null;var t=ui(e,r);if(e.tag!==0&&t===2){var o=Zi(e);o!==0&&(r=o,t=ya(e,o))}if(t===1)throw t=Zn,It(e,0),pt(e,r),ar(e,Ae()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Tt(e,sr,Vr),ar(e,Ae()),null}function Na(e,r){var t=ue;ue|=1;try{return e(r)}finally{ue=t,ue===0&&(an=Ae()+500,Fo&&it())}}function zt(e){dt!==null&&dt.tag===0&&(ue&6)===0&&ln();var r=ue;ue|=1;var t=jr.transition,o=ge;try{if(jr.transition=null,ge=1,e)return e()}finally{ge=o,jr.transition=t,ue=r,(ue&6)===0&&it()}}function wa(){fr=sn.current,ke(sn)}function It(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pf(t)),Oe!==null)for(t=Oe.return;t!==null;){var o=t;switch(_s(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Oo();break;case 3:tn(),ke(nr),ke(Xe),$s();break;case 5:Ws(o);break;case 4:tn();break;case 13:ke(Ie);break;case 19:ke(Ie);break;case 10:Rs(o.type._context);break;case 22:case 23:wa()}t=t.return}if(We=e,Oe=e=ft(e.current,null),Ve=fr=r,Me=0,Zn=null,ma=ii=Et=0,sr=Jn=null,bt!==null){for(r=0;r<bt.length;r++)if(t=bt[r],o=t.interleaved,o!==null){t.interleaved=null;var i=o.next,a=t.pending;if(a!==null){var d=a.next;a.next=i,o.next=d}t.pending=o}bt=null}return e}function Fd(e,r){do{var t=Oe;try{if(Os(),Yo.current=Zo,Ko){for(var o=Te.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ko=!1}if(Ct=0,Ue=Fe=Te=null,Qn=!1,Gn=0,ha.current=null,t===null||t.return===null){Me=1,Zn=r,Oe=null;break}e:{var a=e,d=t.return,p=t,f=r;if(r=Ve,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,k=p,b=k.tag;if((k.mode&1)===0&&(b===0||b===11||b===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var A=cd(d);if(A!==null){A.flags&=-257,dd(A,d,p,a,r),A.mode&1&&ld(a,y,r),r=A,f=y;var O=r.updateQueue;if(O===null){var R=new Set;R.add(f),r.updateQueue=R}else O.add(f);break e}else{if((r&1)===0){ld(a,y,r),ka();break e}f=Error(l(426))}}else if(Ce&&p.mode&1){var Be=cd(d);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),dd(Be,d,p,a,r),As(nn(f,p));break e}}a=f=nn(f,p),Me!==4&&(Me=2),Jn===null?Jn=[a]:Jn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var g=sd(a,f,r);Pc(a,g);break e;case 1:p=f;var h=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ct===null||!ct.has(v)))){a.flags|=65536,r&=-r,a.lanes|=r;var C=ad(a,p,r);Pc(a,C);break e}}a=a.return}while(a!==null)}Ud(t)}catch(M){r=M,Oe===t&&t!==null&&(Oe=t=t.return);continue}break}while(!0)}function Md(){var e=oi.current;return oi.current=Zo,e===null?Zo:e}function ka(){(Me===0||Me===3||Me===2)&&(Me=4),We===null||(Et&268435455)===0&&(ii&268435455)===0||pt(We,Ve)}function ui(e,r){var t=ue;ue|=2;var o=Md();(We!==e||Ve!==r)&&(Vr=null,It(e,r));do try{Rf();break}catch(i){Fd(e,i)}while(!0);if(Os(),ue=t,oi.current=o,Oe!==null)throw Error(l(261));return We=null,Ve=0,Me}function Rf(){for(;Oe!==null;)Dd(Oe)}function Ff(){for(;Oe!==null&&!lp();)Dd(Oe)}function Dd(e){var r=$d(e.alternate,e,fr);e.memoizedProps=e.pendingProps,r===null?Ud(e):Oe=r,ha.current=null}function Ud(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Tf(t,r,fr),t!==null){Oe=t;return}}else{if(t=_f(t,r),t!==null){t.flags&=32767,Oe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Oe=null;return}}if(r=r.sibling,r!==null){Oe=r;return}Oe=r=e}while(r!==null);Me===0&&(Me=5)}function Tt(e,r,t){var o=ge,i=jr.transition;try{jr.transition=null,ge=1,Mf(e,r,t,o)}finally{jr.transition=i,ge=o}return null}function Mf(e,r,t,o){do ln();while(dt!==null);if((ue&6)!==0)throw Error(l(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(vp(e,a),e===We&&(Oe=We=null,Ve=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ai||(ai=!0,Vd(mo,function(){return ln(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=jr.transition,jr.transition=null;var d=ge;ge=1;var p=ue;ue|=4,ha.current=null,Pf(e,t),_d(t,e),of(ks),wo=!!ws,ks=ws=null,e.current=t,Af(t),cp(),ue=p,ge=d,jr.transition=a}else e.current=t;if(ai&&(ai=!1,dt=e,li=i),a=e.pendingLanes,a===0&&(ct=null),pp(t.stateNode),ar(e,Ae()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)i=r[t],o(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=ga,ga=null,e;return(li&1)!==0&&e.tag!==0&&ln(),a=e.pendingLanes,(a&1)!==0?e===va?eo++:(eo=0,va=e):eo=0,it(),null}function ln(){if(dt!==null){var e=Il(li),r=jr.transition,t=ge;try{if(jr.transition=null,ge=16>e?16:e,dt===null)var o=!1;else{if(e=dt,dt=null,li=0,(ue&6)!==0)throw Error(l(331));var i=ue;for(ue|=4,B=e.current;B!==null;){var a=B,d=a.child;if((B.flags&16)!==0){var p=a.deletions;if(p!==null){for(var f=0;f<p.length;f++){var y=p[f];for(B=y;B!==null;){var k=B;switch(k.tag){case 0:case 11:case 15:qn(8,k,a)}var b=k.child;if(b!==null)b.return=k,B=b;else for(;B!==null;){k=B;var w=k.sibling,A=k.return;if(Cd(k),k===y){B=null;break}if(w!==null){w.return=A,B=w;break}B=A}}}var O=a.alternate;if(O!==null){var R=O.child;if(R!==null){O.child=null;do{var Be=R.sibling;R.sibling=null,R=Be}while(R!==null)}}B=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,B=d;else e:for(;B!==null;){if(a=B,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:qn(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,B=g;break e}B=a.return}}var h=e.current;for(B=h;B!==null;){d=B;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,B=v;else e:for(d=h;B!==null;){if(p=B,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ni(9,p)}}catch(M){Le(p,p.return,M)}if(p===d){B=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,B=C;break e}B=p.return}}if(ue=i,it(),Pr&&typeof Pr.onPostCommitFiberRoot=="function")try{Pr.onPostCommitFiberRoot(xo,e)}catch{}o=!0}return o}finally{ge=t,jr.transition=r}}return!1}function Wd(e,r,t){r=nn(t,r),r=sd(e,r,1),e=at(e,r,1),r=tr(),e!==null&&(bn(e,1,r),ar(e,r))}function Le(e,r,t){if(e.tag===3)Wd(e,e,t);else for(;r!==null;){if(r.tag===3){Wd(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ct===null||!ct.has(o))){e=nn(t,e),e=ad(r,e,1),r=at(r,e,1),e=tr(),r!==null&&(bn(r,1,e),ar(r,e));break}}r=r.return}}function Df(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,We===e&&(Ve&t)===t&&(Me===4||Me===3&&(Ve&130023424)===Ve&&500>Ae()-xa?It(e,0):ma|=t),ar(e,r)}function Hd(e,r){r===0&&((e.mode&1)===0?r=1:(r=vo,vo<<=1,(vo&130023424)===0&&(vo=4194304)));var t=tr();e=Wr(e,r),e!==null&&(bn(e,r,t),ar(e,t))}function Uf(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Hd(e,t)}function Wf(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Hd(e,t)}var $d;$d=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)ir=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return ir=!1,If(e,r,t);ir=(e.flags&131072)!==0}else ir=!1,Ce&&(r.flags&1048576)!==0&&kc(r,Do,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;ri(e,r),e=r.pendingProps;var i=Kt(r,Xe.current);rn(r,t),i=Gs(null,r,o,e,i,t);var a=Ys();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(o)?(a=!0,Ro(r)):a=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ds(r),i.updater=Jo,r.stateNode=i,i._reactInternals=r,ea(r,o,e,t),r=oa(null,r,o,!0,a,t)):(r.tag=0,Ce&&a&&Ts(r),rr(null,r,i,t),r=r.child),r;case 16:o=r.elementType;e:{switch(ri(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=$f(o),e=Er(o,e),i){case 0:r=na(null,r,o,e,t);break e;case 1:r=xd(null,r,o,e,t);break e;case 11:r=ud(null,r,o,e,t);break e;case 14:r=pd(null,r,o,Er(o.type,e),t);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),na(e,r,o,i,t);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),xd(e,r,o,i,t);case 3:e:{if(gd(r),e===null)throw Error(l(387));o=r.pendingProps,a=r.memoizedState,i=a.element,Lc(e,r),Qo(r,o,null,t);var d=r.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){i=nn(Error(l(423)),r),r=vd(e,r,o,t,i);break e}else if(o!==i){i=nn(Error(l(424)),r),r=vd(e,r,o,t,i);break e}else for(pr=tt(r.stateNode.containerInfo.firstChild),ur=r,Ce=!0,Cr=null,t=Tc(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zt(),o===i){r=$r(e,r,t);break e}rr(e,r,o,t)}r=r.child}return r;case 5:return Bc(r),e===null&&Ps(r),o=r.type,i=r.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,bs(o,i)?d=null:a!==null&&bs(o,a)&&(r.flags|=32),md(e,r),rr(e,r,d,t),r.child;case 6:return e===null&&Ps(r),null;case 13:return yd(e,r,t);case 4:return Us(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Jt(r,null,o,t):rr(e,r,o,t),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),ud(e,r,o,i,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,a=r.memoizedProps,d=i.value,je(Ho,o._currentValue),o._currentValue=d,a!==null)if(Sr(a.value,d)){if(a.children===i.children&&!nr.current){r=$r(e,r,t);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var f=p.firstContext;f!==null;){if(f.context===o){if(a.tag===1){f=Hr(-1,t&-t),f.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var k=y.pending;k===null?f.next=f:(f.next=k.next,k.next=f),y.pending=f}}a.lanes|=t,f=a.alternate,f!==null&&(f.lanes|=t),Fs(a.return,t,r),p.lanes|=t;break}f=f.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=t,p=d.alternate,p!==null&&(p.lanes|=t),Fs(d,t,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}rr(e,r,i.children,t),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,rn(r,t),i=vr(i),o=o(i),r.flags|=1,rr(e,r,o,t),r.child;case 14:return o=r.type,i=Er(o,r.pendingProps),i=Er(o.type,i),pd(e,r,o,i,t);case 15:return fd(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Er(o,i),ri(e,r),r.tag=1,or(o)?(e=!0,Ro(r)):e=!1,rn(r,t),od(r,o,i),ea(r,o,i,t),oa(null,r,o,!0,e,t);case 19:return Nd(e,r,t);case 22:return hd(e,r,t)}throw Error(l(156,r.tag))};function Vd(e,r){return bl(e,r)}function Hf(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,r,t,o){return new Hf(e,r,t,o)}function ba(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return ba(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===er)return 14}return 2}function ft(e,r){var t=e.alternate;return t===null?(t=Nr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function pi(e,r,t,o,i,a){var d=2;if(o=e,typeof e=="function")ba(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case T:return _t(t.children,i,a,r);case F:d=8,i|=8;break;case ve:return e=Nr(12,t,r,i|2),e.elementType=ve,e.lanes=a,e;case Se:return e=Nr(13,t,r,i),e.elementType=Se,e.lanes=a,e;case Ye:return e=Nr(19,t,r,i),e.elementType=Ye,e.lanes=a,e;case ye:return fi(t,i,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:d=10;break e;case ie:d=9;break e;case _e:d=11;break e;case er:d=14;break e;case Ke:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=Nr(d,t,r,i),r.elementType=e,r.type=o,r.lanes=a,r}function _t(e,r,t,o){return e=Nr(7,e,o,r),e.lanes=t,e}function fi(e,r,t,o){return e=Nr(22,e,o,r),e.elementType=ye,e.lanes=t,e.stateNode={isHidden:!1},e}function Sa(e,r,t){return e=Nr(6,e,null,r),e.lanes=t,e}function Ca(e,r,t){return r=Nr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Vf(e,r,t,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ji(0),this.expirationTimes=Ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ji(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ea(e,r,t,o,i,a,d,p,f){return e=new Vf(e,r,t,p,f),r===1?(r=1,a===!0&&(r|=8)):r=0,a=Nr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ds(a),e}function Qf(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function Qd(e){if(!e)return ot;e=e._reactInternals;e:{if(yt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(or(t))return jc(e,t,r)}return r}function Gd(e,r,t,o,i,a,d,p,f){return e=Ea(t,o,!0,e,i,a,d,p,f),e.context=Qd(null),t=e.current,o=tr(),i=ut(t),a=Hr(o,i),a.callback=r!=null?r:null,at(t,a,i),e.current.lanes=i,bn(e,i,o),ar(e,o),e}function hi(e,r,t,o){var i=r.current,a=tr(),d=ut(i);return t=Qd(t),r.context===null?r.context=t:r.pendingContext=t,r=Hr(a,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=at(i,r,d),e!==null&&(Tr(e,i,d,a),Vo(e,i,d)),d}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function za(e,r){Yd(e,r),(e=e.alternate)&&Yd(e,r)}function Gf(){return null}var Kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ia(e){this._internalRoot=e}xi.prototype.render=Ia.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));hi(e,r,null,null)},xi.prototype.unmount=Ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;zt(function(){hi(null,e,null,null)}),r[Fr]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ll();e={blockedOn:null,target:e,priority:r};for(var t=0;t<Jr.length&&r!==0&&r<Jr[t].priority;t++);Jr.splice(t,0,e),t===0&&Bl(e)}};function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function Yf(e,r,t,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var y=mi(d);a.call(y)}}var d=Gd(r,o,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=d,e[Fr]=d.current,Fn(e.nodeType===8?e.parentNode:e),zt(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var y=mi(f);p.call(y)}}var f=Ea(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=f,e[Fr]=f.current,Fn(e.nodeType===8?e.parentNode:e),zt(function(){hi(r,f,t,o)}),f}function vi(e,r,t,o,i){var a=t._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var f=mi(d);p.call(f)}}hi(r,d,e,i)}else d=Yf(t,r,e,i,o);return mi(d)}Tl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=kn(r.pendingLanes);t!==0&&(es(r,t|1),ar(r,Ae()),(ue&6)===0&&(an=Ae()+500,it()))}break;case 13:zt(function(){var o=Wr(e,1);if(o!==null){var i=tr();Tr(o,e,1,i)}}),za(e,1)}},rs=function(e){if(e.tag===13){var r=Wr(e,134217728);if(r!==null){var t=tr();Tr(r,e,134217728,t)}za(e,134217728)}},_l=function(e){if(e.tag===13){var r=ut(e),t=Wr(e,r);if(t!==null){var o=tr();Tr(t,e,r,o)}za(e,r)}},Ll=function(){return ge},Pl=function(e,r){var t=ge;try{return ge=e,r()}finally{ge=t}},Gi=function(e,r,t){switch(r){case"input":if(Mi(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var i=Bo(o);if(!i)throw Error(l(90));vt(o),Mi(o,i)}}}break;case"textarea":ll(e,t);break;case"select":r=t.value,r!=null&&Rt(e,!!t.multiple,r,!1)}},gl=Na,vl=zt;var Kf={usingClientEntryPoint:!1,Events:[Un,Gt,Bo,ml,xl,Na]},ro={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wl(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Gf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var yi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yi.isDisabled&&yi.supportsFiber)try{xo=yi.inject(Xf),Pr=yi}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kf,lr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ta(r))throw Error(l(200));return Qf(e,r,null,t)},lr.createRoot=function(e,r){if(!Ta(e))throw Error(l(299));var t=!1,o="",i=Kd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Ea(e,1,!1,null,null,t,!1,o,i),e[Fr]=r.current,Fn(e.nodeType===8?e.parentNode:e),new Ia(r)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=wl(r),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return zt(e)},lr.hydrate=function(e,r,t){if(!gi(r))throw Error(l(200));return vi(null,e,r,!0,t)},lr.hydrateRoot=function(e,r,t){if(!Ta(e))throw Error(l(405));var o=t!=null&&t.hydratedSources||null,i=!1,a="",d=Kd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=Gd(r,null,e,1,t!=null?t:null,i,!1,a,d),e[Fr]=r.current,Fn(e),o)for(e=0;e<o.length;e++)t=o[e],i=t._getVersion,i=i(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,i]:r.mutableSourceEagerHydrationData.push(t,i);return new xi(r)},lr.render=function(e,r,t){if(!gi(r))throw Error(l(200));return vi(null,e,r,!1,t)},lr.unmountComponentAtNode=function(e){if(!gi(e))throw Error(l(40));return e._reactRootContainer?(zt(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1},lr.unstable_batchedUpdates=Na,lr.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!gi(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return vi(e,r,t,!1,o)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var ou;function ih(){if(ou)return Pa.exports;ou=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),Pa.exports=oh(),Pa.exports}var iu;function sh(){if(iu)return ji;iu=1;var s=ih();return ji.createRoot=s.createRoot,ji.hydrateRoot=s.hydrateRoot,ji}var ah=sh(),Ee=qa();const mr=Zf(Ee);var cr=function(){return cr=Object.assign||function(c){for(var l,u=1,m=arguments.length;u<m;u++){l=arguments[u];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},cr.apply(this,arguments)};function Ci(s,c,l){if(l||arguments.length===2)for(var u=0,m=c.length,j;u<m;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return s.concat(j||Array.prototype.slice.call(c))}var be="-ms-",io="-moz-",fe="-webkit-",Cu="comm",Pi="rule",Za="decl",lh="@import",ch="@namespace",Eu="@keyframes",dh="@layer",zu=Math.abs,Ja=String.fromCharCode,Wa=Object.assign;function uh(s,c){return De(s,0)^45?(((c<<2^De(s,0))<<2^De(s,1))<<2^De(s,2))<<2^De(s,3):0}function Iu(s){return s.trim()}function Gr(s,c){return(s=c.exec(s))?s[0]:s}function re(s,c,l){return s.replace(c,l)}function Ni(s,c,l){return s.indexOf(c,l)}function De(s,c){return s.charCodeAt(c)|0}function Ot(s,c,l){return s.slice(c,l)}function _r(s){return s.length}function Tu(s){return s.length}function no(s,c){return c.push(s),s}function ph(s,c){return s.map(c).join("")}function su(s,c){return s.filter(function(l){return!Gr(l,c)})}var Ai=1,dn=1,_u=0,wr=0,Re=0,mn="";function Bi(s,c,l,u,m,j,S,_){return{value:s,root:c,parent:l,type:u,props:m,children:j,line:Ai,column:dn,length:S,return:"",siblings:_}}function mt(s,c){return Wa(Bi("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function cn(s){for(;s.root;)s=mt(s.root,{children:[s]});no(s,s.siblings)}function fh(){return Re}function hh(){return Re=wr>0?De(mn,--wr):0,dn--,Re===10&&(dn=1,Ai--),Re}function Lr(){return Re=wr<_u?De(mn,wr++):0,dn++,Re===10&&(dn=1,Ai++),Re}function xt(){return De(mn,wr)}function wi(){return wr}function Oi(s,c){return Ot(mn,s,c)}function ao(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mh(s){return Ai=dn=1,_u=_r(mn=s),wr=0,[]}function xh(s){return mn="",s}function Oa(s){return Iu(Oi(wr-1,Ha(s===91?s+2:s===40?s+1:s)))}function gh(s){for(;(Re=xt())&&Re<33;)Lr();return ao(s)>2||ao(Re)>3?"":" "}function vh(s,c){for(;--c&&Lr()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Oi(s,wi()+(c<6&&xt()==32&&Lr()==32))}function Ha(s){for(;Lr();)switch(Re){case s:return wr;case 34:case 39:s!==34&&s!==39&&Ha(Re);break;case 40:s===41&&Ha(s);break;case 92:Lr();break}return wr}function yh(s,c){for(;Lr()&&s+Re!==57;)if(s+Re===84&&xt()===47)break;return"/*"+Oi(c,wr-1)+"*"+Ja(s===47?s:Lr())}function jh(s){for(;!ao(xt());)Lr();return Oi(s,wr)}function Nh(s){return xh(ki("",null,null,null,[""],s=mh(s),0,[0],s))}function ki(s,c,l,u,m,j,S,_,E){for(var K=0,Q=0,U=S,Z=0,ae=0,X=0,W=1,G=1,me=1,ce=0,te="",L=m,q=j,H=u,T=te;G;)switch(X=ce,ce=Lr()){case 40:if(X!=108&&De(T,U-1)==58){Ni(T+=re(Oa(ce),"&","&\f"),"&\f",zu(K?_[K-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:T+=Oa(ce);break;case 9:case 10:case 13:case 32:T+=gh(X);break;case 92:T+=vh(wi()-1,7);continue;case 47:switch(xt()){case 42:case 47:no(wh(yh(Lr(),wi()),c,l,E),E),(ao(X||1)==5||ao(xt()||1)==5)&&_r(T)&&Ot(T,-1,void 0)!==" "&&(T+=" ");break;default:T+="/"}break;case 123*W:_[K++]=_r(T)*me;case 125*W:case 59:case 0:switch(ce){case 0:case 125:G=0;case 59+Q:me==-1&&(T=re(T,/\f/g,"")),ae>0&&(_r(T)-U||W===0&&X===47)&&no(ae>32?lu(T+";",u,l,U-1,E):lu(re(T," ","")+";",u,l,U-2,E),E);break;case 59:T+=";";default:if(no(H=au(T,c,l,K,Q,m,_,te,L=[],q=[],U,j),j),ce===123)if(Q===0)ki(T,c,H,H,L,j,U,_,q);else{switch(Z){case 99:if(De(T,3)===110)break;case 108:if(De(T,2)===97)break;default:Q=0;case 100:case 109:case 115:}Q?ki(s,H,H,u&&no(au(s,H,H,0,0,m,_,te,m,L=[],U,q),q),m,q,U,_,u?L:q):ki(T,H,H,H,[""],q,0,_,q)}}K=Q=ae=0,W=me=1,te=T="",U=S;break;case 58:U=1+_r(T),ae=X;default:if(W<1){if(ce==123)--W;else if(ce==125&&W++==0&&hh()==125)continue}switch(T+=Ja(ce),ce*W){case 38:me=Q>0?1:(T+="\f",-1);break;case 44:_[K++]=(_r(T)-1)*me,me=1;break;case 64:xt()===45&&(T+=Oa(Lr())),Z=xt(),Q=U=_r(te=T+=jh(wi())),ce++;break;case 45:X===45&&_r(T)==2&&(W=0)}}return j}function au(s,c,l,u,m,j,S,_,E,K,Q,U){for(var Z=m-1,ae=m===0?j:[""],X=Tu(ae),W=0,G=0,me=0;W<u;++W)for(var ce=0,te=Ot(s,Z+1,Z=zu(G=S[W])),L=s;ce<X;++ce)(L=Iu(G>0?ae[ce]+" "+te:re(te,/&\f/g,ae[ce])))&&(E[me++]=L);return Bi(s,c,l,m===0?Pi:_,E,K,Q,U)}function wh(s,c,l,u){return Bi(s,c,l,Cu,Ja(fh()),Ot(s,2,-2),0,u)}function lu(s,c,l,u,m){return Bi(s,c,l,Za,Ot(s,0,u),Ot(s,u+1,-1),u,m)}function Lu(s,c,l){switch(uh(s,c)){case 5103:return fe+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+s+s;case 4855:return fe+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return io+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+s+io+s+be+s+s;case 5936:switch(De(s,c+11)){case 114:return fe+s+be+re(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return fe+s+be+re(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return fe+s+be+re(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return fe+s+be+s+s;case 6165:return fe+s+be+"flex-"+s+s;case 5187:return fe+s+re(s,/(\w+).+(:[^]+)/,fe+"box-$1$2"+be+"flex-$1$2")+s;case 5443:return fe+s+be+"flex-item-"+re(s,/flex-|-self/g,"")+(Gr(s,/flex-|baseline/)?"":be+"grid-row-"+re(s,/flex-|-self/g,""))+s;case 4675:return fe+s+be+"flex-line-pack"+re(s,/align-content|flex-|-self/g,"")+s;case 5548:return fe+s+be+re(s,"shrink","negative")+s;case 5292:return fe+s+be+re(s,"basis","preferred-size")+s;case 6060:return fe+"box-"+re(s,"-grow","")+fe+s+be+re(s,"grow","positive")+s;case 4554:return fe+re(s,/([^-])(transform)/g,"$1"+fe+"$2")+s;case 6187:return re(re(re(s,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),s,"")+s;case 5495:case 3959:return re(s,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return re(re(s,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+be+"flex-pack:$3"),/space-between/,"justify")+fe+s+s;case 4200:if(!Gr(s,/flex-|baseline/))return be+"grid-column-align"+Ot(s,c)+s;break;case 2592:case 3360:return be+re(s,"template-","")+s;case 4384:case 3616:return l&&l.some(function(u,m){return c=m,Gr(u.props,/grid-\w+-end/)})?~Ni(s+(l=l[c].value),"span",0)?s:be+re(s,"-start","")+s+be+"grid-row-span:"+(~Ni(l,"span",0)?Gr(l,/\d+/):+Gr(l,/\d+/)-+Gr(s,/\d+/))+";":be+re(s,"-start","")+s;case 4896:case 4128:return l&&l.some(function(u){return Gr(u.props,/grid-\w+-start/)})?s:be+re(re(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return re(s,/(.+)-inline(.+)/,fe+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_r(s)-1-c>6)switch(De(s,c+1)){case 109:if(De(s,c+4)!==45)break;case 102:return re(s,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+io+(De(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~Ni(s,"stretch",0)?Lu(re(s,"stretch","fill-available"),c,l)+s:s}break;case 5152:case 5920:return re(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,m,j,S,_,E,K){return be+m+":"+j+K+(S?be+m+"-span:"+(_?E:+E-+j)+K:"")+s});case 4949:if(De(s,c+6)===121)return re(s,":",":"+fe)+s;break;case 6444:switch(De(s,De(s,14)===45?18:11)){case 120:return re(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(De(s,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+be+"$2box$3")+s;case 100:return re(s,":",":"+be)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(s,"scroll-","scroll-snap-")+s}return s}function Ei(s,c){for(var l="",u=0;u<s.length;u++)l+=c(s[u],u,s,c)||"";return l}function kh(s,c,l,u){switch(s.type){case dh:if(s.children.length)break;case lh:case ch:case Za:return s.return=s.return||s.value;case Cu:return"";case Eu:return s.return=s.value+"{"+Ei(s.children,u)+"}";case Pi:if(!_r(s.value=s.props.join(",")))return""}return _r(l=Ei(s.children,u))?s.return=s.value+"{"+l+"}":""}function bh(s){var c=Tu(s);return function(l,u,m,j){for(var S="",_=0;_<c;_++)S+=s[_](l,u,m,j)||"";return S}}function Sh(s){return function(c){c.root||(c=c.return)&&s(c)}}function Ch(s,c,l,u){if(s.length>-1&&!s.return)switch(s.type){case Za:s.return=Lu(s.value,s.length,l);return;case Eu:return Ei([mt(s,{value:re(s.value,"@","@"+fe)})],u);case Pi:if(s.length)return ph(l=s.props,function(m){switch(Gr(m,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(mt(s,{props:[re(m,/:(read-\w+)/,":"+io+"$1")]})),cn(mt(s,{props:[m]})),Wa(s,{props:su(l,u)});break;case"::placeholder":cn(mt(s,{props:[re(m,/:(plac\w+)/,":"+fe+"input-$1")]})),cn(mt(s,{props:[re(m,/:(plac\w+)/,":"+io+"$1")]})),cn(mt(s,{props:[re(m,/:(plac\w+)/,be+"input-$1")]})),cn(mt(s,{props:[m]})),Wa(s,{props:su(l,u)});break}return""})}}var Eh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr={},un=typeof process!="undefined"&&hr!==void 0&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",Pu="active",Au="data-styled-version",Ri="6.3.10",el=`/*!sc*/
`,so=typeof window!="undefined"&&typeof document!="undefined",zh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY);function uo(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var bi=new Map,zi=new Map,Si=1,oo=function(s){if(bi.has(s))return bi.get(s);for(;zi.has(Si);)Si++;var c=Si++;return bi.set(s,c),zi.set(c,s),c},Ih=function(s,c){Si=c+1,bi.set(s,c),zi.set(c,s)},rl=Object.freeze([]),pn=Object.freeze({});function Th(s,c,l){return l===void 0&&(l=pn),s.theme!==l.theme&&s.theme||c||l.theme}var Bu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),_h=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lh=/(^-|-$)/g;function cu(s){return s.replace(_h,"-").replace(Lh,"")}var Ph=/(a)(d)/gi,du=function(s){return String.fromCharCode(s+(s>25?39:97))};function $a(s){var c,l="";for(c=Math.abs(s);c>52;c=c/52|0)l=du(c%52)+l;return(du(c%52)+l).replace(Ph,"$1-$2")}var Ra,Lt=function(s,c){for(var l=c.length;l;)s=33*s^c.charCodeAt(--l);return s},Ou=function(s){return Lt(5381,s)};function Ah(s){return $a(Ou(s)>>>0)}function Bh(s){return s.displayName||s.name||"Component"}function Fa(s){return typeof s=="string"&&!0}var Ru=typeof Symbol=="function"&&Symbol.for,Fu=Ru?Symbol.for("react.memo"):60115,Oh=Ru?Symbol.for("react.forward_ref"):60112,Rh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mh=((Ra={})[Oh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ra[Fu]=Mu,Ra);function uu(s){return("type"in(c=s)&&c.type.$$typeof)===Fu?Mu:"$$typeof"in s?Mh[s.$$typeof]:Rh;var c}var Dh=Object.defineProperty,Uh=Object.getOwnPropertyNames,pu=Object.getOwnPropertySymbols,Wh=Object.getOwnPropertyDescriptor,Hh=Object.getPrototypeOf,fu=Object.prototype;function Du(s,c,l){if(typeof c!="string"){if(fu){var u=Hh(c);u&&u!==fu&&Du(s,u,l)}var m=Uh(c);pu&&(m=m.concat(pu(c)));for(var j=uu(s),S=uu(c),_=0;_<m.length;++_){var E=m[_];if(!(E in Fh||l&&l[E]||S&&E in S||j&&E in j)){var K=Wh(c,E);try{Dh(s,E,K)}catch{}}}}return s}function fn(s){return typeof s=="function"}function tl(s){return typeof s=="object"&&"styledComponentId"in s}function At(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function hu(s,c){return s.join("")}function lo(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Va(s,c,l){if(l===void 0&&(l=!1),!l&&!lo(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Va(s[u],c[u]);else if(lo(c))for(var u in c)s[u]=Va(s[u],c[u]);return s}function nl(s,c){Object.defineProperty(s,"toString",{value:c})}var $h=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var u=this._cGroup;u<c;u++)l+=this.groupSizes[u];else for(u=this._cGroup-1;u>=c;u--)l-=this.groupSizes[u];return this._cGroup=c,this._cIndex=l,l},s.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,m=u.length,j=m;c>=j;)if((j<<=1)<0)throw uo(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var S=m;S<j;S++)this.groupSizes[S]=0}for(var _=this.indexOfGroup(c+1),E=0,K=(S=0,l.length);S<K;S++)this.tag.insertRule(_,l[S])&&(this.groupSizes[c]++,_++,E++);E>0&&this._cGroup>c&&(this._cIndex+=E)},s.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),m=u+l;this.groupSizes[c]=0;for(var j=u;j<m;j++)this.tag.deleteRule(u);l>0&&this._cGroup>c&&(this._cIndex-=l)}},s.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],m=this.indexOfGroup(c),j=m+u,S=m;S<j;S++)l+=this.tag.getRule(S)+el;return l},s})(),Vh="style[".concat(un,"][").concat(Au,'="').concat(Ri,'"]'),Qh=new RegExp("^".concat(un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mu=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},Qa=function(s){if(!s)return document;if(mu(s))return s;if("getRootNode"in s){var c=s.getRootNode();if(mu(c))return c}return document},Gh=function(s,c,l){for(var u,m=l.split(","),j=0,S=m.length;j<S;j++)(u=m[j])&&s.registerName(c,u)},Yh=function(s,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(el),m=[],j=0,S=u.length;j<S;j++){var _=u[j].trim();if(_){var E=_.match(Qh);if(E){var K=0|parseInt(E[1],10),Q=E[2];K!==0&&(Ih(Q,K),Gh(s,Q,E[3]),s.getTag().insertRules(K,m)),m.length=0}else m.push(_)}}},Ma=function(s){for(var c=Qa(s.options.target).querySelectorAll(Vh),l=0,u=c.length;l<u;l++){var m=c[l];m&&m.getAttribute(un)!==Pu&&(Yh(s,m),m.parentNode&&m.parentNode.removeChild(m))}};function Kh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Uu=function(s){var c=document.head,l=s||c,u=document.createElement("style"),m=(function(_){var E=Array.from(_.querySelectorAll("style[".concat(un,"]")));return E[E.length-1]})(l),j=m!==void 0?m.nextSibling:null;u.setAttribute(un,Pu),u.setAttribute(Au,Ri);var S=Kh();return S&&u.setAttribute("nonce",S),l.insertBefore(u,j),u},Xh=(function(){function s(c){this.element=Uu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var u;if(l.sheet)return l.sheet;for(var m=(u=l.getRootNode().styleSheets)!==null&&u!==void 0?u:document.styleSheets,j=0,S=m.length;j<S;j++){var _=m[j];if(_.ownerNode===l)return _}throw uo(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},s})(),qh=(function(){function s(c){this.element=Uu(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),Zh=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),xu=so,Jh={isServer:!so,useCSSOMInjection:!zh},Wu=(function(){function s(c,l,u){c===void 0&&(c=pn),l===void 0&&(l={});var m=this;this.options=cr(cr({},Jh),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&so&&xu&&(xu=!1,Ma(this)),nl(this,function(){return(function(j){for(var S=j.getTag(),_=S.length,E="",K=function(U){var Z=(function(me){return zi.get(me)})(U);if(Z===void 0)return"continue";var ae=j.names.get(Z);if(ae===void 0||!ae.size)return"continue";var X=S.getGroup(U);if(X.length===0)return"continue";var W=un+".g"+U+'[id="'+Z+'"]',G="";ae.forEach(function(me){me.length>0&&(G+=me+",")}),E+=X+W+'{content:"'+G+'"}'+el},Q=0;Q<_;Q++)K(Q);return E})(m)})}return s.registerId=function(c){return oo(c)},s.prototype.rehydrate=function(){!this.server&&so&&Ma(this)},s.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var u=new s(cr(cr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&so&&c.target!==this.options.target&&Qa(this.options.target)!==Qa(c.target)&&Ma(u),u},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,m=l.target;return l.isServer?new Zh(m):u?new Xh(m):new qh(m)})(this.options),new $h(c)));var c},s.prototype.hasNameForId=function(c,l){var u,m;return(m=(u=this.names.get(c))===null||u===void 0?void 0:u.has(l))!==null&&m!==void 0&&m},s.prototype.registerName=function(c,l){oo(c);var u=this.names.get(c);u?u.add(l):this.names.set(c,new Set([l]))},s.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(oo(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(oo(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),em=/&/g,Yr=47,Pt=42;function gu(s){if(s.indexOf("}")===-1)return!1;for(var c=s.length,l=0,u=0,m=!1,j=0;j<c;j++){var S=s.charCodeAt(j);if(u!==0||m||S!==Yr||s.charCodeAt(j+1)!==Pt)if(m)S===Pt&&s.charCodeAt(j+1)===Yr&&(m=!1,j++);else if(S!==34&&S!==39||j!==0&&s.charCodeAt(j-1)===92){if(u===0){if(S===123)l++;else if(S===125&&--l<0)return!0}}else u===0?u=S:u===S&&(u=0);else m=!0,j++}return l!==0||u!==0}function Hu(s,c){return s.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Hu(l.children,c)),l})}function rm(s){var c,l,u,m=pn,j=m.options,S=j===void 0?pn:j,_=m.plugins,E=_===void 0?rl:_,K=function(X,W,G){return G.startsWith(l)&&G.endsWith(l)&&G.replaceAll(l,"").length>0?".".concat(c):X},Q=E.slice();Q.push(function(X){X.type===Pi&&X.value.includes("&")&&(u||(u=new RegExp("\\".concat(l,"\\b"),"g")),X.props[0]=X.props[0].replace(em,l).replace(u,K))}),S.prefix&&Q.push(Ch),Q.push(kh);var U=[],Z=bh(Q.concat(Sh(function(X){return U.push(X)}))),ae=function(X,W,G,me){W===void 0&&(W=""),G===void 0&&(G=""),me===void 0&&(me="&"),c=me,l=W,u=void 0;var ce=(function(L){if(!gu(L))return L;for(var q=L.length,H="",T=0,F=0,ve=0,Pe=!1,ie=0;ie<q;ie++){var _e=L.charCodeAt(ie);if(ve!==0||Pe||_e!==Yr||L.charCodeAt(ie+1)!==Pt)if(Pe)_e===Pt&&L.charCodeAt(ie+1)===Yr&&(Pe=!1,ie++);else if(_e!==34&&_e!==39||ie!==0&&L.charCodeAt(ie-1)===92){if(ve===0)if(_e===123)F++;else if(_e===125){if(--F<0){for(var Se=ie+1;Se<q;){var Ye=L.charCodeAt(Se);if(Ye===59||Ye===10)break;Se++}Se<q&&L.charCodeAt(Se)===59&&Se++,F=0,ie=Se-1,T=Se;continue}F===0&&(H+=L.substring(T,ie+1),T=ie+1)}else _e===59&&F===0&&(H+=L.substring(T,ie+1),T=ie+1)}else ve===0?ve=_e:ve===_e&&(ve=0);else Pe=!0,ie++}if(T<q){var er=L.substring(T);gu(er)||(H+=er)}return H})((function(L){if(L.indexOf("//")===-1)return L;for(var q=L.length,H=[],T=0,F=0,ve=0,Pe=0;F<q;){var ie=L.charCodeAt(F);if(ie!==34&&ie!==39||F!==0&&L.charCodeAt(F-1)===92)if(ve===0)if(ie===Yr&&F+1<q&&L.charCodeAt(F+1)===Pt){for(F+=2;F+1<q&&(L.charCodeAt(F)!==Pt||L.charCodeAt(F+1)!==Yr);)F++;F+=2}else if(ie===40&&F>=3&&(32|L.charCodeAt(F-1))==108&&(32|L.charCodeAt(F-2))==114&&(32|L.charCodeAt(F-3))==117)Pe=1,F++;else if(Pe>0)ie===41?Pe--:ie===40&&Pe++,F++;else if(ie===Pt&&F+1<q&&L.charCodeAt(F+1)===Yr)F>T&&H.push(L.substring(T,F)),T=F+=2;else if(ie===Yr&&F+1<q&&L.charCodeAt(F+1)===Yr){for(F>T&&H.push(L.substring(T,F));F<q&&L.charCodeAt(F)!==10;)F++;T=F}else F++;else F++;else ve===0?ve=ie:ve===ie&&(ve=0),F++}return T===0?L:(T<q&&H.push(L.substring(T)),H.join(""))})(X)),te=Nh(G||W?"".concat(G," ").concat(W," { ").concat(ce," }"):ce);return S.namespace&&(te=Hu(te,S.namespace)),U=[],Ei(te,Z),U};return ae.hash=E.length?E.reduce(function(X,W){return W.name||uo(15),Lt(X,W.name)},5381).toString():"",ae}var tm=new Wu,Ga=rm(),$u=mr.createContext({shouldForwardProp:void 0,styleSheet:tm,stylis:Ga});$u.Consumer;mr.createContext(void 0);function vu(){return mr.useContext($u)}var nm=(function(){function s(c,l){var u=this;this.inject=function(m,j){j===void 0&&(j=Ga);var S=u.name+j.hash;m.hasNameForId(u.id,S)||m.insertRules(u.id,S,j(u.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,nl(this,function(){throw uo(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Ga),this.name+c.hash},s})();function om(s,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||s in Eh||s.startsWith("--")?String(c).trim():"".concat(c,"px")}var im=function(s){return s>="A"&&s<="Z"};function yu(s){for(var c="",l=0;l<s.length;l++){var u=s[l];if(l===1&&u==="-"&&s[0]==="-")return s;im(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var Vu=function(s){return s==null||s===!1||s===""},Qu=function(s){var c=[];for(var l in s){var u=s[l];s.hasOwnProperty(l)&&!Vu(u)&&(Array.isArray(u)&&u.isCss||fn(u)?c.push("".concat(yu(l),":"),u,";"):lo(u)?c.push.apply(c,Ci(Ci(["".concat(l," {")],Qu(u),!1),["}"],!1)):c.push("".concat(yu(l),": ").concat(om(l,u),";")))}return c};function Bt(s,c,l,u,m){if(m===void 0&&(m=[]),typeof s=="string")return s&&m.push(s),m;if(Vu(s))return m;if(tl(s))return m.push(".".concat(s.styledComponentId)),m;if(fn(s)){if(!fn(S=s)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(s),m;var j=s(c);return Bt(j,c,l,u,m)}var S;if(s instanceof nm)return l?(s.inject(l,u),m.push(s.getName(u))):m.push(s),m;if(lo(s)){for(var _=Qu(s),E=0;E<_.length;E++)m.push(_[E]);return m}if(!Array.isArray(s))return m.push(s.toString()),m;for(E=0;E<s.length;E++)Bt(s[E],c,l,u,m);return m}function sm(s){for(var c=0;c<s.length;c+=1){var l=s[c];if(fn(l)&&!tl(l))return!1}return!0}var am=Ou(Ri),lm=(function(){function s(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&sm(c),this.componentId=l,this.baseHash=Lt(am,l),this.baseStyle=u,Wu.registerId(l)}return s.prototype.generateAndInjectStyles=function(c,l,u){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u).className:"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))m=At(m,this.staticRulesId);else{var j=hu(Bt(this.rules,c,l,u)),S=$a(Lt(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,S)){var _=u(j,".".concat(S),void 0,this.componentId);l.insertRules(this.componentId,S,_)}m=At(m,S),this.staticRulesId=S}else{for(var E=Lt(this.baseHash,u.hash),K="",Q=0;Q<this.rules.length;Q++){var U=this.rules[Q];if(typeof U=="string")K+=U;else if(U){var Z=hu(Bt(U,c,l,u));E=Lt(Lt(E,String(Q)),Z),K+=Z}}if(K){var ae=$a(E>>>0);if(!l.hasNameForId(this.componentId,ae)){var X=u(K,".".concat(ae),void 0,this.componentId);l.insertRules(this.componentId,ae,X)}m=At(m,ae)}}return{className:m,css:typeof window=="undefined"?l.getTag().getGroup(oo(this.componentId)):""}},s})(),Gu=mr.createContext(void 0);Gu.Consumer;var Da={};function cm(s,c,l){var u=tl(s),m=s,j=!Fa(s),S=c.attrs,_=S===void 0?rl:S,E=c.componentId,K=E===void 0?(function(L,q){var H=typeof L!="string"?"sc":cu(L);Da[H]=(Da[H]||0)+1;var T="".concat(H,"-").concat(Ah(Ri+H+Da[H]));return q?"".concat(q,"-").concat(T):T})(c.displayName,c.parentComponentId):E,Q=c.displayName,U=Q===void 0?(function(L){return Fa(L)?"styled.".concat(L):"Styled(".concat(Bh(L),")")})(s):Q,Z=c.displayName&&c.componentId?"".concat(cu(c.displayName),"-").concat(c.componentId):c.componentId||K,ae=u&&m.attrs?m.attrs.concat(_).filter(Boolean):_,X=c.shouldForwardProp;if(u&&m.shouldForwardProp){var W=m.shouldForwardProp;if(c.shouldForwardProp){var G=c.shouldForwardProp;X=function(L,q){return W(L,q)&&G(L,q)}}else X=W}var me=new lm(l,Z,u?m.componentStyle:void 0);function ce(L,q){return(function(H,T,F){var ve=H.attrs,Pe=H.componentStyle,ie=H.defaultProps,_e=H.foldedComponentIds,Se=H.styledComponentId,Ye=H.target,er=mr.useContext(Gu),Ke=vu(),ye=H.shouldForwardProp||Ke.shouldForwardProp,I=Th(T,er,ie)||pn,D=(function(oe,de,le){for(var xe,ze=cr(cr({},de),{className:void 0,theme:le}),Kr=0;Kr<oe.length;Kr+=1){var vt=fn(xe=oe[Kr])?xe(ze):xe;for(var kr in vt)kr==="className"?ze.className=At(ze.className,vt[kr]):kr==="style"?ze.style=cr(cr({},ze.style),vt[kr]):ze[kr]=vt[kr]}return"className"in de&&typeof de.className=="string"&&(ze.className=At(ze.className,de.className)),ze})(ve,T,I),P=D.as||Ye,x={};for(var N in D)D[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&D.theme===I||(N==="forwardedAs"?x.as=D.forwardedAs:ye&&!ye(N,P)||(x[N]=D[N]));var J=(function(oe,de){var le=vu(),xe=oe.generateAndInjectStyles(de,le.styleSheet,le.stylis);return xe})(Pe,D),ee=J.className,se=At(_e,Se);return ee&&(se+=" "+ee),D.className&&(se+=" "+D.className),x[Fa(P)&&!Bu.has(P)?"class":"className"]=se,F&&(x.ref=F),Ee.createElement(P,x)})(te,L,q)}ce.displayName=U;var te=mr.forwardRef(ce);return te.attrs=ae,te.componentStyle=me,te.displayName=U,te.shouldForwardProp=X,te.foldedComponentIds=u?At(m.foldedComponentIds,m.styledComponentId):"",te.styledComponentId=Z,te.target=u?m.target:s,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=u?(function(q){for(var H=[],T=1;T<arguments.length;T++)H[T-1]=arguments[T];for(var F=0,ve=H;F<ve.length;F++)Va(q,ve[F],!0);return q})({},m.defaultProps,L):L}}),nl(te,function(){return".".concat(te.styledComponentId)}),j&&Du(te,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function ju(s,c){for(var l=[s[0]],u=0,m=c.length;u<m;u+=1)l.push(c[u],s[u+1]);return l}var Nu=function(s){return Object.assign(s,{isCss:!0})};function dm(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(fn(s)||lo(s))return Nu(Bt(ju(rl,Ci([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?Bt(u):Nu(Bt(ju(u,c)))}function Ya(s,c,l){if(l===void 0&&(l=pn),!c)throw uo(1,c);var u=function(m){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return s(c,l,dm.apply(void 0,Ci([m],j,!1)))};return u.attrs=function(m){return Ya(s,c,cr(cr({},l),{attrs:Array.prototype.concat(l.attrs,m).filter(Boolean)}))},u.withConfig=function(m){return Ya(s,c,cr(cr({},l),m))},u}var Yu=function(s){return Ya(cm,s)},Ne=Yu;Bu.forEach(function(s){Ne[s]=Yu(s)});const Ua={Wrapper:Ne.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:Ne.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:Ne.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},wu={Wrapper:Ne.header`
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
    `,Main:Ne.div`
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
    `},um="/c-core-notes/images/transparentLogo.png";var Ku={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ku=mr.createContext&&mr.createContext(Ku),pm=["attr","size","title"];function fm(s,c){if(s==null)return{};var l=hm(s,c),u,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(m=0;m<j.length;m++)u=j[m],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(l[u]=s[u])}return l}function hm(s,c){if(s==null)return{};var l={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;l[u]=s[u]}return l}function Ii(){return Ii=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},Ii.apply(this,arguments)}function bu(s,c){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(s,m).enumerable})),l.push.apply(l,u)}return l}function Ti(s){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?bu(Object(l),!0).forEach(function(u){mm(s,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):bu(Object(l)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(l,u))})}return s}function mm(s,c,l){return c=xm(c),c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l,s}function xm(s){var c=gm(s,"string");return typeof c=="symbol"?c:c+""}function gm(s,c){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var u=l.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Xu(s){return s&&s.map((c,l)=>mr.createElement(c.tag,Ti({key:l},c.attr),Xu(c.child)))}function he(s){return c=>mr.createElement(vm,Ii({attr:Ti({},s.attr)},c),Xu(s.child))}function vm(s){var c=l=>{var{attr:u,size:m,title:j}=s,S=fm(s,pm),_=m||l.size||"1em",E;return l.className&&(E=l.className),s.className&&(E=(E?E+" ":"")+s.className),mr.createElement("svg",Ii({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,S,{className:E,style:Ti(Ti({color:s.color||l.color},l.style),s.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),j&&mr.createElement("title",null,j),s.children)};return ku!==void 0?mr.createElement(ku.Consumer,null,l=>c(l)):c(Ku)}function ym(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function hn(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function jm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(s)}function qu(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Qe(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function Ge(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function Nm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function z(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Zu(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(s)}function xn(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function wm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function Ju(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(s)}function km(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(s)}function _i(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function bm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(s)}function ep(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(s)}function Ka(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function gt(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Sm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Cm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(s)}function Em(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(s)}function zm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function Im(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function Tm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(s)}function Xa(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function _m(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(s)}function Lm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function Li(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(s)}function Pm(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(s)}function Am(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function co(s){return he({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}const Bm=()=>{const[s,c]=Ee.useState(!1),[l,u]=Ee.useState("dark");Ee.useEffect(()=>{const _=localStorage.getItem("app-theme")||"dark";u(_),_==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),Ee.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const m=Ee.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{u(m)};return n.jsx(wu.Wrapper,{children:n.jsx(wu.Main,{children:n.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[n.jsxs("div",{className:"logoNameWrapper",children:[n.jsxs("div",{className:"logoWrapper",children:[!s&&n.jsx("div",{className:"logoSkeleton"}),n.jsx("img",{src:um,alt:"c-core-notes",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),n.jsxs("div",{className:"nameWrapper",children:[n.jsx("div",{className:"title",children:"c-core-notes"}),n.jsx("div",{className:"subTitle",children:"At-a-glance c revision"})]})]}),n.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[n.jsx("span",{className:"icon",children:l==="light"?n.jsx(zm,{}):n.jsx(Lm,{})}),n.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},Om={Wrapper:Ne.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Rm=()=>n.jsxs(Om.Wrapper,{children:[n.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),n.jsxs("div",{className:"right",children:["By ",n.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Su={Wrapper:Ne.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:Ne.div`
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
    `},Fm=()=>{const s="2026-09-09T05:16:12.558Z",c=new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return n.jsx(Su.Wrapper,{children:n.jsxs(Su.Content,{children:[n.jsxs("div",{className:"top",children:[n.jsxs("div",{className:"badge",children:[n.jsx("span",{className:"badgeIcon",children:n.jsx(Li,{})}),"C core revision"]}),n.jsx("h2",{className:"heading",children:"About C Programming"}),n.jsx("p",{className:"sub",children:"A low level, procedural language where you learn what a program really is - memory, compilation, and control."})]}),n.jsxs("div",{className:"grid",children:[n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(xn,{})}),"What is C"]}),n.jsx("p",{className:"p",children:"C is a general purpose, procedural programming language created in 1972 by Dennis Ritchie. It is one of the most influential languages and forms the foundation of many modern languages and systems."})]}),n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(ep,{})}),"Why C matters"]}),n.jsx("p",{className:"p",children:"C gives direct access to memory through pointers and manual memory management. This makes it fast and powerful, but it also requires careful thinking about stack, heap, memory layout, and safety."})]}),n.jsxs("div",{className:"card wide",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(Li,{})}),"About c-core-notes"]}),n.jsx("p",{className:"p",children:"The c-core-notes project is designed as a focused revision system. It organizes syntax, control flow, functions, arrays, pointers, structures, dynamic memory, and file handling into a structured single page reference. The goal is strong fundamentals, clear memory concepts, and clean logical thinking."}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"metaLeft",children:[n.jsx("span",{className:"metaIcon",children:n.jsx(Nm,{})}),n.jsx("span",{className:"metaLabel",children:"Last updated"})]}),n.jsx("span",{className:"metaValue",children:c})]})]})]})]})})},Mm={Wrapper:Ne.section`
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
    `},Dm=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(Mm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Li,{})}),n.jsx("span",{className:"title",children:"Introduction to C"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"C is where you learn how programs work at a lower level. You write logic, control memory, and understand the compilation pipeline. If you learn C properly, every other language becomes easier."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(xn,{})}),"What is C"]}),n.jsx("p",{className:"p",children:"C is a general purpose, procedural programming language used for systems programming, embedded software, and performance critical code. It gives you direct access to memory and low level control."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(jm,{})}),"History of C"]}),n.jsx("p",{className:"p",children:"C was created by Dennis Ritchie at Bell Labs in the early 1970s. It was designed to build the Unix operating system and became one of the most widely used languages."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(co,{})}),"Why C is important"]}),n.jsx("p",{className:"p",children:"C teaches core computer science concepts like memory layout, pointers, compilation, and performance. It is still used in OS kernels, device drivers, embedded systems, databases, and high performance libraries."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Compiled language concept"]}),n.jsx("p",{className:"p",children:"C is a compiled language. Your C code is converted into machine code (binary instructions) before it runs. This is different from languages that mostly run inside a runtime or virtual machine."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - compile and run"]}),n.jsx("pre",{className:"code",children:`gcc main.c -o app
./app

// output - depends on your program`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Structure of a C program"}),n.jsx("p",{className:"p",children:"A basic C program typically has header includes, the main function, and statements inside main. Large programs are split into multiple source and header files."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Minimal structure"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  printf("Hello C\\n");
  return 0;
}

// output - Hello C`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"main function"}),n.jsx("p",{className:"p",children:"main is the entry point of a C program. Execution starts from main. A return value of 0 usually means success."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"main return value"]}),n.jsx("pre",{className:"code",children:`int main() {
  return 0; // success
}

// output - program exits successfully`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Header files"}),n.jsx("p",{className:"p",children:"Header files contain declarations like function prototypes, macros, and type definitions. You include them using #include. Common headers are stdio.h, stdlib.h, string.h, and math.h."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - include header"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

// stdio.h provides printf and scanf`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Standard library overview"}),n.jsx("p",{className:"p",children:"The C standard library provides reusable functions for input output, memory management, strings, math, and more. You use it by including the correct header."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"stdio.h - input output"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"stdlib.h - malloc, free, exit"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"string.h - strlen, strcpy, strcmp"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"math.h - sqrt, pow"]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"How compilation works - preprocess compile link execute"}),n.jsx("p",{className:"p",children:"C programs go through a pipeline. First the preprocessor expands includes and macros. Then the compiler converts code to assembly or object code. Then the linker combines object files and libraries into an executable. Finally the OS loads and executes it."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Simple pipeline view"]}),n.jsx("pre",{className:"code",children:`// 1 - preprocess
gcc -E main.c -o main.i

// 2 - compile
gcc -S main.i -o main.s

// 3 - assemble
gcc -c main.s -o main.o

// 4 - link
gcc main.o -o app

// 5 - execute
./app`})]}),n.jsx("div",{className:"hint",children:'If you see "undefined reference" errors, that is usually a linking problem.'})]})]})]})},Um={Wrapper:Ne.section`
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
    `},Wm=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(Um.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(z,{})}),n.jsx("span",{className:"title",children:"Basic Syntax"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Comments - single line and multi line"}),n.jsx("pre",{className:"code",children:`// single line comment

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

// output - Age is 25`})]})]})]})},Hm={Wrapper:Ne.section`
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
    `},$m=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(Hm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(xn,{})}),n.jsx("span",{className:"title",children:"Operators"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx(Qr,{title:"Arithmetic operators",code:`int a = 10;
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
printf("%.2f\\n", result); // 2.50`})]})]})},Qr=({title:s,code:c})=>n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:s}),n.jsx("pre",{className:"code",children:c})]}),Vm={Wrapper:Ne.section`
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
    `},Qm=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(Vm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(_i,{})}),n.jsx("span",{className:"title",children:"Control Flow"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Control flow determines how your program makes decisions and repeats actions. In C, this includes conditions and loops."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"if"}),n.jsx("p",{className:"p",children:"Executes code only if the condition is true."}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - 2`})]})]})]})},Gm={Wrapper:Ne.section`
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
    `},Ym=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(Gm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(z,{})}),n.jsx("span",{className:"title",children:"Functions"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Functions help break programs into reusable blocks. They improve structure, readability, and modular design."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function declaration"}),n.jsx("p",{className:"p",children:"A declaration tells the compiler about a function before it is used."}),n.jsx("pre",{className:"code",children:"int add(int a, int b); // declaration"})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function definition"}),n.jsx("p",{className:"p",children:"A definition contains the actual implementation."}),n.jsx("pre",{className:"code",children:`int add(int a, int b) {
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

// output - 10`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx(Im,{})," Recursion"]}),n.jsx("p",{className:"p",children:"Recursion is when a function calls itself. It must have a base condition to stop."}),n.jsx("pre",{className:"code",children:`int factorial(int n) {
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
// output - 2`})]})]})]})},Km={Wrapper:Ne.section`
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
    `},Xm=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(Km.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(bm,{})}),n.jsx("span",{className:"title",children:"Arrays"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"An array is a fixed size collection of elements of the same data type stored in continuous memory. Arrays make iteration fast and predictable, and they are the base of strings and many data structures."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"One dimensional arrays"}),n.jsx("p",{className:"p",children:"A 1D array stores values in a single line. Indexing starts from 0."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - 1D array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int a[5] = {10, 20, 30, 40, 50};

  printf("%d\\n", a[0]);
  printf("%d\\n", a[4]);

  return 0;
}

// output - 10
// output - 50`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Two dimensional arrays"}),n.jsx("p",{className:"p",children:"A 2D array is like a table with rows and columns. You access elements using a[row][col]."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - 2D array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - 6`})]}),n.jsx("div",{className:"hint",children:"C stores 2D arrays in row major order, meaning one row after another in memory."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Multidimensional arrays"}),n.jsx("p",{className:"p",children:"Multidimensional arrays are arrays with more than 2 dimensions. They are less common, but useful for 3D grids and certain simulations."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - 3D array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int box[2][2][2] = {
    { {1, 2}, {3, 4} },
    { {5, 6}, {7, 8} }
  };

  printf("%d\\n", box[1][0][1]);

  return 0;
}

// output - 6`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Passing arrays to functions"}),n.jsx("p",{className:"p",children:"When you pass an array to a function, it decays into a pointer to its first element. That is why the function cannot know the size automatically. You usually pass the length separately."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - sum array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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

// output - 10`})]}),n.jsx("div",{className:"hint",children:"arr[] and int *arr are treated the same in function parameters."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Array initialization"}),n.jsx("p",{className:"p",children:"You can initialize arrays in multiple ways. If you give fewer values, remaining elements become 0."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Examples - initialization patterns"]}),n.jsx("pre",{className:"code",children:`int a[3] = {1, 2, 3};      // full init
int b[5] = {1, 2};         // remaining are 0
int c[]  = {10, 20, 30};   // size inferred

// b looks like - {1, 2, 0, 0, 0}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIconMini",children:n.jsx(ep,{})}),"Memory layout of arrays"]}),n.jsx("p",{className:"p",children:"Arrays are stored in contiguous memory. The address of a[i] is calculated using base address plus i multiplied by size of element. This is why indexing is fast."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - addresses"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int a[3] = {10, 20, 30};

  printf("%p\\n", (void*)&a[0]);
  printf("%p\\n", (void*)&a[1]);
  printf("%p\\n", (void*)&a[2]);

  return 0;
}

// output - addresses will increase by sizeof(int) each time`})]}),n.jsxs("div",{className:"hint",children:[n.jsx("span",{className:"hintIcon",children:n.jsx(Zu,{})}),"In most systems, sizeof(int) is 4 bytes, so addresses usually differ by 4."]})]})]})]})},qm={Wrapper:Ne.section`
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
    `},Zm=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(qm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Am,{})}),n.jsx("span",{className:"title",children:"Strings"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"In C, a string is not a built in type. It is simply a character array that ends with a special null character '\\0'."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Character arrays"}),n.jsx("p",{className:"p",children:"Strings are stored in arrays of characters."}),n.jsx("pre",{className:"code",children:`char name[] = "Ashish";

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
// output - o`}),n.jsx("p",{className:"p",children:"Pointer based strings are powerful but modifying string literals directly can cause undefined behavior."})]})]})]})},Jm={Wrapper:Ne.section`
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
    `},ex=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(Jm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(co,{})}),n.jsx("span",{className:"title",children:"Pointers"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Pointers store memory addresses. They let you work directly with memory, build efficient data structures, and write low level code. This is where C becomes powerful - and also where bugs become dangerous."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"What is a pointer"}),n.jsx("p",{className:"p",children:"A pointer is a variable that stores the address of another variable. It does not store the value directly."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 10;
int *p = &x;

printf("%d\\n", x);
printf("%d\\n", *p);

// output - 10
// output - 10`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Address operator"}),n.jsx("p",{className:"p",children:"The address operator & gives the memory address of a variable."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 10;
printf("%p\\n", (void *)&x);

// output - memory address like 0x7ffc...`})]}),n.jsx("div",{className:"hint",children:"Use %p to print addresses. Cast to (void *) for clean, standard output."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Dereference operator"}),n.jsx("p",{className:"p",children:"The dereference operator * accesses the value stored at an address."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 25;
int *p = &x;

*p = 99;

printf("%d\\n", x);

// output - 99`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointer declaration"}),n.jsx("p",{className:"p",children:"Pointer declaration uses * with a type. The type tells how many bytes to read or write when dereferencing."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Examples"]}),n.jsx("pre",{className:"code",children:`int *pi;      // pointer to int
char *pc;     // pointer to char
double *pd;   // pointer to double`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointer arithmetic"}),n.jsx("p",{className:"p",children:"When you add or subtract on a pointer, it moves by the size of its type. This is why pointers work well with arrays."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int a[3] = {10, 20, 30};
int *p = a; // same as &a[0]

printf("%d\\n", *p);
printf("%d\\n", *(p + 1));
printf("%d\\n", *(p + 2));

// output - 10
// output - 20
// output - 30`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointers and arrays"}),n.jsx("p",{className:"p",children:"In most expressions, an array name decays into a pointer to its first element. That is why a and &a[0] often behave the same."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int a[2] = {7, 8};

printf("%d\\n", a[0]);
printf("%d\\n", *a);
printf("%d\\n", *(a + 1));

// output - 7
// output - 7
// output - 8`})]}),n.jsx("div",{className:"hint",children:"a is not a modifiable pointer. You cannot do a++ but you can do p++ if p is a pointer variable."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Pointer to pointer"}),n.jsx("p",{className:"p",children:"A pointer to pointer stores the address of another pointer. Useful for 2D arrays, dynamic allocation, and when you want a function to modify a pointer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 5;
int *p = &x;
int **pp = &p;

printf("%d\\n", x);
printf("%d\\n", *p);
printf("%d\\n", **pp);

// output - 5
// output - 5
// output - 5`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Null pointer"}),n.jsx("p",{className:"p",children:"A null pointer points to nothing. It is used to represent an invalid or empty pointer safely. Always initialize pointers."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int *p = NULL;

if (p == NULL) {
  printf("No address\\n");
}

// output - No address`})]}),n.jsxs("div",{className:"danger",children:[n.jsx("span",{className:"dangerIcon",children:n.jsx(hn,{})}),"Never dereference a null pointer - it causes a crash."]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Dangling pointer"}),n.jsx("p",{className:"p",children:"A dangling pointer points to memory that has been freed or gone out of scope. Accessing it leads to undefined behavior."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int *p = (int *)malloc(sizeof(int));
*p = 42;

free(p);
p = NULL; // fix - avoid dangling pointer

// output - memory freed safely`})]}),n.jsx("div",{className:"hint",children:"After free, set pointer to NULL to avoid accidental use."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Wild pointer"}),n.jsx("p",{className:"p",children:"A wild pointer is an uninitialized pointer. It points to a random address. Dereferencing it can crash or corrupt memory."}),n.jsxs("div",{className:"danger",children:[n.jsx("span",{className:"dangerIcon",children:n.jsx(hn,{})}),"Always initialize pointers - use NULL if you do not have a valid address yet."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Good practice"]}),n.jsx("pre",{className:"code",children:`int *p = NULL;

// output - safe pointer initialization`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Void pointer"}),n.jsx("p",{className:"p",children:"A void pointer can store the address of any type. You cannot directly dereference it without casting to the correct type first."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 77;
void *p = &x;

printf("%d\\n", *(int *)p);

// output - 77`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function pointers"}),n.jsx("p",{className:"p",children:"Function pointers store the address of a function. They are used for callbacks and building flexible APIs like custom sorting functions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int add(int a, int b) {
  return a + b;
}

int main() {
  int (*fn)(int, int) = add;
  printf("%d\\n", fn(2, 3));
  return 0;
}

// output - 5`})]}),n.jsx("div",{className:"hint",children:"Read it as - fn is a pointer to a function that takes (int, int) and returns int."})]}),n.jsxs("div",{className:"endNote",children:[n.jsx("span",{className:"endIcon",children:n.jsx(xn,{})}),"This is where C becomes powerful."]})]})]})},rx={Wrapper:Ne.section`
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
    `},tx=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(rx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(qu,{})}),n.jsx("span",{className:"title",children:"Structures and Unions"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Structures and unions let you group related data into a single type. struct stores all members separately. union shares memory between members."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"struct keyword"]}),n.jsx("p",{className:"p",children:"struct creates a custom type that groups multiple fields under one name. Each field has its own memory."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - define and create"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

struct Student {
  int id;
  char grade;
};

int main() {
  struct Student s1 = { 101, 'A' };
  printf("%d %c\\n", s1.id, s1.grade);

  return 0;
}

// output - 101 A`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Accessing members"}),n.jsx("p",{className:"p",children:"Use dot operator to access members of a struct variable."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - dot operator"]}),n.jsx("pre",{className:"code",children:`struct Student s = { 5, 'B' };
printf("%d\\n", s.id);   // output - 5
printf("%c\\n", s.grade); // output - B`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Array of structures"}),n.jsx("p",{className:"p",children:"An array of structs stores multiple records of the same type, like a mini table of data."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - array of structs"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - 2 C`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Sm,{})}),"Pointer to structure"]}),n.jsx("p",{className:"p",children:"A pointer can store the address of a struct. Use arrow operator -> to access members through a pointer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - arrow operator"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - A`})]}),n.jsx("div",{className:"hint",children:"ptr->id is the same as (*ptr).id - arrow is just cleaner."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Nested structures"}),n.jsx("p",{className:"p",children:"A struct can contain another struct. This is useful for grouping related details inside one record."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - nested struct"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - 560049`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Union concept"}),n.jsx("p",{className:"p",children:"union is like struct, but all members share the same memory location. Only one member should be used at a time, because writing to one overwrites the others."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - union overwrite"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Difference between struct and union"}),n.jsx("p",{className:"p",children:"struct allocates separate memory for each member, so all values can exist together. union shares memory across members, so only one value should be used at a time."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"struct - size is roughly sum of members (with padding)"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"union - size is max of member sizes"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"struct - all fields usable together"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"union - one field at a time"]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"typedef"}),n.jsx("p",{className:"p",children:"typedef creates an alias for an existing type. It is commonly used with structs to avoid writing struct again and again."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - typedef with struct"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

typedef struct {
  int id;
  char grade;
} Student;

int main() {
  Student s = { 12, 'B' };
  printf("%d %c\\n", s.id, s.grade);

  return 0;
}

// output - 12 B`})]}),n.jsx("div",{className:"hint",children:"typedef makes your code shorter and cleaner, especially when structs are used everywhere."})]})]})]})},nx={Wrapper:Ne.section`
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
    `},ox=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(nx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(wm,{})}),n.jsx("span",{className:"title",children:"Dynamic Memory Allocation"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Dynamic memory allocation lets you request memory at runtime from the heap. This is useful when you do not know the size in advance. But it also means you must free memory yourself, otherwise memory leaks happen."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Heap vs stack memory"]}),n.jsx("p",{className:"p",children:"The stack is fast and automatic. Local variables and function calls live on the stack. The heap is for dynamic memory that you allocate manually using malloc and friends. Heap memory stays until you free it."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"stack - automatic, function scoped, freed on return"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"heap - manual, flexible size, must free yourself"]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"malloc"}),n.jsx("p",{className:"p",children:"malloc allocates a block of memory of given size (in bytes) on the heap. It returns a pointer to the first byte. The memory is not initialized."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - malloc int array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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

// output - 10 20 30`})]}),n.jsx("div",{className:"hint",children:"malloc can return NULL. Always check before using the pointer."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"calloc"}),n.jsx("p",{className:"p",children:"calloc allocates memory for an array of elements and initializes all bytes to 0. It takes two arguments - number of elements and size of each element."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - calloc zero init"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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

// output - 0 0 0 0`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"realloc"}),n.jsx("p",{className:"p",children:"realloc resizes an existing heap block. It may move the block to a new location. If it moves, the old pointer becomes invalid. A safe pattern is to store the result in a temporary pointer first."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - grow array using realloc"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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

// output - 5 15 25 35`})]}),n.jsx("div",{className:"hint",children:"Do not assign realloc directly to arr without a temp. If realloc fails, you lose the original pointer and leak memory."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Pm,{})}),"free"]}),n.jsx("p",{className:"p",children:"free releases heap memory that you allocated. After freeing, set the pointer to NULL to avoid accidentally using freed memory."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - free and null"]}),n.jsx("pre",{className:"code",children:`int *p = (int*)malloc(sizeof(int));
if (p == NULL) return 1;

*p = 99;

free(p);
p = NULL; // good habit

// output - memory released safely`})]}),n.jsx("div",{className:"hint",children:"Using a pointer after free is a bug called use after free. It can crash your program."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Memory leak concept"]}),n.jsx("p",{className:"p",children:"A memory leak happens when you allocate memory but never free it. The memory stays reserved until the program ends. In long running programs, leaks can grow and cause slowdowns or crashes."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - leak vs fixed"]}),n.jsx("pre",{className:"code",children:`// leak - allocated but never freed
int *p = (int*)malloc(100 * sizeof(int));
if (p == NULL) return 1;
// no free(p) here

// fixed
int *q = (int*)malloc(100 * sizeof(int));
if (q == NULL) return 1;
free(q);
q = NULL;`})]}),n.jsx("div",{className:"hint",children:"Every malloc or calloc should have a matching free. Think in pairs - allocate then release."})]})]})]})},ix={Wrapper:Ne.section`
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
    `},sx=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(ix.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(km,{})}),n.jsx("span",{className:"title",children:"File Handling"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"File handling lets your C program read and write data that stays even after the program exits. The standard library uses a file pointer of type FILE* to represent an open file."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ju,{})}),"File pointer"]}),n.jsx("p",{className:"p",children:"A file pointer is a pointer to a FILE object managed by the C runtime. You get it from fopen and use it in file functions like fprintf, fscanf, fread, fwrite, and fclose."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - FILE*"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fopen modes"}),n.jsx("p",{className:"p",children:"fopen takes a filename and a mode. Mode decides whether you read, write, append, and whether it is text or binary."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "r" - read (file must exist)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "w" - write (creates or truncates)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "a" - append (creates if missing)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "r+" - read and write']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "w+" - write and read (truncates)']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' "a+" - append and read']}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),' add "b" for binary - "rb", "wb", "ab"']})]}),n.jsx("div",{className:"hint",children:'"w" clears the file content. Use "a" if you want to keep old content and add new lines.'})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fclose"}),n.jsx("p",{className:"p",children:"fclose closes the file and flushes pending writes. Always close files to avoid data loss and resource leaks."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - fclose"]}),n.jsx("pre",{className:"code",children:`FILE* fp = fopen("a.txt", "w");
if (fp == NULL) return 1;

fprintf(fp, "saved\\n");
fclose(fp);

// output - file closed, data flushed`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fprintf"}),n.jsx("p",{className:"p",children:"fprintf writes formatted text to a file, similar to printf but with a file pointer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - fprintf"]}),n.jsx("pre",{className:"code",children:`FILE* fp = fopen("scores.txt", "w");
if (fp == NULL) return 1;

int score = 95;
fprintf(fp, "Score - %d\\n", score);
fclose(fp);

// output - scores.txt contains "Score - 95"`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fscanf"}),n.jsx("p",{className:"p",children:"fscanf reads formatted text from a file, similar to scanf. It is useful for structured text but you must handle errors carefully."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - fscanf"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("scores.txt", "r");
  if (fp == NULL) return 1;

  int score = 0;
  fscanf(fp, "Score - %d", &score);
  fclose(fp);

  printf("%d\\n", score);

  // output - 95
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:"Always check the return value of fscanf to confirm how many values were successfully read."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fread"}),n.jsx("p",{className:"p",children:"fread reads binary data in blocks. It is used when you store raw bytes, structs, or binary files."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - fread"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"fwrite"}),n.jsx("p",{className:"p",children:"fwrite writes binary data in blocks. Useful for saving numbers or structs without converting to text."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - fwrite"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("bin.dat", "wb");
  if (fp == NULL) return 1;

  int x = 1234;
  size_t n = fwrite(&x, sizeof(int), 1, fp);
  fclose(fp);

  // n - 1 means one item written successfully
  // output - bin.dat contains binary bytes of 1234
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Em,{})}),"fseek"]}),n.jsx("p",{className:"p",children:"fseek moves the file position indicator. This allows you to jump to a specific byte offset in the file."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_SET - from beginning"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_CUR - from current position"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_END - from end"]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - fseek"]}),n.jsx("pre",{className:"code",children:`FILE* fp = fopen("data.txt", "r");
if (fp == NULL) return 1;

fseek(fp, 0, SEEK_END); // jump to end
fclose(fp);

// output - file cursor moved to end`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"ftell"}),n.jsx("p",{className:"p",children:"ftell returns the current position (byte offset) in the file. It is commonly used with fseek to find file size."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - file size using fseek and ftell"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  FILE* fp = fopen("data.txt", "r");
  if (fp == NULL) return 1;

  fseek(fp, 0, SEEK_END);
  long size = ftell(fp);
  fclose(fp);

  printf("%ld\\n", size);

  // output - number of bytes in data.txt
  return 0;
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Tm,{})}),"EOF handling"]}),n.jsx("p",{className:"p",children:"EOF means end of file. For reading loops, you usually check the return value of input functions rather than comparing directly with EOF in a fragile way."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - safe line reading with EOF handling"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]}),n.jsx("div",{className:"hint",children:"For binary reads, use fread and check how many items were read. For text, prefer fgets over gets."})]})]})]})},ax={Wrapper:Ne.section`
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
    `},lx=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(ax.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ka,{})}),n.jsx("span",{className:"title",children:"Preprocessor"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"The C preprocessor runs before compilation. It modifies your source code by expanding headers and replacing macros. Think of it as a text processing step that happens before the compiler sees the code."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"#include"]}),n.jsx("p",{className:"p",children:"#include literally inserts the contents of a header file into your source file. Use angle brackets for standard library headers and quotes for your own local headers."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - standard vs local include"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>   // standard library header
#include "utils.h"   // local project header

// output - no direct output, it changes the source before compile`})]}),n.jsx("div",{className:"hint",children:'If you see "file not found" errors, your include path is wrong or the header is missing.'})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ka,{})}),"#define"]}),n.jsx("p",{className:"p",children:"#define creates a macro. It is a replacement rule. The preprocessor replaces the macro name with its value before compilation."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - constant style macro"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define PI 3.14159

int main() {
  printf("%.2f\\n", PI);
  return 0;
}

// output - 3.14`})]}),n.jsx("div",{className:"hint",children:"Prefer const variables for typed constants in modern C code, but macros are still common in C projects."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Macros"}),n.jsx("p",{className:"p",children:"Macros can also act like functions. They can be faster because there is no function call, but they can be risky because they do not perform type checking. Always use parentheses to avoid precedence bugs."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - function like macro"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define SQUARE(x) ((x) * (x))

int main() {
  int n = 5;
  printf("%d\\n", SQUARE(n));
  return 0;
}

// output - 25`})]}),n.jsx("div",{className:"hint",children:"Without parentheses, SQUARE(1 + 2) could break. That is why macros are written with extra parentheses."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Xa,{})}),"Conditional compilation"]}),n.jsx("p",{className:"p",children:"Conditional compilation lets you include or exclude code depending on conditions. This is commonly used for debug logs, platform specific code, or feature flags."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - debug flag"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

#define DEBUG 1

int main() {
#if DEBUG
  printf("Debug mode\\n");
#endif

  printf("App running\\n");
  return 0;
}

// output - Debug mode
// output - App running`})]}),n.jsx("div",{className:"hint",children:"Use conditional compilation to avoid shipping debug logs in production builds."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"#ifdef and #ifndef"}),n.jsx("p",{className:"p",children:"#ifdef checks if a macro is defined. #ifndef checks if a macro is not defined. This is most commonly used for header guards, which prevent double includes."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - header guard pattern"]}),n.jsx("pre",{className:"code",children:`// utils.h

#ifndef UTILS_H
#define UTILS_H

int add(int a, int b);

#endif

// output - no direct output, prevents duplicate definitions`})]}),n.jsx("div",{className:"hint",children:'Without header guards, including the same header twice can cause "redefinition" errors during compilation.'})]})]})]})},cx={Wrapper:Ne.section`
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
    `},dx=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(cx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(_m,{})}),n.jsx("span",{className:"title",children:"Bit Manipulation"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Bit manipulation means working with numbers at the bit level (0 and 1). It is heavily used in embedded systems, performance code, flags, masks, and low level utilities."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ka,{})}),"Bitwise AND OR XOR NOT"]}),n.jsx("p",{className:"p",children:"These operators work on bits. Think of them as tools for combining and checking flags."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - AND OR XOR NOT"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - depends on integer size (two's complement)`})]}),n.jsx("div",{className:"hint",children:`~a flips all bits. The numeric result depends on signed representation (two's complement). For beginners, treat it as "invert all bits".`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(co,{})}),"Left shift"]}),n.jsx("p",{className:"p",children:"Left shift moves bits to the left. For positive numbers, shifting left by 1 usually multiplies by 2."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - left shift"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x = 3; // 0011
  printf("%d\\n", x << 1); // 0110
  printf("%d\\n", x << 2); // 1100

  return 0;
}

// output - 6
// output - 12`})]}),n.jsx("div",{className:"hint",children:"For signed integers, shifting into the sign bit can be tricky. Use unsigned for bit operations when possible."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(co,{})}),"Right shift"]}),n.jsx("p",{className:"p",children:"Right shift moves bits to the right. For positive numbers, shifting right by 1 usually divides by 2."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - right shift"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x = 12; // 1100
  printf("%d\\n", x >> 1); // 0110
  printf("%d\\n", x >> 2); // 0011

  return 0;
}

// output - 6
// output - 3`})]}),n.jsx("div",{className:"hint",children:"Right shift on negative numbers may do sign extension depending on compiler. Use unsigned for predictable behavior."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Setting clearing toggling bits"}),n.jsx("p",{className:"p",children:"Common pattern - use a mask. A mask is a number with a single bit set like 1 << k. With this you can set, clear, toggle, or check a specific bit."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - set clear toggle check"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - bit is 1`})]}),n.jsx("div",{className:"hint",children:"Use unsigned int and 1u for masks. It avoids sign issues and makes shifts safer."})]})]})]})},ux={Wrapper:Ne.section`
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
    `},px=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(ux.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(co,{})}),n.jsx("span",{className:"title",children:"Advanced Concepts"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"These topics appear in real systems code and interviews. The goal is not to memorize everything, but to understand what can go wrong and why C requires careful thinking."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Li,{})}),"Command line arguments"]}),n.jsxs("p",{className:"p",children:["main can receive arguments from the command line.",n.jsx("code",{children:"argc"})," is the count, and ",n.jsx("code",{children:"argv"})," is an array of strings. ",n.jsx("code",{children:"argv[0]"})," is the program name."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
*/`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(xn,{})}),"const keyword"]}),n.jsx("p",{className:"p",children:"const means the variable should not be modified through that name. It helps prevent accidental changes and improves readability."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  const int maxUsers = 100;
  printf("%d\\n", maxUsers);

  // maxUsers = 200; // error - assignment of read-only variable
  return 0;
}

// output - 100`})]}),n.jsx("div",{className:"hint",children:"const does not always mean the value is stored in ROM. It means you are not allowed to modify it through that identifier."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(ym,{})}),"volatile keyword"]}),n.jsx("p",{className:"p",children:'volatile tells the compiler "this value can change unexpectedly" - for example hardware registers or a variable changed by an interrupt. It prevents the compiler from optimizing away repeated reads.'}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Concept example"]}),n.jsx("pre",{className:"code",children:`volatile int flag = 0;

while (flag == 0) {
  // wait until flag changes
}

/*
idea - some other system part changes flag
output - loop stops when flag becomes 1
*/`})]}),n.jsx("div",{className:"hint",children:"volatile is common in embedded systems. It is not a replacement for thread safety."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Inline functions"}),n.jsx("p",{className:"p",children:"inline suggests the compiler to replace a function call with the function body to reduce call overhead. The compiler may ignore it. Use it for very small functions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

static inline int add(int a, int b) {
  return a + b;
}

int main() {
  printf("%d\\n", add(2, 3));
  return 0;
}

// output - 5`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Static variables in functions"}),n.jsx("p",{className:"p",children:"A static local variable keeps its value between function calls. It is initialized only once and lives for the entire program runtime."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
*/`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Memory alignment"}),n.jsx("p",{className:"p",children:"CPUs often read memory faster when data is aligned to certain boundaries. Compilers may insert padding inside structs to keep alignment, which can increase struct size."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - struct padding"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
*/`})]}),n.jsx("div",{className:"hint",children:"Padding is normal. It improves performance. In low level code, struct size matters, so alignment is important."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Undefined behavior"]}),n.jsx("p",{className:"p",children:"Undefined behavior means the C standard does not define what happens. The program might crash, work sometimes, or do something unpredictable. Compilers are allowed to make aggressive optimizations assuming undefined behavior never happens."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - reading uninitialized variable"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x;
  printf("%d\\n", x); // undefined behavior - x is uninitialized
  return 0;
}

/*
output - unpredictable garbage value
*/`})]}),n.jsx("div",{className:"hint",children:"Another common undefined behavior is accessing an array out of bounds."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Segmentation fault concept"]}),n.jsx("p",{className:"p",children:"A segmentation fault happens when your program tries to access memory it is not allowed to access. This often comes from invalid pointers, freed memory usage, or writing outside array bounds."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - dereferencing NULL"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int *p = NULL;
  *p = 10; // crash - invalid memory access
  printf("%d\\n", *p);
  return 0;
}

/*
output - program crashes (segmentation fault)
*/`})]}),n.jsx("div",{className:"hint",children:"Most segfaults are pointer mistakes. Use a debugger and print statements to locate where the invalid access happens."})]})]})]})},fx={Wrapper:Ne.section`
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
    `},hx=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(fx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(_i,{})}),n.jsx("span",{className:"title",children:"Data Structures using C"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Data structures store data in a way that makes operations like insert, delete, search, and traversal efficient. In C, most data structures are built using pointers and dynamic memory allocation."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(_i,{})}),"Linked list"]}),n.jsx("p",{className:"p",children:"A linked list is a sequence of nodes where each node stores data and a pointer to the next node. It is useful when you need dynamic size and frequent insertions or deletions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Node structure and simple insert at head"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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
}`})]}),n.jsx("div",{className:"hint",children:"Important - always free allocated nodes when done to avoid memory leaks."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Stack"]}),n.jsx("p",{className:"p",children:"A stack follows LIFO - Last In First Out. Common operations are push, pop, and peek. You can implement it using an array or a linked list."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Stack using array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]}),n.jsx("div",{className:"hint",children:"Stack is used in function calls, undo operations, and expression evaluation."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(qu,{})}),"Queue"]}),n.jsx("p",{className:"p",children:"A queue follows FIFO - First In First Out. Common operations are enqueue and dequeue. A circular queue is often used for fixed size array implementations."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Simple queue using array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]}),n.jsx("div",{className:"hint",children:"For real usage, prefer a circular queue to reuse space."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Zu,{})}),"Trees basics"]}),n.jsx("p",{className:"p",children:"A tree is a hierarchical data structure made of nodes. Each node can have children. The most common type is a binary tree where each node has up to two children - left and right."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Binary tree node and creation"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Implementation using pointers"}),n.jsx("p",{className:"p",children:"In C, pointers are the core tool behind dynamic data structures. A node usually stores data plus one or more pointers to other nodes. malloc allocates memory, and pointers connect nodes together."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Linked list - each node points to next"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Stack with linked list - push and pop at head"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Queue with linked list - enqueue at tail, dequeue at head"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Trees - each node points to children"]})]}),n.jsx("div",{className:"hint",children:"Rule - if you use malloc, you must plan where free will happen."})]})]})]})},mx={Wrapper:Ne.section`
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
    `},xx=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(mx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(_i,{})}),n.jsx("span",{className:"title",children:"C vs C++"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"C and C++ are closely related languages, but they follow different programming paradigms. C focuses on procedural programming, while C++ adds object oriented features on top of C."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(xn,{})}),"Key differences"]}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C supports procedural programming only."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ supports procedural and object oriented programming."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C does not support classes and objects."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ supports classes, inheritance, polymorphism, and encapsulation."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C uses printf and scanf for IO."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ uses cout and cin for IO."]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"C example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  printf("Hello from C\\n");
  return 0;
}

// output - Hello from C`})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"C++ example"]}),n.jsx("pre",{className:"code",children:`#include <iostream>
using namespace std;

int main() {
  cout << "Hello from C++" << endl;
  return 0;
}

// output - Hello from C++`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Procedural vs Object Oriented"]}),n.jsx("p",{className:"p",children:"Procedural programming focuses on functions and step by step instructions. Object oriented programming focuses on objects that combine data and behavior."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Procedural style in C"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

void greet() {
  printf("Hello\\n");
}

int main() {
  greet();
  return 0;
}

// output - Hello`})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Object oriented style in C++"]}),n.jsx("pre",{className:"code",children:`#include <iostream>
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

// output - Hello`})]}),n.jsx("div",{className:"hint",children:"C++ is often described as an extension of C, but modern C++ is much more powerful and feature rich than C."})]})]})]})},gx={Wrapper:Ne.section`
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
    `},vx=()=>{const[s,c]=Ee.useState(!1),l=()=>c(u=>!u);return n.jsxs(gx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Qe,{}):n.jsx(Ge,{})}),n.jsx("span",{className:"icon",children:n.jsx(Xa,{})}),n.jsx("span",{className:"title",children:"Best Practices"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"In C, small mistakes can become big bugs. Best practices help you write code that is readable, testable, and safer. The main idea is simple - control your memory, validate inputs, and keep your code organized."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gt,{})}),"Code structure"]}),n.jsx("p",{className:"p",children:"Keep each file focused. Split large programs into modules. Use meaningful function names and keep functions small. One function should do one job."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - simple project layout"]}),n.jsx("pre",{className:"code",children:`// src layout
// - src/main.c
// - src/math_utils.c
// - include/math_utils.h

// output - easier to read and maintain`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ju,{})}),"Header file separation"]}),n.jsx("p",{className:"p",children:"Put function declarations in headers and implementations in .c files. This keeps modules clean and reusable. Always use include guards to avoid multiple include problems."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - header and source separation"]}),n.jsx("pre",{className:"code",children:`// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif

// math_utils.c
#include "math_utils.h"

int add(int a, int b) {
  return a + b;
}

// output - clean module with proper guard`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(hn,{})}),"Defensive programming"]}),n.jsx("p",{className:"p",children:"Assume inputs can be wrong and memory allocation can fail. Check return values. Validate pointers before using them. Return early when something is invalid."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - check malloc and inputs"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Cm,{})}),"Avoiding buffer overflow"]}),n.jsx("p",{className:"p",children:"Buffer overflow happens when you write more data than a buffer can hold. This can crash your program and is also a major security issue. Prefer safer functions like fgets instead of gets. Always set size limits."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - unsafe vs safe input"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  char name[10];

  // unsafe - never use gets
  // gets(name);

  // safe - reads up to sizeof(name) - 1 chars
  fgets(name, sizeof(name), stdin);

  printf("%s", name);
  // output - whatever user typed (up to 9 chars + \\0)
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:'Tip - avoid scanf("%s", name) for long user input because it can overflow unless you provide a width limit.'})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Xa,{})}),"Secure coding basics"]}),n.jsx("p",{className:"p",children:"Secure C code is about preventing undefined behavior and validating everything. Main rules - initialize variables, check bounds, check return values, avoid dangerous functions, and free memory properly."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Initialize pointers to NULL"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Check bounds before writing to arrays"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Prefer snprintf over sprintf"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Use fgets for input instead of gets"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Free allocated memory and set pointer to NULL after free"]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(z,{})}),"Example - safe string formatting"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  char out[12];

  // safe - protects buffer size
  snprintf(out, sizeof(out), "%s", "hello");

  printf("%s\\n", out);
  // output - hello
  return 0;
}`})]})]})]})]})},yx=()=>n.jsxs(Ua.Wrapper,{children:[n.jsx(Ua.Header,{children:n.jsx(Bm,{})}),n.jsxs(Ua.Main,{children:[n.jsxs("div",{className:"contentWrapper",children:[n.jsx(Fm,{}),n.jsx(Dm,{}),n.jsx(Wm,{}),n.jsx($m,{}),n.jsx(Qm,{}),n.jsx(Ym,{}),n.jsx(Xm,{}),n.jsx(Zm,{}),n.jsx(ex,{}),n.jsx(tx,{}),n.jsx(ox,{}),n.jsx(sx,{}),n.jsx(lx,{}),n.jsx(dx,{}),n.jsx(px,{}),n.jsx(hx,{}),n.jsx(xx,{}),n.jsx(vx,{})]}),n.jsx("div",{className:"footerWrapper",children:n.jsx(Rm,{})})]})]});ah.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(yx,{})}));
