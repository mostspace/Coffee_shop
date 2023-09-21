/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".sticky-wrapper-header").sticky({topSpacing:0});
	});
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".brand-box").niceScroll({
		cursorcolor:"#9b9b9c",
	});	
	
	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function() {
		$('select').niceSelect();
	});	
		
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	//  --------------------------------- Main Slider -----------------------------

	$('.slick')
		.on('init', () => {
			$('.slick-slide[data-slick-index="-2"]').addClass('lt2');
			$('.slick-slide[data-slick-index="-1"]').addClass('lt1');
			$('.slick-slide[data-slick-index="1"]').addClass('gt1');
			$('.slick-slide[data-slick-index="2"]').addClass('gt2');
		})
		.slick({
		centerMode: true,
		centerPadding: 0,
		slidesToShow: 3
		}).on('beforeChange', (event, slick, current, next) => {
		$('.slick-slide.gt2').removeClass('gt2');
		$('.slick-slide.gt1').removeClass('gt1');
		$('.slick-slide.lt1').removeClass('lt1');
		$('.slick-slide.lt2').removeClass('lt2');

		const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
		const lt1 = (current < next && current > 0) ? current : next - 1;
		const gt1 = (current < next || next === 0) ? next + 1 : current;
		const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

		$(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
		$(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
		$(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
		$(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

		// Clone processing when moving from 5 to 0
		if (current === 5 && next === 0) {
			$(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
			$(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
			$(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
			$(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
		}

		// Clone processing when moving from 0 to 5
		if (current === 0 && next === 5) {
			$(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
			$(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
			$(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
			$(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
		}
	});
		


});