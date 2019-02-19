<?php
include "../php/SQL.php";			

	$p_Kontragent = $_POST['p_Kontragent'];
	$cina_spysanogo = $_POST['cina_spysanogo'];
	$strSkladType = $_POST['strSkladType'];
	$strFondyType = $_POST['strFondyType'];
	$type = $_POST['type'];
	
	//Селектаю Робочий баланс контрагента
	$query = "SELECT robochyj_balans FROM borsuk.Kontragenty WHERE PIB ='".$p_Kontragent."';";
	echo($query);
	$result = mysql_query($query);
	while ($row = mysql_fetch_array($result)) 
	{
	$robochyj_balans = $row['robochyj_balans'];
	//Віднімаю з балансу контрагента ціну списаного
	$new_robochyj_balans = floatval($robochyj_balans) - floatval($cina_spysanogo);
	}
	
	/*
	echo('Старий робочий баланс '.$robochyj_balans);
	echo('Ціна списаного '.$cina_spysanogo);
	echo('Новий робочий баланс '.$new_robochyj_balans);
	*/
	
	//Апдейтаю робочий баланс контрагента. 
	$query1 = "UPDATE `Kontragenty` SET `robochyj_balans` = ".floatval($new_robochyj_balans)." WHERE `PIB`='".$p_Kontragent."' ;";
	echo($query1);
	mysql_query($query1);
	echo('**************************************');
	if ($type == $strSkladType) {
		//Селектаю Sklad_balans контрагента
		$query = "SELECT Sklad_balans FROM borsuk.Kontragenty WHERE PIB ='".$p_Kontragent."';";
		echo($query);
		$result = mysql_query($query);
		while ($row = mysql_fetch_array($result)) 
		{
		$Sklad_balans = $row['Sklad_balans'];
		//Віднімаю з балансу контрагента ціну списаного
		$new_Sklad_balans = floatval($Sklad_balans) - floatval($cina_spysanogo);
		}
		//Апдейтаю  баланс складу контрагента. 
		$query1 = "UPDATE `Kontragenty` SET `Sklad_balans` = ".floatval($new_Sklad_balans)." WHERE `PIB`='".$p_Kontragent."' ;";
		echo($query1);
		mysql_query($query1);
	}
		
	if ($type == $strFondyType) {
		///Селектаю fondy_balans контрагента
		$query = "SELECT fondy_balans FROM borsuk.Kontragenty WHERE PIB ='".$p_Kontragent."';";
		echo($query);
		$result = mysql_query($query);
		while ($row = mysql_fetch_array($result)) 
		{
		$fondy_balans = $row['fondy_balans'];
		//Віднімаю з балансу контрагента ціну списаного
		$new_fondy_balans = floatval($fondy_balans) - floatval($cina_spysanogo);
		}
		//Апдейтаю баланс виробничих фондів контрагента. 
		$query1 = "UPDATE `Kontragenty` SET `fondy_balans` = ".floatval($new_fondy_balans)." WHERE `PIB`='".$p_Kontragent."' ;";
		echo($query1);
		mysql_query($query1);
	}
	
?>