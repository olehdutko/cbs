<html>
<head>
<title>Історія Нарахувань</title>

</head>

<style type="text/css">
<!--
.style1 {
	font-size: 12px;
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
mysql_query('SET NAMES cp1251');
 $date1 = $_GET['date1'];
 $date2 = $_GET['date2'];
	
$query = "SELECT * FROM Narahuvannia WHERE Date BETWEEN '".$date1."' AND '".$date2."'"; 

$result = mysql_query($query);
//echo ($query );
$ArCount1 = mysql_num_rows($result);
//echo $ArCount;


echo ("<table width='700' height='128' border='0' align='center' cellpadding='0' cellspacing='0'>

<tr>
	<td height='10' colspan='3'><h3><p align='Center'>Історія Нарахувань</p></H3></td>
    <!-- <td height='10' colspan='-1'><p class='style2'>№</p></td> -->
</tr>

<tr>
	<td height='10' colspan='3'><h3><p align='Center'>За період</p></H3></td>
    <!-- <td height='10' colspan='-1'><p class='style2'>№</p></td> -->
</tr>
  
<tr>
	<td height='10' colspan='3'><h4><p align='Center'>".date('d.m.y', strtotime($date1))." - ".date('d.m.y', strtotime($date2))."</p></H4></td>
	<!-- <td height='10' colspan='-1'><p class='style2'>№</p></td> -->
</tr>
 
  
</table>");
if($ArCount1 > 0){
echo ("<table width='1000' border='3' cellpadding='0' cellspacing='0' align='center'>

  <tr bgcolor='DDDDDD'>
	<td width='5%'><div align='center'>Номер Нарахування</div></td>
    <td width='10%'><div align='center'>Дата виплати</div></td>
    <td width='10%'><div align='center'>Призначення</div></td>
	<td width='10%'><div align='center'>Сума</div></td>
	<td width='10%'><div align='center'>Залишок</div></td>
    <td width='10%'><div align='center'>Примітка</div></td>
	<td width='45%'><div align='center'>Стан</div></td>
  </tr>");
  
$i = 0;
$strActive  = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;


switch($row['IsClosed']){
	case '1':
		$val = "Закритий";
	break;
	case '0':
		$val = "Відкритий";
	break;
}



echo ("<tr class='style1'>
	<td width='5%'><div align='center'>".$row['ID']."</div></td>
	<td width='10%'><div align='center'>".$row['Date']."</div></td>
	<td width='10%'><div align='center'>".$row['Pryznachennia']."</div></td>
    <td width='10%'><div align='center'>".number_format($row['Suma'], 2, ',', ' ')."</div></td>
	<td width='10%'><div align='center'>".number_format($row['Zalyshok '], 2, ',', ' ')."</div></td>
    <td width='10%'><div align='left'>".$row['Prymitky']."</div></td>
	<td width='45%'><div align='left'>".$val."</div></td>
	
  </tr>");
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

