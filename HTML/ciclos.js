

/*
for(conta=0; conta<100; conta++){
    console.log('Me canso ganzo'+conta);
}   */


for(a=1;a<=10;a++){
    for(i=1;i<=10;i++){
    /*console.log("ax"+i+"="+(i*1));*/
    console.log(`${a}x${i}=${i*a}`);    
    }
}

/*var elBoton=document.createElement('button');
elBoton.textContent="Este es mi botón";
var elBody=document.getElementsByTagName('body') [0];
elBody.appendChild(elBoton);*/

var elBody=document.getElementsByTagName('body') [0];
for(a=1;a<=100;a++){
    var elBoton=document.createElement('button');
    elBoton.textContent="Este es mi botón";
    elBody.appendChild(elBoton);
}