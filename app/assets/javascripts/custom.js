/*global $*/
$(document).ready(function(){
    var mItem = $('.homeMenu');
    
    // menu hover event
    mItem.hover(function(){
        $(this).animate({'font-size':'3.2em', 'font-weight':'300'},150);
    }, function(){
        $(this).animate({'font-size':'1.8em', 'font-weight':'100'},150);
    });
    
    // graph data
    var data = [
        { 'tool': 'Photoshop',   'skill': 150, 'margin':15, 'percent': 100 },
        { 'tool': 'Illustrator', 'skill': 140, 'percent': 100 },
        { 'tool': 'Sketch',    'skill': 100, 'margin':65, 'percent':50  },
        { 'tool': 'Html5', 'skill': 140, 'margin':16, 'percent':90 },
        { 'tool': 'Css3',  'skill': 130, 'margin':35, 'percent':80 },
        { 'tool': 'jQuery', 'skill': 100, 'percent':50 },
    ];
    
    // menu click event
    mItem.click(function(){
        $(this).unbind('hover');
        $(this).unbind('mouseenter mouseleave');
        $(this).siblings().animate({"opacity":"0"},600);
        $(this).delay(600).addClass('center').fadeIn(600);
        var seName = $(this).attr('id');
        $('.'+seName).delay(800).fadeIn(600);
        
        //graph event
        $('.start').each(function(index){
            $(this).css({'margin-left': data[index].margin+'px'})
            $(this).delay(1000).delay(50*index).animate({'width':data[index].percent + 50 + 'px'},
            {duration: 700, step: function( now) {
            $(this).text( Math.round(now - 50) + '%' );
            }});
        });
        
        //resume event
        $('.round').each(function(index){
            $(this).delay(200*index).animate({
                'width': '9px',
                'height': '9px',
            },{duration:2000});
        });
        
        $('.nameInner').each(function(index){
            $(this).delay(500*index).animate({
                'opacity':'1'
            },{duration:1000});
        });
        
        $('.line').delay(500).each(function(index){
            $(this).delay(200*index).animate({
                'width': '14em'
            },{duration:1200});
        });
    });
    
    // backbtn click event
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
        $('.round').animate({'width':'0px','height':'0px'},{duration:600});
        $('.line').animate({'width':'0px'},{duration:600});
        $('.nameInner').animate({'opacity':'0'},{duration:600});
    });
    
    //portfolioMenu hover event
    $('.portfolioItem').hover(function(){
        // $(this).animate({'background-size':' 100%'}, 600);
    });
    
});

$('html, body').css({'overflow': 'hidden', 'height': '100%'});

    $('#element').on('scroll touchmove mousewheel', function(e) {
       e.preventDefault();
       e.stopPropagation(); 
       return false;
});