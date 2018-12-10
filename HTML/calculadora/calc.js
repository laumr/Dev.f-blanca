/**
 * Esta práctica genera una calculadora simple
 * @author Laumr2991
*/
/** Falta -  que el punto no me lo cuente, que acorte resultados a 12 en suma y multi dando el resultado correcto
 * 
 * */

var primerNumero;
var segundoNumero;
var operacion;
var valorActual;
var resultado;
var cuenta=0;



function agregarApantalla(x){ 
    var valorPantalla=document.getElementById('laPantalla').innerText;
    if(valorPantalla=='0'|| cuenta==1){
        borrar();
        cuenta=0;
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
    cuenta=1;
}

function resultadoCorto(){
    resultado=resultado.toString()
    if(resultado.length>12){
        resultado=resultado.slice(0,11);
        agregarApantalla(resultado);
        cuenta=1;
    }else{
        agregarApantalla(resultado);
        cuenta=1;
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
        cuenta=1;
    }else{
        if(operacion=='-'){
            resultado=resta(Number(primerNumero),Number(segundoNumero));
            borrar();
            agregarApantalla(resultado);
            cuenta=1;
        }else{
            if(operacion=='x'){
                resultado=multiplicacion(Number(primerNumero),Number(segundoNumero));
                borrar();
                agregarApantalla(resultado);
                cuenta=1;
            }else{
                if(operacion=='/'){
                    resultado=division(Number(primerNumero),Number(segundoNumero));
                    borrar();
                    resultadoCorto();
                    cuenta=1;
                }    
                
            }
        }
    }
}

function borrar(){
    var valorPantalla=document.getElementById('laPantalla');
    valorPantalla.innerText='';
}

function borrarC(){
    var valorPantalla=document.getElementById('laPantalla');
    valorPantalla.innerText='0';
    cuenta=0;
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


