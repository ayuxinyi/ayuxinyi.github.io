function GameFun(){
	var Oul = document.getElementById('NavBar');
	var lis = Oul.getElementsByTagName('li');
	var one = document.getElementById('content_one');
	var wrap = document.getElementById('wrap');

	//3.跳转页面
	// for(var i =0;i<lis.length;i++){
	// 	lis[i].indeex = i;
	// 	lis[i].onclick = function(){
	// 		indeex = 5-this.indeex;
	// 		var str = 'index'+indeex+'.html';
	// 		// console.log(str);
	// 		window.open(str,"_self");
	// 	}
	// }
	var body = document.getElementsByTagName("body")[0];
var bol = true;
MouseWheelHandle(body,function(aa,even){
	if (even.preventDefault) {
		even.preventDefault();
	}else{
		even.returnValue = false;
	}
	if (bol) {
		bol = false;
		var scroll = document.documentElement.scrollTop + document.body.scrollTop;
		var numTop1 = Math.floor(scroll / 655);
		var numTop2 = Math.ceil(scroll / 655);		
		if (aa == true) {
			allTop = (numTop1 + 1) * 655;
			$('body').animate({scrollTop: allTop+"px"}, 700);
		} else{
			allTop = (numTop2 - 1) * 655;
			$('body').animate({scrollTop: allTop+"px"}, 700);
		}
		setTimeout(function(){bol = true},700);
	}
});
	
};
GameFun();