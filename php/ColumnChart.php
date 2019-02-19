<?php
error_reporting(0);
include "../php/SQL.php";

extract($_REQUEST);

$objid = $_REQUEST['objid'];
$result = mysql_query("Select propozycija, suma FROM objekty where nomer = ".$objid.";");
	while ($row = mysql_fetch_array($result)) 
	{
	$propozycija = $row['propozycija'];
	$suma = $row['suma'];
	}

		echo ("{
		data: [{
		season:'Ціна',
		total:'".$suma."'
		},

		{
		season:'Пропозиція',
		total:'".$propozycija."'
		}
		]
		}");

mysql_close($new_connection);	
?>