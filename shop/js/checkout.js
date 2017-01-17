app.controller("checkVC",function($scope,$rootScope){
	$scope.deleteProduct = function(aShop){
		var index = $rootScope.cars.indexOf(aShop);
		$rootScope.cars.splice(index,1);
		$scope.totalMoney();
	}
	$scope.addProductNum = function(aShop){
		aShop.num ++;
		$scope.totalMoney();
	}
	$scope.reduceProductNum = function(aShop){
		aShop.num --;
		if(aShop.num == 0){
			$scope.deleteProduct(aShop);
		}
		
		$scope.totalMoney();
	}
});