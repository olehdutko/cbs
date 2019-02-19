<?php
include "../php/SQL.php";
extract($_REQUEST);



function GetCategories() {
  $query = "Select * FROM Kurs";
  $categories = array('results' => array());
  $result = mysql_query($query);
  $num = mysql_numrows($result);
  $i = 0;
  while ($row = mysql_fetch_assoc($result)) {
    $categories['results'][$i] = $row;
    $i++;
  }
  return json_encode($categories);
}
 
echo GetCategories();

mysql_close($new_connection);
?>