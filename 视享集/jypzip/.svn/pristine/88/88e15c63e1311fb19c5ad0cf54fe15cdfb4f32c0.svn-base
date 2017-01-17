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
			$("#WRAP")[0].style.display = "block";
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
			$("#slider").animate({left:"0px"},800,"easeOutQuad",function(){
				$("#slider").css({left:"0px"});
				bb = true;
			});
			$("#ContactWrap").animate({left:"300px"},800,"easeOutQuad",function(){
				$("#ContactWrap").css({left:"300px"});
				bb = true;
			});	
		}	
	});
	$("#slider").on("mouseleave",function(){
		$("#slider").addClass("");
		$("#slider").addClass("active");
		if(bl){
			bl = false;
			$("#slider").animate({left:"-260px"},800,"easeOutQuad",function(){
				bl = true;
				$("#slider").css({left:"-260px"});
			});
			$("#ContactWrap").animate({left:"40px"},800,"easeOutQuad",function(){
				bl = true;
				$("#ContactWrap").css({left:"40px"});

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
	var boll = true;
	var bool = true;
	var Bottom = document.getElementById("Bottom");
	MouseWheelHandle(Bottom,function(down,event){
		if(down&&boll){
			console.log("xiangxia");
			boll = false;
			$("#sliderBox").animate({top:"650px"},500,"easeOutQuad",function(){
				boll = true;
				$("#sliderBox").css({top:"650px"});
			})
			$("#move").animate({top:"-650px"},500,"easeOutQuad",function(){
				boll = true;
				$("#move").css({top:"-650px"});
			});
		}else if(down == false &bool){
			// console.log("xiangshang");
			bool = false; 
			$("#sliderBox").animate({top:"-150px"},500,"easeOutQuad",function(){
				bool = true;
				$("#sliderBox").css({top:"-150px"});

			})
			$("#move").animate({top:"150px"},500,"easeOutQuad",function(){
				bool = true;
				$("#move").css({top:"150px"});

			});
		}
	})


}