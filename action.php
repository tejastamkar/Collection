<?php
$username = filter_input( INPUT_POST, 'email' );
$name = filter_input( INPUT_POST, 'name' );
$qu = filter_input( INPUT_POST, 'quire' );
if ( !empty( $username ) ) {
    if ( !empty( $name ) ) {
        $host = 'localhost';
        $dbusername = 'root';
        $dbpassword = '';
        $dbname = 'html';
        $conn = new mysqli ( $host, $dbusername, $dbpassword, $dbname );
        if ( mysqli_connect_error() ) {
            die( 'Connect Error ('. mysqli_connect_errno() .')'. mysqli_connect_error() );
        } else {
            $sql = "Insert into html values('$username','$name','$qu')";
            if ( $conn->query( $sql ) ) {
                echo 'New record is inserted sucessfully';
            } else {
                echo 'Error: '. $sql .' '. $conn->error;
            }
            $conn->close();
        }
    } else {
        echo 'Name should not be empty';
        die();
    }
} else {
    echo 'Username should not be empty';
    die();
}
?>