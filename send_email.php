<?php

if (isset($_REQUEST['email_address'])) {
#email sent to
$to = "daniellee2023@berkeley.edu";

#user input
$email_address = $_POST['email_address'];
$subject = $_REQUEST['subject'];
$message = $_POST['content'];

#Filter user input
function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email_address  = filter_email_header($email_address);

//Send email
mail($to, $subject, $message, "From:" . $email_address);

echo "Thank you for contacting us!"; 
}

//if "email" variable is not filled out, display the form
else {?>
<html>
    <head>
        <title>Something went wrong</title>
    </head>
    <body>
        <h1>Something went wrong</h1>
        <p>We could not send your feedback. Please try again.</p>
    </body>
</html>
<?php
}
?>