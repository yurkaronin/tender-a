<?php
$sendto = 'info@tender-a.com';/**/
$username = $_POST['yourname'];
$phn = $_POST['phn'];
$subject .= "ТЕНДЕР-А | Консалтинговое агентство";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
$msg .= "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка на консультацию тендерного эксперта с сайта ТЕНДЕР-А</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Номер телефона:</strong> ".$phn."</p>\r\n";
$msg .= "</body></html>";
if(@mail($sendto, $subject, $msg, $headers)) {
header("Location: thank-you.php");
} else {
echo "false";
}
?>