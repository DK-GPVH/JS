//verifica la exsistencia de un error no sintactico
try{
    //enviar error forzado
    throw "soy un error";
}
//accion si encontro un error
catch(error){
    console.log(error);
}
//ejecucion forzada
finally{
    console.log("mostrame");
}