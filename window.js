//jerarquicamente el mas alto
    youtubeurl="https://youtube.com";
 //abrir una pestaña
    open(youtubeurl);
 //cerrar pestaña
    close("https://youtube.com");
 //verificar si la pestaña esta cerrada
    youtubeurl.closed;
 //detener sitio web
    window.stop();
 //imprimir
    print();
 //ventana de si or no devuelve true or false
    confirm("Confirmar");

 //devuelve un objeta de pantalla
    window.screen;
 //devuelve la distancia de la derecha de la pantalla con la derecha d ela ventana
    window.screenLeft;
 //devuelve la distancia de arriba de la pantalla con arriba de la ventana
    window.screenTop;
 //La posicion del scroll en el eje X
    window.scrollX
 //la posicion del scroll en el eje Y
    window.screenY
 //posicion en los dos ejes (X,Y)
    window.scroll(125,23);
    window.scrollTo(125,25);
 //cambio de tamaño de la ventana actual
    window.resizeBy();
    window.resizeTo();
 //mover la ventana
    window.moveBy();
    window.moveTo();

 //localizacion del archivo
   window.location.href;
//nombre del dominio
   window.location.hostname;
//nombre del path
   window.location.pathname;
//tipo de protocolo
   window.location.protocol;
//nuevo documento
   window.location.assign();

