<?php
header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// header('Content-Type: *');
// header('Content-Type: multipart/form-data');


if($_SERVER['REQUEST_METHOD'] === 'GET'){
    
    $data = array();
    
    // Send email
    $to = "leonvanzyl@gmail.com";
    $subject = "Website Enquiry";
    $headers = "From: noreply@vanzylmedia.com";
    
    $body = "Some message";
    
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