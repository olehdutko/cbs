<?php
error_reporting(0);
include "../php/SQL.php";
extract($_REQUEST);
	$euro = $_POST['euro'];
	$grivna = $_POST['grivna'];
	$dollar = $_POST['dollar'];
	$pdv = $_POST['pdv'];

switch($_REQUEST['action']){

	case 'saveData':
		saveData();
	break;
	case 'showData':
	default:	
		showData();
	break;
}
    
function showData($clean=false){
	$result = mysql_query("Select * FROM Kurs");
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
function saveData($clean=false){
	$query = 'INSERT INTO kurs(euro, grivna, dollar, pdv) VALUES ("' . 
	$euro . '", "' .
	$grivna . '", "' .
	$dollar . '", "' .
	$pdv . '")';
	mysql_query($query);
	mysql_close($new_connection);       
}
?>