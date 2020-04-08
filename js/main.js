$(document).ready(function(){
    /*오른쪽 고정스크롤 버튼*/
        // $('.btn_down1').click(function(){
        //     $('body,html').animate({'scrollTop':1});
        // });
        // $('.btn_down2').click(function(){
        //     $('body,html').animate({'scrollTop':1000});
        // });
        // $('.btn_down3').click(function(){
        //     $('body,html').animate({'scrollTop':2170});
        // });
        // $('.btn_down4').click(function(){
        //     $('body,html').animate({'scrollTop':3170});
        // });
        // $('.btn_down5').click(function(){
        //     $('body,html').animate({'scrollTop':4170});
        // });
        // $('.btn_down6').click(function(){
        //     $('body,html').animate({'scrollTop':5200});
        // });


    //스크롤시 섹션위치를 판단하여 btn_page li의 on클래스를 처리해 주는 명령
    // $(window).scroll(function(){
    //     var ypos=$(document).scrollTop()
    //     console.log(ypos);
    //     if(ypos>=0 && ypos<=999){
    //         $('.btn_page li').removeClass('on');
    //         $('.btn_page li').eq(0).addClass('on');
    //     }else if(ypos>=1000 && ypos<=2169){
    //         $('.btn_page li').removeClass('on');
    //         $('.btn_page li').eq(1).addClass('on');
    //         $('.skill .graph').eq(0).animate({'width':'95%'});
    //                $('.skill .graph').delay(200).eq(1).animate({'width':'90%'});
    //                $('.skill .graph').delay(300).eq(2).animate({'width':'90%'});
    //                $('.skill .graph').delay(400).eq(3).animate({'width':'80%'});

    //     }else if(ypos>=2170 && ypos<=3169){
    //         $('.btn_page li').removeClass('on');
    //         $('.btn_page li').eq(2).addClass('on');
    //     }else if(ypos>=3170 && ypos<=4169){
    //         $('.btn_page li').removeClass('on');
    //         $('.btn_page li').eq(3).addClass('on');
    //     }else if(ypos>=4170 && ypos<=5119){
    //         $('.btn_page li').removeClass('on');
    //         $('.btn_page li').eq(4).addClass('on');
    //     }else{
    //         $('.btn_page li').removeClass('on');
    //         $('.btn_page li').eq(5).addClass('on');
    //     };
    // });
   
    //헤더 버튼에 따른 스크롤 위치변화
        $('.1page').click(function(){
            $('body,html').animate({'scrollTop':1850});
        });
        $('.2page').click(function(){
            $('body,html').animate({'scrollTop':2850});
        });
        // $('.3page').click(function(){
        //     $('body,html').animate({'scrollTop':2170});
        // });
        $('.4page').click(function(){
            $('body,html').animate({'scrollTop':3865});
        });
        $('.5page').click(function(){
            $('body,html').animate({'scrollTop':4850});
        });
        // $('.6page').click(function(){
        //     $('body,html').animate({'scrollTop':5200});
        // });

        // $('.section1 button').click(function(){
        //     $('body,html').animate({'scrollTop':0});
        // });


    /*section1 섹션1 롤링*/
    $('.section1 .intro').slick({
        autoplay:true,
        autoplaySpeed:3000,
        swipe:false,
        pauseOnHover:false
    });

    /*intro*/ 
    $(function(){
        var welcomeSection = $('.welcome-section')
        var hiddenHeader = $('.header')
        enterButton = welcomeSection.find('.enter-button');

        setTimeout(function(){
          welcomeSection.removeClass('content-hidden');
          
        },800);
        enterButton.on('click',function(e){
          e.preventDefault();
          welcomeSection.fadeOut();
          hiddenHeader.addClass('hidden');
        })
      })

     //사업 영역 : PC
   $(".business_area .list li").on("mouseenter",function(e){
    $(this).addClass("active");
    $(".business_area").addClass("active");
});
$(".business_area .list li").on("mouseleave",function(e){
    $(this).removeClass("active");
    $(".business_area").removeClass("active");
});

//함께 하는 삼양
//PC
 $(".with_area .pc .box2 .btn_pause").click(function(){
     var withVideoPc = document.getElementById("videoPc");
     if (withVideoPc.paused) {
         withVideoPc.play();
     } else {
         withVideoPc.pause();
     }
 });

 $(".with_area .pc .btn_off").click(function(){
     document.getElementById("videoPc").muted = false;
     $(".with_area .pc .btn_off").hide();
     $(".with_area .pc .box2 .btn_on").show();
 });

 $(".with_area .pc .btn_on").click(function(){
     document.getElementById("videoPc").muted = true;
     $(".with_area .pc .btn_off").show();
     $(".with_area .pc .btn_on").hide();
 });

 //모바일
 $(".with_area .mo .box2 .cover").click(function(){
     var withVideoMo = document.getElementById("videoMo");
     $(this).css("opacity","0");
     $(".with_area").addClass("active");
     if (withVideoMo.paused) {
         withVideoMo.play();
     } else {
         withVideoMo.pause();
     }
 });

 $(".with_area .mo .btn_off").click(function(){
     document.getElementById("videoMo").muted = false;
     $(".with_area .mo .btn_off").hide();
     $(".with_area .mo .btn_on").show();
 });

 $(".with_area .mo .btn_on").click(function(){
     document.getElementById("videoMo").muted = true;
     $(".with_area .mo .btn_off").show();
     $(".with_area .mo .btn_on").hide();
 }); 
    /*******************************section2*******************************************************/
   $(window).scroll(function(){
            var y=$(document).scrollTop();
            //console.log(y);
            if(y>=1000 && y<=2170){
                   $('.skill .graph').eq(0).animate({'width':'95%'});
                   $('.skill .graph').delay(200).eq(1).animate({'width':'90%'});
                   $('.skill .graph').delay(300).eq(2).animate({'width':'90%'});
                   $('.skill .graph').delay(400).eq(3).animate({'width':'80%'});

            };
        });

    /*******************************section3*******************************************************/
    /*section3_탭메뉴*/
    $('.section3 .menu li').click(function(e){
        e.preventDefault();
        $('.section3 .menu li').removeClass('on');
        $(this).addClass('on');
        var  num=$(this).index();
        $('.section3 .menu li span').removeClass('arrow')
        $('.section3 .menu li span').eq(num).addClass('arrow')
        $('.section3 .work').hide();
        $('.section3 .work').eq(num).fadeIn();
    });

    $('.section4 .menu li').click(function(e){
        e.preventDefault();
        $('.section4 .menu li').removeClass('on');
        $(this).addClass('on');
        var  num=$(this).index();
        $('.section4 .menu li span').removeClass('arrow')
        $('.section4 .menu li span').eq(num).addClass('arrow')
        $('.section4 .work').hide();
        $('.section4 .work').eq(num).fadeIn();
    });

    // 갤러리
    $('a.group1').colorbox({rel:'.group1'});
    $('a.group2').colorbox({rel:'.group2'})

    //갤러리 이미지
    $('.gallery li').mouseenter(function(){
        $(this).find('.tit').fadeIn();
        $(this).find('.line_h').animate({'bottom':'20%'});
        $(this).find('.line_v').animate({'right':'15%'});
        
    });
    $('.gallery li').mouseleave(function(){
        $(this).find('.tit').fadeOut();
        $(this).find('.line_h').animate({'bottom':0});
        $(this).find('.line_v').delay(200).animate({'right':0});
    });

    

    //탭메뉴버튼에 따른 목록 변화
    var g1=$('.section3 .gallery1 li');
    var g2=$('.section3 .gallery2 li');
    var g3=$('.section3 .gallery3 li');
    var g4=$('.section3 .gallery4 li');
    // var g5=$('.section4 .gallery1 li');
    // var g6=$('.section4 .gallery2 li');
    // var g7=$('.section4 .gallery3 li');
    // var g8=$('.section4 .gallery4 li');
    g1.mouseenter(function(){
        var num=$(this).index();
            $('.section3 .gallery_large1 li').hide();
            $('.section3 .gallery_large1 li').eq(num).show();
    });
    g1.mouseleave(function(){
        $('.section3 .gallery_large1 li').hide();
    });

    g2.mouseenter(function(){
        var num=$(this).index();
            $('.section3 .gallery_large2 li').hide();
            $('.section3 .gallery_large2 li').eq(num).show();
    });
    g2.mouseleave(function(){
        $('.section3 .gallery_large2 li').hide();
    });
   
   g3.mouseenter(function(){
        var num=$(this).index();
            $('.section3 .gallery_large3 li').hide();
            $('.section3 .gallery_large3 li').eq(num).show();
    });
    g3.mouseleave(function(){
        $('.section3 .gallery_large3 li').hide();
    });

    g4.mouseenter(function(){
        var num=$(this).index();
            $('.section3 .gallery_large4 li').hide();
            $('.section3 .gallery_large4 li').eq(num).show();
    });
    g4.mouseleave(function(){
        $('.section3 .gallery_large4 li').hide();
    });
    
//
    // g5.mouseenter(function(){
    //     var num=$(this).index();
    //         $('.section4 .gallery_large1 li').hide();
    //         $('.section4 .gallery_large1 li').eq(num).show();
    // });
    // g5.mouseleave(function(){
    //     $('.section4 .gallery_large1 li').hide();
    // });

    // g6.mouseenter(function(){
    //     var num=$(this).index();
    //         $('.section4 .gallery_large2 li').hide();
    //         $('.section4 .gallery_large2 li').eq(num).show();
    // });
    // g6.mouseleave(function(){
    //     $('.section4 .gallery_large2 li').hide();
    // });
   
    // g7.mouseenter(function(){
    //     var num=$(this).index();
    //         $('.section4 .gallery_large3 li').hide();
    //         $('.section4 .gallery_large3 li').eq(num).show();
    // });
    // g7.mouseleave(function(){
    //     $('.section4 .gallery_large3 li').hide();
    // });

    // g8.mouseenter(function(){
    //     var num=$(this).index();
    //         $('.section4 .gallery_large4 li').hide();
    //         $('.section4 .gallery_large4 li').eq(num).show();
    // });
    // g8.mouseleave(function(){
    //     $('.section4 .gallery_large4 li').hide();
    // });

    /*******************************section5*******************************************************/
    new TiltSlider( document.getElementById( 'slideshow' ) );
    
    /*******************************section6*******************************************************/
    $('.section6 button').click(function(){
        event.preventDefault;
        $('body,html').animate({'scrollTop':0});
        // $('html,body').animate({scrollTop:$(this.hash).offset().top}, 0);
});
});

