<?php
session_start();
function is_authenticated() {
return isset($_SESSION[authenticated]) && $_SESSION[authenticated] == "yes" && $_SESSION[role] == "admin";
}

function require_authentication() {
if (!is_authenticated()) {
header("Location:/index.php");
exit;
}
}
?>