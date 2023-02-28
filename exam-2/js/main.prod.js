"use strict";function initMap(){var e=L.map("my-map").setView([40.62855201656928,-73.89604802534322],13);L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(e),L.marker([40.643562117683175,-73.9034790544971],{icon:purpleIcon}).addTo(e).bindPopup('<div class="popup-wrap">\n            <span>Hello!</span>\n        </div>')}$(function(){var e=$(".my-slider").lightSlider({controls:!1,item:3,slideMargin:30,loop:!0,autoWidth:!1,slideMove:1,pager:!0,responsive:[{breakpoint:950,settings:{item:2,pager:!0}},{breakpoint:680,settings:{item:1,pager:!0}}]});$("#promo-slider").lightSlider({controls:!1,item:1,loop:!0,autoWidth:!1,pager:!0,vertical:!0,verticalHeight:800,responsive:[{breakpoint:1020,settings:{verticalHeight:600}},{breakpoint:768,settings:{verticalHeight:500}},{breakpoint:500,settings:{verticalHeight:400}}]}),$("#slide-prev").on("click",function(){e.goToPrevSlide()}),$("#slide-next").on("click",function(){e.goToNextSlide()}),lightGallery(document.getElementById("lightgallery"),{plugins:[lgZoom,lgThumbnail],speed:500})}),document.querySelector("#my-map").addEventListener("click",function(e){e.preventDefault(),"init-map-link"===e.target.id&&initMap()});var purpleIcon=L.icon({iconUrl:"imgs/pin.png",iconSize:[106,106],iconAnchor:[53,53]});document.addEventListener("scroll",function(){100<=window.scrollY?document.getElementById("header").classList.add("scroll"):document.getElementById("header").classList.remove("scroll")});var NEWSAPI_KEY="d69e604e046740efba34fb89d1b6ee4d",DEV_MODE=!1;function getNews(){var t;return regeneratorRuntime.async(function(e){for(;;)switch(e.prev=e.next){case 0:return t=DEV_MODE?"/data/news.json":"https://newsapi.org/v2/everything",e.next=3,regeneratorRuntime.awrap(axios.get(t,{params:{apiKey:NEWSAPI_KEY,q:"design",searchIn:"title",language:"en",pageSize:5,page:1}}).then(function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}})}function newsHTML(e){var t=new Date(e.publishedAt),n=t.getDate()+" 0"+(t.getMonth()+1)+" "+t.getFullYear();return'\n        <div class="card">\n            <a href="'.concat(e.url,'" title="').concat(e.title,'" target="_blank">\n            <img  class="news-img" src="').concat(e.urlToImage,'" alt=""/>\n                </a>\n            <div class="card-body">\n            \n              <h3 class="card-title" title="').concat(e.title,'">').concat(e.title,'</h3>\n              </a>\n              <p class="text" title="').concat(e.description,'">').concat(e.description,'</p>\n            </div>\n            <div class="card-footer">\n              <div class="avatar">\n                <img src="imgs/avatar.png" alt="">\n              </div>\n              <div class="info">\n                <div class="name" title="').concat(e.author,'">').concat(e.author,'</div>\n                <div class="date">').concat(n,"</div>\n              </div>\n            </div>\n        </div>\n\n        ")}function isValidName(e){return/^(([a-zA-Z\s]\D))+([a-zA-Z]\D)$/.test(e)}function isValidEmail(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}function submitFeedback(){var e="\n        <b>Name: </b> ".concat(document.getElementById("name").value,"\n        <b>Email: </b> ").concat(document.getElementById("email").value,"\n        ");axios.post("https://api.telegram.org/bot".concat("6100533036:AAHQ73-bugcjTqM5rwH7Qtb3m8M2CJxYj8I","/sendMessage"),{chat_id:"-1001601521359",text:e,parse_mode:"HTML"}).then(function(e){document.getElementById("name").value="",document.getElementById("email").value="",toast.success("Massage sent successfully")}).catch(function(e){toast.danger("AJAX error. Please try again later")})}function toggleMenu(){document.getElementById("mobile-menu").classList.toggle("open"),document.getElementById("hamb-btn").classList.toggle("active"),document.getElementById("shadow").classList.toggle("show")}getNews().then(function(e){console.log(e);var t="";e.articles.forEach(function(e){t+=newsHTML(e)}),document.getElementById("news-wrap").innerHTML=t}),document.getElementById("subscribe-form").addEventListener("submit",function(e){e.preventDefault();var t=document.getElementById("email").value.trim(),n=document.getElementById("name").value.trim(),a=!0;""===n?(a=!1,toast.warning("Please enter your name!")):!1===isValidName(n)&&(a=!1,toast.danger("Invalid name!")),""===t?(a=!1,toast.warning("Please enter your email!")):!1===isValidEmail(t)&&(a=!1,toast.danger("Invalid email address")),a&&submitFeedback()});