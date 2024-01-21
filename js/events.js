$(document).ready(function(){
	
	$('.start_btn').click(function(){
		$('.start').fadeOut(300);
		$('.test').css('display', 'flex');
	});
	$(document).on('click', function(event) {
        if (!$(event.target).closest(".confident-block, .test-block .bottom-buttons a.continue").length) {
	        if($('.confident-block').hasClass('active')) {
	          $(".confident-block").removeClass('active');
	          $('.bottom-buttons').css('opacity', '1');
	        }
	         
	      }
	  });
	
});


