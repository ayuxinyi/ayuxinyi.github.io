<?php 
error_reporting(E_ALL ^ E_DEPRECATED);
$name = $_GET["name"];
$img = null;
//1.跟mysql建立链接
	$db = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
	//设置编码
	mysql_query("set names utf8");
	if($db){//1.链接成功
		//2.选择操作的数据库
		mysql_select_db(SAE_MYSQL_DB, $db);
		//3.进行操作
		$sql = "SELECT * FROM shixiangji WHERE name = '$name'";
		$res = mysql_query($sql);
		// print_r($res);
		// var_dump($res);
		// 判断查询的数据
		if(mysql_num_rows($res)>0){
			while ($row = mysql_fetch_assoc($res)) {
				$img = $row['img'];
			}
		}
		
	}
 ?>
<!DOCTYPE html>
<html lang="en" style="overflow-x:hidden;overflow-y:hidden">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/index11.css">
	<script type="text/javascript" src="jquery1.js"></script>
	<script type="text/javascript" src="jquery.easing.1.3.js"></script>	
</head>
<body>
	<div id="windowloading">
		<div id="wld">
			<img src="loading.gif">
		</div>
	</div>
	<div id="WRAP" style="display:none;">
		<div id="slider" class="clearfix">
		<div id="logoImg">
			<img id="btns" src="logo.png" style="position: absolute;top:50px;left:80px;">
			<img src="233.png" style="position: absolute;top:20px;right:10px;">
		</div>
		<div id="Cases">
			<h3 id="btn"><a href="http://1.jypzip.applinzi.com/jpgzip/%E9%A1%B9%E7%9B%AE1/index1.html">案例 Cases</a></h3>
			<ul id="CasesMenue">
				<li>平面</li>
				<li>移动端</li>
				<li>网页设计</li>
				<li>动画/手绘</li>
			</ul>
		</div>
		<div id="Contact">
			<ul id="ContactMenue">
				<li id="TEXT"><a id="az" href="http://1.jypzip.applinzi.com/jpgzip/%E9%A1%B9%E7%9B%AE1/index2.html">文字Blog</a></li>
				<li id="About"><a href="http://1.jypzip.applinzi.com/jpgzip/%E9%A1%B9%E7%9B%AE1/index3.html">关于About</a></li>
				<li id="Service"><a href="http://1.jypzip.applinzi.com/jpgzip/%E9%A1%B9%E7%9B%AE1/index4.html">服务/报价 Service</a></li>
				<li id="ContactWe"><a href="http://1.jypzip.applinzi.com/jpgzip/%E9%A1%B9%E7%9B%AE1/index5.html">联系我们 Contact</a></li>
				<li id="Liinks"><a href="http://1.jypzip.applinzi.com/jpgzip/%E9%A1%B9%E7%9B%AE1/index6.html">友情链接 Liinks</a></li>
			</ul>
		</div>
	</div>
	<div id="ContactWrap" style="position:relative;top:-13px;left:40px;">
		<div id="Bottom" style="background:#636363;height:100%;border:1px solid;">
			<div id="BottomImg">
				<div id="move">
					<ul>
						<li style="text-align: center;">
						<?php 
						echo "<img style='width:100%;height:auto;'"."src=".$img.">";
						 ?>
						</li>
					</ul>
				</div>
				<div id="sliderBox" style="width:5px;height:150px;background:rgba(224,224,224,.4);position:absolute;top:-150px;right:3px;z-index:10000;"></div>
			</div>	
		</div>
		<div id="right">
			<div id="rightText">
				<div id="Text">
					<h1>凡客-寻找诺亚专题</h1>
					<p style="margin-top:25px;">
						<span>‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</span>
						<span style="color:#808080;">clients - 凡客</span>	
						<br>
						<span style="color:#808080;">designer - 王文辉</span>
						<br>
						<span >‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</span>
						<br>
						<span style="color:#666666;display:inline;">凡客vjia-2012寻找诺亚专题.是在凡客期</span>
						<span style="color:#666666;display:inline;"><br>间做的2012系列专题之一.创意采用了玛</span><br>
						<span style="color:#666666;display:inline;">雅末日预言迎合了当时的氛围。最终该</span><br>
						<span style="color:#666666;display:inline;text-indent:2em;">末日预言迎合了当时的氛围。最终该系</span>
						<br>
						<span style="color:#666666;display:inline;">列专题点击量和转化率数据都有较为明显的</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
<script type="text/javascript" src="onmousewheel.js"></script>
<script type="text/javascript" src="index11.js"></script>