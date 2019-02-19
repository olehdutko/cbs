<?php
include "../php/SQL.php";

	$id = $_POST['id'];
	$book_name = $_POST['book_name'];
	$book_outhors = $_POST['book_outhors'];
	$pages = $_POST['pages'];
	$year = $_POST['year'];
	$book_theme_name = $_POST['book_theme_name'];
	$publisher = $_POST['publisher'];
	$date = $_POST['date'];
	$ISBN = $_POST['ISBN'];

	$ext_nomer = $_POST['ext_nomer'];
	$city = $_POST['city'];
	$price = $_POST['price'];
	$BBK = $_POST['BBK'];
	$UDK = $_POST['UDK'];
	$format = $_POST['format'];

	
	$query = 'Update books Set ext_nomer = "'.$ext_nomer.'",city = "'.$city.'", price = "'.$price.'", format = "'.$format.'", BBK = "'.$BBK.'",UDK = "'.$UDK.'", book_name = "'.$book_name.'",book_outhors = "'.$book_outhors.'", pages = "'.$pages.'",year = "'.$year.'",book_theme_name = "'.$book_theme_name.'",publisher = "'.$publisher.'",date = "'.$date.'", ISBN = "'.$ISBN.'" where id = "'.$id.'"';
	mysql_query($query);
	echo($query);
	
	mysql_close($new_connection);

?>