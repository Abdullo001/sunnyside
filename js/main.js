var elButton = document.querySelector('.header__burgerbtn');
var elMenu = document.querySelector('.header__navbar');

elButton.addEventListener('click', function () {
	elMenu.classList.toggle('header__navbar--open');
});
