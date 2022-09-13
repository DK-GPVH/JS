const Info = async()=>{
    try{
    let request = await fetch("json2sd.txt");
    let res = await request.json();
    let aprobados = document.createElement("DIV");
    aprobados.classList.add("aprobados");
    let desaprobados = document.createElement("DIV");
    desaprobados.classList.add("desaprobados");
    document.querySelector(".container").appendChild(aprobados).innerHTML= `Aprobados :${res.aprobados}`;
    document.querySelector(".container").appendChild(desaprobados).innerHTML= `Desaprobados :${res.desaprobados}`;
    }catch(e){
        let error = document.createElement("DIV");
        error.classList.add("error");
        document.querySelector(".container").appendChild(error).textContent="ERROR => Algo salio mal vuelva intentarlo mas tarde 7-7";
        
    }
}

document.querySelector(".getInfo").addEventListener("click",Info);

