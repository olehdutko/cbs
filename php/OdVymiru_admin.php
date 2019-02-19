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
    //query with data
    $result = mysql_query("SELECT ID, OdVymiru FROM OdVymiru");
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
			mysql_query("DELETE FROM `OdVymiru` WHERE `ID`='".$strNomer."';");
}
function addRecord(){
	 mysql_query("INSERT into `OdVymiru` set OdVymiru='Default name' ;");
	$id = mysql_insert_id();
	$result = mysql_query("SELECT ID, OdVymiru FROM `OdVymiru` WHERE ID='".$id."'");
    $row = mysql_fetch_object($result);
    echo json_encode($row);	
}

function saveData(){ 
	$rows = json_decode($_REQUEST['data1']);
	foreach($rows as $row){
		if(!$row->ID){
			mysql_query("INSERT into `OdVymiru` SET `OdVymiru` = '".$row->OdVymiru."' ;");
		}else{
			mysql_query("UPDATE `OdVymiru` SET `OdVymiru` = '".$row->OdVymiru."' WHERE `ID`='".$row->ID."';");		
		}
	}
	showData(true);	
}
?>