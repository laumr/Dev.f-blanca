


var numeroBoton;
var colorArray=[ '#0174DF','#B40431','#0489B1','#FFFF00','#FE9A2E',
                  '#FF0040','#82FA58','#FA5858','#AC58FA','#58FAD0'];

var botonArray=["uno","dos","tres","cuatro","cinco","seis","siete","ocho",
                "nueve","diez","once","doce","trece","catorce","quince","diez-seis",
                "diez-siete","diez-ocho","diez-nueve","veinte"];
var secuenciaBotones=[];
var secuenciaCol=[];
var secuenciaU=[];
var b=0;
var c=0;
var p=0;


function inicio(){
    for(a=0;a<4;a++){
    numeroBoton=botonArray[Math.floor(Math.random() * 20)];
    colorBoton=colorArray[Math.floor(Math.random() * 10)];
    secuenciaBotones.push(numeroBoton);
    secuenciaCol.push(colorBoton);
    }
    requestAnimationFrame(pintar);
} 

function pintar(){
    wait(800);
    document.getElementById(secuenciaBotones[b]).style.backgroundColor=secuenciaCol[b];
    b++
    if(b<4){
    requestAnimationFrame(pintar);
    }else{
        b=0;
        requestAnimationFrame(borrar);
    }
}

function borrar(){
    wait(700);
    for(c=0;c<4;c++){
    document.getElementById(secuenciaBotones[c]).style.backgroundColor='#5F5F5F';
    }
    c=0;
}
function secuenciaUsuario(x){
    secuenciaU.push(x);
}

function corroborar(){
    if(secuenciaU[0]==secuenciaBotones[0] & secuenciaU[1]==secuenciaBotones[1] & secuenciaU[2]==secuenciaBotones[2] & secuenciaU[3]==secuenciaBotones[3]){
        alert('WIN')
        document.getElementById("puntaje").innerText=`${p+10}${'pts'}`;
        p=p+10;
        secuenciaU=[];
        secuenciaBotones=[]
    }else{
        alert('GAME OVER')
        secuenciaU=[];
        secuenciaBotones=[]
        p=0;
        document.getElementById("puntaje").innerText=`${p}${'pts'}`;
    }
}

function borrartodo(){
    secuenciaU=[];
    secuenciaBotones=[]
    secuenciaCol=[];
    p=0;
    document.getElementById("puntaje").innerText=`${0}${'pts'}`;
}
      
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }