<html>
<head>
<title>Перегляд прайсу</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>

<style type="text/css">
<!--
.style1 {
	font-size: 14px;
}
.style2 {
	color: #333333;
	font-style: italic;
}
.style3 {
	font-size: 22px;
}

-->
</style>
<?php
include "../php/SQL.php";

extract($_REQUEST);
$result = mysql_query("SELECT * FROM books where isdeleted = 0");

echo ("<table width='100%' border='0' cellpadding='0' cellspacing='0' align='center'>
  <tr bgcolor='#99CCCC'>
        <td width='100%' class='style3'><div align='center'>Список Книг</div></td>
  </tr>
  </table>");
  
echo ("<table width='100%' border='1' cellpadding='0' cellspacing='0' align='center'>

  <tr bgcolor='#99CCFF'>
    <td width='5%'><div align='center'>№</div></td>
	<td width='25%'><div align='center'>Назва Книги</div></td>
	<td width='25%'><div align='center'>Автор/Автори</div></td>
    <td width='5%'><div align='center'>рік видання</div></td>
    <td width='5%'><div align='center'>кількість сторінок</div></td>
	<td width='10%'><div align='center'>статус</div></td>
	<td width='25%'><div align='center'>Примітка</div></td>
  </tr>");
  
$i = 0;

while ($row = mysql_fetch_array($result)) {

echo ("<tr class='style1'>
	<td width='5%'><div align='center'>".$row['id']."</div></td>
	<td width='25%'><div align='left'>".$row['book_name']."</div></td>
	<td width='25%'><div align='left'>".$row['book_outhors']."</div></td>
    <td width='5%'><div align='left'>".$row['year']."</div></td>
    <td width='5%'><div align='center'>".$row['pages']."</div></td>
	<td width='10%'><div align='center'>".$row['status']."</div></td>
	<td width='25%'><div align='center'>".$row['other']."</div></td>
  </tr>");
  
  }
echo ("</table>");

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

