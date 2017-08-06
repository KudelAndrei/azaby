window.onload = function(){
	var menuToggle = document.getElementById('menu-toggle');
	var wrapToggleMenu = document.getElementById('cataloges-toggle');
	var menuMobile = document.getElementById('menu-mobile');

	function thisActive(){
		this.classList.toggle('active');
	}

	menuToggle.addEventListener('click', thisActive);

	menuMobile.addEventListener('click', function(){
		var mobileMenuOpen = document.getElementById('menu-mobile-toggle');
		mobileMenuOpen.classList.toggle('active');
	});

	// document.addEventListener('click', function(event){
	// 	if (event.target != menuToggle && event.target != wrapToggleMenu) {
	// 		console.log('не меню');
	// 	}
	// 	console.log(event.target, menuToggle);
	// });

}