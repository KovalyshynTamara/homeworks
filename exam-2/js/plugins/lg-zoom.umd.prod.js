"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).lgZoom=t()}(void 0,function(){var o=function(){return(o=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},i={scale:1,zoom:!0,actualSize:!0,showZoomInOutIcons:!1,actualSizeIcons:{zoomIn:"lg-zoom-in",zoomOut:"lg-zoom-out"},enableZoomAfter:300,zoomPluginStrings:{zoomIn:"Zoom in",zoomOut:"Zoom out",viewActualSize:"View actual size"}},e="lgContainerResize",t="lgBeforeOpen",s="lgAfterOpen",n="lgSlideItemLoad",a="lgAfterSlide",r="lgRotateLeft",l="lgRotateRight",c="lgFlipHorizontal",g="lgFlipVertical";function h(e,t){return this.core=e,this.$LG=t,this.settings=o(o({},i),this.core.settings),this}return h.prototype.buildTemplates=function(){var e=this.settings.showZoomInOutIcons?'<button id="'+this.core.getIdName("lg-zoom-in")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-in lg-icon"></button><button id="'+this.core.getIdName("lg-zoom-out")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-out lg-icon"></button>':"";this.settings.actualSize&&(e+='<button id="'+this.core.getIdName("lg-actual-size")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.viewActualSize+'" class="'+this.settings.actualSizeIcons.zoomIn+' lg-icon"></button>'),this.core.outer.addClass("lg-use-transition-for-zoom"),this.core.$toolbar.first().append(e)},h.prototype.enableZoom=function(e){var t=this,o=this.settings.enableZoomAfter+e.detail.delay;this.$LG("body").first().hasClass("lg-from-hash")&&e.detail.delay?o=0:this.$LG("body").first().removeClass("lg-from-hash"),this.zoomableTimeout=setTimeout(function(){t.isImageSlide(t.core.index)&&(t.core.getSlideItem(e.detail.index).addClass("lg-zoomable"),e.detail.index===t.core.index&&t.setZoomEssentials())},o+30)},h.prototype.enableZoomOnSlideItemLoad=function(){this.core.LGel.on(n+".zoom",this.enableZoom.bind(this))},h.prototype.getDragCords=function(e){return{x:e.pageX,y:e.pageY}},h.prototype.getSwipeCords=function(e){return{x:e.touches[0].pageX,y:e.touches[0].pageY}},h.prototype.getDragAllowedAxises=function(e,t){var o=this.core.getSlideItem(this.core.index).find(".lg-image").first().get(),i=0,s=0,n=o.getBoundingClientRect(),s=e?(i=o.offsetHeight*e,o.offsetWidth*e):t?(i=n.height+t*n.height,n.width+t*n.width):(i=n.height,n.width),a=i>this.containerRect.height;return{allowX:s>this.containerRect.width,allowY:a}},h.prototype.setZoomEssentials=function(){this.containerRect=this.core.$content.get().getBoundingClientRect()},h.prototype.zoomImage=function(e,t,o,i){var s,n,a,r,l,c,g,h,m,u,d,p,f;Math.abs(t)<=0||(s=this.containerRect.width/2+this.containerRect.left,n=this.containerRect.height/2+this.containerRect.top+this.scrollTop,1===e&&(this.positionChanged=!1),c=(l=this.getDragAllowedAxises(0,t)).allowY,g=l.allowX,this.positionChanged&&(a=this.left/(this.scale-t),r=this.top/(this.scale-t),this.pageX=s-a,this.pageY=n-r,this.positionChanged=!1),h=this.getPossibleSwipeDragCords(t),m=s-this.pageX,u=n-this.pageY,p=1<e-t?(f=(e-t)/Math.abs(t),d=(m=(t<0?-m:m)+this.left*(f+(t<0?-1:1)))/f,(u=(t<0?-u:u)+this.top*(f+(t<0?-1:1)))/f):(d=m*(f=(e-t)*t),u*f),o&&(g?this.isBeyondPossibleLeft(d,h.minX)?d=h.minX:this.isBeyondPossibleRight(d,h.maxX)&&(d=h.maxX):1<e&&(d<h.minX?d=h.minX:d>h.maxX&&(d=h.maxX)),c?this.isBeyondPossibleTop(p,h.minY)?p=h.minY:this.isBeyondPossibleBottom(p,h.maxY)&&(p=h.maxY):1<e&&(p<h.minY?p=h.minY:p>h.maxY&&(p=h.maxY))),this.setZoomStyles({x:d,y:p,scale:e}),this.left=d,this.top=p,i&&this.setZoomImageSize())},h.prototype.resetImageTranslate=function(e){var t;this.isImageSlide(e)&&(t=this.core.getSlideItem(e).find(".lg-image").first(),this.imageReset=!1,t.removeClass("reset-transition reset-transition-y reset-transition-x"),this.core.outer.removeClass("lg-actual-size"),t.css("width","auto").css("height","auto"),setTimeout(function(){t.removeClass("no-transition")},10))},h.prototype.setZoomImageSize=function(){var o=this,i=this.core.getSlideItem(this.core.index).find(".lg-image").first();setTimeout(function(){var e=o.getCurrentImageActualSizeScale();o.scale>=e&&(i.addClass("no-transition"),o.imageReset=!0)},500),setTimeout(function(){var e,t=o.getCurrentImageActualSizeScale();o.scale>=t&&(e=o.getDragAllowedAxises(o.scale),i.css("width",i.get().naturalWidth+"px").css("height",i.get().naturalHeight+"px"),o.core.outer.addClass("lg-actual-size"),e.allowX&&e.allowY?i.addClass("reset-transition"):e.allowX&&!e.allowY?i.addClass("reset-transition-x"):!e.allowX&&e.allowY&&i.addClass("reset-transition-y"))},550)},h.prototype.setZoomStyles=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),o=this.core.getSlideItem(this.core.index).find(".lg-image").first(),i=this.core.outer.find(".lg-current .lg-dummy-img").first();this.scale=e.scale,o.css("transform","scale3d("+e.scale+", "+e.scale+", 1)"),i.css("transform","scale3d("+e.scale+", "+e.scale+", 1)");var s="translate3d("+e.x+"px, "+e.y+"px, 0)";t.css("transform",s)},h.prototype.setActualSize=function(e,o){var i=this,s=this.core.galleryItems[this.core.index];this.resetImageTranslate(e),setTimeout(function(){var e,t;s.src&&!i.core.outer.hasClass("lg-first-slide-loading")&&(e=i.getCurrentImageActualSizeScale(),t=i.scale,i.core.outer.hasClass("lg-zoomed")?i.scale=1:i.scale=i.getScale(e),i.setPageCords(o),i.beginZoom(i.scale),i.zoomImage(i.scale,i.scale-t,!0,!0),setTimeout(function(){i.core.outer.removeClass("lg-grabbing").addClass("lg-grab")},10))},50)},h.prototype.getNaturalWidth=function(e){var t=this.core.getSlideItem(e).find(".lg-image").first(),o=this.core.galleryItems[e].width;return o?parseFloat(o):t.get().naturalWidth},h.prototype.getActualSizeScale=function(e,t){var o=t<=e?e/t||2:1;return o},h.prototype.getCurrentImageActualSizeScale=function(){var e=this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,t=this.getNaturalWidth(this.core.index)||e;return this.getActualSizeScale(t,e)},h.prototype.getPageCords=function(e){var t,o={};return e?(o.x=e.pageX||e.touches[0].pageX,o.y=e.pageY||e.touches[0].pageY):(t=this.core.$content.get().getBoundingClientRect(),o.x=t.width/2+t.left,o.y=t.height/2+this.scrollTop+t.top),o},h.prototype.setPageCords=function(e){var t=this.getPageCords(e);this.pageX=t.x,this.pageY=t.y},h.prototype.manageActualPixelClassNames=function(){this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)},h.prototype.beginZoom=function(e){return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),1<e?(this.core.outer.addClass("lg-zoomed"),this.manageActualPixelClassNames()):this.resetZoom(),1<e},h.prototype.getScale=function(e){var t=this.getCurrentImageActualSizeScale();return e<1?e=1:t<e&&(e=t),e},h.prototype.init=function(){var o,i=this;this.settings.zoom&&(this.buildTemplates(),this.enableZoomOnSlideItemLoad(),o=null,this.core.outer.on("dblclick.lg",function(e){i.$LG(e.target).hasClass("lg-image")&&i.setActualSize(i.core.index,e)}),this.core.outer.on("touchstart.lg",function(e){var t=i.$LG(e.target);1===e.touches.length&&t.hasClass("lg-image")&&(o?(clearTimeout(o),o=null,e.preventDefault(),i.setActualSize(i.core.index,e)):o=setTimeout(function(){o=null},300))}),this.core.LGel.on(e+".zoom "+l+".zoom "+r+".zoom "+c+".zoom "+g+".zoom",function(){var e;i.core.lgOpened&&i.isImageSlide(i.core.index)&&!i.core.touchAction&&(e=i.core.getSlideItem(i.core.index).find(".lg-img-wrap").first(),i.top=0,i.left=0,i.setZoomEssentials(),i.setZoomSwipeStyles(e,{x:0,y:0}),i.positionChanged=!0)}),this.$LG(window).on("scroll.lg.zoom.global"+this.core.lgId,function(){i.core.lgOpened&&(i.scrollTop=i.$LG(window).scrollTop())}),this.core.getElementById("lg-zoom-out").on("click.lg",function(){var e;i.isImageSlide(i.core.index)&&(e=0,i.imageReset&&(i.resetImageTranslate(i.core.index),e=50),setTimeout(function(){var e=i.scale-i.settings.scale;e<1&&(e=1),i.beginZoom(e),i.zoomImage(e,-i.settings.scale,!0,!0)},e))}),this.core.getElementById("lg-zoom-in").on("click.lg",function(){i.zoomIn()}),this.core.getElementById("lg-actual-size").on("click.lg",function(){i.setActualSize(i.core.index)}),this.core.LGel.on(t+".zoom",function(){i.core.outer.find(".lg-item").removeClass("lg-zoomable")}),this.core.LGel.on(s+".zoom",function(){i.scrollTop=i.$LG(window).scrollTop(),i.pageX=i.core.outer.width()/2,i.pageY=i.core.outer.height()/2+i.scrollTop,i.scale=1}),this.core.LGel.on(a+".zoom",function(e){var t=e.detail.prevIndex;i.scale=1,i.positionChanged=!1,i.resetZoom(t),i.resetImageTranslate(t),i.isImageSlide(i.core.index)&&i.setZoomEssentials()}),this.zoomDrag(),this.pinchZoom(),this.zoomSwipe(),this.zoomableTimeout=!1,this.positionChanged=!1)},h.prototype.zoomIn=function(){var e;this.isImageSlide(this.core.index)&&(e=this.scale+this.settings.scale,e=this.getScale(e),this.beginZoom(e),this.zoomImage(e,Math.min(this.settings.scale,e-this.scale),!0,!0))},h.prototype.resetZoom=function(e){this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");var t=this.core.getElementById("lg-actual-size"),o=this.core.getSlideItem(void 0!==e?e:this.core.index);t.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn),o.find(".lg-img-wrap").first().removeAttr("style"),o.find(".lg-image").first().removeAttr("style"),this.scale=1,this.left=0,this.top=0,this.setPageCords()},h.prototype.getTouchDistance=function(e){return Math.sqrt((e.touches[0].pageX-e.touches[1].pageX)*(e.touches[0].pageX-e.touches[1].pageX)+(e.touches[0].pageY-e.touches[1].pageY)*(e.touches[0].pageY-e.touches[1].pageY))},h.prototype.pinchZoom=function(){var n=this,a=0,r=!1,l=1,c=0,g=this.core.getSlideItem(this.core.index);this.core.outer.on("touchstart.lg",function(e){if(g=n.core.getSlideItem(n.core.index),n.isImageSlide(n.core.index)&&2===e.touches.length){if(e.preventDefault(),n.core.outer.hasClass("lg-first-slide-loading"))return;l=n.scale||1,n.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),n.setPageCords(e),n.resetImageTranslate(n.core.index),n.core.touchAction="pinch",a=n.getTouchDistance(e)}}),this.core.$inner.on("touchmove.lg",function(e){var t,o,i,s;2===e.touches.length&&"pinch"===n.core.touchAction&&(n.$LG(e.target).hasClass("lg-item")||g.get().contains(e.target))&&(e.preventDefault(),t=n.getTouchDistance(e),o=a-t,!r&&5<Math.abs(o)&&(r=!0),r&&(c=n.scale,i=Math.max(1,l+.02*-o),n.scale=Math.round(100*(i+Number.EPSILON))/100,s=n.scale-c,n.zoomImage(n.scale,Math.round(100*(s+Number.EPSILON))/100,!1,!1)))}),this.core.$inner.on("touchend.lg",function(e){var t,o;"pinch"===n.core.touchAction&&(n.$LG(e.target).hasClass("lg-item")||g.get().contains(e.target))&&(r=!1,a=0,n.scale<=1?n.resetZoom():(t=n.getCurrentImageActualSizeScale(),n.scale>=t&&(0==(o=t-n.scale)&&(o=.01),n.zoomImage(t,o,!1,!0)),n.manageActualPixelClassNames(),n.core.outer.addClass("lg-zoomed")),n.core.touchAction=void 0)})},h.prototype.touchendZoom=function(e,t,o,i,s){var n=t.x-e.x,a=t.y-e.y,r=Math.abs(n)/s+1,l=Math.abs(a)/s+1;2<r&&(r+=1),2<l&&(l+=1),n*=r,a*=l;var c=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),g={};g.x=this.left+n,g.y=this.top+a;var h=this.getPossibleSwipeDragCords();(15<Math.abs(n)||15<Math.abs(a))&&(i&&(this.isBeyondPossibleTop(g.y,h.minY)?g.y=h.minY:this.isBeyondPossibleBottom(g.y,h.maxY)&&(g.y=h.maxY)),o&&(this.isBeyondPossibleLeft(g.x,h.minX)?g.x=h.minX:this.isBeyondPossibleRight(g.x,h.maxX)&&(g.x=h.maxX)),i?this.top=g.y:g.y=this.top,o?this.left=g.x:g.x=this.left,this.setZoomSwipeStyles(c,g),this.positionChanged=!0)},h.prototype.getZoomSwipeCords=function(e,t,o,i,s){var n,a,r,l,c={};return i?(c.y=this.top+(t.y-e.y),this.isBeyondPossibleTop(c.y,s.minY)?(n=s.minY-c.y,c.y=s.minY-n/6):this.isBeyondPossibleBottom(c.y,s.maxY)&&(a=c.y-s.maxY,c.y=s.maxY+a/6)):c.y=this.top,o?(c.x=this.left+(t.x-e.x),this.isBeyondPossibleLeft(c.x,s.minX)?(r=s.minX-c.x,c.x=s.minX-r/6):this.isBeyondPossibleRight(c.x,s.maxX)&&(l=c.x-s.maxX,c.x=s.maxX+l/6)):c.x=this.left,c},h.prototype.isBeyondPossibleLeft=function(e,t){return t<=e},h.prototype.isBeyondPossibleRight=function(e,t){return e<=t},h.prototype.isBeyondPossibleTop=function(e,t){return t<=e},h.prototype.isBeyondPossibleBottom=function(e,t){return e<=t},h.prototype.isImageSlide=function(e){var t=this.core.galleryItems[e];return"image"===this.core.getSlideType(t)},h.prototype.getPossibleSwipeDragCords=function(e){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first(),o=this.core.mediaContainerPosition.bottom,i=t.get().getBoundingClientRect(),s=i.height,n=i.width;return e&&(s+=e*s,n+=e*n),{minY:(s-this.containerRect.height)/2,maxY:(this.containerRect.height-s)/2+o,minX:(n-this.containerRect.width)/2,maxX:(this.containerRect.width-n)/2}},h.prototype.setZoomSwipeStyles=function(e,t){e.css("transform","translate3d("+t.x+"px, "+t.y+"px, 0)")},h.prototype.zoomSwipe=function(){var o,i,s=this,n={},a={},r=!1,l=!1,c=!1,g=new Date,h=(new Date,this.core.getSlideItem(this.core.index));this.core.$inner.on("touchstart.lg",function(e){var t;s.isImageSlide(s.core.index)&&(h=s.core.getSlideItem(s.core.index),(s.$LG(e.target).hasClass("lg-item")||h.get().contains(e.target))&&1===e.touches.length&&s.core.outer.hasClass("lg-zoomed")&&(e.preventDefault(),g=new Date,s.core.touchAction="zoomSwipe",i=s.core.getSlideItem(s.core.index).find(".lg-img-wrap").first(),t=s.getDragAllowedAxises(0),c=t.allowY,((l=t.allowX)||c)&&(n=s.getSwipeCords(e)),o=s.getPossibleSwipeDragCords(),s.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")))}),this.core.$inner.on("touchmove.lg",function(e){var t;1===e.touches.length&&"zoomSwipe"===s.core.touchAction&&(s.$LG(e.target).hasClass("lg-item")||h.get().contains(e.target))&&(e.preventDefault(),s.core.touchAction="zoomSwipe",a=s.getSwipeCords(e),t=s.getZoomSwipeCords(n,a,l,c,o),(15<Math.abs(a.x-n.x)||15<Math.abs(a.y-n.y))&&(r=!0,s.setZoomSwipeStyles(i,t)))}),this.core.$inner.on("touchend.lg",function(e){if("zoomSwipe"===s.core.touchAction&&(s.$LG(e.target).hasClass("lg-item")||h.get().contains(e.target))){if(e.preventDefault(),s.core.touchAction=void 0,s.core.outer.removeClass("lg-zoom-dragging"),!r)return;r=!1;var t=(new Date).valueOf()-g.valueOf();s.touchendZoom(n,a,l,c,t)}})},h.prototype.zoomDrag=function(){var i,o,s,n,a=this,r={},l={},c=!1,g=!1,h=!1,m=!1;this.core.outer.on("mousedown.lg.zoom",function(e){var t,o;a.isImageSlide(a.core.index)&&(t=a.core.getSlideItem(a.core.index),(a.$LG(e.target).hasClass("lg-item")||t.get().contains(e.target))&&(i=new Date,n=a.core.getSlideItem(a.core.index).find(".lg-img-wrap").first(),o=a.getDragAllowedAxises(0),m=o.allowY,h=o.allowX,a.core.outer.hasClass("lg-zoomed")&&a.$LG(e.target).hasClass("lg-object")&&(h||m)&&(e.preventDefault(),r=a.getDragCords(e),s=a.getPossibleSwipeDragCords(),c=!0,a.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))))}),this.$LG(window).on("mousemove.lg.zoom.global"+this.core.lgId,function(e){var t;c&&(g=!0,l=a.getDragCords(e),t=a.getZoomSwipeCords(r,l,h,m,s),a.setZoomSwipeStyles(n,t))}),this.$LG(window).on("mouseup.lg.zoom.global"+this.core.lgId,function(e){var t;c&&(o=new Date,c=!1,a.core.outer.removeClass("lg-zoom-dragging"),!g||r.x===l.x&&r.y===l.y||(l=a.getDragCords(e),t=o.valueOf()-i.valueOf(),a.touchendZoom(r,l,h,m,t)),g=!1),a.core.outer.removeClass("lg-grabbing").addClass("lg-grab")})},h.prototype.closeGallery=function(){this.resetZoom()},h.prototype.destroy=function(){this.$LG(window).off(".lg.zoom.global"+this.core.lgId),this.core.LGel.off(".lg.zoom"),this.core.LGel.off(".zoom"),clearTimeout(this.zoomableTimeout),this.zoomableTimeout=!1},h});