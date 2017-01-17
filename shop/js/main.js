var app = angular.module("shop",["customFilter","ngRoute"]);
//配置路由
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");
}]);
app.config(function($routeProvider){
	$routeProvider.when("/products",{templateUrl:"products.html"});
	$routeProvider.when("/checkout",{templateUrl:"checkout.html"});
	$routeProvider.otherwise({templateUrl:"products.html"});
});

app.controller("mainVC",function($scope,$rootScope){
	//定义一个数组,用来存放购买的商品
	$rootScope.cars = [];
	//加入购物车
	$scope.addToCar = function(product){
		//car 这个数组里面装载的是我们自定义的对象
		//{goods:product,num:3}
		//循环检测cars 有没有这个商品
		for(var i=0;i<$rootScope.cars.length;i++){
			var aShop = $rootScope.cars[i];
			if (product.id == aShop.goods.id) {
				aShop.num++;
				break; 
			}
		}
		if (i==$rootScope.cars.length) {
			$rootScope.cars.push({goods:product,num:1});
		}
		$scope.totalMoney();
	}
	//计算购物车总价的函数	
	$rootScope.sumPrice = 0;//总价
	$rootScope.sumNumber = 0;//商品总数量
	$scope.totalMoney = function(){
		$rootScope.sumPrice = 0;//总价
		$rootScope.sumNumber = 0;//商品总数量
		for (var i=0;i<$rootScope.cars.length;i++) {
			var aShop = $rootScope.cars[i];
			$rootScope.sumNumber += aShop.num;
			$rootScope.sumPrice += Number(aShop.goods.price)*aShop.num;
		}
	}	

});


