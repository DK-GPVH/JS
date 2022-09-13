let cadena ="cadena de prueba";

//concatenar strings => concat
let resultado = cadena.concat("Hola");


//verifica el comienzo del string  => stasrtsWith
resultado=cadena.startsWith("cadena");

//verifica eñ termino del string => endsWith
resultado = cadena.endsWith("prueba");

//verifica su existencia en el string => includes
resultado = cadena.includes("a de p");

//verifica su existencia en el string y devuelve su posicion de comienzo => indexOf
resultado = cadena.indexOf("a de p");

//verifica su existencia en el string y devuelve su posicion al teminar=> lastindexOf
resultado = cadena.lastIndexOf("a de p");

//rellenar el principio con caracteres al comienzo => padStart(tamaño de caracteres,relleno deseado);
resultado = cadena.padStart(41,"12");

//rellenar el final con caracteres al comienzo => padStart(tamaño de caracteres,relleno deseado);
resultado = cadena.padEnd(10,"ab");

//repetir las cadenas => repeat
resultado = cadena.repeat(5);

//divide la cadena => split
let cadena2 = "Hola, Buenas Tardes, Tengo una consulta"
let resultado2 = cadena2.split(",");

//extrae un string a partir de otro => substring(comienzo del indice, temino del indice'no se incluye')
resultado2 = cadena2.substring(0,12);

//convertir a minuscula => toLowerCase
resultado2 = cadena.toLowerCase();

//convertir a mayuscula =>toUpperCase
resultado2 = cadena2.toUpperCase();

//convertir a string => toString()

//eliminar espacios en blanco => trim()
resultado2 = cadena2.trim();

//eliminar los espacios en blanco del final => trimEnd()

//eliminar los espacios en blanco del comienzo => trimStart()





















