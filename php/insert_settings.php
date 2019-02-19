<?php
error_reporting(0);

include "../php/SQL.php";

extract($_REQUEST);
	$euro = $_POST['euro'];
	$grivna = $_POST['grivna'];
	$dollar = $_POST['dollar'];
	$pdv = $_POST['pdv'];
		$query = 'Update Kurs SET euro = "'.$euro.'", grivna = "'.$grivna.'", dollar = "'.$dollar.'", pdv = "'.$pdv.'"';
	
	mysql_query($query);
	mysql_close($new_connection);       
	Echo ($query);
?>