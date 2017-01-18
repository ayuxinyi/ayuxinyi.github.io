function GameFun(){
	var Oul = document.getElementById('NavBar');
	var lis = Oul.getElementsByTagName('li');
	var tupianqu = document.getElementById('tupianqu');
	var oli = tupianqu.getElementsByTagName('li');
	var odiv = tupianqu.getElementsByTagName('div');
	var play = document.getElementById('play');
	var zanting = document.getElementById('zanting');
	//3.跳转页面
	// for(var i =0;i<lis.length;i++){
	// 	lis[i].indeex = i;
	// 	lis[i].onclick = function(){
	// 		indeex = 5-this.indeex;
	// 		var str = 'index'+indeex+'.html';
	// 		console.log(str);
	// 		window.open(str);
	// 	}
	// }
	// for(var i =0; i<oli.length;i++){
	// 	oli[i].onclick = function(){
	// 		play.style.display = "none";
	// 		zanting.style.display = "block";
	// 	}
	// }



};
GameFun();