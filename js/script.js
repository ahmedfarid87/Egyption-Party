/// <reference types="../@types/jquery" />




// &Home
$(".openNav").on("click",function(){
    $("#leftMenu").animate({ width:'250px'},50)
    $("#leftMenu").animate({marginLeft :'250px'},50)
    $(".openNav").animate({marginLeft :'250px'},400)
})

$('.closebtn').on("click",function(){
        $("#leftMenu").animate({ width:'0'},50)
   $("#leftMenu").animate({marginLeft :'0px'},50)
   $(".openNav").animate({marginLeft :'0px'},400)
})



// ^Slider

$('#sliderDown h3').on("click",function(){
    $(this).next().slideToggle(500);
    $('.inner').not($(this).next()).slideUp(500);
})

//! Timer



window.onload = function() {
   
    downTime("6 october 2021 9:56:00");
  }

  function downTime(dateTo) {
  
        let nextDate = new Date(dateTo);
    nextDate = (nextDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1060);

    timerD = (nextDate- now);
        
   let days = Math.floor( timerD / (24*60*60));
   let hours = Math.floor((timerD - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timerD - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timerD - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  downTime(dateTo); }, 1000);
  }





//~ Contact Us

$('textarea').on("keyup",function(){
let textV = $(this).val().length
$('#chars').text(100 - textV <= 0 ? "Its Enough" : 100- textV)
})
















