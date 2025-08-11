<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $mobile  = htmlspecialchars($_POST['mobile']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Your email where you want to receive the form submissions:
    $to = "taufiq.shaikh403@gmail.com"; // Replace with your email

    $subject = "New Inquiry from PaperDesk";

    $body = "You have received a new message:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
} else {
    echo 'error';
}
?>
