//GET
const request = new XMLHttpRequest();

request.addEventListener("load",()=>{
    if(request.status == 200){
        console.log(JSON.parse(request.response));
    }else{
        console.log(request.status);
    }
})

request.open("GET","json.txt");

request.send();

//versiones antiguas de navegador
 // request = new ActiveXObject("Microsoft.XMLHTTP")

//POST
const requestpost = new XMLHttpRequest();
requestpost.addEventListener("load",()=>{
    if(requestpost.status == 201){
        console.log(JSON.parse(requestpost.response));
    }else{
        console.log(requestpost.status);
    }
})

requestpost.open("POST","https://reqres.in/api/users");

requestpost.setRequestHeader("Content-type","application/json;charset=UTF8");

requestpost.send(JSON.stringify({
    
        "name": "Xavier",
        "job": "Front-End"
    
}));
