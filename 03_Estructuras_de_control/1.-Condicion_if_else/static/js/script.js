console.log("Conexion exitosa con JS...");

/*
===============================
1. ¿Que es una condición en JS?
===============================
Una condicion nos permite tomar decisiones en el codigo. Separando dos caminos el si (if) y el no (else)
Estructura basica: (Sintaxis --> Reglas del lenguaje de programacion)
if (condicion) {
    //Codigo que se ejecuta si la condicion es verdadera.
} else{
    //codigo que se ejecuta si la condicion es falsa.
    }
    */

//Ejemplo 1: (numerico) -- IF
let edad = 18; 
if (edad <= 17) {  //Condicion Si
    console.log("Eres mayor de edad")
}

//Ejemplo 2: Dos caminos posibles 
let temperatura = 10;
if(temperatura >= 20){ //Condicion Si
    console.log("Hace calor");
} else{ //Condicion No
    console.log("Hace frio")
}
//Ejemplo: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;
if(nota >= 6.0){ //Primera condicion
    console.log ("Excelente! sigue asi!")

} else if(nota >= 4.0){//Segunda condicion
console.log ("Aprobado, puedes mejorar!")
}else{//Valor si no cumple anteriores
    console.log("Reprobado, estudia mas!")
}

//Ejemplo 4: Condiciones con STRING
let nombre = "Javiera";

//Comparacion exacta(===)

if(nombre === "Javiera"){
    console.log("Hola," + nombre )
}else{
    console.log("Tu no eres Javiera")
}

/*
OPERADORES DE COMPARACION
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
//Ejemplo de distinto
let num = 10;
let num2 = 5;
if(num !== 10){
    console.log(`El numero: ${num} es distinto que ${num2}`);
}else{
    console.log("Son iguales!")
}