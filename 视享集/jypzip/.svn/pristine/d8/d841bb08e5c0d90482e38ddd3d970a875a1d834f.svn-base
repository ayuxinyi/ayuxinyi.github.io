// http://www.jpgzip.com/music/Monkey%20Majik%20(%E7%8C%B4%E5%AD%90%E6%8A%8A%E6%88%8F)%20-%20Change.mp3
$(".item").on("mouseenter",function(){
	$(this).find("img").css({
		marginTop:-120+'px',
	});
});
$(".item").on("mouseleave",function(){
	$(this).find("img").css({
		marginTop:0,
	});
});
$(".host").on("mouseenter",function(){
	$(this).find("img").attr("src",$(this).attr("id"));
});
$(".host").on("mouseleave",function(){
	$(this).find("img").attr("src",$(this).attr("ss"));
});
// footer
	$(".tml img").on("click",function(){
		lock4 = false;
		$(".tml img").css({
			right:16+'px',
		});
		$(this).css({
			right:-45+'px',
		});
		var index = $(this).attr("id");
		$("body").stop();
		if (index == "tmli1") {
			console.log(index);
        	$("body").animate({
        		scrollTop:0+"px",
        	},500,'easeOutQuad',function(){
        		lock4 = true;
        		ST = $(window).scrollTop();
        	});
		}else if(index == "tmli2"){
        	$("body").animate({
        		scrollTop:700+"px",
        	},500,'easeOutQuad',function(){
        		lock4 = true;
        		ST = $(window).scrollTop();
        	});
		}else if(index == "tmli3"){
        	$("body").animate({
        		scrollTop:1560+"px",
        	},500,'easeOutQuad',function(){
        		lock4 = true;
        		ST = $(window).scrollTop();
        	});
		}else if(index == "tmli4"){
        	$("body").animate({
        		scrollTop:2550+"px",
        	},500,'easeOutQuad',function(){
        		lock4 = true;
        		ST = $(window).scrollTop();
        	});
		}
	});

	$("#toolsMusic img").on("click",function(){
		if ($("#toolsMusic img").attr("src") == "imgday/music_ico.gif") {
			$("#toolsMusic img").attr("src","imgday/music_ico.png");
			$("#toolsMusic img")[0].style.marginLeft = "3px";
			$("#jq-audio")[0].pause();
		}else{
			$("#toolsMusic img").attr("src","imgday/music_ico.gif");
			$("#toolsMusic img")[0].style.marginLeft = "10px";
			$("#jq-audio")[0].play();
		}
	});

	$("#jq-audio").bind("ended",function(){
		if($("#jq-audio").attr("src")=="http://www.jpgzip.com/music/David%20Byrne%20-%20Main%20Title%20Theme.mp3"){
			$("#jq-audio").attr("src","http://www.jpgzip.com/music/Monkey%20Majik%20(%E7%8C%B4%E5%AD%90%E6%8A%8A%E6%88%8F)%20-%20Change.mp3");
			$("#jq-audio")[0].play();
		}else{
			$("#jq-audio").attr("src","http://www.jpgzip.com/music/David%20Byrne%20-%20Main%20Title%20Theme.mp3");
			$("#jq-audio")[0].play();
		}
	});

	$(".tbl").on("mouseenter",function(){
		$(this).find(".tbld").css({
			display:'block',
		})
	});
	$(".tbl").on("mouseleave",function(){
		$(this).find(".tbld").css({
			display:'none',
		})
	});
// floatR