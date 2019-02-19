<?php
include "../php/SQL.php";

$start  = isset($_REQUEST['start'])  ? $_REQUEST['start']  :  0;
$count  = isset($_REQUEST['limit'])  ? $_REQUEST['limit']  : 20;
$sort   = isset($_REQUEST['sort'])   ? $_REQUEST['sort']   : 'reader_id';
$dir    = isset($_REQUEST['dir'])    ? $_REQUEST['dir']    : 'DESC';
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

$query = "SELECT *  FROM readers where ".$where;
if ($sort != "") {
    $query .= " ORDER BY ".$sort." ".$dir;
}
$query .= " LIMIT ".$start.",".$count;

$rs = mysql_query($query);
$total = mysql_query("SELECT COUNT(reader_id) FROM readers where ".$where);
$total = mysql_result($total, 0, 0);

$arr = array();
while($obj = mysql_fetch_object($rs)) {
    $arr[] = $obj;
}

// return response to client
echo '{"total":"'.$total.'","data":'.json_encode($arr).'}';
mysql_close($new_connection);