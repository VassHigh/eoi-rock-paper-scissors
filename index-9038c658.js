(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=[{name:"rock",emoji:"🗿",loseTo:["paper"]},{name:"paper",emoji:"📄",loseTo:["scissors"]},{name:"scissors",emoji:"✂",loseTo:["rock"]}],a=t=>Math.floor(Math.random()*t);let l=null,u=null;const d=Array.from(document.querySelectorAll(".options .btn"));function f(t,r){return t===r?"Tie":t==="rock"&&r==="scissors"||t==="scissors"&&r==="paper"||t==="paper"&&r==="rock"?"You Win":"You Lost"}const m=t=>{const r=document.querySelector(".result");r.textContent=t},p=t=>{u=t.classList.item(1);const n=a(c.lenght);l=c[n].name;const s=f(u,l);m(s)};d.forEach(t=>{t.addEventListener("click",()=>p(t))});
