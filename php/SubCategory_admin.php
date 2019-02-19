<?php
include "../php/SQL.php";

error_reporting(0);

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
    $result = mysql_query("SELECT SubCategoryId , SubCategoryName  FROM `SubCategories`;");
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
	mysql_query("DELETE FROM SubCategories Where `SubCategoryId`='".$strNomer."';");
	echo("DELETE FROM `SubCategories Where `SubCategoryId`='".$strNomer."';");
}


function addRecord(){
	 mysql_query("INSERT into `SubCategories` set SubCategoryName = '********'");
	$id = mysql_insert_id();
	$result = mysql_query("SELECT SubCategoryId, SubCategoryName FROM `SubCategories` WHERE SubCategoryId='".$id."'");
    $row = mysql_fetch_object($result);
    echo ($id);	
}
function saveData(){ 
	$rows = json_decode($_REQUEST['data4']);
	foreach($rows as $row){
		/*if(!$row->ObjectThemesId){
			mysql_query("INSERT into `SubCategories` SET `SubCategoryName` = '".$row->SubCategoryName."' ;");
		}else{
			mysql_query("UPDATE `SubCategories` SET `SubCategoryName` = '".$row->SubCategoryName."' WHERE `SubCategoryId`='".$row->SubCategoryId."';");		
		}*/
	mysql_query("UPDATE `SubCategories` SET `SubCategoryName` = '".$row->SubCategoryName."' WHERE `SubCategoryId`='".$row->SubCategoryId."';");
	}
	showData(true);	
}

mysql_close($new_connection);
?>