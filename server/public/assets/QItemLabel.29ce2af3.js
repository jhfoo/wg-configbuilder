import{l as o,c as t,h as r,S as s}from"./index.54f58e95.js";var c=o({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const l=t(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>r("div",{class:l.value},s(a.default))}}),b=o({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const l=t(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>r("div",{class:l.value,role:"toolbar"},s(a.default))}}),v=o({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const l=t(()=>parseInt(e.lines,10)),n=t(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),i=t(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>r("div",{style:i.value,class:n.value},s(a.default))}});export{v as Q,b as a,c as b};