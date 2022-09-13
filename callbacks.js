//funccion dentro de otra funcion
function prueba(callback){
    callback("Soy un callback");
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);

    //se puede hacer de esta manera

prueba(nombre => console.log(nombre));

//practica

class Persona{
    constructor(nombre,gmail){
        this.nombre=nombre;
        this.gmail=gmail;
    }
}


const pre_personas = [
    ["Sergio"],
    ["Oscar","Oscarin@gmail.com"],
    ["Franco","lopez@gmail.com"],
    ["Miguel","mike@gmail.com"],
];

const personas = []
for(let i = 0 ; i<pre_personas.length; i++){
    personas[i] = new Persona(pre_personas[i][0],pre_personas[i][1]);
}


const obtenerPersona = (id,cb)=>{
    if(personas[id] == undefined){
        cb("No se encontro la persona");
    }else if(personas[id].gmail == undefined){
        cb(`${personas[id].nombre} No se encontro el gmail`);
    }else{
        cb(null,personas[id]);
    }
}


obtenerPersona(1,(err,persona)=>{
    if(err){
        console.log(err)
    }else{
        console.log(persona.nombre);
        console.log(persona.gmail);
    }
})


