<?php
header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// header('Content-Type: *');
// header('Content-Type: multipart/form-data');


if($_SERVER['REQUEST_METHOD'] === 'GET'){
    
    $data = array();
    
    // Send email
    $to = "info@vanzylmedia.com";
    $subject = "Website Enquiry";
    $headers = "From: noreply@vanzylmedia.com";
    
    $body = "NAME: " . $_GET['name'] . "\n\n";
    $body .= "EMAIL: " . $_GET['email'] . "\n\n";
    $body .= "PHONE: " . $_GET['phone'] . "\n\n";
    $body .= "MESSAGE: " . $_GET['message'] . "\n\n";
    
    $data['success'] = false;
    $data['message'] = '';

    if(!mail($to,$subject,$body,$headers)){
        $data['success'] = false;
        $data['message'] = 'Sending message failed.  Please try again later.';
    }else{
        $data['success'] = true;
        $data['message'] = 'Message sent successfully.  Thank you!';
    }
    echo json_encode($data);
    
}else{
    
}

?>