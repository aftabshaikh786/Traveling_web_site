$(document).ready(function() {
    $('a.menu-icon').click(function() {
        if ($(this).hasClass('active')) {
            $(this).parent().find('div.mobile-nav-wrapp').slideUp();
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).parent().find('div.mobile-nav-wrapp').slideDown();
        }
        $('ul.main-nav li a').click(function() {
            $('div.mobile-nav-wrapp').slideUp();
            $('a.menu-icon').removeClass('active');
        });
    });
    $('a.btn-showSrch').click(function() {
        $("div.search-bar").fadeIn();
    });
    $('div.search-bar a.btn-close').click(function() {
        $("div.search-bar").fadeOut();
    });
    $('.main-home-slider').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        autoplay: true,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
        }
    });
	

	
    $('.logo-slider').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        nav: false,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 3
            },
            750: {
                items: 6
            }
        }
    });
    $("ul.page-tabs li a").click(function(e) {
        $("ul.page-tabs li a, ul.page-tabs li").removeClass('active');
        $(this).addClass('active');
        $(this).parent('li').addClass('active');
        $("ul.tab-content li.tab-item").fadeOut(100);
        $("ul.tab-content li#" + $(this).attr('rel')).fadeIn(500);
        return false;
    });
    $('ul.accordion li a.ttl').click(function(e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent('li').find('div.data').hide(150);
        } else {
            $('ul.accordion li a.ttl').removeClass('active');
            $('ul.accordion li').find('div.data').hide(150);
            $(this).addClass('active');
            $(this).parent('li').find('div.data').show(150);
        }
        return false;
    });
    $(".btnScrollTop").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.btnScrollTop').fadeIn();
            } else {
                $('.btnScrollTop').fadeOut();
            }
        });
        $('.btnScrollTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    window.addEventListener('scroll', function(e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            header.setAttribute("class", "smaller");
        } else {
            header.removeAttribute("class");
        }
    });
});