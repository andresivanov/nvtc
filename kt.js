// JavaScript Andres Ivanov v.5
function ktr()
{
var a=parseInt(document.kt.a.value);
var y=parseInt(document.kt.y.value);
if (document.kt.a.value=="" && document.kt.y.value==""){
	alert("Где цифры?");
	return;
}
if (document.kt.a.value=="a" && document.kt.y.value=="y"){
	alert("Где цифры?");
	return;
}
if (document.kt.a.value=="" && document.kt.y.value=="y"){
	alert("Где цифры?");
	return;
}
if (document.kt.a.value=="a" && document.kt.y.value==""){
	alert("Где цифры?");
	return;
}
if (document.kt.a.value=="0" && document.kt.y.value=="0"){
	alert("Нули не разрешены.");
	return;
}
if (document.kt.a.value=="" && document.kt.y.value=="0"){
	alert("Нули не разрешены.");
	return;
}
if (document.kt.a.value=="0" && document.kt.y.value==""){
	alert("Нули не разрешены.");
	return;
}
if (document.kt.a.value=="0" && document.kt.y.value=="y"){
	alert("Нули не разрешены.");
	return;
}
if (document.kt.a.value=="a" && document.kt.y.value=="0"){
	alert("Нули не разрешены.");
	return;
}
var c=10;
var b=y-c;
var d=b/a;
var e=d*(-1);
alert(d+" и "+e);
/*document.write("<h2>x<sup>2</sup> равен:&nbsp;");
document.write(d);
document.write("</h2>");*/
}