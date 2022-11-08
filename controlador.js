//CONTROLANDO ETIQUETAS CON EL DOM

//1. ALMACENAR EN MEMORIA (CREAR UNA VARIABLE)
//LA ETIQUETA QUE QUIERO CONTROLAR
let etiquetaImagen=document.getElementById("fotografia")
//2. CONTROLANDO NUESTARS ETIQUETAS
//2.1 Controlar es cambiar la fuente (SRC) de una etiqueta
etiquetaImagen.src="./img/dragon2.png"

//2.2 Controlar es cambiar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//2.3 controlar es agregar estilos 
etiquetaTitulo.classList.add('fuente','alineado')

//2.4 controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove('text-danger')

//2.5 controlar es DETECTAR EVENTOS
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})