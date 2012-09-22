function s() //Function name is s
{
var x=parseInt(document.alertform.name.value); //document.form name.textarea name.value
var c=parseInt(document.alertform.name2.value); //Use parseInt text to number value
var y=parseInt(document.alertform.name3.value); //Use parseInt text to number value
var g=(x+c+y); //var formula for var x and c and y plus
var h=(x*x)+(c*c)+(y*y); //var formula for find summa2
r_window = window.open("", "r_window1", "status=1,width=350,height=150"); //Open new window
r_window.document.write("<font color='red'>Summa:</font>&nbsp;"); //Text
r_window.document.write(g); //Write var "g" to new window r_window
r_window.document.write("<br><font color='red'>Summa<sup>2</sup>:</font>&nbsp;"); //break and text
r_window.document.write(h); //Write var "h" to new window r_window
}