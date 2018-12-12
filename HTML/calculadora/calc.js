/**
 * Esta práctica genera una calculadora simple
 * @author Laumr2991
*/
/** Falta -  que el punto no me lo cuente, que haga operaciones consecutivas,
 * que acorte resultados a 12 en suma y resta y multiplicación dando el resultado correcto
 * */

var primerNumero="";
var segundoNumero="";
var operacion="";
var operacionDos="";
var resultado="";
var valorActual=document.getElementById('laPantalla');


function agregarApantalla(x){ 
    if(valorActual.innerText=='0'|| segundoNumero!=""){
        borrar();
    }
    if(x=='.' & valorActual.innerText.indexOf('.')>=0){
        return;
    }
    if(valorActual.innerText.length<10){
        valorActual.innerText=`${valorActual.innerText}${x}`;
    }
}


function guardar(signo){
    debugger;
    if(primerNumero==""){
        primerNumero=Number(valorActual.innerText);
        borrar();
    }
    if(operacion==""){
        operacion=signo;
    }else{
        operacionDos=signo;
        igualA();
    }
   
}

function raizC(){
    resultado=raiz(Number(valorActual.innerText));
    borrar();
    agregarApantalla(resultado);
}

function igualA(){
    debugger;
    segundoNumero=Number(valorActual.innerText);
    if(operacion=='/'){
        resultado=division(primerNumero,segundoNumero).toFixed(6);
    }else{
        if(operacion=='-'){
            resultado=resta(primerNumero,segundoNumero);
        }else{
            if(operacion=='x'){
                resultado=multiplicacion(primerNumero,segundoNumero);
            }else{
                if(operacion=='+'){
                    resultado=suma(primerNumero,segundoNumero); 
                }    
                
            }
        }
    
    }
    borrar();
    agregarApantalla(resultado);
    primerNumero=resultado;
    operacion=operacionDos;
}

function borrar(){
    valorActual.innerText='';
}

function borrarC(){
    valorActual.innerText='0';
    primerNumero="";
    operacion="";
    operacionDos="";
    segundoNumero="";
    resultado="";
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
    return Math.sqrt(x).toFixed(6);
}

