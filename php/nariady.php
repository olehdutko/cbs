<?php
include "../php/SQL.php";

extract($_REQUEST);
$objid = $_POST['objid'];

switch($_REQUEST['action']){
	case 'ShowData_open':
		default:
		ShowData_open();
		break;
	case 'ShowData_close':
		default:
		ShowData_close();
		break;	
	case 'ShowData_All':
		ShowData_All();
		break;			
	case 'ShowData_finalized':
		ShowData_finalized();
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

function ShowData_All($clean=false){
	  $query = "Select * FROM Nariady";
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

function showData_open($clean=false){
	  $query = "Select * FROM Nariady where IsClosed = 0";
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

function showData_close($clean=false){
	  $query = "Select * FROM Nariady where IsClosed = 1";
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

function ShowData_finalized($clean=false){
	  $query = "Select * FROM Nariady where IsFinalized = 1";
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
	 $result = mysql_query("SELECT CONCAT(nomer,' - ',nazva) as nazva FROM objekty ORDER BY nomer DESC LIMIT 10,20");
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
	$objid = $_POST['objid'];

	  mysql_query("DELETE FROM `objekty` WHERE `nomer`='".$objid."';");
	  mysql_query("DELETE FROM `ZamovleniTovary` WHERE `zamovleniaID`='".$objid."';");

		echo ("DELETE FROM `objekty` WHERE `nomer`='".$objid."';");
		//echo ("DELETE FROM `ZamovleniTovary` WHERE `zamovleniaID`='".$objid."';");

	  }

mysql_close($new_connection);
?>