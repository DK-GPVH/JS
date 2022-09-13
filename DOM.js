//nodos

//Seleccion de elementos
parrafo = document.getElementsByTagName("p");
parrafo2 = document.getElementById("parraf");
document.write(parrafo);
document.write(parrafo2);

//querySelector => utiliza la seleccion de css
parrafo3 = document.querySelector(".parrafo");
document.write(parrafo3);


parrafos = document.querySelectorAll(".parrafo");
document.write(parrafos); //=>devuelve una lista de nodos


//modificar 

const mod  = document.querySelector(".input");

mod.setAttribute("type","range");

//capturar

const mod2 = document.querySelector(".input");

type = mod2.getAttribute("type");

document.write(type);

//remover
const mod3 = document.querySelector(".input");
mod3.removeAttribute("type");

//atributos globales
const mod4 = document.querySelector(".title");
    //volver el texto editable
mod4.setAttribute("contenteditable","true");
    //modo de lectura
mod4.setAttribute("dir","rtl");
    //orden tab
mod3.setAttribute("tabindex","2");
mod4.setAttribute("tabindex","3");
    //mostrat titulo
mod4.setAttribute("title","=> esto es un titulo");
mod3.setAttribute("title"," => [esto es un titulo] para el input");

//atributos de input
const input= document.querySelector("#inputprueba");
    //cambio de tipo de input
input.type = "file";
    //cambio nombre de clase
input.className;
    //formato de aceptacion
input.accept = "image/png";
    //agregar a un formulario
//input.form
    //cantidad de caracteres
    input.type = "text";
    input.minLength = "4";
    input.maxLength = "6";
    //texto mostrado inicialmente
    input.placeholder = "Escriba";
    //requerimientos
    input.required = " ";
document.write("<br>"+input.className+"<br>")

//atributos style

const subtitle=document.querySelector("#subtitle");

subtitle.style.color = "aqua";
subtitle.style.backgroundColor = "blue";
subtitle.style.padding = "3em";

//classlist
    //añade clase
subtitle.classList.add("grande")
    //remover clase
subtitle.classList.remove("grande");
    //capturar los items de la clase
subtitle.classList.add("HOLa");
subtitle.classList.add("Grande");
subtitle.classList.add("Circular");
document.write(subtitle.classList.item(2)+"<br>");
    //validar el contenido de la clase
document.write(subtitle.classList.contains("Circular")+"<br>");

    //si existe remueve si no agrega => els egundo parametro fuerza el agregado o eliminar 
subtitle.classList.toggle("Circular",true);
    //remplazar la clase
subtitle.classList.replace("Grande","pequeño")


//elementos
    //texto del nodo
const Hello = document.querySelector(".hello");
document.write(Hello.textContent);
    //devuelve texto visible
document.write(Hello.innerText);
    //html dentro del nodo
alert(Hello.innerHTML);
    //html de todo el nodo
alert(Hello.outerHTML);

//creacion de elementos
const conteiner = document.querySelector(".contain")
    //reconoce mayusculas
const item = document.createElement("LI");
    //crear texto
const textItem = document.createTextNode("Item text");
    //heredar datos 
item.appendChild(textItem);
conteiner.appendChild(item);

item.innerHTML = "Hola como estas";

    //pila de elementos 

    const fragmento = document.createDocumentFragment();
    for(i=0;i<15;i++){
        const item = document.createElement("LI");
        item.innerHTML = "Hola soy otro elemnto";
        fragmento.appendChild(item);
    }
    conteiner.appendChild(fragmento);

//childs
    //primer nodo
    console.log(conteiner.firstChild);
    //primer elemento
    console.log(conteiner.firstElementChild);
    //ultimo nodo
    console.log(conteiner.lastChild);
    //ultimo elemento
    console.log(conteiner.lastElementChild);
    //lista de nodos
    console.log(conteiner.childNodes);
    //lista de elementos
    console.log(conteiner.children);

//metodos de child
    //reemplazar childs
    reemplazo = document.createElement("H2");
    reemplazo.innerHTML = "SOY EL REMPLAZO"
    antiguo = conteiner.firstElementChild;
    conteiner.replaceChild(reemplazo,antiguo);
    //eliminar childs
    conteiner.removeChild(reemplazo);
    //existencia de childs
    console.log(conteiner.hasChildNodes())
//parents
    hijo = document.querySelector(".child");
    //mostrar el elemento padre del elemnto o nodo
    console.log(hijo.parentElement);
    //mostrar el nodo padre del elemnto o nodo
    console.log(hijo.parentNode);
//siblings (hermanos)
    //siguiente nodo
    console.log(hijo.nextSibling);
    //anterior nodo
    console.log(hijo.previousSibling);
    //siguiente elemento
    console.log(hijo.nextElementSibling)
    //anterio elemento
    console.log(hijo.previousElementSibling)
    //elemento ascendente mas cercano (padre mas cercano)
    console.log(hijo.closest(".contain"));