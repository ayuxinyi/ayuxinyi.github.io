<?php

	$name = $_GET["name"];
	$tel = $_GET["tel"];
	$openid = $_GET["openid"];


	function updateNameAndTelephone($openid, $name, $tel){
		$mysqli = new mysqli("my0278566.xincache1.cn", "my0278566", "gxm2010011366", "my0278566");
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query("set names utf8");
		$sql = "UPDATE countMoneyRanking SET name = '{$name}', tel = '{$tel}' WHERE openid = '{$openid}'";
		$result = $mysqli->query($sql);
        //if ($result) {
        //	echo "update success";
        //}else{
        //	echo "update failed";
        //}
		$mysqli->close();
    }
    updateNameAndTelephone($openid,$name,$tel);


?>