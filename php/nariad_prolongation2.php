<?php
error_reporting(0);

include "../php/SQL.php";
extract($_REQUEST);
switch($_REQUEST['action']){

	case 'showData':
	default:	
		showData();
	break;
	case 'MaxID':
		MaxID();
	break;
	
}

function showData($clean=false){
	$OldNariadId = $_REQUEST['OldNariadId']; 
	//$result = mysql_query("Select CategoryName FROM Categories");
	$query = "Select P_kontragent, S_kontragent, Date, Prymitka FROM Nariady where ID =".$OldNariadId;
	$result = mysql_query($query);
	//$result = mysql_query("Select Max(ID) as MaxN_Nariad FROM Nariady");
	
    $rows = mysql_num_rows($result);    
    while($rec = mysql_fetch_array($result)){
    	$arr[] = $rec;
    }
		 echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
		 //echo($query);
}

function MaxID($clean=false){
	$result = mysql_query("Select Max(ID) as MaxN_Nariad FROM Nariady");
    $rows = mysql_num_rows($result);    
    while($rec = mysql_fetch_array($result)){
    	$arr[] = $rec;
    }
	 echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
}
mysql_close($new_connection);
?>