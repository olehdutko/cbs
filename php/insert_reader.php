<?php
include "../php/SQL.php";
//require_once 'insert_reader.php';
//$nomer :addslashes($_POST['nomer']);

$adress = addslashes($_POST['adress']);
$filija = addslashes($_POST['filija']);
$year   = addslashes($_POST['year']);
$formuliar   = addslashes($_POST['formuliar']);
$nationality = addslashes($_POST['nationality']);
$phone       = addslashes($_POST['phone']);
$osvita      = addslashes($_POST['osvita']);
$profesia    = addslashes($_POST['profesia']);
$viddil      = addslashes($_POST['viddil']);
$name1 = addslashes($_POST['name1']);
$name2 = addslashes($_POST['name2']);
$email = addslashes($_POST['email']);
$surname   = addslashes($_POST['surname']);
$birthday  = addslashes($_POST['birthday']);
$idcard    = addslashes($_POST['idcard']);
$workplace = addslashes($_POST['workplace']);
$date      = addslashes($_POST['date']);
$other     = addslashes($_POST['other']);

$query = 'INSERT INTO readers(	
	adress,
	filija,
	year,
	formuliar,
	nationality,
	phone,
	osvita,
	profesia,
	viddil,
	name1,
	name2,
	surname,
	email,
	birthday,
	idcard,
	workplace,
	date,
	other) VALUES ("' . 
	$adress . '", "' . 
	$filija . '", "' . 
	$year . '", "' . 
	$formuliar . '", "' . 
	$nationality . '", "' . 
	$phone . '", "' . 
	$osvita . '", "' . 
	$profesia . '", "' . 
	$viddil . '", "' . 
	$name1 . '", "' . 
	$name2 . '", "' . 
	$surname . '", "' . 
	$email . '", "' . 
	$birthday . '", "' . 
	$idcard . '", "' . 
	$workplace . '", "' . 
	$date . '", "' . 
	$other . '")';

echo ($query);
mysql_query($query);

mysql_close($new_connection);

?>		