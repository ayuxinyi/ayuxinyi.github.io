function Snake(bodyLength,color,w){// 蛇头的颜色
	this.WIDTH = Number(w); // 一节身体的大小
	this.bodyLength = bodyLength;
	this.color = color;
	this.snakeBodyArray = []; // 用来存储蛇每节身体的坐标，数组里面最后一个元素是蛇头
	this.prevBody = [];
	this.direction = "right";
	// 初始化蛇的状态,注意这个方法在初始化蛇对象的时候就需要调用
	this.initSnake = function(context){
		for (var i = 0; i < this.bodyLength;i++) {
			var pos = {
				x:i*this.WIDTH,
				y:0
			};
		this.snakeBodyArray.push(pos);
		}
		this.drawSnakeBody(context);
	}	
	//1、绘制身体
	 this.drawSnakeBody = function(context){
	 	var body = [];
	 	if (isDie) {
	 		body = this.prevBody;
	 	}else{
	 		body = this.snakeBodyArray;
	 	}
	 	for (var i = 0; i < body.length;i++) {
	 		var pos = body[i];
	 		context.beginPath();
	 		if (i == body.length - 1) {
	 			context.fillStyle = this.color;
	 		}else{
	 			context.fillStyle = "black";	
	 		}	 		context.fillRect(pos.x,pos.y,this.WIDTH,this.WIDTH);
	 		context.strokeStyle = "white"; context.strokeRect(pos.x,pos.y,this.WIDTH,this.WIDTH)
	 		context.save();
	 	}
	 	
	 }
	//2、移动
	this.moveSnake = function(){
		
		this.prevBody = [];
		for (var i = 0; i < this.snakeBodyArray.length;i++) {
			this.prevBody.push(this.snakeBodyArray[i]);
		}
		
		this.snakeBodyArray.shift();
		var currentHead = this.snakeBodyArray[this.snakeBodyArray.length - 1];
		
		var newHead = {};
		switch (this.direction){
			case "left":
				newHead.x = currentHead.x - this.WIDTH;
				newHead.y = currentHead.y;
				break;
			case "top":
				newHead.x = currentHead.x;
				newHead.y = currentHead.y - this.WIDTH;
				break;
			case "right":
				newHead.x = currentHead.x + this.WIDTH;
				newHead.y = currentHead.y;
				break;
			case "bottom":
				newHead.x = currentHead.x;
				newHead.y = currentHead.y + this.WIDTH;
				break;
			default:
				break;
		}
		
		
		this.snakeBodyArray.push(newHead);
	}
	
	// 蛇身体增加长度
	this.addBody = function(){
		var pos = {x:0,y:0};
		this.snakeBodyArray.unshift(pos);
	}
	// 检测蛇是否碰撞了墙壁或者自己
	this.crashCheck = function(canvas,timer){
		var snakeHead = this.snakeBodyArray[this.snakeBodyArray.length - 1];
		if (snakeHead.x >= canvas.width || snakeHead.x < 0 || snakeHead.y < 0 || snakeHead.y >= canvas.height) {
			isDie = true;
			alert("game Over");
//			 稍后处理
			clearInterval(timer);
			game();
			return;
		}
		//循环检测 身体部分是否发生了碰撞
		for (var i = 0;i < this.snakeBodyArray.length - 1; i++) {
			var bodyPice = this.snakeBodyArray[i];
			if (snakeHead.x == bodyPice.x && snakeHead.y == bodyPice.y) {
				isDie = true;
				alert("game over");
//				 稍后处理
				clearInterval(timer);
				game();
				return;
			}
		}
	}
	
}
