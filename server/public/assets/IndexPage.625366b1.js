import{Q as n}from"./QPage.aa9a1aa8.js";import{a as c}from"./axios.bf56c3c5.js";import{r,o as l,W as i,X as u,Y as d,$ as o,a0 as m,a3 as p}from"./index.20136e06.js";const g=p("br",null,null,-1),S=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(_){const e=r(null);l(async()=>{const t=document.location.port,a=`${document.location.protocol}//${document.location.hostname}:${t}`;console.log(`location: ${a}`),e.value=await s(a)});async function s(t){const a=await c.get(t+"/api/wireguard/status");return console.log(a.data),a.data}return(t,a)=>(i(),u(n,{class:"flex flex-center"},{default:d(()=>[o(" url: "+m(e.value),1),g,o(" hello ")]),_:1}))}});export{S as default};