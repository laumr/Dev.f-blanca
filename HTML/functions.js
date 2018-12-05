/*function muestraMensaje(){
    var elInput=document.getElementById('elNombre').value;
    if(elInput.lenght>0)
        alert(`Hola ${elInput}`);
    if(elInput!=='')
        alert(`Hola ${elInput}`);      
}*/

//muestraMensaje();

function tablasM(){
    var suNumero=document.getElementById('elNumero').value;
    if(suNumero>0)
        creatablasM(suNumero);
}

function creatablasM(limite){
        var laTarjetaMadre=document.getElementById('laTarjeta');
        laTarjetaMadre.innerHTML='';
        
            for(a=1;a<=limite;a++){

                var tarjeta=document.createElement('div');
                tarjeta.classList.add('alineado');
                var titulo=document.createElement('h3');
                titulo.textContent=`Tabla del ${a}`;
                tarjeta.appendChild(titulo);
                
                for(i=1;i<=10;i++){
                    var parrafo=document.createElement('p');
                    parrafo.textContent=(`${a}x${i}=${i*a}`);
                    tarjeta.appendChild(parrafo);
                }
            laTarjetaMadre.appendChild(tarjeta);
            }
    
}
