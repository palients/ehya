<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$subscribe = $_POST['subscribe'];
$form = $_POST['form'];
$thankyou = $_POST['thankyou'];


// Формирование самого письма
if($form == 'thankyou'){
    // если есть что-то в $_POST['email']
   $title = "Новое обращение EHYA";
   $body = "
   <h2>Новое обращение</h2>
   <b>Имя:</b> $name<br>
   <b>Телефон:</b> $phone<br>
   <b>Почта:</b> $email
   ";
} elseif ($form == 'subscription') {
    // если нет, отправлена форма с телефоном и пр.
    $title = "Новая подписка EHYA";
    $body ="
    <h2>Новый подписчик</h2>
    <b>Почта:</b> $subscribe<br><br>
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2; 
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'c.morozov@coffeestudio.ru'; // Логин на почте
    $mail->Password   = '2021Constantin2021'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('c.morozov@coffeestudio.ru', 'Constantin Morozov'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('palients@yandex.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if ($form == 'thankyou') {
    header('Location: appeal.html');
}elseif ($form == 'subscription') {
    header('Location: thankyou.html');
}