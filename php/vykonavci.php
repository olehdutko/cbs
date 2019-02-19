<?php
error_reporting(0);
//make database connection
include "../php/SQL.php";

extract($_REQUEST);

switch($_REQUEST['action']){
	case 'AddFirstRecord':
		AddFirstRecord();
	break;case 'saveData':
		saveData();
	break;
	case 'addRecord':
		addRecord();
	break;
	case 'removeRecord':
		removeRecord();
	break;
	case 'showData2':
		showData2();
	break;
	case 'showData':
	default:	
		showData();
	break;
}

function showData($clean=false){
$result2 = mysql_query("Select Max(nomer) as nomer FROM objekty");
	$rec2 = mysql_fetch_array($result2);
	$result3 = mysql_query("Select Max(ID) as nomer FROM Nariady");
	$rec3 = mysql_fetch_array($result3);
	
	$result1 = mysql_query("Select vykonavci, VykonavciId FROM vykonavci");
    $rows = mysql_num_rows($result1);    
    while($rec1 = mysql_fetch_array($result1)){
    	$arr[] = $rec1;
    }
	if($clean){
		 $resoult1 = '{"total":"'.$rows.'",MaxN:'.$rec2[0].',MaxN_Nariad:'.$rec3[0].',"vykonavci":'.json_encode($arr).'}';
	}else{
		 $resoult1 = $_GET['callback'].'({"total":"'.$rows.'",MaxN:'.$rec2[0].',MaxN_Nariad:'.$rec3[0].',"vykonavci":'.json_encode($arr).'})';
	}       
echo $resoult1 ;    
   
}

function showData2($clean=false){

	$result1 = mysql_query("Select vykonavci, VykonavciId FROM vykonavci");
    $rows = mysql_num_rows($result1);    
    while($rec1 = mysql_fetch_array($result1)){
    	$arr[] = $rec1;
    }
	
	if($clean){
		 echo '{"total":"'.$rows.'","vykonavci":'.json_encode($arr).'}';
	}else{
		 echo $_GET['callback'].'({"total":"'.$rows.'","vykonavci":'.json_encode($arr).'})';
	}
echo $resoult1 ;    
   
}

function removeRecord(){
	$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
		if($row->vykonavci){
			mysql_query("DELETE FROM `vykonavci` WHERE `VykonavciId`=".$row->VykonavciId.";");
		}		
	}
}
function addRecord(){
	mysql_query("INSERT into `vykonavci` set Vykonavci='Default name' ;");
	$id = mysql_insert_id();
	$result = mysql_query("SELECT id, name, password FROM users WHERE id='".$id."'");
	$result = mysql_query("Select Vykonavci FROM vykonavci where Vykonavci='".$vykonavci."'");
    $row = mysql_fetch_object($result);
    echo json_encode($row);	
}
function saveData(){ 
	$rows = json_decode($_REQUEST['data']);
		foreach($rows as $row){
		if(!$row->VykonavciId){
			  mysql_query("INSERT into `vykonavci` SET `Vykonavci` = ".$row->vykonavci.";");
		}else{
			  mysql_query("UPDATE `vykonavci` SET `Vykonavci` = '".$row->vykonavci."' WHERE `VykonavciId`= ".$row->vykonavci." ;");		
		}
}
echo "UPDATE vykonavci SET Vykonavci='".$row->vykonavci."' WHERE VykonavciId=".$row->VykonavciId.";";
	
}
function AddFirstRecord(){ 
	$rows = json_decode($_REQUEST['data']);
		mysql_query("INSERT into `vykonavci` SET `vykonavci` = '".$row->vykonavci."';");
		$result=mysql_query($query);
	echo $result;
}

mysql_close($new_connection);
?>