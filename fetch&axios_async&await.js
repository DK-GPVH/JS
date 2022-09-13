//funcion asincrona con peticion fetch
const getName = async()=>{
    let request = await fetch("json.txt");
    let res = await request.json() 
    let name = document.createElement("DIV");
    name.classList.add("name");
    
    document.querySelector(".container").appendChild(name).innerHTML=res.Nombre;
}


document.getElementById("obtenerNombre").addEventListener("click",getName);


//funcion asincrona con peticion axios
const getNameAx = async()=>{
    let request = await axios("json.txt"); 
    let name = document.createElement("DIV");
    name.classList.add("name");
    
    document.querySelector(".container").appendChild(name).innerHTML=request.data.Nombre;
}


document.getElementById("obtenerNombre").addEventListener("click",getNameAx);