<?php
include "../php/SQL.php";			

	$p_Kontragent = $_POST['p_Kontragent'];
	$cina_spysanogo = $_POST['cina_spysanogo'];
	$strSkladType = $_POST['strSkladType'];
	$strFondyType = $_POST['strFondyType'];
	$type = $_POST['type'];
	
	//�������� ������� ������ �����������
	$query = "SELECT robochyj_balans FROM borsuk.Kontragenty WHERE PIB ='".$p_Kontragent."';";
	echo($query);
	$result = mysql_query($query);
	while ($row = mysql_fetch_array($result)) 
	{
	$robochyj_balans = $row['robochyj_balans'];
	//³����� � ������� ����������� ���� ���������
	$new_robochyj_balans = floatval($robochyj_balans) - floatval($cina_spysanogo);
	}
	
	/*
	echo('������ ������� ������ '.$robochyj_balans);
	echo('ֳ�� ��������� '.$cina_spysanogo);
	echo('����� ������� ������ '.$new_robochyj_balans);
	*/
	
	//�������� ������� ������ �����������. 
	$query1 = "UPDATE `Kontragenty` SET `robochyj_balans` = ".floatval($new_robochyj_balans)." WHERE `PIB`='".$p_Kontragent."' ;";
	echo($query1);
	mysql_query($query1);
	echo('**************************************');
	if ($type == $strSkladType) {
		//�������� Sklad_balans �����������
		$query = "SELECT Sklad_balans FROM borsuk.Kontragenty WHERE PIB ='".$p_Kontragent."';";
		echo($query);
		$result = mysql_query($query);
		while ($row = mysql_fetch_array($result)) 
		{
		$Sklad_balans = $row['Sklad_balans'];
		//³����� � ������� ����������� ���� ���������
		$new_Sklad_balans = floatval($Sklad_balans) - floatval($cina_spysanogo);
		}
		//��������  ������ ������ �����������. 
		$query1 = "UPDATE `Kontragenty` SET `Sklad_balans` = ".floatval($new_Sklad_balans)." WHERE `PIB`='".$p_Kontragent."' ;";
		echo($query1);
		mysql_query($query1);
	}
		
	if ($type == $strFondyType) {
		///�������� fondy_balans �����������
		$query = "SELECT fondy_balans FROM borsuk.Kontragenty WHERE PIB ='".$p_Kontragent."';";
		echo($query);
		$result = mysql_query($query);
		while ($row = mysql_fetch_array($result)) 
		{
		$fondy_balans = $row['fondy_balans'];
		//³����� � ������� ����������� ���� ���������
		$new_fondy_balans = floatval($fondy_balans) - floatval($cina_spysanogo);
		}
		//�������� ������ ���������� ����� �����������. 
		$query1 = "UPDATE `Kontragenty` SET `fondy_balans` = ".floatval($new_fondy_balans)." WHERE `PIB`='".$p_Kontragent."' ;";
		echo($query1);
		mysql_query($query1);
	}
	
?>