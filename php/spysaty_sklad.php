<?php
	include "../php/SQL.php";
	
	$countAfter = $_POST['countAfter'];
	$KontrAgent = $_POST['KontrAgent'];
	$Prymitka = $_POST['Prymitka'];
	$ModelId = $_POST['ModelId'];
	$ObjNomer = $_POST['ObjNomer'];
	
	extract($_REQUEST);
	
switch($_REQUEST['action']){
	case 'Kontragent':
		NaKontragenta();
	break;
	case 'Object':
		NaObject();
	break;
	case 'Neprydatnist':
		NaNeprydatnist();
	break;
}
	
function NaObject(){ 
	$ObjNomer = $_POST['ObjNomer'];
	$IsDeleted = $_POST['IsDeleted'];
	$Prymitka = $_POST['Prymitka'];
	$ModelId = $_POST['ModelId'];
	$Price = $_POST['Price'];
	$Model = $_POST['Model'];
	$Description = $_POST['Description'];
	$Vendor = $_POST['Vendor'];
	$count = $_POST['countAfter'];
	$OdVym = $_POST['OdVym'];
	$countAfter = $_POST['countAfter'];
	$countBefore = $_POST['countBefore'];
	//������� ������� �� �����
	$zalyshok = intval($_POST['Zalyshok']);
	$objId = explode(" - ", $ObjNomer);
	$ObjectNomer = $objId[0];
	$Object = $objId[1];
	
	;
	if($zalyshok >0)
	{
		$query = "UPDATE sklad SET 
		count = '".$zalyshok."' WHERE ModelId=".$ModelId." ;";
		mysql_query($query);
		//Echo($query);
	}
	
	if($zalyshok ==0)
	{
		$query = "UPDATE sklad SET 
		IsDeleted = '".$IsDeleted."', 
		SpysanoNa = '".$ObjNomer."', 
		Prymitka = '".$Prymitka."' WHERE ModelId=".$ModelId." ;";
		mysql_query($query);
		//Echo($query);
	}
	
	//$query2 = "SELECT * FROM limit_card WHERE ModelId =".$ModelId." and ObjId =".$ObjectNomer." and Price =".floatval($Price).";"; //�������� ��������� �� ������� - ObjId 
	$query2 = "SELECT * FROM limit_card WHERE ModelId =".$ModelId." and ObjId =".$ObjectNomer.";"; //�������� ��������� �� ������� - ObjId 
	Echo($query2);
	$result = mysql_query($query2);
	while ($row = mysql_fetch_array($result)) 
	{
	$Suma = $row['Suma'];
	$Count = $row['Count'];
	}
	
	//���� �� ����� ���� ���� ������ $modelID, ��� ����������
	//���� �� ����� ���� ������ $modelID, �, ��� ��������� Count, Suma, Price 
	
	if (strlen($Suma)>0)
	{
		$newcount = $countAfter+$Count;
		$newSuma = $Suma+($Price*$countAfter);
		$query = "UPDATE `limit_card` SET 
		`Count` = ".$newcount.", 
		`Suma` = ".$newSuma."
		WHERE ModelId =".$ModelId.";";
		mysql_query($query);
	}
	else
	{
		$query = 'INSERT INTO limit_card (Object, ObjId, ModelId, Model, Description , Price, Count, OdVym, Prymitka, Suma) VALUES ("' . 
		$objId[1] . '", "' .
		$objId[0] . '", "' .
		$ModelId . '", "' .
		$Model . '", "' .
		addslashes($Description) . '", "' .
		$Price . '", "' .
		$countAfter . '", "' .
		addslashes($OdVym) . '", "' .
		addslashes($Prymitka) . '", "' .
		$Price*$countAfter. '")';
		mysql_query($query);
		//echo($query);
	}
		
	$query = 'INSERT INTO skladHistory(SpysanoNa, Prymitka, ModelId, Price, Model, Description ,Vendor, count, OdVym) VALUES ("' . 
		$ObjNomer . '", "' .
		$Prymitka . '", "' .
		$ModelId . '", "' .
		$Price . '", "' .
		$Model . '", "' .
		$Description . '", "' .
		$Vendor . '", "' .
		$countAfter . '", "' .
		$OdVym . '")';
			
	
	mysql_query($query);
	//echo iconv("ISO-8859-1", "UTF-8", $query);
}

