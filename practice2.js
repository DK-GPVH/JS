let cantidad = prompt("¿Cuantos alumnos son en total?");
let alumnosTotales = [];

for ( i = 0; i < cantidad; i++)
{
    alumnosTotales[i] = [prompt(`Nombre del alumno ${i + 1}`),0];
}

const tomarAsistencia = (nombre,p) => 
{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P")
    {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++)
{
    for(alumno in alumnosTotales)
    {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for(alumno in alumnosTotales)
{
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    __________Presentes: ${alumnosTotales[alumno][1]} <br>
    __________Ausentes: ${30 - alumnosTotales[alumno][1]} <br>`;
    if(30 - alumnosTotales[alumno][1] > 18)
    {
        resultado += "<br>REPROBADO POR INASISTENCIA";
    }
    document.write(resultado);
}