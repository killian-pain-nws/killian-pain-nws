/**
 * Scroll Indicator Progress Bar
 */
const handleScrollIndicator = () => {
	const scrollIndicator = document.querySelector("#scroll-indicator");
	const maxHeight = document.body.scrollHeight - window.innerHeight;

	const widthPercentage = (window.scrollY / maxHeight) * 100;
	scrollIndicator.style.width = `${widthPercentage}%`;
};

window.addEventListener("scroll", handleScrollIndicator);

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});