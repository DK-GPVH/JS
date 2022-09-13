let frutas  = ["🍅","🍆","🍇","🍒","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍒","🍏","🍐","🍑","🍒","🍓","🍒"];

//recorre el array con una funcion => forEach()
frutas.forEach((fruta) => document.write(fruta + "<br>"));

//recorre el array y puede crear otro array con ciertas cualidades de una funcion => filter()
let resul = frutas.filter(fruta => fruta == "🍒").join("//");

document.write("<br>"+ resul);