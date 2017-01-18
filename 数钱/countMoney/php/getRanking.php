<?php

	$score = $_GET["score"];

	$mysqli = new mysqli("my0278566.xincache1.cn", "my0278566", "gxm2010011366", "my0278566");
	if($mysqli->connect_errno){
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	$sql = "SELECT count(*) as count FROM countMoneyRanking WHERE score >= $score";
	$result = $mysqli->query($sql);
	if ($result->num_rows > 0) {
		$user = $result->fetch_assoc();
		echo $user["count"];
	}
	$mysqli->close();

?>