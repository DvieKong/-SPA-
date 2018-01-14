		$(function() {
			var $windowWidth = $(window).width();
			$('.clickBtn').click(function() {
				var flag_com = $(this).hasClass('flag_toggle_content');
				if(flag_com) {
					$('.left-right-btn').animate({
						'left': '300px'
					});;
					$('.left').animate({
						'left': '0px'
					});
					$('.right').animate({
						'left': '300px'
					})
					$(this).removeClass('flag_toggle_content');
					$(this).attr('title','隐藏左侧导航');
				} else {
					$(this).attr('title','显示左侧导航');
					$('.left-right-btn').animate({
						'left': '0px'
					});;
					$('.left').animate({
						'left': '-300px'
					});
					$('.right').animate({
						'left': '0'
					})
					$(this).addClass('flag_toggle_content');
				}
			});
		})

		//获取数组成员
		var arrAttr = [];
		$('.left li').each(function() {
			var flag = $(this).attr('cmig-data');
			if(flag != undefined) {
				arrAttr.push(flag)
			} else {
				return;
			}
		});
		$('.left li ul li:eq(0)').addClass('active');
		$('#mian-inner').load('cmigPage-1.html', function(a, b, c) {})
		$('[cmig-data^=cmigPage]').click(function() {
			$class = $(this).attr('cmig-data');
			$('.left li').removeClass('active');
			$(this).addClass('active');
			$('#mian-inner').load($class + '.html', function(a, b, c) {})
		});

		$('.left-btn').click(function() {
			$('[cmig-data^=cmigPage]').each(function(indexf, elef) {
				var flagActive = $(this).hasClass('active');
				if(flagActive) {
					var $id = $(this).attr('cmig-data');
					$(arrAttr).each(function(index, ele) {
						if(ele == $id) {
							activeLi = arrAttr[index - 1];
							currentCount = index;
							if(currentCount <= 0) {
								return false;
							} else {
								$(elef).removeClass('active');
							}
						}
					})
					if(currentCount > 0) {
						$('[cmig-data=' + activeLi + ']').addClass('active');
						$('#mian-inner').empty();
						$('#mian-inner').load(arrAttr[currentCount = currentCount - 1] + '.html', function(a, b, c) {});
					}
				}
			})

		});
		//新加右侧按钮
		$('.right-btn').click(function() {
			var _index = $(arrAttr).length;
			$('[cmig-data^=cmigPage]').each(function(indexf, elef) {
				var flagActive = $(this).hasClass('active');
				if(flagActive) {
					var $id = $(this).attr('cmig-data');
					$(arrAttr).each(function(index, ele) {
						if(ele == $id) {
							_activeLi = arrAttr[index + 1];
							_currentCount = index;
							if(_currentCount < 0 || _currentCount > (_index - 2)) {
								return false;
							} else {
								$(elef).removeClass('active');
							}
						}
					})
				}
			})
			if(_currentCount >= 0 && _currentCount <= (_index - 2)) {
				$('[cmig-data=' + _activeLi + ']').addClass('active');
				$('#mian-inner').empty();
				$('#mian-inner').load(arrAttr[_currentCount = _currentCount + 1] + '.html', function(a, b, c) {});
			}

		});