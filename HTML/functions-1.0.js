function muestraMensaje(){
    var elInput=document.getElementById('elNombre').value;
    if(elInput.lenght>0)
        alert(`Hola ${elInput}`);
    if(elInput!=='')
        alert(`Hola ${elInput}`); 
}     