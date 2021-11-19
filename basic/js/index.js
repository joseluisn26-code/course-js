    var test = "Test Javascript";
            console.log(test);
            console.log("******** VAR ******");
            var music = "Rock";
            console.log("Variable Musica antes del bloque", music); {
                var music = "Pop";
                console.log("Variable Musica dentro del bloque", music);
            }
            console.log("Variable Musica despues del bloque", music);
            console.log("******** LET******");
            let musicTwo = "Rock";
            console.log("Variable Musica antes del bloque", musicTwo); {
                let musicTwo = "Pop";
                console.log("Variable Musica dentro del bloque", musicTwo);
            }
            console.log("Variable Musica despues del bloque", musicTwo);

            const PI = 3.1416;
            const NUEVE = 9;
            console.log(PI);
            console.log("Contenido de la constante NUEVE", NUEVE);

            let objeto = {
                name: "Jose Luis",
                age: 36
            }
            let colores = ["blanco", "rojo", "amarillo", "azul"];
            console.log(objeto);
            console.log(colores);
            objeto.correo = "jonovoan@poligran.edu.co"
            colores.push = ("naranja");
            console.log(objeto)
            console.log(colores)
            let lorem =
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            console.log(lorem,
                lorem.toUpperCase(),
                lorem.includes("text"),
                lorem.trim(),
                lorem.split(" "),
                lorem.split(",")
                )
            let nombre = "Ana maria";
            let apellido = "camacho gomez"
            // concatenacion
            let saludo = "Hola tu nombre es" + " " + nombre + " "+ apellido;
            console.log (saludo);
            // interpolacion de variables
            // template String
            // ` sale con alt 96
            let saludos = `Hola tu nombre es ${nombre} ${apellido}`;
            console.log(saludos);
            let ul= "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
            console.log(ul);
            let ul2 =`
            <ul>
                <li>Primavera</li>
                <li>Verano</li>
                <li>Otoño</li>
                <li>Invierno</li>
            </ul>`
        console.log(ul2);

        function saludar(nombre, edad){
            console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
        }

        saludar("Jose luis", 39);

        // funcion anonima
        const funcionExpresada = function(){
            console.log("Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, no se puede llamar antes de ser declarada generara error de que no se puede acceder a la funcion antes de inicializarla")
        }
        funcionExpresada();

        // // arrays
        // const a = [];
        // const b = [1, true, "hola", ["A", "B", "C", [1, 2, 3]]];
        // console.log(a);
        // console.log(b);
        // console.log(b.length);
        // console.log(b[2]);
        // console.log(b[3]);
        // console.log(b[3][2]);
        // console.log(b[3][3][0]);

        // const c = Array.of("X", "Y", "Z", 9, 8, 7);
        // console.log(c);

        // const d = Array(20).fill(false);
        // console.log(d);
        // d.push(true);
        // console.log(d);
        // c.forEach(function (el, index) {
        //     console.log(`<li id="${index}">${el}</li>`);
        // });

        // // objetos
        // const obj = {
        //     name: "jose luis",
        //     apellido: "novoa nieto",
        //     age: 39,
        //     contacto: {
        //         email: "jonovoan@poligran.edu.co",
        //         telefono: "+573123521497"
        //     },
        //     hobbies: ["Leer, videojuegos"],
        //     status: "married",
        //     decirMiNombre: function () {
        //         console.log(`Hola me llamo ${this.name} ${this.apellido} y tengo ${this.age} años.`);
        //     }
        // }

        // console.log(obj);
        // console.log(obj.apellido);
        // obj.decirMiNombre();
        // console.log(Object.keys(obj));
        // console.log(Object.values(obj));
        // console.log(obj.hasOwnProperty("name"));
        // console.log(obj.hasOwnProperty("date"));

        // console.log("Operador ternario");
        // let eresMayor = (obj.age >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        // console.log(eresMayor);
        // let dia = 9;
        // switch (dia){
        //     case 0:
        //     console.log("Domingo");
        //     break;
        //     case 1:
        //     console.log("Lunes");
        //     break;
        //     case 2:
        //     console.log("Martes");
        //     break;
        //     case 3:
        //     console.log("Miercoles");
        //     break;
        //     case 4:
        //     console.log("Jueves");
        //     break;
        //     case 5:
        //     console.log("Viernes");
        //     break;
        //     case 6:
        //     console.log("Sabado");
        //     break;
        //     default:
        //     console.log("Este dia no existe");
        //     break;
        }
        ciclos
        let count=0;
        while(count <3){
            console.log(count);
            count++;
        }
        const arr =[1,2,3,4,5,6,7,8,9];
        for(let index=0;index < arr.length ; index++){
            console.log("For en la posicion "+index +" del arreglo arr");
        }

        let number = [10,20,30,40,50,60,70,80,90];
        for(let i=0; i < number.length; i++){
            console.log(number[i]);
        }

        const jose ={
            nombre: "juan",
            apellido: "novoa",
            age: 9
        }

        for(const key in jose){
            console.log(`${key}: ${jose[key]}`);
        }

        for(const element of number){
            console.log(element);
        }
        let cadena = "Hola tu";
        for(const caracter of cadena){
            console.log(caracter);
        }

        try {
            console.log("En el try se agrega el codigo a evaluar");
            noExiste;
            console.log("Segundo mensaje en el tray");
        } catch (error) {
            console.log("Catch, captura cualquier error surgido o lanzado en el try");
            console.log(error);
        } finally {
            console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
        }

        try {
            let numero = "y";
            if(isNaN(numero)){
                throw new Error("El caracter ingresado no es un numero");
            }
            console.log(numero *numero);
        } catch (error) {
            console.log(`Se produjo el siguente ${error}`)
        }

        const numeros = [1,2,3,4,5];

        for(let i=0; i<numeros.length; i++){
            if(i===2){
                break;
            }            
            console.log(numeros[i]);            
        }

        for(let i=0; i<numeros.length; i++){
            if(i===1){
                continue;
            }            
            console.log(numeros[i]);            
        }

        // sin destructuracion
        const numeros = ["A",2,"Z"];
        let uno = numeros[0],
            dos = numeros[1],
            tres = numeros[2];
        console.log(uno,dos,tres);
        // con destructuracion
        const [one, two, three] = numeros;
        console.log(one,two,three);

        const persona = {
            nombre: "Jose Luis",
            apellido: "Novoa Nieto",
            age: 39
        };

        let{nombre,apellido,age} = persona;
        console.log(nombre,apellido,age);

        let nombre = "Mateo",
            edad = 10;

        const perro = {
            nombre: nombre,
            edad: edad,
            ladrar: function () {
                console.log("guau guau")
            }
        }
        console.log(perro);
        perro.ladrar();

        const dog = {
            nombre,
            edad,
            raza: "criollo",
            ladrar() {
                console.log("guau guau guau")
            }
        }
        console.log(dog);
        dog.ladrar();

        // parametros REST
        function sumar(a, b, ...c) {
            let resultado = a + b;

            c.forEach(function (n){
                resultado += n
            });
            return resultado;
        }

        console.log(sumar(4,6,7,8,9));
        console.log(sumar(4,6,7,8));
        console.log(sumar(4,6,7));
        console.log(sumar(4,6));

        // operador Spread se antepone los tres puntos para que una expresion se pueda expandir
        const arr1 = [1,2,3,4,5],
            arr2 =[6,7,8,9,0];

        console.log(arr1,arr2);

        const arr3 = [...arr1, ...arr2];
        console.log(arr3);

        arrow functions nueva forma de expresar funciones expresadas si solo tengo una linea de coigo puedo omitir las llaves
         const saludo = (nombre) =>{
            console.log(`Hola ${nombre}`)
        }
        saludo("Juan"); output Hola Juan hacen el retun explicito
        const saludo = nombre => console.log(`Hola ${nombre}`);

        saludo("Juan");

        const sumar = function(a,b){
            return a+b;
        }

        const sumar = (a,b) => a+b;
        console.log(sumar(4,5));

        const numeros = [1,2,3,4,5];
        numeros.forEach((el,index) => console.log(`${el} esta en la posicion ${index}`));

        const perro = {
            nombre: "Kenai",
            ladrar(){
                console.log(this)
            }
        }

        perro.ladrar();

        prototipos POO  (clases ->Modelo a seguir) - ( Objetos(instancia de clase) -> atributos(propiedad del objeto es decir son variables dentro de un objeto) y metodos(son las acciones que un objeto puede realizar))
            const animal = {
                nombre:"Snoopy",
                sonar(){
                    console.log("Hago sonidos porque estoy vivo");
                }
            }

            const animal2 = {
                nombre:"Lola Bunny",
                sonar(){
                    console.log("Hago sonidos porque estoy vivo");
                }
            }

        console.log(animal);
        console.log(animal2);

        // funcion constructora se deben tener solo los atributos los metodos se deben pegar al prototipo ya que se crean dobles function al crear nuevos objetos
        //    funcion constructora donde asignamos los metodos al prototipo, no a la funcion como tal 
        function Animal(nombre, genero) {
            //atributos
            this.nombre = nombre;
            this.genero = genero;
        }
        //metodos agregados al prototipo de la funcion constructora
        Animal.prototype.sonar = function () {
            console.log("Hago sonidos porque estoy vivo");
        }

        Animal.prototype.saludar = function () {
            console.log(`Hola me llamo ${this.nombre}`);
        }

        // herencia prototipica
        function Perro(nombre,genero, tamanio){
            this.super = Animal;
            this.super(nombre,genero);
            this.tamanio =tamanio;
        }

        // perro esta heredando de animal
        Perro.prototype = new Animal();
        Perro.prototype.constructor = Perro;

        // sobreescritura de metodos del prototipo padre en el hijo
        Perro.prototype.sonar = function (){
            console.log("Soy un perro y mi sonido es un ladrido");
        }

        Perro.prototype.ladrar = function (){
            console.log("Guauuuuu Guauuuuu!!!!!");
        }

        const snoopy = new Perro("Snoopy", "Macho","Mediano"),
            lolaBunny = new Animal("Lola bunny", "Hembra");
        console.log(snoopy);
        console.log(lolaBunny);
        snoopy.sonar();
        snoopy.saludar();
        snoopy.ladrar();
        lolaBunny.sonar();
        lolaBunny.saludar();

        class Animal {
            //El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
            constructor(nombre, genero) {
                this.nombre = nombre;
                this.genero = genero;
            }
            //metodos 
            sonar() {
                console.log("Hago sonidos porque estoy vivo");
            }

            saludar() {
                console.log(`Hola me llamo ${this.nombre}`);
            }
        }

        class Perro extends Animal {
            constructor(nombre, genero, tamanio) {
                // Con el metodo se mana a llamar el constructor de la clase padre
                super(nombre, genero);
                this.tamanio = tamanio;
                this.raza = null;
            }

            sonar() {
                console.log("Soy un perro y mi sonido es un ladrido");
            }
            ladrar() {
                console.log("Guauuuuu, Guauuuuuu");
            }
            // metodo estatico puedo ejecutarlo sin instanciar la clase
            static queEres() {
                console.log(
                    "Los perros somos animales mamiferos que pertenecemos a la familia de los caninos, somos considerados los mejores amigos del hombre"
                );
            }

            // setters y getters para establecer y obtener valores de los atributos de la clase
            get getRaza() {
                return this.raza;
            }

            set setRaza(raza) {
                this.raza = raza;
            }
        }

        Perro.queEres();

        const mimi = new Animal("Mimi", "Hembra");
        const scooby = new Perro("Scooby", "Macho", "Gigante");

        console.log(mimi);
        mimi.saludar();
        mimi.sonar();
        console.log(scooby);
        scooby.saludar();
        scooby.sonar();
        scooby.ladrar();
        console.log(scooby.getRaza);
        scooby.setRaza = "Gran danes";
        console.log(scooby.getRaza);

        console.error("Esto es un error");
        console.warn("Esto es un aviso");
        console.info("Esto es un mensaje informativo");
        console.error("Esto es un error");


        let nombre = "Jose Luis",
            apellido = "Novoa Nieto",
            age = 39;
        console.log(nombre, apellido, age);
        console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${age} años`);
        console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, age);
        console.clear();
        console.log(window);
        console.log(document);
        console.dir(window);
        console.dir(document);
        console.clear();
        console.group("cursos en Youtube");
        console.log("Curso de Javascript");
        console.log("Curso de Node.js");
        console.log("Curso de Flexbox");
        console.log("Curso de Java");
        console.log("Curso de Php");
        console.groupEnd();

        console.groupCollapsed("cursos en Youtube");
        console.log("Curso de Javascript");
        console.log("Curso de Node.js");
        console.log("Curso de Flexbox");
        console.log("Curso de Java");
        console.log("Curso de Php");
        console.groupEnd();
        console.log(console);
        console.table(Object.entries(console).sort());

        const numeros = [1, 2, 3, 4, 5];
        const vocales = ["a", "e", "i", "o", "u"];
        console.table(numeros);
        console.table(vocales);

        const perro = {
            nombre: "Boni",
            raza: "Boxer",
            color: "cafe"
        }

        console.table(perro);
        console.clear();

        console.time("Cuanto tiempo - inicio");
        const arreglo = Array(1000000);
        for (let i = 0; i < arreglo.length; i++) {
            arreglo[i] = i;
        }

        console.timeEnd("Cuanto tiempo - inicio");
        console.log(arreglo);
        console.clear();
        for (let i = 0; i <= 100; i++) {
            console.count("codigo for");
            console.log(i);
        }
        console.clear
        // pruebas unitarias
        let x = 3,
            y = 2,
            pruebaXY = "Se espera que x siempre sea menos que y";
        console.assert(x < y, {
            x,
            y,
            pruebaXY
        });

        console.log(Date());
        let fecha = new Date();
        console.log(fecha);
        // dia del mes
        console.log(fecha.getDate());
        // dia de la semana
        console.log(fecha.getDay());
        // mes ene ->0 feb ->1 mar ->2
        console.log(fecha.getMonth());
        // año
        console.log(fecha.getFullYear());
        // hora
        console.log(fecha.getHours());
        // minutos
        console.log(fecha.getMinutes());
        // segundos
        console.log(fecha.getSeconds());
        // milñisegundos
        console.log(fecha.getMilliseconds());
        console.log(fecha.toString());
        console.log(fecha.toDateString());
        console.log(fecha.toLocaleString());
        console.log(fecha.toLocaleDateString());
        console.log(fecha.toLocaleTimeString());
        console.log(fecha.getTimezoneOffset());
        // con el meridiano
        console.log(fecha.getUTCDate());
        console.log(fecha.getUTCDay());
        console.log(fecha.getUTCFullYear());
        console.log(fecha.getUTCHours());
        // fecha en formato timestamp
        console.log(Date.now());
        let happy = new Date(1982, 2, 26);
        console.log(happy);

        // funcion para calculo de edad
        function getEdad(dateString) {
            let hoy = new Date()
            let fechaNacimiento = new Date(dateString)
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
            let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
            if (
                diferenciaMeses < 0 ||
                (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
            ) {
                edad--
            }
            return edad
        }

        console.log("Tu tienes "+getEdad("1982/03/26") +" años");

        console.log(Math);
        console.log(Math.PI);
        console.log(Math.abs(7.8));
        console.log(Math.ceil(7.8));
        console.log(Math.floor(7.5));
        console.log(Math.round(7.6));
        console.log(Math.sqrt(81));
        console.log(Math.pow(2,5));
        console.log(Math.sign(5));
        console.log(Math.random());
        console.log(Math.round(Math.random()*1000));
        console.log(window);
        alert("Esto es una alerta");
        confirm("Esto es una confirmacion");
        prompt("Hola esto es un prompt ingresa un valor");
        let alerta = alert("Esto es una alerta"),
            confirmacion = confirm("Esto es una confirmacion"),
            aviso = prompt("Hola esto es un prompt ingresa un valor");

        console.log(alerta);
        console.log(confirmacion);
        console.log(aviso);

        // expresiones regulares
         let cadena ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        // let expReg = new RegExp("lorem", "ig");
        let expReg2 = /lorem{1}/ig;

        // console.log(expReg.test(cadena));
        console.log(expReg2.exec(cadena));
        console.log(expReg2.test(cadena));
        // console.log(expReg.exec(cadena));

        // funcion anonima autoejecutable
        (function (){
            console.log("Mi primer IIFE");
        })();
        (function (d,w,c){
            console.log("Mi segunda IIFE");
            console.log(d);
            console.log(w);
            c.log("Este es un console.log");
        })(document, window, console);
        // funcion autoejecutable formato crockford
        ((function (){
            console.log("Version crockford");
        })())
        // funcion autoejecutable formato Unaria
        +function (){
            console.log("Version unaria");
        }();
        // funcion autoejecutable formato Facebook
        !function (){
            console.log("Version Facebook");
        }();