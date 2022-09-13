let materias = {
    fisica:  { name : ["Fisica"], porcentajes : [90,6,4]},
    matematica:{ name : ["Matematica"], porcentajes : [84,8,2]},
    logica :{ name : ["Logica"], porcentajes : [91,8,4]},
    biologia :{ name : ["Biologia"], porcentajes : [75,9,5]},
    algebra:{ name : ["Algebra"], porcentajes : [75,6,4]},
    estadistica:{ name : ["Estadistica"], porcentajes : [100,7,5]},
}

const aprobar = () => {
    for (materia in materias){
        let asistencias = materias[materia]["porcentajes"][0];
        let promedio = materias[materia]["porcentajes"][1];
        let trabajos = materias[materia]["porcentajes"][2];
        console.log(materias[materia]["name"][0]);
        if (asistencias >= 90){
            console.log("%c  Asistencias aprobado","color:green");
        }else{
            console.log("%c  Falta de asistencias","color: red");
        }
        if(promedio >= 7){
            console.log("%c  Promedio aprobado","color:green");
        }else{
            console.log("%c  Promedio desaprobado","color:red");
        }
        if(trabajos >= 3){
            console.log("%c  Trabajos aprobado" , "color:green");
        }else{
            console.log("%c Falta de tranajos","color:red");
        }
        console.table([materias[materia]["name"][0],`Asistencias : ${asistencias}`,`Promedio : ${promedio}`,`Trabajos : ${trabajos}`]);
        //console.table({Materia : { nombre : `${materias[materia]["name"][0]}` , promedios : { asistencias : `${asistencias}`, promedio : `${promedio}`, trabajos: `${trabajos}` }}});
    }
}

aprobar();