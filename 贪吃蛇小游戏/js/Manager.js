/*功能：画线*/
function Manager(){
	this.boxSize = null; // 格子大小
	this.numOfBox = null; // 格子数量
	//画线
	this.drawBackgroundLine = function(boxSize,canvas,context){
		this.boxSize = boxSize;
		this.numOfBox = canvas.width / this.boxSize;
		// 横线
		for (var i = 1;i < this.numOfBox;i++) {
			context.beginPath();
			context.moveTo(0,i * this.boxSize);
			context.lineTo(canvas.width,i * this.boxSize);
			context.strokeStyle = "#ccc";
			context.stroke();
			context.save();
			
		}
		// 竖线
		for (var i = 1;i < this.numOfBox;i++) {
			context.beginPath();
			context.moveTo(i*this.boxSize,0);		context.lineTo(i*this.boxSize,canvas.height);
			context.strokeStyle = "#ccc";
			context.stroke();
			context.save();
			
		}
	}
	
	// 蛇是否吃到食物
	this.snakeEatFood = function(theSnake,theFood){
		// 蛇头
		var snakeHead = theSnake.snakeBodyArray[theSnake.snakeBodyArray.length - 1];
		if (snakeHead.x == theFood.x && snakeHead.y == theFood.y) {
			// 吃到了食物
			// 1.食物的位置重新随机
			theFood.randomPos();
			// 2.蛇身体加长
			theSnake.addBody();
		}
		
	}
}
