var lock1 = true;
var lock2 = true;
var lock3 = true;
var lock4 = true;
var timer1 = null;
var timer2 = null;
var timer3 = null;
var timer4 = null;
var IC = 7;
var	CM = 0;
$("#page01").on("mousemove",function(e){
	var hpl = $("#homepage").offset().left;
	var mcl = e.clientX;
	var res = mcl - hpl;
	if ( res > 400 && res < 900) {
		$("#layer01").attr("class","layerP01");
		$("#layer01")[0].style.left = -(res-350)*0.04+"px";
		$("#layer02")[0].style.left = -(res-350)*0.06+"px";
		$("#imgContainer1")[0].style.left = 160-(res-100)*0.13+"px";
		$("#layer04")[0].style.left = -(res-350)*0.15+"px";
	}
});//page1
function setBulidTop(){
	$("#page04Bulid")[0].style.top = 50+($(window).scrollTop()-1800)*0.06+"px";
}//page4 建筑动画
setBulidTop();
function setTimer2(){
	timer2 = setInterval(function(){
				lock2 == false;
				IC++;
				if (IC > 10) {
				IC = 8;
			}
		$(".imgContainer:eq(7) img").attr("src","img/page2_"+IC+".png");
	},1500);
}//page2 轮播定时器
function animateWe(){
	$("#layer01").removeAttr("class","layerP01");
	$("#layer01")[0].style.top = $(window).scrollTop()*0.3+"px";
	if ($(window).scrollTop()<350) {
		$("#layer01").fadeIn(500);
	}else if(($(window).scrollTop())>=350){
		$("#layer01").fadeOut(500);
	}
}
// page1 we
function returnBegin(){
	$(".imgContainer:eq(1)").css({
			top:57+'px',
			opacity:0
		});//logo
		$(".imgContainer:eq(2)").css({
			left:760+'px',
			top:297+'px',
			opacity:0
		});
		$(".imgContainer:eq(3)").css({
			width:0,
			left:208+'px'
		});
		$(".imgContainer:eq(4)").css({
			height:0,
			top:271+'px'
		});	
		$(".imgContainer:eq(5)").css({
			width:0,
		});
		$(".imgContainer:eq(6)").css({
			height:0,
		});
		$(".imgContainer:eq(2)").attr("class","imgContainer");
		$(".imgContainer:eq(7)")[0].style.display = "none";
		lock1 = true;
		lock2 = true;
		clearTimeout(timer1);
		clearInterval(timer2);
}//return Begin
function page2Animate(){
	if ($(window).scrollTop()<=350) {
		returnBegin();
	}else if(($(window).scrollTop())>=613 && ($(window).scrollTop())<1520){
		clearInterval(timer2);
		$(".imgContainer:eq(1)").css({
			top:117+'px',
			opacity:1
		});//logo
		$(".imgContainer:eq(2)").css({
			left:850+'px',
			top:287+'px',
			opacity:1
		});
		$(".imgContainer:eq(3)").css({
			width:148+'px',
			left:59+'px'
		});
		$(".imgContainer:eq(4)").css({
			height:94+'px',
			top:177+'px'
		});
		$(".imgContainer:eq(5)").css({
			width:166+'px',
		});
		$(".imgContainer:eq(6)").css({
			height:171+'px',
		});
		if (lock1 == true) {
			timer1 = setTimeout(function(){
				$(".imgContainer:eq(7)")[0].style.display = "inline-block";
				$(".imgContainer:eq(2)").attr("class","imgContainer airplane");
			},800);
		}
		lock1 = false;
		if (lock2 == true) {
			setTimer2();	
		}		
	}else if(($(window).scrollTop())>=1520){
		returnBegin();
	}
}//page02 animate

function intriduceAnimate(){
	if ($(window).scrollTop()>=2550) {
		$("#intriduce1 img").css({
			top:700+'px',
			opacity:1
		});
		$("#intriduce2 img").css({
			top:800+'px',
			opacity:1
		});
		$("#intriduce3 img").css({
			top:880+'px',
			opacity:1
		});
	}
}
//intriduceAnimate

function catAnimate(){
	timer3 = setInterval(function(){
		lock3 = false;
		CM -= 127;
		if (CM <=-889) {
			CM = 0;
		}
		$("#catBox img")[0].style.left = CM + "px";
	},100);
}//cat animate

function catMove(){
	$("#catBox").animate({
		right:1080+'px',
	},25000,'linear',function(){
		clearInterval(timer4);
		clearInterval(timer3);
	});
}
function floatR(){
	if ($(window).scrollTop()<600) {
		$(".tml img").css({
			right:16+'px',
		});
		$(".tml:eq(0) img").css({
			right:-45+'px',
		});
	}else if($(window).scrollTop()>=600 && $(window).scrollTop()<1500){
		$(".tml img").css({
			right:16+'px',
		});
		$(".tml:eq(1) img").css({
			right:-45+'px',
		});
	}else if($(window).scrollTop()>=1500 && $(window).scrollTop()<2550){
		$(".tml img").css({
			right:16+'px',
		});
		$(".tml:eq(2) img").css({
			right:-45+'px',
		});
	}else{
		$(".tml img").css({
			right:16+'px',
		});
		$(".tml:eq(3) img").css({
			right:-45+'px',
		});
	}
}
if (lock4) {
	floatR();
}

$(window).on("scroll",function(e){
	// console.log($(window).scrollTop());
	if (e.preventDefault) {
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
	animateWe();
	// page1 
	page2Animate();
	// page02 animate
	if ($(window).scrollTop()>=1800 ) {
		$("#catBox")[0].style.opacity = 1;
		setBulidTop();

		if (lock3 == true) {
			clearInterval(timer3);
			clearInterval(timer4);
			timer4 = setTimeout(function(){
				catAnimate();
				catMove();
			},1000);
			lock3 = false;
		}
	}else{
		clearInterval(timer3);
		clearInterval(timer4);
		$("#catBox").stop();
		lock3 = true;
		$("#catBox")[0].style.opacity = 0;
		$("#catBox")[0].style.right = 0;
	}
	intriduceAnimate();
	// intriduceAnimate
	if (lock4) {
		floatR();
	}
	// floatR
});


$("#hoverList li").on("mouseenter",function(){
	clearInterval(timer2);
	$(".imgContainer:eq(7) img").attr("src","img/"+$(this).attr("class")+".png");
});
$("#hoverList li").on("mouseleave",function(){
	setTimer2();	
});
// hover 事件



