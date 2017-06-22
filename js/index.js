document.addEventListener('DOMContentLoaded', function() {
	var navbar = document.getElementById('navbar');
	var oBtn = document.querySelector('.btn');
	oBtn.addEventListener('click', function() {
		$("#navbar").animate({
			height: 'toggle'
		}, 500);
	}, false);
	window.onresize = function() {
		if(document.documentElement.clientWidth > 767) {
			navbar.style.display = "block";
		} else {
			navbar.style.display = "none";
		}
	}
}, false);