//peticion por defecto get formato json
fetch("json.txt").then(res =>res.json()).then(res=>console.log(res));
//peticion por defecto get formato text
fetch("json.txt").then(res =>res.text()).then(res=>console.log(res));
//peticion por defecto get formato blob
fetch("json.txt").then(res =>res.blob()).then(res=>console.log(res));


//metodo post
fetch("https://reqres.in/api/users",{
    method : "POST",
    body: JSON.stringify({
        "name" : "Sergio",
        "job" : "Devops"
    }),
    headers : {"Content-type" : "application/json"}
}).then(res=>res.json()).then(res=>console.log(res));

let img = document.querySelector(".img");

fetch("http://www.etnassoft.com/api/v1/get/?id=589&callback=?").then(res=>res.json()).then(res=> img.src = res[0].thumbnail)