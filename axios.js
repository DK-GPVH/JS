//libreria que automatiza XMLHttpsRequest 
//Por defecto es get
axios("http://www.etnassoft.com/api/v1/get/?id=589&callback=?").then(res=>console.log(res.data));
//Metodo post
axios.post("https://reqres.in/api/users",{
    "name" : "jorge",
    "job" : "Dev"
}).then(res=>console.log(res.data));