<?php
include "../php/SQL.php";

extract($_REQUEST);
	$id = $_POST['id'];
	$statusId = 2;//втрачено

	$result = mysql_query("Select * from statuses where id =".$statusId.";");
	while ($row = mysql_fetch_array($result)) {
	$status = $row['status'];
	}
	


	mysql_query('INSERT INTO log(message) VALUES ("Книга з номером \"'.$id.'\" була втрачена")');
	
	$adminId = 1;
	$query2 = 'INSERT INTO books_history(operation, book_id, readerid ) VALUES ("'.$status.'", '.$id.', '.$adminId.')';
	echo($query2);
	mysql_query($query2);	
	
	
	
	
	
	
	$lastInsertedId = 'SELECT LAST_INSERT_ID() as LAST_INSERT_ID';
	$result = mysql_query($lastInsertedId);
	while ($row = mysql_fetch_array($result)) 
		{
			$insertedId = $row['LAST_INSERT_ID'];
		}
	
	$query3 = 'Update books Set status = "'.$status.'",statusid = "'.$statusId.'", books_history_id = '.$insertedId.' where id = '.$id.'';
	
	mysql_query($query3);
	
	
mysql_close($new_connection);
?>