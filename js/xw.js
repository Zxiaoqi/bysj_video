window.onload=function(){
			var aImages = document.querySelectorAll('.img-g img'),
			index = 0;
			lastIndex = 0;
        var timer = null;
		function change(callback){
			update();
			callback();
		}
		function update(){
			aImages[lastIndex].className = '';
			aImages[index].className = 'on';
			lastIndex = index;
		}
		function autoplay(){
			update();
			index++;
			index %= aImages.length;
		}
		timer = setInterval(autoplay,5000);
}