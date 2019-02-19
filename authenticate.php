<?php  
include ('mysql.php');
  function getPasswordForUser($username) {
	
	$query = 		"SELECT `password`
					FROM `users`
					WHERE `login`='{$username}'
					LIMIT 1";
		
		$sql = mysql_query($query) or die(mysql_error());
		if (mysql_num_rows($sql) == 1)
		{
			$row = mysql_fetch_assoc($sql);
			$password = $row['password'];
		}
		
    //$config_file = file_get_contents("config.json");
    //$config_array = json_decode($config_file, true);
    return $password;
  }
  
    function getRoleForUser($username) {
	$query = 		"SELECT `role`
					FROM `users`
					WHERE `login`='{$username}'
					LIMIT 1";
		
		$sql = mysql_query($query) or die(mysql_error());
		if (mysql_num_rows($sql) == 1)
		{
			$row = mysql_fetch_assoc($sql);
			$role = $row['role'];
		}
    return $role;
  }
  
  function getAccess() {
	$query = 		"SELECT `Prymitka`
					FROM `users`
					WHERE `login`='borsuk'
					LIMIT 1";
		
		$sql = mysql_query($query) or die(mysql_error());
		if (mysql_num_rows($sql) == 1)
		{
			$row = mysql_fetch_assoc($sql);
			$access = $row['Prymitka'];
		}
    return $access;
  }
  
  echo ($config_array["config"][0]["password"]);
  
  function validate($challenge, $response, $password) {
    return md5($challenge . $password) == $response;
  }
  function authenticate() {
    if (isset($_SESSION[challenge]) && isset($_REQUEST[username]) && isset($_REQUEST[response])) {
      
	  $password = getPasswordForUser($_REQUEST[username]);
	  $role = getRoleForUser($_REQUEST[username]);
	  $access = getAccess();
	  
      if (validate($_SESSION[challenge], $_REQUEST[response], $password, $access)) {
        $_SESSION[authenticated] = "yes";
        $_SESSION[username] = $_REQUEST[username];;
		$_SESSION[role] = $role;;
        unset($_SESSION[challenge]);
      } else {
        echo '{"success":false,"message":"Ви ввели невірний Логін або Пароль"}';
        exit;
      }
    } else {
      echo '{"success":false,"message":"Session expired1"}';
      exit;
    }
  }
  session_start();
  authenticate();
  echo '{"success":true}'.$config_array["config"][0]["password"];
  exit();
?>