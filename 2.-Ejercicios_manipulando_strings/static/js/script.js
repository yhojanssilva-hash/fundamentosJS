console.log("Conexion correcta con js")
//1️⃣ Presentación completa
//Crea las variables:
//nombre: Camila
//edad: 25
//Debes mostrar un mensaje que:
//Presente a la persona
//Indique su edad
//Indique el tipo de dato de edad
//👉 Todo en un solo mensaje.
let nombre1 = "Camila"
let edad = "25"
console.log(`Hola, me llamo ${nombre1} y tengo ${edad} años y mi tipo de edad es ${typeof edad} `);
//
//2️⃣ Ubicación con transformación
//Crea las variables:
//comuna: Maipú
//region: Metropolitana
//Debes mostrar un mensaje que:
//Indique dónde vive la persona
//Muestre la comuna en MAYÚSCULAS
//Muestre la región en minúsculas
let comuna = "MAIPU"
let region = "metropolitana"
console.log(`Vivo en la comuna de ${comuna.toUpperCase()} en la region ${region.toLowerCase()}`);

//3️⃣ Análisis de palabra
//Crea la variable:
//lenguaje: Python
//Debes mostrar un mensaje que:
//Indique cuántos caracteres tiene
//Muestre la palabra en MAYÚSCULAS
//Indique el tipo de dato
let lenguaje = "Python"
console.log(`la palabra ${lenguaje} tiene ${lenguaje.length} caracteres, en mayusculas es ${lenguaje.toUpperCase()} y su tipo de lenguaje es ${typeof lenguaje}`);


//4️⃣ Frase completa analizada
//Crea la variable:
//mensaje: Me encanta programar en JavaScript
//Debes mostrar un mensaje que:
//Indique la cantidad de caracteres
//Verifique si contiene la palabra "JavaScript"
//Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar con JavaScript"
console.log(`el mensaje tiene ${mensaje.length}, contiene JavaScript ${mensaje.includes("JavaScript")} y en minusculas es ${mensaje.toLowerCase()}`);

//5️⃣ Lista con búsqueda y transformación
//Crea la variable:
//compras: arroz, fideos, aceite, sal
//Debes mostrar:
//Si existe la palabra "aceite"
//El texto completo en MAYÚSCULAS
//La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal"
console.log(`¿Existe aceite?: ${compras.includes("aceite")} , el texto en mayusculas es ${compras.toUpperCase()} y su cantidad total de caracteres son ${compras.length}  `);


//6️⃣ Conversión + análisis
//Crea las variables:
//numeroCasa: 456
//numeroCasaTexto (vacía)
//Debes:
//Convertir el número a texto
//Mostrar el número convertido
//Indicar su tipo de dato
//Indicar cuántos caracteres tiene
let numeroCasa = 456
let numeroCasaTexto = String(numeroCasa)

console.log(`Número convertido: ${numeroCasaTexto}, tipo: ${typeof numeroCasaTexto}, cantidad de caracteres: ${numeroCasaTexto.length}`)

//7️⃣ Identificación personal extendida
//Crea las variables:
//nombre: Diego
//apellido: Rojas
//Debes mostrar un mensaje que:
//M//uestre el nombre completo
//Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
//Muestre todo en MAYÚSCULAS
let nombre = "Diego"
let apellido = "Rojas"

let completo = `${nombre} ${apellido}`

console.log(`Nombre completo: ${completo}, caracteres: ${completo.length}, en mayúsculas: ${completo.toUpperCase()}`);

//8️⃣ Verificación de contenido
//Crea la variable:
//frase: Hoy aprenderemos sobre strings
//Debes mostrar:
//Si contiene la palabra "strings"
//La frase en MAYÚSCULAS
//La cantidad de caracteres

let frase = "Hoy aprenderemos sobre strings"

console.log(`¿Contiene "strings"?: ${frase.includes("strings")}, en mayúsculas: ${frase.toUpperCase()}, cantidad de caracteres: ${frase.length}`);

//9️⃣ Comparación de formatos
//Crea la variable:
//texto: Programar es divertido
//Debes mostrar en un solo mensaje:
//El texto original
//El texto en minúsculas
//El texto en mayúsculas
//La cantidad de caracteres
let texto = "Programar es divertido"

console.log(`Original: ${texto}, minúsculas: ${texto.toLowerCase()}, mayúsculas: ${texto.toUpperCase()}, caracteres: ${texto.length}`);


//🔟 Desafío completo integrado
//Crea las variables:
//curso: 4C
//anio: 2026
//Debes mostrar un mensaje que:
//Indique el curso y año
//Convierta el año a texto
//Indique el tipo de dato del año convertido
//Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C"
let anio = 2026

let anioTexto = String(anio)

console.log(`Curso: ${curso}, año: ${String(anio)}, tipo: ${typeof String(anio)}`.toUpperCase())

















