<?php
/*before checking something else it checks require_once first */

require_once(__DIR__ . "/../model/database.php");
session_start();
/*this id stays constant through entire session*/
session_regenerate_id(true);

$path = "/Nareg.A-blog";

$host = "localhost";
$username = "root";
$password = "root";
$database = "awesomenauts_db";

if(!isset($_SESSION["connection"])) {
    $connection = new Database($host, $username, $password, $database);
    $_SESSION["connection"] = $connection;
}

