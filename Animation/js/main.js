document.addEventListener("DOMContentLoaded",function(){"use strict";function e(e){M=e.offsetWidth/2,E=e.offsetHeight/2}function t(e){var e=e||window.event;b=M-e.pageX,L=E-e.pageY,C=Math.round(b/M*20)+"%",B=Math.round(L/E*20)+"%",parseInt(C)>20?C="20%":parseInt(C)<-20&&(C="-20%"),parseInt(B)>20?B="20%":parseInt(B)<-20&&(B="-20%"),w=Math.round(100*Math.abs(L/E*.3))/100+1,N=Math.round(100*Math.abs(b/M*.3))/100+1,T=1-(Math.abs(b/M)+Math.abs(L/E))/4,x=5*(Math.abs(b/M)+Math.abs(L/E))}function n(e,t,n){W="translateX("+e+") translateY("+t+") scaleX("+n+") scaleY("+w+")",X.style.transform=W}function s(e){X.style.opacity=e}function a(e){X.style.filter="blur("+e+"px)"}function o(e){z=e.offsetWidth/2,D=e.offsetHeight/2}function i(e){var e=e||window.event;O=z-e.pageX,j=D-e.pageY,O>50?O=50:O<-50&&(O=-50),j>50?j=50:j<-50&&(j=-50),k=Math.round(O/z*30)+"%",q=Math.round(j/D*30)+"%",A=Math.round(100*Math.abs(O/z*.2))/100+1,F=Math.round(100*Math.abs(j/D*.2))/100+1,G=2*(Math.abs(O/z)+Math.abs(j/D))}function c(e,t,n){R="translateX("+e+") translateY("+t+") scaleX("+n+") scaleY("+F+")",K.style.transform=R}function r(e){K.style.filter="blur("+G+"px)"}function l(){m(),V.classList.add("emerge")}function m(){S="picture"+Z,$.classList.add(S)}function u(){Z++,U="picture"+(Z-1),Z>5&&(Z=1),$.classList.remove(U)}var d,f=document.body,h=document.getElementsByClassName("credentials_container")[0],g=document.getElementsByClassName("parallax_container")[0];setTimeout(function(){d=h.offsetHeight},100);var v,p,y=document.getElementsByClassName("credentials_body__item-copyright")[0];g.onscroll=function(){p=document.documentElement.clientWidth<500?200:100,v=g.scrollTop+document.documentElement.clientHeight,d-v<p?(y.classList.remove("disappear"),y.classList.add("emerge")):y.classList.contains("emerge")&&(y.classList.add("disappear"),y.classList.remove("emerge"))};var M,E,b,L;setTimeout(function(){e(f)},100),window.onresize=function(){o(J),e(f)};var C,B,N,w,T,x,X=document.getElementsByClassName("logo-shadow-container")[0],Y=10,_=!1,H=document.getElementsByClassName("text-shadow-container")[0],I=document.getElementsByClassName("text")[0];f.addEventListener("mousemove",function(e){e.target==H||e.target==I?K.classList.add("visible"):K.classList.remove("visible"),_||(t(e),n(C,B,N,w),s(T),a(x),_=!0,setTimeout(function(){_=!1},Y))});var W,z,D,O,j,k,q,A,F,G,J=document.getElementsByClassName("text-shadow-container")[0];setTimeout(function(){o(J)},500);var K=document.getElementsByClassName("text-shadow")[0],P=10,Q=!1;f.addEventListener("mousemove",function(e){Q||(i(e),c(k,q,A,F),r(G),Q=!0,setTimeout(function(){Q=!1},P))});var R,S,U,V=(document.getElementsByClassName("picture-container")[0],document.getElementsByClassName("circle")[0]),Z=1,$=document.getElementsByClassName("picture")[0];setTimeout(function(){l()},2e3),$.addEventListener("animationend",function(e){u(),V.classList.remove("emerge"),setTimeout(function(){l()},1e3)})});