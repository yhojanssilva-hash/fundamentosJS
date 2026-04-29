console.log("Conexion exitosa con js");
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "yhojans";
    alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let suma = 10 + 5;
    alert(`La suma es ${suma}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let resta = 20 - 8;
    alert(`la resta es ${resta}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let multiplicacion = 6 * 4;
    alert(`La multiplicacion es ${multiplicacion}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let nota1 = 6.0;
    let nota2 = 5.5;
    let nota3 = 5.7;
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`El promedio es: ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 18;
    if (edad >= 18) {
        alert("Eres mayor de edad")
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero = 21;
    if (numero % 2 === 0) {
        alert("El numero es par")
    } else {
        alert("El numero es impar")
    }

}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 6.7;

    if (nota > 4.0) {
        alert(`La nota es: ${nota}\nEstudiante aprobado`);
    } else {
        alert(`La nota es: ${nota}\nEstudiante reprobado`);
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let precio = 20000;
    let descuento = precio * 0.1;
    let precioFinal = precio - descuento;

    alert(`Precio final con descuento: $${precioFinal}`);
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let num1 = 10;
    let num2 = 5;

    if (num1 > num2) {
        alert(`El número mayor es: ${num1}`);
    } else {
        alert(`El número mayor es: ${num2}`);
    }
}
