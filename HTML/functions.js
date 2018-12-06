/**
 * Esta práctica genera tablas de multiplicar según el input del usuario
 * Temas a aplicar: 
 * Ciclos for
 * Leer elementos de HTML
 * Crear Elementos de HTML
 * 
 * @author Laumr2991
*/


/**
 * Esta función saca o lee el input del usuario , 
 * lo almacena en la variable y valida que sea mayor a cero.
 */

function tablasM(){
    //Sacamos el dato del input:
    var suNumero=document.getElementById('elNumero').value;
    
    //Validamos que sea mayor a cero:
    if(suNumero>0)
        creatablasM(suNumero); //Ejecutamos la función y enviamos el parámetro que es la variable en la que guardamos el input
}

/**
 * Esta función recibe un número como parámetro. El límite para crear tablas
 * @param {numero} limite 
 */

function creatablasM(limite){
    //Obtenemos el contenedor donde irá todo:
        var laTarjetaMadre=document.getElementById('laTarjeta');
        laTarjetaMadre.innerHTML=''; //nos aseguramos que cada que se ejecute se vacíe el contenedor
        
            //Iniciamos el primer ciclo, la cantidad de tablas según el input del usuario.
            for(a=1;a<=limite;a++){

                //Genero un div contenedor de tarjetas:
                var tarjeta=document.createElement('div');
                //tarjeta.classList.add('alineado');

                //Genero un título para cada tarjeta:
                var titulo=document.createElement('h4');
                titulo.textContent=`Tabla del ${a}`;
                
                //Agrego el título a la tarjeta: 
                tarjeta.appendChild(titulo);

                //Comienzo el ciclo para las multiplicaciones de cada tabla:
                for(i=1;i<=10;i++){
                    //El texto lo pongo en un párrafo:
                    var parrafo=document.createElement('p');
                    parrafo.textContent=`${a} x ${i} = ${i*a}`;
                    //Agrego el texto a la tarjeta: 
                    tarjeta.appendChild(parrafo);
                }
            //Agrego la tarjeta al contenedor:     
            laTarjetaMadre.appendChild(tarjeta);
            }
    
}
