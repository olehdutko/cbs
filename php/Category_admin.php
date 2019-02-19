<?php
include "../php/SQL.php";

switch($_REQUEST['action']){
	case 'saveData':
		saveData();
	break;
	case 'addRecord':
		addRecord();
	break;
	case 'removeRecord':
		removeRecord();
	break;
	case 'showData':
	default:	
		showData();
	break;
}
    
function showData($clean=false){
    $result = mysql_query("SELECT CategoryID , CategoryName  FROM `Categories`;");
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
function removeRecord(){
	$strNomer = $_POST['strNomer'];
	mysql_query("DELETE FROM Categories Where `CategoryID`='".$strNomer."';");
	echo("DELETE FROM `Categories Where `CategoryID`='".$strNomer."';");
}
function addRecord(){
	 mysql_query("INSERT into `Categories` set CategoryName='New Category' ;");
	$id = mysql_insert_id();
	$query = "SELECT CategoryID, CategoryName FROM `Categories` WHERE CategoryID='".$id."'";
	$result = mysql_query($query);
    $row = mysql_fetch_object($result);
    //echo ($query);	
	echo json_encode($row);	
}



function saveData(){ 
	$rows = json_decode($_REQUEST['data3']);
	foreach($rows as $row){
		/*if(!$row->ObjectThemesId){
			mysql_query("INSERT into `Categories` SET `CategoryName` = '".$row->CategoryName."' ;");
		}else{
			mysql_query("UPDATE `Categories` SET `CategoryName` = '".$row->CategoryName."' WHERE `CategoryID`='".$row->CategoryID."';");		
		}*/
		mysql_query("UPDATE `Categories` SET `CategoryName` = '".$row->CategoryName."' WHERE `CategoryID`='".$row->CategoryID."';");		
	}
	showData(true);	
}

mysql_close($new_connection);
?>