window.onload=function(){
			var oBtnRight = document.querySelector('.btn-right'),
			oBtnLeft = document.querySelector('.btn-left'),
			aImages = document.querySelectorAll('.img-g img'),
			aPts = document.querySelectorAll('.pt li'),
			index = 0;
			lastIndex = 0;
        var timer = null;
		oBtnRight.onclick = function(){
			change(function(){
				index++;
				index %= aImages.length;
			});
		}
		oBtnLeft.onclick = function(){
			change(function(){
				index--;
				if(index < 0) {
				index = aImages.length - 1;
				}
			});
		}
		function change(callback){
			update();
			callback();
		}
		function update(){
			aImages[lastIndex].className = '';
			aPts[lastIndex].className = '';
			aImages[index].className = 'on';
			aPts[index].className = "pt-l";
			lastIndex = index;
		}
		function autoplay(){
			update();
			index++;
			index %= aImages.length;
		}
		timer = setInterval(autoplay,2000);
}