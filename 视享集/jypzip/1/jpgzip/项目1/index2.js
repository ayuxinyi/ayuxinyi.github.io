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
			$("#TextWrap").animate({left:"300px"},500,"easeOutQuad",function(){
				$("#TextWrap").css({left:"300px"});
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
			$("#TextWrap").animate({left:"40px"},500,"easeOutQuad",function(){
				bl = true;
				$("#TextWrap").css({left:"40px"});

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
}
		function init (){
		for (var i = 0; i <lis.length; i++) {
			lis[i].className = null;
		}
	}
	var Width = $("html")[0].clientWidth;
	var boll = true; 
	var bool = true;
	var bol = true;
	var bl = true;
	var bb = true;
	var bbb = true;
	if(Width <= 1082 && Width>= 728 && boll){
			// boll = false;
			$("#section4").css({top:"140px",left:"0px"});
			$("#section3").css({top:"140px",left:"350px"});

		}
	if(Width <= 728 && Width >= 380 &&bool){
			$("#section3").css({top:"290px",left:"0px"});
			$("#section2").css({top:"430px",left:"0px"});
			$("#section4").css({top:"140px",left:"0px"});

		}	
	if(Width <=1400 && Width >=1082 && bb){
		$("#section4").css({top:"140px",left:"0px"});
	}
	window.onresize = function(){
		var Width = $("html")[0].clientWidth;
		if(Width <= 1400 && Width >=1082 && bb){
			bb = false;
			$("#section4").animate({top:"140px",left:"0px"},600,function(){
				bb = true;
			});
		}
		if(Width <= 1082 && Width>= 728 && boll){
			boll = false;
			$("#section3").animate({top:"140px",left:"350px"},600,function(){
				boll = true;
			});
		}
		if(Width <= 728 && Width >= 380 &&bool){
			bool = false;
			$("#section3").animate({top:"290px",left:"0px"},600,function(){
				bool = true;
			});
			$("#section2").animate({top:"430px",left:"0px"},600,function(){
				bool = true;
			});
		}
		if(Width >= 728 &&bl ){
			bl = false;
			$("#section2").animate({top:"0px",left:"350px"},600,function(){
				bl = true;
			});
		}
		if(Width >=1082 && bol){
			bol = false;
			$("#section3").animate({top:"0px",left:"700px"},600,function(){
				bol = true;
			});
		}
		if(Width >= 1400 && bbb){
			bbb = false;
			$("#section4").animate({top:"0px",left:"1050px"},600,function(){
				bbb = true;
			});
		}
	}
	$("#section1 h3").on("click",function(){
		window.open("https://book.douban.com/subject/2297549/");
	});
	$("#section2 h3").on("click",function(){
		window.open("http://fashion.163.com/14/1031/15/A9T4QOH100264MK3.html");
	});
		$("#section3 h3").on("click",function(){
		window.open("http://blog.sina.com.cn/s/blog_48bb47020101fny9.html");
	});
    	$("#section4 h3").on("click",function(){
		window.open("https://m.douban.com/book/subject/3013903/");
	});
	var h3s = document.getElementsByTagName("h3");
	for(var i =0;i <h3s.length;i++){
		h3s[i].onmouseover = function(){
			this.className = "Tittle";
		}
		h3s[i].onmouseout = function(){
			this.className = "";
		}
	}
	$("#btns").on("click",function(){
		window.open("http://1.jypzip.applinzi.com/jpgzip/homepage.html","_self");
	})
}