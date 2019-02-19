<?php
include "../php/SQL.php";
extract($_REQUEST);
$objid = $_REQUEST['objid']; 

// collect request parameters
$start  = isset($_REQUEST['start'])  ? $_REQUEST['start']  :  0;
$count  = isset($_REQUEST['limit'])  ? $_REQUEST['limit']  : 20;
$sort   = isset($_REQUEST['sort'])   ? $_REQUEST['sort']   : '';
$dir    = isset($_REQUEST['dir'])    ? $_REQUEST['dir']    : 'ASC';
$filters = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : null;

// GridFilters sends filters as an Array if not json encoded
if (is_array($filter)) {
    $encoded = false;
} else {
    $encoded = true;
    $filter = json_decode($filter);
}
// initialize variables
$where = ' 0 = 0 ';
$qs = '';

// loop through filters sent by client
if (is_array($filter)) {
	for ($i=0;$i<count($filter);$i++){
		switch($filter[$i]['data']['type']){
			case 'string' : $qs .= " AND ".$filter[$i]['field']." LIKE '%".$filter[$i]['data']['value']."%'"; Break;
			case 'list' : 
				if (strstr($filter[$i]['data']['value'],',')){
					$fi = explode(',',$filter[$i]['data']['value']);
					for ($q=0;$q<count($fi);$q++){
						$fi[$q] = "'".$fi[$q]."'";
					}
					$filter[$i]['data']['value'] = implode(',',$fi);
					$qs .= " AND ".$filter[$i]['field']." IN (".$filter[$i]['data']['value'].")"; 
				}else{
					$qs .= " AND ".$filter[$i]['field']." = '".$filter[$i]['data']['value']."'"; 
				}
			Break;
			case 'boolean' : $qs .= " AND ".$filter[$i]['field']." = ".($filter[$i]['data']['value']); Break;
			case 'numeric' : 
				switch ($filter[$i]['data']['comparison']) {
					case 'eq' : $qs .= " AND ".$filter[$i]['field']." = ".$filter[$i]['data']['value']; Break;
					case 'lt' : $qs .= " AND ".$filter[$i]['field']." < ".$filter[$i]['data']['value']; Break;
					case 'gt' : $qs .= " AND ".$filter[$i]['field']." > ".$filter[$i]['data']['value']; Break;
				}
			Break;
			case 'date' : 
				switch ($filter[$i]['data']['comparison']) {
					case 'eq' : $qs .= " AND ".$filter[$i]['field']." = '".date('Y-m-d',strtotime($filter[$i]['data']['value']))."'"; Break;
					case 'lt' : $qs .= " AND ".$filter[$i]['field']." < '".date('Y-m-d',strtotime($filter[$i]['data']['value']))."'"; Break;
					case 'gt' : $qs .= " AND ".$filter[$i]['field']." > '".date('Y-m-d',strtotime($filter[$i]['data']['value']))."'"; Break;
				}
			Break;
		}
	}	
	$where .= $qs;
}

// query the database

$query = "SELECT * FROM Nariady INNER JOIN  Dodano_v_Nariad ON Nariady.ID=Dodano_v_Nariad.NariadID  Cross Join Kurs where NariadID=".$objid. " AND ".$where;;
//echo($query);
if ($sort != "") {
    $query .= " ORDER BY ".$sort." ".$dir;
}
$query .= " LIMIT ".$start.",".$count;
$rs = mysql_query($query);
$total = mysql_query("SELECT COUNT(ModelId) FROM Dodano_v_Nariad WHERE NariadID = ".$objid." AND ".$where);

$total = mysql_result($total, 0, 0);

$arr = array();
while($obj = mysql_fetch_object($rs)) {
    $arr[] = $obj;
}

// return response to client
//echo '{"total":"'.$total.'","data":'.json_encode($arr).'}';
echo $_GET['callback'].'({"total":"'.$total.'","data":'.json_encode($arr).'})';
mysql_close($new_connection);