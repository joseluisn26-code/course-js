/*let request = require('request-promise');


let promesa = request('https://www.google.com')
// let promesa = request(2)
promesa.then(function () { console.log("Termine la peticion") })
    .catch(function (err) { console.log("Error!!!") })
    .finally(function (err) { console.log("Finalice") });

console.log("Yo sucedo despues");

// declarar una promesa
let promesa = new Promise(function (res, rej) {
    res(10);
    rej("Algo salio mal")
});*/

// const { resolve } = require('path/posix');
// let request = require('request');

// function leerPagina(url) {
//     return new Promise(function (resolve, reject) {
//         request(url, function (error, response) {
//             if (error) return reject(error);

//             resolve(response);
//         });
//     });
// }

// let promesa = leerPagina("https://www.google.com");
// // let promesa = leerPagina(2);
// promesa.then(r => console.log("Finalice")).catch(err => console.console.log(err));


// let p1 = new Promise((resolve, reject) => setTimeout(resolve, 100, "Hola mundo"));
// let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, "Hola mundo 2"));

// function finalizado() {
//     console.log("Todo finalizado");
// }

// // function callback hell
// p1.then(function (r) {
//     console.log(r);
//     p2.then(function (r2) {
//         console.log(r2);
//         finalizado();
//     })
// })

// // evitamos las funciones callback hell
// Promise.all([p1,p2]).then(function(resultados){
//     console.log(resultados);
//     finalizado();
// });

function primerPromesa(){
    return new Promise((resolve, reject) => setTimeout(resolve, 100, "Mensaje de la primer promesa"));
}

function segundaPromesa(r2){
    console.log(r2);
    return new Promise((resolve, reject) => setTimeout(resolve, 600, "Mensaje de la segunda pomesa"));
    
}

primerPromesa().then(segundaPromesa).then(function(r){ console.log(r)});

function finalizado() {
    console.log("Todo finalizado");
}