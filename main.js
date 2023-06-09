// --------------EJERCICIOS JS-DOM-LS---------------
//____________________________________________________

/* ----------------------------------------------------
            Condiciones y Objetos/Arrays
---------------------------------------------------- */

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':

// TEST 1 -----------------------

let ordenador = {
  name: "object",
};

if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2 -----------------------

ordenador = {
  marca: "Asus",
};

if (ordenador.marca === "Asus") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3 -----------------------

ordenador = {
  tipo: "portátil",
};

if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 4 -----------------------

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

// TEST 5 -----------------------

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

// TEST 6

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

/* ----------------------------------------------------
                    Bucles
---------------------------------------------------- */

//  Imprimir los números del 21 al 34 en la consola.

for (let i = 21; i <= 34; i++){
    console.log(i)
  }

// Sumar los números del 1 al 10 y mostrar el resultado en la consola.

let total = 0
for(let i = 1; i <= 10; i++){
  total += i
  console.log(i,total)
}

console.log(total)

// Dado un array de números, imprimir en la consola la suma de todos los números.
// Dado un número, encontrar su factorial.
// Dado un array de números, imprimir en la consola solo los números impares.
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
  