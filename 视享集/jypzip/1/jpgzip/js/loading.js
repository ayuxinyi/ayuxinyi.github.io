var timer5 = null;
var timer6 = null;
var percent = 0;
$("#percent").html(percent);
timer5 = setInterval(function(){
	percent ++;
	$("#percent").html(percent);
	if (percent >= 80) {
		clearInterval(timer5);
	}
},10);
window.onload=function(){
	clearInterval(timer5);
	timer6 = setInterval(function(){
		percent ++;
		$("#percent").html(percent);
		if (percent >= 100) {
			$("#body")[0].style.display = "block";
			$("#windowloading").animate({
				left:-$("#windowloading")[0].offsetWidth+"px",
			},1000,function(){
				$("#windowloading")[0].style.display = "none";
				$("#jq-audio")[0].play();
			});
			clearInterval(timer6);
		}
	},50);
}