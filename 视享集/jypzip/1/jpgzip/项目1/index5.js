var percent = 0;
timer5 = setInterval(function(){
	percent ++;
	if (percent >= 80) {
		clearInterval(timer5);
	}
},10);
window.onload=function(){
	clearInterval(timer5);
	timer6 = setInterval(function(){
		percent ++;
		if (percent >= 100) {
			$("#body")[0].style.display = "block";
			$("#windowloading").animate({
				left:-$("#windowloading")[0].offsetWidth+"px",
			},1000,function(){
				$("#windowloading")[0].style.display = "none";
			});
			clearInterval(timer6);
		}
	},50);
	var bb = true;
	var bl = true;
	$("#slider").on("mouseenter",function(){
		$("#slider").addClass("");
		$("#slider").addClass("clearfix");
		if(bb){
			bb = false;
			$("#slider").animate({left:"0px"},500,"easeOutQuad",function(){
				$("#slider").css({left:"0px"});
				bb = true;
			});
			$("#ServiceWrap").animate({left:"300px"},500,"easeOutQuad",function(){
				$("#ServiceWrap").css({left:"300px"});
				bb = true;
			});	
		}	
	});
	$("#slider").on("mouseleave",function(){
		$("#slider").addClass("");
		$("#slider").addClass("active");
		if(bl){
			bl = false;
			$("#slider").animate({left:"-260px"},500,"easeOutQuad",function(){
				bl = true;
				$("#slider").css({left:"-260px"});
			});
			$("#ServiceWrap").animate({left:"40px"},500,"easeOutQuad",function(){
				bl = true;
				$("#ServiceWrap").css({left:"40px"});

			});
		}
		
	});
	var lis = document.getElementsByTagName("li");
	for(var i = 0; i <lis.length;i++){
		init();
	lis[i].onmouseover = function(){
			this.className = "active";
		}
		lis[i].onmouseout = function(){
			this.className = "";
		}
};
		function init (){
		for (var i = 0; i <lis.length; i++) {
			lis[i].className = null;
		}
	}
	$("#People").on("click",function(){
		window.open("index8.html","_self");
	});
	$("#ConentAbout").on("click",function(){
		window.open("index5.html","_self");
	});
	$("#btns").on("click",function(){
		window.open("http://1.jypzip.applinzi.com/jpgzip/homepage.html","_self");
	})
}