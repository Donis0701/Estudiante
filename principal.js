/* Analisis
-Se tienen los siguientes datos de un estudiante:
-Cedula,nota1,nota2 y nota3.Se requiere conocer 
-la nota final del estudiante que es la suma de
-todas sus nota y hacer un reporte que muestre su 
-cedula, sus tres notas y su nota final */
import CL_IEstudiante from "./CL_IEstudiante.js";
import CL_Estudiante from "./CL_Estudiante.js";

let IEstud = new CL_IEstudiante(),
c = IEstud.leerCedula(),
n1 = IEstud.leerNota1(),
n2 = IEstud.leerNota2(),
n3 = IEstud.leerNota3()

estud = new CL_Estudiante(c,n1,n2,n3),
salida = document.getElementById("salida")
salida.innerHTML = IEstud.reporteEstudiante(estud.cedula,estud.nota1,estud.nota2,estud.nota3,estud.calcularNotaFinal())
