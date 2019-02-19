<html>
<head>
<title>Історія видачі зі складу</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>

<style type="text/css">
<!--
.style1 {
	font-size: 11px;
}
.style2 {
	color: #333333;
	font-style: italic;
	font-size: 20px;
}
.style3 {
	font-size: 12px;
}

-->
</style>
<?php
include "../php/SQL.php";

$result = mysql_query("SELECT * FROM  Neprydatnist_history");
$ArCount1 = mysql_num_rows($result);
//echo $ArCount;
if($ArCount1 >0){
/*
CategoryName
*/

echo ("<table width='700' height='128' border='0' align='center' cellpadding='0' cellspacing='0'>
  
  <tr>
    <td height='10' colspan='3'><h3><p align='Center'>Історія списання виробничих фондів по непридатності</p></H3></td>
    <!-- <td height='10' colspan='-1'><p class='style2'>№</p></td> -->
  </tr>
 
  
</table>");
echo ("<table width='1000' border='3' cellpadding='0' cellspacing='0' align='center'>

  <tr bgcolor='DDDDDD'>
    <td width='10%'><div align='center'>Дата списання</div></td>
	<td width='10%'><div align='center'>МІ</div></td>
	<td width='10%'><div align='center'>Модель</div></td>
    <td width='30%'><div align='center'>Опис</div></td>
	<td width='10%'><div align='center'>к-сть</div></td>
    <td width='10%'><div align='center'>Ціна</div></td>
	<td width='10%'><div align='center'>Виробник</div></td>
	<td width='10%'><div align='center'>Примітка</div></td>
  </tr>");
  
$i = 0;
$strActive  = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;
$PriceGRN = $row['PriceGrn']+($row['PriceGrn']*$row['Nacinka'])/100;
$SubCategoryName = $row['SubCategoryName'];
$Description = $row['Description'];
If ($SubCategoryName == ""){
	$SubCategoryName = 'N/A';
};

If ($Description == ""){
	$Description = 'N/A';
};


echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$row['Date']."</div></td>
	<td width='10%'><div align='left'>".$row['ModelId']."</div></td>
	<td width='10%'><div align='center'>".$row['Model']."</div></td>
    <td width='30%'><div align='left'>".$Description."</div></td>
    <td width='10%'><div align='center'>".$row['Count']." ".$row['odVym']."</div></td>
    <td width='10%'><div align='center'>".number_format($row['Price'], 2, ',', ' ')."</div></td>
    <td width='10%'><div align='center'>".$row['Vendor']."</div></td>
	<td width='10%'><div align='center'>".$row['Prymitka']."</div></td>
  </tr>");
  $strActive = $strActive+ ($row['Count']*$PriceGRN);
  }
echo ("</table>");

	
 
}

mysql_free_result($result);
mysql_close($new_connection);

?>

<style type="text/css">
<!--
body {
	background-color: #FFFFFF;
	margin-left: 0px;
	margin-top: 20px;
	margin-right: 0px;
	margin-bottom: 0px;
	color: #000000;
}
-->

</style>

