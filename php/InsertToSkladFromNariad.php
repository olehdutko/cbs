<?php
include "../php/SQL.php";
	extract($_REQUEST);
	
			$ThemeId = $_POST['ThemeId'];
			$Prymitka = $_POST['Prymitka'];
			$today = date("Y.m.d");
			
			$CategoryName = $_POST['CategoryName'];
			$Nariad = $_POST['Nariad'];
			$Type = '�����';
			$ModelId = $_POST['ModelId'];
			$Model = $_POST['Model'];
			$Description = $_POST['Description'];
			$Price = $_POST['Price'];
			$OdVymir = $_POST['OdVymir'];
			$Vendor = $_POST['Vendor'];
			$valiuta = $_POST['valiuta'];
			$Count = $_POST['Count'];

//�������� �� � �� ����� ��������� ������ ��������� ̲
	$query2 = "SELECT count FROM sklad WHERE ModelId =".$ModelId." and IsDeleted = 0;";
	$result1 = mysql_query($query2);
	$result11 = mysql_query($query2);
	

//TODO: ������ �������� �� $result >0
   if( mysql_fetch_array($result1) > 0)
   {
   //���� �� ����� ���� ����� ����� � �� �� �������� �� ��������, �� ���������� ���� �-��� � �� �� �������� ������� ������� �� ��������� �� �����.
	$skladcount = 0;
	
	
	while ($row = mysql_fetch_array($result11)) 
	{
		$skladcount = $row['count'];
	}
	//intval($skladcount)
	//$newSkladValue = intval($skladcount) + $Count
	
	$newSkladValue = $skladcount + $Count;
	echo($newSkladValue);
	$query = "UPDATE sklad SET `count` = ".$newSkladValue." WHERE ModelId =".$ModelId." and IsDeleted = 0;";
	//echo($query);
	mysql_query($query);
   }
   else
   {
   //���� �� ����� ����� ����� �� ���� ��� �� �� �������� �� ��������, �� ����� �������� �� �����.
	//$query = 'INSERT INTO sklad (Type, ThemeId , CategoryName, Vendor, ModelId, Model, Description , OdVym,  Price, Valiuta, count) VALUES ("' . 
	

	$query = 'INSERT INTO sklad (Type, Date, ThemeId , CategoryName, Vendor, Prymitka, Model, Description , OdVym,  Price, Valiuta, count) VALUES ("' . 
	$Type . '", "' .
	$today . '", "' .
	$ThemeId . '", "' .
	$CategoryName . '", "' .
	$Vendor . '", "' .
	$Prymitka . '", "' .
	//$ModelId . '", "' .
 	$Model . '", "' .
	addslashes($Description) . '", "' .
	addslashes($OdVymir) . '", "' .
	$Price . '", "' .
	$valiuta . '", "' .
	$Count. '")';
	mysql_query($query);
	echo($query);
   }

	mysql_close($new_connection);

?>