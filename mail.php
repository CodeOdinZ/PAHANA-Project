<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . '/mail/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/mail/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/mail/SMTP.php';

 
        $fname = $_POST['fname'];
        $lname = $_POST['secname'];
        $adl1 = $_POST['adresline1'];
        $adl2 = $_POST['adresline2'];
        $adl3 = $_POST['adresline3'];
        $cont = $_POST['contact'];
        $mail = $_POST['email'];
        $order = $_POST['orders'];
        $total = $_POST['tmsrp'];
        $header = "From:".$fname."<".$mail.">\r\n";

    

        $msg = "Name: ".$fname." ".$lname."<br>Address: "."<br> ".$adl1.","."<br> ".$adl2.","."<br> ".$adl3."."."<br>Contact No: ".$cont."<br>Email: ".$mail."<br>Order:>".$order."<br> ".$total;

        


$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = "smtp.gmail.com"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
$mail->Port = 587; // TLS only
$mail->SMTPSecure = 'StartTLS'; // ssl is deprecated
$mail->SMTPAuth = true;
$mail->Username = 'pinokioz2002@gmail.com'; // email
$mail->Password = 'cmjbclaiwzbvlwai'; // password
$mail->setFrom('pinokiz2002@gmail.com', 'PAHANA Site'); // From email and name
$mail->addAddress('ssendinu@gmail.com', 'Mr.Nomin'); // to email and name
$mail->Subject = 'ORDER PLACED!!, Customer INFO';
$mail->msgHTML(""); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
$mail->AltBody = 'HTML messaging not supported'; // If html emails is not supported by the receiver, show this body
$mail->Body = $msg;
// $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file
$mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
if(!$mail->send()){
    echo "Mailer Error: " . $mail->ErrorInfo;
}else{
    echo "Message sent!";
}
    







