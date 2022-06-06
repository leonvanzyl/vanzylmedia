<?php
// header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $data = array();
    
    // Fetch values from the request body
    $entityBody = json_decode(file_get_contents('php://input'), true);
    

    // Send email
    $to = "info@vanzylmedia.com";
    $subject = "Website Enquiry";
    $headers = 'From: noreply@vanzylmedia.com' . "\r\n" .
    'Reply-To: ' . htmlspecialchars($entityBody['email']) . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    $body = "NAME: " . htmlspecialchars($entityBody['name']) . "\n\n";
    $body .= "EMAIL: " . htmlspecialchars($entityBody['email']) . "\n\n";
    $body .= "PHONE: " . htmlspecialchars($entityBody['phone']) . "\n\n";
    $body .= "MESSAGE: " . htmlspecialchars($entityBody['message']) . "\n\n";
    
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