<?php

//获取指定openid用户的score
function getScoreOfUser($openid){
    $mysqli = new mysqli("my0278566.xincache1.cn", "my0278566", "gxm2010011366", "my0278566");
    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    }
    $mysqli->query("set names utf8");
    $sql = "SELECT * FROM countMoneyRanking WHERE openid = '{$openid}'";
    $result = $mysqli->query($sql);
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $score = $user["score"];
    }else{
        $score = 0;
    }
    $mysqli->close();
    return $score;
}

//更新指定openid用户的分数
function updateScore($openid, $score){
	$mysqli = new mysqli("my0278566.xincache1.cn", "my0278566", "gxm2010011366", "my0278566");
	if ($mysqli->connect_errno) {
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	$sql = "UPDATE countMoneyRanking SET score = {$score} WHERE openid = '{$openid}'";
	$result = $mysqli->query($sql);
	// if ($result) {
	// 	echo "更新成功";
	// }else{
	// 	echo "更新失败";
	// }
	$mysqli->close();
}




$openid = $_GET["openid"];
$newScore = $_GET["score"];
$score = getScoreOfUser($openid);

if($newScore > $score){
    updateScore($openid,$newScore);
    echo $newScore;
}else{
    echo $score;
}


?>