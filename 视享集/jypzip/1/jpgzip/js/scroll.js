var ST = $("html,body").scrollTop();
$(window).on("mousewheel DOMMouseScroll",function(e){
	if (e.preventDefault) {
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
	var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));     
	 if (delta > 0) {
        // 向上滚
        ST -=75;
        if (ST <= 0) {
            ST = 0;
        }
        $("html,body").stop();
        $("html,body").animate({
        	scrollTop:ST+"px",
        },500,'easeOutQuad');
    } else if (delta < 0) {
        // 向下滚
        ST +=75;
        if (ST >= 3022){
            ST = 3022;
        }
        $("html,body").stop();
        $("html,body").animate({
        	scrollTop:ST+"px",
        },500,'easeOutQuad');
    }

});