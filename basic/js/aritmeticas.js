function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return b != 0 ? a / b : "No se puede dividir con cero en el denominador"; 
}

export const aritmetica = {
    sumar,
    restar,
    multiplicar,
    dividir
}