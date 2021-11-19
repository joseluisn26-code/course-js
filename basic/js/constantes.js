export const PI = Math.PI;
export let usuario = "Jose Luis";
export let password = "Cual123456";

export const hello = () => console.log("Hola");

export default function saludar(){
    console.log("Hola modulos +ES6");
}

export class Saludar{
    constructor(){
        console.log("hola desde  la clase saludar");
    }
}
