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
$('js1').style.backgroundImage='m1.jpg';

}
function g()
{
$('js1').style.backgroundImage='m2.jpg';

}
