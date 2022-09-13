//funcion asincrona y de awwait de espera

const obtenerInfo = (text)=>{
    return new Promise((res,rej)=>{
        setTimeout( ()=>{res(text)},Math.random()*2000)
    })
} 

const mostrarData = async ()=>{
    data1 = await obtenerInfo("Pedro");
    data2 = await obtenerInfo("Ricky");
    data3 = await obtenerInfo("Oscar");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();