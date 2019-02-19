<?php
include "../php/SQL.php";
	//require_once 'insert_visitor.php';
extract($_REQUEST);
$id = $_REQUEST['id']; 
$statusid = 3;//на руки			
$userid = $_REQUEST['userid']; 
	
	$result = mysql_query("Select * from statuses where id =".$statusid.";");
	while ($row = mysql_fetch_array($result)) {
	$status = $row['status'];
	}
	
	
	$query = 'INSERT INTO log(message) VALUES ("Книга з номером \"'.$id.'\" була видана на руки читачу з номером читацького квитка \"'.$userid.'\" ")';
	echo($query);
	mysql_query($query);
	
	$query2 = 'INSERT INTO books_history(operation, book_id, readerid ) VALUES ("'.$status.'", '.$id.', '.$userid.')';
	echo($query2);
	mysql_query($query2);	
	
	$lastInsertedId = 'SELECT LAST_INSERT_ID() as LAST_INSERT_ID';
	$result = mysql_query($lastInsertedId);
	while ($row = mysql_fetch_array($result)) 
		{
			$insertedId = $row['LAST_INSERT_ID'];
		}
		
		
	$query3 = 'Update books Set status = "'.$status.'",statusid = "'.$statusid.'", books_history_id = "'.$insertedId.'" where id = '.$id.'';
	echo($query3);
	mysql_query($query3);		
	
	
	
	mysql_close($new_connection);

?>