class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.tamaño=tamaño;
        this.resoluciondecamara=rdc;
        this.ram=ram;
        this.encendido= false;
    }

    encender(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }else{
            alert("el celular ya esta apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
            this.encendido == false;
            alert("encendiendo");
            this.encendido == true;
        }else{
            alert("el celular esta apagado");
        }
    }

    tomarFoto(){
        alert(`foto tomada en un resolucion de: ${this.resoluciondecamara}`);
    }

    grabarVideo(){
        alert(`grabando video en ${this.resoluciondecamara}`);
    }

    mostrarInfo(){
        return `
        Color:  <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolucion de camara: <b>${this.resoluciondecamara}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>
        `
    }
    
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resoluciondecamaraextra=rdce;
    }
    grabarVideoLento(){
        alert(`estas grabando en camara lenta con resolucion : ${this.resoluciondecamara} + ${this.resoluciondecamaraextra}`);
    }
    reconocimientoFacial(){
        alert(`vamos a iniciar el reconocimiento facial`);
    }
    InfoAltaGama(){
        return this.mostrarInfo() + `Resolucion de Camara Extra: ${this.resoluciondecamaraextra}`
    }
}


const celular1 = new Celular("rojo","150g","5''","full hd","2GB");
const celular2 = new Celular("verde","200g","7''","full hd","4GB");
const celular3 = new Celular("aqua","200g","6''","hd","1GB"); 
const celular4 = new CelularAltaGama("platino","170g","6.2''","4k","3GB","hd");
const celular5 = new CelularAltaGama("gold","200g","6.5''","4k","4GB","full HD");
document.write(`
${celular1.mostrarInfo()} <br> 
${celular2.mostrarInfo()} <br>
${celular3.mostrarInfo()} <br>
${celular4.InfoAltaGama()} <br> <br>
${celular5.InfoAltaGama()} <br>
`); 

