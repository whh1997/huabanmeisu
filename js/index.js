
$(function(){
	//下拉全部图片
	$(".sousuo span").click(function(){
		$("#block").css({
			"display":"block"
		});
	});
	
	
	//轮播图部分
	var length,
	    currentIndex = 0,
		interval,
		hasStarted = false, //是否已经开始轮播 
		t = 3000; //轮播时间间隔 
		length = $('.slider_img_li').length;
		$('.ol_li:first').addClass('current');
		$('.ol_li').hover(function(e) {
			stop();
			var preIndex = $(".ol_li").filter(".current").index();
			currentIndex = $(this).index();
			play(preIndex, currentIndex);
		}, function() {
			start();
		});
		function next() {
			var preIndex = currentIndex;
			currentIndex = ++currentIndex % length;
			play(preIndex, currentIndex);
		}
		function play(preIndex, currentIndex) {
			$('.slider_img_li').eq(preIndex).fadeOut(500)
					.parent().children().eq(currentIndex).fadeIn(1000);
			$('.ol_li').removeClass('current');
			$('.ol_li').eq(currentIndex).addClass('current');
		}
		/** 
		 * 开始轮播 
		 */
		function start() {
			if(!hasStarted) {
				hasStarted = true;
				interval = setInterval(next, t);
			}
		}
				/** 
				 * 停止轮播 
				 */
		function stop() {
			clearInterval(interval);
			hasStarted = false;
		}
				//开始轮播 
		start();
		//轮播图结束
		
		
		$(".login").click(function(){
			$(".mask").css({
				"display":"block"
			});
			$(".box").css({
				"display":"block"
			});
		});
		$(".close").click(function(){
			$(".mask").css({
				"display":"none"
			});
			$(".box").css({
				"display":"none"
			});
		});
		
		$(".zhuce").click(function(){
			$(".mask").css({
				"display":"block"
			});
			$(".box-2").css({
				"display":"block"
			});
		});
		$(".close").click(function(){
			$(".mask").css({
				"display":"none"
			});
			$(".box-2").css({
				"display":"none"
			});
		});
		$(".register").click(function(){
			$(".mask").css({
				"display":"block"
			});
			$(".box-2").css({
				"display":"block"
			});
		});
		$(".close").click(function(){
			$(".mask").css({
				"display":"none"
			});
			$(".box-2").css({
				"display":"none"
			});
		});
		
		$(".index").click(function(){
			window.location="index.html";
		});
		$(".index2").click(function(){
			window.location="index2.html";
		});
		$(".index3").click(function(){
			window.location="index3.html";
		});
		$(".index4").click(function(){
			window.location="index4.html";
		});
		$(".last-child").click(function(){
			window.location="index5.html";
		});
});



   
	

