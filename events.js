let button = document.querySelector(".button");

//crear event listener
button.addEventListener("click", () => {
    alert("hola");
})

//remover event listener

button.addEventListener("click", hola)

function hola(){
    alert("remove");
    button.removeEventListener("click",hola);
}

//los eventos son de especificidad a menos especificidad => eventflow

let contenedor = document.querySelector(".container");

    //se ejecutara segundo
contenedor.addEventListener("click",()=>{alert("container")});
    //se ejecutara primero
button.addEventListener("click",()=>{alert("button")});


//invertir el eventflow

    //se ejecutara primero
contenedor.addEventListener("click",()=>{alert("container")},true);
    //se ejecutara segundo
button.addEventListener("click",()=>{alert("button")});

//detener la propagacion
button.addEventListener("click",(e)=>{
    alert("button");
    e.stopPropagation();
});



// => eventos del mouse ()

 //Click
 button.addEventListener("click",()=>{alert("button")});
 //Doubleclick
 button.addEventListener("dblclick",()=>{alert("button")});
 //mouseover => entrada en el elemento
 button.addEventListener("mouseover",()=>{alert("button")});
 //mouseover => salida en el elemento
 button.addEventListener("mouseout",()=>{alert("button")});
 //contextmenu => click derecho
 button.addEventListener("contextmenu",()=>{alert("button")});
 //mouseenter =>  entrada en el elemento ejecucion infinita
 button.addEventListener("mouseenter",()=>{alert("button")});
 //mouseleave  => entrada en el elemento ejecucion infinita
 button.addEventListener("mouseleave",()=>{alert("button")});
  //mousemove => movimiento en los elementos
 button.addEventListener("mousemove",()=>{alert("button")});
  //mousedown => apretar en el elemnto
 button.addEventListener("mousedown",()=>{alert("button")});
  //mouseup => soltar en el elemento
 button.addEventListener("mouseup",()=>{alert("button")});




// => eventos del teclado ()
    let input = document.querySelector("#input");
    //presionar tecla
    input.addEventListener("keydown",(e)=>{ console.log("tecla presionada");});
    //presionar y soltar tecla
    input.addEventListener("keypress",(e)=>{console.log("tecla presionada y soltada");});
    //soltar tecla
    input.addEventListener("keyup",(e)=>{console.log("tecla soltada");});

// => eventos de interfaz ()
    //sucede un error
    input.addEventListener("error",(e)=>{console.log("error en input");});
    //carga del sitio
    addEventListener("load",(e)=>{console.log("sitio cargado")});
    //antes de salir del sitio
    addEventListener("beforeunload",(e)=>{console.log("salida")});
    //salida del sitio
    addEventListener("unload",(e)=>{console.log("salida")});
    //cuando se actualiza el tamaño 
    addEventListener("resize",(e)=>{console.log("resolucion actualizada")});
    //scroll 
    addEventListener("scroll",(e)=>{console.log("scroll")});
    //seleccion 
    addEventListener("select",(e)=>{console.log(`${e.target.selectionStart}`)})
    

// => Timers
    //ejecutar en n segundos
    const Timeout = setTimeout(()=>{document.write("hello")},2000);
    //terminar Timeout
    clearTimeout(Timeout);
    //ejecutar cada n segundos
    const Interval = setInterval(()=>{document.write("intervalo")},2000);
    //terminar Interval
    clearInterval(Interval);
    



