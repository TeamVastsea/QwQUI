System.register("Button",["react"],function(Pe,pr){"use strict";var U;return{setters:[C=>{U=C.default}],execute:function(){var C={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function je(){if(ee)return P;ee=1;var N=U,x=Symbol.for("react.element"),B=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,I=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function k(b,c,T){var p,h={},E=null,$=null;T!==void 0&&(E=""+T),c.key!==void 0&&(E=""+c.key),c.ref!==void 0&&($=c.ref);for(p in c)m.call(c,p)&&!W.hasOwnProperty(p)&&(h[p]=c[p]);if(b&&b.defaultProps)for(p in c=b.defaultProps,c)h[p]===void 0&&(h[p]=c[p]);return{$$typeof:x,type:b,key:E,ref:$,props:h,_owner:I.current}}return P.Fragment=B,P.jsx=k,P.jsxs=k,P}var j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function xe(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var N=U,x=Symbol.for("react.element"),B=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),b=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),ne=Symbol.iterator,ke="@@iterator";function De(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[ke];return typeof r=="function"?r:null}var O=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Fe("error",e,t)}}function Fe(e,r,t){{var n=O.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ae=!1,Ie=!1,We=!1,$e=!1,Ye=!1,ae;ae=Symbol.for("react.module.reference");function Le(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===W||Ye||e===I||e===T||e===p||$e||e===$||Ae||Ie||We||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===h||e.$$typeof===k||e.$$typeof===b||e.$$typeof===c||e.$$typeof===ae||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function oe(e){return e.displayName||"Context"}function y(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case B:return"Portal";case W:return"Profiler";case I:return"StrictMode";case T:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b:var r=e;return oe(r)+".Consumer";case k:var t=e;return oe(t._context)+".Provider";case c:return Ve(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:y(e.type)||"Memo";case E:{var i=e,u=i._payload,o=i._init;try{return y(o(u))}catch{return null}}}return null}var R=Object.assign,D=0,ie,ue,se,le,fe,ce,de;function ve(){}ve.__reactDisabledLog=!0;function Me(){{if(D===0){ie=console.log,ue=console.info,se=console.warn,le=console.error,fe=console.group,ce=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}D++}}function Ue(){{if(D--,D===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:ie}),info:R({},e,{value:ue}),warn:R({},e,{value:se}),error:R({},e,{value:le}),group:R({},e,{value:fe}),groupCollapsed:R({},e,{value:ce}),groupEnd:R({},e,{value:de})})}D<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=O.ReactCurrentDispatcher,q;function Y(e,r,t){{if(q===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);q=n&&n[1]||""}return`
`+q+e}}var K=!1,L;{var Ne=typeof WeakMap=="function"?WeakMap:Map;L=new Ne}function pe(e,r){if(!e||K)return"";{var t=L.get(e);if(t!==void 0)return t}var n;K=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=J.current,J.current=null,Me();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(v){n=v}Reflect.construct(e,[],o)}else{try{o.call()}catch(v){n=v}e.call(o.prototype)}}else{try{throw Error()}catch(v){n=v}e()}}catch(v){if(v&&n&&typeof v.stack=="string"){for(var a=v.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,l=d.length-1;s>=1&&l>=0&&a[s]!==d[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==d[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==d[l]){var g=`
`+a[s].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&L.set(e,g),g}while(s>=1&&l>=0);break}}}finally{K=!1,J.current=u,Ue(),Error.prepareStackTrace=i}var w=e?e.displayName||e.name:"",_=w?Y(w):"";return typeof e=="function"&&L.set(e,_),_}function Be(e,r,t){return pe(e,!1)}function Je(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function V(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Je(e));if(typeof e=="string")return Y(e);switch(e){case T:return Y("Suspense");case p:return Y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Be(e.render);case h:return V(e.type,r,t);case E:{var n=e,i=n._payload,u=n._init;try{return V(u(i),r,t)}catch{}}}return""}var F=Object.prototype.hasOwnProperty,ge={},ye=O.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);ye.setExtraStackFrame(t)}else ye.setExtraStackFrame(null)}function qe(e,r,t,n,i){{var u=Function.call.bind(F);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(M(i),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),M(null)),a instanceof Error&&!(a.message in ge)&&(ge[a.message]=!0,M(i),f("Failed %s type: %s",t,a.message),M(null))}}}var Ke=Array.isArray;function G(e){return Ke(e)}function Ge(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ze(e){try{return he(e),!1}catch{return!0}}function he(e){return""+e}function be(e){if(ze(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ge(e)),he(e)}var A=O.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},Ee,Re,z;z={};function He(e){if(F.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ze(e){if(F.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Qe(e,r){if(typeof e.ref=="string"&&A.current&&r&&A.current.stateNode!==r){var t=y(A.current.type);z[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',y(A.current.type),e.ref),z[t]=!0)}}function er(e,r){{var t=function(){Ee||(Ee=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function rr(e,r){{var t=function(){Re||(Re=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var tr=function(e,r,t,n,i,u,o){var a={$$typeof:x,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function nr(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(be(t),a=""+t),Ze(r)&&(be(r.key),a=""+r.key),He(r)&&(d=r.ref,Qe(r,i));for(u in r)F.call(r,u)&&!Xe.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&er(o,l),d&&rr(o,l)}return tr(e,a,d,i,n,A.current,o)}}var X=O.ReactCurrentOwner,_e=O.ReactDebugCurrentFrame;function S(e){if(e){var r=e._owner,t=V(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}var H;H=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===x}function me(){{if(X.current){var e=y(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ar(e){return""}var Te={};function or(e){{var r=me();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Oe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=or(r);if(Te[t])return;Te[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+y(e._owner.type)+"."),S(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),S(null)}}function Se(e,r){{if(typeof e!="object")return;if(G(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Oe(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=De(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Z(o.value)&&Oe(o.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=y(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!H){H=!0;var i=y(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ur(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){S(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),S(null);break}}e.ref!==null&&(S(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),S(null))}}var we={};function Ce(e,r,t,n,i,u){{var o=Le(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=ar();d?a+=d:a+=me();var s;e===null?s="null":G(e)?s="array":e!==void 0&&e.$$typeof===x?(s="<"+(y(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=nr(e,r,t,i,u);if(l==null)return l;if(o){var g=r.children;if(g!==void 0)if(n)if(G(g)){for(var w=0;w<g.length;w++)Se(g[w],e);Object.freeze&&Object.freeze(g)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Se(g,e)}if(F.call(r,"key")){var _=y(e),v=Object.keys(r).filter(function(vr){return vr!=="key"}),Q=v.length>0?"{key: someKey, "+v.join(": ..., ")+": ...}":"{key: someKey}";if(!we[_+Q]){var dr=v.length>0?"{"+v.join(": ..., ")+": ...}":"{}";f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Q,_,dr,_),we[_+Q]=!0}}return e===m?ur(l):ir(l),l}}function sr(e,r,t){return Ce(e,r,t,!0)}function lr(e,r,t){return Ce(e,r,t,!1)}var fr=lr,cr=sr;j.Fragment=m,j.jsx=fr,j.jsxs=cr}()),j}process.env.NODE_ENV==="production"?C.exports=je():C.exports=xe();var te=C.exports;const gr=Pe("Button",()=>te.jsx(te.Fragment,{children:"hello world"}))}}});
