"use strict";function toggleMenu(){document.getElementById("mobile-menu").classList.toggle("open"),document.getElementById("hamb-btn").classList.toggle("is-active"),document.getElementById("shadow").classList.toggle("show")}$(function(){$(".promo-slider").slick({arrows:!1,dots:!0,infinite:!0,speed:300});var e=$(".my-slider").lightSlider({controls:!1,item:5,slideMargin:20,loop:!0,autoWidth:!1,pager:!1,responsive:[{breakpoint:1200,settings:{item:4,slideMove:1}},{breakpoint:950,settings:{item:3,slideMove:1}},{breakpoint:600,settings:{item:2,slideMove:1,controls:!1,pager:!0}},{breakpoint:480,settings:{item:1,slideMove:1,controls:!1,pager:!0}}]}),i=$(".my-slider-2").lightSlider({controls:!1,item:9,slideMargin:20,pager:!1,loop:!0,autoWidth:!1,responsive:[{breakpoint:1400,settings:{item:6,slideMove:1}},{breakpoint:800,settings:{item:6,slideMove:1,pager:!1}},{breakpoint:500,settings:{item:4,slideMove:1,controls:!1,pager:!0}},{breakpoint:480,settings:{item:2,slideMove:1,controls:!1,pager:!0}}]});$("#slide-prev").on("click",function(){e.goToPrevSlide()}),$("#slide-next").on("click",function(){e.goToNextSlide()}),$("#slide-prev-1").on("click",function(){i.goToPrevSlide()}),$("#slide-next-1").on("click",function(){i.goToNextSlide()})});