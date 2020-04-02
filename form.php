<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Landing for XML Coporation">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/d032d92b90.js" crossorigin="anonymous"></script>
    <meta name="keywords" content="XML, xml licence, exam">
    <link rel="stylesheet" href="FrankensteinsStyle.css">
    <title> Frankenstein’s Monster Style/contact </title>
  </head>
  <body class="form_alert">

<?php
// check if all the field is equal to something other than null if not do else;
if(!isset($_POST['first_name']) ||
     !isset($_POST['last_name']) ||
     !isset($_POST['email']) ||
     !isset($_POST['comment'])) {
     died('Please go back to the form to make sure every field is correct! this is it');
 }else{
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email =   $_POST['email'];
    $comment =  $_POST['comment'];
    $email_message = "The following information is for $first_name $last_name.\n\n";

    // EDIT THE 2 LINES BELOW AS REQUIRED
   $email_to = "project408.jp@gmail.com";
   $email_subject = "Comming from the Frankenstein's contact form";

   if(strlen($comment) < 10) {
   $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 }

 function clean_string($string) {
     $bad = array("content-type","bcc:","to:","cc:","href");
     return str_replace($bad,"",$string);
   }

   $email_message .= "First Name: ".clean_string($first_name)."\n";
   $email_message .= "Last Name: ".clean_string($last_name)."\n";
   $email_message .= "Email: ".clean_string($email)."\n";
   $email_message .= "Comments: ".clean_string($comment)."\n";

   // create email headers
   $headers = 'From: '.$email."\r\n".
   'Reply-To: '.$email."\r\n" .
   'X-Mailer: PHP/' . phpversion();
   $success = mail($email_to, $email_subject, $email_message, $headers);

   if ($success) {
     echo "<p> Thanks for contacting our monsters we will replying to you soo!</p>";
   }else {
      $errorMessage = error_get_last()['message'];
      echo "$errorMessage";
   }

   echo "<button style='background: balck; '>";
   echo "<a href='index.html'>";
   echo " Home";
   echo "</a>";
   echo "</button>";

 }
   ?>

   <!-- https://www.freecontactform.com/email_form.php -->

</body>
 </html>
