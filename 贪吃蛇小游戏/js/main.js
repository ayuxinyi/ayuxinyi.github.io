var snakeCanvas = document.getElementById("snakeCanvas");
var context = snakeCanvas.getContext("2d");
var lock = false; // false 代表锁是打开状态
var timer = null;
var isDie = false; // false 表示蛇没有死亡

// 创建管理对象
var manager = new Manager();
manager.drawBackgroundLine(20,snakeCanvas,context);
var aSnake = new Snake(4,"red",manager.boxSize);
aSnake.initSnake(context);

var aFood = new Food(manager.boxSize,manager.numOfBox);
// 绘制食物
aFood.randomPos();
aFood.drawFood(context);

timer =  setInterval(function(){
lock = false;	 // 开锁
context.clearRect(0,0,snakeCanvas.width,snakeCanvas.height);
// 重新绘制背景
manager.drawBackgroundLine(20,snakeCanvas,context);
// 移动蛇
aSnake.moveSnake();
// 重新绘制蛇的身体
aSnake.drawSnakeBody(context);
// 重新绘制食物
aFood.drawFood(context);
// 判断蛇是否吃到了食物
manager.snakeEatFood(aSnake,aFood);
// 判断蛇是否死亡
aSnake.crashCheck(snakeCanvas,timer);
},200);

function game(){
lock = true;	 // 开锁
context.clearRect(0,0,snakeCanvas.width,snakeCanvas.height);
// 重新绘制背景
manager.drawBackgroundLine(20,snakeCanvas,context);
// 重新绘制蛇的身体
aSnake.drawSnakeBody(context);
// 重新绘制食物
aFood.drawFood(context);
}


// 键盘的监听事件
document.onkeydown = function(event){
	
	 var ev = event || window.event;
	 switch (ev.keyCode){
	 	case 37:
	 		if((aSnake.direction == "top" || aSnake.direction == "bottom") && lock == false){
	 		aSnake.direction = "left";
	 		lock = true;
	 		console.log(aSnake.prevBody);
	 		console.log(aSnake.snakeBodyArray);
	 		
	 		}		
	 		break;
	 	case 38:
	 		if ((aSnake.direction == "left" || aSnake.direction == "right") && lock == false) {
	 			aSnake.direction = "top";
	 			lock = true;
	 		}
	 		
	 		break;
	 	case 39:
	 		if((aSnake.direction == "top" || aSnake.direction == "bottom") && lock == false){
	 		aSnake.direction = "right";
	 		lock = true;
	 		}
	 		break;
	 	case 40:
	 		if ((aSnake.direction == "left" || aSnake.direction == "right") && lock == false) {
	 			aSnake.direction = "bottom";
	 			lock = true;
	 		}
	 		break;
	 	default:
	 		break;
	 }
}
