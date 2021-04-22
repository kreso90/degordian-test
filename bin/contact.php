<?php


	
	

	if (!empty($_POST['email']) && !empty($_POST['message']) && !empty($_POST['check'])) {
	
		require '../phpmailer/PHPMailerAutoload.php';

		$emailFrom = 'selendic.kresimir@gmail.com';
		$emailFromName = 'SGS';

		$emailTo = 'selendic.kresimir@gmail.com';
		$emailToName = 'SGS';
		
		$email = $_POST['email'];
		$message = $_POST['message'];
		$check = $_POST['check'];
		
		$emailTitle = "SGS";
	
		$emailContent ="<div style='border:1px solid #f5f5f5; padding:2rem'>
		<p><strong>E-MAIL:</strong> $email</p>
		<p><strong>PITANJE:</strong> $message</p>
		<p><strong>OBAVIJESTI:</strong> $check</p>
		</div>";
	
		
		try {
			$mail = new PHPMailer;
			$mail->CharSet = 'UTF-8';          

			$mail->setFrom($emailFrom, $emailFromName);
			$mail->addAddress($emailTo, $emailToName);
			$mail->addReplyTo($emailFrom);
			$mail->isHTML(true);
			$mail->Subject = $emailTitle;
			$mail->msgHTML($emailContent);
			$mail->send();

			echo json_encode(array('message' => 'Thank you! Your message has been sent successfully.', 'state' => 'ok'));
		} catch (Exception $e) {
			echo json_encode(array('message' => 'The message can\'t be sent right now. Please try again later.', 'state' => 'error'));
		}
	} else {
		echo json_encode(array('message' => 'Eh...', 'state' => 'error'));
	}
		
?>