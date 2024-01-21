<?php 
    
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$test = $_POST['test'];
	$textarea = $_POST['message'];
	$prefer = $_POST['prefer'];
	$coursename = $_POST['course'];
	$company = $_POST['company'];
	if($prefer == ''){
		$prefer  = 'Нет';
	}

	if($test){
		$message = "Пройденный тест, Имя: " . $name . ", Номер телефона: " . $phone . ", Результат: " . $test . ", Хочет улучшить свой английский: " . $prefer;

	}else if($textarea){
		$message = "Оставить сообщение: " . $name . ", Номер телефона: " . $phone . ", Сообщение: " . $textarea;
	}else{
		$message = "Запись на пробное занятие, Имя: " . $name . ", Номер телефона: " . $phone . ", Название курса: " . $coursename;
	}
	echo $company;
	if ($company == "tdpark") {
		$chatId = '-810760805';
	}else {
		$chatId = '-773060928';
	}
    fopen("https://api.telegram.org/bot5867219710:AAEVL-57xYEkaW8UtpwcI4AsXRFEydopcJs/sendMessage?chat_id={$chatId}&text={$message}", false);
    echo $message;
?>