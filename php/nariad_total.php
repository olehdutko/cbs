<?php
error_reporting(0);
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
	case 'showData':
	default:	
		showData();
	break;
}
    
/*function showData($clean=false){
$objid = $_REQUEST['objid']; 
	$query = "SELECT * FROM Nariady INNER JOIN  Dodano_v_Nariad ON Nariady.ID=Dodano_v_Nariad.NariadID  where NariadID=".$objid;
	$result = mysql_query($query);
	
    $rows = mysql_num_rows($result);    
	
    while($rec = mysql_fetch_array($result)){
    	$arr[] = $rec;
    }
	if(json_encode($arr) == 0){
		$result = mysql_query("SELECT * FROM Nariady where ID=".$objid.";");
		$rows = mysql_num_rows($result);    
	    while($rec = mysql_fetch_array($result)){
	    	$arr[] = $rec;
	    }
		if($clean){
		 echo '{"total":"'.$rows.'","results":'.json_encode($arr).'}';
		}
		else
		{
		 echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
		} 
	}
	else
	{
	if($clean){
		echo '{"total":"'.$rows.'","results":'.json_encode($arr).'}';
	}
	else
	{
		echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
	}    
	}
}
*/


function showData($clean=false){
$objid = $_REQUEST['objid']; 
	$query = "SELECT * FROM Nariady INNER JOIN  Dodano_v_Nariad ON Nariady.ID=Dodano_v_Nariad.NariadID  Cross Join Kurs where NariadID=".$objid;
	$result = mysql_query($query);
	
    $rows = mysql_num_rows($result);    
	
    while($rec = mysql_fetch_array($result)){
    	$arr[] = $rec;
    }
	if($rows == 0){
		$result = mysql_query("SELECT * FROM Nariady where ID=".$objid.";");
		$rows = mysql_num_rows($result);    
	    while($rec = mysql_fetch_array($result)){
	    	$arr[] = $rec;
	    }
		if($clean){
		 echo '{"total":"'.$rows.'","results":'.json_encode($arr).'}';
		}
		else
		{
		 echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
		} 
	}
	else
	{
	if($clean){
		echo '{"total":"'.$rows.'","results":'.json_encode($arr).'}';
	}
	else
	{
		echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
	}    
	}
}
function removeRecord(){
$nariadId = $_REQUEST['nariadId']; 
$modelId = $_REQUEST['modelId']; 
$Type = $_REQUEST['Type']; 
$query = "DELETE FROM `Dodano_v_Nariad` WHERE `ModelId`=".$modelId." and NariadID = ".$nariadId.";";
mysql_query($query);
//  Добавлення в Склад/ Виробничі фонди
// Видалення з балансу контрагента
	
	echo ($query);
}


function addRecord(){
	 mysql_query("INSERT into `price` set model='Default name' ;");
	$id = mysql_insert_id();
	$result = mysql_query("Select CategoryId, CategoryName,SubCategoryID, SubCategoryName, modelId, model, description, vendor, Price, Valiuta FROM price where modelId='".$modelId."'");
    $row = mysql_fetch_object($result);
    echo json_encode($row);	
}

function saveData(){ 
	$result = mysql_query("Select * from Kurs;");
	while ($row = mysql_fetch_array($result)) {
	$euro = $row['euro'];
	$grivna = $row['grivna'];
	$dollar = $row['dollar'];
}
	$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
	switch($row->Valiuta){
	case 'dollar':
		$kurs = $dollar;
		break;
	case 'grivna':
		$kurs = $grivna;
		break;
	case 'euro':
		$kurs = $euro;
		break;
	};

		$query = "UPDATE `ZamovleniTovary` SET 
		`Price` = ".$row->Price.", 
		`model` = '".$row->Model."', 
		`Description` = '".addslashes($row->Description)."', 
		`OdVymir` = '".$row->OdVymir."',
		`PriceGrn` = ".$row->Price * $kurs.", 
		`Propozycija` = ".(((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs)* $row->Count.", 
		`Count` = ".$row->Count.", 
		`Nacinka` = ".$row->Nacinka.", 
		`Time` = ".$row->Time.", 
		`TotalTime` = ".$row->Time * $row->Count.", 
		`Dohid` = ".(((((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs)* $row->Count) - (($row->Price * $row->Count)* $kurs)).", 
		`FinalPrice` = ".($row->Price * $row->Count)* $kurs." 
		WHERE ModelId = ".$row->ModelId." and zamovleniaID = ".$row->zamovleniaID.";";
		
		mysql_query($query);
	}
	

	echo ($query);
	
	}

function AddFirstRecord(){ 
	$rows = json_decode($_REQUEST['data']);
	mysql_query("INSERT into `zamovlenia` SET `Tema` = '".$row->Tema."', `nomer` = '".$row->Nomer."', `nazva` = '".$row->Nazva."', `zamovnyk` = '".$row->Zamovnyk."', `Vykonavci` = '".$row->Vykonavci."',`adresa` = '".$row->Adresa."', `date` = '".$row->Date."', `PDV` = '".$row->PDV."', `Variant` = '".$row->Variant."';");
	$result=mysql_query($query);
	echo $result;
}
	mysql_close($new_connection);
?>