function Food(w,range){
	this.x = 0;
	this.y = 0;
	this.w = w;
	this.range = range;
	// 随机位置的方法a-b  b-a+1  + a
	this.randomPos = function(){
		this.x = parseInt(Math.random() * this.range) * this.w;
		this.y = parseInt(Math.random() * this.range) * this.w;
	}
	// 绘制食物
	this.drawFood = function(context){
		context.beginPath();
		context.fillStyle = "green";
		context.fillRect(this.x,this.y,this.w,this.w);
		context.save();
	}
}
