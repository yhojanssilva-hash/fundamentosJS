console.log("Conexion exitosa con js...");
//📌 Ejercicios
//🔹 Ejercicio 1: Edad proyectada
//Declara tu edad actual y calcula:
//Tu edad en 5 años
//Tu edad hace 10 años
//Muestra ambos resultados en consola.
function edadproyectada() {
    let edad = 16;

    alert(`Mi edad es: ${edad} \nEn 5 años tendre: ${edad + 5} \nHace 10 años tenia: ${edad - 10}`);
}

//🔹 Ejercicio 2: Compra con descuento
//Un producto cuesta $25.000 y tiene un descuento del 20%.
//Calcula el precio final
//Muestra el resultado
function compradescuento() {
    let precio = 25000;
    let descuento = precio * 0.20;
    let final = precio - descuento;

    alert(`Precio original: $${precio}\nDescuento: $${descuento}\nPrecio final: $${final}`);
}


//🔹 Ejercicio 3: Promedio de notas
//Declara 3 notas decimales:
//Calcula el promedio
//Redondea el resultado usando Math.round()
function promedionotas() {
    let n1 = 6.7;
    let n2 = 8.9;
    let n3 = 7.2;
    let promedio = (n1 + n2 + n3) / 3;

    alert(`Promedio: ${Math.round(promedio)}`);
}


//🔹 Ejercicio 4: Temperatura
//Declara una temperatura actual en grados Celsius:
//Auméntala en 3 grados
//Luego disminúyela en 5 grados
//Muestra el resultado final
function temperatura() {
    let temp = 17;
    temp += 3; //temp = temp + 3
    temp -= 5; //temp = temp - 5
    alert(`La temperatura final es: ${temp}°C`);
}


//🔹 Ejercicio 5: Sueldo semanal
//Un trabajador gana $8.000 por hora y trabaja 45 horas:
//Calcula su sueldo
//Si trabaja 5 horas extra, agrégalas usando incremento
//Muestra el nuevo sueldo
function sueldosemanal() {
    let valorHora = 8000;
    let cantidadhora = 45;
    let sueldo = valorHora * cantidadhora;
    let sueldoNuevo = valorHora * (cantidadhora + 5);
    alert(`sueldo actual : $${sueldo}sueldo nuevo con incremento: $${sueldoNuevo}`);
};

//🔹 Ejercicio 6: División y resto
//Declara dos números:
//Calcula la división
//Calcula el módulo (%)
//Explica el resultado en consola
function divisionyresto() {
    let a = 10;
    let b = 3;

    let division = a / b;
    let resto = a % b;

    alert(`División: ${division}\nResto: ${resto}`);
}

//🔹 Ejercicio 7: Comparación de números
//Declara dos números:
//Muestra si el primero es mayor que el segundo
//Verifica si uno de ellos es igual a 10

function comparaciondenumeros() {
    let a = 12;
    let b = 10;

    alert(`¿A es mayor que B? ${a > b}\n¿Alguno es 10? ${a === 10 || b === 10}`);
}


//🔹 Ejercicio 8: Notación científica aplicada
//Declara:
//Una población usando notación científica (ej: 1e6)
//Divide esa población en 4 grupos
//Muestra el resultado
function notacioncientifica() {

    let poblacion = 1e6;
    let grupo = poblacion / 4;

    alert(`Población total: ${poblacion}\nCada grupo: ${grupo}`);
}

//🔹 Ejercicio 9: Potencia y cálculo combinado
//Calcula:
//3 elevado a 4
//Luego multiplícalo por 2
//Resta 10 al resultado final

function potenciaycalculo() {
    let resultado = (3 ** 4) * 2 - 10;

    alert(`Resultado final: ${resultado}`);
}

//🔹 Ejercicio 10: Dado aleatorio 🎲
//Simula el lanzamiento de un dado:
//Genera un número entre 1 y 6
//Muestra el resultado
//Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dadoaleatorio() {
    let dado = Math.floor(Math.random() * 6) + 1;

    let resultado = dado >= 4 ? "Ganaste 🎉" : "Perdiste 😢";

    alert(`Número: ${dado}\n${resultado}`);
}
