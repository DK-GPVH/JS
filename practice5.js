class App{
    constructor(descarga,puntuacion,peso){
        this.descarga = descarga;
        this.puntuacion = puntuacion;
        this.peso =peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        }
    }
    cerrar(){
        if(this.iniciada== true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }

    instalar(){
        if(this.instalada == false){
            this.instalada =true;
            alert("App instalada correctamente");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("App desinstalada correctamente");
        }
    }
    info(){
        return `
        Descargas:  <b>${this.descarga}</b> <br> 
        Puntuacion: <b>${this.puntuacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        `
    }
}

const  app1 = new App("16.000","5 estrellas","5 mb");
const  app2 = new App("21.000","1 estrellas","15 mb");
const  app3 = new App("17.000","3 estrellas","45 mb");
const  app4 = new App("19.000","4 estrellas","65 mb");
const  app5 = new App("30.000","5 estrellas","55 mb");
const  app6 = new App("31.000","3 estrellas","35 mb");
const  app7 = new App("18.000","1 estrellas","15 mb");



document.write(`
    ${app1.info()} <br>
    ${app2.info()} <br>
    ${app3.info()} <br>
    ${app4.info()} <br>
    ${app5.info()} <br>
    ${app6.info()} <br>
    ${app7.info()} <br>

`)
