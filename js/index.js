$(document).ready(function(){

    /* 스와이퍼 */

    var swiper = new Swiper(".main_slide_frame", {
        pagination : {
            el: '.main_slide_nav',
            type: 'bullets'
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          draggable : true
        },
        slidesPerView: 1.9,
        spaceBetween: 85
      });

    /* 전역 변수 */

    const footerAccordionBtn = $('.footer_btn');
    
    /* 헤더 배경색 변경 */

    const headerFixed = () => {
        const header = $('header');
        let headerHeight = $('header').outerHeight();
        let windowTop = $(document).scrollTop();

        if (headerHeight <= windowTop) {
            header.css({'background-color' : '#eb605f'});
        } else {
            header.css({'background-color' : 'transparent'});
        }
    }

    /* 푸터 아코디언 */
    
    const accordion = () => {
        const footerAccordionWrap = $('.info_accordion_wrap');

        footerAccordionBtn.toggleClass('active');
        footerAccordionWrap.stop().slideToggle();
    }

    footerAccordionBtn.click(accordion);
    $(document).scroll(headerFixed);

});