$(document).ready(function()
{
    //Notify Me
	function resetForm(e){
		isSend = true;
		if(e.keyCode !== 13){
	  		resetFormError($('.text-danger'));
	  		$(this).off('keydown');
	  	}else{
	  		$('.notify-me').trigger('submit');
	  	}
	 }

	function resetFormError(message, interval){
	  	interval = interval || 500;
	  	$('.form-control').css('color',"#fff");
	  	message.fadeOut(interval);
		setTimeout(function(){
			message.removeClass('text-danger');
			newQuery = true;
		}, interval);
	 }

	var isSend = true;
	var newQuery = true;

	$('.subscribe-form').submit(function(e){
		var form           = $(this),
			message        = form.find('.form-message'),
			messageSuccess = 'Your email is sended',
			messageInvalid = 'Please enter a valid email address',
			messageSigned  = 'This email is already signed',
			messageErrore  = 'Error request';
		e.preventDefault();
		if(isSend === false){
			isSend = true;
			resetFormError(message);
			return;
		}
		if(newQuery){
			newQuery = false;
	    	$.ajax({
				url     : 'notify.php',
				type    : 'POST',
				data    : form.serialize(),
				success : function(data){
					form.find('.btn').prop('disabled', true);
					message.removeClass('text-danger').removeClass('text-success').fadeIn();
					switch(data) {
						case 0:
							message.html(messageSuccess).addClass('text-success').fadeIn();
							setTimeout(function(){
								message.removeClass('text-success').fadeOut(10);
								newQuery = true;
							}, 3000);
							setTimeout(function(){
								form.trigger('reset');
								message.fadeOut().delay(500).queue(function(){
									message.html('').dequeue();
									newQuery = true;
								});
							}, 2000);
							
							break;
						case 1:
							message.html(messageInvalid).addClass('text-danger').fadeIn();
							 $('.form-control').on('keydown',resetForm);
							 $('.form-control').css('color',"#fd6967");
							 isSend = false;
							break;
						case 2:
							message.html(messageSigned).addClass('text-danger').fadeIn();
							setTimeout(function(){
								form.trigger('reset');
								message.queue(function(){
									message.html('').dequeue();
								});
								newQuery = true;
							}, 2000);
							break;
						default:
							message.html(messageErrore).addClass('text-danger').fadeIn();
					}
					form.find('.btn').prop('disabled', false);
				}
			});
		}
	}); 
}
 )