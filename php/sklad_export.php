<?php
include "../php/SQL.php";
mysql_query('SET NAMES cp1251');
$Kurs = mysql_query("Select * from Kurs;");
	while ($row = mysql_fetch_array($Kurs)) {
	$euro = $row['euro'];
	$grivna = $row['grivna'];
	$dollar = $row['dollar'];
}



$result = mysql_query("SELECT * FROM  sklad WHERE IsDeleted = '0'");
$ArCount = mysql_num_rows($result);


echo ("<table width='1000' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr>
	<td width='100%'><div align='center'>
	<table width='250' border='3' cellpadding='0' cellspacing='0' align='left'>
		
		<tr bgcolor='#CCCCCC'>
		<td width='50%'><div align='center'>���� �����</td>
		</tr>
		
		<tr>
		<td width='50%'><div align='center'>
		
		<table width='250' border='0' cellpadding='0' cellspacing='0' align='left'>
		<tr bgcolor='#DDDDDD'>
		<td width='50%'><div align='center'>������</td>
		<td width='50%'><div align='left'>�����</td>
		</tr>
		<tr>
		
		<td width='50%'><div align='center'>����� :</td>
		<td width='50%'><div align='left'>".$dollar."</td>
		</tr>
		<tr>
		
		<td width='50%'><div align='center'>���� :</td>
		<td width='50%'><div align='left'>".$euro."</td>
		</tr>  
	</table>
	
	
		
		</td>
		
		</tr>
		
	</table>
		

		</div></td>
  </tr>
  </table>
  <p>
  ");
  
  
  
  
echo ("<table width='1000' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#CCCCCC'>
		<td width='100%'><div align='center'>������ �� �����</div></td>
  </tr>
  </table>");
  
echo ("<table width='1000' border='3' cellpadding='0' cellspacing='0' align='center'>

  <tr bgcolor='DDDDDD'>
    <td width='2%'><div align='center'>�</div></td>
    <td width='5%'><div align='center'>̲</div></td>
	<td width='10%'><div align='center'>������</div></td>
	<td width='40%'><div align='center'>����</div></td>
    <td width='10%'><div align='center'>��������</div></td>
	<td width='3%'><div align='center'>ʳ������</div></td>
	<td width='10%'><div align='center'>���� �� 1 ��.</div></td>
	<td width='10%'><div align='center'>������</div></td>
	<td width='10%'><div align='center'>���� � ���.</div></td>
  </tr>");
  

$strActive  = 0;

while ($row = mysql_fetch_array($result)) {
$strValiuta = $row['Valiuta'];
switch($strValiuta){
	case 'dollar':
		$Curentkurs = $dollar;
		break;
	case 'grivna':
		$Curentkurs = $grivna;
		break;
	case 'euro':
		$Curentkurs = $euro;
		break;
};

$i = $i+1;
echo ("<tr class='style1'>
	<td width='2%'><div align='center'>".$i."</div></td>
    <td width='5%'><div align='left'>".$row['ModelId']."</div></td>
    <td width='10%'><div align='center'>".$row['Model']."</div></td>
	<td width='40%'><div align='center'>".$row['Description']."</div></td>
	<td width='10%'><div align='center'>".$row['Vendor']."</div></td>
	<td width='3%'><div align='center'>".$row['count']." ".$row['OdVym']."</div></td>
	<td width='10%'><div align='center'>".$row['Price']." </div></td>
	<td width='10%'><div align='center'>".$row['Valiuta']." </div></td>
	<td width='10%'><div align='center'>".($row['Price']*$row['count'])*$Curentkurs." ���. </div></td>
	</tr>");
	//$RowCount = number_format($row['count']);
	//$RowPrice = number_format($row['Price']);
	//$RowCount = $row['count'];
	//$RowPrice = floatval($row['Price']);
	
	$strActive = $strActive+ ($row['Price']*$row['count'])*$Curentkurs;
	
	/*
	echo($RowCount);
	echo ('<br>');
	echo($RowPrice);
	echo ('<br>');
	echo($RowPrice*$RowCount);
	echo ('<p>');
	*/
  }
echo ("</table>");

echo ("<table width='1000' border='1' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#EEEEEE'>
        <td width='100%'><div align='right'>�� ����� ������ �� ".$strActive." �������</div></td>
  </tr>
  </table>");

//mysql_free_result($result);
mysql_close($new_connection);

?>