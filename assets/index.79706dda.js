var W=Object.defineProperty;var a=(e,t)=>W(e,"name",{value:t,configurable:!0});import{r}from"./index.9d85c6d0.js";import{$ as q,a as L}from"./index.module.eaf2fdf7.js";import{r as F}from"./index.88f838d2.js";import{j as b,F as k}from"./jsx-runtime.b0b91caa.js";import{I as K,r as X}from"./IconBase.esm.fc5a238b.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}a(y,"_extends$1");function Y(e,t){const n=r.exports.createContext(t);function o(s){const{children:d,...l}=s,i=r.exports.useMemo(()=>l,Object.values(l));return r.exports.createElement(n.Provider,{value:i},d)}a(o,"Provider");function c(s){const d=r.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return a(c,"useContext"),o.displayName=e+"Provider",[o,c]}a(Y,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function H(e,t=[]){let n=[];function o(s,d){const l=r.exports.createContext(d),i=n.length;n=[...n,d];function u(f){const{scope:p,children:x,...$}=f,P=(p==null?void 0:p[e][i])||l,S=r.exports.useMemo(()=>$,Object.values($));return r.exports.createElement(P.Provider,{value:S},x)}a(u,"Provider");function h(f,p){const x=(p==null?void 0:p[e][i])||l,$=r.exports.useContext(x);if($)return $;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${s}\``)}return a(h,"useContext"),u.displayName=s+"Provider",[u,h]}a(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=a(()=>{const s=n.map(d=>r.exports.createContext(d));return a(function(l){const i=(l==null?void 0:l[e])||s;return r.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:i}}),[l,i])},"useScope")},"createScope");return c.scopeName=e,[o,Z(c,...t)]}a(H,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Z(...e){const t=e[0];if(e.length===1)return t;const n=a(()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return a(function(s){const d=o.reduce((l,{useScope:i,scopeName:u})=>{const f=i(s)[`__scope${u}`];return{...l,...f}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}a(Z,"$c512c27ab02ef895$var$composeContextScopes");function M(e,t,{checkForDefaultPrevented:n=!0}={}){return a(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}a(M,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function I(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}a(I,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function G({prop:e,defaultProp:t,onChange:n=a(()=>{},"onChange")}){const[o,c]=J({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:o,l=I(n),i=r.exports.useCallback(u=>{if(s){const f=typeof u=="function"?u(e):u;f!==e&&l(f)}else c(u)},[s,e,c,l]);return[d,i]}a(G,"$71cd76cc60e0454e$export$6f32135080cb4c3");function J({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,c=r.exports.useRef(o),s=I(t);return r.exports.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}a(J,"$71cd76cc60e0454e$var$useUncontrolledState");function Q(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}a(Q,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const O=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function V(e){const[t,n]=r.exports.useState(void 0);return O(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let d,l;if("borderBoxSize"in s){const i=s.borderBoxSize,u=Array.isArray(i)?i[0]:i;d=u.inlineSize,l=u.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}a(V,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},A.apply(this,arguments)}a(A,"_extends");const ee=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],T=ee.reduce((e,t)=>{const n=r.exports.forwardRef((o,c)=>{const{asChild:s,...d}=o,l=s?q:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(l,A({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),te="Label",[ye,ne]=Y(te,{id:void 0,controlRef:{current:null}}),oe=a(e=>{const t=ne("LabelConsumer"),{controlRef:n}=t;return r.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function re(e,t){return r.exports.useReducer((n,o)=>{const c=t[n][o];return c!=null?c:n},e)}a(re,"$fe963b355347cc68$export$3e6543de14f8614f");const j=a(e=>{const{present:t,children:n}=e,o=ce(t),c=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),s=L(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");j.displayName="Presence";function ce(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),c=r.exports.useRef(e),s=r.exports.useRef("none"),d=e?"mounted":"unmounted",[l,i]=re(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const u=N(o.current);s.current=l==="mounted"?u:"none"},[l]),O(()=>{const u=o.current,h=c.current;if(h!==e){const p=s.current,x=N(u);e?i("MOUNT"):x==="none"||(u==null?void 0:u.display)==="none"?i("UNMOUNT"):i(h&&p!==x?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,i]),O(()=>{if(t){const u=a(f=>{const x=N(o.current).includes(f.animationName);f.target===t&&x&&F.exports.flushSync(()=>i("ANIMATION_END"))},"handleAnimationEnd"),h=a(f=>{f.target===t&&(s.current=N(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:r.exports.useCallback(u=>{u&&(o.current=getComputedStyle(u)),n(u)},[])}}a(ce,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}a(N,"$921a889cee6df7e8$var$getAnimationName");const B="Checkbox",[se,Ne]=H(B),[ae,ie]=se(B),ue=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":o,name:c,checked:s,defaultChecked:d,required:l,disabled:i,value:u="on",onCheckedChange:h,...f}=e,[p,x]=r.exports.useState(null),$=L(t,m=>x(m)),P=oe(p),S=o||P,E=r.exports.useRef(!1),R=p?Boolean(p.closest("form")):!0,[g=!1,D]=G({prop:s,defaultProp:d,onChange:h});return r.exports.createElement(ae,{scope:n,state:g,disabled:i},r.exports.createElement(T.button,y({type:"button",role:"checkbox","aria-checked":v(g)?"mixed":g,"aria-labelledby":S,"aria-required":l,"data-state":U(g),"data-disabled":i?"":void 0,disabled:i,value:u},f,{ref:$,onKeyDown:M(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:M(e.onClick,m=>{D(w=>v(w)?!0:!w),R&&(E.current=m.isPropagationStopped(),E.current||m.stopPropagation())})})),R&&r.exports.createElement(fe,{control:p,bubbles:!E.current,name:c,value:u,checked:g,required:l,disabled:i,style:{transform:"translateX(-100%)"}}))}),de="CheckboxIndicator",le=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...c}=e,s=ie(de,n);return r.exports.createElement(j,{present:o||v(s.state)||s.state===!0},r.exports.createElement(T.span,y({"data-state":U(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),fe=a(e=>{const{control:t,checked:n,bubbles:o=!0,...c}=e,s=r.exports.useRef(null),d=Q(n),l=V(t);return r.exports.useEffect(()=>{const i=s.current,u=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(u,"checked").set;if(d!==n&&f){const p=new Event("click",{bubbles:o});i.indeterminate=v(n),f.call(i,v(n)?!1:n),i.dispatchEvent(p)}},[d,n,o]),r.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}a(v,"$e698a72e93240346$var$isIndeterminate");function U(e){return v(e)?"indeterminate":e?"checked":"unchecked"}a(U,"$e698a72e93240346$var$getState");const pe=ue,be=le;var C=new Map;C.set("bold",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return b(k,{children:b("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var he=a(function(t,n){return X(t,n,C)},"renderPath"),z=r.exports.forwardRef(function(e,t){return b(K,{...Object.assign({ref:t},e,{renderPath:he})})});z.displayName="Check";const xe=z;function _(e){return b(pe,{...e,className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:b(be,{asChild:!0,children:b(xe,{width:"bold",className:"h-5 w-5 text-cyan-500"})})})}a(_,"Checkbox");try{_.displayName="Checkbox",_.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:_.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch{}export{_ as C};
//# sourceMappingURL=index.79706dda.js.map
