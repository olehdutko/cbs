<?php
include "../php/SQL.php";

	extract($_REQUEST);
	
	$GridName = $_REQUEST['GridName']; 
	$querySelect = "SELECT JsonColumnVisible from ColumnSizes where GridName='".$GridName."'";
	$result = mysql_query($querySelect);
	
	while ($row = mysql_fetch_array($result)) 
	{
	$JSON_Data= $row['JsonColumnVisible'];
	}

	echo($JSON_Data);
	
	mysql_close($new_connection);

?>