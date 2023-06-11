// --------------EJERCICIOS JS-DOM-LS---------------
//____________________________________________________

/* ----------------------------------------------------
            Condiciones y Objetos/Arrays
---------------------------------------------------- */

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':

//[OK] // TEST 1 -----------------------

/*
Este seria el objeto completo:

let ordenador = {
  name: "object",
  marca: "Asus",
  tipo: "portátil",
  perifericos: {
    touchpad: true,
  },
  almacenamiento: {
    discos: ["SSD"],
  },
  procesador: {
    velocidad: "2.5 GHz",
  },

}

*/

let ordenador = {
  name: "object",
};

if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 2 -----------------------

ordenador = {
  marca: "Asus",
};

if (ordenador.marca === "Asus") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 3 -----------------------

ordenador = {
  tipo: "portátil",
};

if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 4 -----------------------

ordenador = {
  perifericos: {
    touchpad: true,
  },
};

if (ordenador.perifericos.touchpad === true) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 5 -----------------------

ordenador = {
  almacenamiento: {
    discos: ["SSD"],
  },
};

if (ordenador.almacenamiento.discos[0] === "SSD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 6

ordenador = {
  procesador: {
    velocidad: "2.5 GHz",
  },
};

if (ordenador.procesador.velocidad === "2.5 GHz") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // Crea un objeto en la variable usuario de tal modo que el siguiente código no muestre por consola 'suspendes':

const usuario = {
  nombre: "María",
  direccion: {
    ciudad: "Madrid",
  },
  intereses: ["cocinar","bailar"],
  trabajos: [ 
    {empresa: 1},
    {empresa: "Google"},
      ],
}


//[OK] // TEST 1
if (typeof usuario === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 2
if (usuario.nombre === "María") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 3
if (usuario.direccion.ciudad === "Madrid") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 4
if (usuario.intereses.includes("cocinar")) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 5
if (usuario.trabajos.length === 2) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

//[OK] // TEST 6
if (usuario.trabajos[1].empresa === "Google") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

/* ----------------------------------------------------
                    Bucles
---------------------------------------------------- */

//[OK] //  Imprimir los números del 21 al 34 en la consola.

for (let i = 21; i <= 34; i++) {
  console.log(i);
}

//[OK] // Sumar los números del 1 al 10 y mostrar el resultado en la consola.

let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
  console.log(i, total);
}

console.log(total);

//[OK] // Dado un array de números, imprimir en la consola la suma de todos los números.

//[OK] // FOR---------------------------------------------------------

let arrayNum = [1, 2, 3, 4];
totalArr = 0;

for (let i = 0; i < arrayNum.length; i++) {
  totalArr += arrayNum[i];
  console.log(i, totalArr);
}

console.log(totalArr);

//[OK] // FOREACH necesita funcion flecha-------------------------------

const arrayNum_2 = [1, 2, 3, 4];
totalArr_2 = 0;

arrayNum_2.forEach((elemento) => {
  totalArr_2 += elemento;
  console.log(elemento, totalArr_2);
});

console.log(totalArr_2);

//[OK] // FOR OF -----------------------------------------------------

const arrayNum_3 = [1, 2, 3, 4];
totalArr_3 = 0;

for (let elemento of arrayNum_3) {
  totalArr_3 += elemento;
  console.log(elemento, totalArr_3);
}

console.log(totalArr_3);

// FOR IN ------------------------------------------------------
// for in es un metodo de objetos no de arrays

//--------------------------------------------------------------

// Dado un número, encontrar su factorial.
//[OK] // Opc 1: cuenta hacia atras

function fact(num) {
  let numFact = num;

  for (let i = num - 1; i >= 1; i--) {
    numFact *= i;
    console.log(i, numFact);
  }
  return numFact;
}

console.log(fact(5));

//[OK] // -------------------------------------------------------------
// Opc 2: cuenta hasta el num

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
    console.log(i, result);
  }
  return result;
}

console.log(factorial(5));

// -------------------------------------------------------------

//[OK] // Dado un array de números, imprimir en la consola solo los números impares.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function impares(arr) {
  let impares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      impares = arr[i];
      console.log(impares);
    }
  }
}

impares(array);

//[OK] //----------------------------

function imparesOpc2(arr) {
  let imparesB = [];

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number % 2 !== 0) {
      imparesB.push(number); // agrega number al arreglo imparesB
    }
  }
  console.log(imparesB);
}

imparesOpc2(array);

//TODO: SEGUIR POR AQUI

// Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

// Dado un número, imprimir en la consola si es primo o no.

// Utiliza la siguiente array para resolver los próximos ejercicios:

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];
