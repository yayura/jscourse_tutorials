"use strict";
//1 make a template 

var template = '<h1>Hello</h1><p>This is simple template of JS</p>';
//2 go to html and <div id="template"></div>

//3 take element 
document.getElementById('template').innerHTML = template;

//4 multiply lines 

var template2 = '<h1>Multi line</h1><p>' + 'This is MULTYPLAne template of JS</p>';
//or use ` 
/*`<h1>Multi line</h1><p>'+
'This is MULTYPLAne template of JS</p>`;*/

document.getElementById('template2').innerHTML = template2;

//varible and functions in code
function makeUpperCase(word) {
    return word.toUpperCase();
}
var name = 'JoHNdsklfk';
var template3 = '<h1>' + makeUpperCase("to upper case text") + ' Multi line ' + name + ' </h1><p> This is MULTYPLAne template of JS</p>';
//or use ` 
/*`<h1>Multi line</h1><p>'+
'This is MULTYPLAne template of JS</p>`;*/

document.getElementById('template3').innerHTML = template3;