/**
 * Esta práctica genera una calculadora simple
 * @author Laumr2991
*/
//Falta -  que el punto no me lo cuente, que no borre cuando pico operación.

var primerNumero;
var segundoNumero;
var operacion;
var valorActual;
var resultado;


function agregarApantalla(x){ 
    var valorPantalla=document.getElementById('laPantalla').innerText;
    if(valorPantalla=='0'||operacion.length>0){
        borrar();
    }
    valorActual=document.getElementById('laPantalla').innerText; 
    if(valorActual.length<10){
        var impresion=document.getElementById('laPantalla');  
        impresion.innerText=`${valorActual}${x}`;
    }
}

function imprimirPunto(){
    valorActual=document.getElementById('laPantalla').innerText; 
    punto=valorActual.indexOf('.');
    if(punto<0){
        agregarApantalla('.');
    }
}


function guardar(signo){
    primerNumero=document.getElementById('laPantalla').innerText;
    operacion=signo
    
}

function resultadoCorto(){
    resultado=resultado.toString()
    if(resultado.length>12){
        resultado=resultado.slice(0,11);
        agregarApantalla(resultado);
    }else{
        agregarApantalla(resultado);
    }
}

function raizC(){
    primerNumero=document.getElementById('laPantalla').innerText;
    resultado=raiz(Number(primerNumero));
    borrar();
    resultadoCorto();
}

function igualA(){
    segundoNumero=document.getElementById('laPantalla').innerText;
    if(operacion=='+'){
        resultado=suma(Number(primerNumero),Number(segundoNumero));
        borrar();
        agregarApantalla(resultado);
    }else{
        if(operacion=='-'){
            resultado=resta(Number(primerNumero),Number(segundoNumero));
            borrar();
            agregarApantalla(resultado);
        }else{
            if(operacion=='x'){
                resultado=multiplicacion(Number(primerNumero),Number(segundoNumero));
                borrar();
                agregarApantalla(resultado);
            }else{
                if(operacion=='/'){
                    resultado=division(Number(primerNumero),Number(segundoNumero));
                    borrar();
                    resultadoCorto();
                }    
                
            }
        }
    }
}

function borrar(){
    var valorPantalla=document.getElementById('laPantalla');
    valorPantalla.innerText='';
}

function sustituir(){
    var valorPantalla=document.getElementById('laPantalla').innerText;
    if(valorPantalla=='0'){
        borrar();
    }
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