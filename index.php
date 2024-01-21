<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css?v=2">
	<title>Онлайн-тест на проверку уровня английского языка в Ташкенте || Курсы в Ташкенте</title>
	<meta name="description" content="Курсы английского языка в Ташкенте. Узнайте свой уровень английского языка прямо сейчас. Учебный центр в Ташкенте Merit Education">
</head>
<body>
	<div class="start">
		<div class="container">
			<div class="text-block">
				<div class="logo-row">
					<?php 
						if($_GET['company'] == 'tdpark') {
							echo '<img src="img/td-park-logo.png" class="logo-row__item"/>';
						}else {
							echo '<img src="img/medion-logo.png" class="logo-row__item"/>';
						}
					?>
				</div>
				<h1>Тест на уровень английского языка</h1>
				<p>
					Узнайте свой уровень английского языка пройдя наш тест С <span>16</span> вопросами. Чем больше вы будете отвечать правильно, тем сложнее будут выходить вопросы.
				</p>
				<a href="#" class="start_btn">Начать тест!</a>
			</div>
		</div>
	</div>
	<section class="test">
		<div class="container">
			<div class="row" >
				<div class="logo-row ">
					<?php 
						if($_GET['company'] == 'tdpark') {
							echo '<img src="img/td-park-logo.png" class="logo-row__item"/>';
						}else {
							echo '<img src="img/medion-logo.png" class="logo-row__item"/>';
						}
					?>
				</div>

				<div class="slider" >

					<div class="test-block main-test-block">
						<div class="head">
							<div class="logo-row mobile-logo">
								<?php 
									if($_GET['company'] == 'tdpark') {
										echo '<img src="img/td-park-logo.png" class="logo-row__item"/>';
									}else {
										echo '<img src="img/medion-logo.png" class="logo-row__item"/>';
									}
								?>
							</div>
							<h2>
								<img src="img/title-icon.png" alt="">
								Тест на проверку уровня английского языка
							</h2>
							<div class="pageLoad-block">
								<div class="loadLine">
									<span class="fill"></span>
								</div>
								<div class="text">
									<span class="count">01</span>
									<span>/ 16</span>
								</div>
							</div>
						</div>
						<div class="test-content main-test-content">
							<div class="answer">
								<div class="question-block">
									<span class="circle-number">1</span>
									<h3 id="question">The baby boy saw ... in the mirror and started to cry.</h3>
								</div>
							</div>
							<div class="bottom-buttons">
								<a href="#" class="continue">	
									Продолжить
									<img src="img/blueRight-arrow.png" alt="">
								</a>
							</div>
							<div class="confident-block">
								<span>Насколько вы уверены?</span>
								<div class="buttons">
									<a href="#" class="first">Выбрал(а) наугад</a>
									<a href="#" class="second">Частично уверен</a>
									<a href="#" class="third">Полностью уверен</a>
								</div>
							</div>
						</div>
						<div class="test-content propeller">
							<div class="top-title">
								<img src="img/check.png" alt="">
								Тест успешно пройден!
							</div>
							<form action="#" class="propeller-form" autocomplete="off">
								<input type="text" id="name" name="name" placeholder="Ваше имя*" required="">
								<input type="tel" id="phone" name="phone" value="+998" placeholder="Ваш номер телефона">
								<div style="display: flex;align-items: center;justify-content: center;width: 100%;margin-bottom: 20px;">
									<input type="checkbox" name="prefer" style="width: 16px;height: 16px;margin: 0;padding: 0;margin-right: 10px;" value="Да">
									<p>Хочу учить английский язык!</p>
								</div>
								<input type="hidden" name="test">
								<input type="hidden" value="<?php echo $_GET['company'] ?? 'medion'; ?>" name="company">
								<button type="submit">
									Узнать результат
									<img src="img/whiteRight-arrow.png" alt="">
								</button>
							</form>
						</div>
						
					</div>
					<div class="test-block succes-restored">
						<h2>Ваш примерный уровень:</h2>
						<h1 class="level">INTERMEDIATE</h1>
						<div class="check-icon" style="display: none;">
							<img src="img/check.png" alt="">
						</div>
						<h3 class="totalcorrect">Вы решили тест на <span></span> правильно</h3>
						<div class="foundLevel-block">
							<div class="item beginner">
								<div class="circle">
									<img src="img/level-check.png" alt="">
								</div>
								<h3>Beginner</h3>
							</div>
							<div class="item elementary">
								<div class="circle">
									<img src="img/level-check.png" alt="">
								</div>
								<h3>Elementary</h3>
							</div>
							<div class="item pre-intermediate">
								<div class="circle">
									<img src="img/level-check.png" alt="">
								</div>
								<h3>pre-intermediate</h3>
							</div>
							<div class="item intermediate">
								<div class="circle">
									<img src="img/level-check.png" alt="">
								</div>
								<h3>intermediate</h3>
							</div>
							<div class="item upper">
								<div class="circle">
									<img src="img/level-check.png" alt="">
								</div>
								<h3>Upper-intermediate</h3>
							</div>
						</div>
						<div class="succes-restored-buttons">
							<a href="https://medionacademy.uz/english-test">
								Пройти тест еще раз
								<img src="img/return.png" alt="">
							</a>
							<a href="https://medionacademy.uz/">Записаться на пробный урок!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	
	<script src="js/libs.min.js"></script>
	<script src="js/questions.js?v=2"></script>
	<script src="js/quiz.js?v=2"></script>
  	<script src="js/events.js?v=2"></script>
  	<script type="text/javascript">
  		
  	</script>
</body>
</html>