//necesitamos saber para que helado le alcanza el dinero que tiene cofla y sus amigos
dineroCofla = prompt("¿Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("¿Cuanto dinero tienes Roberto?");
dineroPedro = prompt("¿Cuanto dinero tienes Pedro?");

//funcion para convertir un string en number(integer)
dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

//condiciones para el dinero de Cofla
if (dineroCofla >= 0.6 &&  dineroCofla < 1)
{
    alert("Cofla ,Compra el helado de agua");
    alert("Y te sobran :" + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6)
{
    alert("Cofla, Compra el helado de crema");
    alert("Y te sobran :" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7)
{
    alert("Cofla, Compra el helado marca heladix");
    alert("Y te sobran :" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8)
{
    alert("Cofla, Compra el helado marca heladovich");
    alert("Y te sobran :" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9)
{
    alert("Cofla, Compra el helado marca helardo");
    alert("Y te sobran :" + (dineroCofla - 1.8)) ;  
}
else if (dineroCofla >= 2.9)
{
    alert("Cofla, Compra el helado con confites o el pote de 1/4 KG");
    alert("Y te sobran :" + (dineroCofla - 2.9));
}
else
{
    alert("Cofla, No tienes dinero suficiente");
}

//condiciones para el dinero de Roberto
if (dineroRoberto >= 0.6 &&  dineroRoberto < 1)
{
    alert("Roberto, Compra el helado de agua");
    alert("Y te sobran :" + (dineroRoberto - 0.6));
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6)
{
    alert("Roberto, Compra el helado de crema");
    alert("Y te sobran :" + (dineroRoberto - 1));
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7)
{
    alert("Roberto, Compra el helado marca heladix");
    alert("Y te sobran :" + (dineroRoberto - 1.6));
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8)
{
    alert("Roberto, Compra el helado marca heladovich");
    alert("Y te sobran :" + (dineroRoberto - 1.7));
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9)
{
    alert("Roberto, Compra el helado marca helardo"); 
    alert("Y te sobran :" + (dineroRoberto - 1.8));  
}
else if (dineroRoberto >= 2.9)
{
    alert("Roberto, Compra el helado con confites o el pote de 1/4 KG");
    alert("Y te sobran :" + (dineroRoberto - 2.9));
}
else
{
    alert("Roberto, No tienes dinero suficiente");
}

//condiciones para el dinero de Pedro
if (dineroPedro >= 0.6 &&  dineroPedro < 1)
{
    alert("Pedro, Compra el helado de agua");
    alert("Y te sobran :" + (dineroPedro - 0.6));
}
else if (dineroPedro >= 1 && dineroPedro < 1.6)
{
    alert("Pedro, Compra el helado de crema");
    alert("Y te sobran :" + (dineroPedro - 1));
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7)
{
    alert("Pedro, Compra el helado marca heladix");
    alert("Y te sobran :" + (dineroPedro - 1.6));
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8)
{
    alert("Pedro, Compra el helado marca heladovich");
    alert("Y te sobran :" + (dineroPedro - 1.7));
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9)
{
    alert("Pedro, Compra el helado marca helardo");
    alert("Y te sobran :" + (dineroPedro - 1.8));   
}
else if (dineroPedro >= 2.9)
{
    alert("Pedro, Compra el helado con confites o el pote de 1/4 KG");
    alert("Y te sobran :" + (dineroPedro - 2.9));
}
else
{
    alert("Pedro, No tienes dinero suficiente");
}