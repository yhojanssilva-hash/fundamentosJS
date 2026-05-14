console.log("Conexion exitosa con js");
// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nombre = "Juan";
    let nota = 6.5;

    if (nota >= 6.0) {
        alert(`El estudiante ${nombre} tiene nota ${nota} y su resultado es: Excelente rendimiento`);
    } else {
        alert("Otro resultado");
    }
}

// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre = "Daniel Pérez";

    let nombreMayus = nombre.toUpperCase();
    let cantidad = nombreMayus.length;

    alert(`El nombre convertido es: ${nombreMayus} y tiene ${cantidad} caracteres`);
}
// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "ejemplo@gmail.com";

    if (correo.includes("@") && correo.includes(".")) {
        alert(`El correo convertido es: ${correo} y el resultado es: correo válido`);
    } else {
        alert(`El correo convertido es: ${correo} y el resultado es: correo inválido`);
    }
}

// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";
    let cantidad = frase.length;

    if (cantidad > 20) {
        alert(`La frase "${frase}" tiene ${cantidad} caracteres y corresponde a una frase larga`);
    } else {
        alert(`La frase "${frase}" tiene ${cantidad} caracteres y corresponde a una frase corta`);
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado";
    let precio = 50000;
    let descuento = 0.1;

    let precioFinal = precio - (precio * descuento);

    alert(`El producto ${producto.toUpperCase()} tiene un precio final de $${precioFinal}`);
}

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)
function ejercicio16() {
    let cliente = "Tomas";
    let producto = "celular";
    let precio = 120000;

    let clienteMayus = cliente.toUpperCase();
    let precioFinal;
    let tipoCliente;

    if (precio >= 100000) {
        tipoCliente = "Cliente Premium";
        precioFinal = precio - (precio * 0.2);

    } else if (precio >= 50000) {
        tipoCliente = "Cliente Frecuente";
        precioFinal = precio - (precio * 0.1);

    } else {
        tipoCliente = "Cliente Normal";
        precioFinal = precio;
    }

    alert(`Cliente: ${clienteMayus}
Producto: ${producto}
Tipo: ${tipoCliente}
Precio original: $${precio}
Precio final: $${precioFinal}`);
}



// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Ejercicio 17: Análisis de frase con puntuación
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación
function ejercicio17() {
    let fase = "Eestoy aprendiendo JavaScript";
    let puntaje = 85;
    let fraseMinus = fase.LowerCase();
    let cantidad = fraseMinus.length;
    let clasification;
    if (puntaje >= 90) {
        clasification = "Excelente";
    } else if (puntaje >= 70) {
        clasification = "Bueno";
    } else {
        clasification = "Insuficiente";
    }
}


//Ejercicio 18: Evaluación de tres notas con estado final

//Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

//Calcular el promedio
//Convertir el nombre a mayúsculas
//Determinar el estado:
//Promedio ≥ 6.0 → Destacado
//Promedio ≥ 4.0 → Aprobado
//Promedio < 4.0 → Reprobado

//Además:
//Contar la cantidad de caracteres del nombre
//
//Mostrar:
//Nombre en mayúsculas
//Cantidad de caracteres del nombre
//Promedio
//Estado final

function calcularNotas() {
    let cliente = "papelucho";
    let n1 = 2.9;
    let n2 = 7.0;
    let n3 = 6.7;

    let promedio = (n1 + n2 + n3) / 3;
    let nombreMayusculas = cliente.toUpperCase();

    if (promedio >= 6.0) {
        alert(`El estudiante ${nombreMayusculas} esta destacado.
Promedio: ${promedio}.
Largo nombre: ${cliente.length}`);

    } else if (promedio >= 4) {
        alert(`El estudiante ${nombreMayusculas} esta Aprobado
Promedio: ${promedio}.
Largo nombre: ${cliente.length}`);

    } else {
        alert(`El estudiante ${nombreMayusculas} esta Reprobado
Promedio: ${promedio}.
Largo nombre: ${cliente.length}`);
    }
}


// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre

function ejercicio19(){
    let estudiante = "Chris";
    let promedio = 6.6;
    let nombremayus = estudiante.toUpperCase;
    let cantidad = nombremayus.length;
    let rendimiento;
    if (promedio >= 6.5) {
        rendimiento = "Sobresaliente"
        alert(`Estudiante: ${nombremayus}
        cantidad de caracteres: ${cantidad}
        promedio final: ${promedio}
        clasificación: ${rendimiento}`)
    }  else if (promedio >= 6.0) {
        rendimiento = "Muy buen rendimiento"
        alert(`Estudiante: ${nombremayus}
        cantidad de caracteres: ${cantidad}
        promedio final: ${promedio}
        clasificación: ${rendimiento}`)
    } else if (promedio >= 5.0) {
        rendimiento = "Buen rendimiento"
        alert(`Estudiante: ${nombremayus}
        cantidad de caracteres: ${cantidad}
        promedio final: ${promedio}
        clasificación: ${rendimiento}`)
    } else if (promedio >= 4.0) {
        rendimiento = "Suficiente"
        alert(`Estudiante: ${nombremayus}
        cantidad de caracteres: ${cantidad}
        promedio final: ${promedio}
        clasificación: ${rendimiento}`)
    } else {
        rendimiento = "Insuficiente"
        alert(`Estudiante: ${nombremayus}
        cantidad de caracteres: ${cantidad}
        promedio final: ${promedio}
        clasificación: ${rendimiento}`)
    }
}
