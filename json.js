//sintaxis de un json (objeto con comillas)
    let sintax = {
        "value1" : "JUNIOR",
        "value2" : "FRONTEND DEVELOPER"
    }
//json serializado
let ser = `{"value1":"SENIOR","value2":"FULL STACK DEVELOPER"}`
//json deserializado
let des = {"value1":"SEMI-SENIOR","value2":"BACKEND DEVELOPER"}

//deserializar un json
let des_ser = JSON.parse(ser);

console.log(des_ser);

//serializar un json
let ser_des = JSON.stringify(des);

console.log(ser_des);