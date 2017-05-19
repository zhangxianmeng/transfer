//轮播
$(function() {
	var idx = 0;
	var $imgs = $('#lightspot .imgBox a');
	var $btns = $('#lightspot .btns li');
	var interval = 3000;
	var duration = 600;
	var timer;

	function changeIdx() {
		idx += 1;
		idx == $imgs.length && (idx = 0)
	}

	function updataView() {
		$imgs.eq(idx).fadeIn(duration).siblings().fadeOut(duration);
		$btns.eq(idx).addClass('active').siblings().removeClass('active')
	}
	timer = setInterval(function() {
		changeIdx();
		updataView()
	}, interval);
	$('#lightspot .banner').hover(function() {
		clearInterval(timer);
		timer = null
	}, function() {
		timer = setInterval(function() {
			changeIdx();
			updataView()
		}, interval)
	});
	$btns.mouseenter(function() {
		idx = $(this).index();
		updataView()
	});

	$('#header .menu').click(function() {
		$('#header .nav-items').css({
			left: '30%'
		});
		$('#header .mask').css({
			left: '0'
		});
		$('#header .close-btn').css({
			transform: 'rotate(-180deg)',
			'-webkit-transform': 'rotate(-180deg)'
		})
	});
	$('#header .close-btn,#header .mask, .nav-items a').click(function() {
		$('#header .nav-items').css({
			left: '100%'
		});
		$('#header .mask').css({
			left: '100%'
		});
		$('#header .close-btn').css({
			transform: 'rotate(0)',
			'-webkit-transform': 'rotate(0)'
		})
	});

	$('a[data-rel^=lightcase]').lightcase({
		swipe: true
		
	});

	smoothScroll.init();

	//	设置banner高度
	var $img = $('.banner img');
	var height = $img.eq(0).css('height');
	if(height == '0px') {
		$img[0].onload = function() {
			var height = getComputedStyle(this).height;
			$('.banner').css({
				'height': height
			});
		}
	} else {
		$('.banner').css('height', height); 
	}

});

$('.gallery4 a').click(function() {
	var id = $(this).attr('id');
	console.log(id);
	$.getJSON('data/' + id + '.json', {}, function(data) {
		console.log(data)
		$(data).each(function(i,dom) {
			var html = '<a id="xc01" data-rel="lightcase:myCollection10" href="###" title="吉泽明步天使造型亮相 惊艳全场">\
							<img src="img/' + id + '/' + dom.img + '">\
						</a>';
			$('#' + id + '-box').append(html)
		})
//		lightcase.start({
//		  href: '###',
//		  // more options like width, height, etc.
//		});
$('a[data-rel^=lightcase]').lightcase({
		swipe: true
	});
		
	})
})