<?php
	//require_once 'inserttheme.php';
	include "../php/SQL.php";
	$newtheme = $_POST['newtheme'];
	$query = 'INSERT INTO book_themes(book_theme_name) VALUES ("' .$newtheme . '")';
	mysql_query($query);
	mysql_close($new_connection);

?>