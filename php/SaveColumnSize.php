<?php
include "../php/SQL.php";
	$JsonColumnSize	 = addslashes($_POST['JsonColumnSize']);
	$JsonColumnVisible	 = addslashes($_POST['JsonColumnVisible']);
	
	$GridName = $_POST['GridName'];	
	
	$querySelect = "SELECT * from ColumnSizes where GridName='".$GridName."'";
	$result = mysql_query($querySelect);
	$rows = mysql_num_rows($result);    
	
	if($rows == 0){
	
		$query = 'INSERT INTO ColumnSizes(JsonColumnSize, JsonColumnVisible, GridName) VALUES ("' . 
		$JsonColumnSize. '", "' .
		$JsonColumnVisible. '", "' .
		$GridName . '")';
	}
	else
	{
	
	$query = "UPDATE ColumnSizes SET 
		JsonColumnSize = '".$JsonColumnSize."', 
		JsonColumnVisible = '".$JsonColumnVisible."' WHERE GridName= '".$GridName."' ;";
		//$query = 'Update ColumnSizes Set JsonColumnSize	= "'.$JsonColumnSize.'" where GridName = "'.$GridName.'"';
	}   
		
	mysql_query($query);
	echo($query);
	
	mysql_close($new_connection);

?>