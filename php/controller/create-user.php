<?php
    require_once(__DIR__ . "/../model/config.php");
    
    
    $username = filter_input(INPUT_POST, "username", FILLTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, "password", FILLTER_SANITIZE_EMAIL);
    
    echo $password;
    
        $salt = "$5$" . "rounds=5000$" . uniqid(mt_rand(), true)  . "$";
        
        $hashedPassword = crypt($password, $salt);
        
        $query = $_SESSION["connection"]->query("INSERT INTO USERS SET"
               . "username = '$username',"
               . "password = '$hashedPassword',"
               . "salt = '$salt', "
               . "exp = 0"
               . "exp1 = 0"
               . "exp2 = 0"
               . "exp3 = 0"
               . "exp4 = 0");
        $_SESSION["name"] = $username;
        
        
        if($query) {
            //Nedd this for Ajax on index.php
            echo "true";
        }
        else {
            echo "<p>" . $_SESSION["connection"]->error . "</p>";
        }
    