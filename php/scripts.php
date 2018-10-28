<?php

$return = array(
		'status' => '',
		'message' => ''
	);

$errors = array();


if (!empty($_POST)){
	$name = $_POST['name'];
	$contact = $_POST['contact'];
	$message = $_POST['message'];
	$address = $_POST['address'];
	// check that a name was entered 
	if (empty($name)){
	    $errors[] = 'Please enter your name.';
	// check that contact details were entered
	};
	if (empty($contact)){
	    $errors[] = 'Please enter your contact details.'; 
	// check for a message
	}; 
	if (empty($message)){ 
	    $errors[] = 'Please enter a message.'; 
	};
	// Honeypot
	if (!empty($address)){ 
	    // Te cache
	    $errors[] = 'Invalid Address'; 
	};
	
	// check if an error was found - if there was, place error messages in $errors array
	if (!empty($errors)) { 
	    $return['status'] = 'error';
	    $return['message'] = $errors;  
	}else{
		// get the posted data 
		$to = 'angel@angelhernandez.net';
		$subject = 'Portfolio Contact Form Submission';
		$body = 'Name: ' . $_POST['name'] . "\n" . 'Contact-Info: ' . $_POST['contact'] . "\n" . 'Message: ' . $_POST['message'];

		$send_success = mail($to, $subject, $body);

		$return['status'] = 'success';
	}

	echo json_encode($return);
 
};

?>
