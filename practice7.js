const obtenerInformacion = (materia) =>
{
    materias = {
        fisica : {nombre:["Fisica"],profesor : ["Perez"], alumnos : ["Pedro","Pepito","Cofla","Maria"]},
        programacion : {nombre:["Programacion"],profesor : ["Dalto"], alumnos : ["Pedro","Pepito","Maria"]},
        logica : {nombre:["Logica"],profesor : ["Rodriguez"], alumnos : ["Pedro","Pepito","Juan","Cofla","Maria"]},
        quimica : {nombre:["Quimica"],profesor : ["Kroos"], alumnos : ["Pedro","Pepito","Juan","Cofla","Maria"]}
    }

    if(materias[materia] !== undefined){
        return materias[materia];
    }else{
        return materias;
    }
}

let parameter = prompt("Que materia desea consultar");
parameter = parameter.toLowerCase();
result = obtenerInformacion(parameter);

if(result !== materias){
document.write(`${result["nombre"]} <br> <b>Docente encargado</b> : ${result["profesor"]} <br> <b>Alumnos</b> : ${result["alumnos"]}`);
}else{
    alert(`La materia ${parameter} no existe`);
}


let student = prompt("Sobre que alumno desea consultar")
const cantidadClases = (alumno) =>
{
    let resultado = obtenerInformacion();
    let cantidad = 0;
    let clasespresentes=[];
    for (info in resultado){
        if(resultado[info]["alumnos"].includes(alumno))
        {
            cantidad++;
            clasespresentes.push(" " + info)
        }
    }
    return `<br> <b>${alumno}</b> esta en <b>${cantidad}</b> clases; estas son : <b>${clasespresentes}</b> <br><br>`;
}

document.write(cantidadClases(student));