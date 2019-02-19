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
    $result = mysql_query("SELECT * FROM `book_themes`;");
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
			mysql_query("DELETE FROM `book_themes` WHERE `id`='".$strNomer."';");
			echo("DELETE FROM `book_themes` WHERE `id`='".$strNomer."';");
			
}
function addRecord(){
	 mysql_query("INSERT into `book_themes` set book_theme_name ='New Theme' ;");
	$id = mysql_insert_id();
	$query = "SELECT id, book_theme_name FROM `book_themes` WHERE id='".$id."'";
	$result = mysql_query($query);
    $row = mysql_fetch_object($result);
    //echo ($query);	
	echo json_encode($row);	
}
function saveData(){ 
	$rows = json_decode($_REQUEST['data2']);
	foreach($rows as $row){
	mysql_query("UPDATE `book_themes` SET `book_theme_name` = '".$row->ObjectThemesName."' WHERE `id`='".$row->ObjectThemesId."';");		
		
	}
	
	showData(true);	
}

mysql_close($new_connection);
?>