<?php 

	$mysqli = new mysqli("my0278566.xincache1.cn", "my0278566", "gxm2010011366", "my0278566");
	if($mysqli->connect_errno){
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	$sql = "SELECT name,score FROM countMoneyRanking ORDER BY score DESC";//让数据库里面的数据按照分数降序排序,asc升序,order by以什么来排序
	$result = $mysqli->query($sql);
	$userArray = array();
	if ($result->num_rows > 0) {
		while($user = $result->fetch_assoc()){
			array_push($userArray,$user);
		}
	}
	$mysqli->close();
	$json = json_encode($userArray);
	echo $json;



 ?>