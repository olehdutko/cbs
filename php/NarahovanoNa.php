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


$Grivna = mysql_query("select Suma as suma_grivna, Zalyshok as zalyshok_grivna from Narahuvannia where Valiuta = 'grivna' and IsClosed = '0'");
	while ($row = mysql_fetch_array($Grivna)) {
	$suma_grivna = $row['suma_grivna'];
	$zalyshok_grivna = $row['zalyshok_grivna'];
}

$Dollar = mysql_query("select Suma as suma_dollar, Zalyshok as zalyshok_dollar from Narahuvannia where Valiuta = 'dollar' and IsClosed = '0'");
	while ($row = mysql_fetch_array($Dollar)) {
	$suma_dollar = $row['suma_dollar'];
	$zalyshok_dollar = $row['zalyshok_dollar'];
	}
	

$Euro = mysql_query("select SUM(Suma) as suma_euro, Zalyshok as zalyshok_euro from Narahuvannia where Valiuta = 'euro' and IsClosed = '0'");
	while ($row = mysql_fetch_array($Euro)) {
	$suma_euro = $row['suma_euro'];
	$zalyshok_euro = $row['zalyshok_euro'];
	}

$Empty = mysql_query("select SUM(Suma) as suma_empty, Zalyshok as zalyshok_empty from Narahuvannia where Valiuta = '' and IsClosed = '0'");
	while ($row = mysql_fetch_array($Empty)) {
	$suma_empty = $row['suma_empty'];
	$zalyshok_empty = $row['zalyshok_empty'];
	}	
	
//$strTotalSuma = $suma_empty;
$strTotalSuma = ($euro_value*$suma_euro) + ($dollar_value*$suma_dollar) + ($grivna_value*$suma_grivna) + ($suma_empty*$grivna_value);
$roundTotalSuma = round($strTotalSuma,2);

$strTotalZalyshok = ($euro_value*$zalyshok_euro) + ($dollar_value*$zalyshok_dollar) + ($grivna_value*$zalyshok_grivna) + ($suma_empty*$zalyshok_value);
$roundTotalZalyshok = round($strTotalZalyshok,2);


//$arr[0] = 'suma';
//$arr[1] = $strTotalSuma;

 //echo $_GET['callback'].'({"total":"'.$rows.'","results":'.json_encode($arr).'})';
		 
		 
echo ("{
		results: [
		{
		suma:'".$roundTotalSuma."'
		},
		{
		zalyzhok:'".$roundTotalZalyshok."'
		}
		]
		}");		 
		 
mysql_close($new_connection);
?>