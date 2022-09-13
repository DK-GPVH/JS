const inscribirAlumno = (materia,alumno)=>{
    materias = {
        fisica : {alumnos : ["Oscar"]},
        quimica : {alumnos : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20]},
        mate : {alumnos :[]}
    }
    if(materias[materia]["alumnos"].length < 20)
    {
        materias[materia]["alumnos"].push(alumno);
        return `El alumno ${alumno} ah sido inscrito satisfactoriamente en ${materia}`;
    }else{
        return `Su inscripcion nose realizo por que El curso ya alcanzo el limite de alumnos`
    }

}

let nombre = prompt("Nombre del alumno a inscribir");
nombre = nombre.toUpperCase();
let curso = prompt("Materia a la que se desea inscribir");
curso = curso.toLowerCase();

document.write(inscribirAlumno(curso,nombre));