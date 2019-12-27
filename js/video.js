var v = document.getElementById('video');
var playBtn = document.getElementById('play_btn');

playBtn.addEventListener("click",function(){
				if(v.paused){
					v.play();
					playBtn.innerHTML = '暂停';
				}else{
					v.pause();
					playBtn.innerHTML = '播放';
				}
});
// var nowTime = document.getElementById('now_time');
// var duration = document.getElementById('duration_time');
// nowTime.innerHTML = "00:00";
// duration.innerHTML = "00:00";

// function parseTime(time){
// 				time = Math.floor(time);
// 				var _m,_s;
// 				_m = Math.floor(time/60);
// 				_s = time - _m*60;
// 				if(_m<10){
// 					_m = '0' + _m;
// 				}
// 				if(_s<10){
// 					_s = '0' + _s;
// 				}
// 				return _m + ':' + _s;
// }
			
// v.addEventListener('timeupdate',function(){
// 	nowTime.innerHTML = parseTime(v.currentTime);
// });

// v.addEventListener('loadedmetadata',function(){
// 	duration.innerHTML = parseTime(v.duration);
// });
			
var vo = document.getElementById('voice');
vo.innerHTML = parseInt(v.volume*100,10);
var voP = document.getElementById('voice_plus');
var voM = document.getElementById('voice_minus');

voP.addEventListener('click',function(){
				v.volume>0.9?v.volume = 1:v.volume += 0.1;
				vo.innerHTML = parseInt(v.volume*100,10);
});
voM.addEventListener('click',function(){
				v.volume<0.1?v.volume = 0:v.volume -= 0.1;
				vo.innerHTML = parseInt(v.volume*100,10);
});