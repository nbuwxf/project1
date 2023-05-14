window.addEventListener('load', function() {
	var btn500 = document.querySelector('.btn500');
	var btn800 = document.querySelector('.btn800');
	var div1 = document.querySelector('div');
	var span = document.querySelector('span');

	function animate(obj, target, callback) {
		clearInterval(obj.timer);
		obj.timer = null;
		obj.timer = setInterval(function() {
			var step = (target - obj.offsetLeft) / 20;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			console.log(step);
			if (obj.offsetLeft == target) {
				clearInterval(obj.timer);
				callback && callback();

			} else {
				obj.style.left = obj.offsetLeft + step + 'px';
			}

		}, 45)
	}
	// animate(div1, 500);
	// animate(span, 800);

	btn500.addEventListener('click', function() {
		animate(div1, 400, function() {
			div1.style.backgroundColor = 'red';
		})
	});
	btn800.addEventListener('click', function() {
		animate(div1, 500, function() {
			div1.style.backgroundColor = 'pink';
		})
	})


})
