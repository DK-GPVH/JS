class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie},tengo ${this.edad} años y soy de color ${this.color}`;
    }

    //methodo
    verInfo(){
        document.write(this.info);
    }
}

//la herencia permite obtener todo de la otra clase y agregarle otras funciones o caracteristcas
//palabras => extends y  super
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    ladrar()
    {
        alert("¡WAW!");
    }
}

class Pajaro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    //un static se puede utilizar sin tener el cosntructor
    static silbido()
    {
        alert("¡silbido!");
    }
}


class Gato extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
    }
    set setRaza(newRaza)
    {
        this.raza= newRaza;
    }   
    get getRaza()
    {
        return this.raza;
    }
}

const perro = new Perro("perro",10,"marron","chihuahua");
const gato = new Gato ("gato",3,"negro","montes");

// document.write(perro.info);
// document.write(gato.info);
// document.write(pajaro.info);

perro.verInfo();
document.write(gato.getRaza);
Pajaro.silbido();

//acceder al set se realiza con igual y no como una funcion
gato.setRaza = "Angora";

document.write(gato.getRaza);

