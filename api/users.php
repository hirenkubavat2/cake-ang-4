<?php
/**
 * Created by PhpStorm.
 * User: webwerks
 * Date: 26/5/17
 * Time: 3:20 PM
 */


if(isset($_POST['id']) && isset($_POST['Name'] && $_POST['Email'])){
    mysql_connect('localhost','root','root');
    mysql_select_db('angular_test');
    $name=mysql_real_escape_string($_POST['name']);
    $email=mysql_real_escape_string($_POST['email']);
    mysql_query("INSERT INTO `employee` (`id`, `name`, `email`) VALUES (NULL, '$name', '$email'')");
    http_response_code(200);
    header('HTTP/1.1 200 OK');
    echo json_encode(['status'=>'1','message'=>'Data added successfully!','data'=>'']);
}else{
    http_response_code(500);
    header('HTTP/1.1 500');
    echo json_encode(['status'=>'1','message'=>'Something went wrong','data'=>'']);
}