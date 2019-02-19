<?php
$host="localhost";
$user="root";
$pwd="";
$new_connection = mysql_connect($host,$user,$pwd);
mysql_select_db("borsuk",$new_connection);
mysql_query('SET NAMES utf8');
?>