<?php
include "../php/SQL.php";
	$id = addslashes($_POST['id']);
	$date = addslashes($_POST['date']);
	$name1 = addslashes($_POST['name1']);
	$name2 =  addslashes($_POST['name2']);
	$surname = addslashes($_POST['surname']);
	$email = addslashes($_POST['email']);
	$idcard = addslashes($_POST['idcard']);
	$notes =  addslashes($_POST['notes']);

	$query = 'INSERT INTO orders(	
	date,
	name1,
	name2,
	surname,
	email,
	idcard,
	notes) VALUES ("' . 
		$date . '", "' .
		$name1 . '", "' .
		$name2 . '", "' .
		$surname . '", "' .
		$email . '", "' .
		$idcard . '", "' .
		$notes . '")';
	
	mysql_query($query);
	
	
	$lastInsertedId = 'SELECT LAST_INSERT_ID() as LAST_INSERT_ID';
	$result = mysql_query($lastInsertedId);
	while ($row = mysql_fetch_array($result)) 
		{
			$insertedId = $row['LAST_INSERT_ID'];
		}
		
	echo($insertedId);	
	mysql_close($new_connection);

	
	
	
	
	
	
	
	
	
	
?>


