/* Dado el sueldo de un empleado imprimir en una alerta el nuevo sueldo del empleado si tuvo un aumento del 10% 

const sueldo = prompt("ingresa el valor del sueldo")
const psueldo= 10/100;
const nsueldo = sueldo + parseInt(sueldo*psueldo);
alert("el nuevo sueldo con el aumento es: "+nsueldo);*/

/*un vendedor que tiene su sueldo base, recibe una comision de 30% del total de las ventas de un mes, el quiere saber cuanto ganara en un mes que tuvo tres ventas*/
/*let sueldo = prompt("ingrese el valor del sueldo");
let venta1 = prompt("ingrese el valor de la venta");
let venta2 = prompt("ingrese el valor de la venta");
let venta3 = prompt("ingrese el valor de la venta");
let porc = 30/100;
let comision = parseInt(venta1)+ parseInt(venta2)+ parseInt(venta3);
let resul = parseInt(sueldo) + parseInt(comision*porc);
let resulf = parseInt(resul);

alert("su sueldo junto a la comision por las tres ventass es de $" + resulf+ " COP");*/

/* Ejercio 1 - Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra*/

let compra = prompt("ingrse el valor de la compra");
let desc = 25/100;
let res = parseInt(compra)- parseInt(compra*desc);

alert("el valor total a pagar esde $ "+res);

/* Ejercicio 2 - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual */

let dinero = prompt("Ingrese el valor del dinero invertido");
let raz = 2/100;
let resu = parseInt(dinero)+ parseInt(dinero*raz);

alert("el dinero que usted a ganado en el transcurso de este mes es $ " +resu);

/*Ejercicio 3 - Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final. */

let promedio = prompt("ingrese el promedio de sus calificaciones");
let exam = prompt("ingrse la calificacion de su examen final");
let trab = prompt("ingrese la calificacion de su trabajo final");
let pprom = 55/100;
let pexam = 30/100;
let ptrab = 15/100;
let pp = parseInt(promedio*pprom);
let pe = parseInt(exam*pexam);
let pt = parseInt(trab*ptrab);
let cf = parseInt(pp)+ parseInt(pe)+ parseInt(pt);

alert("su calificacion final en la materia de algoritmos es de " +cf);

/* Ejercicio 4 - El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%*/

let pa = prompt("Ingresa el valor del articulo comprado");
let porce = 30/100;
let ptotal = parseInt(pa)+ parseInt(pa*porce);

alert("el precio al que debe vender el producto es de $ " +ptotal);

/* Ejercicio 5 - Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera. */

let distancia = prompt("ingrese la distancia recorrida en kilometros");
let tiempo = prompt("ingrese el tiempo de la carrera en minutos");
let mpagar = parseInt(15000*distancia)+ parseInt(2000*tiempo);

alert("el monto a pagar es de $ " + mpagar);

/*Ejercicio 6 - Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos. */

let num1 = prompt("ingrese el primer número")
let num2 = prompt("ingrese el segundo número")
let num3 = prompt("ingrese el tercer núemro")
let cua1 = Math.pow(num1, 2);
let cua2 = Math.pow(num2, 2);
let cua3 = Math.pow(num3, 2);

alert("el cuadrado de los tres numeros es de " +cua1+ " el primer numero," +cua2+" el segundo numero y " +cua3+ " el tercer numero");

/*Ejercicio 7 - En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Area          : Porcentaje del presupuesto
ginecología   : 40%
traumatología : 30% 
pediatría     : 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

let presupuesto = prompt("Ingrece el presepuesto de este año en el hospital");
let gine = 40/100;
let trau = 30/100;
let pedi = 30/100;
let resg = parseInt(presupuesto*gine);
let rest = parseInt(presupuesto*trau);
let resp = parseInt(presupuesto*pedi);

alert("el presupuesto del hopital queda dividido de la siguiente manera: $" +resg+ " en el area de ginecología,$" +rest+ " en el area de traumatología y $" +resp+ " en el area de pediatría.");

/*Ejercico 8 - El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%. "REPETIDO"*/


/*Ejercicio 9 - Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida. */

let pers1 = prompt("Ingrese la cantidad de dinero invertido por la primera persona");
let pers2 = prompt("Ingrese la cantidad de dinero invertido por la segunda persona");
let pers3 = prompt("Ingrese la cantidad de dinero invertido por la tercera persona");
let totalp = parseInt(pers1)+ parseInt(pers2)+ parseInt(pers3);
let tper1 = parseInt(pers1)* parseInt(100/totalp);
let tper2 = parseInt(pers2)* parseInt(100/totalp);
let tper3 = parseInt(pers3)* parseInt(100/totalp);

alert("El porcentaje que cada persona invirtio en la fundacion de la empresa es de " +tper1+ "% la primera persona, " +tper2+ "% la segunda persona y " +tper3+ "% la tercera persona.");

/*Ejercicio 10 - Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división. */
