//locate all the navigation links
/*var quickLinks = document.querySelectorAll('.menu-list a');

for (var i = 0; i < quickLinks.length; i++) {
	quickLinks[i].addEventListener('click', function(event) {
		//check if a link is currently selected, remove is-active class if yes
		isActive = document.getElementsByClassName('is-active')[0];

		if (isActive != undefined) {
			isActive.classList.remove('is-active');
		}

		//then add is-active class to the most recent selected link
		this.classList.add('is-active');
	});
}*/
$('.nav .nav-link').on('click', function() {
	$('.nav').find('.active').removeClass('active');
	$(this).addClass('active');
});
