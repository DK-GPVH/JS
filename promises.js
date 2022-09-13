//son callbacks que representan la terminacion o fracaso de una operacion asincrona

let nombre = "pedro";

const promesa = new Promise((resolve,reject)=>{
    if(nombre !== "pedro") 
    reject ("Lo siento, el nombre no es pedro");
    else resolve(nombre);
})

promesa.then((resultado)=>{
    console.log(resultado)
}).catch(
    (e)=>{
        console.log(e)
    }
);


//ejercicio de anterior callback con promises

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

const obtenerPersona = (id)=>{
    return new Promise((res,rej)=>{
        if(personas[id]==undefined){
            rej("No se ha encontrado la persona");
        }else {
            res(personas[id]);
        }
    })
}

const obternerGmail = (id)=>{
    return new Promise((res,rej)=>{
        if(personas[id].gmail==undefined){
            rej("No se ha encontrado el instagram");
        }else {
            res(personas[id].gmail);
        }
    })
}



obtenerPersona(0).then((persona)=>{
    console.log(persona.nombre);
    return obternerGmail(0);
}).then((mail)=>{
    console.log(mail);
}).catch(
    (e)=> {console.log(e);}
)
    




