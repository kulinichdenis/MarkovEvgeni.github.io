document.addEventListener("DOMContentLoaded",function(){"use strict";function t(t){t.addEventListener("click",function(){s.forEach(function(t){t.classList.remove("active"),t.classList.remove("prev")}),n.forEach(function(t){c.classList.remove(t),a.classList.remove(t)}),c.classList.add(this.getAttribute("section")),a.classList.add(this.getAttribute("section"));for(var t=0;t<parseInt(this.getAttribute("number"));t++)s[t].classList.add("prev");this.classList.add("active")})}function e(t){t.addEventListener("click",function(){i.forEach(function(t){t.classList.remove("active")}),n.forEach(function(t){a.classList.remove(t)}),this.classList.add("active"),a.classList.add(this.getAttribute("section")),o=t.firstElementChild.innerHTML,r.innerHTML=o})}var s=Array.prototype.slice.call(document.getElementsByClassName("selector__item")),n=["latest","tech","design","marketing"],c=document.getElementsByClassName("selector__thumb")[0];s.forEach(function(e,s,n){t(e)});var i=Array.prototype.slice.call(document.getElementsByClassName("thumbler")),a=document.getElementsByClassName("blog-content")[0];i.forEach(function(t,s,n){e(t)});var o,r=document.getElementsByClassName("content_heading")[0]});