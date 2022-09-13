let name = document.querySelector("#Nombre");
let mail = document.querySelector("#Mail");
let materia = document.querySelector("#Materia");
let button = document.querySelector("#btn");
let message = document.querySelector(".message");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        message.innerHTML = error[1];
        message.classList.add("error");
    }else{
        message.innerHTML = "Solicitud enviada correctamente";
        message.classList.remove("error");
        message.classList.add("success");
    }
})


const validarCampos = ()=>{
    let error = [];
    if(name.value.length < 5 || name.value.length > 40){
        error[0] = true;
        error[1] = "Nombre invalido";
        return error;
    }else if (mail.value.length < 5 || mail.value.length > 120 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "Email invalido";
        return error;
    }else if (materia.value.length < 5 || materia.value.length > 120){
        error[0] = true;
        error[1] = "Materia inexistente";
        return error;
    }
    error[0] = false;
    return error;
}