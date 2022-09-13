const container = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio){
        img = `<img class="llave-img" src="llave.png">`;
        nombre = document.createElement("H2").innerHTML = `${nombre}`;
        modelo = document.createElement("H3").innerHTML = `${modelo}`;
        precio = document.createElement("P","B").innerHTML = `$${precio}`;
        
        return [img,nombre,modelo,precio];
    }

    let documentFragment = document.createDocumentFragment();

    for(var i = 1; i <= 20; i++){
        let modeloRandom = Math.round(Math.random()*1000);
        let precioRandom = Math.round(Math.random()*10+20);
        let llave = crearLlave(`<br>llave ${i}<br>`,`<br>modelo ${modeloRandom}<br>`,precioRandom);
        let div = document.createElement("DIV");
        div.addEventListener("click", () =>{
            document.querySelector(".key-data").value = modeloRandom;
        })
        div.tabIndex = i;
        div.classList.add(`item-${i}`,`flex-item`);
        div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
        documentFragment.appendChild(div);
    }

    container.appendChild(documentFragment);

