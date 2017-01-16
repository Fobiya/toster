
/*=== Send message bottom contact form ====*/
function sendmailone() {
	var fields = $('#one-form').serialize();
	$.ajax({
		type: 'POST',
		url: 'sendmail.php',
		data: fields,
		success: function(data) {
			$('.send-result-one-form').html(data);
		}
	});
}

/*=== Send message bottom contact form ====*/
function sendmailtwo() {
	var fields = $('#two-form').serialize();
	$.ajax({
		type: 'POST',
		url: 'sendmail2.php',
		data: fields,
		success: function(data) {
			$('.send-result-two-form').html(data);
		}
	});
}

/*=== Send message bottom contact form ====*/
function sendmailthree() {
	var fields = $('#three-form').serialize();
	$.ajax({
		type: 'POST',
		url: 'sendmail.php',
		data: fields,
		success: function(data) {
			$('.send-result-three-form').html(data);
		}
	});
}
/*=== Send message bottom contact form ====*/
function sendmailzakaz() {
	var fields = $('#zakaz-form').serialize();
	$.ajax({
		type: 'POST',
		url: 'sendmail.php',
		data: fields,
		success: function(data) {
			$('.send-result-zakaz-form').html(data);
		}
	});
}

/*=== Send message bottom contact form ====*/
function sendmailzvonok() {
	var fields = $('#zvonok-form').serialize();
	$.ajax({
		type: 'POST',
		url: '/sendmail.php',
		data: fields,
		success: function(data) {
			$('.send-result-zvonok-form').html(data);
		}
	});
}
