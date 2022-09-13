let nombres = ["pedro","maria","jorge"];

//elimina el ultimo elemento de array y lo muestra => poop
let resultado = nombres.pop();

//elimina el primer elemento de un array y lo muestra = shift
resultado = nombres.shift();

//agrega un elementos al array y muestra los indices  => push
resultado = nombres.push("hola");

//invierte el orden de los elementos de un array => reverse()
resultado = nombres.reverse();

//agrega elementos al array al inicio y devuelve los indices => unshift()
resultado = nombres.unshift(1,2,3);

//ordena el array => sort()
resultado = nombres.sort();

//eliminar elementos desde un indice y remplaza los elemtos => splice(indice de comienzo,cantidad de elementos eliminados,elementos a agregar o remplazar)
resultado = nombres.splice(1,4,"siuu");

//crea un string del array y agregas un separador => join()
resultado = nombres.join("-/-");

//crea un array pero desde ciertos indices => slice(indice de inicio, indice final el elmento no se incluye)
resultado = nombres.slice(1,6);

//includes , indexof ,lastIndexOf, toString funcionan igual a los metcadenas


