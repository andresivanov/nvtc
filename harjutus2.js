// JavaScript Andres Ivanov v.1
function s() //Function name is s
{
var x=parseInt(document.pands.width.value); //document.form name.textarea name.value
var c=parseInt(document.pands.height.value); //Use parseInt for change text to number value
if (document.pands.width.value=="" && document.pands.height.value==""){ //Test for empty fields
	alert("Kus on numbrid?"); //Text for if finded empty field
}
if (x==c){ //if for vordne
	alert("Width on vordne height");
}
else if (x>c) //if and else for > or <
        { 
	alert("Width on suurem height");
}
else {
	alert("Width on vaiksem height");
}
var p=2*(x+c); //var formula for umbermoot
var s=(x*c); //var formula for pindala
document.write("<font color='red'>Umbermoot:</font>&nbsp;"); //Text
document.write(p); //Write var "p"
document.write("<br><font color='red'>Pindala:</font>&nbsp;"); //break and text
document.write(s); //Write var "s"
}
