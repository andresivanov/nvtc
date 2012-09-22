// JavaScript Andres Ivanov v.1
for (y=1; y<=9; y++)
{
document.write("<tr>");
for (x=1; x<=9; x++)
document.write("<td width='30' height='30'>"+(x*y)+"</td>");
document.write("</tr>");
}