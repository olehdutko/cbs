<?php
include "../php/SQL.php";

extract($_REQUEST);
	$id = $_POST['id'];
	$prychyna_spysannia = $_POST['prychyna_spysannia'];

	$statusId = 8;//Списано

	$result = mysql_query("Select * from statuses where id =".$statusId.";");
	while ($row = mysql_fetch_array($result)) {
	$status = $row['status'];
	}
	
mysql_query("INSERT INTO log(message) VALUES ('&#1050;&#1085;&#1080;&#1075;&#1072; &#1079; &#1085;&#1086;&#1084;&#1077;&#1088;&#1086;&#1084; $id &#1073;&#1091;&#1083;&#1072; &#1089;&#1087;&#1080;&#1089;&#1072;&#1085;&#1072; &#1087;&#1086; &#1087;&#1088;&#1080;&#1095;&#1080;&#1085;&#1110; - $prychyna_spysannia')");
//echo("INSERT INTO log(message) VALUES ('book with id $id was spysana with reasone - $prychyna_spysannia')");

	$adminId = 1;
	$query2 = 'INSERT INTO books_history(operation, book_id, readerid ) VALUES (" '.$status.' - '.$prychyna_spysannia.' ", '.$id.', '.$adminId.')';
	mysql_query($query2);	
	
	$lastInsertedId = 'SELECT LAST_INSERT_ID() as LAST_INSERT_ID';
	$result = mysql_query($lastInsertedId);
	while ($row = mysql_fetch_array($result)) 
		{
			$insertedId = $row['LAST_INSERT_ID'];
		}
	
	$query3 = 'Update books Set status = "'.$status.'", other = "'.$prychyna_spysannia.'", statusid = "'.$statusId.'", books_history_id = '.$insertedId.' where id = '.$id.'';
		echo($query3);

	mysql_query($query3);
	
	
mysql_close($new_connection);
?>