var oUname = document.getElementById("uname");
var oError = document.getElementById("error_box");
var oUpass = document.getElementById("upass");

    oError.innerHTML="<br>"
if(oUname.value.length<6 || oUname.value.length >12){
	oError.innerHTML="用户名6-12位";
	return;
   }else if ((oUname.value.charCodeAt(0)>=48) && (oUname.value.charCodeAt(0)<=57)){
   		oError.innerHTML="第一位只能是字母";
        return;
   } else for (var i=0 ; i<oUname.value.length;i++){
   		if (oUname.value.charCodeAt(i)<48 || (oUname.value.charCodeAt(i)>57)&&(oUname.value.charCodeAt(i)<97)|| oUname.value.charCodeAt(i)>122){
        oError.innerHTML="只能是字母或数字";
        return;
        }
   }
if(oUpass.value.length<6 || oUpass.value.length>12){
	oError.innerHTML="密码6-12位";
    return;
    }
    window.alert("登录成功")
  	}