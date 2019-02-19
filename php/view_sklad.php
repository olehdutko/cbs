<?php
include "../php/SQL.php";

$start  = isset($_REQUEST['start'])  ? $_REQUEST['start']  :  0;
$count  = isset($_REQUEST['limit'])  ? $_REQUEST['limit']  : 30;
$sort   = isset($_REQUEST['sort'])   ? $_REQUEST['sort']   : '';
$dir    = isset($_REQUEST['dir'])    ? $_REQUEST['dir']    : 'ASC';
$filters = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : null;

// GridFilters sends filters as an Array if not json encoded
if (is_array($filters)) {
    $encoded = false;
} else {
    $encoded = true;
    $filters = json_decode($filters);
}
// initialize variables
$where = ' 0 = 0 ';
$qs = '';

// loop through filters sent by client
if (is_array($filters)) {
    for ($i=0;$i<count($filters);$i++){
        $filter = $filters[$i];
        // assign filter data (location depends if encoded or not)
        if ($encoded) {
            $field = $filter->field;
            $value = $filter->value;
            $compare = isset($filter->comparison) ? $filter->comparison : null;
            $filterType = $filter->type;
        } else {
            $field = $filter['field'];
            $value = $filter['data']['value'];
            $compare = isset($filter['data']['comparison']) ? $filter['data']['comparison'] : null;
            $filterType = $filter['data']['type'];
        }
        switch($filterType){
            case 'string' : $qs .= " AND ".$field." LIKE '%".$value."%'"; Break;
            case 'list' :
                if (strstr($value,',')){
                    $fi = explode(',',$value);
                    for ($q=0;$q<count($fi);$q++){
                        $fi[$q] = "'".$fi[$q]."'";
                    }
                    $value = implode(',',$fi);
                    $value = implode(',',$fi);
                    $qs .= " AND ".$field." IN (".$value.")";
                }else{
                    $qs .= " AND ".$field." = '".$value."'";
                }
            Break;
            case 'numeric' :
                switch ($compare) {
                    case 'eq' : $qs .= " AND ".$field." = ".$value; Break;
                    case 'lt' : $qs .= " AND ".$field." < ".$value; Break;
                    case 'gt' : $qs .= " AND ".$field." > ".$value; Break;
                }
            Break;
        }
    }
    $where .= $qs;
}

// query the database
//$query = "SELECT * FROM sklad WHERE Sklad.IsDeleted = 0";
//$query = "SELECT Sklad.Type, Sklad.ThemeId, Sklad.CategoryId, Sklad.CategoryName, Sklad.Vendor, Sklad.ModelId, Sklad.Model, Sklad.Description, Sklad.count, Sklad.OdVym, Sklad.Price, Sklad.Valiuta, Sklad.Prymitka, Sklad.OtrymanoVid, Sklad.IsDeleted, Sklad.DateDelete, Sklad.SpysanoNa, Kurs.grivna, Kurs.euro, Kurs.dollar from Sklad, Kurs WHERE Sklad.IsDeleted = 0";
$query = "SELECT * FROM Sklad Cross Join Kurs WHERE Sklad.IsDeleted = 0 and ".$where;
if ($sort != "") {
    $query .= " ORDER BY ".$sort." ".$dir;
}
$query .= " LIMIT ".$start.",".$count;

$rs = mysql_query($query);
$total = mysql_query("SELECT COUNT(ThemeId) FROM sklad WHERE IsDeleted = 0 and ".$where);
//$total = mysql_query("SELECT COUNT(ThemeId) FROM sklad WHERE IsDeleted = 0");
$total = mysql_result($total, 0, 0);

$arr = array();
while($obj = mysql_fetch_object($rs)) {
    $arr[] = $obj;
}

// return response to client
echo '{"total":"'.$total.'","data":'.json_encode($arr).'}';

mysql_close($new_connection);