<?php
error_reporting(0);
//make database connection
include "../php/SQL.php";
extract($_REQUEST);

switch($_REQUEST['action']){
	case 'AddFirstRecord':
		AddFirstRecord();
	break;
	case 'saveData_active':
		saveData_active();
	break;
	case 'saveData_montazh':
		saveData_montazh();
	break;
	case 'saveData_fondy':
		saveData_fondy();
	break;
	case 'saveData_sklad':
		saveData_sklad();
	break;
	case 'addRecordActive':
		addRecordActive();
	break;
	case 'addRecordMontazh':
		addRecordMontazh();
	break;
	case 'addRecordSklad':
		addRecordSklad();
	break;
	case 'removeRecord_montazh':
		removeRecord_montazh();
	break;
	case 'removeRecord_active':
		removeRecord_active();
	break;
	case 'removeRecordSklad':
		removeRecordSklad();
	break;
	case 'showData':
	default:	
		showData(((is_numeric($_GET['start'])) ? $_GET['start'] : 0), ((is_numeric($_GET['limit'])) ? $_GET['limit'] : 25));
	break;
}
    
		
function showData($start, $limit){
    //query with data
    $res_total = mysql_query("SELECT count(ModelId) AS total FROM price");
	$total = mysql_fetch_row($res_total);
	$result = mysql_query("Select CategoryId, CategoryName, SubCategoryId, SubCategoryName, ModelId, Model, description, vendor, Price, Valiuta, Nacinka, Time	 FROM price limit ".$start.",".$limit." ORDER BY ModelId DESC ");
    $rows = mysql_num_rows($result);    
    while($rec = mysql_fetch_array($result)){
    	$arr[] = $rec;
    }
	
	echo $_GET['callback'].'({"total":"'.$total[0].'","results":'.json_encode($arr).'})';
	
}

function removeRecord_montazh(){
$data = $_POST['data'];
			$query1 = "DELETE FROM `montazh` WHERE `ModelId`=".$data.";";
			mysql_query($query1);
			echo $query1;
		}		
		
function removeRecord_active(){
$data = $_POST['data'];
			$query1 = "DELETE FROM `active` WHERE `ModelId`=".$data.";";
			mysql_query($query1);
			echo $query1;
		}	

function removeRecordSklad(){
	$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
		if($row->ModelId){
			$query1 = "DELETE FROM `sklad` WHERE `ModelId`=".$row->ModelId.";";
			mysql_query($query1);
			echo $query1;
		}		
	}
}

function addRecordActive(){
	 mysql_query("INSERT into `active` set Model= 'Default name';");
	$id = mysql_insert_id();
	$result = mysql_query("Select CategoryId, CategoryName,SubCategoryID, SubCategoryName, ModelId, Model, description, vendor, Price, Valiuta FROM price where ModelId='".$ModelId."' ORDER BY ModelId DESC ");
    $row = mysql_fetch_object($result);
    echo json_encode($row);	
}

function addRecordMontazh(){
	 mysql_query("INSERT into `montazh` set Model= 'Default name';");
	$id = mysql_insert_id();
	$result = mysql_query("Select CategoryId, CategoryName,SubCategoryID, SubCategoryName, ModelId, Model, description, vendor, Price, Valiuta FROM price where ModelId='".$ModelId."'");
    $row = mysql_fetch_object($result);
    echo json_encode($row);	
}

function addRecordSklad(){
	 mysql_query("INSERT into `sklad` set Model= 'Default name';");
	$id = mysql_insert_id();
	$result = mysql_query("Select CategoryId, CategoryName,SubCategoryID, SubCategoryName, ModelId, Model,count, description, vendor, Price, Valiuta FROM sklad where ModelId='".$ModelId."'");
    $row = mysql_fetch_object($result);
    echo json_encode($row);	
}

function saveData_active(){ 
	
	$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
	
	$string = iconv("UTF-8", "ISO-8859-1", addslashes($row->Description));	 
		$query = "UPDATE `active` SET 
		`CategoryId` = ".$row->CategoryId.", 
		`CategoryName` = '".$row->CategoryName."', 
		`SubCategoryId` = ".$row->SubCategoryId.", 
		`SubCategoryName` = '".$row->SubCategoryName."', 
		`Model` = '".$row->Model."',
		`Vendor` = '".$row->Vendor."', 
		`Description` = '".addslashes($row->Description)."', 
		`OdVymir` = '".addslashes($row->OdVymir)."', 
		`Price` = ".$row->Price.", 
		`Nacinka` = ".$row->Nacinka.", 
		`Time` = ".$row->Time.", 
		`Valiuta` = '".$row->Valiuta."' WHERE `ModelId`=".$row->ModelId." ;";		
		mysql_query($query);
		}
		echo $query;
		//echo $string;
}

