import Estudiante from "./CL_Estudiante.js"


const nombre = prompt('Ingrese el nombre del estudiante: ');
const apellido = prompt('Ingrese el apellido del estudiante: ');
const cedula = prompt('Ingrese la cedula del estudiante: ');
const nota1 = prompt('Ingrese la primera nota: ');
const nota2 = prompt('Ingrese la segunda nota: ');
const nota3 = prompt('Ingrese la tercera nota: ');

let estudiante = new Estudiante(nombre, apellido, cedula, nota1, nota2, nota3);

let mostrarReporte = document.querySelector('#reporte');

let reporte = `
Cedula: ${estudiante.cedula}
Nota 1: ${estudiante.nota1}
Nota 2: ${estudiante.nota2}
Nota 3: ${estudiante.nota3}
Nota final: ${estudiante.sumarNotas()}
`;

mostrarReporte.innerText = reporte;