

//buscar métodos
var numeroBoton;
var colorArray=[ '#0174DF','#B40431','#0489B1','#FFFF00','#FE9A2E',
                  '#FF0040','#82FA58','#FA5858','#AC58FA','#58FAD0'];

var botonArray=["uno","dos","tres","cuatro","cinco","seis","siete","ocho",
                "nueve","diez","once","doce","trece","catorce","quince","diez-seis",
                "diez-siete","diez-ocho","diez-nueve","veinte"];


//for(a=1;a<=4;a++)

function botonRandom(){
    numeroBoton=botonArray[Math.floor(Math.random() * 20)];
    colorRandom(numeroBoton);
}

function colorRandom(boton){
    document.getElementById(boton).style.backgroundColor=colorArray[Math.floor(Math.random() * 10)];
    setTimeout(botonGris,500);
    //luego poner esto adentro de un loop y contador de niveles
}

function botonGris(){
    document.getElementById(numeroBoton).style.backgroundColor='#5F5F5F';
}
