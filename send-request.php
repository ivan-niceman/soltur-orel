<?php
// header('Content-Type: text/html; charset=utf-8');

$recepient = "sol-tur@yandex.ru";
$subject = "Заявка с сайта";
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: Заявка с сайта <nice-dev.ru>\r\n";


$name = trim($_POST['name']);
$phone = trim($_POST['tel']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);


$text = "Имя: $name <br/> Телефон: $phone <br/> E-mail: $email <br/> Сообщение: $message";

mail($recepient, $subject, $text, $headers);
