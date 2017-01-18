function GameFun(){

	//1.设计鼠标移入事件
	function Immigra(index1,index2,index3,index4){
		$(index1).mouseover(function(){
			$(index4)[0].style.background = "red";
			$(index2)[0].style.background = index3;
		})}
	Immigra('#Rendering','#guding',"url(img/1_h.png)",'.void3');
	Immigra('#BIM','#guding2',"url(img/2_h.png)",'.void');
	Immigra('.3DANIM','#guding1',"url(img/3_h.jpg",'.void2');
	//2.鼠标移出事件
	function SiftOut(index1,index2,index3,index4){
		$(index1).mouseout(function(){
			$(index4)[0].style.background ="rgb(176,176,176)";
			$(index2)[0].style.background = index3;
		})
	}
	SiftOut('#Rendering','#guding',"url(img/1.png)",'.void3');
	SiftOut('#BIM','#guding2',"url(img/2.jpg)",'.void');
	SiftOut('.3DANIM','#guding1',"url(img/3.jpg",'.void2');
	var Oul = document.getElementById('NavBar');
	var lis = Oul.getElementsByTagName('li');
	//3.跳转页面
	for(var i =0;i<lis.length;i++){
		lis[i].indeex = i;
		lis[i].onclick = function(){
			indeex = 5-this.indeex;
			var str = 'index'+indeex+'.html';
			console.log(str);
			window.open(str);
		}
	}

	// lis[0].onclick = function(){
	// 	window.location.href = "../index1.html";
	// }



};
GameFun();