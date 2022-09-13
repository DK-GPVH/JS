const sumar = (num1,num2) =>
{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2) =>
{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2) =>
{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2) =>
{
    return parseInt(num1) * parseInt(num2);
}

const potenciar = (num,exp) =>
{
    return numero ** exp;
}

const raizCuadrada = (num) =>
{
    return Math.sqrt(num);
}

const raizCubica = (num) =>
{
    return Math.cbrt(num);
}

alert("¿Qué operción deseas realizar?");
operacion = prompt("1 : suma, 2 : resta, 3 : división, 4 : multiplicación, 5 : potenciar, 6 : raiz cuadrada, 7 : raiz cubica");

if (operacion == 1)
{
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo niumero para sumar");
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 2)
{
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo niumero para restar");
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3)
{
    let numero1 = prompt("Primer número para dividir");
    let numero2 = prompt("Segundo niumero para dividir");
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 4)
{
    let numero1 = prompt("Primer número para multiplicar");
    let numero2 = prompt("Segundo niumero para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 5)
{
    let numero1 = prompt("Número para potenciar");
    let numero2 = prompt("Numero de potencia");
    resultado = potenciar(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 6)
{
    let numero1 = prompt("Obtener raiz cuadrada de :");
    resultado = raizCuadrada(numero1,numero2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 7)
{
    let numero1 = prompt("Obtener raiz cubica de :");
    resultado = raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
}
else
{
    alert("No existe una operacion para este numero");
}