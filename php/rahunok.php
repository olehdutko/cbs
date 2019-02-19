<?php
include "../php/SQL.php";
mysql_query('SET NAMES cp1251');
extract($_REQUEST);
$objid = $_REQUEST['objid'];


$result = mysql_query("SELECT pdv FROM Kurs");
while ($row = mysql_fetch_array($result)) {
$fltPDV = $row['pdv'];
}
$result = mysql_query("SELECT * FROM objekty where nomer=".$objid."");
/*$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'активні'");
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'монтажні'");
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'інше'");
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'роботи'");*/


while ($row = mysql_fetch_array($result)) {
$strPDV = $row['PDV'];
//$strPropozycija = $row['propozycija'];

echo ("<div align='center'><img src='/resources/vykonavci/".$row['Vykonavci'].".jpg'>");
echo ("<table width='700' height='128' border='0' align='center' cellpadding='0' cellspacing='0'>
  <tr>
    <td height='10' colspan='3'></div></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td height='19' colspan='3'><p class='style2'><span class='style2'>Замовник</span> : <strong>".$row['zamovnyk']."</strong></p>      
      </td>
  </tr>
  
  <tr>
    <td height='10' colspan='3'>&nbsp;</td>
  </tr>
  <tr>
    <td height='10' colspan='3'><h3><p align='Center'>Рахунок-фактура  № ".$row['nomer']."/".$row['date']."</p></H3></td>
    <!-- <td height='10' colspan='-1'><p class='style2'>№</p></td> -->
    <!-- <td width='187' height='10' colspan='-1'><p align='left'><strong>".$row['nomer']." / ".$row['date']."</strong></p></td> -->
  </tr>
  <tr>
    <td height='10' colspan='3'>&nbsp;</td>
  </tr>
  <tr>
    <td height='10' colspan='2'><p>&nbsp;</p>      </td>
    <td width='266'><span class='style2'>Від <strong>".$row['date']."</strong></span></td>
  </tr>
  <tr>
    <td height='10' colspan='2'><p>&nbsp;</p>      </td>
  </tr>
  
</table>");
}

echo ("<p>");


//Вибір товарів де type = активні
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'активні'");
$ArCount1 = mysql_num_rows($result);
echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center'>

  <tr bgcolor='DDDDDD'>
    <td width='10%'><div align='center'>№</div></td>
	<td width='15%'><div align='center'>Назва</div></td>
    <td width='45%'><div align='center'>Опис</div></td>
	<td width='5%'><div align='center'>к-сть</div></td>
    <td width='5%'><div align='center'>Од.</div></td>
    <td width='10%'><div align='center'>ціна</div></td>
    <td width='10%'><div align='center'>сума</div></td>
  </tr>");
  
$i = 0;

while ($row = mysql_fetch_array($result)) {
$i = $i+1;
$PriceGRN = $row['PriceGrnZNacinkoju'];
$Count = $row['Count'];
$Suma = $PriceGRN * $Count;

$SubCategoryName = $row['SubCategoryName'];
If ($SubCategoryName == ""){
	$SubCategoryName = 'N/A';
};



echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$i."</div></td>
	<td width='15%'><div align='left'>".$row['Model']."</div></td>
    <td width='45%'><div align='left'>".$row['Description']."</div></td>
    <td width='5%'><div align='center'>".$Count."</div></td>
	<td width='5%'><div align='center'>".$row['OdVymir']."</div></td>
    <td width='10%'><div align='center'>".$PriceGRN."</div></td>
    <td width='10%'><div align='center'>".number_format($Suma, 2, ',', ' ')."</div></td>
  </tr>");
  }
  
//Вибір товарів де type = монтажні
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'монтажні'");
  while ($row = mysql_fetch_array($result)) {
$i = $i+1;
//$PriceGRN = $row['PriceGrn']+($row['PriceGrn']*$row['Nacinka'])/100;
//number_format($grivny, 2, ',', ' ')
$grivny = $row['PriceGrn'];
$nacinky = $row['Nacinka'];
$PriceGRN = number_format($grivny, 2, ',', ' ')+(number_format($grivny, 2, ',', ' ')*number_format($nacinky, 2, ',', ' '))/100;

$SubCategoryName = $row['SubCategoryName'];
If ($SubCategoryName == ""){
	$SubCategoryName = 'N/A';
};

$PriceGRN = $row['PriceGrnZNacinkoju'];
$Count = $row['Count'];
$Suma = $PriceGRN * $Count;

echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$i."</div></td>
	<td width='15%'><div align='left'>".$row['Model']."</div></td>
    <td width='45%'><div align='left'>".$row['Description']."</div></td>
    <td width='5%'><div align='center'>".$Count."</div></td>
	<td width='5%'><div align='center'>".$row['OdVymir']."</div></td>
    <td width='10%'><div align='center'>".$PriceGRN."</div></td>
    <td width='10%'><div align='center'>".number_format($Suma, 2, ',', ' ')."</div></td>
  </tr>");
  }
  
 //Вибір товарів де type = роботи
  $result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'роботи'");
  while ($row = mysql_fetch_array($result)) {
$i = $i+1;
//$PriceGRN = $row['PriceGrn']+($row['PriceGrn']*$row['Nacinka'])/100;
//number_format($grivny, 2, ',', ' ')
$grivny = $row['PriceGrn'];
$nacinky = $row['Nacinka'];
$PriceGRN = number_format($grivny, 2, ',', ' ')+(number_format($grivny, 2, ',', ' ')*number_format($nacinky, 2, ',', ' '))/100;

$SubCategoryName = $row['SubCategoryName'];
If ($SubCategoryName == ""){
	$SubCategoryName = 'N/A';
};

$PriceGRN = $row['PriceGrnZNacinkoju'];
$Count = $row['Count'];
$Suma = $PriceGRN * $Count;

echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$i."</div></td>
	<td width='15%'><div align='left'>".$row['Model']."</div></td>
    <td width='45%'><div align='left'>".$row['Description']."</div></td>
    <td width='5%'><div align='center'>".$Count."</div></td>
	<td width='5%'><div align='center'>".$row['OdVymir']."</div></td>
    <td width='10%'><div align='center'>".$PriceGRN."</div></td>
    <td width='10%'><div align='center'>".number_format($Suma, 2, ',', ' ')."</div></td>
  </tr>");
  }
//Вибір товарів де type = інше
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'інше'");
  while ($row = mysql_fetch_array($result)) {
$i = $i+1;
//$PriceGRN = $row['PriceGrn']+($row['PriceGrn']*$row['Nacinka'])/100;
//number_format($grivny, 2, ',', ' ')
$grivny = $row['PriceGrn'];
$nacinky = $row['Nacinka'];
$PriceGRN = number_format($grivny, 2, ',', ' ')+(number_format($grivny, 2, ',', ' ')*number_format($nacinky, 2, ',', ' '))/100;

$SubCategoryName = $row['SubCategoryName'];
If ($SubCategoryName == ""){
	$SubCategoryName = 'N/A';
};

$PriceGRN = $row['PriceGrnZNacinkoju'];
$Count = $row['Count'];
$Suma = $PriceGRN * $Count;

echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$i."</div></td>
	<td width='15%'><div align='left'>".$row['Model']."</div></td>
    <td width='45%'><div align='left'>".$row['Description']."</div></td>
    <td width='5%'><div align='center'>".$Count."</div></td>
	<td width='5%'><div align='center'>".$row['OdVymir']."</div></td>
    <td width='10%'><div align='center'>".$PriceGRN."</div></td>
    <td width='10%'><div align='center'>".number_format($Suma, 2, ',', ' ')."</div></td>
  </tr>");
  }
  
echo ("</table>");





echo ("<p>");
$result = mysql_query("SELECT SUM(Propozycija) as SUM_Propozycija FROM ZamovleniTovary where zamovleniaID =".$objid) or die(mysql_error());
$i = mysql_fetch_array($result); 
$SUM_Propozycija = $i['SUM_Propozycija'];

if ($strPDV == "з ПДВ") {

$PDV = ($SUM_Propozycija*$fltPDV)/100;
$cinazPDV = $SUM_Propozycija+$PDV;
	Echo ("<table width='700' border='0' cellpadding='0' cellspacing='0' align='center' class='style3'>
	<tr>
		<td align='center'> 
		

<table width='300' border='3' cellpadding='0' cellspacing='0' align='right' class='style3'>
	<tr>
		<td align='center'> <Strong>Разом Без ПДВ:</Strong></td>
		<td align='center'> <Strong>".number_format($SUM_Propozycija, 2, ',', ' ')." грн.</Strong></td>
	</tr>
	<tr>
		<td align='center'> <Strong>ПДВ:</Strong></td>
		<td align='center'> <Strong>".number_format($PDV, 2, ',', ' ')." грн.</Strong></td>
	</tr>
		<tr>
		<td align='center'> <Strong>Всього з ПДВ:</Strong></td>
		<td align='center'> <Strong>".number_format($cinazPDV, 2, ',', ' ')." грн.</Strong></td>
	</tr>
</table>
		</td>
		
		
	</tr>
	
	");  
	echo ("</table>");
} 

if ($strPDV == "без ПДВ") {
	Echo ("<table width='700' border='0' cellpadding='0' cellspacing='0' align='center' class='style3'>
	<tr>
		<td align='center'>
<table width='300' border='3' cellpadding='0' cellspacing='0' align='right' class='style3'>
	<tr>
		<td align='center'> <Strong>Всього:</Strong></td>
		<td align='center'> <Strong>".round($SUM_Propozycija, 2)." грн.</Strong></td>
	</tr>
</table>
		</td>
	</tr>
	");  
	echo ("</table>");

}
echo ("<p>");


Echo ("<table width='700' border='0' cellpadding='0' cellspacing='0' align='Center' class='style3'>
<tr> <td><h3>Підготував:</h3></td></tr> 
</table>");


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

