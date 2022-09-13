const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre :"Fisica",
        nota: 4 
    },
    {
        nombre :"Calculo",
        nota: 4 
    },
    {
        nombre :"BD",
        nota: 7 
    },
    {
        nombre :"Quimica",
        nota: 10 
    },
    {
        nombre :"Estructura de bd",
        nota: 0 
    }
]

const obtenerMateria = (id) =>{
    return new Promise((res,rej)=>{
        materia = materias[id];
        if(materia == undefined) rej("La materia no existe");
        else setTimeout(()=>{res(materia)},Math.random()*400);
    })
}

const devolverMaterias = async()=>{
    let materia;
    for(var i=0;i<materias.length;i++){
        materia = await obtenerMateria(i);
        if(materia.nota<6){
        materiaHTML = `<div class="materia">
        <div class="nombre">${materia.nombre}</div>
        <div class="nota red">${materia.nota}</div>
        </div>`
        }else{
        materiaHTML = `<div class="materia">
        <div class="nombre">${materia.nombre}</div>
        <div class="nota green">${materia.nota}</div>
        </div>`
        }
        materiasHTML.innerHTML += materiaHTML;
    }
}


devolverMaterias();