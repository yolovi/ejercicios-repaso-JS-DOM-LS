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
  intereses: ["cocinar", "bailar"],
  trabajos: [{ empresa: 1 }, { empresa: "Google" }],
};

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

//[OK] // Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const personas = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Carlos", edad: 25 },
  { nombre: "María", edad: 16 },
  { nombre: "Pedro", edad: 30 },
  { nombre: "Laura", edad: 14 },
];

personas.forEach((persona) => {
  if (persona.edad > 18) {
    console.log(`${persona.nombre} tiene ${persona.edad}`);
  }
});

//[OK] // Dado un número, imprimir en la consola si es primo o no.

const numeroPrimo = (num) => {
  if (num === 0) {
    return console.log(`${num} no es primo`);
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log(`${num} no es primo`);
    }
  }

  return console.log(`${num} es primo`);
};

numeroPrimo(2);

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

//[OK] // Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.

let felinosMayoresDe4 = [];

animales.forEach((animal) => {
  if(animal.especie === "Felino" && animal.edad > 4) {
    console.log(`El ${animal.nombre} es ${animal.especie} y tiene ${animal.edad} años`);
    felinosMayoresDe4.push(animal)
  }
})

console.log(felinosMayoresDe4)

//[OK] // Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.

let herbivorosEdadPar = [];

for (let i = 0; i < animales.length; i++){
  if(animales[i].especie === "Herbívoro"  && animales[i].edad % 2 === 0){
    console.log(`${animales[i].nombre} : herbívoro. Edad ${animales[i].edad}`)
    herbivorosEdadPar.push(animales[i])
  }
}

console.log(herbivorosEdadPar)


//[OK] // Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.

let omnivorosOavesMenoresDe3 = [];

animales.forEach((animal) => {
  if (animal.especie === "Omnívoro" || animal.especie === "Ave" && animal.edad < 3 ){
    omnivorosOavesMenoresDe3.push(animal)
  }
})

console.log (omnivorosOavesMenoresDe3)


//[OK] // Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.

let animalesEmpiezanH = [];

animales.forEach((animal) => {
  if(animal.especie.charAt(0) === "H"){
    animalesEmpiezanH.push(animal);
  }
})

console.log(animalesEmpiezanH)

//[OK] // Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.

let animalesNombreMasde4LetrasYFelinoOHerbivoro = [];

animales.forEach((animal) => {
  if(animal.nombre.length > 4 && animal.especie === "Felino" || animal.especie === "Herbívoro" ){
    animalesNombreMasde4LetrasYFelinoOHerbivoro.push(animal)
  }
})

console.log(animalesNombreMasde4LetrasYFelinoOHerbivoro)

/* ----------------------------------------------------
                    Funciones
---------------------------------------------------- */

//[OK] // Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original.

//salida
eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]

//con FOR:
function eliminarDuplicados(arr) {
  let arrayUnicos = [];

  for (let i = 0; i < arr.length; i++){

    if(!arrayUnicos.includes(arr[i])){  
      arrayUnicos.push(arr[i]); 
    }
  }
return arrayUnicos;
}

const arrayUnicosNumeros = eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
console.log(arrayUnicosNumeros)

const arrayUnicosPalabras = eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]
console.log(arrayUnicosPalabras)

//con forEach y console.log dentro de funcion

function eliminarDuplicados2(arr) {
  let arrayUnicos = [];
  arr.forEach((elemento) => {
      if (!arrayUnicos.includes(elemento)) {
          arrayUnicos.push(elemento);
      }
  })
  return console.log(arrayUnicos)
  };

eliminarDuplicados2([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
eliminarDuplicados2(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]


//[OK] // Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.
sumarElementos([1, 2, 3, 4, 5]); // Devuelve 15
sumarElementos([-5, 10, -15, 20]); // Devuelve 10


//con REDUCE:
function sumarElementos(arr) {
  const elementosSumandos = arr.reduce((a,b) => a + b);
    return elementosSumandos;
  }

const sum1 = sumarElementos([1, 2, 3, 4, 5])
console.log(sum1)

const sum2 = sumarElementos([-5, 10, -15, 20])
console.log(sum2)

// con FOREACH +=

const sumarElementos2 = (arr) => {
  let elementosSumados = 0;
  arr.forEach((num) => {
    elementosSumados += num
  })
  return elementosSumados
}

const sum3 = sumarElementos2([1, 2, 3, 4, 5])
console.log(sum3)

const sum4 = sumarElementos2([-5, 10, -15, 20])
console.log(sum4)

//TODO: SEGUIR POR AQUI
// Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.
contarCaracteres(["Hola", "Mundo"]); // Devuelve 9
contarCaracteres(["JavaScript", "es", "genial"]); // Devuelve 18

  // Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.
numeroMasGrande([1, 2, 3, 4, 5]); // Devuelve 5
numeroMasGrande([10, -5, 20, -15]); // Devuelve 20


// Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.
cadenaMasLarga(["Hola", "Mundo"]); // Devuelve "Mundo"
cadenaMasLarga(["JavaScript", "es", "genial"]); // Devuelve "JavaScript"
