function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 
function f()
{
$('js1').style.backgroundColor='blue';

}
function g()
{
$('js1').style.backgroundColor='yellow';

}
function f1()
{
$('js1').style.backgroundImage=url('m1.jpg');

}
function g1()
{
$('js1').style.backgroundImage=url('m2.jpg');

}
