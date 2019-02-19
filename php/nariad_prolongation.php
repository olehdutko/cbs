<?php
include "../php/SQL.php";
extract($_REQUEST);
$objid = $_POST['objid'];
	  $query = "Select ID, P_kontragent, S_kontragent, Date, Prymitka FROM Nariady where ID = 76";
	  $categories = array('result' => array());
	  $result = mysql_query($query);
	  $num = mysql_numrows($result);
	  $i = 0;
	  while ($row = mysql_fetch_assoc($result)) {
		$categories['result'][$i] = $row;
		$i++;
	  }
	   echo json_encode($categories);
mysql_close($new_connection);
?>