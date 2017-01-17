<meta charset="utf-8">
<?php 
include_once 'config.inc.php';
include_once 'mysql.inc.php';
$link = connect();
// $query = "SELECT * from user";
// $result = execute($link,$query);
// var_dump(execute_boll($link,$query));
// function a (&$a){
// 	$a++;
// 	echo $a;
// }
// $b = 10;
// a($b);
// echo '<br/>';
// echo $b;

$query = "SELECT count(*) from user";
$result = mysqli_query($link,$query);
// var_dump(mysqli_num_rows($result));
var_dump(mysqli_fetch_all($result));
close($link);
//在我们的Php里面,如果向函数里面传递的是对象,那么并不是把对象复制一份传给函数,而是直接
//直接传递的这个对象本身
//向函数里面传递对象类型变量的时候,其实传递的就是变量本身
 ?>