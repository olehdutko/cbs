<?php
include "../php/SQL.php";

extract($_REQUEST);
$objid = $_POST['objid'];

switch($_REQUEST['action']){
	case 'ShowData':
		default:
		ShowData();
		break;
	case 'ShowData_Open':
		ShowData_Open();
		break;
	case 'ShowData_Close':
		ShowData_Close();
		break;
	case 'RemoveData':
		RemoveData();
		break;
	case 'showTop10':
		showTop10();
		break;
	case 'showTop20':
		showTop20();
		break;	
}

function showData($clean=false){
	  $query = "Select ID, nomer, znyzhka, PIB, Moment_dollar, Moment_euro , nazva, prymitka, zamovnyk, telefon, Vykonavci, adresa, date, PDV, Variant, Stan_objektu ,objthemes FROM objekty";
	  $categories = array('result' => array());
	  $result = mysql_query($query);
	  $num = mysql_numrows($result);
	  $i = 0;
	  while ($row = mysql_fetch_assoc($result)) {
		$categories['result'][$i] = $row;
		$i++;
	  }
	   echo json_encode($categories);
}

function showData_Open($clean=false){
	  $query = "Select ID, nomer, znyzhka, PIB, Moment_dollar, Moment_euro , nazva, prymitka, zamovnyk, telefon, Vykonavci, adresa, date, PDV, Variant, Stan_objektu ,objthemes FROM objekty where Stan_objektu = 1";
	  $categories = array('result' => array());
	  $result = mysql_query($query);
	  $num = mysql_numrows($result);
	  $i = 0;
	  while ($row = mysql_fetch_assoc($result)) {
		$categories['result'][$i] = $row;
		$i++;
	  }
	   echo json_encode($categories);
}

function showData_Close($clean=false){
	  $query = "Select ID, nomer, znyzhka, PIB, Moment_dollar, Moment_euro , nazva, prymitka, zamovnyk, telefon, Vykonavci, adresa, date, PDV, Variant, Stan_objektu ,objthemes FROM objekty where Stan_objektu = 0";
	  //echo $query;
	  $categories = array('result' => array());
	  $result = mysql_query($query);
	  $num = mysql_numrows($result);
	  $i = 0;
	  while ($row = mysql_fetch_assoc($result)) {
		$categories['result'][$i] = $row;
		$i++;
	  }
	   echo json_encode($categories);
}

function showTop10($clean=false){
	 $result = mysql_query("SELECT CONCAT(nomer,' - ',nazva) as nazva FROM objekty ORDER BY nomer DESC LIMIT 10,10");
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

function showTop20($clean=false){
	 $result = mysql_query("SELECT CONCAT(nomer,' - ',nazva) as nazva FROM objekty ORDER BY nomer DESC LIMIT 0,20");
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

function RemoveData($clean=false){
	$strID = $_POST['strID'];

	  mysql_query("DELETE FROM `calls` WHERE `ID`='".$strID."';");
	  }

mysql_close($new_connection);
?>