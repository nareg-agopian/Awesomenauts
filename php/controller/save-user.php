<?php
require_once(_DIE_ ."/../model/config.php");

$exp = filter_input(INPUT_POST, "exp", FILTERSAITIZE_STRING);
$exp1 = filter_input(INPUT_POST, "exp2", FILTERSAITIZE_STRING);
$exp2 = filter_input(INPUT_POST, "exp2", FILTERSAITIZE_STRING);
$exp3 = filter_input(INPUT_POST, "exp3", FILTERSAITIZE_STRING);
$exp4 = filter_input(INPUT_POST, "exp4", FILTERSAITIZE_STRING);


$query = $_SESSION["connection"]->query("UPDATE user SET "
        . "exp1 = $exp1, "
        . "exp2 = $exp2, "
        . "exp3 = $exp3, "
        . "exp4 = $exp4 WHERE username = \"" . $_SESSION["name"]."\"");

if($query){
    echo "true";
}else{
    echo "<p>" . $_SESSION["connection"]->error . "</p>"
};
