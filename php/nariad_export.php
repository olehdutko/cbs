<html>
<head>
<title>Для Клієнта</title>

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
extract($_REQUEST);
$nariad = $_REQUEST['nariad'];

include "../php/SQL.php";
mysql_query('SET NAMES cp1251');
$result = mysql_query("SELECT Object FROM Nariady WHERE ID =".$nariad.";");

while ($row = mysql_fetch_array($result)) {
$strObject = $row['Object'];
}

$Kurs = mysql_query("Select * from Kurs;");
	while ($row = mysql_fetch_array($Kurs)) {
	$euro = $row['euro'];
	$grivna = $row['grivna'];
	$dollar = $row['dollar'];
}

echo ("<table width='1000' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#CCCCCC'>
		<td width='100%'><div align='center'>Наряд №".$nariad." на об'єкт '".$strObject."'</div></td>
  </tr>
  </table>");
  

$result = mysql_query("SELECT * FROM Dodano_v_Nariad WHERE NariadID =".$nariad." and Type = 'Склад';");
$ArCount = mysql_num_rows($result);

echo ("<table width='1000' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#EEEEEE'>
		<td width='100%'><div align='center'>Товари зі складу</div></td>
  </tr>
  </table>");
  
echo ("<table width='1000' border='3' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='DDDDDD'>
    <td width='2%'><div align='center'>№</div></td>
    <td width='5%'><div align='center'>МІ</div></td>
	<td width='10%'><div align='center'>Модель</div></td>
	<td width='55%'><div align='center'>Опис</div></td>
    <td width='10%'><div align='center'>Виробник</div></td>
	<td width='3%'><div align='center'>Кількість</div></td>
	<td width='10%'><div align='center'>ціна за 1 шт. в грн. </div></td>
  </tr>");

	
	
	
$strActive  = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;
$strValiuta = $row['Valiuta'];

if($row['Type'] == "")
	{
	$Type = "-";	
	}
	else
	{
		$Type = $row['Type'];
	} 
	
switch($strValiuta){
	case 'dollar':
		$kurs = $dollar;
		break;
	case 'grivna':
		$kurs = $grivna;
		break;
	case 'euro':
		$kurs = $euro;
		break;
	};
	
	$Description = $row['Description'];
If ($Description == ""){
	$Description = 'N/A';
};

echo ("<tr class='style1'>
	<td width='2%'><div align='center'>".$i."</div></td>
	<td width='5%'><div align='left'>".$row['ModelId']."</div></td>
    <td width='10%'><div align='center'>".$row['Model']."</div></td>
	<td width='55%'><div align='center'>".$Description."</div></td>
	<td width='10%'><div align='center'>".$row['Vendor']."</div></td>
	<td width='3%'><div align='center'>".$row['count']." ".$row['OdVym']."</div></td>
	<td width='10%'><div align='center'>".number_format($row['Price']*$kurs, 2, ',', ' ')." грн. </div></td>
	</tr>");
	
	$RowCount = number_format($row['count']);
	//$RowPrice = number_format($row['Price']);
	//$RowCount = $row['count'];
	$RowPrice = floatval($row['Price']*$kurs);
	$strActive = $strActive + ($RowCount*$RowPrice);
  }
echo ("</table>");
















$result = mysql_query("SELECT * FROM Dodano_v_Nariad WHERE NariadID =".$nariad." and Type = 'в.фонди';");
$ArCount = mysql_num_rows($result);

echo ("<table width='1000' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#EEEEEE'>
		<td width='100%'><div align='center'>Товари з виробничих фондів</div></td>
  </tr>
  </table>");
  
echo ("<table width='1000' border='3' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='DDDDDD'>
    <td width='2%'><div align='center'>№</div></td>
    <td width='5%'><div align='center'>МІ</div></td>
	<td width='10%'><div align='center'>Модель</div></td>
	<td width='55%'><div align='center'>Опис</div></td>
    <td width='10%'><div align='center'>Виробник</div></td>
	<td width='3%'><div align='center'>Кількість</div></td>
	<td width='10%'><div align='center'>ціна за 1 шт. в грн. </div></td>
  </tr>");

	
	
	
$strActive  = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;
$strValiuta = $row['Valiuta'];

if($row['Type'] == "")
	{
	$Type = "-";	
	}
	else
	{
		$Type = $row['Type'];
	} 
	
switch($strValiuta){
	case 'dollar':
		$kurs = $dollar;
		break;
	case 'grivna':
		$kurs = $grivna;
		break;
	case 'euro':
		$kurs = $euro;
		break;
	};
	
	$Description = $row['Description'];
If ($Description == ""){
	$Description = 'N/A';
};

echo ("<tr class='style1'>
	<td width='2%'><div align='center'>".$i."</div></td>
	<td width='5%'><div align='left'>".$row['ModelId']."</div></td>
    <td width='10%'><div align='center'>".$row['Model']."</div></td>
	<td width='55%'><div align='center'>".$Description."</div></td>
	<td width='10%'><div align='center'>".$row['Vendor']."</div></td>
	<td width='3%'><div align='center'>".$row['count']." ".$row['OdVym']."</div></td>
	<td width='10%'><div align='center'>".number_format($row['Price']*$kurs, 2, ',', ' ')." грн. </div></td>
	</tr>");
	
	$RowCount = number_format($row['count']);
	//$RowPrice = number_format($row['Price']);
	//$RowCount = $row['count'];
	$RowPrice = floatval($row['Price']*$kurs);
	$strActive = $strActive + ($RowCount*$RowPrice);
  }
echo ("</table>");

















































echo ("<table width='1000' border='1' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#EEEEEE'>
        <td width='100%'><div align='right'>Видано в наряді на суму ".number_format($strActive, 2, ',', ' ')." гривень</div></td>
  </tr>
  </table>");
echo ("<p>");

  echo ("<table width='1000' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr>
        <td width='50%'><div align='center'>Видав______________</div></td>
		<td width='50%'><div align='center'>Прийняв______________</div></td>
  </tr>
  </table>");
  
  
//mysql_free_result($result);
mysql_close($new_connection);

?>