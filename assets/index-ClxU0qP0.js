(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const j of g)if(j.type==="childList")for(const C of j.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&u(C)}).observe(document,{childList:!0,subtree:!0});function l(g){const j={};return g.integrity&&(j.integrity=g.integrity),g.referrerPolicy&&(j.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?j.credentials="include":g.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function u(g){if(g.ep)return;g.ep=!0;const j=l(g);fetch(g.href,j)}})();function Zf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var La={exports:{}},Jn={},Ta={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function Jf(){if(Gd)return te;Gd=1;var s=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),C=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),F=Symbol.iterator;function M(m){return m===null||typeof m!="object"?null:(m=F&&m[F]||m["@@iterator"],typeof m=="function"?m:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oe=Object.assign,V={};function X(m,N,G){this.props=m,this.context=N,this.refs=V,this.updater=G||Y}X.prototype.isReactComponent={},X.prototype.setState=function(m,N){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,N,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function he(){}he.prototype=X.prototype;function ae(m,N,G){this.props=m,this.context=N,this.refs=V,this.updater=G||Y}var ie=ae.prototype=new he;ie.constructor=ae,oe(ie,X.prototype),ie.isPureReactComponent=!0;var ee=Array.isArray,ue=Object.prototype.hasOwnProperty,K={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function Te(m,N,G){var q,ne={},re=null,pe=null;if(N!=null)for(q in N.ref!==void 0&&(pe=N.ref),N.key!==void 0&&(re=""+N.key),N)ue.call(N,q)&&!W.hasOwnProperty(q)&&(ne[q]=N[q]);var se=arguments.length-2;if(se===1)ne.children=G;else if(1<se){for(var ce=Array(se),Fe=0;Fe<se;Fe++)ce[Fe]=arguments[Fe+2];ne.children=ce}if(m&&m.defaultProps)for(q in se=m.defaultProps,se)ne[q]===void 0&&(ne[q]=se[q]);return{$$typeof:s,type:m,key:re,ref:pe,props:ne,_owner:K.current}}function or(m,N){return{$$typeof:s,type:m.type,key:N,ref:m.ref,props:m.props,_owner:m._owner}}function Nr(m){return typeof m=="object"&&m!==null&&m.$$typeof===s}function Ar(m){var N={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return N[G]})}var ur=/\/+/g;function Ke(m,N){return typeof m=="object"&&m!==null&&m.key!=null?Ar(""+m.key):N.toString(36)}function ir(m,N,G,q,ne){var re=typeof m;(re==="undefined"||re==="boolean")&&(m=null);var pe=!1;if(m===null)pe=!0;else switch(re){case"string":case"number":pe=!0;break;case"object":switch(m.$$typeof){case s:case c:pe=!0}}if(pe)return pe=m,ne=ne(pe),m=q===""?"."+Ke(pe,0):q,ee(ne)?(G="",m!=null&&(G=m.replace(ur,"$&/")+"/"),ir(ne,N,G,"",function(Fe){return Fe})):ne!=null&&(Nr(ne)&&(ne=or(ne,G+(!ne.key||pe&&pe.key===ne.key?"":(""+ne.key).replace(ur,"$&/")+"/")+m)),N.push(ne)),1;if(pe=0,q=q===""?".":q+":",ee(m))for(var se=0;se<m.length;se++){re=m[se];var ce=q+Ke(re,se);pe+=ir(re,N,G,ce,ne)}else if(ce=M(m),typeof ce=="function")for(m=ce.call(m),se=0;!(re=m.next()).done;)re=re.value,ce=q+Ke(re,se++),pe+=ir(re,N,G,ce,ne);else if(re==="object")throw N=String(m),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return pe}function pr(m,N,G){if(m==null)return m;var q=[],ne=0;return ir(m,q,"","",function(re){return N.call(G,re,ne++)}),q}function He(m){if(m._status===-1){var N=m._result;N=N(),N.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=N)}if(m._status===1)return m._result.default;throw m._result}var ve={current:null},L={transition:null},A={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:L,ReactCurrentOwner:K};function T(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:pr,forEach:function(m,N,G){pr(m,function(){N.apply(this,arguments)},G)},count:function(m){var N=0;return pr(m,function(){N++}),N},toArray:function(m){return pr(m,function(N){return N})||[]},only:function(m){if(!Nr(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},te.Component=X,te.Fragment=l,te.Profiler=g,te.PureComponent=ae,te.StrictMode=u,te.Suspense=z,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,te.act=T,te.cloneElement=function(m,N,G){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var q=oe({},m.props),ne=m.key,re=m.ref,pe=m._owner;if(N!=null){if(N.ref!==void 0&&(re=N.ref,pe=K.current),N.key!==void 0&&(ne=""+N.key),m.type&&m.type.defaultProps)var se=m.type.defaultProps;for(ce in N)ue.call(N,ce)&&!W.hasOwnProperty(ce)&&(q[ce]=N[ce]===void 0&&se!==void 0?se[ce]:N[ce])}var ce=arguments.length-2;if(ce===1)q.children=G;else if(1<ce){se=Array(ce);for(var Fe=0;Fe<ce;Fe++)se[Fe]=arguments[Fe+2];q.children=se}return{$$typeof:s,type:m.type,key:ne,ref:re,props:q,_owner:pe}},te.createContext=function(m){return m={$$typeof:C,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:j,_context:m},m.Consumer=m},te.createElement=Te,te.createFactory=function(m){var N=Te.bind(null,m);return N.type=m,N},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:E,render:m}},te.isValidElement=Nr,te.lazy=function(m){return{$$typeof:$,_payload:{_status:-1,_result:m},_init:He}},te.memo=function(m,N){return{$$typeof:Q,type:m,compare:N===void 0?null:N}},te.startTransition=function(m){var N=L.transition;L.transition={};try{m()}finally{L.transition=N}},te.unstable_act=T,te.useCallback=function(m,N){return ve.current.useCallback(m,N)},te.useContext=function(m){return ve.current.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m){return ve.current.useDeferredValue(m)},te.useEffect=function(m,N){return ve.current.useEffect(m,N)},te.useId=function(){return ve.current.useId()},te.useImperativeHandle=function(m,N,G){return ve.current.useImperativeHandle(m,N,G)},te.useInsertionEffect=function(m,N){return ve.current.useInsertionEffect(m,N)},te.useLayoutEffect=function(m,N){return ve.current.useLayoutEffect(m,N)},te.useMemo=function(m,N){return ve.current.useMemo(m,N)},te.useReducer=function(m,N,G){return ve.current.useReducer(m,N,G)},te.useRef=function(m){return ve.current.useRef(m)},te.useState=function(m){return ve.current.useState(m)},te.useSyncExternalStore=function(m,N,G){return ve.current.useSyncExternalStore(m,N,G)},te.useTransition=function(){return ve.current.useTransition()},te.version="18.3.1",te}var Xd;function Xa(){return Xd||(Xd=1,Ta.exports=Jf()),Ta.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function eh(){if(qd)return Jn;qd=1;var s=Xa(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,g=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function C(E,z,Q){var $,F={},M=null,Y=null;Q!==void 0&&(M=""+Q),z.key!==void 0&&(M=""+z.key),z.ref!==void 0&&(Y=z.ref);for($ in z)u.call(z,$)&&!j.hasOwnProperty($)&&(F[$]=z[$]);if(E&&E.defaultProps)for($ in z=E.defaultProps,z)F[$]===void 0&&(F[$]=z[$]);return{$$typeof:c,type:E,key:M,ref:Y,props:F,_owner:g.current}}return Jn.Fragment=l,Jn.jsx=C,Jn.jsxs=C,Jn}var Zd;function rh(){return Zd||(Zd=1,La.exports=eh()),La.exports}var n=rh(),mi={},_a={exports:{}},tr={},Pa={exports:{}},Ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function th(){return Jd||(Jd=1,(function(s){function c(L,A){var T=L.length;L.push(A);e:for(;0<T;){var m=T-1>>>1,N=L[m];if(0<g(N,A))L[m]=A,L[T]=N,T=m;else break e}}function l(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var A=L[0],T=L.pop();if(T!==A){L[0]=T;e:for(var m=0,N=L.length,G=N>>>1;m<G;){var q=2*(m+1)-1,ne=L[q],re=q+1,pe=L[re];if(0>g(ne,T))re<N&&0>g(pe,ne)?(L[m]=pe,L[re]=T,m=re):(L[m]=ne,L[q]=T,m=q);else if(re<N&&0>g(pe,T))L[m]=pe,L[re]=T,m=re;else break e}}return A}function g(L,A){var T=L.sortIndex-A.sortIndex;return T!==0?T:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var C=Date,E=C.now();s.unstable_now=function(){return C.now()-E}}var z=[],Q=[],$=1,F=null,M=3,Y=!1,oe=!1,V=!1,X=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(L){for(var A=l(Q);A!==null;){if(A.callback===null)u(Q);else if(A.startTime<=L)u(Q),A.sortIndex=A.expirationTime,c(z,A);else break;A=l(Q)}}function ee(L){if(V=!1,ie(L),!oe)if(l(z)!==null)oe=!0,He(ue);else{var A=l(Q);A!==null&&ve(ee,A.startTime-L)}}function ue(L,A){oe=!1,V&&(V=!1,he(Te),Te=-1),Y=!0;var T=M;try{for(ie(A),F=l(z);F!==null&&(!(F.expirationTime>A)||L&&!Ar());){var m=F.callback;if(typeof m=="function"){F.callback=null,M=F.priorityLevel;var N=m(F.expirationTime<=A);A=s.unstable_now(),typeof N=="function"?F.callback=N:F===l(z)&&u(z),ie(A)}else u(z);F=l(z)}if(F!==null)var G=!0;else{var q=l(Q);q!==null&&ve(ee,q.startTime-A),G=!1}return G}finally{F=null,M=T,Y=!1}}var K=!1,W=null,Te=-1,or=5,Nr=-1;function Ar(){return!(s.unstable_now()-Nr<or)}function ur(){if(W!==null){var L=s.unstable_now();Nr=L;var A=!0;try{A=W(!0,L)}finally{A?Ke():(K=!1,W=null)}}else K=!1}var Ke;if(typeof ae=="function")Ke=function(){ae(ur)};else if(typeof MessageChannel!="undefined"){var ir=new MessageChannel,pr=ir.port2;ir.port1.onmessage=ur,Ke=function(){pr.postMessage(null)}}else Ke=function(){X(ur,0)};function He(L){W=L,K||(K=!0,Ke())}function ve(L,A){Te=X(function(){L(s.unstable_now())},A)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_continueExecution=function(){oe||Y||(oe=!0,He(ue))},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):or=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return M},s.unstable_getFirstCallbackNode=function(){return l(z)},s.unstable_next=function(L){switch(M){case 1:case 2:case 3:var A=3;break;default:A=M}var T=M;M=A;try{return L()}finally{M=T}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var T=M;M=L;try{return A()}finally{M=T}},s.unstable_scheduleCallback=function(L,A,T){var m=s.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?m+T:m):T=m,L){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=T+N,L={id:$++,callback:A,priorityLevel:L,startTime:T,expirationTime:N,sortIndex:-1},T>m?(L.sortIndex=T,c(Q,L),l(z)===null&&L===l(Q)&&(V?(he(Te),Te=-1):V=!0,ve(ee,T-m))):(L.sortIndex=N,c(z,L),oe||Y||(oe=!0,He(ue))),L},s.unstable_shouldYield=Ar,s.unstable_wrapCallback=function(L){var A=M;return function(){var T=M;M=A;try{return L.apply(this,arguments)}finally{M=T}}}})(Ba)),Ba}var eu;function nh(){return eu||(eu=1,Pa.exports=th()),Pa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function oh(){if(ru)return tr;ru=1;var s=Xa(),c=nh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,g={};function j(e,r){C(e,r),C(e+"Capture",r)}function C(e,r){for(g[e]=r,e=0;e<r.length;e++)u.add(r[e])}var E=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),z=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},F={};function M(e){return z.call(F,e)?!0:z.call($,e)?!1:Q.test(e)?F[e]=!0:($[e]=!0,!1)}function Y(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oe(e,r,t,o){if(r===null||typeof r=="undefined"||Y(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function V(e,r,t,o,i,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];X[r]=new V(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ae(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(he,ae);X[r]=new V(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(he,ae);X[r]=new V(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(he,ae);X[r]=new V(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,r,t,o){var i=X.hasOwnProperty(r)?X[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(oe(r,t,i,o)&&(t=null),o||i===null?M(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(r=i.attributeName,o=i.attributeNamespace,t===null?e.removeAttribute(r):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var ee=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),K=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),Te=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),Nr=Symbol.for("react.provider"),Ar=Symbol.for("react.context"),ur=Symbol.for("react.forward_ref"),Ke=Symbol.for("react.suspense"),ir=Symbol.for("react.suspense_list"),pr=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),L=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,m;function N(e){if(m===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);m=r&&r[1]||""}return`
`+m+e}var G=!1;function q(e,r){if(!e||G)return"";G=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(y){var o=y}Reflect.construct(e,[],r)}else{try{r.call()}catch(y){o=y}e.call(r.prototype)}else{try{throw Error()}catch(y){o=y}e()}}catch(y){if(y&&o&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),a=o.stack.split(`
`),d=i.length-1,p=a.length-1;1<=d&&0<=p&&i[d]!==a[p];)p--;for(;1<=d&&0<=p;d--,p--)if(i[d]!==a[p]){if(d!==1||p!==1)do if(d--,p--,0>p||i[d]!==a[p]){var f=`
`+i[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=p);break}}}finally{G=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?N(e):""}function ne(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case K:return"Portal";case or:return"Profiler";case Te:return"StrictMode";case Ke:return"Suspense";case ir:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ar:return(e.displayName||"Context")+".Consumer";case Nr:return(e._context.displayName||"Context")+".Provider";case ur:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pr:return r=e.displayName||null,r!==null?r:re(e.type)||"Memo";case He:r=e._payload,e=e._init;try{return re(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(r);case 8:return r===Te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Fe(e){var r=ce(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Fr(e){e._valueTracker||(e._valueTracker=Fe(e))}function wr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=ce(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function io(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ai(e,r){var t=r.checked;return T({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function tl(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=se(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function nl(e,r){r=r.checked,r!=null&&ie(e,"checked",r,!1)}function Fi(e,r){nl(e,r);var t=se(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Mi(e,r.type,t):r.hasOwnProperty("defaultValue")&&Mi(e,r.type,se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ol(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Mi(e,r,t){(r!=="number"||io(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var hn=Array.isArray;function _t(e,r,t,o){if(e=e.options,r){r={};for(var i=0;i<t.length;i++)r["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=r.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&o&&(e[t].defaultSelected=!0)}else{for(t=""+se(t),r=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Di(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return T({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function il(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(l(92));if(hn(t)){if(1<t.length)throw Error(l(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:se(t)}}function sl(e,r){var t=se(r.value),o=se(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function al(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function ll(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ui(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?ll(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,cl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function mn(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){rp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),xn[r]=xn[e]})});function dl(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||xn.hasOwnProperty(e)&&xn[e]?(""+r).trim():r+"px"}function ul(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,i=dl(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,i):e[t]=i}}var tp=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(e,r){if(r){if(tp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Hi(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Vi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qi=null,Pt=null,Bt=null;function pl(e){if(e=Fn(e)){if(typeof Qi!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Lo(r),Qi(e.stateNode,e.type,r))}}function fl(e){Pt?Bt?Bt.push(e):Bt=[e]:Pt=e}function hl(){if(Pt){var e=Pt,r=Bt;if(Bt=Pt=null,pl(e),r)for(e=0;e<r.length;e++)pl(r[e])}}function ml(e,r){return e(r)}function xl(){}var Yi=!1;function gl(e,r,t){if(Yi)return e(r,t);Yi=!0;try{return ml(e,r,t)}finally{Yi=!1,(Pt!==null||Bt!==null)&&(xl(),hl())}}function gn(e,r){var t=e.stateNode;if(t===null)return null;var o=Lo(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,r,typeof t));return t}var Ki=!1;if(E)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Ki=!1}function np(e,r,t,o,i,a,d,p,f){var y=Array.prototype.slice.call(arguments,3);try{r.apply(t,y)}catch(k){this.onError(k)}}var yn=!1,ao=null,lo=!1,Gi=null,op={onError:function(e){yn=!0,ao=e}};function ip(e,r,t,o,i,a,d,p,f){yn=!1,ao=null,np.apply(op,arguments)}function sp(e,r,t,o,i,a,d,p,f){if(ip.apply(this,arguments),yn){if(yn){var y=ao;yn=!1,ao=null}else throw Error(l(198));lo||(lo=!0,Gi=y)}}function xt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function vl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function yl(e){if(xt(e)!==e)throw Error(l(188))}function ap(e){var r=e.alternate;if(!r){if(r=xt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var t=e,o=r;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){t=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return yl(i),e;if(a===o)return yl(i),r;a=a.sibling}throw Error(l(188))}if(t.return!==o.return)t=i,o=a;else{for(var d=!1,p=i.child;p;){if(p===t){d=!0,t=i,o=a;break}if(p===o){d=!0,o=i,t=a;break}p=p.sibling}if(!d){for(p=a.child;p;){if(p===t){d=!0,t=a,o=i;break}if(p===o){d=!0,o=a,t=i;break}p=p.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==o)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:r}function jl(e){return e=ap(e),e!==null?Nl(e):null}function Nl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Nl(e);if(r!==null)return r;e=e.sibling}return null}var wl=c.unstable_scheduleCallback,kl=c.unstable_cancelCallback,lp=c.unstable_shouldYield,cp=c.unstable_requestPaint,Ee=c.unstable_now,dp=c.unstable_getCurrentPriorityLevel,Xi=c.unstable_ImmediatePriority,bl=c.unstable_UserBlockingPriority,co=c.unstable_NormalPriority,up=c.unstable_LowPriority,Sl=c.unstable_IdlePriority,uo=null,Tr=null;function pp(e){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:mp,fp=Math.log,hp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(fp(e)/hp|0)|0}var po=64,fo=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,d=t&268435455;if(d!==0){var p=d&~i;p!==0?o=jn(p):(a&=d,a!==0&&(o=jn(a)))}else d=t&~i,d!==0?o=jn(d):a!==0&&(o=jn(a));if(o===0)return 0;if(r!==0&&r!==o&&(r&i)===0&&(i=o&-o,a=r&-r,i>=a||i===16&&(a&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-kr(r),i=1<<t,o|=e[t],r&=~i;return o}function xp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gp(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-kr(a),p=1<<d,f=i[d];f===-1?((p&t)===0||(p&o)!==0)&&(i[d]=xp(p,r)):f<=r&&(e.expiredLanes|=p),a&=~p}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cl(){var e=po;return po<<=1,(po&4194240)===0&&(po=64),e}function Zi(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Nn(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-kr(r),e[r]=t}function vp(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-kr(t),a=1<<i;r[i]=0,o[i]=-1,e[i]=-1,t&=~a}}function Ji(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-kr(t),i=1<<o;i&r|e[o]&r&&(e[o]|=r),t&=~i}}var xe=0;function El(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var zl,es,Il,Ll,Tl,rs=!1,mo=[],Gr=null,Xr=null,qr=null,wn=new Map,kn=new Map,Zr=[],yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _l(e,r){switch(e){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":wn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(r.pointerId)}}function bn(e,r,t,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},r!==null&&(r=Fn(r),r!==null&&es(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function jp(e,r,t,o,i){switch(r){case"focusin":return Gr=bn(Gr,e,r,t,o,i),!0;case"dragenter":return Xr=bn(Xr,e,r,t,o,i),!0;case"mouseover":return qr=bn(qr,e,r,t,o,i),!0;case"pointerover":var a=i.pointerId;return wn.set(a,bn(wn.get(a)||null,e,r,t,o,i)),!0;case"gotpointercapture":return a=i.pointerId,kn.set(a,bn(kn.get(a)||null,e,r,t,o,i)),!0}return!1}function Pl(e){var r=gt(e.target);if(r!==null){var t=xt(r);if(t!==null){if(r=t.tag,r===13){if(r=vl(t),r!==null){e.blockedOn=r,Tl(e.priority,function(){Il(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=ns(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);$i=o,t.target.dispatchEvent(o),$i=null}else return r=Fn(t),r!==null&&es(r),e.blockedOn=t,!1;r.shift()}return!0}function Bl(e,r,t){xo(e)&&t.delete(r)}function Np(){rs=!1,Gr!==null&&xo(Gr)&&(Gr=null),Xr!==null&&xo(Xr)&&(Xr=null),qr!==null&&xo(qr)&&(qr=null),wn.forEach(Bl),kn.forEach(Bl)}function Sn(e,r){e.blockedOn===r&&(e.blockedOn=null,rs||(rs=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Np)))}function Cn(e){function r(i){return Sn(i,e)}if(0<mo.length){Sn(mo[0],e);for(var t=1;t<mo.length;t++){var o=mo[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Gr!==null&&Sn(Gr,e),Xr!==null&&Sn(Xr,e),qr!==null&&Sn(qr,e),wn.forEach(r),kn.forEach(r),t=0;t<Zr.length;t++)o=Zr[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<Zr.length&&(t=Zr[0],t.blockedOn===null);)Pl(t),t.blockedOn===null&&Zr.shift()}var Ot=ee.ReactCurrentBatchConfig,go=!0;function wp(e,r,t,o){var i=xe,a=Ot.transition;Ot.transition=null;try{xe=1,ts(e,r,t,o)}finally{xe=i,Ot.transition=a}}function kp(e,r,t,o){var i=xe,a=Ot.transition;Ot.transition=null;try{xe=4,ts(e,r,t,o)}finally{xe=i,Ot.transition=a}}function ts(e,r,t,o){if(go){var i=ns(e,r,t,o);if(i===null)js(e,r,o,vo,t),_l(e,o);else if(jp(i,e,r,t,o))o.stopPropagation();else if(_l(e,o),r&4&&-1<yp.indexOf(e)){for(;i!==null;){var a=Fn(i);if(a!==null&&zl(a),a=ns(e,r,t,o),a===null&&js(e,r,o,vo,t),a===i)break;i=a}i!==null&&o.stopPropagation()}else js(e,r,o,null,t)}}var vo=null;function ns(e,r,t,o){if(vo=null,e=Vi(o),e=gt(e),e!==null)if(r=xt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=vl(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return vo=e,null}function Ol(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dp()){case Xi:return 1;case bl:return 4;case co:case up:return 16;case Sl:return 536870912;default:return 16}default:return 16}}var Jr=null,os=null,yo=null;function Rl(){if(yo)return yo;var e,r=os,t=r.length,o,i="value"in Jr?Jr.value:Jr.textContent,a=i.length;for(e=0;e<t&&r[e]===i[e];e++);var d=t-e;for(o=1;o<=d&&r[t-o]===i[a-o];o++);return yo=i.slice(e,1<o?1-o:void 0)}function jo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function Al(){return!1}function sr(e){function r(t,o,i,a,d){this._reactName=t,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(t=e[p],this[p]=t?t(a):a[p]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?No:Al,this.isPropagationStopped=Al,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),r}var Rt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=sr(Rt),En=T({},Rt,{view:0,detail:0}),bp=sr(En),ss,as,zn,wo=T({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(ss=e.screenX-zn.screenX,as=e.screenY-zn.screenY):as=ss=0,zn=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:as}}),Fl=sr(wo),Sp=T({},wo,{dataTransfer:0}),Cp=sr(Sp),Ep=T({},En,{relatedTarget:0}),ls=sr(Ep),zp=T({},Rt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ip=sr(zp),Lp=T({},Rt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=sr(Lp),_p=T({},Rt,{data:0}),Ml=sr(_p),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Op[e])?!!r[e]:!1}function cs(){return Rp}var Ap=T({},En,{key:function(e){if(e.key){var r=Pp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fp=sr(Ap),Mp=T({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dl=sr(Mp),Dp=T({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),Up=sr(Dp),Wp=T({},Rt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hp=sr(Wp),$p=T({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vp=sr($p),Qp=[9,13,27,32],ds=E&&"CompositionEvent"in window,In=null;E&&"documentMode"in document&&(In=document.documentMode);var Yp=E&&"TextEvent"in window&&!In,Ul=E&&(!ds||In&&8<In&&11>=In),Wl=" ",Hl=!1;function $l(e,r){switch(e){case"keyup":return Qp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Kp(e,r){switch(e){case"compositionend":return Vl(r);case"keypress":return r.which!==32?null:(Hl=!0,Wl);case"textInput":return e=r.data,e===Wl&&Hl?null:e;default:return null}}function Gp(e,r){if(At)return e==="compositionend"||!ds&&$l(e,r)?(e=Rl(),yo=os=Jr=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ul&&r.locale!=="ko"?null:r.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ql(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Xp[e.type]:r==="textarea"}function Yl(e,r,t,o){fl(o),r=Eo(r,"onChange"),0<r.length&&(t=new is("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var Ln=null,Tn=null;function qp(e){uc(e,0)}function ko(e){var r=Wt(e);if(wr(r))return e}function Zp(e,r){if(e==="change")return r}var Kl=!1;if(E){var us;if(E){var ps="oninput"in document;if(!ps){var Gl=document.createElement("div");Gl.setAttribute("oninput","return;"),ps=typeof Gl.oninput=="function"}us=ps}else us=!1;Kl=us&&(!document.documentMode||9<document.documentMode)}function Xl(){Ln&&(Ln.detachEvent("onpropertychange",ql),Tn=Ln=null)}function ql(e){if(e.propertyName==="value"&&ko(Tn)){var r=[];Yl(r,Tn,e,Vi(e)),gl(qp,r)}}function Jp(e,r,t){e==="focusin"?(Xl(),Ln=r,Tn=t,Ln.attachEvent("onpropertychange",ql)):e==="focusout"&&Xl()}function ef(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Tn)}function rf(e,r){if(e==="click")return ko(r)}function tf(e,r){if(e==="input"||e==="change")return ko(r)}function nf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var br=typeof Object.is=="function"?Object.is:nf;function _n(e,r){if(br(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var i=t[o];if(!z.call(r,i)||!br(e[i],r[i]))return!1}return!0}function Zl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jl(e,r){var t=Zl(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Zl(t)}}function ec(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ec(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function rc(){for(var e=window,r=io();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=io(e.document)}return r}function fs(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function of(e){var r=rc(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&ec(t.ownerDocument.documentElement,t)){if(o!==null&&fs(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=Jl(t,a);var d=Jl(t,o);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sf=E&&"documentMode"in document&&11>=document.documentMode,Ft=null,hs=null,Pn=null,ms=!1;function tc(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ms||Ft==null||Ft!==io(o)||(o=Ft,"selectionStart"in o&&fs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Pn&&_n(Pn,o)||(Pn=o,o=Eo(hs,"onSelect"),0<o.length&&(r=new is("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Ft)))}function bo(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var Mt={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},xs={},nc={};E&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete Mt.animationend.animation,delete Mt.animationiteration.animation,delete Mt.animationstart.animation),"TransitionEvent"in window||delete Mt.transitionend.transition);function So(e){if(xs[e])return xs[e];if(!Mt[e])return e;var r=Mt[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in nc)return xs[e]=r[t];return e}var oc=So("animationend"),ic=So("animationiteration"),sc=So("animationstart"),ac=So("transitionend"),lc=new Map,cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function et(e,r){lc.set(e,r),j(r,[e])}for(var gs=0;gs<cc.length;gs++){var vs=cc[gs],af=vs.toLowerCase(),lf=vs[0].toUpperCase()+vs.slice(1);et(af,"on"+lf)}et(oc,"onAnimationEnd"),et(ic,"onAnimationIteration"),et(sc,"onAnimationStart"),et("dblclick","onDoubleClick"),et("focusin","onFocus"),et("focusout","onBlur"),et(ac,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function dc(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,sp(o,r,void 0,e),e.currentTarget=null}function uc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],i=o.event;o=o.listeners;e:{var a=void 0;if(r)for(var d=o.length-1;0<=d;d--){var p=o[d],f=p.instance,y=p.currentTarget;if(p=p.listener,f!==a&&i.isPropagationStopped())break e;dc(i,p,y),a=f}else for(d=0;d<o.length;d++){if(p=o[d],f=p.instance,y=p.currentTarget,p=p.listener,f!==a&&i.isPropagationStopped())break e;dc(i,p,y),a=f}}}if(lo)throw e=Gi,lo=!1,Gi=null,e}function je(e,r){var t=r[Cs];t===void 0&&(t=r[Cs]=new Set);var o=e+"__bubble";t.has(o)||(pc(r,e,2,!1),t.add(o))}function ys(e,r,t){var o=0;r&&(o|=4),pc(t,e,o,r)}var Co="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[Co]){e[Co]=!0,u.forEach(function(t){t!=="selectionchange"&&(cf.has(t)||ys(t,!1,e),ys(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Co]||(r[Co]=!0,ys("selectionchange",!1,r))}}function pc(e,r,t,o){switch(Ol(r)){case 1:var i=wp;break;case 4:i=kp;break;default:i=ts}t=i.bind(null,r,t,e),i=void 0,!Ki||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,t,{capture:!0,passive:i}):e.addEventListener(r,t,!0):i!==void 0?e.addEventListener(r,t,{passive:i}):e.addEventListener(r,t,!1)}function js(e,r,t,o,i){var a=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var p=o.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(d===4)for(d=o.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;d=d.return}for(;p!==null;){if(d=gt(p),d===null)return;if(f=d.tag,f===5||f===6){o=a=d;continue e}p=p.parentNode}}o=o.return}gl(function(){var y=a,k=Vi(t),b=[];e:{var w=lc.get(e);if(w!==void 0){var _=is,B=e;switch(e){case"keypress":if(jo(t)===0)break e;case"keydown":case"keyup":_=Fp;break;case"focusin":B="focus",_=ls;break;case"focusout":B="blur",_=ls;break;case"beforeblur":case"afterblur":_=ls;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Fl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Up;break;case oc:case ic:case sc:_=Ip;break;case ac:_=Hp;break;case"scroll":_=bp;break;case"wheel":_=Vp;break;case"copy":case"cut":case"paste":_=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Dl}var O=(r&4)!==0,ze=!O&&e==="scroll",x=O?w!==null?w+"Capture":null:w;O=[];for(var h=y,v;h!==null;){v=h;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,x!==null&&(S=gn(h,x),S!=null&&O.push(Rn(h,S,v)))),ze)break;h=h.return}0<O.length&&(w=new _(w,B,null,t,k),b.push({event:w,listeners:O}))}}if((r&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",w&&t!==$i&&(B=t.relatedTarget||t.fromElement)&&(gt(B)||B[Mr]))break e;if((_||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,_?(B=t.relatedTarget||t.toElement,_=y,B=B?gt(B):null,B!==null&&(ze=xt(B),B!==ze||B.tag!==5&&B.tag!==6)&&(B=null)):(_=null,B=y),_!==B)){if(O=Fl,S="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(O=Dl,S="onPointerLeave",x="onPointerEnter",h="pointer"),ze=_==null?w:Wt(_),v=B==null?w:Wt(B),w=new O(S,h+"leave",_,t,k),w.target=ze,w.relatedTarget=v,S=null,gt(k)===y&&(O=new O(x,h+"enter",B,t,k),O.target=v,O.relatedTarget=ze,S=O),ze=S,_&&B)r:{for(O=_,x=B,h=0,v=O;v;v=Dt(v))h++;for(v=0,S=x;S;S=Dt(S))v++;for(;0<h-v;)O=Dt(O),h--;for(;0<v-h;)x=Dt(x),v--;for(;h--;){if(O===x||x!==null&&O===x.alternate)break r;O=Dt(O),x=Dt(x)}O=null}else O=null;_!==null&&fc(b,w,_,O,!1),B!==null&&ze!==null&&fc(b,ze,B,O,!0)}}e:{if(w=y?Wt(y):window,_=w.nodeName&&w.nodeName.toLowerCase(),_==="select"||_==="input"&&w.type==="file")var R=Zp;else if(Ql(w))if(Kl)R=tf;else{R=ef;var D=Jp}else(_=w.nodeName)&&_.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(R=rf);if(R&&(R=R(e,y))){Yl(b,R,t,k);break e}D&&D(e,w,y),e==="focusout"&&(D=w._wrapperState)&&D.controlled&&w.type==="number"&&Mi(w,"number",w.value)}switch(D=y?Wt(y):window,e){case"focusin":(Ql(D)||D.contentEditable==="true")&&(Ft=D,hs=y,Pn=null);break;case"focusout":Pn=hs=Ft=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,tc(b,t,k);break;case"selectionchange":if(sf)break;case"keydown":case"keyup":tc(b,t,k)}var U;if(ds)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else At?$l(e,t)&&(H="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(H="onCompositionStart");H&&(Ul&&t.locale!=="ko"&&(At||H!=="onCompositionStart"?H==="onCompositionEnd"&&At&&(U=Rl()):(Jr=k,os="value"in Jr?Jr.value:Jr.textContent,At=!0)),D=Eo(y,H),0<D.length&&(H=new Ml(H,e,null,t,k),b.push({event:H,listeners:D}),U?H.data=U:(U=Vl(t),U!==null&&(H.data=U)))),(U=Yp?Kp(e,t):Gp(e,t))&&(y=Eo(y,"onBeforeInput"),0<y.length&&(k=new Ml("onBeforeInput","beforeinput",null,t,k),b.push({event:k,listeners:y}),k.data=U))}uc(b,r)})}function Rn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Eo(e,r){for(var t=r+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=gn(e,t),a!=null&&o.unshift(Rn(e,a,i)),a=gn(e,r),a!=null&&o.push(Rn(e,a,i))),e=e.return}return o}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fc(e,r,t,o,i){for(var a=r._reactName,d=[];t!==null&&t!==o;){var p=t,f=p.alternate,y=p.stateNode;if(f!==null&&f===o)break;p.tag===5&&y!==null&&(p=y,i?(f=gn(t,a),f!=null&&d.unshift(Rn(t,f,p))):i||(f=gn(t,a),f!=null&&d.push(Rn(t,f,p)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var df=/\r\n?/g,uf=/\u0000|\uFFFD/g;function hc(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(uf,"")}function zo(e,r,t){if(r=hc(r),hc(e)!==r&&t)throw Error(l(425))}function Io(){}var Ns=null,ws=null;function ks(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var bs=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,mc=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof mc!="undefined"?function(e){return mc.resolve(null).then(e).catch(hf)}:bs;function hf(e){setTimeout(function(){throw e})}function Ss(e,r){var t=r,o=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(o===0){e.removeChild(i),Cn(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=i}while(t);Cn(r)}function rt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function xc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Ut=Math.random().toString(36).slice(2),_r="__reactFiber$"+Ut,An="__reactProps$"+Ut,Mr="__reactContainer$"+Ut,Cs="__reactEvents$"+Ut,mf="__reactListeners$"+Ut,xf="__reactHandles$"+Ut;function gt(e){var r=e[_r];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Mr]||t[_r]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=xc(e);e!==null;){if(t=e[_r])return t;e=xc(e)}return r}e=t,t=e.parentNode}return null}function Fn(e){return e=e[_r]||e[Mr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Lo(e){return e[An]||null}var Es=[],Ht=-1;function tt(e){return{current:e}}function Ne(e){0>Ht||(e.current=Es[Ht],Es[Ht]=null,Ht--)}function ye(e,r){Ht++,Es[Ht]=e.current,e.current=r}var nt={},$e=tt(nt),qe=tt(!1),vt=nt;function $t(e,r){var t=e.type.contextTypes;if(!t)return nt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=r[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function To(){Ne(qe),Ne($e)}function gc(e,r,t){if($e.current!==nt)throw Error(l(168));ye($e,r),ye(qe,t)}function vc(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(l(108,pe(e)||"Unknown",i));return T({},t,o)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nt,vt=$e.current,ye($e,e),ye(qe,qe.current),!0}function yc(e,r,t){var o=e.stateNode;if(!o)throw Error(l(169));t?(e=vc(e,r,vt),o.__reactInternalMemoizedMergedChildContext=e,Ne(qe),Ne($e),ye($e,e)):Ne(qe),ye(qe,t)}var Dr=null,Po=!1,zs=!1;function jc(e){Dr===null?Dr=[e]:Dr.push(e)}function gf(e){Po=!0,jc(e)}function ot(){if(!zs&&Dr!==null){zs=!0;var e=0,r=xe;try{var t=Dr;for(xe=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Dr=null,Po=!1}catch(i){throw Dr!==null&&(Dr=Dr.slice(e+1)),wl(Xi,ot),i}finally{xe=r,zs=!1}}return null}var Vt=[],Qt=0,Bo=null,Oo=0,fr=[],hr=0,yt=null,Ur=1,Wr="";function jt(e,r){Vt[Qt++]=Oo,Vt[Qt++]=Bo,Bo=e,Oo=r}function Nc(e,r,t){fr[hr++]=Ur,fr[hr++]=Wr,fr[hr++]=yt,yt=e;var o=Ur;e=Wr;var i=32-kr(o)-1;o&=~(1<<i),t+=1;var a=32-kr(r)+i;if(30<a){var d=i-i%5;a=(o&(1<<d)-1).toString(32),o>>=d,i-=d,Ur=1<<32-kr(r)+i|t<<i|o,Wr=a+e}else Ur=1<<a|t<<i|o,Wr=e}function Is(e){e.return!==null&&(jt(e,1),Nc(e,1,0))}function Ls(e){for(;e===Bo;)Bo=Vt[--Qt],Vt[Qt]=null,Oo=Vt[--Qt],Vt[Qt]=null;for(;e===yt;)yt=fr[--hr],fr[hr]=null,Wr=fr[--hr],fr[hr]=null,Ur=fr[--hr],fr[hr]=null}var ar=null,lr=null,ke=!1,Sr=null;function wc(e,r){var t=vr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function kc(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ar=e,lr=rt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ar=e,lr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=yt!==null?{id:Ur,overflow:Wr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=vr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ar=e,lr=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _s(e){if(ke){var r=lr;if(r){var t=r;if(!kc(e,r)){if(Ts(e))throw Error(l(418));r=rt(t.nextSibling);var o=ar;r&&kc(e,r)?wc(o,t):(e.flags=e.flags&-4097|2,ke=!1,ar=e)}}else{if(Ts(e))throw Error(l(418));e.flags=e.flags&-4097|2,ke=!1,ar=e}}}function bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ar=e}function Ro(e){if(e!==ar)return!1;if(!ke)return bc(e),ke=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ks(e.type,e.memoizedProps)),r&&(r=lr)){if(Ts(e))throw Sc(),Error(l(418));for(;r;)wc(e,r),r=rt(r.nextSibling)}if(bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){lr=rt(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}lr=null}}else lr=ar?rt(e.stateNode.nextSibling):null;return!0}function Sc(){for(var e=lr;e;)e=rt(e.nextSibling)}function Yt(){lr=ar=null,ke=!1}function Ps(e){Sr===null?Sr=[e]:Sr.push(e)}var vf=ee.ReactCurrentBatchConfig;function Mn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var o=t.stateNode}if(!o)throw Error(l(147,e));var i=o,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var p=i.refs;d===null?delete p[a]:p[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Ao(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Cc(e){var r=e._init;return r(e._payload)}function Ec(e){function r(x,h){if(e){var v=x.deletions;v===null?(x.deletions=[h],x.flags|=16):v.push(h)}}function t(x,h){if(!e)return null;for(;h!==null;)r(x,h),h=h.sibling;return null}function o(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=pt(x,h),x.index=0,x.sibling=null,x}function a(x,h,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<h?(x.flags|=2,h):v):(x.flags|=2,h)):(x.flags|=1048576,h)}function d(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,h,v,S){return h===null||h.tag!==6?(h=ba(v,x.mode,S),h.return=x,h):(h=i(h,v),h.return=x,h)}function f(x,h,v,S){var R=v.type;return R===W?k(x,h,v.props.children,S,v.key):h!==null&&(h.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===He&&Cc(R)===h.type)?(S=i(h,v.props),S.ref=Mn(x,h,v),S.return=x,S):(S=ai(v.type,v.key,v.props,null,x.mode,S),S.ref=Mn(x,h,v),S.return=x,S)}function y(x,h,v,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Sa(v,x.mode,S),h.return=x,h):(h=i(h,v.children||[]),h.return=x,h)}function k(x,h,v,S,R){return h===null||h.tag!==7?(h=zt(v,x.mode,S,R),h.return=x,h):(h=i(h,v),h.return=x,h)}function b(x,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ba(""+h,x.mode,v),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ue:return v=ai(h.type,h.key,h.props,null,x.mode,v),v.ref=Mn(x,null,h),v.return=x,v;case K:return h=Sa(h,x.mode,v),h.return=x,h;case He:var S=h._init;return b(x,S(h._payload),v)}if(hn(h)||A(h))return h=zt(h,x.mode,v,null),h.return=x,h;Ao(x,h)}return null}function w(x,h,v,S){var R=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:p(x,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ue:return v.key===R?f(x,h,v,S):null;case K:return v.key===R?y(x,h,v,S):null;case He:return R=v._init,w(x,h,R(v._payload),S)}if(hn(v)||A(v))return R!==null?null:k(x,h,v,S,null);Ao(x,v)}return null}function _(x,h,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(v)||null,p(h,x,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ue:return x=x.get(S.key===null?v:S.key)||null,f(h,x,S,R);case K:return x=x.get(S.key===null?v:S.key)||null,y(h,x,S,R);case He:var D=S._init;return _(x,h,v,D(S._payload),R)}if(hn(S)||A(S))return x=x.get(v)||null,k(h,x,S,R,null);Ao(h,S)}return null}function B(x,h,v,S){for(var R=null,D=null,U=h,H=h=0,Re=null;U!==null&&H<v.length;H++){U.index>H?(Re=U,U=null):Re=U.sibling;var de=w(x,U,v[H],S);if(de===null){U===null&&(U=Re);break}e&&U&&de.alternate===null&&r(x,U),h=a(de,h,H),D===null?R=de:D.sibling=de,D=de,U=Re}if(H===v.length)return t(x,U),ke&&jt(x,H),R;if(U===null){for(;H<v.length;H++)U=b(x,v[H],S),U!==null&&(h=a(U,h,H),D===null?R=U:D.sibling=U,D=U);return ke&&jt(x,H),R}for(U=o(x,U);H<v.length;H++)Re=_(U,x,H,v[H],S),Re!==null&&(e&&Re.alternate!==null&&U.delete(Re.key===null?H:Re.key),h=a(Re,h,H),D===null?R=Re:D.sibling=Re,D=Re);return e&&U.forEach(function(ft){return r(x,ft)}),ke&&jt(x,H),R}function O(x,h,v,S){var R=A(v);if(typeof R!="function")throw Error(l(150));if(v=R.call(v),v==null)throw Error(l(151));for(var D=R=null,U=h,H=h=0,Re=null,de=v.next();U!==null&&!de.done;H++,de=v.next()){U.index>H?(Re=U,U=null):Re=U.sibling;var ft=w(x,U,de.value,S);if(ft===null){U===null&&(U=Re);break}e&&U&&ft.alternate===null&&r(x,U),h=a(ft,h,H),D===null?R=ft:D.sibling=ft,D=ft,U=Re}if(de.done)return t(x,U),ke&&jt(x,H),R;if(U===null){for(;!de.done;H++,de=v.next())de=b(x,de.value,S),de!==null&&(h=a(de,h,H),D===null?R=de:D.sibling=de,D=de);return ke&&jt(x,H),R}for(U=o(x,U);!de.done;H++,de=v.next())de=_(U,x,H,de.value,S),de!==null&&(e&&de.alternate!==null&&U.delete(de.key===null?H:de.key),h=a(de,h,H),D===null?R=de:D.sibling=de,D=de);return e&&U.forEach(function(qf){return r(x,qf)}),ke&&jt(x,H),R}function ze(x,h,v,S){if(typeof v=="object"&&v!==null&&v.type===W&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ue:e:{for(var R=v.key,D=h;D!==null;){if(D.key===R){if(R=v.type,R===W){if(D.tag===7){t(x,D.sibling),h=i(D,v.props.children),h.return=x,x=h;break e}}else if(D.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===He&&Cc(R)===D.type){t(x,D.sibling),h=i(D,v.props),h.ref=Mn(x,D,v),h.return=x,x=h;break e}t(x,D);break}else r(x,D);D=D.sibling}v.type===W?(h=zt(v.props.children,x.mode,S,v.key),h.return=x,x=h):(S=ai(v.type,v.key,v.props,null,x.mode,S),S.ref=Mn(x,h,v),S.return=x,x=S)}return d(x);case K:e:{for(D=v.key;h!==null;){if(h.key===D)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){t(x,h.sibling),h=i(h,v.children||[]),h.return=x,x=h;break e}else{t(x,h);break}else r(x,h);h=h.sibling}h=Sa(v,x.mode,S),h.return=x,x=h}return d(x);case He:return D=v._init,ze(x,h,D(v._payload),S)}if(hn(v))return B(x,h,v,S);if(A(v))return O(x,h,v,S);Ao(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(t(x,h.sibling),h=i(h,v),h.return=x,x=h):(t(x,h),h=ba(v,x.mode,S),h.return=x,x=h),d(x)):t(x,h)}return ze}var Kt=Ec(!0),zc=Ec(!1),Fo=tt(null),Mo=null,Gt=null,Bs=null;function Os(){Bs=Gt=Mo=null}function Rs(e){var r=Fo.current;Ne(Fo),e._currentValue=r}function As(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function Xt(e,r){Mo=e,Bs=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Je=!0),e.firstContext=null)}function mr(e){var r=e._currentValue;if(Bs!==e)if(e={context:e,memoizedValue:r,next:null},Gt===null){if(Mo===null)throw Error(l(308));Gt=e,Mo.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return r}var Nt=null;function Fs(e){Nt===null?Nt=[e]:Nt.push(e)}function Ic(e,r,t,o){var i=r.interleaved;return i===null?(t.next=t,Fs(r)):(t.next=i.next,i.next=t),r.interleaved=t,Hr(e,o)}function Hr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var it=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function st(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(le&2)!==0){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,Hr(e,t)}return i=o.interleaved,i===null?(r.next=r,Fs(o)):(r.next=i.next,i.next=r),o.interleaved=r,Hr(e,t)}function Do(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,Ji(e,t)}}function Tc(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=d:a=a.next=d,t=t.next}while(t!==null);a===null?i=a=r:a=a.next=r}else i=a=r;t={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Uo(e,r,t,o){var i=e.updateQueue;it=!1;var a=i.firstBaseUpdate,d=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,y=f.next;f.next=null,d===null?a=y:d.next=y,d=f;var k=e.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==d&&(p===null?k.firstBaseUpdate=y:p.next=y,k.lastBaseUpdate=f))}if(a!==null){var b=i.baseState;d=0,k=y=f=null,p=a;do{var w=p.lane,_=p.eventTime;if((o&w)===w){k!==null&&(k=k.next={eventTime:_,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var B=e,O=p;switch(w=r,_=t,O.tag){case 1:if(B=O.payload,typeof B=="function"){b=B.call(_,b,w);break e}b=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=O.payload,w=typeof B=="function"?B.call(_,b,w):B,w==null)break e;b=T({},b,w);break e;case 2:it=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[p]:w.push(p))}else _={eventTime:_,lane:w,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(y=k=_,f=b):k=k.next=_,d|=w;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;w=p,p=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(k===null&&(f=b),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=k,r=i.shared.interleaved,r!==null){i=r;do d|=i.lane,i=i.next;while(i!==r)}else a===null&&(i.shared.lanes=0);bt|=d,e.lanes=d,e.memoizedState=b}}function _c(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=t,typeof i!="function")throw Error(l(191,i));i.call(o)}}}var Dn={},Pr=tt(Dn),Un=tt(Dn),Wn=tt(Dn);function wt(e){if(e===Dn)throw Error(l(174));return e}function Ds(e,r){switch(ye(Wn,r),ye(Un,e),ye(Pr,Dn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ui(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ui(r,e)}Ne(Pr),ye(Pr,r)}function qt(){Ne(Pr),Ne(Un),Ne(Wn)}function Pc(e){wt(Wn.current);var r=wt(Pr.current),t=Ui(r,e.type);r!==t&&(ye(Un,e),ye(Pr,t))}function Us(e){Un.current===e&&(Ne(Pr),Ne(Un))}var be=tt(0);function Wo(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ws=[];function Hs(){for(var e=0;e<Ws.length;e++)Ws[e]._workInProgressVersionPrimary=null;Ws.length=0}var Ho=ee.ReactCurrentDispatcher,$s=ee.ReactCurrentBatchConfig,kt=0,Se=null,_e=null,Be=null,$o=!1,Hn=!1,$n=0,yf=0;function Ve(){throw Error(l(321))}function Vs(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!br(e[t],r[t]))return!1;return!0}function Qs(e,r,t,o,i,a){if(kt=a,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ho.current=e===null||e.memoizedState===null?kf:bf,e=t(o,i),Hn){a=0;do{if(Hn=!1,$n=0,25<=a)throw Error(l(301));a+=1,Be=_e=null,r.updateQueue=null,Ho.current=Sf,e=t(o,i)}while(Hn)}if(Ho.current=Yo,r=_e!==null&&_e.next!==null,kt=0,Be=_e=Se=null,$o=!1,r)throw Error(l(300));return e}function Ys(){var e=$n!==0;return $n=0,e}function Br(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Se.memoizedState=Be=e:Be=Be.next=e,Be}function xr(){if(_e===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var r=Be===null?Se.memoizedState:Be.next;if(r!==null)Be=r,_e=e;else{if(e===null)throw Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Be===null?Se.memoizedState=Be=e:Be=Be.next=e}return Be}function Vn(e,r){return typeof r=="function"?r(e):r}function Ks(e){var r=xr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=_e,i=o.baseQueue,a=t.pending;if(a!==null){if(i!==null){var d=i.next;i.next=a.next,a.next=d}o.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,o=o.baseState;var p=d=null,f=null,y=a;do{var k=y.lane;if((kt&k)===k)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),o=y.hasEagerState?y.eagerState:e(o,y.action);else{var b={lane:k,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(p=f=b,d=o):f=f.next=b,Se.lanes|=k,bt|=k}y=y.next}while(y!==null&&y!==a);f===null?d=o:f.next=p,br(o,r.memoizedState)||(Je=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=f,t.lastRenderedState=o}if(e=t.interleaved,e!==null){i=e;do a=i.lane,Se.lanes|=a,bt|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Gs(e){var r=xr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=t.dispatch,i=t.pending,a=r.memoizedState;if(i!==null){t.pending=null;var d=i=i.next;do a=e(a,d.action),d=d.next;while(d!==i);br(a,r.memoizedState)||(Je=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),t.lastRenderedState=a}return[a,o]}function Bc(){}function Oc(e,r){var t=Se,o=xr(),i=r(),a=!br(o.memoizedState,i);if(a&&(o.memoizedState=i,Je=!0),o=o.queue,Xs(Fc.bind(null,t,o,e),[e]),o.getSnapshot!==r||a||Be!==null&&Be.memoizedState.tag&1){if(t.flags|=2048,Qn(9,Ac.bind(null,t,o,i,r),void 0,null),Oe===null)throw Error(l(349));(kt&30)!==0||Rc(t,r,i)}return i}function Rc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Ac(e,r,t,o){r.value=t,r.getSnapshot=o,Mc(r)&&Dc(e)}function Fc(e,r,t){return t(function(){Mc(r)&&Dc(e)})}function Mc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!br(e,t)}catch{return!0}}function Dc(e){var r=Hr(e,1);r!==null&&Ir(r,e,1,-1)}function Uc(e){var r=Br();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},r.queue=e,e=e.dispatch=wf.bind(null,Se,e),[r.memoizedState,e]}function Qn(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function Wc(){return xr().memoizedState}function Vo(e,r,t,o){var i=Br();Se.flags|=e,i.memoizedState=Qn(1|r,t,void 0,o===void 0?null:o)}function Qo(e,r,t,o){var i=xr();o=o===void 0?null:o;var a=void 0;if(_e!==null){var d=_e.memoizedState;if(a=d.destroy,o!==null&&Vs(o,d.deps)){i.memoizedState=Qn(r,t,a,o);return}}Se.flags|=e,i.memoizedState=Qn(1|r,t,a,o)}function Hc(e,r){return Vo(8390656,8,e,r)}function Xs(e,r){return Qo(2048,8,e,r)}function $c(e,r){return Qo(4,2,e,r)}function Vc(e,r){return Qo(4,4,e,r)}function Qc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Yc(e,r,t){return t=t!=null?t.concat([e]):null,Qo(4,4,Qc.bind(null,r,e),t)}function qs(){}function Kc(e,r){var t=xr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Vs(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function Gc(e,r){var t=xr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Vs(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function Xc(e,r,t){return(kt&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=t):(br(t,r)||(t=Cl(),Se.lanes|=t,bt|=t,e.baseState=!0),r)}function jf(e,r){var t=xe;xe=t!==0&&4>t?t:4,e(!0);var o=$s.transition;$s.transition={};try{e(!1),r()}finally{xe=t,$s.transition=o}}function qc(){return xr().memoizedState}function Nf(e,r,t){var o=dt(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},Zc(e))Jc(r,t);else if(t=Ic(e,r,t,o),t!==null){var i=Xe();Ir(t,e,o,i),ed(t,r,o)}}function wf(e,r,t){var o=dt(e),i={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))Jc(r,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,p=a(d,t);if(i.hasEagerState=!0,i.eagerState=p,br(p,d)){var f=r.interleaved;f===null?(i.next=i,Fs(r)):(i.next=f.next,f.next=i),r.interleaved=i;return}}catch{}finally{}t=Ic(e,r,i,o),t!==null&&(i=Xe(),Ir(t,e,o,i),ed(t,r,o))}}function Zc(e){var r=e.alternate;return e===Se||r!==null&&r===Se}function Jc(e,r){Hn=$o=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function ed(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,Ji(e,t)}}var Yo={readContext:mr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},kf={readContext:mr,useCallback:function(e,r){return Br().memoizedState=[e,r===void 0?null:r],e},useContext:mr,useEffect:Hc,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Vo(4194308,4,Qc.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Vo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Vo(4,2,e,r)},useMemo:function(e,r){var t=Br();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Br();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Nf.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var r=Br();return e={current:e},r.memoizedState=e},useState:Uc,useDebugValue:qs,useDeferredValue:function(e){return Br().memoizedState=e},useTransition:function(){var e=Uc(!1),r=e[0];return e=jf.bind(null,e[1]),Br().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=Se,i=Br();if(ke){if(t===void 0)throw Error(l(407));t=t()}else{if(t=r(),Oe===null)throw Error(l(349));(kt&30)!==0||Rc(o,r,t)}i.memoizedState=t;var a={value:t,getSnapshot:r};return i.queue=a,Hc(Fc.bind(null,o,a,e),[e]),o.flags|=2048,Qn(9,Ac.bind(null,o,a,t,r),void 0,null),t},useId:function(){var e=Br(),r=Oe.identifierPrefix;if(ke){var t=Wr,o=Ur;t=(o&~(1<<32-kr(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=$n++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=yf++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},bf={readContext:mr,useCallback:Kc,useContext:mr,useEffect:Xs,useImperativeHandle:Yc,useInsertionEffect:$c,useLayoutEffect:Vc,useMemo:Gc,useReducer:Ks,useRef:Wc,useState:function(){return Ks(Vn)},useDebugValue:qs,useDeferredValue:function(e){var r=xr();return Xc(r,_e.memoizedState,e)},useTransition:function(){var e=Ks(Vn)[0],r=xr().memoizedState;return[e,r]},useMutableSource:Bc,useSyncExternalStore:Oc,useId:qc,unstable_isNewReconciler:!1},Sf={readContext:mr,useCallback:Kc,useContext:mr,useEffect:Xs,useImperativeHandle:Yc,useInsertionEffect:$c,useLayoutEffect:Vc,useMemo:Gc,useReducer:Gs,useRef:Wc,useState:function(){return Gs(Vn)},useDebugValue:qs,useDeferredValue:function(e){var r=xr();return _e===null?r.memoizedState=e:Xc(r,_e.memoizedState,e)},useTransition:function(){var e=Gs(Vn)[0],r=xr().memoizedState;return[e,r]},useMutableSource:Bc,useSyncExternalStore:Oc,useId:qc,unstable_isNewReconciler:!1};function Cr(e,r){if(e&&e.defaultProps){r=T({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Zs(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:T({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ko={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=Xe(),i=dt(e),a=$r(o,i);a.payload=r,t!=null&&(a.callback=t),r=st(e,a,i),r!==null&&(Ir(r,e,i,o),Do(r,e,i))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=Xe(),i=dt(e),a=$r(o,i);a.tag=1,a.payload=r,t!=null&&(a.callback=t),r=st(e,a,i),r!==null&&(Ir(r,e,i,o),Do(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=Xe(),o=dt(e),i=$r(t,o);i.tag=2,r!=null&&(i.callback=r),r=st(e,i,o),r!==null&&(Ir(r,e,o,t),Do(r,e,o))}};function rd(e,r,t,o,i,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):r.prototype&&r.prototype.isPureReactComponent?!_n(t,o)||!_n(i,a):!0}function td(e,r,t){var o=!1,i=nt,a=r.contextType;return typeof a=="object"&&a!==null?a=mr(a):(i=Ze(r)?vt:$e.current,o=r.contextTypes,a=(o=o!=null)?$t(e,i):nt),r=new r(t,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ko,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),r}function nd(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&Ko.enqueueReplaceState(r,r.state,null)}function Js(e,r,t,o){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ms(e);var a=r.contextType;typeof a=="object"&&a!==null?i.context=mr(a):(a=Ze(r)?vt:$e.current,i.context=$t(e,a)),i.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Zs(e,r,a,t),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Ko.enqueueReplaceState(i,i.state,null),Uo(e,t,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zt(e,r){try{var t="",o=r;do t+=ne(o),o=o.return;while(o);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:i,digest:null}}function ea(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function ra(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function od(e,r,t){t=$r(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){ri||(ri=!0,xa=o),ra(e,r)},t}function id(e,r,t){t=$r(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;t.payload=function(){return o(i)},t.callback=function(){ra(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){ra(e,r),typeof o!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function sd(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Cf;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(t)||(i.add(t),e=Df.bind(null,e,r,t),r.then(e,e))}function ad(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ld(e,r,t,o,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=$r(-1,1),r.tag=2,st(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ef=ee.ReactCurrentOwner,Je=!1;function Ge(e,r,t,o){r.child=e===null?zc(r,null,t,o):Kt(r,e.child,t,o)}function cd(e,r,t,o,i){t=t.render;var a=r.ref;return Xt(r,i),o=Qs(e,r,t,o,a,i),t=Ys(),e!==null&&!Je?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Vr(e,r,i)):(ke&&t&&Is(r),r.flags|=1,Ge(e,r,o,i),r.child)}function dd(e,r,t,o,i){if(e===null){var a=t.type;return typeof a=="function"&&!ka(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=a,ud(e,r,a,o,i)):(e=ai(t.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&i)===0){var d=a.memoizedProps;if(t=t.compare,t=t!==null?t:_n,t(d,o)&&e.ref===r.ref)return Vr(e,r,i)}return r.flags|=1,e=pt(a,o),e.ref=r.ref,e.return=r,r.child=e}function ud(e,r,t,o,i){if(e!==null){var a=e.memoizedProps;if(_n(a,o)&&e.ref===r.ref)if(Je=!1,r.pendingProps=o=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return r.lanes=e.lanes,Vr(e,r,i)}return ta(e,r,t,o,i)}function pd(e,r,t){var o=r.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(en,cr),cr|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ye(en,cr),cr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:t,ye(en,cr),cr|=o}else a!==null?(o=a.baseLanes|t,r.memoizedState=null):o=t,ye(en,cr),cr|=o;return Ge(e,r,i,t),r.child}function fd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function ta(e,r,t,o,i){var a=Ze(t)?vt:$e.current;return a=$t(r,a),Xt(r,i),t=Qs(e,r,t,o,a,i),o=Ys(),e!==null&&!Je?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,Vr(e,r,i)):(ke&&o&&Is(r),r.flags|=1,Ge(e,r,t,i),r.child)}function hd(e,r,t,o,i){if(Ze(t)){var a=!0;_o(r)}else a=!1;if(Xt(r,i),r.stateNode===null)Xo(e,r),td(r,t,o),Js(r,t,o,i),o=!0;else if(e===null){var d=r.stateNode,p=r.memoizedProps;d.props=p;var f=d.context,y=t.contextType;typeof y=="object"&&y!==null?y=mr(y):(y=Ze(t)?vt:$e.current,y=$t(r,y));var k=t.getDerivedStateFromProps,b=typeof k=="function"||typeof d.getSnapshotBeforeUpdate=="function";b||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==o||f!==y)&&nd(r,d,o,y),it=!1;var w=r.memoizedState;d.state=w,Uo(r,o,d,i),f=r.memoizedState,p!==o||w!==f||qe.current||it?(typeof k=="function"&&(Zs(r,t,k,o),f=r.memoizedState),(p=it||rd(r,t,p,o,w,f,y))?(b||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=f),d.props=o,d.state=f,d.context=y,o=p):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Lc(e,r),p=r.memoizedProps,y=r.type===r.elementType?p:Cr(r.type,p),d.props=y,b=r.pendingProps,w=d.context,f=t.contextType,typeof f=="object"&&f!==null?f=mr(f):(f=Ze(t)?vt:$e.current,f=$t(r,f));var _=t.getDerivedStateFromProps;(k=typeof _=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==b||w!==f)&&nd(r,d,o,f),it=!1,w=r.memoizedState,d.state=w,Uo(r,o,d,i);var B=r.memoizedState;p!==b||w!==B||qe.current||it?(typeof _=="function"&&(Zs(r,t,_,o),B=r.memoizedState),(y=it||rd(r,t,y,o,w,B,f)||!1)?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,B,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,B,f)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=B),d.props=o,d.state=B,d.context=f,o=y):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&w===e.memoizedState||(r.flags|=1024),o=!1)}return na(e,r,t,o,a,i)}function na(e,r,t,o,i,a){fd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return i&&yc(r,t,!1),Vr(e,r,a);o=r.stateNode,Ef.current=r;var p=d&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=Kt(r,e.child,null,a),r.child=Kt(r,null,p,a)):Ge(e,r,p,a),r.memoizedState=o.state,i&&yc(r,t,!0),r.child}function md(e){var r=e.stateNode;r.pendingContext?gc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&gc(e,r.context,!1),Ds(e,r.containerInfo)}function xd(e,r,t,o,i){return Yt(),Ps(i),r.flags|=256,Ge(e,r,t,o),r.child}var oa={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,r,t){var o=r.pendingProps,i=be.current,a=!1,d=(r.flags&128)!==0,p;if((p=d)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye(be,i&1),e===null)return _s(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=r.mode,a=r.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=li(d,o,0,null),e=zt(e,o,t,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=ia(t),r.memoizedState=oa,e):sa(r,d));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return zf(e,r,d,o,p,i,t);if(a){a=o.fallback,d=r.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=f,r.deletions=null):(o=pt(i,f),o.subtreeFlags=i.subtreeFlags&14680064),p!==null?a=pt(p,a):(a=zt(a,d,t,null),a.flags|=2),a.return=r,o.return=r,o.sibling=a,r.child=o,o=a,a=r.child,d=e.child.memoizedState,d=d===null?ia(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~t,r.memoizedState=oa,o}return a=e.child,e=a.sibling,o=pt(a,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function sa(e,r){return r=li({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Go(e,r,t,o){return o!==null&&Ps(o),Kt(r,e.child,null,t),e=sa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function zf(e,r,t,o,i,a,d){if(t)return r.flags&256?(r.flags&=-257,o=ea(Error(l(422))),Go(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=o.fallback,i=r.mode,o=li({mode:"visible",children:o.children},i,0,null),a=zt(a,i,d,null),a.flags|=2,o.return=r,a.return=r,o.sibling=a,r.child=o,(r.mode&1)!==0&&Kt(r,e.child,null,d),r.child.memoizedState=ia(d),r.memoizedState=oa,a);if((r.mode&1)===0)return Go(e,r,d,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var p=o.dgst;return o=p,a=Error(l(419)),o=ea(a,o,void 0),Go(e,r,d,o)}if(p=(d&e.childLanes)!==0,Je||p){if(o=Oe,o!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|d))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Hr(e,i),Ir(o,e,i,-1))}return wa(),o=ea(Error(l(421))),Go(e,r,d,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=Uf.bind(null,e),i._reactRetry=r,null):(e=a.treeContext,lr=rt(i.nextSibling),ar=r,ke=!0,Sr=null,e!==null&&(fr[hr++]=Ur,fr[hr++]=Wr,fr[hr++]=yt,Ur=e.id,Wr=e.overflow,yt=r),r=sa(r,o.children),r.flags|=4096,r)}function vd(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),As(e.return,r,t)}function aa(e,r,t,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:i}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=t,a.tailMode=i)}function yd(e,r,t){var o=r.pendingProps,i=o.revealOrder,a=o.tail;if(Ge(e,r,o.children,t),o=be.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vd(e,t,r);else if(e.tag===19)vd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ye(be,o),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(t=r.child,i=null;t!==null;)e=t.alternate,e!==null&&Wo(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=r.child,r.child=null):(i=t.sibling,t.sibling=null),aa(r,!1,i,t,a);break;case"backwards":for(t=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Wo(e)===null){r.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}aa(r,!0,t,null,a);break;case"together":aa(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xo(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Vr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),bt|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,t=pt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=pt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function If(e,r,t){switch(r.tag){case 3:md(r),Yt();break;case 5:Pc(r);break;case 1:Ze(r.type)&&_o(r);break;case 4:Ds(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;ye(Fo,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(ye(be,be.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?gd(e,r,t):(ye(be,be.current&1),e=Vr(e,r,t),e!==null?e.sibling:null);ye(be,be.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return yd(e,r,t);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(be,be.current),o)break;return null;case 22:case 23:return r.lanes=0,pd(e,r,t)}return Vr(e,r,t)}var jd,la,Nd,wd;jd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},la=function(){},Nd=function(e,r,t,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,wt(Pr.current);var a=null;switch(t){case"input":i=Ai(e,i),o=Ai(e,o),a=[];break;case"select":i=T({},i,{value:void 0}),o=T({},o,{value:void 0}),a=[];break;case"textarea":i=Di(e,i),o=Di(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Io)}Wi(t,o);var d;t=null;for(y in i)if(!o.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(d in p)p.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?a||(a=[]):(a=a||[]).push(y,null));for(y in o){var f=o[y];if(p=i!=null?i[y]:void 0,o.hasOwnProperty(y)&&f!==p&&(f!=null||p!=null))if(y==="style")if(p){for(d in p)!p.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in f)f.hasOwnProperty(d)&&p[d]!==f[d]&&(t||(t={}),t[d]=f[d])}else t||(a||(a=[]),a.push(y,t)),t=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(a=a||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&je("scroll",e),a||p===f||(a=[])):(a=a||[]).push(y,f))}t&&(a=a||[]).push("style",t);var y=a;(r.updateQueue=y)&&(r.flags|=4)}},wd=function(e,r,t,o){t!==o&&(r.flags|=4)};function Yn(e,r){if(!ke)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function Lf(e,r,t){var o=r.pendingProps;switch(Ls(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(r),null;case 1:return Ze(r.type)&&To(),Qe(r),null;case 3:return o=r.stateNode,qt(),Ne(qe),Ne($e),Hs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Ro(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sr!==null&&(ya(Sr),Sr=null))),la(e,r),Qe(r),null;case 5:Us(r);var i=wt(Wn.current);if(t=r.type,e!==null&&r.stateNode!=null)Nd(e,r,t,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Qe(r),null}if(e=wt(Pr.current),Ro(r)){o=r.stateNode,t=r.type;var a=r.memoizedProps;switch(o[_r]=r,o[An]=a,e=(r.mode&1)!==0,t){case"dialog":je("cancel",o),je("close",o);break;case"iframe":case"object":case"embed":je("load",o);break;case"video":case"audio":for(i=0;i<Bn.length;i++)je(Bn[i],o);break;case"source":je("error",o);break;case"img":case"image":case"link":je("error",o),je("load",o);break;case"details":je("toggle",o);break;case"input":tl(o,a),je("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},je("invalid",o);break;case"textarea":il(o,a),je("invalid",o)}Wi(t,a),i=null;for(var d in a)if(a.hasOwnProperty(d)){var p=a[d];d==="children"?typeof p=="string"?o.textContent!==p&&(a.suppressHydrationWarning!==!0&&zo(o.textContent,p,e),i=["children",p]):typeof p=="number"&&o.textContent!==""+p&&(a.suppressHydrationWarning!==!0&&zo(o.textContent,p,e),i=["children",""+p]):g.hasOwnProperty(d)&&p!=null&&d==="onScroll"&&je("scroll",o)}switch(t){case"input":Fr(o),ol(o,a,!0);break;case"textarea":Fr(o),al(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Io)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ll(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(t,{is:o.is}):(e=d.createElement(t),t==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,t),e[_r]=r,e[An]=o,jd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Hi(t,o),t){case"dialog":je("cancel",e),je("close",e),i=o;break;case"iframe":case"object":case"embed":je("load",e),i=o;break;case"video":case"audio":for(i=0;i<Bn.length;i++)je(Bn[i],e);i=o;break;case"source":je("error",e),i=o;break;case"img":case"image":case"link":je("error",e),je("load",e),i=o;break;case"details":je("toggle",e),i=o;break;case"input":tl(e,o),i=Ai(e,o),je("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=T({},o,{value:void 0}),je("invalid",e);break;case"textarea":il(e,o),i=Di(e,o),je("invalid",e);break;default:i=o}Wi(t,i),p=i;for(a in p)if(p.hasOwnProperty(a)){var f=p[a];a==="style"?ul(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&cl(e,f)):a==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&mn(e,f):typeof f=="number"&&mn(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(g.hasOwnProperty(a)?f!=null&&a==="onScroll"&&je("scroll",e):f!=null&&ie(e,a,f,d))}switch(t){case"input":Fr(e),ol(e,o,!1);break;case"textarea":Fr(e),al(e);break;case"option":o.value!=null&&e.setAttribute("value",""+se(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?_t(e,!!o.multiple,a,!1):o.defaultValue!=null&&_t(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Io)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Qe(r),null;case 6:if(e&&r.stateNode!=null)wd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(t=wt(Wn.current),wt(Pr.current),Ro(r)){if(o=r.stateNode,t=r.memoizedProps,o[_r]=r,(a=o.nodeValue!==t)&&(e=ar,e!==null))switch(e.tag){case 3:zo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(o.nodeValue,t,(e.mode&1)!==0)}a&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[_r]=r,r.stateNode=o}return Qe(r),null;case 13:if(Ne(be),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&lr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sc(),Yt(),r.flags|=98560,a=!1;else if(a=Ro(r),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[_r]=r}else Yt(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qe(r),a=!1}else Sr!==null&&(ya(Sr),Sr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(be.current&1)!==0?Pe===0&&(Pe=3):wa())),r.updateQueue!==null&&(r.flags|=4),Qe(r),null);case 4:return qt(),la(e,r),e===null&&On(r.stateNode.containerInfo),Qe(r),null;case 10:return Rs(r.type._context),Qe(r),null;case 17:return Ze(r.type)&&To(),Qe(r),null;case 19:if(Ne(be),a=r.memoizedState,a===null)return Qe(r),null;if(o=(r.flags&128)!==0,d=a.rendering,d===null)if(o)Yn(a,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Wo(e),d!==null){for(r.flags|=128,Yn(a,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)a=t,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ye(be,be.current&1|2),r.child}e=e.sibling}a.tail!==null&&Ee()>rn&&(r.flags|=128,o=!0,Yn(a,!1),r.lanes=4194304)}else{if(!o)if(e=Wo(d),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),Yn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!ke)return Qe(r),null}else 2*Ee()-a.renderingStartTime>rn&&t!==1073741824&&(r.flags|=128,o=!0,Yn(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(t=a.last,t!==null?t.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Ee(),r.sibling=null,t=be.current,ye(be,o?t&1|2:t&1),r):(Qe(r),null);case 22:case 23:return Na(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(cr&1073741824)!==0&&(Qe(r),r.subtreeFlags&6&&(r.flags|=8192)):Qe(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Tf(e,r){switch(Ls(r),r.tag){case 1:return Ze(r.type)&&To(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return qt(),Ne(qe),Ne($e),Hs(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Us(r),null;case 13:if(Ne(be),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));Yt()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ne(be),null;case 4:return qt(),null;case 10:return Rs(r.type._context),null;case 22:case 23:return Na(),null;case 24:return null;default:return null}}var qo=!1,Ye=!1,_f=typeof WeakSet=="function"?WeakSet:Set,P=null;function Jt(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Ce(e,r,o)}else t.current=null}function ca(e,r,t){try{t()}catch(o){Ce(e,r,o)}}var kd=!1;function Pf(e,r){if(Ns=go,e=rc(),fs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var d=0,p=-1,f=-1,y=0,k=0,b=e,w=null;r:for(;;){for(var _;b!==t||i!==0&&b.nodeType!==3||(p=d+i),b!==a||o!==0&&b.nodeType!==3||(f=d+o),b.nodeType===3&&(d+=b.nodeValue.length),(_=b.firstChild)!==null;)w=b,b=_;for(;;){if(b===e)break r;if(w===t&&++y===i&&(p=d),w===a&&++k===o&&(f=d),(_=b.nextSibling)!==null)break;b=w,w=b.parentNode}b=_}t=p===-1||f===-1?null:{start:p,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(ws={focusedElem:e,selectionRange:t},go=!1,P=r;P!==null;)if(r=P,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,P=e;else for(;P!==null;){r=P;try{var B=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var O=B.memoizedProps,ze=B.memoizedState,x=r.stateNode,h=x.getSnapshotBeforeUpdate(r.elementType===r.type?O:Cr(r.type,O),ze);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=r.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(S){Ce(r,r.return,S)}if(e=r.sibling,e!==null){e.return=r.return,P=e;break}P=r.return}return B=kd,kd=!1,B}function Kn(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ca(r,t,a)}i=i.next}while(i!==o)}}function Zo(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function da(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function bd(e){var r=e.alternate;r!==null&&(e.alternate=null,bd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[_r],delete r[An],delete r[Cs],delete r[mf],delete r[xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sd(e){return e.tag===5||e.tag===3||e.tag===4}function Cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ua(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Io));else if(o!==4&&(e=e.child,e!==null))for(ua(e,r,t),e=e.sibling;e!==null;)ua(e,r,t),e=e.sibling}function pa(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(pa(e,r,t),e=e.sibling;e!==null;)pa(e,r,t),e=e.sibling}var Me=null,Er=!1;function at(e,r,t){for(t=t.child;t!==null;)Ed(e,r,t),t=t.sibling}function Ed(e,r,t){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(uo,t)}catch{}switch(t.tag){case 5:Ye||Jt(t,r);case 6:var o=Me,i=Er;Me=null,at(e,r,t),Me=o,Er=i,Me!==null&&(Er?(e=Me,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Me.removeChild(t.stateNode));break;case 18:Me!==null&&(Er?(e=Me,t=t.stateNode,e.nodeType===8?Ss(e.parentNode,t):e.nodeType===1&&Ss(e,t),Cn(e)):Ss(Me,t.stateNode));break;case 4:o=Me,i=Er,Me=t.stateNode.containerInfo,Er=!0,at(e,r,t),Me=o,Er=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&ca(t,r,d),i=i.next}while(i!==o)}at(e,r,t);break;case 1:if(!Ye&&(Jt(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(p){Ce(t,r,p)}at(e,r,t);break;case 21:at(e,r,t);break;case 22:t.mode&1?(Ye=(o=Ye)||t.memoizedState!==null,at(e,r,t),Ye=o):at(e,r,t);break;default:at(e,r,t)}}function zd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new _f),r.forEach(function(o){var i=Wf.bind(null,e,o);t.has(o)||(t.add(o),o.then(i,i))})}}function zr(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var i=t[o];try{var a=e,d=r,p=d;e:for(;p!==null;){switch(p.tag){case 5:Me=p.stateNode,Er=!1;break e;case 3:Me=p.stateNode.containerInfo,Er=!0;break e;case 4:Me=p.stateNode.containerInfo,Er=!0;break e}p=p.return}if(Me===null)throw Error(l(160));Ed(a,d,i),Me=null,Er=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(y){Ce(i,r,y)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Id(r,e),r=r.sibling}function Id(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zr(r,e),Or(e),o&4){try{Kn(3,e,e.return),Zo(3,e)}catch(O){Ce(e,e.return,O)}try{Kn(5,e,e.return)}catch(O){Ce(e,e.return,O)}}break;case 1:zr(r,e),Or(e),o&512&&t!==null&&Jt(t,t.return);break;case 5:if(zr(r,e),Or(e),o&512&&t!==null&&Jt(t,t.return),e.flags&32){var i=e.stateNode;try{mn(i,"")}catch(O){Ce(e,e.return,O)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,d=t!==null?t.memoizedProps:a,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&a.type==="radio"&&a.name!=null&&nl(i,a),Hi(p,d);var y=Hi(p,a);for(d=0;d<f.length;d+=2){var k=f[d],b=f[d+1];k==="style"?ul(i,b):k==="dangerouslySetInnerHTML"?cl(i,b):k==="children"?mn(i,b):ie(i,k,b,y)}switch(p){case"input":Fi(i,a);break;case"textarea":sl(i,a);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var _=a.value;_!=null?_t(i,!!a.multiple,_,!1):w!==!!a.multiple&&(a.defaultValue!=null?_t(i,!!a.multiple,a.defaultValue,!0):_t(i,!!a.multiple,a.multiple?[]:"",!1))}i[An]=a}catch(O){Ce(e,e.return,O)}}break;case 6:if(zr(r,e),Or(e),o&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(O){Ce(e,e.return,O)}}break;case 3:if(zr(r,e),Or(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Cn(r.containerInfo)}catch(O){Ce(e,e.return,O)}break;case 4:zr(r,e),Or(e);break;case 13:zr(r,e),Or(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ma=Ee())),o&4&&zd(e);break;case 22:if(k=t!==null&&t.memoizedState!==null,e.mode&1?(Ye=(y=Ye)||k,zr(r,e),Ye=y):zr(r,e),Or(e),o&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!k&&(e.mode&1)!==0)for(P=e,k=e.child;k!==null;){for(b=P=k;P!==null;){switch(w=P,_=w.child,w.tag){case 0:case 11:case 14:case 15:Kn(4,w,w.return);break;case 1:Jt(w,w.return);var B=w.stateNode;if(typeof B.componentWillUnmount=="function"){o=w,t=w.return;try{r=o,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch(O){Ce(o,t,O)}}break;case 5:Jt(w,w.return);break;case 22:if(w.memoizedState!==null){_d(b);continue}}_!==null?(_.return=w,P=_):_d(b)}k=k.sibling}e:for(k=null,b=e;;){if(b.tag===5){if(k===null){k=b;try{i=b.stateNode,y?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(p=b.stateNode,f=b.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=dl("display",d))}catch(O){Ce(e,e.return,O)}}}else if(b.tag===6){if(k===null)try{b.stateNode.nodeValue=y?"":b.memoizedProps}catch(O){Ce(e,e.return,O)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;k===b&&(k=null),b=b.return}k===b&&(k=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:zr(r,e),Or(e),o&4&&zd(e);break;case 21:break;default:zr(r,e),Or(e)}}function Or(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Sd(t)){var o=t;break e}t=t.return}throw Error(l(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(mn(i,""),o.flags&=-33);var a=Cd(e);pa(e,a,i);break;case 3:case 4:var d=o.stateNode.containerInfo,p=Cd(e);ua(e,p,d);break;default:throw Error(l(161))}}catch(f){Ce(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Bf(e,r,t){P=e,Ld(e)}function Ld(e,r,t){for(var o=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&o){var d=i.memoizedState!==null||qo;if(!d){var p=i.alternate,f=p!==null&&p.memoizedState!==null||Ye;p=qo;var y=Ye;if(qo=d,(Ye=f)&&!y)for(P=i;P!==null;)d=P,f=d.child,d.tag===22&&d.memoizedState!==null?Pd(i):f!==null?(f.return=d,P=f):Pd(i);for(;a!==null;)P=a,Ld(a),a=a.sibling;P=i,qo=p,Ye=y}Td(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,P=a):Td(e)}}function Td(e){for(;P!==null;){var r=P;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ye||Zo(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ye)if(t===null)o.componentDidMount();else{var i=r.elementType===r.type?t.memoizedProps:Cr(r.type,t.memoizedProps);o.componentDidUpdate(i,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&_c(r,a,o);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}_c(r,d,t)}break;case 5:var p=r.stateNode;if(t===null&&r.flags&4){t=p;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var y=r.alternate;if(y!==null){var k=y.memoizedState;if(k!==null){var b=k.dehydrated;b!==null&&Cn(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ye||r.flags&512&&da(r)}catch(w){Ce(r,r.return,w)}}if(r===e){P=null;break}if(t=r.sibling,t!==null){t.return=r.return,P=t;break}P=r.return}}function _d(e){for(;P!==null;){var r=P;if(r===e){P=null;break}var t=r.sibling;if(t!==null){t.return=r.return,P=t;break}P=r.return}}function Pd(e){for(;P!==null;){var r=P;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{Zo(4,r)}catch(f){Ce(r,t,f)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(f){Ce(r,i,f)}}var a=r.return;try{da(r)}catch(f){Ce(r,a,f)}break;case 5:var d=r.return;try{da(r)}catch(f){Ce(r,d,f)}}}catch(f){Ce(r,r.return,f)}if(r===e){P=null;break}var p=r.sibling;if(p!==null){p.return=r.return,P=p;break}P=r.return}}var Of=Math.ceil,Jo=ee.ReactCurrentDispatcher,fa=ee.ReactCurrentOwner,gr=ee.ReactCurrentBatchConfig,le=0,Oe=null,Ie=null,De=0,cr=0,en=tt(0),Pe=0,Gn=null,bt=0,ei=0,ha=0,Xn=null,er=null,ma=0,rn=1/0,Qr=null,ri=!1,xa=null,lt=null,ti=!1,ct=null,ni=0,qn=0,ga=null,oi=-1,ii=0;function Xe(){return(le&6)!==0?Ee():oi!==-1?oi:oi=Ee()}function dt(e){return(e.mode&1)===0?1:(le&2)!==0&&De!==0?De&-De:vf.transition!==null?(ii===0&&(ii=Cl()),ii):(e=xe,e!==0||(e=window.event,e=e===void 0?16:Ol(e.type)),e)}function Ir(e,r,t,o){if(50<qn)throw qn=0,ga=null,Error(l(185));Nn(e,t,o),((le&2)===0||e!==Oe)&&(e===Oe&&((le&2)===0&&(ei|=t),Pe===4&&ut(e,De)),rr(e,o),t===1&&le===0&&(r.mode&1)===0&&(rn=Ee()+500,Po&&ot()))}function rr(e,r){var t=e.callbackNode;gp(e,r);var o=ho(e,e===Oe?De:0);if(o===0)t!==null&&kl(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&kl(t),r===1)e.tag===0?gf(Od.bind(null,e)):jc(Od.bind(null,e)),ff(function(){(le&6)===0&&ot()}),t=null;else{switch(El(o)){case 1:t=Xi;break;case 4:t=bl;break;case 16:t=co;break;case 536870912:t=Sl;break;default:t=co}t=Hd(t,Bd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Bd(e,r){if(oi=-1,ii=0,(le&6)!==0)throw Error(l(327));var t=e.callbackNode;if(tn()&&e.callbackNode!==t)return null;var o=ho(e,e===Oe?De:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=si(e,o);else{r=o;var i=le;le|=2;var a=Ad();(Oe!==e||De!==r)&&(Qr=null,rn=Ee()+500,Ct(e,r));do try{Ff();break}catch(p){Rd(e,p)}while(!0);Os(),Jo.current=a,le=i,Ie!==null?r=0:(Oe=null,De=0,r=Pe)}if(r!==0){if(r===2&&(i=qi(e),i!==0&&(o=i,r=va(e,i))),r===1)throw t=Gn,Ct(e,0),ut(e,o),rr(e,Ee()),t;if(r===6)ut(e,o);else{if(i=e.current.alternate,(o&30)===0&&!Rf(i)&&(r=si(e,o),r===2&&(a=qi(e),a!==0&&(o=a,r=va(e,a))),r===1))throw t=Gn,Ct(e,0),ut(e,o),rr(e,Ee()),t;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:Et(e,er,Qr);break;case 3:if(ut(e,o),(o&130023424)===o&&(r=ma+500-Ee(),10<r)){if(ho(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bs(Et.bind(null,e,er,Qr),r);break}Et(e,er,Qr);break;case 4:if(ut(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var d=31-kr(o);a=1<<d,d=r[d],d>i&&(i=d),o&=~a}if(o=i,o=Ee()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Of(o/1960))-o,10<o){e.timeoutHandle=bs(Et.bind(null,e,er,Qr),o);break}Et(e,er,Qr);break;case 5:Et(e,er,Qr);break;default:throw Error(l(329))}}}return rr(e,Ee()),e.callbackNode===t?Bd.bind(null,e):null}function va(e,r){var t=Xn;return e.current.memoizedState.isDehydrated&&(Ct(e,r).flags|=256),e=si(e,r),e!==2&&(r=er,er=t,r!==null&&ya(r)),e}function ya(e){er===null?er=e:er.push.apply(er,e)}function Rf(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var i=t[o],a=i.getSnapshot;i=i.value;try{if(!br(a(),i))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ut(e,r){for(r&=~ha,r&=~ei,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-kr(r),o=1<<t;e[t]=-1,r&=~o}}function Od(e){if((le&6)!==0)throw Error(l(327));tn();var r=ho(e,0);if((r&1)===0)return rr(e,Ee()),null;var t=si(e,r);if(e.tag!==0&&t===2){var o=qi(e);o!==0&&(r=o,t=va(e,o))}if(t===1)throw t=Gn,Ct(e,0),ut(e,r),rr(e,Ee()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Et(e,er,Qr),rr(e,Ee()),null}function ja(e,r){var t=le;le|=1;try{return e(r)}finally{le=t,le===0&&(rn=Ee()+500,Po&&ot())}}function St(e){ct!==null&&ct.tag===0&&(le&6)===0&&tn();var r=le;le|=1;var t=gr.transition,o=xe;try{if(gr.transition=null,xe=1,e)return e()}finally{xe=o,gr.transition=t,le=r,(le&6)===0&&ot()}}function Na(){cr=en.current,Ne(en)}function Ct(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pf(t)),Ie!==null)for(t=Ie.return;t!==null;){var o=t;switch(Ls(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&To();break;case 3:qt(),Ne(qe),Ne($e),Hs();break;case 5:Us(o);break;case 4:qt();break;case 13:Ne(be);break;case 19:Ne(be);break;case 10:Rs(o.type._context);break;case 22:case 23:Na()}t=t.return}if(Oe=e,Ie=e=pt(e.current,null),De=cr=r,Pe=0,Gn=null,ha=ei=bt=0,er=Xn=null,Nt!==null){for(r=0;r<Nt.length;r++)if(t=Nt[r],o=t.interleaved,o!==null){t.interleaved=null;var i=o.next,a=t.pending;if(a!==null){var d=a.next;a.next=i,o.next=d}t.pending=o}Nt=null}return e}function Rd(e,r){do{var t=Ie;try{if(Os(),Ho.current=Yo,$o){for(var o=Se.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}$o=!1}if(kt=0,Be=_e=Se=null,Hn=!1,$n=0,fa.current=null,t===null||t.return===null){Pe=1,Gn=r,Ie=null;break}e:{var a=e,d=t.return,p=t,f=r;if(r=De,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,k=p,b=k.tag;if((k.mode&1)===0&&(b===0||b===11||b===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var _=ad(d);if(_!==null){_.flags&=-257,ld(_,d,p,a,r),_.mode&1&&sd(a,y,r),r=_,f=y;var B=r.updateQueue;if(B===null){var O=new Set;O.add(f),r.updateQueue=O}else B.add(f);break e}else{if((r&1)===0){sd(a,y,r),wa();break e}f=Error(l(426))}}else if(ke&&p.mode&1){var ze=ad(d);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),ld(ze,d,p,a,r),Ps(Zt(f,p));break e}}a=f=Zt(f,p),Pe!==4&&(Pe=2),Xn===null?Xn=[a]:Xn.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var x=od(a,f,r);Tc(a,x);break e;case 1:p=f;var h=a.type,v=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lt===null||!lt.has(v)))){a.flags|=65536,r&=-r,a.lanes|=r;var S=id(a,p,r);Tc(a,S);break e}}a=a.return}while(a!==null)}Md(t)}catch(R){r=R,Ie===t&&t!==null&&(Ie=t=t.return);continue}break}while(!0)}function Ad(){var e=Jo.current;return Jo.current=Yo,e===null?Yo:e}function wa(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||(bt&268435455)===0&&(ei&268435455)===0||ut(Oe,De)}function si(e,r){var t=le;le|=2;var o=Ad();(Oe!==e||De!==r)&&(Qr=null,Ct(e,r));do try{Af();break}catch(i){Rd(e,i)}while(!0);if(Os(),le=t,Jo.current=o,Ie!==null)throw Error(l(261));return Oe=null,De=0,Pe}function Af(){for(;Ie!==null;)Fd(Ie)}function Ff(){for(;Ie!==null&&!lp();)Fd(Ie)}function Fd(e){var r=Wd(e.alternate,e,cr);e.memoizedProps=e.pendingProps,r===null?Md(e):Ie=r,fa.current=null}function Md(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Lf(t,r,cr),t!==null){Ie=t;return}}else{if(t=Tf(t,r),t!==null){t.flags&=32767,Ie=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ie=null;return}}if(r=r.sibling,r!==null){Ie=r;return}Ie=r=e}while(r!==null);Pe===0&&(Pe=5)}function Et(e,r,t){var o=xe,i=gr.transition;try{gr.transition=null,xe=1,Mf(e,r,t,o)}finally{gr.transition=i,xe=o}return null}function Mf(e,r,t,o){do tn();while(ct!==null);if((le&6)!==0)throw Error(l(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(vp(e,a),e===Oe&&(Ie=Oe=null,De=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ti||(ti=!0,Hd(co,function(){return tn(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=gr.transition,gr.transition=null;var d=xe;xe=1;var p=le;le|=4,fa.current=null,Pf(e,t),Id(t,e),of(ws),go=!!Ns,ws=Ns=null,e.current=t,Bf(t),cp(),le=p,xe=d,gr.transition=a}else e.current=t;if(ti&&(ti=!1,ct=e,ni=i),a=e.pendingLanes,a===0&&(lt=null),pp(t.stateNode),rr(e,Ee()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)i=r[t],o(i.value,{componentStack:i.stack,digest:i.digest});if(ri)throw ri=!1,e=xa,xa=null,e;return(ni&1)!==0&&e.tag!==0&&tn(),a=e.pendingLanes,(a&1)!==0?e===ga?qn++:(qn=0,ga=e):qn=0,ot(),null}function tn(){if(ct!==null){var e=El(ni),r=gr.transition,t=xe;try{if(gr.transition=null,xe=16>e?16:e,ct===null)var o=!1;else{if(e=ct,ct=null,ni=0,(le&6)!==0)throw Error(l(331));var i=le;for(le|=4,P=e.current;P!==null;){var a=P,d=a.child;if((P.flags&16)!==0){var p=a.deletions;if(p!==null){for(var f=0;f<p.length;f++){var y=p[f];for(P=y;P!==null;){var k=P;switch(k.tag){case 0:case 11:case 15:Kn(8,k,a)}var b=k.child;if(b!==null)b.return=k,P=b;else for(;P!==null;){k=P;var w=k.sibling,_=k.return;if(bd(k),k===y){P=null;break}if(w!==null){w.return=_,P=w;break}P=_}}}var B=a.alternate;if(B!==null){var O=B.child;if(O!==null){B.child=null;do{var ze=O.sibling;O.sibling=null,O=ze}while(O!==null)}}P=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,P=d;else e:for(;P!==null;){if(a=P,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Kn(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break e}P=a.return}}var h=e.current;for(P=h;P!==null;){d=P;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,P=v;else e:for(d=h;P!==null;){if(p=P,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Zo(9,p)}}catch(R){Ce(p,p.return,R)}if(p===d){P=null;break e}var S=p.sibling;if(S!==null){S.return=p.return,P=S;break e}P=p.return}}if(le=i,ot(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(uo,e)}catch{}o=!0}return o}finally{xe=t,gr.transition=r}}return!1}function Dd(e,r,t){r=Zt(t,r),r=od(e,r,1),e=st(e,r,1),r=Xe(),e!==null&&(Nn(e,1,r),rr(e,r))}function Ce(e,r,t){if(e.tag===3)Dd(e,e,t);else for(;r!==null;){if(r.tag===3){Dd(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(lt===null||!lt.has(o))){e=Zt(t,e),e=id(r,e,1),r=st(r,e,1),e=Xe(),r!==null&&(Nn(r,1,e),rr(r,e));break}}r=r.return}}function Df(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=Xe(),e.pingedLanes|=e.suspendedLanes&t,Oe===e&&(De&t)===t&&(Pe===4||Pe===3&&(De&130023424)===De&&500>Ee()-ma?Ct(e,0):ha|=t),rr(e,r)}function Ud(e,r){r===0&&((e.mode&1)===0?r=1:(r=fo,fo<<=1,(fo&130023424)===0&&(fo=4194304)));var t=Xe();e=Hr(e,r),e!==null&&(Nn(e,r,t),rr(e,t))}function Uf(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Ud(e,t)}function Wf(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Ud(e,t)}var Wd;Wd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||qe.current)Je=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return Je=!1,If(e,r,t);Je=(e.flags&131072)!==0}else Je=!1,ke&&(r.flags&1048576)!==0&&Nc(r,Oo,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Xo(e,r),e=r.pendingProps;var i=$t(r,$e.current);Xt(r,t),i=Qs(null,r,o,e,i,t);var a=Ys();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ze(o)?(a=!0,_o(r)):a=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ms(r),i.updater=Ko,r.stateNode=i,i._reactInternals=r,Js(r,o,e,t),r=na(null,r,o,!0,a,t)):(r.tag=0,ke&&a&&Is(r),Ge(null,r,i,t),r=r.child),r;case 16:o=r.elementType;e:{switch(Xo(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=$f(o),e=Cr(o,e),i){case 0:r=ta(null,r,o,e,t);break e;case 1:r=hd(null,r,o,e,t);break e;case 11:r=cd(null,r,o,e,t);break e;case 14:r=dd(null,r,o,Cr(o.type,e),t);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Cr(o,i),ta(e,r,o,i,t);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Cr(o,i),hd(e,r,o,i,t);case 3:e:{if(md(r),e===null)throw Error(l(387));o=r.pendingProps,a=r.memoizedState,i=a.element,Lc(e,r),Uo(r,o,null,t);var d=r.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){i=Zt(Error(l(423)),r),r=xd(e,r,o,t,i);break e}else if(o!==i){i=Zt(Error(l(424)),r),r=xd(e,r,o,t,i);break e}else for(lr=rt(r.stateNode.containerInfo.firstChild),ar=r,ke=!0,Sr=null,t=zc(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Yt(),o===i){r=Vr(e,r,t);break e}Ge(e,r,o,t)}r=r.child}return r;case 5:return Pc(r),e===null&&_s(r),o=r.type,i=r.pendingProps,a=e!==null?e.memoizedProps:null,d=i.children,ks(o,i)?d=null:a!==null&&ks(o,a)&&(r.flags|=32),fd(e,r),Ge(e,r,d,t),r.child;case 6:return e===null&&_s(r),null;case 13:return gd(e,r,t);case 4:return Ds(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Kt(r,null,o,t):Ge(e,r,o,t),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Cr(o,i),cd(e,r,o,i,t);case 7:return Ge(e,r,r.pendingProps,t),r.child;case 8:return Ge(e,r,r.pendingProps.children,t),r.child;case 12:return Ge(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,a=r.memoizedProps,d=i.value,ye(Fo,o._currentValue),o._currentValue=d,a!==null)if(br(a.value,d)){if(a.children===i.children&&!qe.current){r=Vr(e,r,t);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var p=a.dependencies;if(p!==null){d=a.child;for(var f=p.firstContext;f!==null;){if(f.context===o){if(a.tag===1){f=$r(-1,t&-t),f.tag=2;var y=a.updateQueue;if(y!==null){y=y.shared;var k=y.pending;k===null?f.next=f:(f.next=k.next,k.next=f),y.pending=f}}a.lanes|=t,f=a.alternate,f!==null&&(f.lanes|=t),As(a.return,t,r),p.lanes|=t;break}f=f.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=t,p=d.alternate,p!==null&&(p.lanes|=t),As(d,t,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}Ge(e,r,i.children,t),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Xt(r,t),i=mr(i),o=o(i),r.flags|=1,Ge(e,r,o,t),r.child;case 14:return o=r.type,i=Cr(o,r.pendingProps),i=Cr(o.type,i),dd(e,r,o,i,t);case 15:return ud(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:Cr(o,i),Xo(e,r),r.tag=1,Ze(o)?(e=!0,_o(r)):e=!1,Xt(r,t),td(r,o,i),Js(r,o,i,t),na(null,r,o,!0,e,t);case 19:return yd(e,r,t);case 22:return pd(e,r,t)}throw Error(l(156,r.tag))};function Hd(e,r){return wl(e,r)}function Hf(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(e,r,t,o){return new Hf(e,r,t,o)}function ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $f(e){if(typeof e=="function")return ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ur)return 11;if(e===pr)return 14}return 2}function pt(e,r){var t=e.alternate;return t===null?(t=vr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ai(e,r,t,o,i,a){var d=2;if(o=e,typeof e=="function")ka(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case W:return zt(t.children,i,a,r);case Te:d=8,i|=8;break;case or:return e=vr(12,t,r,i|2),e.elementType=or,e.lanes=a,e;case Ke:return e=vr(13,t,r,i),e.elementType=Ke,e.lanes=a,e;case ir:return e=vr(19,t,r,i),e.elementType=ir,e.lanes=a,e;case ve:return li(t,i,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nr:d=10;break e;case Ar:d=9;break e;case ur:d=11;break e;case pr:d=14;break e;case He:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=vr(d,t,r,i),r.elementType=e,r.type=o,r.lanes=a,r}function zt(e,r,t,o){return e=vr(7,e,o,r),e.lanes=t,e}function li(e,r,t,o){return e=vr(22,e,o,r),e.elementType=ve,e.lanes=t,e.stateNode={isHidden:!1},e}function ba(e,r,t){return e=vr(6,e,null,r),e.lanes=t,e}function Sa(e,r,t){return r=vr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Vf(e,r,t,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zi(0),this.expirationTimes=Zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zi(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ca(e,r,t,o,i,a,d,p,f){return e=new Vf(e,r,t,p,f),r===1?(r=1,a===!0&&(r|=8)):r=0,a=vr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(a),e}function Qf(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function $d(e){if(!e)return nt;e=e._reactInternals;e:{if(xt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ze(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(Ze(t))return vc(e,t,r)}return r}function Vd(e,r,t,o,i,a,d,p,f){return e=Ca(t,o,!0,e,i,a,d,p,f),e.context=$d(null),t=e.current,o=Xe(),i=dt(t),a=$r(o,i),a.callback=r!=null?r:null,st(t,a,i),e.current.lanes=i,Nn(e,i,o),rr(e,o),e}function ci(e,r,t,o){var i=r.current,a=Xe(),d=dt(i);return t=$d(t),r.context===null?r.context=t:r.pendingContext=t,r=$r(a,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=st(i,r,d),e!==null&&(Ir(e,i,d,a),Do(e,i,d)),d}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Ea(e,r){Qd(e,r),(e=e.alternate)&&Qd(e,r)}function Yf(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}ui.prototype.render=za.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));ci(e,r,null,null)},ui.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;St(function(){ci(null,e,null,null)}),r[Mr]=null}};function ui(e){this._internalRoot=e}ui.prototype.unstable_scheduleHydration=function(e){if(e){var r=Ll();e={blockedOn:null,target:e,priority:r};for(var t=0;t<Zr.length&&r!==0&&r<Zr[t].priority;t++);Zr.splice(t,0,e),t===0&&Pl(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kd(){}function Kf(e,r,t,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var y=di(d);a.call(y)}}var d=Vd(r,o,e,0,null,!1,!1,"",Kd);return e._reactRootContainer=d,e[Mr]=d.current,On(e.nodeType===8?e.parentNode:e),St(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var p=o;o=function(){var y=di(f);p.call(y)}}var f=Ca(e,0,!1,null,null,!1,!1,"",Kd);return e._reactRootContainer=f,e[Mr]=f.current,On(e.nodeType===8?e.parentNode:e),St(function(){ci(r,f,t,o)}),f}function fi(e,r,t,o,i){var a=t._reactRootContainer;if(a){var d=a;if(typeof i=="function"){var p=i;i=function(){var f=di(d);p.call(f)}}ci(r,d,e,i)}else d=Kf(t,r,e,i,o);return di(d)}zl=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=jn(r.pendingLanes);t!==0&&(Ji(r,t|1),rr(r,Ee()),(le&6)===0&&(rn=Ee()+500,ot()))}break;case 13:St(function(){var o=Hr(e,1);if(o!==null){var i=Xe();Ir(o,e,1,i)}}),Ea(e,1)}},es=function(e){if(e.tag===13){var r=Hr(e,134217728);if(r!==null){var t=Xe();Ir(r,e,134217728,t)}Ea(e,134217728)}},Il=function(e){if(e.tag===13){var r=dt(e),t=Hr(e,r);if(t!==null){var o=Xe();Ir(t,e,r,o)}Ea(e,r)}},Ll=function(){return xe},Tl=function(e,r){var t=xe;try{return xe=e,r()}finally{xe=t}},Qi=function(e,r,t){switch(r){case"input":if(Fi(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var i=Lo(o);if(!i)throw Error(l(90));wr(o),Fi(o,i)}}}break;case"textarea":sl(e,t);break;case"select":r=t.value,r!=null&&_t(e,!!t.multiple,r,!1)}},ml=ja,xl=St;var Gf={usingClientEntryPoint:!1,Events:[Fn,Wt,Lo,fl,hl,ja]},Zn={findFiberByHostInstance:gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xf={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jl(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||Yf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{uo=hi.inject(Xf),Tr=hi}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gf,tr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(r))throw Error(l(200));return Qf(e,r,null,t)},tr.createRoot=function(e,r){if(!Ia(e))throw Error(l(299));var t=!1,o="",i=Yd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Ca(e,1,!1,null,null,t,!1,o,i),e[Mr]=r.current,On(e.nodeType===8?e.parentNode:e),new za(r)},tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=jl(r),e=e===null?null:e.stateNode,e},tr.flushSync=function(e){return St(e)},tr.hydrate=function(e,r,t){if(!pi(r))throw Error(l(200));return fi(null,e,r,!0,t)},tr.hydrateRoot=function(e,r,t){if(!Ia(e))throw Error(l(405));var o=t!=null&&t.hydratedSources||null,i=!1,a="",d=Yd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=Vd(r,null,e,1,t!=null?t:null,i,!1,a,d),e[Mr]=r.current,On(e),o)for(e=0;e<o.length;e++)t=o[e],i=t._getVersion,i=i(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,i]:r.mutableSourceEagerHydrationData.push(t,i);return new ui(r)},tr.render=function(e,r,t){if(!pi(r))throw Error(l(200));return fi(null,e,r,!1,t)},tr.unmountComponentAtNode=function(e){if(!pi(e))throw Error(l(40));return e._reactRootContainer?(St(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Mr]=null})}),!0):!1},tr.unstable_batchedUpdates=ja,tr.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!pi(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return fi(e,r,t,!1,o)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var tu;function ih(){if(tu)return _a.exports;tu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(c){console.error(c)}}return s(),_a.exports=oh(),_a.exports}var nu;function sh(){if(nu)return mi;nu=1;var s=ih();return mi.createRoot=s.createRoot,mi.hydrateRoot=s.hydrateRoot,mi}var ah=sh(),fe=Xa();const yr=Zf(fe);var nr=function(){return nr=Object.assign||function(c){for(var l,u=1,g=arguments.length;u<g;u++){l=arguments[u];for(var j in l)Object.prototype.hasOwnProperty.call(l,j)&&(c[j]=l[j])}return c},nr.apply(this,arguments)};function ki(s,c,l){if(l||arguments.length===2)for(var u=0,g=c.length,j;u<g;u++)(j||!(u in c))&&(j||(j=Array.prototype.slice.call(c,0,u)),j[u]=c[u]);return s.concat(j||Array.prototype.slice.call(c))}var we="-ms-",ro="-moz-",me="-webkit-",bu="comm",Ti="rule",qa="decl",lh="@import",Su="@keyframes",ch="@layer",Cu=Math.abs,Za=String.fromCharCode,Ua=Object.assign;function dh(s,c){return Ae(s,0)^45?(((c<<2^Ae(s,0))<<2^Ae(s,1))<<2^Ae(s,2))<<2^Ae(s,3):0}function Eu(s){return s.trim()}function Kr(s,c){return(s=c.exec(s))?s[0]:s}function J(s,c,l){return s.replace(c,l)}function vi(s,c,l){return s.indexOf(c,l)}function Ae(s,c){return s.charCodeAt(c)|0}function sn(s,c,l){return s.slice(c,l)}function Rr(s){return s.length}function zu(s){return s.length}function eo(s,c){return c.push(s),s}function uh(s,c){return s.map(c).join("")}function ou(s,c){return s.filter(function(l){return!Kr(l,c)})}var _i=1,an=1,Iu=0,jr=0,Le=0,pn="";function Pi(s,c,l,u,g,j,C,E){return{value:s,root:c,parent:l,type:u,props:g,children:j,line:_i,column:an,length:C,return:"",siblings:E}}function ht(s,c){return Ua(Pi("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},c)}function nn(s){for(;s.root;)s=ht(s.root,{children:[s]});eo(s,s.siblings)}function ph(){return Le}function fh(){return Le=jr>0?Ae(pn,--jr):0,an--,Le===10&&(an=1,_i--),Le}function Lr(){return Le=jr<Iu?Ae(pn,jr++):0,an++,Le===10&&(an=1,_i++),Le}function Lt(){return Ae(pn,jr)}function yi(){return jr}function Bi(s,c){return sn(pn,s,c)}function Wa(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hh(s){return _i=an=1,Iu=Rr(pn=s),jr=0,[]}function mh(s){return pn="",s}function Oa(s){return Eu(Bi(jr-1,Ha(s===91?s+2:s===40?s+1:s)))}function xh(s){for(;(Le=Lt())&&Le<33;)Lr();return Wa(s)>2||Wa(Le)>3?"":" "}function gh(s,c){for(;--c&&Lr()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return Bi(s,yi()+(c<6&&Lt()==32&&Lr()==32))}function Ha(s){for(;Lr();)switch(Le){case s:return jr;case 34:case 39:s!==34&&s!==39&&Ha(Le);break;case 40:s===41&&Ha(s);break;case 92:Lr();break}return jr}function vh(s,c){for(;Lr()&&s+Le!==57;)if(s+Le===84&&Lt()===47)break;return"/*"+Bi(c,jr-1)+"*"+Za(s===47?s:Lr())}function yh(s){for(;!Wa(Lt());)Lr();return Bi(s,jr)}function jh(s){return mh(ji("",null,null,null,[""],s=hh(s),0,[0],s))}function ji(s,c,l,u,g,j,C,E,z){for(var Q=0,$=0,F=C,M=0,Y=0,oe=0,V=1,X=1,he=1,ae=0,ie="",ee=g,ue=j,K=u,W=ie;X;)switch(oe=ae,ae=Lr()){case 40:if(oe!=108&&Ae(W,F-1)==58){vi(W+=J(Oa(ae),"&","&\f"),"&\f",Cu(Q?E[Q-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:W+=Oa(ae);break;case 9:case 10:case 13:case 32:W+=xh(oe);break;case 92:W+=gh(yi()-1,7);continue;case 47:switch(Lt()){case 42:case 47:eo(Nh(vh(Lr(),yi()),c,l,z),z);break;default:W+="/"}break;case 123*V:E[Q++]=Rr(W)*he;case 125*V:case 59:case 0:switch(ae){case 0:case 125:X=0;case 59+$:he==-1&&(W=J(W,/\f/g,"")),Y>0&&Rr(W)-F&&eo(Y>32?su(W+";",u,l,F-1,z):su(J(W," ","")+";",u,l,F-2,z),z);break;case 59:W+=";";default:if(eo(K=iu(W,c,l,Q,$,g,E,ie,ee=[],ue=[],F,j),j),ae===123)if($===0)ji(W,c,K,K,ee,j,F,E,ue);else switch(M===99&&Ae(W,3)===110?100:M){case 100:case 108:case 109:case 115:ji(s,K,K,u&&eo(iu(s,K,K,0,0,g,E,ie,g,ee=[],F,ue),ue),g,ue,F,E,u?ee:ue);break;default:ji(W,K,K,K,[""],ue,0,E,ue)}}Q=$=Y=0,V=he=1,ie=W="",F=C;break;case 58:F=1+Rr(W),Y=oe;default:if(V<1){if(ae==123)--V;else if(ae==125&&V++==0&&fh()==125)continue}switch(W+=Za(ae),ae*V){case 38:he=$>0?1:(W+="\f",-1);break;case 44:E[Q++]=(Rr(W)-1)*he,he=1;break;case 64:Lt()===45&&(W+=Oa(Lr())),M=Lt(),$=F=Rr(ie=W+=yh(yi())),ae++;break;case 45:oe===45&&Rr(W)==2&&(V=0)}}return j}function iu(s,c,l,u,g,j,C,E,z,Q,$,F){for(var M=g-1,Y=g===0?j:[""],oe=zu(Y),V=0,X=0,he=0;V<u;++V)for(var ae=0,ie=sn(s,M+1,M=Cu(X=C[V])),ee=s;ae<oe;++ae)(ee=Eu(X>0?Y[ae]+" "+ie:J(ie,/&\f/g,Y[ae])))&&(z[he++]=ee);return Pi(s,c,l,g===0?Ti:E,z,Q,$,F)}function Nh(s,c,l,u){return Pi(s,c,l,bu,Za(ph()),sn(s,2,-2),0,u)}function su(s,c,l,u,g){return Pi(s,c,l,qa,sn(s,0,u),sn(s,u+1,-1),u,g)}function Lu(s,c,l){switch(dh(s,c)){case 5103:return me+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+s+s;case 4789:return ro+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return me+s+ro+s+we+s+s;case 5936:switch(Ae(s,c+11)){case 114:return me+s+we+J(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return me+s+we+J(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return me+s+we+J(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return me+s+we+s+s;case 6165:return me+s+we+"flex-"+s+s;case 5187:return me+s+J(s,/(\w+).+(:[^]+)/,me+"box-$1$2"+we+"flex-$1$2")+s;case 5443:return me+s+we+"flex-item-"+J(s,/flex-|-self/g,"")+(Kr(s,/flex-|baseline/)?"":we+"grid-row-"+J(s,/flex-|-self/g,""))+s;case 4675:return me+s+we+"flex-line-pack"+J(s,/align-content|flex-|-self/g,"")+s;case 5548:return me+s+we+J(s,"shrink","negative")+s;case 5292:return me+s+we+J(s,"basis","preferred-size")+s;case 6060:return me+"box-"+J(s,"-grow","")+me+s+we+J(s,"grow","positive")+s;case 4554:return me+J(s,/([^-])(transform)/g,"$1"+me+"$2")+s;case 6187:return J(J(J(s,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),s,"")+s;case 5495:case 3959:return J(s,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return J(J(s,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+s+s;case 4200:if(!Kr(s,/flex-|baseline/))return we+"grid-column-align"+sn(s,c)+s;break;case 2592:case 3360:return we+J(s,"template-","")+s;case 4384:case 3616:return l&&l.some(function(u,g){return c=g,Kr(u.props,/grid-\w+-end/)})?~vi(s+(l=l[c].value),"span",0)?s:we+J(s,"-start","")+s+we+"grid-row-span:"+(~vi(l,"span",0)?Kr(l,/\d+/):+Kr(l,/\d+/)-+Kr(s,/\d+/))+";":we+J(s,"-start","")+s;case 4896:case 4128:return l&&l.some(function(u){return Kr(u.props,/grid-\w+-start/)})?s:we+J(J(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return J(s,/(.+)-inline(.+)/,me+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(s)-1-c>6)switch(Ae(s,c+1)){case 109:if(Ae(s,c+4)!==45)break;case 102:return J(s,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+ro+(Ae(s,c+3)==108?"$3":"$2-$3"))+s;case 115:return~vi(s,"stretch",0)?Lu(J(s,"stretch","fill-available"),c,l)+s:s}break;case 5152:case 5920:return J(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,g,j,C,E,z,Q){return we+g+":"+j+Q+(C?we+g+"-span:"+(E?z:+z-+j)+Q:"")+s});case 4949:if(Ae(s,c+6)===121)return J(s,":",":"+me)+s;break;case 6444:switch(Ae(s,Ae(s,14)===45?18:11)){case 120:return J(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Ae(s,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+we+"$2box$3")+s;case 100:return J(s,":",":"+we)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(s,"scroll-","scroll-snap-")+s}return s}function bi(s,c){for(var l="",u=0;u<s.length;u++)l+=c(s[u],u,s,c)||"";return l}function wh(s,c,l,u){switch(s.type){case ch:if(s.children.length)break;case lh:case qa:return s.return=s.return||s.value;case bu:return"";case Su:return s.return=s.value+"{"+bi(s.children,u)+"}";case Ti:if(!Rr(s.value=s.props.join(",")))return""}return Rr(l=bi(s.children,u))?s.return=s.value+"{"+l+"}":""}function kh(s){var c=zu(s);return function(l,u,g,j){for(var C="",E=0;E<c;E++)C+=s[E](l,u,g,j)||"";return C}}function bh(s){return function(c){c.root||(c=c.return)&&s(c)}}function Sh(s,c,l,u){if(s.length>-1&&!s.return)switch(s.type){case qa:s.return=Lu(s.value,s.length,l);return;case Su:return bi([ht(s,{value:J(s.value,"@","@"+me)})],u);case Ti:if(s.length)return uh(l=s.props,function(g){switch(Kr(g,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nn(ht(s,{props:[J(g,/:(read-\w+)/,":"+ro+"$1")]})),nn(ht(s,{props:[g]})),Ua(s,{props:ou(l,u)});break;case"::placeholder":nn(ht(s,{props:[J(g,/:(plac\w+)/,":"+me+"input-$1")]})),nn(ht(s,{props:[J(g,/:(plac\w+)/,":"+ro+"$1")]})),nn(ht(s,{props:[J(g,/:(plac\w+)/,we+"input-$1")]})),nn(ht(s,{props:[g]})),Ua(s,{props:ou(l,u)});break}return""})}}var Ch={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dr={},ln=typeof process!="undefined"&&dr!==void 0&&(dr.REACT_APP_SC_ATTR||dr.SC_ATTR)||"data-styled",Tu="active",_u="data-styled-version",Oi="6.1.18",Ja=`/*!sc*/
`,Si=typeof window!="undefined"&&typeof document!="undefined",Eh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==""?dr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.SC_DISABLE_SPEEDY!==void 0&&dr.SC_DISABLE_SPEEDY!==""&&dr.SC_DISABLE_SPEEDY!=="false"&&dr.SC_DISABLE_SPEEDY),Ri=Object.freeze([]),cn=Object.freeze({});function zh(s,c,l){return l===void 0&&(l=cn),s.theme!==l.theme&&s.theme||c||l.theme}var Pu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ih=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lh=/(^-|-$)/g;function au(s){return s.replace(Ih,"-").replace(Lh,"")}var Th=/(a)(d)/gi,xi=52,lu=function(s){return String.fromCharCode(s+(s>25?39:97))};function $a(s){var c,l="";for(c=Math.abs(s);c>xi;c=c/xi|0)l=lu(c%xi)+l;return(lu(c%xi)+l).replace(Th,"$1-$2")}var Ra,Bu=5381,on=function(s,c){for(var l=c.length;l;)s=33*s^c.charCodeAt(--l);return s},Ou=function(s){return on(Bu,s)};function _h(s){return $a(Ou(s)>>>0)}function Ph(s){return s.displayName||s.name||"Component"}function Aa(s){return typeof s=="string"&&!0}var Ru=typeof Symbol=="function"&&Symbol.for,Au=Ru?Symbol.for("react.memo"):60115,Bh=Ru?Symbol.for("react.forward_ref"):60112,Oh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ah=((Ra={})[Bh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ra[Au]=Fu,Ra);function cu(s){return("type"in(c=s)&&c.type.$$typeof)===Au?Fu:"$$typeof"in s?Ah[s.$$typeof]:Oh;var c}var Fh=Object.defineProperty,Mh=Object.getOwnPropertyNames,du=Object.getOwnPropertySymbols,Dh=Object.getOwnPropertyDescriptor,Uh=Object.getPrototypeOf,uu=Object.prototype;function Mu(s,c,l){if(typeof c!="string"){if(uu){var u=Uh(c);u&&u!==uu&&Mu(s,u,l)}var g=Mh(c);du&&(g=g.concat(du(c)));for(var j=cu(s),C=cu(c),E=0;E<g.length;++E){var z=g[E];if(!(z in Rh||l&&l[z]||C&&z in C||j&&z in j)){var Q=Dh(c,z);try{Fh(s,z,Q)}catch{}}}}return s}function dn(s){return typeof s=="function"}function el(s){return typeof s=="object"&&"styledComponentId"in s}function It(s,c){return s&&c?"".concat(s," ").concat(c):s||c||""}function pu(s,c){if(s.length===0)return"";for(var l=s[0],u=1;u<s.length;u++)l+=s[u];return l}function to(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function Va(s,c,l){if(l===void 0&&(l=!1),!l&&!to(s)&&!Array.isArray(s))return c;if(Array.isArray(c))for(var u=0;u<c.length;u++)s[u]=Va(s[u],c[u]);else if(to(c))for(var u in c)s[u]=Va(s[u],c[u]);return s}function rl(s,c){Object.defineProperty(s,"toString",{value:c})}function oo(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Wh=(function(){function s(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return s.prototype.indexOfGroup=function(c){for(var l=0,u=0;u<c;u++)l+=this.groupSizes[u];return l},s.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var u=this.groupSizes,g=u.length,j=g;c>=j;)if((j<<=1)<0)throw oo(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(u),this.length=j;for(var C=g;C<j;C++)this.groupSizes[C]=0}for(var E=this.indexOfGroup(c+1),z=(C=0,l.length);C<z;C++)this.tag.insertRule(E,l[C])&&(this.groupSizes[c]++,E++)},s.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],u=this.indexOfGroup(c),g=u+l;this.groupSizes[c]=0;for(var j=u;j<g;j++)this.tag.deleteRule(u)}},s.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var u=this.groupSizes[c],g=this.indexOfGroup(c),j=g+u,C=g;C<j;C++)l+="".concat(this.tag.getRule(C)).concat(Ja);return l},s})(),Ni=new Map,Ci=new Map,wi=1,gi=function(s){if(Ni.has(s))return Ni.get(s);for(;Ci.has(wi);)wi++;var c=wi++;return Ni.set(s,c),Ci.set(c,s),c},Hh=function(s,c){wi=c+1,Ni.set(s,c),Ci.set(c,s)},$h="style[".concat(ln,"][").concat(_u,'="').concat(Oi,'"]'),Vh=new RegExp("^".concat(ln,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qh=function(s,c,l){for(var u,g=l.split(","),j=0,C=g.length;j<C;j++)(u=g[j])&&s.registerName(c,u)},Yh=function(s,c){for(var l,u=((l=c.textContent)!==null&&l!==void 0?l:"").split(Ja),g=[],j=0,C=u.length;j<C;j++){var E=u[j].trim();if(E){var z=E.match(Vh);if(z){var Q=0|parseInt(z[1],10),$=z[2];Q!==0&&(Hh($,Q),Qh(s,$,z[3]),s.getTag().insertRules(Q,g)),g.length=0}else g.push(E)}}},fu=function(s){for(var c=document.querySelectorAll($h),l=0,u=c.length;l<u;l++){var g=c[l];g&&g.getAttribute(ln)!==Tu&&(Yh(s,g),g.parentNode&&g.parentNode.removeChild(g))}};function Kh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Du=function(s){var c=document.head,l=s||c,u=document.createElement("style"),g=(function(E){var z=Array.from(E.querySelectorAll("style[".concat(ln,"]")));return z[z.length-1]})(l),j=g!==void 0?g.nextSibling:null;u.setAttribute(ln,Tu),u.setAttribute(_u,Oi);var C=Kh();return C&&u.setAttribute("nonce",C),l.insertBefore(u,j),u},Gh=(function(){function s(c){this.element=Du(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var u=document.styleSheets,g=0,j=u.length;g<j;g++){var C=u[g];if(C.ownerNode===l)return C}throw oo(17)})(this.element),this.length=0}return s.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},s.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},s})(),Xh=(function(){function s(c){this.element=Du(c),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var u=document.createTextNode(l);return this.element.insertBefore(u,this.nodes[c]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},s.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},s})(),qh=(function(){function s(c){this.rules=[],this.length=0}return s.prototype.insertRule=function(c,l){return c<=this.length&&(this.rules.splice(c,0,l),this.length++,!0)},s.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},s.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},s})(),hu=Si,Zh={isServer:!Si,useCSSOMInjection:!Eh},Uu=(function(){function s(c,l,u){c===void 0&&(c=cn),l===void 0&&(l={});var g=this;this.options=nr(nr({},Zh),c),this.gs=l,this.names=new Map(u),this.server=!!c.isServer,!this.server&&Si&&hu&&(hu=!1,fu(this)),rl(this,function(){return(function(j){for(var C=j.getTag(),E=C.length,z="",Q=function(F){var M=(function(he){return Ci.get(he)})(F);if(M===void 0)return"continue";var Y=j.names.get(M),oe=C.getGroup(F);if(Y===void 0||!Y.size||oe.length===0)return"continue";var V="".concat(ln,".g").concat(F,'[id="').concat(M,'"]'),X="";Y!==void 0&&Y.forEach(function(he){he.length>0&&(X+="".concat(he,","))}),z+="".concat(oe).concat(V,'{content:"').concat(X,'"}').concat(Ja)},$=0;$<E;$++)Q($);return z})(g)})}return s.registerId=function(c){return gi(c)},s.prototype.rehydrate=function(){!this.server&&Si&&fu(this)},s.prototype.reconstructWithOptions=function(c,l){return l===void 0&&(l=!0),new s(nr(nr({},this.options),c),this.gs,l&&this.names||void 0)},s.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var u=l.useCSSOMInjection,g=l.target;return l.isServer?new qh(g):u?new Gh(g):new Xh(g)})(this.options),new Wh(c)));var c},s.prototype.hasNameForId=function(c,l){return this.names.has(c)&&this.names.get(c).has(l)},s.prototype.registerName=function(c,l){if(gi(c),this.names.has(c))this.names.get(c).add(l);else{var u=new Set;u.add(l),this.names.set(c,u)}},s.prototype.insertRules=function(c,l,u){this.registerName(c,l),this.getTag().insertRules(gi(c),u)},s.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},s.prototype.clearRules=function(c){this.getTag().clearGroup(gi(c)),this.clearNames(c)},s.prototype.clearTag=function(){this.tag=void 0},s})(),Jh=/&/g,em=/^\s*\/\/.*$/gm;function Wu(s,c){return s.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(u){return"".concat(c," ").concat(u)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Wu(l.children,c)),l})}function rm(s){var c,l,u,g=cn,j=g.options,C=j===void 0?cn:j,E=g.plugins,z=E===void 0?Ri:E,Q=function(M,Y,oe){return oe.startsWith(l)&&oe.endsWith(l)&&oe.replaceAll(l,"").length>0?".".concat(c):M},$=z.slice();$.push(function(M){M.type===Ti&&M.value.includes("&")&&(M.props[0]=M.props[0].replace(Jh,l).replace(u,Q))}),C.prefix&&$.push(Sh),$.push(wh);var F=function(M,Y,oe,V){Y===void 0&&(Y=""),oe===void 0&&(oe=""),V===void 0&&(V="&"),c=V,l=Y,u=new RegExp("\\".concat(l,"\\b"),"g");var X=M.replace(em,""),he=jh(oe||Y?"".concat(oe," ").concat(Y," { ").concat(X," }"):X);C.namespace&&(he=Wu(he,C.namespace));var ae=[];return bi(he,kh($.concat(bh(function(ie){return ae.push(ie)})))),ae};return F.hash=z.length?z.reduce(function(M,Y){return Y.name||oo(15),on(M,Y.name)},Bu).toString():"",F}var tm=new Uu,Qa=rm(),Hu=yr.createContext({shouldForwardProp:void 0,styleSheet:tm,stylis:Qa});Hu.Consumer;yr.createContext(void 0);function mu(){return fe.useContext(Hu)}var nm=(function(){function s(c,l){var u=this;this.inject=function(g,j){j===void 0&&(j=Qa);var C=u.name+j.hash;g.hasNameForId(u.id,C)||g.insertRules(u.id,C,j(u.rules,C,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,rl(this,function(){throw oo(12,String(u.name))})}return s.prototype.getName=function(c){return c===void 0&&(c=Qa),this.name+c.hash},s})(),om=function(s){return s>="A"&&s<="Z"};function xu(s){for(var c="",l=0;l<s.length;l++){var u=s[l];if(l===1&&u==="-"&&s[0]==="-")return s;om(u)?c+="-"+u.toLowerCase():c+=u}return c.startsWith("ms-")?"-"+c:c}var $u=function(s){return s==null||s===!1||s===""},Vu=function(s){var c,l,u=[];for(var g in s){var j=s[g];s.hasOwnProperty(g)&&!$u(j)&&(Array.isArray(j)&&j.isCss||dn(j)?u.push("".concat(xu(g),":"),j,";"):to(j)?u.push.apply(u,ki(ki(["".concat(g," {")],Vu(j),!1),["}"],!1)):u.push("".concat(xu(g),": ").concat((c=g,(l=j)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||c in Ch||c.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return u};function Tt(s,c,l,u){if($u(s))return[];if(el(s))return[".".concat(s.styledComponentId)];if(dn(s)){if(!dn(j=s)||j.prototype&&j.prototype.isReactComponent||!c)return[s];var g=s(c);return Tt(g,c,l,u)}var j;return s instanceof nm?l?(s.inject(l,u),[s.getName(u)]):[s]:to(s)?Vu(s):Array.isArray(s)?Array.prototype.concat.apply(Ri,s.map(function(C){return Tt(C,c,l,u)})):[s.toString()]}function im(s){for(var c=0;c<s.length;c+=1){var l=s[c];if(dn(l)&&!el(l))return!1}return!0}var sm=Ou(Oi),am=(function(){function s(c,l,u){this.rules=c,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&im(c),this.componentId=l,this.baseHash=on(sm,l),this.baseStyle=u,Uu.registerId(l)}return s.prototype.generateAndInjectStyles=function(c,l,u){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))g=It(g,this.staticRulesId);else{var j=pu(Tt(this.rules,c,l,u)),C=$a(on(this.baseHash,j)>>>0);if(!l.hasNameForId(this.componentId,C)){var E=u(j,".".concat(C),void 0,this.componentId);l.insertRules(this.componentId,C,E)}g=It(g,C),this.staticRulesId=C}else{for(var z=on(this.baseHash,u.hash),Q="",$=0;$<this.rules.length;$++){var F=this.rules[$];if(typeof F=="string")Q+=F;else if(F){var M=pu(Tt(F,c,l,u));z=on(z,M+$),Q+=M}}if(Q){var Y=$a(z>>>0);l.hasNameForId(this.componentId,Y)||l.insertRules(this.componentId,Y,u(Q,".".concat(Y),void 0,this.componentId)),g=It(g,Y)}}return g},s})(),Qu=yr.createContext(void 0);Qu.Consumer;var Fa={};function lm(s,c,l){var u=el(s),g=s,j=!Aa(s),C=c.attrs,E=C===void 0?Ri:C,z=c.componentId,Q=z===void 0?(function(ee,ue){var K=typeof ee!="string"?"sc":au(ee);Fa[K]=(Fa[K]||0)+1;var W="".concat(K,"-").concat(_h(Oi+K+Fa[K]));return ue?"".concat(ue,"-").concat(W):W})(c.displayName,c.parentComponentId):z,$=c.displayName,F=$===void 0?(function(ee){return Aa(ee)?"styled.".concat(ee):"Styled(".concat(Ph(ee),")")})(s):$,M=c.displayName&&c.componentId?"".concat(au(c.displayName),"-").concat(c.componentId):c.componentId||Q,Y=u&&g.attrs?g.attrs.concat(E).filter(Boolean):E,oe=c.shouldForwardProp;if(u&&g.shouldForwardProp){var V=g.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;oe=function(ee,ue){return V(ee,ue)&&X(ee,ue)}}else oe=V}var he=new am(l,M,u?g.componentStyle:void 0);function ae(ee,ue){return(function(K,W,Te){var or=K.attrs,Nr=K.componentStyle,Ar=K.defaultProps,ur=K.foldedComponentIds,Ke=K.styledComponentId,ir=K.target,pr=yr.useContext(Qu),He=mu(),ve=K.shouldForwardProp||He.shouldForwardProp,L=zh(W,pr,Ar)||cn,A=(function(ne,re,pe){for(var se,ce=nr(nr({},re),{className:void 0,theme:pe}),Fe=0;Fe<ne.length;Fe+=1){var Fr=dn(se=ne[Fe])?se(ce):se;for(var wr in Fr)ce[wr]=wr==="className"?It(ce[wr],Fr[wr]):wr==="style"?nr(nr({},ce[wr]),Fr[wr]):Fr[wr]}return re.className&&(ce.className=It(ce.className,re.className)),ce})(or,W,L),T=A.as||ir,m={};for(var N in A)A[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&A.theme===L||(N==="forwardedAs"?m.as=A.forwardedAs:ve&&!ve(N,T)||(m[N]=A[N]));var G=(function(ne,re){var pe=mu(),se=ne.generateAndInjectStyles(re,pe.styleSheet,pe.stylis);return se})(Nr,A),q=It(ur,Ke);return G&&(q+=" "+G),A.className&&(q+=" "+A.className),m[Aa(T)&&!Pu.has(T)?"class":"className"]=q,Te&&(m.ref=Te),fe.createElement(T,m)})(ie,ee,ue)}ae.displayName=F;var ie=yr.forwardRef(ae);return ie.attrs=Y,ie.componentStyle=he,ie.displayName=F,ie.shouldForwardProp=oe,ie.foldedComponentIds=u?It(g.foldedComponentIds,g.styledComponentId):"",ie.styledComponentId=M,ie.target=u?g.target:s,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=u?(function(ue){for(var K=[],W=1;W<arguments.length;W++)K[W-1]=arguments[W];for(var Te=0,or=K;Te<or.length;Te++)Va(ue,or[Te],!0);return ue})({},g.defaultProps,ee):ee}}),rl(ie,function(){return".".concat(ie.styledComponentId)}),j&&Mu(ie,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function gu(s,c){for(var l=[s[0]],u=0,g=c.length;u<g;u+=1)l.push(c[u],s[u+1]);return l}var vu=function(s){return Object.assign(s,{isCss:!0})};function cm(s){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(dn(s)||to(s))return vu(Tt(gu(Ri,ki([s],c,!0))));var u=s;return c.length===0&&u.length===1&&typeof u[0]=="string"?Tt(u):vu(Tt(gu(u,c)))}function Ya(s,c,l){if(l===void 0&&(l=cn),!c)throw oo(1,c);var u=function(g){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];return s(c,l,cm.apply(void 0,ki([g],j,!1)))};return u.attrs=function(g){return Ya(s,c,nr(nr({},l),{attrs:Array.prototype.concat(l.attrs,g).filter(Boolean)}))},u.withConfig=function(g){return Ya(s,c,nr(nr({},l),g))},u}var Yu=function(s){return Ya(lm,s)},ge=Yu;Pu.forEach(function(s){ge[s]=Yu(s)});const Ma={Wrapper:ge.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ge.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:ge.main`
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
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #0f0f0f; }
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
            color: #0f0f0f;
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
    `},yu={Wrapper:ge.header`
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
    `,Main:ge.div`
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
    `};var Ku={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ju=yr.createContext&&yr.createContext(Ku),dm=["attr","size","title"];function um(s,c){if(s==null)return{};var l=pm(s,c),u,g;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(s);for(g=0;g<j.length;g++)u=j[g],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(s,u)&&(l[u]=s[u])}return l}function pm(s,c){if(s==null)return{};var l={};for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){if(c.indexOf(u)>=0)continue;l[u]=s[u]}return l}function Ei(){return Ei=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},Ei.apply(this,arguments)}function Nu(s,c){var l=Object.keys(s);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);c&&(u=u.filter(function(g){return Object.getOwnPropertyDescriptor(s,g).enumerable})),l.push.apply(l,u)}return l}function zi(s){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Nu(Object(l),!0).forEach(function(u){fm(s,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(l)):Nu(Object(l)).forEach(function(u){Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(l,u))})}return s}function fm(s,c,l){return c=hm(c),c in s?Object.defineProperty(s,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[c]=l,s}function hm(s){var c=mm(s,"string");return typeof c=="symbol"?c:c+""}function mm(s,c){if(typeof s!="object"||!s)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var u=l.call(s,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(s)}function Gu(s){return s&&s.map((c,l)=>yr.createElement(c.tag,zi({key:l},c.attr),Gu(c.child)))}function Z(s){return c=>yr.createElement(xm,Ei({attr:zi({},s.attr)},c),Gu(s.child))}function xm(s){var c=l=>{var{attr:u,size:g,title:j}=s,C=um(s,dm),E=g||l.size||"1em",z;return l.className&&(z=l.className),s.className&&(z=(z?z+" ":"")+s.className),yr.createElement("svg",Ei({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,C,{className:z,style:zi(zi({color:s.color||l.color},l.style),s.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),j&&yr.createElement("title",null,j),s.children)};return ju!==void 0?yr.createElement(ju.Consumer,null,l=>c(l)):c(Ku)}function gm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function un(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function vm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(s)}function ym(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(s)}function Xu(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function Ue(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function We(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(s)}function jm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function I(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(s)}function Nm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(s)}function qu(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 10 20 15 15 20"},child:[]},{tag:"path",attr:{d:"M4 4v7a4 4 0 0 0 4 4h12"},child:[]}]})(s)}function fn(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function wm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function km(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(s)}function Zu(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(s)}function bm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(s)}function Ii(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function Sm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(s)}function Cm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function Em(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(s)}function Ju(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(s)}function Ka(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function zm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(s)}function mt(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function Im(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Lm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(s)}function Tm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(s)}function _m(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(s)}function Pm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(s)}function Bm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(s)}function Om(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function Rm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function Am(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(s)}function Ga(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function Fm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(s)}function Mm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function Li(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(s)}function Dm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(s)}function Um(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(s)}function Wm(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(s)}function no(s){return Z({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}const Hm=()=>{const[s,c]=fe.useState(!1),[l,u]=fe.useState("dark");fe.useEffect(()=>{const E=localStorage.getItem("app-theme")||"dark";u(E),E==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),fe.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const g=fe.useMemo(()=>l==="light"?"dark":"light",[l]),j=()=>{u(g)};return n.jsx(yu.Wrapper,{children:n.jsx(yu.Main,{children:n.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[n.jsxs("div",{className:"logoNameWrapper",children:[n.jsxs("div",{className:"logoWrapper",children:[!s&&n.jsx("div",{className:"logoSkeleton"}),n.jsx("img",{src:"/c-core-notes/logo.png",alt:"C Core Notes logo",onLoad:()=>c(!0),style:{opacity:s?1:0}})]}),n.jsxs("div",{className:"nameWrapper",children:[n.jsx("div",{className:"title",children:"c-core-notes"}),n.jsx("div",{className:"subTitle",children:"At-a-glance c revision"})]})]}),n.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${g} theme`,title:`Switch to ${g}`,children:[n.jsx("span",{className:"icon",children:l==="light"?n.jsx(Om,{}):n.jsx(Mm,{})}),n.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},Da={Wrapper:ge.footer`
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
    `,Links:ge.nav`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;

        @media (width < 680px) {
            justify-content: flex-start;
        }
    `,IconLink:ge.a`
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
    `},$m=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:Cm},{label:"GitHub",href:"https://github.com/a2rp",icon:Sm},{label:"CodePen",href:"https://codepen.io/ash1198",icon:I},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:Lm},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:km},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:Wm},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:_m},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Bm},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Nm},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:zm}],Vm=s=>s.startsWith("mailto:")?{}:{target:"_blank",rel:"noopener noreferrer"},Qm=()=>n.jsxs(Da.Wrapper,{children:[n.jsxs("div",{className:"copyright",children:["Copyright © ",new Date().getFullYear()," "," ",n.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),n.jsx(Da.Links,{"aria-label":"Social and support links",children:$m.map(({label:s,href:c,icon:l})=>n.jsx(Da.IconLink,{href:c,title:s,"aria-label":s,...Vm(c),children:fe.createElement(l,{"aria-hidden":"true"})},s))})]}),wu={Wrapper:ge.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ge.div`
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
    `},ep=()=>{const s="2026-10-02T13:30:27.073Z",c=new Date(s).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return n.jsx(wu.Wrapper,{children:n.jsxs(wu.Content,{children:[n.jsxs("div",{className:"top",children:[n.jsxs("div",{className:"badge",children:[n.jsx("span",{className:"badgeIcon",children:n.jsx(Li,{})}),"C core revision"]}),n.jsx("h2",{className:"heading",children:"About C Programming"}),n.jsx("p",{className:"sub",children:"A low level, procedural language where you learn what a program really is - memory, compilation, and control."})]}),n.jsxs("div",{className:"grid",children:[n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(fn,{})}),"What is C"]}),n.jsx("p",{className:"p",children:"C is a general purpose, procedural programming language created in 1972 by Dennis Ritchie. It is one of the most influential languages and forms the foundation of many modern languages and systems."})]}),n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(Ju,{})}),"Why C matters"]}),n.jsx("p",{className:"p",children:"C gives direct access to memory through pointers and manual memory management. This makes it fast and powerful, but it also requires careful thinking about stack, heap, memory layout, and safety."})]}),n.jsxs("div",{className:"card wide",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(Li,{})}),"About c-core-notes"]}),n.jsx("p",{className:"p",children:"The c-core-notes project is designed as a focused revision system. It organizes syntax, control flow, functions, arrays, pointers, structures, dynamic memory, and file handling into a structured single page reference. The goal is strong fundamentals, clear memory concepts, and clean logical thinking."}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"metaLeft",children:[n.jsx("span",{className:"metaIcon",children:n.jsx(jm,{})}),n.jsx("span",{className:"metaLabel",children:"Last updated"})]}),n.jsx("span",{className:"metaValue",children:c})]})]})]})]})})},Ym={Wrapper:ge.section`
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
    `},Km=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(Ym.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Li,{})}),n.jsx("span",{className:"title",children:"Introduction to C"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"C is where you learn how programs work at a lower level. You write logic, control memory, and understand the compilation pipeline. If you learn C properly, every other language becomes easier."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(fn,{})}),"What is C"]}),n.jsx("p",{className:"p",children:"C is a general purpose, procedural programming language used for systems programming, embedded software, and performance critical code. It gives you direct access to memory and low level control."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(ym,{})}),"History of C"]}),n.jsx("p",{className:"p",children:"C was created by Dennis Ritchie at Bell Labs in the early 1970s. It was designed to build the Unix operating system and became one of the most widely used languages."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(no,{})}),"Why C is important"]}),n.jsx("p",{className:"p",children:"C teaches core computer science concepts like memory layout, pointers, compilation, and performance. It is still used in OS kernels, device drivers, embedded systems, databases, and high performance libraries."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(mt,{})}),"Compiled language concept"]}),n.jsx("p",{className:"p",children:"C is a compiled language. Your C code is converted into machine code (binary instructions) before it runs. This is different from languages that mostly run inside a runtime or virtual machine."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - compile and run"]}),n.jsx("pre",{className:"code",children:`gcc main.c -o app
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
./app`})]}),n.jsx("div",{className:"hint",children:'If you see "undefined reference" errors, that is usually a linking problem.'})]})]})]})},Gm={Wrapper:ge.section`
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
    `},Xm=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(Gm.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(I,{})}),n.jsx("span",{className:"title",children:"Basic Syntax"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Comments - single line and multi line"}),n.jsx("pre",{className:"code",children:`// single line comment

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

// output - Age is 25`})]})]})]})},qm={Wrapper:ge.section`
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
    `},Zm=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(qm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(fn,{})}),n.jsx("span",{className:"title",children:"Operators"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx(Yr,{title:"Arithmetic operators",code:`int a = 10;
int b = 3;

printf("%d\\n", a + b); // 13
printf("%d\\n", a - b); // 7
printf("%d\\n", a * b); // 30
printf("%d\\n", a / b); // 3
printf("%d\\n", a % b); // 1`}),n.jsx(Yr,{title:"Relational operators",code:`int x = 5;
int y = 10;

printf("%d\\n", x < y);  // 1
printf("%d\\n", x > y);  // 0
printf("%d\\n", x == y); // 0
printf("%d\\n", x != y); // 1`}),n.jsx(Yr,{title:"Logical operators",code:`int a = 1;
int b = 0;

printf("%d\\n", a && b); // 0
printf("%d\\n", a || b); // 1
printf("%d\\n", !a);     // 0`}),n.jsx(Yr,{title:"Assignment operators",code:`int n = 5;

n += 3;  // n = 8
n -= 2;  // n = 6
n *= 2;  // n = 12
n /= 3;  // n = 4`}),n.jsx(Yr,{title:"Increment and decrement",code:`int i = 5;

printf("%d\\n", i++); // 5
printf("%d\\n", i);   // 6

printf("%d\\n", ++i); // 7`}),n.jsx(Yr,{title:"Bitwise operators",code:`int a = 5;  // 0101
int b = 3;  // 0011

printf("%d\\n", a & b); // 1
printf("%d\\n", a | b); // 7
printf("%d\\n", a ^ b); // 6
printf("%d\\n", a << 1); // 10`}),n.jsx(Yr,{title:"Ternary operator",code:`int age = 18;

char *result = (age >= 18) ? "Adult" : "Minor";
printf("%s\\n", result); // Adult`}),n.jsx(Yr,{title:"Operator precedence",code:`int result = 5 + 2 * 3;
printf("%d\\n", result); // 11

// multiplication runs before addition`}),n.jsx(Yr,{title:"Type casting",code:`int a = 5;
int b = 2;

float result = (float)a / b;
printf("%.2f\\n", result); // 2.50`})]})]})},Yr=({title:s,code:c})=>n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:s}),n.jsx("pre",{className:"code",children:c})]}),Jm={Wrapper:ge.section`
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
    `},ex=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(Jm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ii,{})}),n.jsx("span",{className:"title",children:"Control Flow"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Control flow determines how your program makes decisions and repeats actions. In C, this includes conditions and loops."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"if"}),n.jsx("p",{className:"p",children:"Executes code only if the condition is true."}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - 2`})]})]})]})},rx={Wrapper:ge.section`
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
    `},tx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(rx.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(I,{})}),n.jsx("span",{className:"title",children:"Functions"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Functions help break programs into reusable blocks. They improve structure, readability, and modular design."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function declaration"}),n.jsx("p",{className:"p",children:"A declaration tells the compiler about a function before it is used."}),n.jsx("pre",{className:"code",children:"int add(int a, int b); // declaration"})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Function definition"}),n.jsx("p",{className:"p",children:"A definition contains the actual implementation."}),n.jsx("pre",{className:"code",children:`int add(int a, int b) {
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

// output - 10`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx(Rm,{})," Recursion"]}),n.jsx("p",{className:"p",children:"Recursion is when a function calls itself. It must have a base condition to stop."}),n.jsx("pre",{className:"code",children:`int factorial(int n) {
    if (n == 1)
        return 1;
    return n * factorial(n - 1);
}

printf("%d", factorial(4));

// output - 24`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx(mt,{})," Scope of variables"]}),n.jsx("p",{className:"p",children:"Scope defines where a variable can be accessed. Local variables exist inside functions. Global variables exist outside functions."}),n.jsx("pre",{className:"code",children:`int globalVar = 10;

void test() {
    int localVar = 5;
}`})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Storage classes - auto static extern register"}),n.jsx("p",{className:"p",children:"Storage classes define lifetime and visibility."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," auto - default local variable"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," static - retains value between function calls"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," extern - refers to global variable from another file"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," register - suggests storing variable in CPU register"]})]}),n.jsx("pre",{className:"code",children:`void counter() {
    static int count = 0;
    count++;
    printf("%d\\n", count);
}

// calling counter twice
// output - 1
// output - 2`})]})]})]})},nx={Wrapper:ge.section`
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
    `},ox=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(nx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Em,{})}),n.jsx("span",{className:"title",children:"Arrays"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"An array is a fixed size collection of elements of the same data type stored in continuous memory. Arrays make iteration fast and predictable, and they are the base of strings and many data structures."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"One dimensional arrays"}),n.jsx("p",{className:"p",children:"A 1D array stores values in a single line. Indexing starts from 0."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - 1D array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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

// b looks like - {1, 2, 0, 0, 0}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIconMini",children:n.jsx(Ju,{})}),"Memory layout of arrays"]}),n.jsx("p",{className:"p",children:"Arrays are stored in contiguous memory. The address of a[i] is calculated using base address plus i multiplied by size of element. This is why indexing is fast."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - addresses"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int a[3] = {10, 20, 30};

  printf("%p\\n", (void*)&a[0]);
  printf("%p\\n", (void*)&a[1]);
  printf("%p\\n", (void*)&a[2]);

  return 0;
}

// output - addresses will increase by sizeof(int) each time`})]}),n.jsxs("div",{className:"hint",children:[n.jsx("span",{className:"hintIcon",children:n.jsx(qu,{})}),"In most systems, sizeof(int) is 4 bytes, so addresses usually differ by 4."]})]})]})]})},ix={Wrapper:ge.section`
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
    `},sx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(ix.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Um,{})}),n.jsx("span",{className:"title",children:"Strings"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"In C, a string is not a built in type. It is simply a character array that ends with a special null character '\\0'."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{children:"Character arrays"}),n.jsx("p",{className:"p",children:"Strings are stored in arrays of characters."}),n.jsx("pre",{className:"code",children:`char name[] = "Ashish";

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
// output - o`}),n.jsx("p",{className:"p",children:"Pointer based strings are powerful but modifying string literals directly can cause undefined behavior."})]})]})]})},ax={Wrapper:ge.section`
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
    `},lx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(ax.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(no,{})}),n.jsx("span",{className:"title",children:"Pointers"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Pointers store memory addresses. They let you work directly with memory, build efficient data structures, and write low level code. This is where C becomes powerful - and also where bugs become dangerous."})}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"What is a pointer"}),n.jsx("p",{className:"p",children:"A pointer is a variable that stores the address of another variable. It does not store the value directly."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int x = 10;
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

// output - No address`})]}),n.jsxs("div",{className:"danger",children:[n.jsx("span",{className:"dangerIcon",children:n.jsx(un,{})}),"Never dereference a null pointer - it causes a crash."]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Dangling pointer"}),n.jsx("p",{className:"p",children:"A dangling pointer points to memory that has been freed or gone out of scope. Accessing it leads to undefined behavior."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`int *p = (int *)malloc(sizeof(int));
*p = 42;

free(p);
p = NULL; // fix - avoid dangling pointer

// output - memory freed safely`})]}),n.jsx("div",{className:"hint",children:"After free, set pointer to NULL to avoid accidental use."})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Wild pointer"}),n.jsx("p",{className:"p",children:"A wild pointer is an uninitialized pointer. It points to a random address. Dereferencing it can crash or corrupt memory."}),n.jsxs("div",{className:"danger",children:[n.jsx("span",{className:"dangerIcon",children:n.jsx(un,{})}),"Always initialize pointers - use NULL if you do not have a valid address yet."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Good practice"]}),n.jsx("pre",{className:"code",children:`int *p = NULL;

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

// output - 5`})]}),n.jsx("div",{className:"hint",children:"Read it as - fn is a pointer to a function that takes (int, int) and returns int."})]}),n.jsxs("div",{className:"endNote",children:[n.jsx("span",{className:"endIcon",children:n.jsx(fn,{})}),"This is where C becomes powerful."]})]})]})},cx={Wrapper:ge.section`
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
    `},dx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(cx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Xu,{})}),n.jsx("span",{className:"title",children:"Structures and Unions"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Structures and unions let you group related data into a single type. struct stores all members separately. union shares memory between members."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(mt,{})}),"struct keyword"]}),n.jsx("p",{className:"p",children:"struct creates a custom type that groups multiple fields under one name. Each field has its own memory."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - define and create"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - 2 C`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Im,{})}),"Pointer to structure"]}),n.jsx("p",{className:"p",children:"A pointer can store the address of a struct. Use arrow operator -> to access members through a pointer."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - arrow operator"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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

// output - 12 B`})]}),n.jsx("div",{className:"hint",children:"typedef makes your code shorter and cleaner, especially when structs are used everywhere."})]})]})]})},ux={Wrapper:ge.section`
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
    `},px=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(ux.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(wm,{})}),n.jsx("span",{className:"title",children:"Dynamic Memory Allocation"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Dynamic memory allocation lets you request memory at runtime from the heap. This is useful when you do not know the size in advance. But it also means you must free memory yourself, otherwise memory leaks happen."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(mt,{})}),"Heap vs stack memory"]}),n.jsx("p",{className:"p",children:"The stack is fast and automatic. Local variables and function calls live on the stack. The heap is for dynamic memory that you allocate manually using malloc and friends. Heap memory stays until you free it."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"stack - automatic, function scoped, freed on return"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"heap - manual, flexible size, must free yourself"]})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"malloc"}),n.jsx("p",{className:"p",children:"malloc allocates a block of memory of given size (in bytes) on the heap. It returns a pointer to the first byte. The memory is not initialized."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - malloc int array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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

// output - 5 15 25 35`})]}),n.jsx("div",{className:"hint",children:"Do not assign realloc directly to arr without a temp. If realloc fails, you lose the original pointer and leak memory."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Dm,{})}),"free"]}),n.jsx("p",{className:"p",children:"free releases heap memory that you allocated. After freeing, set the pointer to NULL to avoid accidentally using freed memory."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - free and null"]}),n.jsx("pre",{className:"code",children:`int *p = (int*)malloc(sizeof(int));
if (p == NULL) return 1;

*p = 99;

free(p);
p = NULL; // good habit

// output - memory released safely`})]}),n.jsx("div",{className:"hint",children:"Using a pointer after free is a bug called use after free. It can crash your program."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(un,{})}),"Memory leak concept"]}),n.jsx("p",{className:"p",children:"A memory leak happens when you allocate memory but never free it. The memory stays reserved until the program ends. In long running programs, leaks can grow and cause slowdowns or crashes."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - leak vs fixed"]}),n.jsx("pre",{className:"code",children:`// leak - allocated but never freed
int *p = (int*)malloc(100 * sizeof(int));
if (p == NULL) return 1;
// no free(p) here

// fixed
int *q = (int*)malloc(100 * sizeof(int));
if (q == NULL) return 1;
free(q);
q = NULL;`})]}),n.jsx("div",{className:"hint",children:"Every malloc or calloc should have a matching free. Think in pairs - allocate then release."})]})]})]})},fx={Wrapper:ge.section`
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
    `},hx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(fx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(bm,{})}),n.jsx("span",{className:"title",children:"File Handling"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"File handling lets your C program read and write data that stays even after the program exits. The standard library uses a file pointer of type FILE* to represent an open file."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Zu,{})}),"File pointer"]}),n.jsx("p",{className:"p",children:"A file pointer is a pointer to a FILE object managed by the C runtime. You get it from fopen and use it in file functions like fprintf, fscanf, fread, fwrite, and fclose."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - FILE*"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Pm,{})}),"fseek"]}),n.jsx("p",{className:"p",children:"fseek moves the file position indicator. This allows you to jump to a specific byte offset in the file."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_SET - from beginning"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_CUR - from current position"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"})," SEEK_END - from end"]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - fseek"]}),n.jsx("pre",{className:"code",children:`FILE* fp = fopen("data.txt", "r");
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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Am,{})}),"EOF handling"]}),n.jsx("p",{className:"p",children:"EOF means end of file. For reading loops, you usually check the return value of input functions rather than comparing directly with EOF in a fragile way."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - safe line reading with EOF handling"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]}),n.jsx("div",{className:"hint",children:"For binary reads, use fread and check how many items were read. For text, prefer fgets over gets."})]})]})]})},mx={Wrapper:ge.section`
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
    `},xx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(mx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ka,{})}),n.jsx("span",{className:"title",children:"Preprocessor"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"The C preprocessor runs before compilation. It modifies your source code by expanding headers and replacing macros. Think of it as a text processing step that happens before the compiler sees the code."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(mt,{})}),"#include"]}),n.jsx("p",{className:"p",children:"#include literally inserts the contents of a header file into your source file. Use angle brackets for standard library headers and quotes for your own local headers."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - standard vs local include"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>   // standard library header
#include "utils.h"   // local project header

// output - no direct output, it changes the source before compile`})]}),n.jsx("div",{className:"hint",children:'If you see "file not found" errors, your include path is wrong or the header is missing.'})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ka,{})}),"#define"]}),n.jsx("p",{className:"p",children:"#define creates a macro. It is a replacement rule. The preprocessor replaces the macro name with its value before compilation."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - constant style macro"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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

// output - 25`})]}),n.jsx("div",{className:"hint",children:"Without parentheses, SQUARE(1 + 2) could break. That is why macros are written with extra parentheses."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ga,{})}),"Conditional compilation"]}),n.jsx("p",{className:"p",children:"Conditional compilation lets you include or exclude code depending on conditions. This is commonly used for debug logs, platform specific code, or feature flags."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - debug flag"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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

// output - no direct output, prevents duplicate definitions`})]}),n.jsx("div",{className:"hint",children:'Without header guards, including the same header twice can cause "redefinition" errors during compilation.'})]})]})]})},gx={Wrapper:ge.section`
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
    `},vx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(gx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Fm,{})}),n.jsx("span",{className:"title",children:"Bit Manipulation"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Bit manipulation means working with numbers at the bit level (0 and 1). It is heavily used in embedded systems, performance code, flags, masks, and low level utilities."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ka,{})}),"Bitwise AND OR XOR NOT"]}),n.jsx("p",{className:"p",children:"These operators work on bits. Think of them as tools for combining and checking flags."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - AND OR XOR NOT"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - depends on integer size (two's complement)`})]}),n.jsx("div",{className:"hint",children:`~a flips all bits. The numeric result depends on signed representation (two's complement). For beginners, treat it as "invert all bits".`})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(no,{})}),"Left shift"]}),n.jsx("p",{className:"p",children:"Left shift moves bits to the left. For positive numbers, shifting left by 1 usually multiplies by 2."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - left shift"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x = 3; // 0011
  printf("%d\\n", x << 1); // 0110
  printf("%d\\n", x << 2); // 1100

  return 0;
}

// output - 6
// output - 12`})]}),n.jsx("div",{className:"hint",children:"For signed integers, shifting into the sign bit can be tricky. Use unsigned for bit operations when possible."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(no,{})}),"Right shift"]}),n.jsx("p",{className:"p",children:"Right shift moves bits to the right. For positive numbers, shifting right by 1 usually divides by 2."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - right shift"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
// output - bit is 1`})]}),n.jsx("div",{className:"hint",children:"Use unsigned int and 1u for masks. It avoids sign issues and makes shifts safer."})]})]})]})},yx={Wrapper:ge.section`
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
    `},jx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(yx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(no,{})}),n.jsx("span",{className:"title",children:"Advanced Concepts"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"These topics appear in real systems code and interviews. The goal is not to memorize everything, but to understand what can go wrong and why C requires careful thinking."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Li,{})}),"Command line arguments"]}),n.jsxs("p",{className:"p",children:["main can receive arguments from the command line.",n.jsx("code",{children:"argc"})," is the count, and ",n.jsx("code",{children:"argv"})," is an array of strings. ",n.jsx("code",{children:"argv[0]"})," is the program name."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
*/`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(fn,{})}),"const keyword"]}),n.jsx("p",{className:"p",children:"const means the variable should not be modified through that name. It helps prevent accidental changes and improves readability."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  const int maxUsers = 100;
  printf("%d\\n", maxUsers);

  // maxUsers = 200; // error - assignment of read-only variable
  return 0;
}

// output - 100`})]}),n.jsx("div",{className:"hint",children:"const does not always mean the value is stored in ROM. It means you are not allowed to modify it through that identifier."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(gm,{})}),"volatile keyword"]}),n.jsx("p",{className:"p",children:'volatile tells the compiler "this value can change unexpectedly" - for example hardware registers or a variable changed by an interrupt. It prevents the compiler from optimizing away repeated reads.'}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Concept example"]}),n.jsx("pre",{className:"code",children:`volatile int flag = 0;

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
*/`})]}),n.jsx("div",{className:"hint",children:"Padding is normal. It improves performance. In low level code, struct size matters, so alignment is important."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(un,{})}),"Undefined behavior"]}),n.jsx("p",{className:"p",children:"Undefined behavior means the C standard does not define what happens. The program might crash, work sometimes, or do something unpredictable. Compilers are allowed to make aggressive optimizations assuming undefined behavior never happens."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - reading uninitialized variable"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int x;
  printf("%d\\n", x); // undefined behavior - x is uninitialized
  return 0;
}

/*
output - unpredictable garbage value
*/`})]}),n.jsx("div",{className:"hint",children:"Another common undefined behavior is accessing an array out of bounds."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(un,{})}),"Segmentation fault concept"]}),n.jsx("p",{className:"p",children:"A segmentation fault happens when your program tries to access memory it is not allowed to access. This often comes from invalid pointers, freed memory usage, or writing outside array bounds."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - dereferencing NULL"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  int *p = NULL;
  *p = 10; // crash - invalid memory access
  printf("%d\\n", *p);
  return 0;
}

/*
output - program crashes (segmentation fault)
*/`})]}),n.jsx("div",{className:"hint",children:"Most segfaults are pointer mistakes. Use a debugger and print statements to locate where the invalid access happens."})]})]})]})},Nx={Wrapper:ge.section`
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
    `},wx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(Nx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ii,{})}),n.jsx("span",{className:"title",children:"Data Structures using C"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Data structures store data in a way that makes operations like insert, delete, search, and traversal efficient. In C, most data structures are built using pointers and dynamic memory allocation."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ii,{})}),"Linked list"]}),n.jsx("p",{className:"p",children:"A linked list is a sequence of nodes where each node stores data and a pointer to the next node. It is useful when you need dynamic size and frequent insertions or deletions."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Node structure and simple insert at head"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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
}`})]}),n.jsx("div",{className:"hint",children:"Important - always free allocated nodes when done to avoid memory leaks."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(mt,{})}),"Stack"]}),n.jsx("p",{className:"p",children:"A stack follows LIFO - Last In First Out. Common operations are push, pop, and peek. You can implement it using an array or a linked list."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Stack using array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]}),n.jsx("div",{className:"hint",children:"Stack is used in function calls, undo operations, and expression evaluation."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Xu,{})}),"Queue"]}),n.jsx("p",{className:"p",children:"A queue follows FIFO - First In First Out. Common operations are enqueue and dequeue. A circular queue is often used for fixed size array implementations."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Simple queue using array"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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
}`})]}),n.jsx("div",{className:"hint",children:"For real usage, prefer a circular queue to reuse space."})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(qu,{})}),"Trees basics"]}),n.jsx("p",{className:"p",children:"A tree is a hierarchical data structure made of nodes. Each node can have children. The most common type is a binary tree where each node has up to two children - left and right."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Binary tree node and creation"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsx("h3",{className:"h3",children:"Implementation using pointers"}),n.jsx("p",{className:"p",children:"In C, pointers are the core tool behind dynamic data structures. A node usually stores data plus one or more pointers to other nodes. malloc allocates memory, and pointers connect nodes together."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Linked list - each node points to next"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Stack with linked list - push and pop at head"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Queue with linked list - enqueue at tail, dequeue at head"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Trees - each node points to children"]})]}),n.jsx("div",{className:"hint",children:"Rule - if you use malloc, you must plan where free will happen."})]})]})]})},kx={Wrapper:ge.section`
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
    `},bx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(kx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ii,{})}),n.jsx("span",{className:"title",children:"C vs C++"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"C and C++ are closely related languages, but they follow different programming paradigms. C focuses on procedural programming, while C++ adds object oriented features on top of C."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(fn,{})}),"Key differences"]}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C supports procedural programming only."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ supports procedural and object oriented programming."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C does not support classes and objects."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ supports classes, inheritance, polymorphism, and encapsulation."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C uses printf and scanf for IO."]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"C++ uses cout and cin for IO."]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"C example"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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

// output - Hello from C++`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(mt,{})}),"Procedural vs Object Oriented"]}),n.jsx("p",{className:"p",children:"Procedural programming focuses on functions and step by step instructions. Object oriented programming focuses on objects that combine data and behavior."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Procedural style in C"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

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

// output - Hello`})]}),n.jsx("div",{className:"hint",children:"C++ is often described as an extension of C, but modern C++ is much more powerful and feature rich than C."})]})]})]})},Sx={Wrapper:ge.section`
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
    `},Cx=()=>{const[s,c]=fe.useState(!0),l=()=>c(u=>!u);return n.jsxs(Sx.Wrapper,{className:s?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":s,children:[n.jsx("span",{className:"chev",children:s?n.jsx(Ue,{}):n.jsx(We,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ga,{})}),n.jsx("span",{className:"title",children:"Best Practices"}),n.jsx("span",{className:"meta",children:s?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${s?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"In C, small mistakes can become big bugs. Best practices help you write code that is readable, testable, and safer. The main idea is simple - control your memory, validate inputs, and keep your code organized."})}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(mt,{})}),"Code structure"]}),n.jsx("p",{className:"p",children:"Keep each file focused. Split large programs into modules. Use meaningful function names and keep functions small. One function should do one job."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - simple project layout"]}),n.jsx("pre",{className:"code",children:`// src layout
// - src/main.c
// - src/math_utils.c
// - include/math_utils.h

// output - easier to read and maintain`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Zu,{})}),"Header file separation"]}),n.jsx("p",{className:"p",children:"Put function declarations in headers and implementations in .c files. This keeps modules clean and reusable. Always use include guards to avoid multiple include problems."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - header and source separation"]}),n.jsx("pre",{className:"code",children:`// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif

// math_utils.c
#include "math_utils.h"

int add(int a, int b) {
  return a + b;
}

// output - clean module with proper guard`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(un,{})}),"Defensive programming"]}),n.jsx("p",{className:"p",children:"Assume inputs can be wrong and memory allocation can fail. Check return values. Validate pointers before using them. Return early when something is invalid."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - check malloc and inputs"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>
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
}`})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Tm,{})}),"Avoiding buffer overflow"]}),n.jsx("p",{className:"p",children:"Buffer overflow happens when you write more data than a buffer can hold. This can crash your program and is also a major security issue. Prefer safer functions like fgets instead of gets. Always set size limits."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - unsafe vs safe input"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  char name[10];

  // unsafe - never use gets
  // gets(name);

  // safe - reads up to sizeof(name) - 1 chars
  fgets(name, sizeof(name), stdin);

  printf("%s", name);
  // output - whatever user typed (up to 9 chars + \\0)
  return 0;
}`})]}),n.jsx("div",{className:"hint",children:'Tip - avoid scanf("%s", name) for long user input because it can overflow unless you provide a width limit.'})]}),n.jsxs("div",{className:"section",children:[n.jsxs("h3",{className:"h3",children:[n.jsx("span",{className:"hIcon",children:n.jsx(Ga,{})}),"Secure coding basics"]}),n.jsx("p",{className:"p",children:"Secure C code is about preventing undefined behavior and validating everything. Main rules - initialize variables, check bounds, check return values, avoid dangerous functions, and free memory properly."}),n.jsxs("ul",{className:"bullets",children:[n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Initialize pointers to NULL"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Check bounds before writing to arrays"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Prefer snprintf over sprintf"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Use fgets for input instead of gets"]}),n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),"Free allocated memory and set pointer to NULL after free"]})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(I,{})}),"Example - safe string formatting"]}),n.jsx("pre",{className:"code",children:`#include <stdio.h>

int main() {
  char out[12];

  // safe - protects buffer size
  snprintf(out, sizeof(out), "%s", "hello");

  printf("%s\\n", out);
  // output - hello
  return 0;
}`})]})]})]})]})},ku=[["about","About C",ep],["intro","C Introduction",Km],["syntax","Basic Syntax",Xm],["operators","Operators",Zm],["flow","Control Flow",ex],["functions","Functions",tx],["arrays","Arrays",ox],["strings","C Strings",sx],["pointers","Pointers",lx],["structures","Structures and Unions",dx],["memory","Dynamic Memory",px],["files","File Handling",hx],["preprocessor","Preprocessor",xx],["bits","Bit Manipulation",vx],["advanced","Advanced Concepts",jx],["data-structures","Data Structures",wx],["c-cpp","C vs C++",bx],["best-practices","Best Practices",Cx]],Ex=()=>{var C;const[s,c]=fe.useState("about"),[l,u]=fe.useState(!1),g=fe.useRef(null),j=((C=ku.find(([E])=>E===s))==null?void 0:C[2])||ep;return fe.useEffect(()=>{var E;(E=g.current)==null||E.scrollTo({top:0,behavior:"auto"}),u(!1)},[s]),fe.useEffect(()=>{const E=g.current;if(!E)return;const z=()=>u(E.scrollTop>240);return z(),E.addEventListener("scroll",z,{passive:!0}),()=>E.removeEventListener("scroll",z)},[]),n.jsxs(Ma.Wrapper,{children:[n.jsx(Ma.Header,{children:n.jsx(Hm,{})}),n.jsxs(Ma.Main,{ref:g,children:[n.jsxs("div",{className:"workspaceLayout",children:[n.jsxs("aside",{className:"sideMenu","aria-label":"C notes topics",children:[n.jsx("p",{className:"menuLabel",children:"Study guide"}),n.jsx("nav",{children:ku.map(([E,z])=>n.jsx("button",{type:"button",className:s===E?"active":"",onClick:()=>c(E),children:z},E))})]}),n.jsx("section",{className:"contentWrapper","aria-live":"polite",children:n.jsx(j,{})})]}),l&&n.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var E;return(E=g.current)==null?void 0:E.scrollTo({top:0,behavior:"smooth"})},children:n.jsx(vm,{"aria-hidden":"true"})}),n.jsx("div",{className:"footerWrapper",children:n.jsx(Qm,{})})]})]})};ah.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(Ex,{})}));
