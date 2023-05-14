window.addEventListener('load', function() {


	function animate(obj, target, callback) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var step = (target - obj.offsetTop) / 20;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			console.log(step);
			if (obj.offsetTop == target) {
				clearInterval(obj.timer);
				callback && callback();

			} else {
				obj.style.top = obj.offsetTop + step + 'px';
			}

		}, 45)
	}

})
