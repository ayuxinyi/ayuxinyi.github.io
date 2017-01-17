//配置主界面的控制器
app.controller("productVC",function($scope,$http,$rootScope){
	$http({
		method:"GET",
		url:"https://ayuxinyi.github.io/shop/php/product.php",
	}).then(function(response){
//		console.log(response.data);
		$scope.products = response.data;
		$scope.findCategory("全部");
	});
	//处理点击分类的函数
	$scope.findCategory = function(category){
		$scope.categoryProducts = [];
		$scope.currentCategory = category;
		if(category == "全部"){
			$scope.categoryProducts = $scope.products;
		}else{
			for (var i = 0;i<$scope.products.length;i++) {
				if (category == $scope.products[i]['category']) {
					$scope.categoryProducts.push($scope.products[i]);
				}
			}
		}
		$scope.numOfPages();
		$scope.productsPerPage(1);//默认显示每种商品的第一页
	}

	//处理分类样式的函数
	$scope.classOfCategory = function(category){
		return $scope.currentCategory == category ? "btn-primary" : "btn-defualt";
	}
	
	//实现分页,主要返回分页的页数,以数组的形式返回
	$scope.numOfPages = function(){
		var num = $scope.categoryProducts.length / 3;
		$scope.pagesArray = [];
		for (var i=0;i<num;i++) {
			$scope.pagesArray.push(i+1);
		}
	}
	//点击分页按钮的时候,显示对应的商品函数
	$scope.productsPerPage = function(page){
		//categoryProducts 是当前分类所有的商品
		//page 当前页码
		//需要一个承载3个元素的数组
		$scope.pageProducts = [];
		//定义变量 记录当前的页码
		$scope.currentPage = page;
		for (var i = (page-1)*3;i<page*3&&i<$scope.categoryProducts.length;i++) {//取最小值
			$scope.pageProducts.push($scope.categoryProducts[i]);
		}
	}
	//页码按钮的class样式
	$scope.classOfPage = function(page){
		return page == $scope.currentPage ? "btn-primary" : "btn-defualt";
	}
		
});
