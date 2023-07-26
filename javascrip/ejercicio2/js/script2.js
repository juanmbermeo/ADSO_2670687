/* Dado el sueldo de un empleado imprimir en una alerta el nuevo sueldo del empleado si tuvo un aumento del 10% 

const sueldo = prompt("ingresa el valor del sueldo")
const psueldo= 10/100;
const nsueldo = sueldo + parseInt(sueldo*psueldo);
alert("el nuevo sueldo con el aumento es: "+nsueldo);*/

/* Ejercicio 3 - un vendedor que tiene su sueldo base, recibe una comision de 30% del total de las ventas de un mes, el quiere saber cuanto ganara en un mes que tuvo tres ventas*/
/*let sueldo = prompt("ingrese el valor del sueldo");
let venta1 = prompt("ingrese el valor de la venta");
let venta2 = prompt("ingrese el valor de la venta");
let venta3 = prompt("ingrese el valor de la venta");
let porc = 30/100;
let comision = parseInt(venta1)+ parseInt(venta2)+ parseInt(venta3);
let resul = parseInt(sueldo) + parseInt(comision*porc);
let resulf = parseInt(resul);

alert("su sueldo junto a la comision por las tres ventass es de $" + resulf+ " COP");*/

/* Ejercio 3 - Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra*/

let compra = prompt("ingrse el valor de la compra");
let desc = 25/100;
let res = parseInt(compra)- parseInt(compra*desc);

alert("el valor total a pagar esde $ "+res);

/* Ejercicio 4 - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual */

let dinero = prompt("Ingrese el valor del dinero invertido");
let raz = 2/100;
let resu = parseInt(dinero)+ parseInt(dinero*raz);

alert("el dinero que usted a ganado en el transcurso de este mes es $ " +resu);

