import"./style-Bj0xmOQp.js";import{g as s}from"./GetApi-D0E96TSk.js";import{t as d,q as u}from"./TotalQuantity-jfQrvFG7.js";import{A as l}from"./AddtoCart-HcvXyLM1.js";import"./localstoragedata-CAic1If1.js";const p=t=>{let r=[];r.push(t),localStorage.setItem("Temp",JSON.stringify(r))},y=document.querySelector("#Products-Container"),q=document.querySelector("#ProductTemplate"),S=async t=>{if(!t){console.warn("Products Not fetch from server!");return}t.forEach(r=>{const{id:o,price:c,name:n}=r,i=t.findIndex(m=>m.id===o),e=document.importNode(q.content,!0);e.querySelector(".product-template-item").id=`item${o}`,e.querySelector(".item-image img").src=t[i].image[0],e.querySelector(".item-name").textContent=n,e.querySelector(".item-price").textContent=`₹${c}`;let a=0;e.querySelector(".item-to-cart").addEventListener("click",()=>{l(o,a)}),e.querySelector(`#item${o}`).addEventListener("click",()=>p(o)),y.append(e)})},f=async()=>{const t=await s();S(t),d(),u()};f();
