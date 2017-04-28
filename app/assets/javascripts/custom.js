/*global $*/
$(document).ready(function(){
    var mItem = $('.homeMenu');
    
    mItem.hover(function(){
        $(this).animate({'font-size':'3.2em', 'font-weight':'300'},150);
    }, function(){
        $(this).animate({'font-size':'1.8em', 'font-weight':'100'},150);
    });
    
    var data = [
        { 'tool': 'Photoshop',   'skill': 150, 'margin':15, 'percent': 99 },
        { 'tool': 'Illustrator', 'skill': 140, 'percent': 98 },
        { 'tool': 'Sketch',    'skill': 100, 'margin':65, 'percent':80  },
        { 'tool': 'Html5', 'skill': 140, 'margin':16, 'percent':90 },
        { 'tool': 'Css3',  'skill': 130, 'margin':35, 'percent':90 },
        { 'tool': 'jQuery', 'skill': 100, 'percent':60 },
    ];
    
    mItem.click(function(){
        $(this).unbind('hover');
        $(this).unbind('mouseenter mouseleave');
        $(this).siblings().animate({"opacity":"0"},600);
        $(this).delay(600).addClass('center').fadeIn(600);
        var seName = $(this).attr('id');
        $('.'+seName).delay(800).fadeIn(600);
        $('.start').each(function(index){
            $(this).css({'margin-left': data[index].margin+'px'})
            $(this).delay(1000).delay(50*index).animate({'width':data[index].skill + 'px'},
            {duration: 700, step: function( now) {
            $(this).text( Math.round(now) - 50 + '%' );
        }});
        });
    });
    
    $('.back').click(function(){
        mItem.css({'font-size':'1.8em','font-weight':'100'});
        mItem.removeClass('center');
        mItem.hover(function(){
        $(this).animate({'font-size':'3.2em', 'font-weight':'300'},150);
        }, function(){
        $(this).animate({'font-size':'1.8em', 'font-weight':'100'},150);
        });
        $('.section').fadeOut(600);
        mItem.siblings().animate({"opacity":"1"},600);
        $('.start').animate({'width':'0px'},{duration:600});
    });
});

$('html, body').css({'overflow': 'hidden', 'height': '100%'});

    $('#element').on('scroll touchmove mousewheel', function(e) {
       e.preventDefault();
       e.stopPropagation(); 
       return false;
});