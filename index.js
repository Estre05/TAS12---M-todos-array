'Use strcit';
// EJRCICIO 1

// Crear una función que filtre los valores mayores a 10.00 
// y redondearlos a 2 decimales como string. Retornando un array. 

function filterNumbers(arr) {
    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10.00) {
            let redondeado = Math.round(arr[i] * 100) / 100;
            let redondeado2 = redondeado.toString();
            resultado.push(redondeadoStr);
        }
    }

    return resultado;
}
let arr = [13.676767, 3.123432, 5.34543543, 10.3452345];
let result = filterNumbers(arr);
alert(result);


// EJERCICIO 2
// Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software.  
// Crear una función que reciba como parámetro el array de las asignaturas y un numero que indique el nivel. 
// La función debe retornar solo las asignaturas que pertenecen a ese nivel. 

let subject = [
{
    id: 1,
    subject: 'MATEMÁTICAS COMPUTACIONAL',
    types: 'BASICA',
    credits: 3,
    level: 1,
},
{
    id: 1,
    subject: 'METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS',
    types: 'BASICA',
    credits: 3,
    level: 1,
},
{
    id: 1,
    subject: 'BASE DE DATOS RELACIONALES',
    types: 'BASICA',
    credits: 2,
    level: 1,
},
{
    id: 1,
    subject: 'LAS TICS Y SOPORTE EN HARDWARE',
    types: 'BASICA',
    credits: 2,
    level: 1,
},
{
    id: 1,
    subject: 'PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS',
    types: 'BASICA',
    credits: 2,
    level: 1,
},
{
    id: 1,
    subject: 'PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO',
    types: 'BASICA',
    credits: 1,
    level: 1,
},
{
    id: 1,
    subject: 'SISTEMAS DIGITALES PROGRAMABLES',
    types: 'PROFESIONAL',
    credits: 3,
    level: 2,
},
{
    id: 1,
    subject: 'SISTEMAS DE INFORMACIÓN',
    types: 'PROFESIONAL',
    credits: 3,
    level: 2,
},
{
    id: 1,
    subject: 'PROGRAMACIÓN ORIENTADA A OBJETOS',
    types: 'PROFESIONAL',
    credits: 2,
    level: 2,
},
{
    id: 1,
    subject: 'PROCESOS CONTABLES',
    types: 'PROFESIONAL',
    credits: 2,
    level: 2,
},
{
    id: 1,
    subject: 'GESTION DE BASE DE DATOS',
    types: 'PROFESIONAL',
    credits: 2,
    level: 2,
},
{
    id: 1,
    subject: 'PROYECTO INTEGRADOR DE SABERES:CREACIÓN DE APLICACIONES DE ESCRITORIO CON BASE DE DATOS',
    types: 'PROFESIONAL',
    credits: 1,
    level: 2,
},
{
    id: 1,
    subject: 'PROGRAMACION DE APLICACIONES PARA DISPOSITIVOS MOVILES',
    types: 'PROFESIONAL',
    credits: 3,
    level: 3,
},
{
    id: 1,
    subject: 'PROBABILIDADES Y PROCESOS ESTOCÁSTICOS',
    types: 'PROFESIONAL',
    credits: 3,
    level: 3,
},
{
    id: 1,
    subject: 'HERRAMIENTAS INFORMÁTICAS PARA EL DESPLIEGUE DE DIAGRAMAS',
    types: 'PROFESIONAL',
    credits: 2,
    level: 3,
},
{
    id: 1,
    subject: 'APLICACIONES TECNOLOGICAS AUTONOMAS',
    types: 'PROFESIONAL',
    credits: 2,
    level: 3,
},
{
    id: 1,
    subject: 'SOFTWARE APLICATIVO',
    types: 'PROFESIONAL',
    credits: 2,
    level: 3,
},
{
    id: 1,
    subject: 'PROYECTO INTEGRADOR DE SABERES CREACION DE APLICACIONES WEB CON BASE A LA ARQUITECTURA CLIENTE SERVIDOR',
    types: 'PROFESIONAL',
    credits: 1,
    level: 3,
},
{
    id: 1,
    subject: 'COMUNICACIONES Y REDES DE DATOS',
    types: 'PROFESIONAL',
    credits: 3,
    level: 4,
},
{
    id: 1,
    subject: 'SISTEMAS OPERATIVOS',
    types: 'PROFESIONAL',
    credits: 2,
    level: 4,
},
{
    id: 1,
    subject: 'HERRAMIENTAS CASE',
    types: 'PROFESIONAL',
    credits: 2,
    level: 4,
},
{
    id: 1,
    subject: 'DERECHO Y SEGURIDAD INFORMATICA',
    types: 'PROFESIONAL',
    credits: 2,
    level: 4,
},
{
    id: 1,
    subject: 'TENDENCIAS TECNOLÓGICAS',
    types: 'PROFESIONAL',
    credits: 2,
    level: 4,
},
{
    id: 1,
    subject: 'DESARROLLO DE PROYECTOS DE SOFTWARE',
    types: 'UNIDAD DE INTEGRACIÓN CURRICULAR',
    credits: 3,
    level: 4,
},
]

function filtersubjects(subject, level) {
    let namesubjects = [];

    for (let i = 0; i < subject.length; i++) {
        if (subject[i].level === level) {
            namesubjects.push(subject[i].subject);
        }
    }

    return namesubjects;
}
// Ejemplo de uso de la función
let levelnumber = 1;
let result2 = filtersubjects(subject, levelnumber);
alert(result2);

// EJERCICIO 3
// Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. 
// La función debe recibir el array y devolver únicamente la parte entera del promedio.

function calculateNumbers(nums) {
    if (nums.length === 0) {
        return 0; 
    }
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
        suma += nums[i];
    }
    let average = suma / nums.length;
    return Math.floor(average);
}
let nums = [85, 90, 92, 88, 95];
let average2 = calculateNumbers(nums);
alert("El promedio de las calificaciones es: " + average2); 
