//Mensaje de afirmacion falsa.
console.assert(3>5);

//limpieza de consola
console.clear();

//mensaje de error
console.error("ERROR");

//mensaje de informacion
console.info("INFO");

//mensaje en la consola
console.log("MESSAGE");

//muestra una tabla
console.table(["🍅","🍆","🍇"]);

//mensaje de advertecia
console.warn("ADV");

//muestra de tipo de datos
console.dir(["hola"]);

//conteo de ejecucion
console.count();
console.count();
console.count();

//reseteo del conteo de ejecucion abierto
console.countReset();
console.count();
console.count();

//nuevo grupo de ejecucion
console.group("Frutas");
console.log("Estoy en frutas");
console.count();
console.log("Estoy en frutas");
console.count();
console.log("Estoy en frutas");
console.count();
console.countReset();

//salir del grupo de ejecucion
console.groupEnd();

//nuevo grupo de ejecucion cerrado
console.groupCollapsed("Verduras");
console.log("Estoy en verduras");
console.count();
console.log("Estoy en verduras");
console.count();
console.log("Estoy en verduras");
console.count();
console.countReset();
console.groupEnd();

//iniciar temporizador
console.time();

//muestra el tiempo despues de inicio del temporizador
console.timeLog();

//finaliza el temporizador
console.timeEnd();

//modifica estilos
console.log("%cHi!","color:red;background:yellow;margin:2em;padding:20px");