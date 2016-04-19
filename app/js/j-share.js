//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

Zepto(function($){

  var share = $('.mask-area');


  $('.beat-egg-cell').tap(function() {
  	var offL = $(this).offset().left;
  	var offT = $(this).offset().top;
    $(this).addClass('beat-egg-right');
    // alert(offl);
    $('.hammer').css(
		{
			top: offT - 200, left: offL + 60
		}
	);
	 $('.hammer-beat').addClass('down');


	// $('.j-openwin').removeClass('none').animate(300);
	 setTimeout(function (){
    	$('.j-openwin').removeClass('none');
   }, 700); 
    
  });

  $('.j-close').tap(function() {
  	$('.beat-egg-cell').removeClass('beat-egg-right');
  	$('.hammer-beat').removeClass('down');
  	$('.hammer').css(
		{
			top: 20, left: 170
		}
	);
	$('.j-openwin').addClass('none');
  })

  

})