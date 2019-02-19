<?php
include "../php/SQL.php";
	//require_once 'insert.php';
	$OldObjNomer = $_POST['OldObjNomer'];
	$nazva = addslashes($_POST['nazva']);
	$PIB = $_POST['PIB'];
	$prymitka = $_POST['prymitka'];
	$adresa = addslashes($_POST['adresa']);
	$zamovnyk = $_POST['zamovnyk'];
	$telefon = $_POST['telefon'];
	$vykonavci = $_POST['vykonavci'];
	$date = $_POST['date'];
	$PDV = $_POST['PDV'];
	$znyzhka = $_POST['znyzhka'];
	$dollar = $_POST['dollar'];
	$euro = $_POST['euro'];
	$variant = $_POST['variant'];
	$objthemes = $_POST['objthemes'];
	$action_type_id = $_POST['action_type_id'];
	$grade_id = $_POST['grade_id'];
	$city_id = $_POST['city_id'];
	
	$objnomerArray = mysql_query("Select Max(nomer) as 'nomer' FROM objekty");
	$objnomer = mysql_fetch_array($objnomerArray);
	$intObjnomer = $objnomer[0]+1;
	$query = 'INSERT INTO objekty(nomer, nazva, PIB, zamovnyk, objthemes, prymitka, telefon, Vykonavci, date, PDV, znyzhka, Moment_Dollar, Moment_Euro, Variant, adresa) VALUES ("' . 
		$intObjnomer . '", "' .
		$nazva . '", "' .
		$PIB . '", "' .
		$zamovnyk . '", "' .
		$objthemes . '", "' .
		$prymitka . '", "' .
		$telefon . '", "' .
		$vykonavci . '", "' .
		$date . '", "' .
		$PDV . '", "' .
		$znyzhka . '", "' .
		$dollar . '", "' .
		$euro . '", "' .
		$variant . '", "' .
		$adresa . '")';
	mysql_query($query);
	echo($query);


$query = "INSERT ZamovleniTovary  (type, TypeID, SubCategoryName, Description, categoryName, Vendor, ModelId, Model, Price, PriceGrn, Count, OdVymir, FinalPrice, Nacinka, Propozycija, Dohid, Valiuta, Time, TotalTime) 
SELECT type, TypeID, SubCategoryName, Description, categoryName, Vendor, ModelId, Model, Price, PriceGrn, Count, OdVymir, FinalPrice, Nacinka, Propozycija, Dohid, Valiuta, Time, TotalTime
FROM ZamovleniTovary
WHERE zamovleniaID = $OldObjNomer";

//echo($query);
mysql_query($query);
$query = "Update ZamovleniTovary SET zamovleniaID  = $intObjnomer where zamovleniaID  = 0";
mysql_query($query);

	mysql_close($new_connection);

?>