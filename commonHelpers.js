import{a as f,i as g,S as L}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const b="https://pixabay.com/api/",v="45133335-13ec6f60d2d4b23fe19aa58e6";async function w(t,s=1,a=15){try{return(await f.get(b,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}})).data}catch(o){throw new Error(o.response?o.response.data:o.message)}}function c(t){g.error({position:"topRight",message:`${t}`})}function m(t){const s=document.querySelector(".gallery-list"),a=new L(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}),o=t.hits.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}" 
            />
        </a>
        <div class="gallery-content">
            <h5 class="text-content">Likes<p class="text">${e.likes}</p></h5>
            <h5 class="text-content">Views<p class="text">${e.views}</p></h5>
            <h5 class="text-content">Comments<p class="text">${e.comments}</p></h5>
            <h5 class="text-content">Downloads<p class="text">${e.downloads}</p></h5>
        </div>
    </li>`).join("");s.insertAdjacentHTML("beforeend",o),a.refresh()}function S(){const t=document.querySelector(".gallery-list");t.innerHTML=""}const q=document.querySelector(".gallery-form"),p=document.querySelector(".input-gallery"),d=document.querySelector(".loading"),n=document.querySelector(".load-btn");let i=1;const u=15;let y="";q.addEventListener("submit",async t=>{t.preventDefault(),i=1,y=p.value.trim(),S(),n.classList.add("hidden"),await h()});n.addEventListener("click",()=>{i++,h()});async function h(){if(d.classList.remove("hidden"),y===""){c("Please enter a search query."),d.classList.add("hidden");return}try{const t=await w(y,i,u);if(t.total===0)c("Sorry, there are no images matching your search query. Please try again!");else{if(i>1){const s=document.querySelector(".gallery-list").getBoundingClientRect().height;m(t);const a=document.querySelector(".gallery-list").getBoundingClientRect().height;console.log(document.querySelector(".gallery-list").getBoundingClientRect()),window.scrollBy({top:(a-s)*.6,behavior:"smooth"})}else m(t);if(t.hits.length<u)return n.classList.add("hidden"),g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});if(t.totalHits>i*u)n.classList.remove("hidden");else return n.classList.add("hidden"),g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}}catch(t){c(t.message)}finally{d.classList.add("hidden"),p.value=""}}
//# sourceMappingURL=commonHelpers.js.map