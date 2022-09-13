const button = document.querySelector("#enviar-nota");

button.addEventListener("click",(e)=>{
    let resultado,mensaje;
    try{
        let not1 = parseInt(document.getElementById('nota-alumno1').value);
        let not2 = parseInt(document.getElementById('nota-alumno2').value);
        let numresultado = parseInt(document.getElementById('nota-alumno3').value);
        if(isNaN(numresultado) || isNaN(not1) || isNaN(not2)){
            throw "No es un valor numerico";
        }
        mensaje = definirmensaje(not1,not2,numresultado);
        resultado = promediodeaprobacion(not1,not2,numresultado);
    }catch(e){
        resultado = "Error";
        mensaje = "Intentaste realizar una accion no recomendada";
    }

    abrirModal(resultado,mensaje);
})
const definirmensaje = (nota1,nota2,par) =>{
    let resultado;
    switch(Math.round((nota1+nota2+par)/3)){
        case 0 : resultado = "El peor resultado";
        break;
        case 1 : resultado = "El segundo peor resultado";
        break;
        case 2 : resultado = "Hay mucho que mejorar";
        break;
        case 3 : resultado = "Tenemos que mejorar";
        break;
        case 4 : resultado = "Podemos mejorar";
        break;
        case 5 : resultado = "Un resultado neutral";
        break;
        case 6 : resultado = "Mejoraras con el tiempo";
        break;
        case 7 : resultado = "Lo vas haciendo bien";
        break;
        case 8 : resultado = "Casi lo estas logrando";
        break;
        case 9 : resultado = "Lo lograste pero puede ser perfecto";
        break;
        case 10 : resultado = "El resultado perfecto";
        break;
        default: null;
    }
    return resultado;
}

const promediodeaprobacion=(nota1,nota2,par)=>{
    let promedio = (nota1 + nota2 + par)/3;
    if(promedio >=7){
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'> DESAPROBADO</span>";
}

const abrirModal = (res,msg) =>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation  ="aparecer 1s forwards";
}
