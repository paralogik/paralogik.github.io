function updateViewportDimensions(){var t=window,o=document,n=o.documentElement,i=o.getElementsByTagName("body")[0],a=t.innerWidth||n.clientWidth||i.clientWidth,e=t.innerHeight||n.clientHeight||i.clientHeight;return{width:a,height:e}}var viewport=updateViewportDimensions(),waitForFinalEvent=function(){var t={};return function(o,n,i){i||(i="Don't call this twice without a uniqueId"),t[i]&&clearTimeout(t[i]),t[i]=setTimeout(o,n)}}(),timeToWaitForLast=100;jQuery(document).ready(function(t){function o(){T--,0===T&&clearInterval(W),B.animateNumber({number:59},300)}var n,i,a,e,c,r,s,u,f,o,p,l,m,d,b=function(){n&&t(".db1").stop().animate({opacity:"0.82"},50,function(){t(".db1").stop().animate({opacity:"1"},50,b)})},k=function(){i&&t(".c1").stop().animate({opacity:"q"},50,function(){t(".c1").stop().animate({opacity:"1"},50,k)})},g=function(){a&&t(".db2").stop().animate({opacity:"0.82"},50,function(){t(".db2").stop().animate({opacity:"1"},50,g)})},h=function(){a&&t(".db3").stop().animate({opacity:"0.82"},50,function(){t(".db3").stop().animate({opacity:"1"},50,g)})},z=function(){e&&t(".c2").stop().animate({opacity:"0.82"},50,function(){t(".c2").stop().animate({opacity:"1"},50,h)})},y=function(){e&&t(".c3").stop().animate({opacity:"0.82"},50,function(){t(".c3").stop().animate({opacity:"1"},50,h)})},z=function(){c&&t("#songs-link").stop().animate({opacity:"1"},50,function(){t("#songs-link").stop().animate({opacity:"1"},50,y)})},w=function(){e&&t(".c3").stop().animate({opacity:"0.82"},50,function(){t(".c3").stop().animate({opacity:"1"},50,h)})},y=function(){c&&t("#songs-link").stop().animate({opacity:"1"},50,function(){t("#songs-link").stop().animate({opacity:"1"},50,y)})},z=function(){r&&t("#about-link").stop().animate({opacity:"1"},50,function(){t("#about-link").stop().animate({opacity:"1"},50,w)})},v=function(){o&&t("#news-link").stop().animate({opacity:"1"},50,function(){t("#news-link").stop().animate({opacity:"1"},50,h)})},z=function(){s&&t(".sign").stop().animate({opacity:"0.72"},50,function(){t(".sign").stop().animate({opacity:"1"},50,v)})},x=function(){u&&t("#footer-twitter").stop().animate({opacity:"0.82"},50,function(){t("#footer-twitter").stop().animate({opacity:"1"},50,x)})},C=function(){f&&t("#footer-sc").stop().animate({opacity:"0.82"},50,function(){t("#footer-sc").stop().animate({opacity:"1"},50,C)})},O=function(){p&&t("#m-footer-twitter").stop().animate({opacity:"0.82"},50,function(){t("#m-footer-twitter").stop().animate({opacity:"1"},50,O)})},E=function(){l&&t("#m-footer-sc").stop().animate({opacity:"0.82"},50,function(){t("#m-footer-sc").stop().animate({opacity:"1"},50,E)})},I=function(){m&&t(".tr-dl-link").stop().animate({opacity:"0.82"},50,function(){t(".tr-dl-link").stop().animate({opacity:"1"},50,I)})},V=function(){d&&t(".fb-dl-link").stop().animate({opacity:"0.82"},50,function(){t(".fb-dl-link").stop().animate({opacity:"1"},50,V)})};t("#loading-bar-s").stop().animate({width:"75%"},15e3),t("#loading-bar-d").stop().animate({opacity:"1"},1300,function(){t("#hide-img").imagesLoaded("always",function(){t("#loading-bar-s").stop().animate({width:"100%"},500,function(){t("#loading").fadeOut(1e3,function(){t("#wrapper").fadeIn(1e3)})})})}),t("#d-hide-img").imagesLoaded("always",function(){t("#d-loading").fadeOut(1e3,function(){t("#d-wrapper").fadeIn(1e3)})}),t("#songs-link").on("click",function(){"-425px"===t("#songs").css("right")?(t("#about,#news").stop().animate({right:"-425px"},200),t("#songs").stop().animate({right:"0"},1200,"easeOutExpo"),t("#tl-arrows").stop().animate({left:"0px"},1200,"easeOutExpo"),t("#a-arrows,#b-arrows").stop().animate({left:"-20px"}),a=!1,t(".db2").css({backgroundColor:"transparent",color:"#000"})):(t("#about,#news").stop().animate({right:"-425px"},200),t("#songs").stop().animate({right:"-425px"},200),t("#tl-arrows").stop().animate({left:"-20px"},200),n=!1,a=!1,t(".db1, .db2").css({backgroundColor:"transparent",color:"#000"}))}),t("#about-link").on("click",function(){"-425px"===t("#about").css("right")?(t("#about").stop().animate({right:"0"},1200,"easeOutExpo"),t("#songs,#news").stop().animate({right:"-425px"},200),t("#a-arrows").stop().animate({left:"0px"},1200,"easeOutExpo"),t("#tl-arrows,#b-arrows").stop().animate({left:"-20px"},200),n=!1,t(".db1").css({backgroundColor:"transparent",color:"#000"})):(t("#about").stop().animate({right:"-425px"},200),t("#songs,#news").stop().animate({right:"-425px"},200),t("#a-arrows").stop().animate({left:"-20px"}),n=!1,a=!1,t(".db1, .db2").css({backgroundColor:"transparent",color:"#000"}))}),t(".close").on("click",function(){t("#about").stop().animate({right:"-425px"},200),t("#songs,#news").stop().animate({right:"-425px"},200),n=!1,a=!1,t(".db1, .db2").css({backgroundColor:"transparent",color:"#000"}),t("#tl-arrows,#b-arrows").stop().animate({left:"-20px"},200),t("#a-arrows").stop().animate({left:"-20px"})}),t("#news-link").on("click",function(){"-425px"===t("#news").css("right")?(t("#news").stop().animate({right:"0"},1200,"easeOutExpo"),t("#songs,#about").stop().animate({right:"-425px"},200),t("#tl-arrows,#b-arrows").stop().animate({left:"0px"},1200,"easeOutExpo"),t("#tl-arrows,#a-arrows").stop().animate({left:"-20px"},200),n=!1,t(".db1").css({backgroundColor:"transparent",color:"#000"})):(t("#news").stop().animate({right:"-425px"},200),t("#songs,#about").stop().animate({right:"-425px"},200),t("#b-arrows").stop().animate({left:"-20px"}),n=!1,a=!1,t(".db1, .db2").css({backgroundColor:"transparent",color:"#000"}))}),t(".close").on("click",function(){t("#news").stop().animate({right:"-425px"},200),t("#songs,#about").stop().animate({right:"-425px"},200),n=!1,a=!1,t(".db1, .db2").css({backgroundColor:"transparent",color:"#000"}),t("#tl-arrows,a-arrows").stop().animate({left:"-20px"},200),t("#b-arrows").stop().animate({left:"-20px"})}),t(".sc-play").on("click",function(){t(".sc-play").hide(),t(".sc-pause").css("display","block")}),t(".sc-pause").on("click",function(){t(".sc-pause").hide(),t(".sc-play").css("display","block")}),t(".db1").mouseover(function(){t(this).stop().animate({backgroundColor:"#fff",color:"#000",borderColor:"#000"},300,function(){n=!0,b()})}),t(".db2").mouseover(function(){t(this).stop().animate({backgroundColor:"#fff",color:"#000",borderColor:"#000"},300,function(){a=!0,g()})}),t(".c1").mouseover(function(){t(this).stop().animate({backgroundColor:"#fff",borderColor:"#000"},300,function(){i=!0,k()})}),t(".c1").mouseout(function(){t(this).stop().animate({backgroundColor:"transparent"},300,function(){i=!1})}),t(".c2").mouseover(function(){t(this).stop().animate({backgroundColor:"#fff",borderColor:"#000"},300,function(){e=!0,h()})}),t(".c2").mouseout(function(){t(this).stop().animate({backgroundColor:"transparent"},300,function(){e=!1})}),t(".c3").mouseover(function(){t(this).stop().animate({backgroundColor:"#fff",borderColor:"#000"},300,function(){e=!0,h()})}),t(".c3").mouseout(function(){t(this).stop().animate({backgroundColor:"transparent",borderColor:"#000"},300,function(){o=!1})}),t("#songs-link").mouseover(function(){c=!0,y()}),t("#songs-link").mouseout(function(){c=!1}),t("#about-link").mouseover(function(){r=!0,w()}),t("#about-link").mouseout(function(){r=!1}),t("#news-link").mouseover(function(){o=!0,z()}),t("#news-link").mouseout(function(){o=1}),t(".sign").mouseover(function(){s=!0,v()}),t(".sign").mouseout(function(){s=!1}),t("#footer-twitter").mouseover(function(){u=!0,x()}),t("#footer-twitter").mouseout(function(){u=!1}),t("#footer-sc").mouseover(function(){f=!0,C()}),t("#footer-sc").mouseout(function(){f=!1}),t("#m-footer-twitter").mouseover(function(){p=!0,O()}),t("#m-footer-twitter").mouseout(function(){u=!1}),t("#m-footer-sc").mouseover(function(){l=!0,E()}),t("#m-footer-sc").mouseout(function(){l=!1}),t(".tr-dl-link").mouseover(function(){t(this).stop().animate({backgroundColor:"#fff",color:"#000",borderColor:"#000"},300,function(){m=!0,I()})}),t(".tr-dl-link").mouseout(function(){t(this).stop().animate({backgroundColor:"transparent",color:"#000"},300,function(){m=!1})}),t(".fb-dl-link").mouseover(function(){t(this).stop().animate({backgroundColor:"#fff",color:"#000",borderColor:"#000"},300,function(){d=!0,V()})}),t(".fb-dl-link").mouseout(function(){t(this).stop().animate({backgroundColor:"transparent",color:"#fff"},300,function(){d=!1})}),jQuery({someValue:1}).delay(300).animate({someValue:6},{duration:2250,step:function(){t("#nel").text(Math.ceil(this.someValue))}});var T=5,W=setInterval(o,0),B=t("#el");o(),t("#elc").delay(1650).fadeOut(0,function(){t(this).remove(),t("#eloo").show()}),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(t(".form-horizontal").css({display:"none"}),t(".m-container").css({display:"block"}))});