var timer  = null;
var onbt = document.getElementById("back-top");
onbt.onclick = function(){
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }    
    });
}
var oside = document.getElementById("side-top");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >=260) {
        oside.className = "side-center";
    } else {
        oside.className = "side-module";
    }
}