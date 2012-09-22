// JavaScript Andres Ivanov v.1
for (a=0; a<=10; a++)
{
document.write("<tr>");
for (b=0; b<=10; b++)
document.write("<td width='30' height='30'>"+(Math.pow(a,2)+Math.pow(b,2))+"</td>");
document.write("</tr>");
}