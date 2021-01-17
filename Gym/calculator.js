var pound,kg,u,givenweight;
u = 2.205;
kg = window.prompt('ENTER YOUR WEIGHT IN KG');
pound = kg * u;
var w = pound * 0.67*29.574*0.001; 
var numb = w;
numb = numb.toFixed(2);
document.write("YOU MUST DRINK " + numb + "ML OF WATER DAILY"); 