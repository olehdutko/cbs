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
	$result = mysql_query("Select id, book_theme_name FROM book_themes");
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