function saveData_montazh(){ 
	$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
	$query = "UPDATE `montazh` SET 
	`CategoryId` = ".$row->CategoryId.", 
	`CategoryName` = '".$row->CategoryName."', 
	`SubCategoryId` = ".$row->SubCategoryId.", 
	`SubCategoryName` = '".$row->SubCategoryName."', 
	`Model` = '".$row->Model."',
	`Vendor` = '".$row->Vendor."', 
	`Description` = '".addslashes($row->Description)."', 
	`OdVymir` = '".addslashes($row->OdVymir)."', 
	`Price` = ".$row->Price.", 
	`Nacinka` = ".$row->Nacinka.", 
	`Time` = ".$row->Time.", 
	`Valiuta` = '".$row->Valiuta."' WHERE `ModelId`=".$row->ModelId." ;";
	mysql_query($query);
	}
	//echo iconv("ISO-8859-1", "UTF-8", $query);
	echo $query;
}

function saveData_fondy(){ 
	$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
	$query = "UPDATE `vyrobnychiFondy` SET 
	`Model` = '".$row->Model."', 
	`Description` = '".$row->Description."', 
	`Vendor` = '".$row->Vendor."', 
	`Count` = ".$row->Count.", 
	`OdVym` = '".$row->OdVym."', 
	`Date` = '".$row->Date."', 
	`Price` = '".$row->Price."',
	`Valiuta` = '".$row->Valiuta."',
	`Prymitka` = '".$row->Prymitka."' WHERE `ID`=".$row->ID." ;";
	mysql_query($query);
	}
	echo iconv("ISO-8859-1", "UTF-8", $query);
	//echo $query;
}



function saveData_sklad(){ 

$rows = json_decode($_REQUEST['data']);
	foreach($rows as $row){
	$query = "UPDATE `sklad` SET 
	
	
	`CategoryId` = '".$row->CategoryId."', 
	`CategoryName` = '".$row->CategoryName."', 
	`Model` = '".$row->Model."',
	`count` = '".$row->count."',
	`Vendor` = '".$row->Vendor."', 
	`OdVym` = '".$row->OdVym."', 
	`Description` = '".addslashes($row->Description)."', 
	`Price` = ".$row->Price.", 
	`OtrymanoVid` = '".$row->OtrymanoVid."', 
	`Valiuta` = '".$row->Valiuta."' WHERE `ModelId`=".$row->ModelId." ;";
	mysql_query($query);
	}
	echo iconv("ISO-8859-1", "UTF-8", $query);


	

/*	
$CategoryId = $_POST['CategoryId'];
$CategoryName = $_POST['CategoryName'];
$Model = $_POST['Model'];
$count = $_POST['count'];
$OdVym = $_POST['OdVym'];
$ModelId = $_POST['ModelId'];
$Description = $_POST['Description'];
$Vendor = $_POST['Vendor'];
$Price = $_POST['Price'];
$Valiuta = $_POST['Valiuta'];
$OtrymanoVid = $_POST['OtrymanoVid'];
	
	

	$query = "UPDATE `sklad` SET 
	`CategoryId` = ".$CategoryId.", 
	`CategoryName` = '".$CategoryName."', 
	`Model` = '".$Model."',
	`count` = '".$count."',
	`Vendor` = '".$Vendor."', 
	`OdVym` = '".$OdVym."', 
	`Description` = '".addslashes($Description)."', 
	`Price` = ".$Price.", 
	`OtrymanoVid` = '".$OtrymanoVid."', 
	`Valiuta` = '".$Valiuta."' WHERE `ModelId`=".$ModelId." ;";
	echo ($query);
	mysql_query($query);
	
	echo iconv("ISO-8859-1", "UTF-8", $query);
*/	
}

function AddFirstRecord(){ 
	$rows = json_decode($_REQUEST['data']);
		mysql_query("INSERT into `zamovlenia` SET `Tema` = '".$row->Tema."', `nomer` = '".$row->Nomer."', `nazva` = '".$row->Nazva."', `zamovnyk` = '".$row->Zamovnyk."', `Vykonavci` = '".$row->Vykonavci."',`adresa` = '".$row->Adresa."', `date` = '".$row->Date."', `PDV` = '".$row->PDV."', `Variant` = '".$row->Variant."';");
		$result=mysql_query($query);
	echo $result;
}


$query = "UPDATE `montazh` SET 
`CategoryId` = ".$row->CategoryId.", 
`CategoryName` = '".$row->CategoryName."', 
`SubCategoryId` = ".$row->SubCategoryId.", 
`SubCategoryName` = '".$row->SubCategoryName."', 
`Model` = '".$row->Model."',
`Vendor` = '".$row->Vendor."', 
`Description` = '".addslashes($row->Description)."', 
`Price` = ".$row->Price.", 
`Valiuta` = '".$row->Valiuta."' WHERE `ModelId`=".$row->ModelId." ;";		



















?>