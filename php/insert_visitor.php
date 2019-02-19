<?php
include "../php/SQL.php";
	//require_once 'insert_visitor.php';

	$idcard =	addslashes($_POST['idcard']);
	$event_id =	addslashes($_POST['event_id']);
	
	$other =	addslashes($_POST['other']);
	$name1 =	addslashes($_POST['name1']);
	$name2 =	addslashes($_POST['name2']);
	$surname =	addslashes($_POST['surname']);
	$birthday =	addslashes($_POST['birthday']);
	
	$workplace =	addslashes($_POST['workplace']);
	$email =	addslashes($_POST['email']);
	$interests =	addslashes($_POST['interests']);

		
				
	
	$query = 'INSERT INTO visitors(	
	idcard,
	event_id,
	name1,
	name2,
	surname,
	birthday,
	workplace,
	email,
	interests,
	
	
	other) VALUES ("' . 
		$idcard . '", "' .
		$event_id . '", "' .
		$name1 . '", "' .
		$name2 . '", "' .
		$surname . '", "' .
		$birthday . '", "' .
		$workplace . '", "' .
		$email . '", "' .
		$interests . '", "' .
		$other . '")';
		echo($query);
	mysql_query($query);
	
	mysql_close($new_connection);

?>