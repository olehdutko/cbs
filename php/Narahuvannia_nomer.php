<?php
error_reporting(0);
include "../php/SQL.php";

extract($_REQUEST);

switch($_REQUEST['action']){
	case 'showData':
	default:	
		showData();
	break;
}

function showData($clean=false){
$result2 = mysql_query("Select Max(ID) as nomer FROM Narahuvannia");
	$rec2 = mysql_fetch_array($result2);
	if($rec2[0] == null){
	$rec2[0] = 1;
	}

	
	$result1 = mysql_query("Select vykonavci, VykonavciId FROM vykonavci");
    $rows = mysql_num_rows($result1);    
    while($rec1 = mysql_fetch_array($result1)){
    	$arr[] = $rec1;
    }
	if($clean){
		 $resoult1 = '{"total":"'.$rows.'",MaxN:'.$rec2[0].',"vykonavci":'.json_encode($arr).'}';
	}else{
		 $resoult1 = $_GET['callback'].'({"total":"'.$rows.'",MaxN:'.$rec2[0].',"vykonavci":'.json_encode($arr).'})';
	}       
echo $resoult1 ;    

   
}

mysql_close($new_connection);
?>