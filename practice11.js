let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto} y el ancho es ${ancho}`);

if(comprar){
    alert("compra realizada exitosamente");
}else{
    alert("compra cancelada");
}

document.write(` :` + window.screen.colorDepth +`<br>`);
document.write(`Href :` + window.location.href +`<br>`);
document.write(`Pathname :` + window.location.pathname +`<br>`);
document.write(`Hostname :` + window.location.hostname +`<br>`);
document.write(`Protocol :` + window.location.protocol +`<br>`);


