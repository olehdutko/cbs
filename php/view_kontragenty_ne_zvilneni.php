<?php
include "../php/SQL.php";
error_reporting(0);

extract($_REQUEST);

switch($_REQUEST['action']){
	case 'showData':
	default:	
		showData();
	break;
	case 'showKontragentyAll':
		showKontragentyAll();
	break;
}
    
function showData($clean=false){
	//$result = mysql_query("Select PIB as Type FROM Kontragenty where Type = 'Pracivnyk'");
	$result = mysql_query("Select PIB as Type FROM Kontragenty where Stan = 'Chyslytsia'");
    $rows = mysql_num_rows($result);    
    while($rec = mysql_fetch_array($result)){
    	$arr[] = $rec;
    }
	if($clean){
		 echo '{"total":"'.$rows.'","results":'.json_encode($arr).'}';
	}else{
		 echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
	}       
}

function showKontragentyAll($clean=false){
	$result = mysql_query("Select PIB as Type FROM Kontragenty");
    $rows = mysql_num_rows($result);    
    while($rec = mysql_fetch_array($result)){
    	$arr[] = $rec;
    }
	if($clean){
		 echo '{"total":"'.$rows.'","results":'.json_encode($arr).'}';
	}else{
		 echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
	}       
}

mysql_close($new_connection);	
?>