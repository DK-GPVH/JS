let numero = 0;
 //reconocimiento de darkmode
if(window.matchMedia('(prefers-color-theme: dark)').matches == false )
{
    alert("DARK MODE")
}
while (numero < 1000) 
{
    numero ++;
    document.write(numero +"<br>");
    if (numero == 10)
    { 
        //hace que el bucle finalice
        break;
    }
}

forHola: //sirve para nombrar nombrar un for (forlabel)
for(let i = 0 ; i < 20; i++)
{
    if (i % 2 == 0) 
    {
        //permite saltar el nuemro en especifico sin finzalizar el bucle
        continue forHola;
    }
    document.write("impar : " + i + "<br>");
} 

let animales = ["gallito de las rocas", "perro", "gato", "loro", "rinoceronte"];
animales.edad = 20;

//for in recorre y adopta los indices y propiedades dentro del array
for(animal in animales)
{
    document.write(animal + "<br>");
}
    document.write("<br>");
//for of recorre y adopta los elemnetos del array (excluyes las propiedades)
for(animal of animales)
{
    document.write(animal + "<br>");
}