<?php 
	$my = new mysqli("127.0.0.1","root","","Text1","3307");
	if ($my->connect_errno) {
		die("链接失败".$my->connect_error);
	}
	$my->query("set names utf8");
	$sql = "SELECT *FROM product";
	$rs = $my->query($sql);
	$final = $rs->fetch_all(MYSQL_ASSOC);
	echo json_encode($final);
 ?>