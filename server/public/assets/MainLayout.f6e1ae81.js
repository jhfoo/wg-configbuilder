import{k as j,i as _e,l as M,r as T,c as h,w as b,m as ae,n as pt,h as E,p as ue,g as N,H as Oe,v as yt,o as ze,q as ne,t as He,u as gt,x as V,y as W,z as Ke,A as wt,P as bt,B as Ct,C as Ge,D as St,E as J,G as pe,I as We,J as ye,K as Te,L as ge,M as qt,N as De,O as Je,Q as Ze,R as Lt,S as Tt,U as Z,a as xt,V as Et,W as le,X as xe,Y as P,f as _,Z as kt,_ as _t,$ as ie,a0 as re,a1 as zt,a2 as Pt,a3 as $t,a4 as Vt,a5 as Bt,F as Mt,a6 as Ot}from"./index.61f28372.js";import{Q as Ee,u as Ht,a as ke,b as Wt,c as Dt}from"./use-timeout.6f76c541.js";import{u as At,a as Qt,Q as Ft,b as Ae,c as Rt}from"./QItem.4ad713a7.js";var Nt=j({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:r}}=N(),t=_e(ue,M);if(t===M)return console.error("QHeader needs to be child of QLayout"),M;const n=T(parseInt(e.heightHint,10)),s=T(!0),f=h(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||r.platform.is.ios&&t.isContainer.value===!0),d=h(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?n.value:0;const u=n.value-t.scroll.value.position;return u>0?u:0}),c=h(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=h(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),C=h(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=h(()=>{const u=t.rows.value.top,S={};return u[0]==="l"&&t.left.space===!0&&(S[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(S[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),S});function v(u,S){t.update("header",u,S)}function m(u,S){u.value!==S&&(u.value=S)}function x({height:u}){m(n,u),v("size",u)}function q(u){a.value===!0&&m(s,!0),l("focusin",u)}b(()=>e.modelValue,u=>{v("space",u),m(s,!0),t.animate()}),b(d,u=>{v("offset",u)}),b(()=>e.reveal,u=>{u===!1&&m(s,e.modelValue)}),b(s,u=>{t.animate(),l("reveal",u)}),b(t.scroll,u=>{e.reveal===!0&&m(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&v("size",n.value),v("space",e.modelValue),v("offset",d.value),ae(()=>{t.instances.header===g&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const u=pt(o.default,[]);return e.elevated===!0&&u.push(E("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(E(Ee,{debounce:0,onResize:x})),E("header",{class:C.value,style:w.value,onFocusin:q},u)}}});function Xt(e,o,l){let r;function t(){r!==void 0&&(Oe.remove(r),r=void 0)}return ae(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>l.value===!0,handler:o},Oe.add(r)}}}const Yt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},It=["beforeShow","show","beforeHide","hide"];function Ut({showing:e,canShow:o,hideOnRouteChange:l,handleShow:r,handleHide:t,processOnMount:n}){const s=N(),{props:f,emit:d,proxy:c}=s;let a;function C(u){e.value===!0?m(u):w(u)}function w(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const S=f["onUpdate:modelValue"]!==void 0;S===!0&&(d("update:modelValue",!0),a=u,ne(()=>{a===u&&(a=void 0)})),(f.modelValue===null||S===!1)&&v(u)}function v(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),r!==void 0?r(u):d("show",u))}function m(u){if(f.disable===!0)return;const S=f["onUpdate:modelValue"]!==void 0;S===!0&&(d("update:modelValue",!1),a=u,ne(()=>{a===u&&(a=void 0)})),(f.modelValue===null||S===!1)&&x(u)}function x(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function q(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?v:x)(a)}b(()=>f.modelValue,q),l!==void 0&&yt(s)===!0&&b(()=>c.$route.fullPath,()=>{l.value===!0&&e.value===!0&&m()}),n===!0&&ze(()=>{q(f.modelValue)});const g={show:w,hide:m,toggle:C};return Object.assign(c,g),g}const jt=[Element,String],Kt=[null,document,document.body,document.scrollingElement,document.documentElement];function Gt(e,o){let l=gt(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Kt.includes(l)?window:l}function et(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function tt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ee;function we(){if(ee!==void 0)return ee;const e=document.createElement("p"),o=document.createElement("div");He(e,{width:"100%",height:"200px"}),He(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let r=e.offsetWidth;return l===r&&(r=o.clientWidth),o.remove(),ee=l-r,ee}function Jt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let I=0,be,Ce,U,Se=!1,Qe,Fe,Re,Q=null;function Zt(e){eo(e)&&Ke(e)}function eo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=wt(e),l=e.shiftKey&&!e.deltaX,r=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||r?e.deltaY:e.deltaX;for(let n=0;n<o.length;n++){const s=o[n];if(Jt(s,r))return r?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ne(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function te(e){Se!==!0&&(Se=!0,requestAnimationFrame(()=>{Se=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:r}=document.scrollingElement;(U===void 0||o!==window.innerHeight)&&(U=l-o,document.scrollingElement.scrollTop=r),r>U&&(document.scrollingElement.scrollTop-=Math.ceil((r-U)/8))}))}function Xe(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(o);be=tt(window),Ce=et(window),Qe=o.style.left,Fe=o.style.top,Re=window.location.href,o.style.left=`-${be}px`,o.style.top=`-${Ce}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",te,W.passiveCapture),window.visualViewport.addEventListener("scroll",te,W.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ne,W.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",Zt,W.notPassive),e==="remove"&&(V.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",te,W.passiveCapture),window.visualViewport.removeEventListener("scroll",te,W.passiveCapture)):window.removeEventListener("scroll",Ne,W.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Qe,o.style.top=Fe,window.location.href===Re&&window.scrollTo(be,Ce),U=void 0)}function to(e){let o="add";if(e===!0){if(I++,Q!==null){clearTimeout(Q),Q=null;return}if(I>1)return}else{if(I===0||(I--,I>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){Q!==null&&clearTimeout(Q),Q=setTimeout(()=>{Xe(o),Q=null},100);return}}Xe(o)}function oo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,to(o))}}}const Pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},no=Object.keys(Pe);Pe.all=!0;function Ye(e){const o={};for(const l of no)e[l]===!0&&(o[l]=!0);return Object.keys(o).length===0?Pe:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const lo=["INPUT","TEXTAREA"];function Ie(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&lo.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function io(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),bt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function qe(e,o,l){const r=Te(e);let t,n=r.left-o.event.x,s=r.top-o.event.y,f=Math.abs(n),d=Math.abs(s);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=n<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.left===!0&&n<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&n>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(r.left-=n,f=0,n=0):(r.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:r,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:n,y:s},delta:{x:r.left-o.event.lastX,y:r.top-o.event.lastY}}}}let ro=0;var Le=Ct({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&V.has.touch!==!0)return;function r(n,s){l.mouse===!0&&s===!0?Ke(n):(l.stop===!0&&ye(n),l.prevent===!0&&We(n))}const t={uid:"qvtp_"+ro++,handler:o,modifiers:l,direction:Ye(l),noop:Ge,mouseStart(n){Ie(n,t)&&St(n)&&(J(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Ie(n,t)){const s=n.target;J(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(V.is.firefox===!0&&pe(e,!0),t.lastEvt=n,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&We(c),n.cancelBubble===!0&&ye(c),Object.assign(c,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:c}}ye(n)}const{left:f,top:d}=Te(n);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(n){if(t.event===void 0)return;const s=Te(n),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=n;const c=t.event.mouse===!0,a=()=>{r(n,c);let v;l.preserveCursor!==!0&&l.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),io(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),c===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{x(),m()},50):x()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(n,t.event.mouse);const{payload:v,synthetic:m}=qe(n,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=m===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(n);return}const C=Math.abs(f),w=Math.abs(d);C!==w&&(t.direction.horizontal===!0&&C>w||t.direction.vertical===!0&&C<w||t.direction.up===!0&&C<w&&d<0||t.direction.down===!0&&C<w&&d>0||t.direction.left===!0&&C>w&&f<0||t.direction.right===!0&&C>w&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(ge(t,"temp"),V.is.firefox===!0&&pe(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(qe(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=qe(n===void 0?t.lastEvt:n,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const n=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";J(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}V.has.touch===!0&&J(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=Ye(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ge(o,"main"),ge(o,"temp"),V.is.firefox===!0&&pe(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function oe(e,o,l){return l<=o?o:Math.min(l,Math.max(o,e))}const Ue=150;var ao=j({name:"QDrawer",inheritAttrs:!1,props:{...Yt,...At,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...It,"onLayout","miniState"],setup(e,{slots:o,emit:l,attrs:r}){const t=N(),{proxy:{$q:n}}=t,s=Qt(e,n),{preventBodyScroll:f}=oo(),{registerTimeout:d,removeTimeout:c}=Ht(),a=_e(ue,M);if(a===M)return console.error("QDrawer needs to be child of QLayout"),M;let C,w=null,v;const m=T(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),x=h(()=>e.mini===!0&&m.value!==!0),q=h(()=>x.value===!0?e.miniWidth:e.width),g=T(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),u=h(()=>e.persistent!==!0&&(m.value===!0||ot.value===!0));function S(i,p){if(D(),i!==!1&&a.animate(),$(0),m.value===!0){const k=a.instances[K.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),O(1),a.isContainer.value!==!0&&f(!0)}else O(0),i!==!1&&ve(!1);d(()=>{i!==!1&&ve(!0),p!==!0&&l("show",i)},Ue)}function y(i,p){X(),i!==!1&&a.animate(),O(0),$(F.value*q.value),me(),p!==!0?d(()=>{l("hide",i)},Ue):c()}const{show:L,hide:z}=Ut({showing:g,hideOnRouteChange:u,handleShow:S,handleHide:y}),{addToHistory:D,removeFromHistory:X}=Xt(g,z,u),A={belowBreakpoint:m,hide:z},B=h(()=>e.side==="right"),F=h(()=>(n.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),$e=T(0),R=T(!1),se=T(!1),Ve=T(q.value*F.value),K=h(()=>B.value===!0?"left":"right"),ce=h(()=>g.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),de=h(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(B.value?"R":"L")!==-1||n.platform.is.ios===!0&&a.isContainer.value===!0),Y=h(()=>e.overlay===!1&&g.value===!0&&m.value===!1),ot=h(()=>e.overlay===!0&&g.value===!0&&m.value===!1),nt=h(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&R.value===!1?" hidden":"")),lt=h(()=>({backgroundColor:`rgba(0,0,0,${$e.value*.4})`})),Be=h(()=>B.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),it=h(()=>B.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),rt=h(()=>{const i={};return a.header.space===!0&&Be.value===!1&&(de.value===!0?i.top=`${a.header.offset}px`:a.header.space===!0&&(i.top=`${a.header.size}px`)),a.footer.space===!0&&it.value===!1&&(de.value===!0?i.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(i.bottom=`${a.footer.size}px`)),i}),at=h(()=>{const i={width:`${q.value}px`,transform:`translateX(${Ve.value}px)`};return m.value===!0?i:Object.assign(i,rt.value)}),ut=h(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),st=h(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(de.value===!0||Y.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Be.value===!0?" q-drawer--top-padding":""))),ct=h(()=>{const i=n.lang.rtl===!0?e.side:K.value;return[[Le,mt,void 0,{[i]:!0,mouse:!0}]]}),dt=h(()=>{const i=n.lang.rtl===!0?K.value:e.side;return[[Le,Me,void 0,{[i]:!0,mouse:!0}]]}),ft=h(()=>{const i=n.lang.rtl===!0?K.value:e.side;return[[Le,Me,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){ht(m,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}b(m,i=>{i===!0?(C=g.value,g.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(g.value===!0?($(0),O(0),me()):L(!1))}),b(()=>e.side,(i,p)=>{a.instances[p]===A&&(a.instances[p]=void 0,a[p].space=!1,a[p].offset=0),a.instances[i]=A,a[i].size=q.value,a[i].space=Y.value,a[i].offset=ce.value}),b(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),b(()=>e.behavior+e.breakpoint,fe),b(a.isContainer,i=>{g.value===!0&&f(i!==!0),i===!0&&fe()}),b(a.scrollbarWidth,()=>{$(g.value===!0?0:void 0)}),b(ce,i=>{H("offset",i)}),b(Y,i=>{l("onLayout",i),H("space",i)}),b(B,()=>{$()}),b(q,i=>{$(),he(e.miniToOverlay,i)}),b(()=>e.miniToOverlay,i=>{he(i,q.value)}),b(()=>n.lang.rtl,()=>{$()}),b(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(vt(),a.animate())}),b(x,i=>{l("miniState",i)});function $(i){i===void 0?ne(()=>{i=g.value===!0?0:q.value,$(F.value*i)}):(a.isContainer.value===!0&&B.value===!0&&(m.value===!0||Math.abs(i)===q.value)&&(i+=F.value*a.scrollbarWidth.value),Ve.value=i)}function O(i){$e.value=i}function ve(i){const p=i===!0?"remove":a.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function vt(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,w=setTimeout(()=>{w=null,se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function mt(i){if(g.value!==!1)return;const p=q.value,k=oe(i.distance.x,0,p);if(i.isFinal===!0){k>=Math.min(75,p)===!0?L():(a.animate(),O(0),$(F.value*p)),R.value=!1;return}$((n.lang.rtl===!0?B.value!==!0:B.value)?Math.max(p-k,0):Math.min(0,k-p)),O(oe(k/p,0,1)),i.isFirst===!0&&(R.value=!0)}function Me(i){if(g.value!==!0)return;const p=q.value,k=i.direction===e.side,G=(n.lang.rtl===!0?k!==!0:k)?oe(i.distance.x,0,p):0;if(i.isFinal===!0){Math.abs(G)<Math.min(75,p)===!0?(a.animate(),O(1),$(0)):z(),R.value=!1;return}$(F.value*G),O(oe(1-G/p,0,1)),i.isFirst===!0&&(R.value=!0)}function me(){f(!1),ve(!0)}function H(i,p){a.update(e.side,i,p)}function ht(i,p){i.value!==p&&(i.value=p)}function he(i,p){H("size",i===!0?e.miniWidth:p)}return a.instances[e.side]=A,he(e.miniToOverlay,q.value),H("space",Y.value),H("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),ze(()=>{l("onLayout",Y.value),l("miniState",x.value),C=e.showIfAbove===!0;const i=()=>{(g.value===!0?S:y)(!1,!0)};if(a.totalWidth.value!==0){ne(i);return}v=b(a.totalWidth,()=>{v(),v=void 0,g.value===!1&&e.showIfAbove===!0&&m.value===!1?L(!1):i()})}),ae(()=>{v!==void 0&&v(),w!==null&&(clearTimeout(w),w=null),g.value===!0&&me(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const i=[];m.value===!0&&(e.noSwipeOpen===!1&&i.push(qt(E("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ct.value)),i.push(De("div",{ref:"backdrop",class:nt.value,style:lt.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>ft.value)));const p=x.value===!0&&o.mini!==void 0,k=[E("div",{...r,key:""+p,class:[ut.value,r.class]},p===!0?o.mini():Je(o.default))];return e.elevated===!0&&g.value===!0&&k.push(E("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(De("aside",{ref:"content",class:st.value,style:at.value},k,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>dt.value)),E("div",{class:"q-drawer-container"},i)}}}),uo=j({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=N(),r=_e(ue,M);if(r===M)return console.error("QPageContainer needs to be child of QLayout"),M;Ze(Lt,!0);const t=h(()=>{const n={};return r.header.space===!0&&(n.paddingTop=`${r.header.size}px`),r.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(n.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),n});return()=>E("div",{class:"q-page-container",style:t.value},Je(o.default))}});const{passive:je}=W,so=["both","horizontal","vertical"];var co=j({name:"QScrollObserver",props:{axis:{type:String,validator:e=>so.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:jt},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,n;b(()=>e.scrollTarget,()=>{d(),f()});function s(){r!==null&&r();const C=Math.max(0,et(t)),w=tt(t),v={top:C-l.position.top,left:w-l.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";l.position={top:C,left:w},l.directionChanged=l.direction!==m,l.delta=v,l.directionChanged===!0&&(l.direction=m,l.inflectionPoint=l.position),o("scroll",{...l})}function f(){t=Gt(n,e.scrollTarget),t.addEventListener("scroll",c,je),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,je),t=void 0)}function c(C){if(C===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[w,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{v(w),r=null}}}const{proxy:a}=N();return b(()=>a.$q.lang.rtl,s),ze(()=>{n=a.$el.parentNode,f()}),ae(()=>{r!==null&&r(),d()}),Object.assign(a,{trigger:c,getPosition:()=>l}),Ge}}),fo=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:r}}=N(),t=T(null),n=T(r.screen.height),s=T(e.container===!0?0:r.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),d=T(0),c=T(Tt.value===!0?0:we()),a=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=h(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),w=h(()=>c.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),v=h(()=>c.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function m(y){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=L,e.onScroll!==void 0&&l("scroll",L)}}function x(y){const{height:L,width:z}=y;let D=!1;n.value!==L&&(D=!0,n.value=L,e.onScrollHeight!==void 0&&l("scrollHeight",L),g()),s.value!==z&&(D=!0,s.value=z),D===!0&&e.onResize!==void 0&&l("resize",y)}function q({height:y}){d.value!==y&&(d.value=y,g())}function g(){if(e.container===!0){const y=n.value>d.value?we():0;c.value!==y&&(c.value=y)}}let u=null;const S={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:t,height:n,containerHeight:d,scrollbarWidth:c,totalWidth:h(()=>s.value+c.value),rows:h(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,L,z){S[y][L]=z}};if(Ze(ue,S),we()>0){let z=function(){y=null,L.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(L.scrollHeight>r.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(z,300)},X=function(A){y!==null&&A==="remove"&&(clearTimeout(y),z()),window[`${A}EventListener`]("resize",D)},y=null;const L=document.body;b(()=>e.container!==!0?"add":"remove",X),e.container!==!0&&X("add"),xt(()=>{X("remove")})}return()=>{const y=Et(o.default,[E(co,{onScroll:m}),E(Ee,{onResize:x})]),L=E("div",{class:a.value,style:C.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?E("div",{class:"q-layout-container overflow-hidden",ref:t},[E(Ee,{onResize:q}),E("div",{class:"absolute-full",style:w.value},[E("div",{class:"scroll",style:v.value},[L])])]):L}}});const vo=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const o=e;return(l,r)=>(le(),xe(Ft,{clickable:"",tag:"a",to:o.link},{default:P(()=>[o.icon?(le(),xe(Ae,{key:0,avatar:""},{default:P(()=>[_(kt,{name:o.icon},null,8,["name"])]),_:1})):_t("",!0),_(Ae,null,{default:P(()=>[_(ke,null,{default:P(()=>[ie(re(o.title),1)]),_:1}),_(ke,{caption:""},{default:P(()=>[ie(re(o.caption),1)]),_:1})]),_:1})]),_:1},8,["to"]))}}),go=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const o=T(!1);o.value=!0,console.log("isProduction: true");const l=[{title:"Edit",caption:"github.com/quasarframework",icon:"code",link:"edit"},{title:"Setup",caption:"quasar.dev",icon:"school",link:"setup"}],r=T(!1);function t(){r.value=!r.value}return(n,s)=>{const f=zt("router-view");return le(),xe(fo,{view:"lHh Lpr lFf"},{default:P(()=>[_(Nt,{elevated:""},{default:P(()=>[_(Wt,null,{default:P(()=>[_(Pt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t}),_(Dt,null,{default:P(()=>[ie(" Wireguard ConfigBuilder ")]),_:1}),$t("div",null,re(o.value?"PROD":"DEV")+" | v"+re(n.$q.version),1)]),_:1})]),_:1}),_(ao,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=d=>r.value=d),"show-if-above":"",bordered:""},{default:P(()=>[_(Rt,null,{default:P(()=>[_(ke,{header:""},{default:P(()=>[ie(" Essential Links ")]),_:1}),(le(),Vt(Mt,null,Bt(l,d=>_(vo,Ot({key:d.title,ref_for:!0},d),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),_(uo,null,{default:P(()=>[_(f)]),_:1})]),_:1})}}});export{go as default};