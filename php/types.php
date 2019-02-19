<?php
include "../php/SQL.php";
extract($_REQUEST);



function GetCategories() {
//  $query = "Select SUM(Propozycija) AS Propositia, type AS type FROM ZamovleniTovary where zamovleniaID = '64' and TypeID = '1' Union
//			Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '64' and TypeID = '2' Union
//			Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '64' and TypeID = '3' Union
//			Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '64' and TypeID = '4'";






  $query = "Select SUM(Propozycija) AS Propositia, type AS type FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '1' Union
			Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '2'";

  

  
    $temp_query1 = "Select type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '1'";
	$temp_query2 = "Select type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '2'";
	$temp_query3 = "Select type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '3'";
	$temp_query4 = "Select type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '4'";
	$result1 = mysql_query($temp_query1);
	$result2 = mysql_query($temp_query2);
	$result3= mysql_query($temp_query3);
	$result4= mysql_query($temp_query4);

  while ($row = mysql_fetch_array($result1)) {
    $query1 = "Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '1'";
  }
  
  while ($row = mysql_fetch_array($result2)) {
    $query2 = "Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '2'";
  }
  
  while ($row = mysql_fetch_array($result3)) {
    $query3 = "Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '3'";
  }

  while ($row = mysql_fetch_array($result4)) {
    $query4 = "Select SUM(Propozycija) AS Propositia, type AS type  FROM ZamovleniTovary where zamovleniaID = '65' and TypeID = '4'";
  }
  
  //$query = $query1.' UNION '.$query2.' UNION '.$query3;
  
  
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