<?php
include "../php/SQL.php";
mysql_query('SET NAMES cp1251');
extract($_REQUEST);
$objid = $_REQUEST['objid'];


$result = mysql_query("SELECT * FROM  limit_card where ObjId =".$objid."");
//$ArCount1 = mysql_num_rows($result);
$today = date("m.d.Y");

echo("
 <tr>
    <td height='10' colspan='3'><h3><p align='Center'>Лімітна карта для об'єкту № ".$objid." від ".$today."</p></H3></td>
    <!-- <td height='10' colspan='-1'><p class='style2'>№</p></td> -->
    <!-- <td width='187' height='10' colspan='-1'><p align='left'><strong>".$objid."</strong></p></td> -->
  </tr>
");

echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center'>

  <tr bgcolor='DDDDDD'>
    <td width='10%'><div align='center'>№</div></td>
	<td width='15%'><div align='center'>ТМЦ</div></td>
    <td width='45%'><div align='center'>Опис</div></td>
	<td width='5%'><div align='center'>Од.</div></td>
	<td width='5%'><div align='center'>Ксть</div></td>
    <td width='10%'><div align='center'>Ціна</div></td>
    <td width='10%'><div align='center'>Сума</div></td>
	<td width='10%'><div align='center'>Дата</div></td>
  </tr>");
  
$i = 0;
$strActive  = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;
$PriceGRN = $row['PriceGrn']+($row['PriceGrn']*$row['Nacinka'])/100;

$day = strtotime($row['Date']);

$Description = $row['Description'];
If ($Description == ""){
	$Description = 'N/A';
};

$OdVym = $row['OdVym'];
If ($OdVym == ""){
	$OdVym = 'N/A';
};

echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$i."</div></td>
	<td width='15%'><div align='left'>".$row['Model']."</div></td>
    <td width='45%'><div align='left'>".$Description."</div></td>
	<td width='5%'><div align='center'>".$OdVym."</div></td>
	<td width='5%'><div align='center'>".$row['Count']."</div></td>
	<td width='5%'><div align='center'>".$row['Price']."</div></td>
	<td width='5%'><div align='center'>".$row['Suma']."</div></td>
	<td width='5%'><div align='center'>".date("Y/m/d",$day)."</div></td>
  </tr>");
  }
  

  
echo ("</table>");


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

