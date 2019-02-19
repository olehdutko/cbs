<?php
include "../php/SQL.php";
error_reporting(0);

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
	case 'showPropositiaDohid':
		showPropositiaDohid();
	break;
	case 'showData':
	default:	
		showData();
	break;
}
    
function showData($clean=false){
	$query_access ="SELECT `Prymitka` FROM `users` WHERE `login`='borsuk' LIMIT 1";
			$sql = mysql_query($query_access) or die(mysql_error());
			if (mysql_num_rows($sql) == 1)
			{
				$row = mysql_fetch_assoc($sql);
				$access = $row['Prymitka'];
			}

	if($access == "borsuk"){
		$objid = $_REQUEST['objid']; 
		//$result = mysql_query("SELECT * FROM objekty INNER JOIN ZamovleniTovary ON objekty.nomer=ZamovleniTovary.ZamovleniaID  where zamovleniaID=".$objid." and nomer=".$objid."");
		$result = mysql_query("SELECT * FROM objekty INNER JOIN ZamovleniTovary ON objekty.nomer=ZamovleniTovary.ZamovleniaID  inner join  Kurs  on 0=0 where zamovleniaID=".$objid."");
		
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
}

function showPropositiaDohid($clean=false){
$objid = $_REQUEST['objid']; 
	//$result = mysql_query("SELECT * FROM objekty INNER JOIN ZamovleniTovary ON objekty.nomer=ZamovleniTovary.ZamovleniaID  where zamovleniaID=".$objid." and nomer=".$objid."");
	$result = mysql_query("SELECT propozycija, suma, dohid FROM objekty where nomer=".$objid."");
	
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
	$nomer = $_REQUEST['strModelId']; 
	$zamovleniaID = $_REQUEST['zamovleniaID']; 
	
	//$rows = json_decode($_REQUEST['data']);
	/*foreach($rows as $row){
		if($row->ModelId){*/
		$query = "DELETE FROM `ZamovleniTovary` WHERE `ModelId`='".$nomer."' and zamovleniaID = ".$zamovleniaID.";";
			mysql_query($query);
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
	
	$zamovleniaID = $row->zamovleniaID;
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

	
	
	
	
	//Змінено через те що відключений функціонал обліку часу (Time, TotalTime)
		/*$query = "UPDATE `ZamovleniTovary` SET 
		`Price` = ".$row->Price.", 
		`model` = '".$row->Model."', 
		`Description` = '".addslashes($row->Description)."', 
		`OdVymir` = '".$row->OdVymir."',
		`PriceGrn` = ".$row->Price * $kurs.", 
		`PriceGrnZNacinkoju` = ".(((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs).", 
		`Propozycija` = ".(((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs)* $row->Count.", 
		`Count` = ".$row->Count.", 
		`Nacinka` = ".$row->Nacinka.", 
		`Time` = ".$row->Time.", 
		`TotalTime` = ".$row->Time * $row->Count.", 
		`Dohid` = ".(((((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs)* $row->Count) - (($row->Price * $row->Count)* $kurs)).", 
		`FinalPrice` = ".($row->Price * $row->Count)* $kurs." 
		WHERE ModelId = ".$row->ModelId." and zamovleniaID = ".$row->zamovleniaID.";";*/
		
		$query = "UPDATE `ZamovleniTovary` SET 
		`Price` = ".$row->Price.", 
		`model` = '".$row->Model."', 
		`Description` = '".addslashes($row->Description)."', 
		`OdVymir` = '".$row->OdVymir."',
		`PriceGrn` = ".$row->Price * $kurs.", 
		`Valiuta` = '".$row->Valiuta."',
		`PriceGrnZNacinkoju` = ".(((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs).", 
		`Propozycija` = ".(((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs)* $row->Count.", 
		`Count` = ".$row->Count.", 
		`Nacinka` = ".$row->Nacinka.", 
		`Dohid` = ".(((((($row->Price * $kurs)*$row->Nacinka)/100) + $row->Price * $kurs)* $row->Count) - (($row->Price * $row->Count)* $kurs)).", 
		`FinalPrice` = ".($row->Price * $row->Count)* $kurs." 
		WHERE ModelId = ".$row->ModelId." and zamovleniaID = ".$row->zamovleniaID.";";
		
		mysql_query($query);
	}
	Echo($query);
	
	
	$query_update_objekty = 'SELECT SUM(Propozycija) as Propozycija, SUM(Dohid) as dohid, SUM(FinalPrice) as suma FROM ZamovleniTovary WHERE zamovleniaID =  '.$zamovleniaID.";";
	$result = mysql_query($query_update_objekty);
	
	while ($row = mysql_fetch_array($result)) 
	{
	$Propozycija = $row['Propozycija'];
	$Dohid = $row['dohid'];
	$Suma = $row['suma'];
	}
	
	
	$query = "UPDATE `objekty` SET 
		`propozycija` = ".round($Propozycija, 2).", 
		`dohid` = ".round($Dohid, 2).",  
		`suma` = ".round($Suma, 2)."
		WHERE  nomer = ".$zamovleniaID.";";
	
		echo($query);
		mysql_query($query);
}

function AddFirstRecord(){ 
	$rows = json_decode($_REQUEST['data']);
	mysql_query("INSERT into `zamovlenia` SET `Tema` = '".$row->Tema."', `nomer` = '".$row->Nomer."', `nazva` = '".$row->Nazva."', `zamovnyk` = '".$row->Zamovnyk."', `Vykonavci` = '".$row->Vykonavci."',`adresa` = '".$row->Adresa."', `date` = '".$row->Date."', `PDV` = '".$row->PDV."', `Variant` = '".$row->Variant."';");
	$result=mysql_query($query);
	echo $result;
}
	mysql_close($new_connection);
?>