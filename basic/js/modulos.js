import saludar, {Saludar, PI,usuario,password,hello} from "./constantes.js";
import {aritmetica as calculo} from "./aritmeticas.js";

console.log("Archivo modulos.js");
console.log(hello);
console.log(PI,usuario,password);
console.log(calculo.sumar(3,1));
console.log(calculo.restar(3,1));
console.log(calculo.multiplicar(3,1));
console.log(calculo.dividir(3,1));
saludar();
let saludo = new Saludar();
saludo;