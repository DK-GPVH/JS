const alumnos = [{
    nombre : "Jorge Pelares",
    email : "pelares@gmail.com",
    materia : "tonalidad 6"    
},{
    nombre : "Lucas Christensen",
    email : "l_christensen@gmail.com",
    materia : "deportes"    
},{
    nombre : "Enrique Malson",
    email : "em3454@gmail.com",
    materia : "pintura"    
},{
    nombre : "Albert Human",
    email : "albert@gmail.com",
    materia : "ciencias 4"    
},{
    nombre : "Manuel Arrizabalaga",
    email : "manu_arri@gmail.com",
    materia : "quimica 5"    
},{
    nombre : "Matheus Fusshi",
    email : "math@gmail.com",
    materia : "amtematicas aplicadas 3"    
}];


const boton = document.querySelector(".button");
for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `<div class="grid-items nombre">${nombre}</div>
    <div class="grid-items email">${email}</div>
    <div class="grid-items materia">${materia}</div>
    <div class="grid-items semana">
        <select class="semana-elegida">
            <option value="semana 1">SEMANA 1</option>
            <option value="semana 2">SEMANA 2</option>
        </select>
    </div>`
    document.querySelector(".grid-container").innerHTML += htmlCode;
}

boton.addEventListener("click",()=>{
    let Confirmar = confirm("¿Desea guardar cambios?");
    if(Confirmar){
        let elementos = document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanaElegida[elemento].value; 
        }
    }{
        
    }
   
})