function NaKontragenta(){ 
	$Prymitka = $_POST['Prymitka'];
	$ModelId = $_POST['ModelId'];
	$KontrAgent = $_POST['KontrAgent'];
	$Price = $_POST['Price'];
	$Model = $_POST['Model'];
	$Description = $_POST['Description'];
	$Vendor = $_POST['Vendor'];
	$count = $_POST['countAfter'];
	$OdVym = $_POST['OdVym'];
	$countAfter = $_POST['countAfter'];
	$opercount = $_POST['opercount'];
	
	//$countBefore = $_POST['countBefore'];
	$SumaSpysannia = $_POST['SumaSpysannia'];
	
	
	//������ �����������
	$result = mysql_query("SELECT Balans FROM Kontragenty WHERE PIB='".$KontrAgent."' ;");
	while ($row = mysql_fetch_array($result)) 
	{
	$balans = $row['Balans'];
	}
	//������� ������� �� �����
	$zalyshok = $count - $opercount;
	
	//�������� �����
	if($zalyshok >=0)
	{
		$query = "UPDATE sklad SET 
		count = '".$zalyshok."' WHERE ModelId=".$ModelId." ;";
		mysql_query($query);
	}
	
	//���� �������  = 0, �� ������ �� ����� �� ������� �����
	if($zalyshok ==0)
	{
		$query = "UPDATE sklad SET 
		IsDeleted = 1, 
		SpysanoNa = '".$KontrAgent."', 
		Prymitka = '".$Prymitka."' WHERE ModelId=".$ModelId." ;";
		mysql_query($query);
	}
	
	//������ ����������� = ������ - ���� �������� (�-���*ֳ��)
	if($zalyshok >=0)
	{
	$currentbalans = (float)$balans -(float)$SumaSpysannia;
	$query = "UPDATE Kontragenty SET 
	Balans = '".$currentbalans."' WHERE PIB='".$KontrAgent."' ;";
	mysql_query($query);
	
	//������� ������ ������
	$result = mysql_query("SELECT Sklad_balans FROM Kontragenty WHERE PIB='".$KontrAgent."' ;");
	while ($row = mysql_fetch_array($result)) 
		{ 
		$Sklad_balans = $row['Sklad_balans'];
		}
	$ZalyshokNaSkladi = $Sklad_balans - $SumaSpysannia;
	
	//������� � ������� ������
	//������ ������ = ������ ������ - ���� �������� (�-���*ֳ��)
	$query = "UPDATE Kontragenty SET 
	Sklad_balans = '".$ZalyshokNaSkladi."' WHERE PIB='".$KontrAgent."' ;";
	mysql_query($query);
	
	
	//������� ������� ������
	$result = mysql_query("SELECT robochyj_balans FROM Kontragenty WHERE PIB='".$KontrAgent."' ;");
	while ($row = mysql_fetch_array($result)) 
	{
	$robochyj_balans = $row['robochyj_balans'];
	}
	$Zalyshok = $robochyj_balans - $SumaSpysannia;
	
	//������� � �������� ������ 
	//������� ������  = ������� ������  - ���� �������� (�-���*ֳ��)
	$query = "UPDATE Kontragenty SET 
	robochyj_balans  = '".$Zalyshok."' WHERE PIB='".$KontrAgent."' ;";
	mysql_query($query);
 
//	echo iconv("ISO-8859-1", "UTF-8", $query);
	
	$query = 'INSERT INTO skladHistory(SpysanoNa, Prymitka, ModelId, Price, Model, Description ,Vendor, count, OdVym) VALUES ("' . 
		$KontrAgent . '", "' .
		$Prymitka . '", "' .
		$ModelId . '", "' .
		$Price . '", "' .
		$Model . '", "' .
		$Description . '", "' .
		$Vendor . '", "' .
		$count . '", "' .
		$OdVym . '")';
	mysql_query($query);
	}
}

function NaNeprydatnist(){ 
	$Prymitka = $_POST['Prymitka'];
	$ModelId = $_POST['ModelId'];
	$Neprydatnist = $_POST['Neprydatnist'];
	$Price = $_POST['Price'];
	$Model = $_POST['Model'];
	$Description = $_POST['Description'];
	$Vendor = $_POST['Vendor'];
	$count = $_POST['countAfter'];
	$countAfter = $_POST['countAfter'];
	$countBefore = $_POST['countBefore'];
	$Date = $_POST['Date'];
	$OdVym = $_POST['OdVym'];
	$opercount = $_POST['opercount'];
	
	
	$zalyshok = $countAfter - $opercount;
	
	
	if($zalyshok >0)
	{
		$query = "UPDATE sklad SET 
		count = '".$zalyshok."' WHERE ModelId=".$ModelId." ;";
		mysql_query($query);
	}
	
		if($zalyshok ==0)
	{
		$query = "UPDATE sklad SET 
		IsDeleted = 1, 
		SpysanoNa = '".$Neprydatnist."', 
		Prymitka = '".$Prymitka."' WHERE ModelId=".$ModelId." ;";
		mysql_query($query);
	}
	
	$query = 'INSERT INTO skladHistory(SpysanoNa, Prymitka, ModelId, Price, Model, Description ,Vendor, count, OdVym) VALUES ("' . 
		$Neprydatnist . '", "' .
		$Prymitka . '", "' .
		$ModelId . '", "' .
		$Price . '", "' .
		$Model . '", "' .
		$Description . '", "' .
		$Vendor . '", "' .
		$count . '", "' .
		$OdVym . '")';
					
	
	mysql_query($query);
	echo iconv("ISO-8859-1", "UTF-8", $query);
	
	
	
}
	
	
	
	
	

?>