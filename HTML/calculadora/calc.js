/**
 * Esta práctica genera una calculadora simple
 * @author Laumr2991
*/


function agregarApantalla(x){
    var valoractual=document.getElementById('laPantalla').innerText; 
    if(valoractual.length<10){
    var impresion=document.getElementById('laPantalla');  
    impresion.innerText=`${valoractual}${x}`;
    }
}

function guardar(content){
    var primernumero=getElementById('laPantalla').value;
    console.log(primernumero);
//aquí poner ifs depende de la operación, manda a la siguiente función y en esa función agarra este y el valor de la patalla.s
}

function borrar(){
    var valoractual=document.getElementById('laPantalla');
    valoractual.innerText='';
}

function suma(x,y){
    return x+y;
}

function resta(x,y){
    return x-y;
}

function multiplicacion(x,y){
    return x*y;
}

function division(x,y){
    return x/y;
}

//Math.sqrt()