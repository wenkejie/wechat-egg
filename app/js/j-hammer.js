//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

Zepto(function($){
  
  var share = $('.mask-area');
  var openw = function () {
  	$('.j-openwin').removeClass('none');
  }//弹窗打开方法

  var beatH = function () {
  	$('.hammer-beat').removeClass('hammer-animation').addClass('down');

  }//锤子打击方法

  var jRefresh = function () {
  	$('.beat-egg-cell').removeClass('beat-egg-right');
  	$('.hammer-beat').removeClass('down').addClass('hammer-animation');
  	$('.hammer').removeAttr('style');
	$('.j-openwin').addClass('none');
  }//页面重置，点击一次后重置，需要回到初始状态可调用此方法

  $('.beat-egg-cell').tap(function() {
  	var offL = $(this).offset().left;
  	var offT = $(this).offset().top;
    $(this).addClass('beat-egg-right');
    // alert(offl);
  //   if ($(this).hasClass('middle')) {
		// 	$('.hammer').css({
		// 		left: offL + 60,
		// 		top: 20
		// 	});
		// }else{
		// 	$('.hammer').css({
		// 		left: offL + 60,
		// 		top: -5
		// 	});
		// };

    $('.hammer').css({
       left: offL + 150,
       top: 10
     });

 //    $('.hammer').index(1)
 //    $('.hammer').css(
	// 	{
	// 		left: offL + 60 , top: 0
	// 	}
	// );
	 
  	beatH();

	// $('.j-openwin').removeClass('none').animate(300);
	 setTimeout(function (){
    	// $('.j-openwin').removeClass('none');
    	openw();
   }, 700); 
    
  });

  $('.j-close').tap(function() {
  	jRefresh();
  })


})