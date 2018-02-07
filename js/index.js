var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/bashta1510@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Відправка повідомлення…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Повідомлення відправлено!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Виникла помлика!.</div>');
		}
	});
});