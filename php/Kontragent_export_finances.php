<html>
<head>
<title>Історія по Контрагентам</title>


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
mysql_query('SET NAMES cp1251');
 $date1 = $_GET['date1'];
 $date2 = $_GET['date2'];
 $kontragent = $_GET['kontr'];
 
$query = "SELECT ID, Date, Price, Description, Kontragent, Type, Vendor, Prymitka
		FROM Kontragent_history WHERE (Type = 'Виплата' or Type = 'Нарахування') and Kontragent = '".$kontragent."' AND Date BETWEEN '".$date1."' AND '".$date2."'"; 

//echo($query);		
$result = mysql_query($query);
$ArCount1 = 0;

if($result !=''){
$ArCount1 = mysql_num_rows($result);
}


echo ("<table width='700' height='128' border='0' align='center' cellpadding='0' cellspacing='0'>
  
  <tr>
    <td height='10' colspan='3'><h3><p align='Center'>Історія по контрагенту  '".$kontragent."'</p></H3></td>
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


if($ArCount1 >0){
echo ("<table width='1000' border='3' cellpadding='0' cellspacing='0' align='center'>

  <tr bgcolor='DDDDDD'>
    <td width='5%'><div align='center'>№</div></td>
	<td width='5%'><div align='center'>Номер по базі</div></td>
	<td width='20%'><div align='center'>Дата</div></td>
	<td width='20%'><div align='center'>Тип</div></td>
    <td width='10%'><div align='center'>Сума</div></td>
	<td width='20%'><div align='center'>Опис</div></td>
	<td width='20%'><div align='center'>Примітка</div></td>
  </tr>");
  
$i = 0;
$strActive  = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;
$Description = $row['Description'];
$Prymitka = $row['Prymitka'];
If ($Description == ""){
	$Description = 'N/A';
};

If ($Prymitka == ""){
	$Prymitka = 'N/A';
};

echo ("<tr class='style1'>
	<td width='5%'><div align='center'>".$i."</div></td>
	<td width='5%'><div align='center'>".$row['ID']."</div></td>
	<td width='20%'><div align='center'>".$row['Date']."</div></td>
	<td width='20%'><div align='center'>".$row['Type']."</div></td>
	<td width='10%'><div align='center'>".number_format($row['Price'], 2, ',', ' ')."</div></td>
	<td width='20%'><div align='center'>".$Description."</div></td>
	<td width='20%'><div align='center'>".$Prymitka."</div></td>
	
 </tr>");
  }
echo ("</table>");


}

if($result !=''){
mysql_free_result($result);
}


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

