let numeroIntegrantes= parseInt(prompt("ingrese la cantidad de miembros de su familia"))
let totalEdades = 0;
 let contador=1;

while (contador <= numeroIntegrantes){
   edad =parseInt(prompt(`ingrese las edades`));
   totalEdades = totalEdades + edad;
   contador++;

}
mediaEdades=totalEdades/numeroIntegrantes;
document.write("la media de las edades de la familia es " + mediaEdades);

