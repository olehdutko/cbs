<html>
<head>
<title>Для Клієнта</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

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
    <td height='19' colspan='3'><p class='style2'><span class='style2'>Об`єкт:</span> <strong>".$row['nazva']."</strong></p>      </td>
  </tr>
  <tr>
    <td height='10' colspan='3'><p class='style2'><span class='style2'>за адресою:</span><strong> ".$row['adresa']."</strong></p></td>
  </tr>
  <tr>
    <td height='10' colspan='3'>&nbsp;</td>
  </tr>
  <tr>
    <td height='10' colspan='3'><h3><p align='Center'>Проект-пропозиція № ".$row['nomer']."/".$row['date']."</p></H3></td>
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
    <td><span class='style2'>Варіант: <strong>".$row['Variant']."</strong></span></td>
  </tr>
  <tr>
    <td height='10' colspan='3'><span class='style2'>Тема замовлення:</span></td>
  </tr>
  <tr>
    <td width='302' height='10'><p><Strong>Надання послуг по встановленню </Strong></p></td>
    <td width='180'><strong>".$row['objthemes']."</strong> </td>
    <td height='10'>&nbsp;</td>
  </tr>
</table>");
}

echo ("<p>");
//echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center'>
//  <tr bgcolor='#CCCCCC'>
        //<td width='100%'><div align='center'>Куповані комплектуючі вироби</div></td>
//  </tr>
//  </table>");

$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'активні'");
$ArCount1 = mysql_num_rows($result);

if($ArCount1 >0){

echo ("<table width='700' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#CCCCCC'>
        <td width='100%'><div align='center'>Куповані комплектуючі вироби ККВ </div></td>
  </tr>
  </table>");
  
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
    <td width='10%'><div align='center'>".number_format($PriceGRN, 2, ',', ' ')."</div></td>
    <td width='10%'><div align='center'>".number_format($Suma, 2, ',', ' ')."</div></td>
  </tr>");
  

  }
echo ("</table>");
$result = mysql_query("SELECT SUM(Propozycija) as SUM_Propozycija FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'активні'") or die(mysql_error());
$i = mysql_fetch_array($result); 
$razomActiveBezPdv = $i['SUM_Propozycija'];

Echo("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center' class='style3'>
	<tr>
    <td width='57%' rowspan='4'></td>
    <td width='25%' >ВСЕ РАЗОМ Грн. без ПДВ</td>
    <td width='18%' >".number_format($razomActiveBezPdv, 2, ',', ' ')." грн.</td>
  </tr>");
  
	
  $strActivePdv = round (($razomActiveBezPdv * $fltPDV)/100, 2);
  $strActiveZPdv = round ($strActivePdv+$razomActiveBezPdv, 2);
  if ($strPDV == "з ПДВ") {
	Echo("
	<tr>
		<td>ПДВ $fltPDV %</td>
		<td>".number_format($strActivePdv, 2, ',', ' ')." грн.</td>
		

	</tr>
	<tr>
		<td>ВСЕ РАЗОМ Грн. з ПДВ</td>
		<td>".number_format($strActiveZPdv, 2, ',', ' ')." грн</td>
		
	</tr>
	");  
}
echo ("</table>");
}  
echo ("<p>");
//echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center'>
//<tr bgcolor='#CCCCCC'>
//	<td width='100%'><div align='center'>Монтажно-витратні матеріали</div></td>
//</tr>
//</table>");


$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'монтажні'");
$ArCount2 = mysql_num_rows($result);
//echo $ArCount;
if($ArCount2 >0){
		 
echo ("<table width='700' border='1' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#CCCCCC'>
        <td width='100%'><div align='center'>Монтажно-витратні матеріали</div></td>
  </tr>
  </table>");
  
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
    <td width='10%'><div align='center'>".number_format($PriceGRN, 2, ',', ' ')."</div></td>
    <td width='10%'><div align='center'>".number_format($Suma, 2, ',', ' ')."</div></td>
  </tr>");
  }

echo ("</table>");
$result = mysql_query("SELECT SUM(Propozycija) as SUM_Propozycija FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'монтажні'") or die(mysql_error());
$i = mysql_fetch_array($result); 
$razomMontazhBezPdv = $i['SUM_Propozycija'];
Echo("<table width='700' border='2' cellpadding='1' cellspacing='1' align='center' class='style3'>
	<tr>
    <td width='57%' rowspan='4'></td>
    <td width='25%' >ВСЕ РАЗОМ Грн. без ПДВ</td>
    <td width='18%' >".number_format($razomMontazhBezPdv, 2, ',', ' ')." грн.</td>
	
  </tr>");
  
  $strMontazhPdv = round (($razomMontazhBezPdv * $fltPDV)/100, 2);
  $strMontazhZPdv = round ($strMontazhPdv+$razomMontazhBezPdv, 2);
  
if ($strPDV == "з ПДВ") {
Echo("
<tr>
    <td>ПДВ ".$fltPDV." %</td>
    <td>".number_format($strMontazhPdv, 2, ',', ' ')." грн</td>
	
</tr>
<tr>
    <td>ВСЕ РАЗОМ Грн. з ПДВ</td>
    <td>".number_format($strMontazhZPdv, 2, ',', ' ')." грн</td>
</tr>
	");  
}   
echo ("</table>");

}


echo ("<p>");
$strPropozycija = round($strMontazh+$strActive, 2);
$strPdvValue = round (($strPropozycija * $fltPDV)/100, 2);
$strPropozycijaZPdv = round ($strPropozycija + $strPdvValue, 2);
$KupKomp = number_format($razomActiveBezPdv + $razomMontazhBezPdv, 2, ',', ' ');
Echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center' class='style3'>
<tr>
    <td width='57%' rowspan='4' align='center'><Strong>Загальна вартість витрат на всі куповані комплектуючі вироби (ККВ)</Strong></td>
    <td width='25%' align='center'><Strong>Грн.без ПДВ</Strong></td>
	
    <td width='18%' align='center'><Strong> ".$KupKomp." грн.</Strong></td>
</tr>");
$KKV = $KupKomp;
  
if ($strPDV == "з ПДВ") {
	Echo("
		<tr >
			<td align='center'><Strong> ПДВ ".$fltPDV." %</Strong></td>
			<td align='center'><Strong>".number_format($strMontazhPdv+$strActivePdv, 2, ',', ' ')." грн.</Strong></td>
			
		</tr>
		<tr>
			<td align='center'> <Strong>Грн.з ПДВ</Strong></td>
			<td align='center'> <Strong>".number_format($strMontazhZPdv+$strActiveZPdv, 2, ',', ' ')." грн.</Strong></td>
			
	");  
	$KKV = $strMontazhZPdv+$strActiveZPdv;
}  
echo ("</table>");


echo ("<p>");
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'інше'");

$ArCount3 = mysql_num_rows($result);
if($ArCount3 >0){		 
		 
echo ("<table width='700' border='1' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#CCCCCC'>
        <td width='100%'><div align='center'>Прямі додаткові витрати</div></td>
  </tr>
  </table>");
  
  echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='DDDDDD'>
	<td width='10%'><div align='center'>№</div></td>
	<td width='15%'><div align='center'>Назва</div></td>
	<td width='65%'><div align='center'>Опис</div></td>
	<td width='10%'><div align='center'>сума</div></td>
</tr>");
  
$i = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;

$PriceGRN = $row['PriceGrnZNacinkoju'];
$SubCategoryName = $row['SubCategoryName'];
If ($SubCategoryName == ""){
	$SubCategoryName = 'N/A';
};

echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$i."</div></td>
	<td width='15%'><div align='left'>".$row['Model']."</div></td>
    <td width='65%'><div align='left'>".$row['Description']."</div></td>
   <td width='10%'><div align='center'>".$PriceGRN."</div></td>
   
  </tr>
   ");
  }

echo ("</table>");
$result = mysql_query("SELECT SUM(Propozycija) as SUM_Propozycija FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'інше'") or die(mysql_error());
$i = mysql_fetch_array($result); 
$razomOtherBezPdv = $i['SUM_Propozycija'];
Echo("<table width='700' border='2' cellpadding='1' cellspacing='1' align='center' class='style3'>
	<tr>
    <td width='57%' rowspan='4'></td>
    <td width='25%' >ВСЕ РАЗОМ Грн. без ПДВ</td>
    <td width='18%' >".number_format($razomOtherBezPdv, 2, ',', ' ')." грн.</td>
	
  </tr>");
  
  $strOtherPdv = round (($razomOtherBezPdv * $fltPDV)/100, 2);
  $strOtherZPdv = round ($strOtherPdv+$razomOtherBezPdv, 2);
  
if ($strPDV == "з ПДВ") {
Echo("
<tr>
    <td>ПДВ ".$fltPDV." %</td>
    <td>".number_format($strOtherPdv, 2, ',', ' ')." грн</td>
	
</tr>
<tr>
    <td>ВСЕ РАЗОМ Грн. з ПДВ</td>
    <td>".number_format($strOtherZPdv, 2, ',', ' ')." грн.</td>
</tr>
	");  
}     
echo ("</table>");
}

echo ("<p>");
$result = mysql_query("SELECT * FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'роботи'");
$ArCount4 = mysql_num_rows($result);
if($ArCount4 >0){		 
echo ("<table width='700' border='1' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#CCCCCC'>
        <td width='100%'><div align='center'>Час і вартість проведення робіт</div></td>
  </tr>
  </table>");
  
  echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='DDDDDD'>
	<td width='10%'><div align='center'>№</div></td>
	<td width='15%'><div align='center'>Назва</div></td>
	<td width='65%'><div align='center'>Опис</div></td>
	<td width='10%'><div align='center'>сума</div></td>
</tr>");
  
$i = 0;
while ($row = mysql_fetch_array($result)) {
$i = $i+1;


$PriceGRN = $row['PriceGrnZNacinkoju'];
$SubCategoryName = $row['SubCategoryName'];
If ($SubCategoryName == ""){
	$SubCategoryName = 'N/A';
};

echo ("<tr class='style1'>
	<td width='10%'><div align='center'>".$i."</div></td>
	<td width='15%'><div align='left'>".$row['Model']."</div></td>
    <td width='65%'><div align='left'>".$row['Description']."</div></td>
   <td width='10%'><div align='center'>".number_format($PriceGRN, 2, ',', ' ')."</div></td>
   
  </tr>
   ");
  }

echo ("</table>");
$result = mysql_query("SELECT SUM(Propozycija) as SUM_Propozycija FROM ZamovleniTovary where zamovleniaID =".$objid." and type = 'роботи'") or die(mysql_error());
$i = mysql_fetch_array($result); 
$razomWorksBezPdv = $i['SUM_Propozycija'];

Echo("<table width='700' border='2' cellpadding='1' cellspacing='1' align='center' class='style3'>
	<tr>
    <td width='57%' rowspan='4'></td>
    <td width='25%' >ВСЕ РАЗОМ Грн. без ПДВ</td>
    <td width='18%' >".number_format($razomWorksBezPdv, 2, ',', ' ')." грн.</td>
	
  </tr>");

  
	$strWorkPdv = round (($razomWorksBezPdv * $fltPDV)/100, 2);
	$strWorkZPdv = round ($strWorkPdv+$razomWorksBezPdv, 2);
  
if ($strPDV == "з ПДВ") {
Echo("
<tr>
    <td>ПДВ ".$fltPDV." %</td>
    <td>".number_format($strWorkPdv, 2, ',', ' ')." грн</td>
	
</tr>
<tr>
    <td>ВСЕ РАЗОМ Грн. з ПДВ</td>
    <td>".number_format($strWorkZPdv, 2, ',', ' ')." грн</td>
</tr>
	");  
}   
echo ("</table>");
}

echo ("<p>");

if ($strPDV == "з ПДВ") {
//$Razom = round($strPropozycijaZPdv+$strOtherZPdv+$strWorkZPdv, 2);
$Razom = round($KKV+$strOtherZPdv+$strWorkZPdv, 2);
	/*Echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center' class='style3'>
	<tr>
		<td width='57%' rowspan='4' align='center'><Strong><h2>За все разом грн.</h2></Strong></td>
		<td width='25%' align='center'><Strong>Вартість купованих комплектуючих виробів(ККВ) з ПДВ</Strong></td>
		<td width='18%' align='center'><Strong> ".number_format($strPropozycijaZPdv, 2, ',', ' ')." грн.</Strong></td>
	</tr>");*/
	
	Echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center' class='style3'>
	<tr>
		<td width='57%' rowspan='4' align='center'><Strong><h2>За все разом грн.</h2></Strong></td>
		<td width='25%' align='center'><Strong>Вартість купованих комплектуючих виробів(ККВ) з ПДВ</Strong></td>
		<td width='18%' align='center'><Strong> ".number_format($KKV, 2, ',', ' ')." грн.</Strong></td>
	</tr>");

	
if ($strWorkZPdv != "") {
	Echo ("<tr >
		<td align='center'><Strong>Вартість проведення робіт Грн з ПДВ</Strong></td>
		<td align='center'><Strong>".number_format($strWorkZPdv, 2, ',', ' ')." грн.</Strong></td>
	</tr>");
}

if ($strOtherZPdv != "") {
	Echo ("<tr >
		<td align='center'><Strong>Вартість інших додаткових витрат з ПДВ</Strong></td>
		<td align='center'><Strong>".number_format($strOtherZPdv, 2, ',', ' ')." грн.</Strong></td>
	</tr>");
}

	Echo ("<tr>
		<td align='center'> <Strong>Всього:</Strong></td>
		<td align='center'> <Strong>".number_format($Razom, 2, ',', ' ')." грн.</Strong></td>
		
	</tr>");  
	echo ("</table>");
}  

if ($strPDV == "без ПДВ") {
$Razom = $razomActiveBezPdv + $razomMontazhBezPdv + $razomWorksBezPdv + $razomOtherBezPdv;
	Echo ("<table width='700' border='3' cellpadding='0' cellspacing='0' align='center' class='style3'>
	<tr>
		<td width='57%' rowspan='4' align='center'><Strong><h2>За все разом грн.</h2></Strong></td>
		<td width='25%' align='center'><Strong>Вартість купованих комплектуючих виробів(ККВ) без ПДВ</Strong></td>
		<td width='18%' align='center'><Strong> ".number_format($razomActiveBezPdv + $razomMontazhBezPdv, 2, ',', ' ')." грн.</Strong></td>
	</tr>");

	if ($razomWorksBezPdv != "") 
	{
	Echo ("<tr >
		<td align='center'><Strong>Вартість проведення робіт грн. без ПДВ</Strong></td>
		<td align='center'><Strong>".number_format($razomWorksBezPdv, 2, ',', ' ')." грн.</Strong></td>
	</tr>");
	}
	
	if ($razomOtherBezPdv != "") 
	{
	Echo ("<tr >
		<td align='center'><Strong>Вартість інших додаткових витрат без ПДВ</Strong></td>
		<td align='center'><Strong>".number_format($razomOtherBezPdv, 2, ',', ' ')." грн.</Strong></td>
	</tr>");
	}

	Echo ("<tr>
		<td align='center'> <Strong>Всього:</Strong></td>
		<td align='center'> <Strong>".number_format($Razom, 2, ',', ' ')." грн.</Strong></td>
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