<?php
error_reporting(0);
include "../php/SQL.php";
extract($_REQUEST);

$Kurs = mysql_query("Select * from Kurs;");
	while ($row = mysql_fetch_array($Kurs)) {
	$euro_value = $row['euro'];
	$grivna_value = $row['grivna'];
	$dollar_value = $row['dollar'];
}


$Grivna = mysql_query("select sum(count*Price) as suma_grivna from sklad where Valiuta = 'grivna' and IsDeleted = '0' and count >0");
	while ($row = mysql_fetch_array($Grivna)) {
	$suma_grivna = $row['suma_grivna'];
	
}

$Dollar = mysql_query("select sum(count*Price) as suma_dollar from sklad where Valiuta = 'dollar' and IsDeleted = '0' and count >0");
	while ($row = mysql_fetch_array($Dollar)) {
	$suma_dollar = $row['suma_dollar'];
	}
	

$Euro = mysql_query("select sum(count*Price) as suma_euro from sklad where Valiuta = 'euro' and IsDeleted = '0' and count >0");
	while ($row = mysql_fetch_array($Euro)) {
	$suma_euro = $row['suma_euro'];
	}
$strTotalSuma = ($euro_value*$suma_euro) + ($dollar_value*$suma_dollar) + ($grivna_value*$suma_grivna);
$roundTotalSuma = round($strTotalSuma,2);



//$arr[0] = 'suma';
//$arr[1] = $strTotalSuma;

 //echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
		 
		 
echo ("{
		results: [
		{
		suma:'".$roundTotalSuma."'
		}
		]
		}");		 
		 
mysql_close($new_connection);
?>