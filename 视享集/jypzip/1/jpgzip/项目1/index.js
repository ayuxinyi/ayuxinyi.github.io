var timer5 = null;
var timer6 = null;
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
			},600,function(){
				$("#windowloading")[0].style.display = "none";
			});
			clearInterval(timer6);
		}
	},50);

		var Width = $("#imgX").width();
	var Height = $("#imgX").height();
	window.onresize =function(){
		Width = $("#imgX").width();
		Height = $("#imgX").height();
		}
	console.log(Height);
	$(".m1").css({transform:"translateZ("+Height/2+"px)"});
	$(".m2").css({top: "0",transform:"translateZ("+0+"px) translateY("+Height/2+"px) rotateX(-90deg)"});

	$("#slider").on("mouseenter",function(){
				$("#slider").css({left:"0px"});
				$("#part3d-wrap").css({left:"300px"});
		});	
	$("#slider").on("mouseleave",function(){
				$("#slider").css({left:"-260px"});
				$("#part3d-wrap").css({left:"40px"});
		
	});

	var lis = document.getElementsByTagName("li");
	var as = document.getElementsByTagName("a");
	for(var i = 0; i <lis.length;i++){
		init();
		lis[i].onmouseover = function(){
			this.className = "active";
		}
		lis[i].onmouseout = function(){
			this.className = "";
		}
		if(i <=3){
			lis[i].onclick = function(event){
			init1();
			for (var j = 0; j<$("a:contains('"+this.innerHTML+"')").length; j++) {
				$("a:contains('"+this.innerHTML+"')")[j].style.opacity = 1;
			}
		}
		}
		}
	var btn = document.getElementById("btn");
	btn.onclick = function(){
		$("#CasesMenue").css({display:"block"});
		$("#ContactMenue").css({top:"350px"});
		for(var i = 0; i <as.length;i++){
			as[i].style.opacity = 1;
		}
	}
	var lisss = Contact.getElementsByTagName('li');
	for(var i = 0; i < lisss.length;i++){
		lisss[i].onclick = function(){
			$("#CasesMenue").css({display:"none"});
			$("#ContactMenue").css({top:"220px"});
	}
	}
	function init (){
		for (var i = 0; i <lis.length; i++) {
			lis[i].className = null;
		}
	}
	function init1(){
		for(var i = 0; i < as.length;i++){
			as[i].style.opacity = 0.2;
		}
	}
	$("#btns").on("click",function(){
		window.open("http://1.jypzip.applinzi.com/jpgzip/homepage.html","_self");
	})
}	
	// $("#Text").on("click",function(){
	// 	window.open("file:///Applications/XAMPP/xamppfiles/htdocs/%E9%A1%B9%E7%9B%AE1/index2.html");
	// })

