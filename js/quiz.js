$(document).ready(function(){

 	var result = 0;

/* 	$.getScript("questions.js");
*/
	

	/* Random Numbers for Starter Category */
	var arr = []
	while(arr.length < 17){
	    var r = Math.floor(Math.random()*17) + 1;
	    if(arr.indexOf(r) === -1) arr.push(r);
	}
	console.log(arr);

	var randomObj = eval('test_starter_' + arr[0]);
	/* End */

	/* Test Info */
	var question = randomObj.question;
	var correct = randomObj.correct - 1;
	var answers = randomObj.answers;
	/* End */

	/* Show info */
	$('.answer').append('<form action="#" class="test-options"></form>');
	for (i = 0; i < answers.length; i++){
		if(i == correct){
			$('.test-options').append('<div class="item true"><span class="circle"></span><span class="option">' + answers[i] + '</span></div>');
		}else{
			$('.test-options').append('<div class="item"><span class="circle"></span><span class="option">' + answers[i] + '</span></div>');
		}
	}

	$('#question').text(question);

	/* End */

	/* Test new Variant Calling function */

	var questionsArrayIncrement = 0;
	var difficulty;
	var difficulty_text;
	function code(){
		questionsArrayIncrement++;
		$('.test-options').remove();
		if(result < '6'){
			difficulty = 'starter';
			difficulty_text = 'Beginner';
		}else if(result < '12'){
			difficulty = 'elementary1';
			difficulty_text = 'Elementary - Начало';
		}else if(result < '18'){
			difficulty = 'elementary7';
			difficulty_text = 'Elementary - Середина';
		}else if(result < '24'){
			difficulty = 'pre1';
			difficulty_text = 'Pre-Intermediate - Начало';
		}else if(result < '30'){
			difficulty = 'pre7';
			difficulty_text = 'Pre-Intermediate - Середина';
		}else if(result < '36'){
			difficulty = 'inter1';
			difficulty_text = 'Intermediate - Начало';
		}else if(result < '42'){
			difficulty = 'inter6';
			difficulty_text = 'Intermediate - Середина';
		}else if(result < '48'){
			difficulty = 'upper1';
			difficulty_text = 'Upper-Intermediate';
		}
		var randomObj = eval('test_' + difficulty + '_' + arr[questionsArrayIncrement]);

		/* Test Info */
		var question = randomObj.question;
		var correct = randomObj.correct - 1;
		var answers = randomObj.answers;
		/* End */
		var answers = randomObj.answers;
		$('.answer').append('<form action="#" class="test-options"></form>');
		for (i = 0; i < answers.length; i++){
			if(i == correct){
				$('.test-options').append('<div class="item true"><span class="circle"></span><span class="option">' + answers[i] + '</span></div>');
			}else{
				$('.test-options').append('<div class="item"><span class="circle"></span><span class="option">' + answers[i] + '</span></div>');
			}
		}
		$('#question').text(question);

		$('.item').on('click', function() {
			$('.item').removeClass('active');
			$(this).addClass('active');
			
			
		});
	}
	$('.bottom-buttons .continue').on('click', function() {
		if($('.item').hasClass('active')) {
			$('.test-block .bottom-buttons').css('opacity', '0');
			$('.test-block .confident-block').addClass('active');
		}else{
			alert('Выберите один из вариантов');
		}
	});

	/* End function */
	
	
	$('.item').on('click', function() {
		$('.item').removeClass('active');
		$(this).addClass('active');
	});


	var questionCount = 1;

	var width = 6.25;
	var correctanswers = 0;
	$('.confident-block .buttons a').click(function(){
		questionCount++;
		$('.continue').removeClass('active');
		var active_check = $(this).parents('.test-content').find('.active');
		if(active_check.hasClass('true')){
			correctanswers++;
			if($(this).hasClass('first')){
				result = result + 1.5;
			}else if($(this).hasClass('second')){
				result = result + 2;

			}else if($(this).hasClass('third')){
				result = result + 3;
			}

		}else{
			if($(this).hasClass('first')){
				result = result - 1.5;
			}else if($(this).hasClass('second')){
				result = result - 2;

			}else if($(this).hasClass('third')){
				result = result - 3;
			}
		}
		console.log(result);
		$('.test-block .bottom-buttons').css('opacity', '1');
		$('.test-block .confident-block').removeClass('active');
		code();

		width = width + 6.25;
		$('.fill').css('width', width + "%");
		$('.circle-number').text(questionCount);
		if(questionCount < 10){
			$('.text .count').text('0' + questionCount);
		}else{
			$('.text .count').text(questionCount);
		}
		if(questionCount > 16){
			$('.main-test-content').hide();
			$('.propeller').css('display', 'block');
			$('.test-block .head .text span.count').text('16');

			$('input[name=test]').val(difficulty_text);
			$('.level').text(difficulty_text);
		}

		if(difficulty == 'starter'){
			$('.foundLevel-block .item').addClass('no-completed');
			$('.beginner').removeClass('no-completed');
		}else if(difficulty == 'elementary1' || difficulty == 'elementary1'){
			$('.foundLevel-block .item').addClass('no-completed');
			$('.beginner').removeClass('no-completed');
			$('.elementary').removeClass('no-completed');
		}else if(difficulty == 'pre1' || difficulty == 'pre7'){
			$('.foundLevel-block .item').addClass('no-completed');
			$('.beginner').removeClass('no-completed');			
			$('.elementary').removeClass('no-completed');			
			$('.pre-intermediate').removeClass('no-completed');			
		}else if(difficulty == 'inter1' || difficulty == 'inter7'){
			$('.foundLevel-block .item').addClass('no-completed');
			$('.beginner').removeClass('no-completed');			
			$('.elementary').removeClass('no-completed');			
			$('.pre-intermediate').removeClass('no-completed');
			$('.intermediate').removeClass('no-completed');
		}else if(difficulty == 'upper'){
			$('.foundLevel-block .item').addClass('no-completed');
			$('.upper').removeClass('no-completed');		
			$('.beginner').removeClass('no-completed');			
			$('.elementary').removeClass('no-completed');			
			$('.pre-intermediate').removeClass('no-completed');
			$('.intermediate').removeClass('no-completed');	
		}


	});
	$("form").submit(function (event) {
        event.preventDefault();
        var data = {
            prefer: $(this).find("input[name=prefer]:checked").val(),
            name: $(this).find("input[name=name]").val(),
            company: $(this).find("input[name=company]").val(),
            phone: $(this).find("input[name=phone]").val(),
            test: $(this).find("input[name=test]").val()
        };

        $.ajax({
            type: "POST",
            url: 'https://medion.merit.uz/send.php',
            data: data,
            success: function (data) {
                alert('Ваша заявка успешно принята!');
            }
        });
        $('.main-test-block').fadeOut(200);
        $('.succes-restored').fadeIn(200);
        var correctanswersPersentage = correctanswers * 6.25 + "%";
        $('.totalcorrect span').text(correctanswersPersentage);
    });
});