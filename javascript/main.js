$(function () {
  const changeMenuShadowing = () => {
    const menuClassList = document
      .querySelector('.menu')
      .classList
    
    if (window.scrollY > 0) {
      menuClassList.add('shadowed')
    } else {
      menuClassList.remove('shadowed')
    }
  }

  changeMenuShadowing()
  window.addEventListener('scroll', changeMenuShadowing)

	$('.menu-list a, .logo').on('click', function (event) {
		event.preventDefault()

		const id  = $(this).attr('href')
    const top = id === '#'
      ? 0
      : $(id).offset().top
    const menuHeight = $('.menu').height()
		
		$('body,html').animate({scrollTop: top - menuHeight}, 1500);
	})

  $('.menu-button, .menu-list a').on('click', function () {
    $('.header nav').toggleClass('active')
  })

  $('.blog-items').slick({
    arrows: false,
    dots: true,
  })

  mixitup(
    document.querySelector('.gallery-items')
  )
})