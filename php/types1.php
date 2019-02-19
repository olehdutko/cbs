<?php
include "../php/SQL.php";

extract($_REQUEST);
$objid = $objid;
//$objid = $_POST['objid'];

$aktyvni = 0;
$montazhni = 0;
$roboty  = 0;
$inshe = 0;

  $result1 = mysql_query("Select SUM(Propozycija) FROM ZamovleniTovary where zamovleniaID = '".$objid."' and TypeID = '1'");
  while ($row = mysql_fetch_array($result1)) {
  $aktyvni = round ($row['SUM(Propozycija)'], 2);
  }
  
  $result2 = mysql_query("Select SUM(Propozycija) FROM ZamovleniTovary where zamovleniaID = '".$objid."' and TypeID = '2'");
  while ($row = mysql_fetch_array($result2)) {
  $montazhni = round ($row['SUM(Propozycija)'], 2);
  
  }

  $result3 = mysql_query("Select SUM(Propozycija) FROM ZamovleniTovary where zamovleniaID = '".$objid."' and TypeID = '3'");
  while ($row = mysql_fetch_array($result3)) {
  $roboty = round ($row['SUM(Propozycija)'],2);
  }

  $result4 = mysql_query("Select SUM(Propozycija) FROM ZamovleniTovary where zamovleniaID = '".$objid."' and TypeID = '4'");
  while ($row = mysql_fetch_array($result4)) {
  $inshe = round ($row['SUM(Propozycija)'],2);
  }  
  
/*  echo($aktyvni);
  echo("_");
  echo($montazhni);
  echo("_");
  echo($roboty);
  echo("_");
  echo($inshe);
  */
  //{"results":[{"grivna":$aktyvni,"euro":$montazhni,"dollar":$roboty,"pdv":$inshe}]}
  //'{"grivna":'+$aktyvni+',"euro":'+$montazhni+',"dollar":'+$roboty+',"pdv":'+$inshe+'}'
  //echo('{"grivna":'+$aktyvni+',"euro":'+$montazhni+',"dollar":'+$roboty+',"pdv":'+$inshe+'}');
  
  //echo('{"активні":');
  //echo($aktyvni);
  //echo(', "монтажні":');
  //echo($montazhni);
  //echo(', "роботи":');
  //echo($roboty);
  //echo(', "інше":');
  //echo($inshe);
  //echo('}');
  
  
  
  
  echo('{"results":[{"type": "активні", "Propositia": "');
  echo($aktyvni);
  echo('"},');
  
  echo('{"type": "монтажні", "Propositia": "');
  echo($montazhni);
  echo('"},');
  
  echo('{"type": "роботи", "Propositia": "');
  echo($roboty);
  echo('"},');
  
  echo('{"type": "інше", "Propositia": "');
  echo($inshe);
  echo('"}]}');
  
  
  
  

  
  
 


mysql_close($new_connection);
?>