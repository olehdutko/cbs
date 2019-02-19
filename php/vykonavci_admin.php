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
    $result = mysql_query("SELECT VykonavciId, Vykonavci FROM `vykonavci`;");
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
			mysql_query("DELETE FROM `vykonavci` WHERE `VykonavciId`='".$strNomer."';");
}
function addRecord(){
	 mysql_query("INSERT into `vykonavci` set Vykonavci='Default name' ;");
	$id = mysql_insert_id();
	$result = mysql_query("SELECT VykonavciId, Vykonavci FROM `vykonavci` WHERE VykonavciId='".$id."'");
    $row = mysql_fetch_object($result);
    echo json_encode($row);	
}

function saveData(){ 
	$rows = json_decode($_REQUEST['data1']);
	foreach($rows as $row){
		if(!$row->VykonavciId){
			mysql_query("INSERT into `vykonavci` SET `Vykonavci` = '".$row->vykonavci."' ;");
			echo("INSERT into `vykonavci` SET `Vykonavci` = '".$row->vykonavci."' ;");
			
		}else{
			mysql_query("UPDATE `vykonavci` SET `Vykonavci` = '".$row->vykonavci."' WHERE `VykonavciId`='".$row->VykonavciId."';");		
			echo("UPDATE `vykonavci` SET `Vykonavci` = '".$row->vykonavci."' WHERE `VykonavciId`='".$row->VykonavciId."';");		
		}
	}
	showData(true);	
}
?>