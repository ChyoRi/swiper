$(document).ready(function(){

    /* 메인 스와이퍼*/

    const swiperMain = new Swiper(".main_slide_frame", {
        pagination : {
            el: '.main_slide_nav',
            type: 'bullets'
        },
        slidesPerView: 'auto',
    });

    /* 탭 메뉴 버튼 스와이퍼 */

    const swiperTabBtn = new Swiper(".tab_btn_frame", {
        slidesPerView: 4.8,
        spaceBetween: 20,
        freeMode : true
    });

    /* 탭 메뉴 내용 슬라이드 스와이퍼 */

    const swiperTabCont = new Swiper(".tab_cont_slide_frame", {
        scrollbar: {
            el: ".tab_cont_slide_scrollbar",
            hide: false,
            dragSize: 100,
        },
        slidesPerView: 'auto',
        freeMode : true,
        breakpoints: {

            280: {
                scrollbar: {
                    dragSize: 50                
                }
            },
          
            320: {
                scrollbar: {
                    dragSize: 55
                }
            },

            360: {
                scrollbar: {
                    dragSize: 60
                }
            },

            480: {
                scrollbar: {
                    dragSize: 70
                }
            },

            540: {
                scrollbar: {
                    dragSize: 80
                }
            },

            640: {
                scrollbar: {
                    dragSize: 90
                }
            }

        }
    });

    /* 전역 변수 */

    const footerAccordionBtn = $('.footer_btn');
    
    /* 헤더 배경색 변경 함수 */

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

    /* 푸터 아코디언 함수 */
    
    const accordion = () => {
        const footerAccordionWrap = $('.info_accordion_wrap');

        footerAccordionBtn.toggleClass('active');
        footerAccordionWrap.stop().slideToggle();
    }

    /* 탭 메뉴 함수 */

    const tabBtn = $(".tab_btn_frame > .tab_btn_ul > div > a");
    const tabCont = $(".tab_cont_frame > ul > li");

    const tabBtnFn = (e) => {
        e.preventDefault();
        const thisEl = $(e.currentTarget);
        const i = thisEl.parent().index();

        thisEl.addClass("active").parent().siblings().children("a").removeClass("active");
        tabCont.eq(i).addClass("active").siblings().removeClass("active");
    };


    footerAccordionBtn.click(accordion);
    $(document).scroll(headerFixed);

    tabBtn.click(tabBtnFn);

});