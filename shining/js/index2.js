function GameFun(){
	var Oul = document.getElementById('NavBar');
	var lis = Oul.getElementsByTagName('li');
	// var ulArray =document.querySelectorAll("ul");
	// var show = document.getElementById('show');
	// var imgs = show.getElementsByTagName('img');
	// var btns = document.getElementById('btns');
	// var odiv = btns.getElementsByTagName('div');
	var timer =null;
	// var index = null; 
	// for(var i =0;i<lis.length;i++){
	// 	lis[i].indeex = i;
	// 	lis[i].onclick = function(){
	// 		indeex = 5-this.indeex;
	// 		var str = 'index'+indeex+'.html';
	// 		window.open(str);
	// 	}
	// };
		var swiper = new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:".swiper-pagination",
		nextButton:".swiper-button-next",
		prevButton:".swiper-button-prev",
		// 每页之间的间隔
		spaceBetween:30,
		loop:true,//循环轮播
		autoplay:2000,
		autoplayDisableOnInteraction : false
	});
	function waterWallFun(){
		var obig = document.getElementById('big');
		var pubu = document.getElementById('pubu');
		var ulArray =pubu.querySelectorAll("ul");
		var bol = false;
		function randHeight(min,max){
			return parseInt(Math.random()*(max - min + 1 ) + min);
		}
		var min = ulArray[0];
		var a =1;
		function findMinUl() {
			for(var i = 0;i<ulArray.length;i++){
				if(min.offsetHeight > ulArray[i].offsetHeight){
					min = ulArray[i];
				}
			}
			return min;
		}
		function creatli(bol){
			for (var i = 1; i < 40; i++) {
			var li = document.createElement("li");
			a++;
			li.innerHtml =a;
			var b = randHeight(1,39);
			if(bol){
			var oli = pubu.getElementsByTagName('li');
			li.style.height = randHeight(150,300) + "px";
			li.style.background = "url(rendering/"+b+".jpg";
			for(var j =0;j <ulArray.length;j++){
				ulArray[j].index12 = j;
				ulArray[j].onclick = function(event){
				var ev = event ||window.event;
				// console.log(ev.target);
				var asd = ev.target;
				var asdf =asd.getAttribute("style");
				// console.log(asd);
				// console.log(asdf);
				var arr = asdf.split(";");
				var str = arr[1];
				// console.log(str);
				var arr1 = str.split(":");
				// console.log(arr1);
				var str1 = arr1[1];
				// console.log(str1);
				var arr2 = str1.split(".");
				console.log((arr2[0]))
				obig.style.display = "block";
				// console.log(obig);
				document.body.style.opacity = 0.6;
				document.body.style.background ="black";
				obig.style.background =arr2[0]+"b"+'.'+arr2[1];
				obig.style.backgroundRepeat = "no-repeat";
				obig.style.backgroundSize = "cover";
				obig.onclick = function(){
					obig.style.display ="none";
					document.body.style.opacity =1;
					document.body.style.background = "white";
				}
			}
		}
			}
			var minUl = findMinUl();
			minUl.appendChild(li);
		}
	}
	creatli(true);
	if(bol){
	window.onscroll =function(){
		var hasscolled = document.documentElement.scrollTop || document.body.scrollTop;
		var maxheight = document.documentElement.offsetHeight-document.documentElement.clientHeight;
		if(hasscolled >= maxheight ){
			creatli(false);
		}
	}
}
}
waterWallFun();	
};
GameFun();