/**
 * Esta práctica genera una calculadora simple
 * @author Laumr2991
*/


var primerNumero;
var segundoNumero;
var operacion;
var valorActual


function agregarApantalla(x){
    valorActual=document.getElementById('laPantalla').innerText; 
    if(valorActual.length<10){
        var impresion=document.getElementById('laPantalla');  
        impresion.innerText=`${valorActual}${x}`;
    }
    str.indexOf('.')
}


function guardar(signo){
    primerNumero=document.getElementById('laPantalla').innerText;
    operacion=signo
    borrar();
}

function raizC(){
    primerNumero=document.getElementById('laPantalla').innerText;
    var resultado=raiz(Number(primerNumero));
    redondear(resultado);
    borrar();
    agregarApantalla(resultado);
}

function igualA(){
    segundoNumero=document.getElementById('laPantalla').innerText;
    if(operacion=='+'){
        var resultado=suma(Number(primerNumero),Number(segundoNumero));
        borrar();
        agregarApantalla(resultado);
    }else{
        if(operacion=='-'){
            var resultado=resta(Number(primerNumero),Number(segundoNumero));
            borrar();
            agregarApantalla(resultado);
        }else{
            if(operacion=='x'){
                var resultado=multiplicacion(Number(primerNumero),Number(segundoNumero));
                borrar();
                agregarApantalla(resultado);
            }else{
                if(operacion=='/'){
                    var resultado=division(Number(primerNumero),Number(segundoNumero));
                    borrar();
                    agregarApantalla(resultado);
                }    
                
            }
        }
    }
}

function borrar(){
    valorActual=document.getElementById('laPantalla');
    valorActual.innerText='';
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

function raiz(x){
    return Math.sqrt(x);
}

function redondear(x){
    return Math.round(x);
}