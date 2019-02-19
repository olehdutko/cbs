<?php
include "../php/SQL.php";

extract($_REQUEST);
	$id = $_POST['id'];
	
	$statusid = 7;//видалено


	$result = mysql_query("Select * from statuses where id =".$statusid.";");
	while ($row = mysql_fetch_array($result)) {
	$status = $row['status'];
	}
	
	//mysql_query("DELETE FROM `books` WHERE `id`='".$id."';");
	
	//$query = 'Update books Set isdeleted = 1 where id = "'.$id.'"';
	//mysql_query($query);
	//echo($query);
	
	$query = 'Update books Set statusid = "'.$statusid.'", status = "'.$status.'", isdeleted = 1 where id = "'.$id.'"';
	mysql_query($query);
	echo($query);
	
	

	mysql_query('INSERT INTO log(message) VALUES ("Книга з номером \"'.$id.'\" була видалена)');
	
	$userid = 0;
	$query2 = 'INSERT INTO books_history(operation, book_id, readerid ) VALUES (\"'.$status.'\", '.$id.', '.$userid.')';
	echo($query2);
	mysql_query($query2);	
	
	
	
mysql_close($new_connection);
?>